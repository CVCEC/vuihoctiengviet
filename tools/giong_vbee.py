#!/usr/bin/env python3
"""Đọc các câu thiếu tiếng bằng giọng nhân bản (clone) trên Vbee AIVoice. Chạy trên GitHub Actions.

Mỗi câu một lần gọi (không cần cắt lô), Whisper nghe lại từng câu như với Gemini.
Câu đã đọc bằng Gemini sẽ được đọc lại bằng Vbee để cả trang chỉ có một giọng (giong-ai/nguon.tsv ghi máy đã đọc).

Biến môi trường:
  VBEE_APP_ID, VBEE_TOKEN   lấy ở studio.vbee.vn/apps → Tích hợp API (GitHub secret)
  VBEE_GIONG                mã hoặc một phần tên giọng; bỏ trống = giọng cá nhân (PERSONAL) đầu tiên
  VBEE_TOC                  tốc độ đọc 0.25–1.9 (mặc định 0.9: chậm hơn một chút cho trẻ)
  TOI_DA_CAU                số câu tối đa trong lần chạy (mặc định 2000)
  CHI_BAI, PHUT             như tools/giong_ai.py
"""
import os, pathlib, sys, tempfile, time

import requests

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import giong_ai as g  # dùng chung: nghe lại, so chữ, lưu, nhật ký…

APP = os.environ.get('VBEE_APP_ID', '').strip()
TOKEN = os.environ.get('VBEE_TOKEN', '').strip()
GIONG = os.environ.get('VBEE_GIONG', '').strip()
TOC = float(os.environ.get('VBEE_TOC') or 0.9)
TOI_DA = int(os.environ.get('TOI_DA_CAU') or 2000)
NGUON = g.OUT / 'nguon.tsv'          # mã → máy đã đọc (gemini | vbee)
LOI_V = g.OUT / 'loi-vbee.tsv'
HDR = lambda: {'Authorization': 'Bearer ' + TOKEN, 'App-Id': APP, 'Content-Type': 'application/json'}


def chon_giong():
    """Tìm giọng cá nhân (giọng nhân bản) trong tài khoản."""
    ds, cursor = [], None
    for _ in range(10):
        p = {'voice_ownership': 'PERSONAL', 'voiceOwnership': 'PERSONAL', 'limit': 100}
        if cursor: p['cursor'] = cursor
        r = requests.get('https://vbee.vn/api/public/v1/voices', params=p, headers=HDR(), timeout=60)
        if r.status_code in (401, 403):
            raise g.Dung('Vbee không nhận App ID / token (' + str(r.status_code) + '). Kiểm tra secret VBEE_APP_ID và VBEE_TOKEN.')
        j = r.json()
        res = j.get('result') or {}
        ds += res.get('voices') or []
        pg = res.get('pagination') or {}
        if not pg.get('has_next_page'): break
        cursor = pg.get('next_cursor')
    g.ghi('Giọng cá nhân trên Vbee: ' + '; '.join(f"{v.get('name')} ({v.get('code')}, hệ số {v.get('credit_factor')})" for v in ds))
    if GIONG:
        for v in ds:
            if GIONG == v.get('code') or GIONG.lower() in (v.get('name') or '').lower():
                return v
        if not ds:
            return {'code': GIONG, 'name': GIONG}   # coi như mã giọng
        raise g.Dung(f'Không thấy giọng "{GIONG}" trong tài khoản Vbee.')
    if not ds:
        raise g.Dung('Tài khoản Vbee chưa có giọng cá nhân (giọng nhân bản). Hãy tạo giọng trước, hoặc ghi mã giọng vào VBEE_GIONG trong giong-ai/chay.txt.')
    return ds[0]


