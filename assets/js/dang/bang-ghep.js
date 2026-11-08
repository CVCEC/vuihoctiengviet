/* Dạng bài 'bang-ghep' – Ghép vần và tô màu những tiếng em đã biết (bảng âm × vần, Quyển 2 trang 32)
   ex.hang: ['b','c','d','đ','l','m','n'] (âm đầu), ex.cot: ['a','o','ô','ơ','i','ia','u','ua','ư','ưa','e','ê'] (vần),
   ex.biet: ['bố','đi','nứa', ...] tiếng/từ em đã biết (có thể có thanh); ex.viDu?: ['bố', ...] đã tô sẵn như trong sách;
   ex.am?: { 'bố': 'audio/….mp3' } */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  const { h, icon, play, stopAll, feedback, flash, sfx, toast } = A;
  const CSS = `
.bg-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:12px;border:2px solid #F3E2A8}
.bg{border-collapse:collapse;min-width:100%;background:#FFF8D6}
.bg th{background:#FCE7EC;color:#C2185B;font-weight:700;font-size:18px;padding:6px 4px;min-width:46px;position:sticky;top:0}
.bg th.r{background:#E3EEFB;color:#2457A6;position:sticky;left:0;z-index:2;min-width:40px}
.bg th.c0{left:0;z-index:3;background:#FFF8D6}
.bg td{border:1px solid #F6E7B6;padding:0}
.bg td button{width:100%;min-width:46px;height:46px;border:0;background:transparent;font:inherit;font-weight:700;font-size:17px;color:transparent;cursor:pointer;touch-action:manipulation}
.bg td button.peek{color:#B7AC9E}
.bg td button.yes{background:#F8C6D3;color:#B0174F}
.bg td button.vd{background:#FBE0E8;color:#B0174F}
.bg td button.hint{box-shadow:inset 0 0 0 3px var(--straw)}
.bg-bar{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:10px 0}
`;
  if (!document.getElementById('dang-bang-ghep')) { const s = document.createElement('style'); s.id = 'dang-bang-ghep'; s.textContent = CSS; document.head.append(s); }
  const strip = s => s.normalize('NFD').replace(/[̣̀́̃̉]/g, '').normalize('NFC').toLowerCase();

  A.T['bang-ghep'] = function (ex, ctx) {
    const hang = ex.hang.map(x => x.normalize('NFC')), cot = ex.cot.map(x => x.normalize('NFC'));
    const byLen = [...hang].sort((a, b) => b.length - a.length);
    // tìm ô cho mỗi từ đã biết: âm đầu (dài nhất khớp) + phần còn lại (bỏ thanh) là một vần trong cột
    const cell = {};   // 'r:c' → [từ]
    const want = new Set();
    const vd = new Set((ex.viDu || []).map(w => w.normalize('NFC')));
    const place = w => {
      const s = strip(w);
      for (const on of byLen) {
        if (!s.startsWith(on.toLowerCase())) continue;
        const rest = s.slice(on.length), c = cot.findIndex(v => v.toLowerCase() === rest);
        if (c >= 0) return hang.indexOf(on) + ':' + c;
      }
      return null;
    };
    [...(ex.biet || []), ...vd].forEach(w0 => {
      const w = w0.normalize('NFC'), k = place(w);
      if (!k) { console.warn('bang-ghep: không xếp được', w); return; }
      (cell[k] = cell[k] || []).includes(w) || cell[k].push(w);
      if (!vd.has(w)) want.add(k);
    });
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Chạm vào một ô để ghép âm với vần. Tô màu hồng những tiếng em đã biết.'));
    const count = h('b', { class: 'count' });
    const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    const found = new Set();
    const btns = {};
    const head = h('tr', null, h('th', { class: 'c0' }), cot.map(c => h('th', null, c)));
    const rows = hang.map((on, r) => h('tr', null, h('th', { class: 'r' }, on), cot.map((v, c) => {
      const k = r + ':' + c, b = h('button', { type: 'button', 'aria-label': on + ' ' + v }, '');
      btns[k] = b;
      const words = cell[k] || [];
      if (words.length && words.every(w => vd.has(w))) { b.textContent = words.join(', '); b.classList.add('vd'); }
      b.onclick = () => {
        stopAll();
        if (want.has(k)) {
          b.textContent = words.join(', '); b.classList.add('yes'); b.classList.remove('hint');
          const am = ex.am && words.map(w => ex.am[w]).find(Boolean); if (am) play(am); else sfx(true);
          if (!found.has(k)) {
            found.add(k); count.textContent = 'Đã tìm được ' + found.size + '/' + want.size + ' tiếng';
            if (found.size === want.size) { feedback(fb, true, 'Em đã tô hết những tiếng em biết!'); ctx.win(); }
            else { fb.className = 'fb'; fb.textContent = ''; }
          }
        } else if (!b.classList.contains('vd')) {
          b.textContent = on + v; b.classList.add('peek');
          setTimeout(() => { if (!b.classList.contains('yes')) { b.textContent = ''; b.classList.remove('peek'); } }, 1400);
        }
      };
      return h('td', null, b);
    })));
    const table = h('table', { class: 'bg' }, h('thead', null, head), h('tbody', null, rows));
    const hint = h('button', { class: 'btn soft small', type: 'button' }, icon('spk'), 'Gợi ý');
    hint.onclick = () => {
      const k = [...want].find(x => !found.has(x)); if (!k) return;
      const [r] = k.split(':').map(Number);
      Object.keys(btns).forEach(x => btns[x].classList.remove('hint'));
      // gợi ý cả hàng âm đầu, không chỉ đúng ô
      cot.forEach((_, c) => btns[r + ':' + c].classList.add('hint'));
      setTimeout(() => cot.forEach((_, c) => btns[r + ':' + c].classList.remove('hint')), 1800);
      toast('Có một tiếng em biết bắt đầu bằng “' + hang[r] + '”.');
    };
    count.textContent = 'Đã tìm được 0/' + want.size + ' tiếng';
    ctx.body.append(h('div', { class: 'bg-bar' }, count, hint), h('div', { class: 'bg-wrap' }, table), fb);
  };
});
