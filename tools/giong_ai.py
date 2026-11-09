#!/usr/bin/env python3
"""Tạo giọng đọc AI (Google Gemini) cho những câu sách không có file thu âm. Chạy trên GitHub Actions.

Đọc giong-ai/can-doc.tsv (tools/thieu_tieng.js tạo ra) → am-ai/<mã>.mp3.
Mỗi lượt gọi đọc một lô nhiều câu (gói miễn phí chỉ có vài lượt mỗi ngày), nghỉ giữa các câu,
rồi cắt theo các khoảng lặng dài nhất. Whisper nghe lại từng câu; câu nghe khác chữ được đánh dấu để người nghe kiểm tra.

Biến môi trường:
  GEMINI_API_KEY   khoá API (GitHub secret)
  GIONG_VUNG       bac | nam (mặc định bac)
  LO               số câu mỗi lượt gọi (mặc định 25)
  TOI_DA_LUOT      số lượt gọi tối đa trong lần chạy này (mặc định 400)
  PHUT             thời gian chạy tối đa, phút (mặc định 300)
  MODEL            tên mô hình (tuỳ chọn; mặc định thử lần lượt các mô hình đọc của Gemini)
  CHI_BAI          chỉ làm câu của những bài này, ví dụ "quyen-1/bai-01,quyen-1/bai-02" (để chạy thử)
"""
import base64, datetime, difflib, json, os, pathlib, re, subprocess, sys, tempfile, time, unicodedata
import requests

ROOT = pathlib.Path(__file__).resolve().parent.parent
TSV = ROOT / 'giong-ai/can-doc.tsv'
AM = ROOT / 'am-ai'
OUT = ROOT / 'giong-ai'
KT = OUT / 'kiem-tra.tsv'      # mã, Whisper nghe được, điểm giống (0–1)
LOI = OUT / 'loi.tsv'          # mã, lần lỗi, lý do
TT = OUT / 'trang-thai.md'

KEY = os.environ.get('GEMINI_API_KEY', '').strip()
MODELS = [m for m in [os.environ.get('MODEL', '').strip(),
                      'gemini-3.1-flash-tts-preview', 'gemini-2.5-flash-preview-tts',
                      'gemini-2.5-flash-tts', 'gemini-2.5-pro-preview-tts'] if m]
LO = int(os.environ.get('LO') or 25)
TOI_DA = int(os.environ.get('TOI_DA_LUOT') or 400)
HAN = time.time() + 60 * int(os.environ.get('PHUT') or 300)
VUNG = (os.environ.get('GIONG_VUNG') or 'bac').strip().lower()
CHI = [x.strip() for x in (os.environ.get('CHI_BAI') or '').split(',') if x.strip()]
GIONG_VN = {'bac': 'a standard Northern Vietnamese (Hà Nội) accent', 'nam': 'a standard Southern Vietnamese (Sài Gòn) accent'}


NK = []  # nhật ký lần chạy → giong-ai/nhat-ky.txt


def ghi(*a):
    l = ' '.join(str(x) for x in a)
    print(l, flush=True); NK.append(l)


class Dung(Exception):
    """Dừng cả lần chạy (hết lượt, sai khoá…)."""


def nfc(s):
    return unicodedata.normalize('NFC', s)


def doc_tsv(p, n):
    d = {}
    if p.exists():
        for l in p.read_text(encoding='utf-8').splitlines()[1:]:
            f = l.split('\t')
            if f and f[0]:
                d[f[0]] = (f + [''] * n)[1:n]
    return d


def ghi_tsv(p, dau, d):
    p.write_text(dau + '\n' + ''.join('\t'.join([k] + [str(x) for x in v]) + '\n' for k, v in sorted(d.items())), encoding='utf-8')


def bai_key(b):
    m = re.match(r'quyen-(\d+)/bai-(\d+)', b)
    return (int(m.group(1)), int(m.group(2))) if m else (9, 99)


def doc_cho_may(t):
    """Chữ gửi cho máy đọc: bỏ nhãn a) b) c) đầu câu."""
    return re.sub(r'^\s*[a-eđ]\)\s*', '', t).strip()