def doc(text, code):
    """Trả về bytes mp3. Thử chế độ sync; nếu giọng không hỗ trợ thì dùng async rồi hỏi kết quả."""
    body = {'text': text, 'voiceCode': code, 'outputFormat': 'mp3', 'bitrate': 128, 'speed': TOC}
    for lan in range(6):
        r = requests.post('https://api.vbee.vn/v1/tts', headers=HDR(), json=dict(body, mode='sync'), timeout=180)
        ct = r.headers.get('Content-Type', '')
        if r.status_code == 200 and ('audio' in ct or 'octet' in ct or r.content[:3] == b'ID3' or r.content[:1] == b'\xff'):
            if len(r.content) > 1000:
                return r.content
            raise ValueError('tiếng trả về quá ngắn')
        msg = r.text[:400]
        if r.status_code == 401:
            raise g.Dung('Vbee không nhận App ID / token. Kiểm tra secret VBEE_APP_ID và VBEE_TOKEN (token có thể đã hết hạn).')
        if r.status_code == 429 or 'MAX_LIMIT' in msg:
            time.sleep(5 * (lan + 1)); continue
        if r.status_code == 400 and ('credit' in msg.lower() or 'ký tự' in msg.lower()):
            raise g.Dung('Tài khoản Vbee đã hết ký tự: ' + msg[:200])
        if r.status_code == 400 and 'voice' in msg.lower():
            return doc_async(body)
        if r.status_code >= 500:
            time.sleep(10 * (lan + 1)); continue
        raise ValueError(f'{r.status_code}: {msg}')
    raise ValueError('Vbee bận, thử nhiều lần không được')


def doc_async(body):
    r = requests.post('https://api.vbee.vn/v1/tts', headers=HDR(),
                      json=dict(body, mode='async', webhookUrl='https://vuihoctiengviet.cvcec.org/giong-ai/'), timeout=120)
    j = r.json() if r.headers.get('Content-Type', '').startswith('application/json') else {}
    rid = j.get('requestId') or (j.get('result') or {}).get('requestId')
    if not rid:
        raise ValueError(f'async {r.status_code}: {r.text[:300]}')
    for _ in range(90):
        time.sleep(2)
        q = requests.get(f'https://api.vbee.vn/v1/tts/requests/{rid}', headers=HDR(), timeout=60).json()
        q = q.get('result', q)
        st = q.get('status')
        if st == 'COMPLETED' and q.get('audioLink'):
            a = requests.get(q['audioLink'], timeout=120)
            if a.status_code == 200 and len(a.content) > 1000:
                return a.content
            raise ValueError('không tải được file tiếng')
        if st and st not in ('PROCESSING', 'PENDING', 'IN_PROGRESS', 'QUEUED'):
            raise ValueError('Vbee báo lỗi: ' + str(q)[:300])
    raise ValueError('chờ Vbee quá lâu')


