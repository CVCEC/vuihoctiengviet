/* Bộ máy bài "Vui học nâng cao" (Bậc 3–5) của Lộ trình 15+ – do CVCEC biên soạn (không lấy bài của các góc Làng học tập).
   Mỗi trang bài khai báo const BAI_HOC đầu script rồi gọi TC.chay(BAI_HOC).
   Khuôn bài (duyệt 26-11-2026, theo tài liệu tập huấn giáo viên của trường):
     Khởi động → Nghe → Từ ngữ (cần hiểu / cần dùng được) → Đọc hiểu (4 mức câu hỏi) → Ngữ pháp → Viết (bài mẫu, thang 0–3)
     → Viết thơ, vè (đếm tiếng, so vần) → Kết nối đời sống.
   Các loại phần:
     khoi-dong : { hoi: ["câu hỏi gợi mở", ...], giacQuan: ["Bạn nhìn thấy gì…", ...] }                 – không tính sao
     hoi-thoai : { nguoi: {A, B}, loi: [["A", "câu", "tệp.mp3"?], ...] }
     doc       : { doan: ["đoạn", ...] }
     tu-ngu    : { tu: [["từ", "giải nghĩa", "English", "hieu"|"dung"], ...] }
     ghi-nho   : { y: [..], viDu: [..] }
     chon      : { ma, cau: [{ muc?, hoi, chon: [..], dung, giai? }] }                                    – có sao
     xep       : { ma, lenh, cau: ["đúng thứ tự", ...] }                                                 – có sao
     viet      : { ma, de, goiY, tuNoi, mau, itNhatCau }                                                 – có sao, thang 0–3
     ve        : { ma, mau: ["câu vè", ...], lenh, soTieng, van, viDuDung }                              – có sao
     ket-noi   : { viec: ["nhiệm vụ", ...], lienKet?: { chu, href } }                                    – không tính sao
   Âm thanh: TTV.phat({ tep, chu }) (quy tắc 7). Kết quả: TTV.ghiKetQua({ bai, hoatDong, soTroChoi, diem, diemToiDa, sao, thoiGianGiay }).
   Sao lưu trên máy: khoá mới "vhtv:tc:<mã bài>" (không đụng khoá cũ). Bài viết của người học không được lưu. */
