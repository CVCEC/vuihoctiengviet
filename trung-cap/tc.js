/* Bộ máy bài Trung cấp – Cao cấp (Bậc 3–5) của Vui học tiếng Việt – do CVCEC biên soạn.
   Mỗi trang bài khai báo const BAI_HOC đầu script rồi gọi TC.chay(BAI_HOC).
   BAI_HOC = { ma, bac, ten, chuDe, mucTieu: [..], phan: [ { loai, tieuDe, ... } ] }
   Các loại phần:
     hoi-thoai : { nguoi: {A: "Minh", B: "Anna"}, loi: [["A", "câu", "tệp.mp3"?], ...] }        – nghe từng câu / cả bài
     doc       : { doan: ["đoạn 1", ...] }                                                       – bài đọc, nghe từng đoạn
     tu-ngu    : { tu: [["từ", "giải nghĩa tiếng Việt", "English"], ...] }
     ghi-nho   : { y: ["dòng", ...], viDu: ["câu", ...] }                                        – khung ngữ pháp
     chon      : { ma, cau: [{ hoi, chon: [..], dung: i, giai }] }                               – có sao
     xep       : { ma, lenh, cau: ["đúng thứ tự", ...] }                                         – chạm để xếp thứ tự, có sao
     viet      : { ma, de, goiY: [..], tuNoi: [..], itNhatCau, itNhatTuNoi }                     – Trâu Con chấm trên máy, có sao
   Âm thanh qua bộ mẫu (quy tắc 7): TTV.phat({ tep, chu }) – có tệp thì phát, chưa có thì tạm đọc bằng giọng máy.
   Kết quả: TTV.ghiKetQua({ bai: ma, hoatDong, soTroChoi, diem, diemToiDa, sao, thoiGianGiay }).
   Sao lưu trên máy: khoá mới "vhtv:tc:<ma>" (không đụng khoá cũ vhtv:q…). Bài viết của người học không được lưu. */