def loi_nhac(cau):
    head = ("Read the following Vietnamese lines aloud for young children who are learning Vietnamese. "
            f"Use {GIONG_VN.get(VUNG, GIONG_VN['bac'])} and a warm, friendly, natural voice. Speak slowly and very clearly, "
            "pronouncing every tone carefully. Read each line exactly as written, once, in order, without adding, "
            "skipping or explaining anything.")
    if len(cau) > 1:
        head += " After each line, stay completely silent for two full seconds before reading the next line."
    return head + "\n\n" + "\n".join(cau)


# ---------- gọi Gemini ----------
model_dung = None


def goi(text, voice):
    """Trả về (pcm bytes, sample rate)."""
    global model_dung
    ds = [model_dung] if model_dung else MODELS
    loi_cuoi = ''
    for model in ds:
        for lan in range(7):
            url = f'https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent'
            body = {'contents': [{'parts': [{'text': text}]}],
                    'generationConfig': {'responseModalities': ['AUDIO'],
                                         'speechConfig': {'voiceConfig': {'prebuiltVoiceConfig': {'voiceName': voice}}}}}
            try:
                r = requests.post(url, headers={'x-goog-api-key': KEY, 'Content-Type': 'application/json'}, json=body, timeout=600)
            except requests.RequestException as e:
                loi_cuoi = f'mạng: {e}'; time.sleep(20 * (lan + 1)); continue
            if r.status_code == 200:
                j = r.json()
                pcm, rate = b'', 24000
                for c in j.get('candidates', [])[:1]:
                    for p in (c.get('content') or {}).get('parts', []):
                        d = p.get('inlineData') or p.get('inline_data')
                        if d and d.get('data'):
                            pcm += base64.b64decode(d['data'])
                            m = re.search(r'rate=(\d+)', d.get('mimeType', '') or d.get('mime_type', ''))
                            if m: rate = int(m.group(1))
                if not pcm:
                    raise ValueError('không có tiếng trả về: ' + json.dumps(j)[:300])
                model_dung = model
                return pcm, rate
            msg = r.text[:600]
            if r.status_code in (400, 404) and re.search(r'not found|not supported|is not available|unknown model|does not exist', msg, re.I):
                loi_cuoi = f'{model}: không dùng được'; break           # thử mô hình khác
            if r.status_code in (401, 403) or 'API_KEY_INVALID' in msg or 'API key not valid' in msg:
                raise Dung('Khoá API không dùng được (' + str(r.status_code) + '). Kiểm tra lại secret GEMINI_API_KEY.')
            if r.status_code == 429:
                if re.search(r'PerDay|per day|daily', msg, re.I):
                    raise Dung('Đã hết lượt trong ngày của gói hiện tại – lần chạy tự động ngày mai sẽ làm tiếp.')
                m = re.search(r'"retryDelay":\s*"(\d+)', r.text)
                time.sleep(int(m.group(1)) + 2 if m else 35); loi_cuoi = '429'; continue
            if r.status_code >= 500:
                time.sleep(15 * (lan + 1)); loi_cuoi = str(r.status_code); continue
            raise ValueError(f'{r.status_code}: {msg}')
        else:
            raise ValueError('thử nhiều lần không được: ' + loi_cuoi)
    raise Dung('Không tìm được mô hình đọc của Gemini dùng được với khoá này (' + loi_cuoi + ').')


# ---------- âm thanh ----------
def ff(*a):
    subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', *a], check=True)


def khoang_lang(wav, nguong='-40dB', d='0.25'):
    p = subprocess.run(['ffmpeg', '-hide_banner', '-i', str(wav), '-af', f'silencedetect=noise={nguong}:d={d}', '-f', 'null', '-'],
                       capture_output=True, text=True)
    s = [float(x) for x in re.findall(r'silence_start: ([\d.]+)', p.stderr)]
    e = [float(x) for x in re.findall(r'silence_end: ([\d.]+)', p.stderr)]
    dur = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(wav)],
                               capture_output=True, text=True, check=True).stdout.strip())
    if len(e) < len(s): e.append(dur)
    return list(zip(s, e)), dur