def main():
    g.AM.mkdir(exist_ok=True)
    rows = []
    for l in g.TSV.read_text(encoding='utf-8').splitlines()[1:]:
        ma, giong, chu, bai = (l.split('\t') + ['', '', '', ''])[:4]
        rows.append({'ma': ma, 'chu': chu, 'bai': bai.split(',')})
    bo = set((g.OUT / 'bo.txt').read_text(encoding='utf-8').split()) if (g.OUT / 'bo.txt').exists() else set()
    nguon = g.doc_tsv(NGUON, 1)
    kt = g.doc_tsv(g.KT, 2)
    loi = g.doc_tsv(LOI_V, 2)
    tong = len(rows)

    def can_doc(r):
        return r['ma'] not in bo and (nguon.get(r['ma']) or [''])[0] != 'vbee' and int((loi.get(r['ma']) or ['0'])[0] or 0) < 2

    viec = [r for r in rows if can_doc(r)]
    if g.CHI:
        viec = [r for r in viec if any(b in g.CHI for b in r['bai'])]
    viec.sort(key=lambda r: (min(g.bai_key(b) for b in r['bai']), r['ma']))
    moi, ky_tu, ghi_chu, giong = 0, 0, '', None

    def tom_tat():
        so_vbee = sum(1 for r in rows if (nguon.get(r['ma']) or [''])[0] == 'vbee' and (g.AM / (r['ma'] + '.mp3')).exists())
        so_co = sum(1 for r in rows if (g.AM / (r['ma'] + '.mp3')).exists())
        can = sum(1 for k, v in kt.items() if (nguon.get(k) or [''])[0] == 'vbee' and g.diem_cua(v) < 0.75)
        return (f"# Giọng đọc AI – trạng thái\n\n"
                f"- Lần chạy gần nhất: {time.strftime('%Y-%m-%d %H:%M', time.gmtime())} UTC\n"
                f"- Máy đọc: Vbee AIVoice · giọng {(giong or {}).get('name') or GIONG or '(chưa chọn được)'} · tốc độ {TOC}\n"
                f"- Đã đọc bằng giọng Vbee: **{so_vbee} / {tong}** câu (lần này thêm {moi}, khoảng {ky_tu} ký tự)\n"
                f"- Có tiếng (Vbee hoặc Gemini cũ): {so_co} / {tong}\n"
                f"- Câu Whisper nghe khác nhiều (cần nghe kỹ): {can}\n"
                + (f"- Ghi chú: {ghi_chu}\n" if ghi_chu else ''))

    if not (APP and TOKEN):
        ghi_chu = 'Chưa có khoá Vbee: thêm secret VBEE_APP_ID và VBEE_TOKEN trong GitHub → Settings → Secrets and variables → Actions.'
        g.luu(tom_tat()); return
    if not viec:
        print('Không còn câu nào cần đọc.'); return
    tmp = pathlib.Path(tempfile.mkdtemp())
    try:
        giong = chon_giong()
        g.ghi('Dùng giọng:', giong.get('name'), giong.get('code'))
        for i, r in enumerate(viec):
            if time.time() > g.HAN or moi >= TOI_DA:
                ghi_chu = 'Dừng vì đủ thời gian / số câu của lần chạy này – lần sau làm tiếp.'; break
            text = g.doc_cho_may(r['chu'])
            try:
                raw = doc(text, giong['code'])
                src = tmp / 'v.mp3'; src.write_bytes(raw)
                out = tmp / (r['ma'] + '.mp3')
                ff_dur = float(g.subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(src)],
                                                capture_output=True, text=True, check=True).stdout.strip())
                g.xuat_mp3(src, 0, ff_dur, out)
                nghe_duoc = g.nghe(out)
            except ValueError as e:
                n = int((loi.get(r['ma']) or ['0'])[0] or 0) + 1
                loi[r['ma']] = [str(n), str(e)[:200].replace('\t', ' ').replace('\n', ' ')]
                g.ghi(f"Lỗi: {r['chu']} – {str(e)[:160]}")
                g.ghi_tsv(LOI_V, 'ma\tlan\tly_do', loi); continue
            diem = g.giong_nhau(text, nghe_duoc)
            out.replace(g.AM / (r['ma'] + '.mp3'))
            kt[r['ma']] = [nghe_duoc.replace('\t', ' '), str(diem)]
            nguon[r['ma']] = ['vbee']
            loi.pop(r['ma'], None)
            moi += 1; ky_tu += len(text)
            g.ghi(f"{diem:.2f}  {r['chu']}  |  {nghe_duoc}")
            if moi % 25 == 0:
                g.ghi_tsv(g.KT, 'ma\tnghe\tdiem', kt); g.ghi_tsv(NGUON, 'ma\tmay', nguon); g.ghi_tsv(LOI_V, 'ma\tlan\tly_do', loi)
                g.luu(tom_tat())
    except g.Dung as e:
        ghi_chu = str(e)
    except Exception as e:
        import traceback; traceback.print_exc()
        ghi_chu = 'Lỗi khi chạy: ' + repr(e)[:400].replace('\n', ' ')
    finally:
        g.ghi_tsv(g.KT, 'ma\tnghe\tdiem', kt); g.ghi_tsv(NGUON, 'ma\tmay', nguon)
        if loi or LOI_V.exists(): g.ghi_tsv(LOI_V, 'ma\tlan\tly_do', loi)
        if not ghi_chu and not [r for r in rows if can_doc(r)]:
            ghi_chu = 'Đã đọc xong mọi câu bằng giọng Vbee.'
        g.luu(tom_tat())
        print(tom_tat())


if __name__ == '__main__':
    main()