(function () {
  'use strict';
  const $ = (t, l, c) => { const e = document.createElement(t); if (l) e.className = l; if (c != null) e.textContent = c; return e; };
  const nfc = s => String(s || '').normalize('NFC');
  const AM = (B, tep) => tep ? 'audio/' + tep : null;
  let B = null, KHOA = '', batDau = Date.now();

  const docSao = () => { try { return JSON.parse(localStorage.getItem(KHOA)) || {}; } catch (e) { return {}; } };
  const ghiSao = (ma, n) => { try { const s = docSao(); s[ma] = Math.max(s[ma] || 0, n); localStorage.setItem(KHOA, JSON.stringify(s)); } catch (e) {} };
  const soHoatDong = () => B.phan.filter(p => p.ma).length;

  function phat(chu, tep, nut) {
    const T = window.TTV;
    if (nut) { nut.classList.add('dang'); setTimeout(() => nut.classList.remove('dang'), 1200); }
    try { if (T && T.phat) return T.phat({ tep: AM(B, tep), chu }); if (T && T.giong) return T.giong.doc(chu); } catch (e) {}
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

  /* ---------- các loại phần ---------- */
  const VE = {
    'hoi-thoai'(p, the) {
      the.append(nutLoa(p.loi.map(l => l[1]).join(' '), p.tepCaBai, '🔊 Nghe cả bài'));
      const ul = $('ul', 'tc-thoai');
      p.loi.forEach(([ai, cau, tep]) => {
        const li = $('li', 'tc-luot ' + (ai === 'A' ? 'trai' : 'phai'));
        li.append($('b', '', p.nguoi[ai] + ':'), $('span', '', ' ' + cau), nutLoa(cau, tep));
        ul.append(li);
      });
      the.append(ul);
    },
    doc(p, the) {
      p.doan.forEach((d, i) => { const q = $('p', 'tc-doan', d); q.append(' ', nutLoa(d, (p.tep || [])[i])); the.append(q); });
    },
    'tu-ngu'(p, the) {
      const ul = $('ul', 'tc-tu');
      p.tu.forEach(([tu, nghia, en]) => {
        const li = $('li'); li.append(nutLoa(tu), $('b', '', tu), $('span', '', ' – ' + nghia));
        if (en) { const g = $('button', 'tc-en', 'EN'); g.type = 'button'; const s = $('span', 'tc-en-chu', en); s.hidden = true; s.lang = 'en';
          g.addEventListener('pointerup', () => { s.hidden = !s.hidden; }); li.append(' ', g, s); }
        ul.append(li);
      });
      the.append(ul);
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
        const c = p.cau[i]; o.append($('p', 'tc-hoi', (i + 1) + '. ' + c.hoi));
        const ds = $('div', 'tc-chon');
        c.chon.forEach((x, k) => { const b = $('button', 'tc-nut', x); b.type = 'button';
          b.addEventListener('pointerup', () => {
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
      if (p.tuNoi) the.append($('p', 'tc-tu-noi', 'Từ nối nên dùng: ' + p.tuNoi.join(' · ')));
      const ta = $('textarea', 'tc-viet'); ta.rows = 8; ta.setAttribute('aria-label', 'Bài viết của bạn'); ta.lang = 'vi'; ta.spellcheck = false;
      const nut = $('button', 'tc-nut chinh', 'Trâu Con đọc bài'); nut.type = 'button';
      const ph = $('div', 'tc-cham'); the.append(ta, nut, ph);
      nut.addEventListener('pointerup', () => {
        const v = nfc(ta.value).trim(), cau = v.split(/[.!?…]+/).map(x => x.trim()).filter(x => x.split(/\s+/).length >= 3);
        const thuong = v.toLowerCase(), noi = (p.tuNoi || []).filter(t => thuong.includes(nfc(t).toLowerCase()));
        const tieu = [
          [cau.length >= p.itNhatCau, 'Có ít nhất ' + p.itNhatCau + ' câu (bạn viết ' + cau.length + ' câu).'],
          [noi.length >= p.itNhatTuNoi, 'Dùng ít nhất ' + p.itNhatTuNoi + ' từ nối (bạn dùng: ' + (noi.join(', ') || 'chưa có') + ').'],
          [/[A-ZÀ-Ỹ]/.test(v.charAt(0)), 'Viết hoa chữ đầu đoạn.']
        ];
        ph.textContent = '';
        const u = $('ul'); tieu.forEach(([ok, chu]) => u.append($('li', ok ? 'dung' : 'sai', (ok ? '✓ ' : '• ') + chu))); ph.append(u);
        const diem = tieu.filter(t => t[0]).length; const s = ketQua(p.ma, diem, tieu.length);
        ph.append($('p', '', diem === tieu.length ? 'Đúng rồi! Bài viết rõ ràng. ' + '⭐'.repeat(s) : 'Thử lại nhé: sửa những ý có dấu • rồi bấm lại. ' + '⭐'.repeat(s)));
      });
    }
  };
  function nutLai(fn) { const b = $('button', 'tc-nut', '↻ Làm lại'); b.type = 'button'; b.addEventListener('pointerup', fn); return b; }

  function chay(D) {
    B = D; KHOA = 'vhtv:tc:' + D.ma; batDau = Date.now();
    const app = document.getElementById('app'); app.textContent = '';
    const dau = $('section', 'tc-dau');
    dau.append($('p', 'tc-bac', D.nhanBac), $('h1', '', D.ten), $('p', 'tc-chude', 'Chủ điểm: ' + D.chuDe));
    const mt = $('div', 'tc-muc-tieu'); mt.append($('h2', '', 'Học xong bài này, bạn làm được…'));
    const u = $('ul'); D.mucTieu.forEach(m => u.append($('li', '', m))); mt.append(u); dau.append(mt, $('p', 'tc-sao-dong')); app.append(dau);
    dau.querySelector('.tc-sao-dong').id = 'tc-sao';
    const muc = $('nav', 'tc-muc'); muc.setAttribute('aria-label', 'Các phần của bài');
    D.phan.forEach((p, i) => { const a = $('a', '', (i + 1) + '. ' + p.tieuDe); a.href = '#p' + (i + 1); muc.append(a); });
    app.append(muc);
    D.phan.forEach((p, i) => {
      const the = $('section', 'tc-the-phan'); the.id = 'p' + (i + 1);
      the.append($('h2', '', (i + 1) + '. ' + p.tieuDe + (p.ma ? ' ⭐' : '')));
      if (p.lenh && p.loai !== 'xep') the.append($('p', 'tc-lenh', p.lenh));
      VE[p.loai](p, the); app.append(the);
    });
    veSao();
  }
  window.TC = { chay };
})();