def cat_lo(wav, n):
    """Chia file đọc n câu thành n đoạn theo n-1 khoảng lặng dài nhất. Trả về [(đầu, cuối)] hoặc None."""
    ls, dur = khoang_lang(wav)
    trong = [(a, b) for a, b in ls if a > 0.15 and b < dur - 0.15]
    if n == 1:
        return [(0.0, dur)]
    if len(trong) < n - 1:
        return None
    theo_do_dai = sorted(trong, key=lambda x: x[1] - x[0], reverse=True)
    chon, con = theo_do_dai[:n - 1], theo_do_dai[n - 1:]
    ngan_nhat = min(b - a for a, b in chon)
    if ngan_nhat < 0.55 or (con and ngan_nhat < 1.3 * max(b - a for a, b in con)):
        return None
    chon.sort()
    bien = [0.0] + [x for ab in chon for x in ab] + [dur]
    return [(max(0.0, bien[2 * i] - (0.10 if i else 0)), min(dur, bien[2 * i + 1] + 0.15)) for i in range(n)]


def cat_theo_chu(wav, cau):
    """Dùng mốc thời gian từng chữ của Whisper để tìm chỗ chuyển câu, rồi cắt ở khoảng lặng gần đó."""
    nap_whisper()
    segs, _ = _whisper.transcribe(str(wav), language='vi', beam_size=5, word_timestamps=True, condition_on_previous_text=False)
    rec = []  # (chữ, đầu, cuối)
    for sg in segs:
        for w in (sg.words or []):
            for t in chuan(w.word):
                rec.append((t, w.start, w.end))
    exp, dong = [], []
    for i, c in enumerate(cau):
        for t in chuan(c):
            exp.append(t); dong.append(i)
    if not rec or not exp:
        return None
    sm = difflib.SequenceMatcher(None, exp, [r[0] for r in rec], autojunk=False)
    dau, cuoi = [None] * len(cau), [None] * len(cau)
    for blk in sm.get_matching_blocks():
        for k in range(blk.size):
            i = dong[blk.a + k]; t0, t1 = rec[blk.b + k][1], rec[blk.b + k][2]
            dau[i] = t0 if dau[i] is None else min(dau[i], t0)
            cuoi[i] = t1 if cuoi[i] is None else max(cuoi[i], t1)
    if any(x is None for x in dau):
        return None
    ls, dur = khoang_lang(wav, d='0.15')
    doan = []
    for i in range(len(cau)):
        a = 0.0 if i == 0 else doan[-1][2]
        if i == len(cau) - 1:
            doan.append((a, dur, dur)); break
        if dau[i + 1] <= cuoi[i]:
            return None
        gan = [(x, y) for x, y in ls if y > cuoi[i] - 0.3 and x < dau[i + 1] + 0.3]
        if gan:
            x, y = max(gan, key=lambda z: z[1] - z[0])
            ket, bat = x + 0.15, max(x, y - 0.10)
        else:
            m = (cuoi[i] + dau[i + 1]) / 2; ket, bat = m, m
        doan.append((a, ket, bat))
    return [(a, b) for a, b, _ in doan]


def xuat_mp3(wav, a, b, out):
    ff('-ss', f'{a:.3f}', '-to', f'{b:.3f}', '-i', str(wav), '-af',
       'silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.08,areverse,'
       'silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.15,areverse,'
       'afade=t=in:d=0.02,loudnorm=I=-18:TP=-1.5:LRA=11',
       '-ar', '24000', '-ac', '1', '-b:a', '64k', str(out))


# ---------- Whisper nghe lại ----------
_whisper = None


def nap_whisper():
    global _whisper
    if _whisper is None:
        from faster_whisper import WhisperModel
        _whisper = WhisperModel('medium', device='cpu', compute_type='int8')


def nghe(mp3):
    nap_whisper()
    segs, _ = _whisper.transcribe(str(mp3), language='vi', beam_size=5, vad_filter=False, condition_on_previous_text=False)
    return ' '.join(s.text.strip() for s in segs).strip()


def chuan(t):
    t = nfc(t).lower()
    t = re.sub(r'[^\w\s]', ' ', t)
    return t.split()


def giong_nhau(a, b):
    return round(difflib.SequenceMatcher(None, chuan(a), chuan(b)).ratio(), 2)


