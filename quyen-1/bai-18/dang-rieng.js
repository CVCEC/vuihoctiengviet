/* Quyển 1 – Bài 18: dạng bài riêng
   dien-cau : điền màu vào chỗ trống trong câu (nói về bản thân, miêu tả tranh) – không có đáp án đúng/sai,
              em chọn màu mình thích rồi đọc to cả câu.
              ex.cau: [[ 'chữ' | { hinh, tu } (hình thay chữ) | { o: 1 } (chỗ trống) , … ], …]
              ex.chon: [{ c: 'trắng', ma: '#fff', am? }], ex.khacNhau: true → trong một câu, các chỗ trống phải khác màu
              ex.av: ảnh bạn nói (tuỳ chọn), ex.goiY, ex.ghiAm */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, play, stopAll, feedback, sfx, recorder } = A;
  if (!document.getElementById('dang-dien-cau')) {
    const st = document.createElement('style'); st.id = 'dang-dien-cau';
    st.textContent = `
.dc-box{display:flex;gap:12px;align-items:flex-end;background:#fff;border:3px dotted var(--c);border-radius:16px;padding:12px 14px;margin:6px 0 12px}
.dc-box>img{width:min(110px,24%);flex:none;align-self:flex-end}
.dc-cau{flex:1;min-width:0;display:flex;flex-direction:column;gap:10px}
.dc-p{margin:0;font-size:clamp(19px,4vw,24px);line-height:2;font-weight:700}
.dc-ic{height:1.7em;width:auto;vertical-align:middle;margin:0 2px}
.dc-o{display:inline-flex;align-items:center;gap:6px;min-width:84px;justify-content:center;vertical-align:middle;border:0;border-bottom:3px dashed #B7AC9E;background:#FFF7E6;border-radius:10px 10px 4px 4px;padding:0 10px;margin:0 3px;font:inherit;font-size:.9em;line-height:1.6;color:var(--ink);cursor:pointer;min-height:40px}
.dc-o.on{outline:3px solid var(--straw);background:#FFF1D6}
.dc-o.co{border-bottom-color:var(--ok);background:var(--ok-bg)}
.dc-o .sw{width:18px;height:18px;border-radius:50%;border:2px solid rgba(0,0,0,.2);flex:none}
.dc-pal{display:flex;flex-wrap:wrap;gap:8px;margin:4px 0 8px}
.dc-chip{display:inline-flex;align-items:center;gap:8px;border:2px solid var(--line);background:#fff;border-radius:999px;padding:5px 14px 5px 6px;font:inherit;font-weight:700;font-size:17px;color:var(--ink);cursor:pointer;min-height:46px}
.dc-chip .sw{width:30px;height:30px;border-radius:50%;border:2px solid rgba(0,0,0,.18);flex:none}
.dc-chip.playing{border-color:var(--straw)}
`;
    document.head.append(st);
  }

  A.T['dien-cau'] = function (ex, ctx) {
    const chon = ex.chon || [];
    const blanks = []; // { el, cau, val }
    let cur = null, won = false;
    const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    const area = h('div');
    const cauEls = ex.cau.map((parts, ci) => {
      const p = h('p', { class: 'dc-p' });
      parts.forEach(pt => {
        if (typeof pt === 'string') p.append(pt);
        else if (pt.hinh) p.append(h('img', { class: 'dc-ic', src: pt.hinh, alt: pt.tu || '' }));
        else {
          const b = h('button', { class: 'dc-o', type: 'button', 'aria-label': 'Chỗ trống – chọn màu' }, '……');
          const rec = { el: b, cau: ci, val: null };
          b.onclick = () => activate(rec);
          blanks.push(rec); p.append(b);
        }
      });
      return p;
    });
    function activate(rec) {
      cur = rec; blanks.forEach(x => x.el.classList.toggle('on', x === rec));
    }
    const pal = h('div', { class: 'dc-pal', role: 'group', 'aria-label': 'Chọn màu' });
    chon.forEach(m => {
      const b = h('button', { class: 'dc-chip', type: 'button' }, h('span', { class: 'sw', style: { background: m.ma } }), m.c);
      b.onclick = () => {
        stopAll(); if (m.am) play(m.am, b);
        if (!cur) return;
        if (ex.khacNhau && blanks.some(x => x !== cur && x.cau === cur.cau && x.val === m.c)) {
          feedback(fb, false, 'Em đã chọn màu ' + m.c + ' rồi. Chọn màu khác nhé!'); return;
        }
        cur.val = m.c; cur.el.innerHTML = ''; cur.el.append(h('span', { class: 'sw', style: { background: m.ma } }), m.c); cur.el.classList.add('co');
        fb.className = 'fb'; fb.textContent = ''; sfx(true);
        const next = blanks.find(x => !x.val);
        if (next) activate(next);
        else { activate(null); finish(); }
      };
      pal.append(b);
    });
    function finish() {
      if (won) return; won = true; ctx.win();
      area.append(h('div', { class: 'done-box' }, h('b', null, ex.khen || 'Giỏi lắm! Bây giờ em đọc to các câu của em nhé.')),
        recorder({ label: ex.ghiAm || 'Ghi âm em đọc các câu' }));
    }
    const box = h('div', { class: 'dc-box' }, h('div', { class: 'dc-cau' }, cauEls));
    if (ex.av) box.append(h('img', { src: ex.av, alt: '' }));
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Chạm vào chỗ trống, rồi chọn màu. Đọc to câu của em.'), box, h('b', { style: { fontSize: '16px' } }, 'Chọn màu:'), pal, fb, area);
    if (blanks.length) activate(blanks[0]);
  };
});
