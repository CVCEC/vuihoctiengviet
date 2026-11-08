/* Dạng bài: viet-o-li – tập viết trên giấy ô li (tô theo chữ mờ hoặc tự viết).
   ex = { tu: [{ c: 'cà', hinh?: 'img/ca-tim.webp', am?: 'audio/ca.mp3' }, …], goiY?: '…', choMo?: true }
   Dòng kẻ giống vở ô li: chữ thường cao 2 ô li, đường kẻ đậm cách nhau 4 ô li, chân chữ nằm trên đường đậm.
   Không chấm điểm – em viết đủ các từ là được sao. */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, play, stopAll, sfx, toast, feedback, nfc } = A;

  if (!document.getElementById('dang-viet-o-li')) {
    const st = document.createElement('style'); st.id = 'dang-viet-o-li';
    st.textContent =
      '.vol-top{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:10px}' +
      '.vol-top img{height:78px;width:auto;max-width:150px;object-fit:contain;border-radius:10px;background:#fff;border:1px solid var(--line);padding:4px}' +
      '.vol-top .vol-mau{font-size:30px;font-weight:700;line-height:1.2}' +
      '.vol-top .vol-n{margin-left:auto;font-weight:700;color:var(--ink-2)}' +
      '.vol-paper{position:relative;background:#fff;border:2px solid var(--line);border-radius:12px;overflow:hidden}' +
      '.vol-paper canvas{display:block;width:100%}' +
      '.vol-paper canvas.ink{position:absolute;left:0;top:0;height:100%;touch-action:none;cursor:crosshair}' +
      '.vol-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:10px}' +
      '.vol-bar .dots{margin-left:auto}';
    document.head.append(st);
  }

  A.T['viet-o-li'] = function (ex, ctx) {
    const items = ex.tu.map(t => ({ c: nfc(t.c), hinh: t.hinh, am: t.am, strokes: [] }));
    let k = 0, showModel = ex.choMo !== false, won = false;
    const pic = h('img', { alt: '' });
    const mau = h('span', { class: 'vol-mau', lang: 'vi' });
    const nlab = h('span', { class: 'vol-n' });
    const bHear = h('button', { class: 'lenh', type: 'button', 'aria-label': 'Nghe từ này' }, icon('spk'));
    const top = h('div', { class: 'vol-top' }, pic, mau, bHear, nlab);
    const bg = h('canvas', { 'aria-hidden': 'true' });
    const ink = h('canvas', { class: 'ink', 'aria-label': 'Ô li để em viết' });
    const paper = h('div', { class: 'vol-paper' }, bg, ink);
    const bPrev = h('button', { class: 'btn soft small', type: 'button' }, icon('back'), 'Trước');
    const bNext = h('button', { class: 'btn small', type: 'button' }, 'Từ tiếp', icon('next'));
    const bClear = h('button', { class: 'btn soft small', type: 'button' }, icon('x'), 'Xoá');
    const bModel = h('button', { class: 'btn soft small', type: 'button', 'aria-pressed': String(showModel) }, showModel ? 'Ẩn chữ mờ' : 'Hiện chữ mờ');
    const dots = h('div', { class: 'dots' }, items.map(() => h('i')));
    const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    ctx.body.append(
      h('p', { class: 'hint' }, ex.goiY || 'Em tô theo chữ mờ trên ô li bằng ngón tay hoặc bút. Viết xong bấm “Từ tiếp”.'),
      top, paper, h('div', { class: 'vol-bar' }, bPrev, bClear, bModel, bNext, dots), fb);

    const gb = bg.getContext('2d'), gi = ink.getContext('2d');
    let b = 20, rows = [], font = 40, Wc = 0, Hc = 0, dpr = 1;
    const XH = 2; // chữ thường cao 2 ô li

    function fontPx() {
      // cỡ chữ sao cho chiều cao chữ x đúng 2 ô li
      gb.font = '400 100px Andika, sans-serif';
      const m = gb.measureText('x');
      const xh = m.actualBoundingBoxAscent || 50;
      return XH * b * 100 / xh;
    }
    function layout() {
      const it = items[k];
      const w = paper.clientWidth || 600;
      b = Math.max(13, Math.min(24, Math.floor(w / 26)));
      font = fontPx();
      gb.font = '400 ' + font + 'px Andika, sans-serif';
      const words = it.c.split(' '), maxW = w - 4 * b;
      rows = []; let line = '';
      words.forEach(wd => {
        const t = line ? line + ' ' + wd : wd;
        if (line && gb.measureText(t).width > maxW) { rows.push(line); line = wd; } else line = t;
      });
      rows.push(line);
      Wc = w; Hc = (8 * rows.length + 2) * b; // mỗi dòng viết 8 ô li: 5 phía trên chân chữ, 3 phía dưới
      dpr = window.devicePixelRatio || 1;
      for (const c of [bg, ink]) { c.width = Math.round(Wc * dpr); c.height = Math.round(Hc * dpr); }
      bg.style.height = Hc + 'px';
    }
    function drawPaper() {
      const g = gb; g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.fillStyle = '#fff'; g.fillRect(0, 0, Wc, Hc);
      const nx = Math.ceil(Wc / b), ny = Math.ceil(Hc / b);
      for (let i = 0; i <= nx; i++) { // kẻ dọc
        const x = Math.round(i * b) + 0.5, dark = i % 4 === 0;
        g.strokeStyle = dark ? 'rgba(74,128,206,.55)' : 'rgba(120,165,225,.32)'; g.lineWidth = 1;
        g.beginPath(); g.moveTo(x, 0); g.lineTo(x, Hc); g.stroke();
      }
      for (let j = 0; j <= ny; j++) { // kẻ ngang: đường đậm cách 4 ô li, đi qua chân chữ
        const y = Math.round(j * b) + 0.5, dark = (j - 1) % 4 === 0;
        g.strokeStyle = dark ? 'rgba(74,128,206,.75)' : 'rgba(120,165,225,.38)'; g.lineWidth = dark ? 1.4 : 1;
        g.beginPath(); g.moveTo(0, y); g.lineTo(Wc, y); g.stroke();
      }
      if (showModel) {
        g.font = '400 ' + font + 'px Andika, sans-serif'; g.textBaseline = 'alphabetic';
        g.fillStyle = 'rgba(58,59,60,.24)';
        rows.forEach((r, i) => g.fillText(r, 2 * b, (5 + 8 * i) * b));
      }
    }
    function drawInk() {
      const g = gi; g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, ink.width, ink.height);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      items[k].strokes.forEach(s => drawStroke(s));
    }
    function drawStroke(s) {
      const g = gi; const p = s;
      g.strokeStyle = '#27358F'; g.fillStyle = '#27358F'; g.lineCap = 'round'; g.lineJoin = 'round';
      if (p.length === 1) { g.beginPath(); g.arc(p[0][0] * b, p[0][1] * b, 0.09 * b, 0, Math.PI * 2); g.fill(); return; }
      for (let i = 1; i < p.length; i++) {
        g.lineWidth = Math.max(1.5, b * (0.11 + 0.08 * (p[i][2] || 0.5)));
        g.beginPath(); g.moveTo(p[i - 1][0] * b, p[i - 1][1] * b); g.lineTo(p[i][0] * b, p[i][1] * b); g.stroke();
      }
    }
    function render() {
      const it = items[k];
      if (it.hinh) { pic.src = it.hinh; pic.style.display = ''; } else pic.style.display = 'none';
      bHear.style.display = it.am ? '' : 'none';
      mau.textContent = it.c;
      nlab.textContent = 'Từ ' + (k + 1) + '/' + items.length;
      bPrev.disabled = k === 0;
      bNext.lastChild && (bNext.childNodes[0].textContent = k === items.length - 1 ? 'Xong' : 'Từ tiếp');
      layout(); drawPaper(); drawInk();
      [...dots.children].forEach((d, i) => d.classList.toggle('done', items[i].strokes.length > 0));
    }
    // toạ độ nét tính theo đơn vị ô li → vẽ lại đúng khi đổi cỡ màn hình
    function pt(e) {
      const r = ink.getBoundingClientRect();
      return [(e.clientX - r.left) / b, (e.clientY - r.top) / b, e.pointerType === 'pen' ? (e.pressure || 0.5) : 0.5];
    }
    let cur = null;
    ink.addEventListener('pointerdown', e => { e.preventDefault(); ink.setPointerCapture(e.pointerId); cur = [pt(e)]; items[k].strokes.push(cur); drawStroke(cur); });
    ink.addEventListener('pointermove', e => {
      if (!cur) return;
      const evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
      for (const ev of (evs.length ? evs : [e])) cur.push(pt(ev));
      const g = gi; g.strokeStyle = '#27358F'; g.lineCap = 'round';
      const n = cur.length, from = Math.max(1, n - (evs.length || 1));
      for (let i = from; i < n; i++) {
        g.lineWidth = Math.max(1.5, b * (0.11 + 0.08 * (cur[i][2] || 0.5)));
        g.beginPath(); g.moveTo(cur[i - 1][0] * b, cur[i - 1][1] * b); g.lineTo(cur[i][0] * b, cur[i][1] * b); g.stroke();
      }
    });
    const end = () => { if (!cur) return; cur = null; dots.children[k].classList.add('done'); check(); };
    ink.addEventListener('pointerup', end); ink.addEventListener('pointercancel', end);

    function check() {
      if (!won && items.every(it => it.strokes.length)) { won = true; ctx.win(); feedback(fb, true, 'Em đã viết đủ các từ. Chữ đẹp lắm!'); }
    }
    bPrev.onclick = () => { if (k > 0) { k--; stopAll(); render(); } };
    bNext.onclick = () => {
      if (!items[k].strokes.length) { feedback(fb, false, 'Em viết từ “' + items[k].c + '” trước nhé!'); return; }
      fb.textContent = ''; fb.className = 'fb';
      if (k < items.length - 1) { k++; stopAll(); render(); if (items[k].am) play(items[k].am); }
      else if (won) { sfx(true); toast('Em đã viết xong cả bài!'); }
      else check();
    };
    bClear.onclick = () => { items[k].strokes = []; drawInk(); dots.children[k].classList.remove('done'); };
    bModel.onclick = () => {
      showModel = !showModel; bModel.setAttribute('aria-pressed', String(showModel));
      bModel.textContent = showModel ? 'Ẩn chữ mờ' : 'Hiện chữ mờ'; drawPaper();
    };
    bHear.onclick = () => { stopAll(); play(items[k].am, bHear); };

    let lastW = 0;
    const onResize = () => { const w = paper.clientWidth; if (w && w !== lastW) { lastW = w; render(); } };
    if (window.ResizeObserver) new ResizeObserver(onResize).observe(paper); else window.addEventListener('resize', onResize);
    const go = () => { lastW = paper.clientWidth; render(); };
    if (document.fonts && document.fonts.load) document.fonts.load('400 40px Andika', items.map(i => i.c).join(' ') + ' x').then(go, go); else go();
  };
});