# ---------- lưu lên GitHub ----------
def luu(tom_tat):
    TT.write_text(tom_tat, encoding='utf-8')
    (OUT / 'nhat-ky.txt').write_text('\n'.join(NK[-600:]) + '\n', encoding='utf-8')
    subprocess.run(['node', 'tools/thieu_tieng.js', '--gan'], cwd=ROOT, check=True)
    subprocess.run([sys.executable, 'tools/tao_trang.py'], cwd=ROOT, check=True, stdout=subprocess.DEVNULL)
    subprocess.run(['git', 'add', 'am-ai', 'giong-ai', 'quyen-1', 'quyen-2'], cwd=ROOT, check=True)
    if subprocess.run(['git', 'diff', '--cached', '--quiet'], cwd=ROOT).returncode == 0:
        return
    subprocess.run(['git', 'commit', '-q', '-m', 'Giọng đọc AI: thêm câu cho các bài'], cwd=ROOT, check=True)
    for i in range(6):
        if subprocess.run(['git', 'pull', '-q', '--rebase'], cwd=ROOT).returncode == 0 and \
           subprocess.run(['git', 'push', '-q'], cwd=ROOT).returncode == 0:
            return
        time.sleep(5 + 3 * i)
    raise RuntimeError('không đẩy lên được')