(function () {
  'use strict';
  const $ = (t, l, c) => { const e = document.createElement(t); if (l) e.className = l; if (c != null) e.textContent = c; return e; };
  const nfc = s => String(s || '').normalize('NFC');
  let B = null, KHOA = '', batDau = Date.now();

  const docSao = () => { try { return JSON.parse(localStorage.getItem(KHOA)) || {}; } catch (e) { return {}; } };
  const ghiSao = (ma, n) => { try { const s = docSao(); s[ma] = Math.max(s[ma] || 0, n); localStorage.setItem(KHOA, JSON.stringify(s)); } catch (e) {} };
  const soHoatDong = () => B.phan.filter(p => p.ma).length;

  function phat(chu, tep, nut) {
    const T = window.TTV;
    if (nut) { nut.classList.add('dang'); setTimeout(() => nut.classList.remove('dang'), 1200); }
    try { if (T && T.phat) return T.phat({ tep: tep ? 'audio/' + tep : null, chu }); if (T && T.giong) return T.giong.doc(chu); } catch (e) {}
  }
  function nutLoa(chu, tep, nhan) {
    const b = $('button', 'tc-loa', nhan || '🔊'); b.type = 'button'; b.setAttribute('aria-label', 'Nghe: ' + chu);
    b.addEventListener('pointerup', () => phat(chu, tep, b));
    return b;
  }
  function ketQua(ma, diem, toi) {
    const sao = diem >= toi * 0.9 ? 3 : diem >= toi * 0.6 ? 2 : 1;
    ghiSao(ma, sao); veSao();
    try { if (window.TTV && TTV.ghiKetQua) TTV.ghiKetQua({ bai: B.ma, hoatDong: ma, soTroChoi: soHoatDong(), diem, diemToiDa: toi, sao, thoiGianGiay: Math.round((Date.now() - batDau) / 1000) }); } catch (e) {}
    return sao;
  }
  function veSao() {
    const o = document.getElementById('tc-sao'); if (!o) return;
    const s = docSao(), tong = B.phan.filter(p => p.ma).reduce((a, p) => a + (s[p.ma] || 0), 0);
    o.textContent = '⭐ ' + tong + ' / ' + soHoatDong() * 3;
  }
  const phanHoi = (o, dung, chu) => { o.textContent = chu || (dung ? 'Đúng rồi!' : 'Thử lại nhé'); o.className = 'tc-ph ' + (dung ? 'dung' : 'sai'); };
  function nutLai(fn) { const b = $('button', 'tc-nut', '↻ Làm lại'); b.type = 'button'; b.addEventListener('pointerup', fn); return b; }

  /* ---------- tiếng Việt: tách tiếng, lấy vần (bỏ thanh và âm đầu) ---------- */
  const THANH = /[̣̀́̃̉]/g;
  const AM_DAU = ['ngh', 'ng', 'nh', 'ch', 'gh', 'gi', 'kh', 'ph', 'qu', 'th', 'tr', 'b', 'c', 'd', 'đ', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'x'];
  const tieng = s => nfc(s).toLowerCase().replace(/[^\p{L}\s]/gu, ' ').split(/\s+/).filter(Boolean);
  function van(t) {
    let x = nfc(t).toLowerCase().normalize('NFD').replace(THANH, '').normalize('NFC');
    for (const a of AM_DAU) if (x.startsWith(a) && x.length > a.length) { x = x.slice(a.length); break; }
    if (x === 'i' && /^gi/.test(nfc(t).toLowerCase())) x = 'i';
    return x;
  }

  /* ---------- các loại phần ---------- */
  const VE = {
    'khoi-dong'(p, the) {
      const u = $('ul', 'tc-y'); (p.hoi || []).forEach(h => u.append($('li', '', h))); the.append(u);
      if (p.giacQuan) { the.append($('p', 'tc-lenh', 'Nhắm mắt, nhớ lại một ngày Tết (hoặc một ngày lễ) mà bạn biết:'));
        const g = $('ul', 'tc-giac'); p.giacQuan.forEach(h => g.append($('li', '', h))); the.append(g); }
    },
    'hoi-thoai'(p, the) {
      the.append(nutLoa(p.loi.map(l => l[1]).join(' '), p.tepCaBai, '🔊 Nghe cả bài'));
      const ul = $('ul', 'tc-thoai');
      p.loi.forEach(([ai, cau, tep]) => {
        const li = $('li', 'tc-luot ' + (ai === 'A' ? 'trai' : 'phai'));
        li.append($('b', '', p.nguoi[ai] + ':'), $('span', '', ' ' + cau), nutLoa(cau, tep));
        ul.append(li);
      });
      if (p.anChu) { ul.hidden = true; const b = $('button', 'tc-nut', 'Hiện lời hội thoại'); b.type = 'button';
        b.addEventListener('pointerup', () => { ul.hidden = !ul.hidden; b.textContent = ul.hidden ? 'Hiện lời hội thoại' : 'Ẩn lời hội thoại'; }); the.append(b); }
      the.append(ul);
    },
    doc(p, the) {
      p.doan.forEach((d, i) => { const q = $('p', 'tc-doan', d); q.append(' ', nutLoa(d, (p.tep || [])[i])); the.append(q); });
    },
    'tu-ngu'(p, the) {
      [['hieu', 'Từ cần hiểu (đọc, nghe thấy là hiểu)'], ['dung', 'Từ cần dùng được (tự nói, tự viết được)']].forEach(([nhom, tieuDe]) => {
        const ds = p.tu.filter(x => (x[3] || 'hieu') === nhom); if (!ds.length) return;
        the.append($('h3', 'tc-h3', tieuDe));
        const ul = $('ul', 'tc-tu');
        ds.forEach(([tu, nghia, en]) => {
          const li = $('li'); li.append(nutLoa(tu), $('b', '', tu), $('span', '', ' – ' + nghia));
          if (en) { const g = $('button', 'tc-en', 'EN'); g.type = 'button'; const s = $('span', 'tc-en-chu', en); s.hidden = true; s.lang = 'en';
            g.addEventListener('pointerup', () => { s.hidden = !s.hidden; }); li.append(' ', g, s); }
          ul.append(li);
        });
        the.append(ul);
      });
    },
    'ghi-nho'(p, the) {
      const ul = $('ul', 'tc-y'); p.y.forEach(y => ul.append($('li', '', y))); the.append(ul);
      if (p.viDu) { const v = $('div', 'tc-vidu'); p.viDu.forEach(c => { const q = $('p', '', c); q.append(' ', nutLoa(c)); v.append(q); }); the.append(v); }
    },
    chon(p, the) {
      let i = 0, dung = 0, lanDau = true;
      const o = $('div'), ph = $('p', 'tc-ph'); the.append(o, ph);
      function cau() {
        o.textContent = ''; ph.textContent = ''; lanDau = true;
        if (i >= p.cau.length) { const s = ketQua(p.ma, dung, p.cau.length); o.append($('p', 'tc-xong', 'Xong! Đúng ngay lần đầu ' + dung + '/' + p.cau.length + ' câu · ' + '⭐'.repeat(s))); o.append(nutLai(() => { i = 0; dung = 0; cau(); })); return; }
        const c = p.cau[i];
        if (c.muc) o.append($('span', 'tc-muc-hoi', c.muc));
        o.append($('p', 'tc-hoi', (i + 1) + '. ' + c.hoi));
        const ds = $('div', 'tc-chon');
        c.chon.forEach((x, k) => { const b = $('button', 'tc-nut', x); b.type = 'button';
          b.addEventListener('pointerup', () => {
            if (b.disabled) return;
            if (k === c.dung) { if (lanDau) dung++; phanHoi(ph, true, 'Đúng rồi!' + (c.giai ? ' ' + c.giai : '')); ds.querySelectorAll('button').forEach(z => z.disabled = true); b.classList.add('dung');
              const t = $('button', 'tc-nut chinh', 'Câu tiếp →'); t.type = 'button'; t.addEventListener('pointerup', () => { i++; cau(); }); o.append(t); }
            else { lanDau = false; b.classList.add('sai'); b.disabled = true; phanHoi(ph, false); }
          }); ds.append(b); });
        o.append(ds);
      }
      cau();
    },
    xep(p, the) {
      const o = $('div'); the.append(o);
      function bat() {
        o.textContent = '';
        let lanSai = 0; const da = [];
        const tron = p.cau.map((c, k) => k).sort(() => Math.random() - 0.5);
        if (tron.every((k, j) => k === j)) tron.reverse();
        const dich = $('ol', 'tc-dich'), nguon = $('div', 'tc-nguon'), ph = $('p', 'tc-ph');
        o.append($('p', 'tc-lenh', p.lenh), dich, nguon, ph);
        tron.forEach(k => { const b = $('button', 'tc-the', p.cau[k]); b.type = 'button';
          b.addEventListener('pointerup', () => {
            if (k === da.length) { da.push(k); dich.append($('li', '', p.cau[k])); b.remove(); phanHoi(ph, true);
              if (da.length === p.cau.length) { const s = ketQua(p.ma, Math.max(0, p.cau.length - lanSai), p.cau.length); ph.textContent = 'Xong! ' + '⭐'.repeat(s); o.append(nutLai(bat)); } }
            else { lanSai++; phanHoi(ph, false); b.classList.add('lac'); setTimeout(() => b.classList.remove('lac'), 400); }
          }); nguon.append(b); });
      }
      bat();
    },
    viet(p, the) {
      the.append($('p', 'tc-lenh', p.de));
      if (p.goiY) { const u = $('ul', 'tc-y'); p.goiY.forEach(g => u.append($('li', '', g))); the.append(u); }
      if (p.mau) { const d = $('details', 'tc-mau'); d.append($('summary', '', 'Xem bài viết mẫu trước khi viết'));
        p.mau.forEach(c => d.append($('p', '', c))); the.append(d); }
      if (p.tuNoi) the.append($('p', 'tc-tu-noi', 'Từ nối nên dùng: ' + p.tuNoi.join(' · ')));
      const ta = $('textarea', 'tc-viet'); ta.rows = 8; ta.setAttribute('aria-label', 'Bài viết của bạn'); ta.lang = 'vi'; ta.spellcheck = false;
      const nut = $('button', 'tc-nut chinh', 'Trâu Con đọc bài'); nut.type = 'button';
      const ph = $('div', 'tc-cham'); the.append(ta, nut, ph);
      nut.addEventListener('pointerup', () => {
        const v = nfc(ta.value).trim();
        const cau = v.split(/(?<=[.!?…])\s+/).map(x => x.trim()).filter(x => x.split(/\s+/).length >= 3);
        const thuong = v.toLowerCase(), noi = (p.tuNoi || []).filter(t => thuong.includes(nfc(t).toLowerCase()));
        const hoa = cau.filter(c => /^[A-ZÀ-ỸĐ"“(]/.test(c)).length, cham = cau.filter(c => /[.!?…]["”)]?$/.test(c)).length;
        const n = p.itNhatCau || 6;
        // Thang 0–3 cho 3 tiêu chí (Cẩm nang giáo viên): Nội dung, Chi tiết – trình tự, Diễn đạt. Máy chấm gợi ý, chỉ để tham khảo.
        const tieu = [
          ['Nội dung (đủ ý: mở đầu, kể việc, kết)', cau.length >= n ? 3 : cau.length >= n - 2 ? 2 : cau.length >= 2 ? 1 : 0, 'Bạn viết ' + cau.length + ' câu; nên có ' + n + ' câu trở lên.'],
          ['Chi tiết và trình tự', noi.length >= 3 ? 3 : noi.length, 'Từ chỉ trình tự đã dùng: ' + (noi.join(', ') || 'chưa có') + '.'],
          ['Diễn đạt (viết hoa, dấu câu)', !cau.length ? 0 : (hoa === cau.length && cham === cau.length) ? 3 : (hoa + cham >= cau.length) ? 2 : 1, 'Câu viết hoa đầu câu: ' + hoa + '/' + cau.length + '; câu có dấu kết thúc: ' + cham + '/' + cau.length + '.']
        ];
        ph.textContent = '';
        const u = $('ul'); tieu.forEach(([ten, d, ghi]) => u.append($('li', d >= 3 ? 'dung' : 'sai', ten + ': ' + d + '/3 – ' + ghi))); ph.append(u);
        const diem = tieu.reduce((a, t) => a + t[1], 0), s = ketQua(p.ma, diem, 9);
        ph.append($('p', '', (diem === 9 ? 'Đúng rồi! Bài viết rõ ràng, đủ ý. ' : 'Thử lại nhé: sửa các tiêu chí chưa đủ 3 điểm rồi bấm lại. ') + '⭐'.repeat(s)));
        ph.append($('p', 'tc-ghi-chu', 'Máy chỉ đếm câu, từ nối, chữ hoa và dấu câu; hãy nhờ thầy cô hoặc người thân đọc thêm nội dung.'));
      });
    },
    ve(p, the) {
      const v = $('div', 'tc-vidu'); p.mau.forEach(c => { const q = $('p', '', c); q.append(' ', nutLoa(c)); v.append(q); }); the.append(v);
      the.append($('p', 'tc-lenh', p.lenh));
      const ip = $('input', 'tc-o'); ip.type = 'text'; ip.lang = 'vi'; ip.setAttribute('aria-label', 'Câu vè của bạn'); ip.autocomplete = 'off';
      const nut = $('button', 'tc-nut chinh', 'Kiểm tra'); nut.type = 'button';
      const ph = $('div', 'tc-cham'); the.append(ip, nut, ph);
      nut.addEventListener('pointerup', () => {
        const ds = tieng(ip.value), cuoi = ds[ds.length - 1] || '';
        const duTieng = ds.length === p.soTieng, dungVan = !!cuoi && van(cuoi) === p.van;
        ph.textContent = '';
        const u = $('ul');
        u.append($('li', duTieng ? 'dung' : 'sai', (duTieng ? '✓ ' : '• ') + 'Câu có ' + p.soTieng + ' tiếng (bạn viết ' + ds.length + ' tiếng).'));
        u.append($('li', dungVan ? 'dung' : 'sai', (dungVan ? '✓ ' : '• ') + 'Tiếng cuối có vần "' + p.van + '"' + (cuoi ? ' (tiếng cuối của bạn: "' + cuoi + '", vần "' + van(cuoi) + '").' : '.')));
        ph.append(u);
        const s = ketQua(p.ma, (duTieng ? 1 : 0) + (dungVan ? 1 : 0), 2);
        ph.append($('p', '', duTieng && dungVan ? 'Đúng rồi! Câu vè của bạn có nhịp và có vần. ' + '⭐'.repeat(s) : 'Thử lại nhé. Gợi ý: ' + p.viDuDung));
      });
    },
    'ket-noi'(p, the) {
      const u = $('ul', 'tc-y'); p.viec.forEach(h => u.append($('li', '', h))); the.append(u);
      if (p.lienKet) { const a = $('a', 'tc-nut chinh tc-lien-ket', p.lienKet.chu); a.href = p.lienKet.href; the.append(a); }
    }
  };

  function chay(D) {
    B = D; KHOA = 'vhtv:tc:' + D.ma; batDau = Date.now();
    const app = document.getElementById('app'); app.textContent = '';
    const dau = $('section', 'tc-dau');
    dau.append($('p', 'tc-bac', D.nhanBac), $('h1', '', D.ten), $('p', 'tc-chude', 'Chủ điểm: ' + D.chuDe));
    const mt = $('div', 'tc-muc-tieu'); mt.append($('h2', '', 'Học xong bài này, bạn làm được…'));
    const u = $('ul'); D.mucTieu.forEach(m => u.append($('li', '', m))); mt.append(u);
    const sao = $('p', 'tc-sao-dong'); sao.id = 'tc-sao'; dau.append(mt, sao); app.append(dau);
    const muc = $('nav', 'tc-muc'); muc.setAttribute('aria-label', 'Các phần của bài');
    D.phan.forEach((p, i) => { const a = $('a', '', (i + 1) + '. ' + p.tieuDe); a.href = '#p' + (i + 1); muc.append(a); });
    app.append(muc);
    D.phan.forEach((p, i) => {
      const the = $('section', 'tc-the-phan'); the.id = 'p' + (i + 1);
      the.append($('h2', '', (i + 1) + '. ' + p.tieuDe + (p.ma ? ' ⭐' : '')));
      if (p.lenh && p.loai !== 'xep' && p.loai !== 've') the.append($('p', 'tc-lenh', p.lenh));
      VE[p.loai](p, the); app.append(the);
    });
    veSao();
  }
  window.TC = { chay, _van: van, _tieng: tieng };
})();