def main():
    AM.mkdir(exist_ok=True)
    rows = []
    for l in TSV.read_text(encoding='utf-8').splitlines()[1:]:
        ma, giong, chu, bai = (l.split('\t') + ['', '', '', ''])[:4]
        rows.append({'ma': ma, 'giong': giong, 'chu': chu, 'bai': bai.split(',')})
    bo = set((OUT / 'bo.txt').read_text(encoding='utf-8').split()) if (OUT / 'bo.txt').exists() else set()
    kt = doc_tsv(KT, 2)
    loi = doc_tsv(LOI, 2)
    tong = len(rows)

    def con_lai():
        return [r for r in rows if r['ma'] not in bo and not (AM / (r['ma'] + '.mp3')).exists()
                and int((loi.get(r['ma']) or ['0'])[0] or 0) < 2]

    viec = con_lai()
    if CHI:
        viec = [r for r in viec if any(b in CHI for b in r['bai'])]
    viec.sort(key=lambda r: (min(bai_key(b) for b in r['bai']), r['ma']))

    luot, moi, ghi_chu = 0, 0, ''
    tmp = pathlib.Path(tempfile.mkdtemp())

    def tom_tat():
        xong = sum(1 for r in rows if (AM / (r['ma'] + '.mp3')).exists())
        can = sum(1 for k, v in kt.items() if (AM / (k + '.mp3')).exists() and float(v[1] or 0) < 0.75)
        return (f"# Giọng đọc AI – trạng thái\n\n"
                f"- Lần chạy gần nhất: {datetime.datetime.utcnow():%Y-%m-%d %H:%M} UTC\n"
                f"- Mô hình: {model_dung or '(chưa gọi được)'} · giọng {'miền Nam' if VUNG == 'nam' else 'miền Bắc'}\n"
                f"- Đã có tiếng: **{xong} / {tong}** câu (lần này thêm {moi}, dùng {luot} lượt gọi)\n"
                f"- Câu Whisper nghe hơi khác chữ (cần nghe kỹ): {can}\n"
                f"- Câu bỏ qua theo yêu cầu: {len(bo)} · câu lỗi: {sum(1 for v in loi.values() if int(v[0] or 0) >= 2)}\n"
                + (f"- Ghi chú: {ghi_chu}\n" if ghi_chu else ''))

    if not KEY:
        ghi_chu = 'Chưa có khoá: thêm secret GEMINI_API_KEY trong Settings → Secrets and variables → Actions.'
        luu(tom_tat()); return
    if not viec:
        print('Không còn câu nào cần đọc.'); return

    # chia lô theo giọng
    lo = []
    for giong in sorted({r['giong'] for r in viec}, key=lambda g: min(i for i, r in enumerate(viec) if r['giong'] == g)):
        ds = [r for r in viec if r['giong'] == giong]
        for i in range(0, len(ds), LO):
            lo.append(ds[i:i + LO])
    lo.sort(key=lambda x: min(viec.index(r) for r in x))

    try:
        hang = list(lo)
        while hang:
            if time.time() > HAN or luot >= TOI_DA:
                ghi_chu = 'Dừng vì đủ thời gian / số lượt của lần chạy này – lần sau làm tiếp.'; break
            nhom = hang.pop(0)
            cau = [doc_cho_may(r['chu']) for r in nhom]
            pcm, loi_goi = None, None
            for thu in range(2):            # Gemini đôi khi không trả tiếng ("audio stream could not be completed"): gọi lại một lần
                if luot >= TOI_DA: break
                luot += 1                   # mỗi lần gọi đều tính vào lượt trong ngày, kể cả lần hỏng
                try:
                    pcm, rate = goi(loi_nhac(cau), nhom[0]['giong']); break
                except ValueError as e:
                    loi_goi = e; ghi(f'Lô {len(nhom)} câu – Gemini không trả tiếng: {str(e)[:160]}')
            if pcm is None:
                if loi_goi is None:
                    hang.insert(0, nhom); continue   # hết lượt của lần chạy – vòng lặp sẽ dừng
                for r in nhom:
                    n = int((loi.get(r['ma']) or ['0'])[0] or 0) + (1 if len(nhom) == 1 else 0)
                    loi[r['ma']] = [str(n), str(loi_goi)[:200].replace('\t', ' ').replace('\n', ' ')]
                if len(nhom) > 1:   # thử lại từng nửa
                    h = len(nhom) // 2; hang[:0] = [nhom[:h], nhom[h:]]
                ghi_tsv(LOI, 'ma\tlan\tly_do', loi); continue
            for r in nhom:
                loi.pop(r['ma'], None)
            raw = tmp / 'lo.pcm'; raw.write_bytes(pcm)
            wav = tmp / 'lo.wav'
            ff('-f', 's16le', '-ar', str(rate), '-ac', '1', '-i', str(raw), str(wav))
            doan = cat_lo(wav, len(nhom))
            if doan is None and len(nhom) > 1:
                doan = cat_theo_chu(wav, cau)
                ghi(f'Lô {len(nhom)} câu: khoảng lặng chưa rõ, cắt theo mốc chữ của Whisper' + ('' if doan else ' – không được'))
            if doan is None:
                ghi(f'Lô {len(nhom)} câu không cắt được, chia đôi để đọc lại')
                if len(nhom) > 1:
                    h = len(nhom) // 2; hang[:0] = [nhom[:h], nhom[h:]]
                continue
            kq = []
            for r, (a, b) in zip(nhom, doan):
                out = tmp / (r['ma'] + '.mp3')
                xuat_mp3(wav, a, b, out)
                nghe_duoc = nghe(out)
                kq.append((r, out, nghe_duoc, giong_nhau(doc_cho_may(r['chu']), nghe_duoc)))
            kem = sum(1 for x in kq if x[3] < 0.5)
            if len(nhom) > 1 and kem > max(2, len(nhom) * 0.3):
                ghi(f'Lô {len(nhom)} câu có {kem} câu lệch nhiều – có thể cắt sai, chia đôi để đọc lại')
                h = len(nhom) // 2; hang[:0] = [nhom[:h], nhom[h:]]
                continue
            for r, out, nghe_duoc, diem in kq:
                out.replace(AM / (r['ma'] + '.mp3'))
                kt[r['ma']] = [nghe_duoc.replace('\t', ' '), str(diem)]
                moi += 1
                ghi(f"{diem:.2f}  {r['chu']}  |  {nghe_duoc}")
            ghi_tsv(KT, 'ma\tnghe\tdiem', kt)
            if luot % 4 == 0:
                luu(tom_tat())
    except Dung as e:
        ghi_chu = str(e)
    except Exception as e:  # ghi lỗi vào trang-thai.md để xem được mà không cần mở GitHub Actions
        import traceback; traceback.print_exc()
        ghi_chu = 'Lỗi khi chạy: ' + repr(e)[:400].replace('\n', ' ')
    finally:
        ghi_tsv(KT, 'ma\tnghe\tdiem', kt)
        if loi or LOI.exists(): ghi_tsv(LOI, 'ma\tlan\tly_do', loi)
        if not ghi_chu and not con_lai():
            ghi_chu = 'Đã đọc xong mọi câu.'
        luu(tom_tat())
        print(tom_tat())


if __name__ == '__main__':
    main()
