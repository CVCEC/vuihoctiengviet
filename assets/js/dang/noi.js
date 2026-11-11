/* Dạng bài 'noi' – Nối cột A với cột B (vẽ đường nối)
   ex.a: [{ c?, hinh?, am? }], ex.b: [{ c?, hinh?, am? }], ex.cap: [[iA, iB], ...]
   ex.tenA? ('A'), ex.tenB? ('B'), ex.goiY? */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  const { h, play, stopAll, feedback, flash, sfx } = A;
  const CSS = `
.noi{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(36px,.45fr) minmax(0,1fr);align-items:start;user-select:none;-webkit-user-select:none}
.noi-col{display:flex;flex-direction:column;gap:12px;position:relative;z-index:2}
.noi-h{font-weight:700;text-align:center;margin-bottom:2px}
.noi-h span{display:inline-block;min-width:44px;padding:2px 12px;border-radius:10px;color:#fff;background:#E0577A}
.noi-col.b .noi-h span{background:#3C78C8}
.noi-it{position:relative;border:2px solid var(--line);background:#fff;border-radius:16px;padding:8px 12px;font:inherit;font-weight:700;font-size:clamp(17px,3.8vw,21px);min-height:56px;cursor:pointer;display:flex;align-items:center;gap:8px;text-align:left;touch-action:manipulation;color:var(--ink)}
.noi-col.b .noi-it{justify-content:flex-start}
.noi-it img{width:64px;height:64px;object-fit:contain;border-radius:8px;flex:none}
.noi-it .dot{position:absolute;top:50%;width:14px;height:14px;margin-top:-7px;border-radius:50%;background:#B7AC9E;border:3px solid #fff;box-shadow:0 0 0 2px #B7AC9E}
.noi-col.a .noi-it .dot{right:-9px}
.noi-col.b .noi-it .dot{left:-9px}
.noi-it.sel{border-color:var(--straw);box-shadow:0 0 0 4px rgba(221,170,85,.35)}
.noi-it.ok{border-color:var(--pc,var(--ok));background:#FBFFF9}
.noi-it.ok .dot{background:var(--pc,var(--ok));box-shadow:0 0 0 2px var(--pc,var(--ok))}
.noi-it.bad{animation:shake .4s}
.noi svg.lines{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;overflow:visible}
`;
  if (!document.getElementById('dang-noi')) { const s = document.createElement('style'); s.id = 'dang-noi'; s.textContent = CSS; document.head.append(s); }
  const PAIR = ['#E0577A', '#3C78C8', '#2F8F55', '#D9822B', '#8A5CC2', '#C2457A', '#2B8C99', '#8F5E36'];
  const NS = 'http://www.w3.org/2000/svg';

  A.T['noi'] = function (ex, ctx) {
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || ('Chạm vào một ô ở cột ' + (ex.tenA || 'A') + ', rồi chạm vào ô phù hợp ở cột ' + (ex.tenB || 'B') + ' để nối.')));
    const wrap = h('div', { class: 'noi' });
    const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('class', 'lines');
    const colA = h('div', { class: 'noi-col a' }, h('div', { class: 'noi-h' }, h('span', null, ex.tenA || 'A')));
    const colB = h('div', { class: 'noi-col b' }, h('div', { class: 'noi-h' }, h('span', null, ex.tenB || 'B')));
    wrap.append(svg, colA, h('div'), colB);
    const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    const want = new Map(ex.cap.map(([a, b]) => [a + ':' + b, true]));
    const matched = []; // [ia, ib]
    let selA = -1, selB = -1;
    const mk = (it, side, i) => {
      const b = h('button', { class: 'noi-it', type: 'button' }, it.hinh ? h('img', { src: it.hinh, alt: it.c || '' }) : null, it.c ? h('span', null, it.c) : null, h('span', { class: 'dot' }));
      b.onclick = () => pick(side, i);
      return b;
    };
    const elA = ex.a.map((it, i) => { const b = mk(it, 'a', i); colA.append(b); return b; });
    const elB = ex.b.map((it, i) => { const b = mk(it, 'b', i); colB.append(b); return b; });
    const doneA = i => matched.some(m => m[0] === i), doneB = i => matched.some(m => m[1] === i);
    function pick(side, i) {
      if (side === 'a') { if (doneA(i)) return; selA = i; if (ex.a[i].am) { stopAll(); play(ex.a[i].am); } }
      else { if (doneB(i)) return; selB = i; if (ex.b[i].am) { stopAll(); play(ex.b[i].am); } }
      elA.forEach((e, j) => e.classList.toggle('sel', j === selA));
      elB.forEach((e, j) => e.classList.toggle('sel', j === selB));
      if (selA >= 0 && selB >= 0) {
        const a = selA, b = selB; selA = selB = -1;
        elA[a].classList.remove('sel'); elB[b].classList.remove('sel');
        if (want.has(a + ':' + b)) {
          const col = PAIR[matched.length % PAIR.length];
          matched.push([a, b, col]);
          [elA[a], elB[b]].forEach(e => { e.classList.add('ok'); e.style.setProperty('--pc', col); });
          sfx(true); draw();
          if (matched.length === ex.cap.length) { feedback(fb, true, 'Em đã nối đúng hết!'); ctx.win(); }
          else { fb.className = 'fb'; fb.textContent = ''; }
        } else {
          flash(elA[a], 'bad', 450); flash(elB[b], 'bad', 450); feedback(fb, false, 'Chưa đúng, thử lại nhé!');
        }
      }
    }
    function draw() {
      const r = wrap.getBoundingClientRect();
      svg.setAttribute('viewBox', '0 0 ' + r.width + ' ' + r.height);
      svg.innerHTML = '';
      matched.forEach(([a, b, col]) => {
        const da = elA[a].querySelector('.dot').getBoundingClientRect(), db = elB[b].querySelector('.dot').getBoundingClientRect();
        const x1 = da.left + da.width / 2 - r.left, y1 = da.top + da.height / 2 - r.top;
        const x2 = db.left + db.width / 2 - r.left, y2 = db.top + db.height / 2 - r.top;
        const p = document.createElementNS(NS, 'path');
        const mx = (x1 + x2) / 2;
        p.setAttribute('d', `M${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`);
        p.setAttribute('fill', 'none'); p.setAttribute('stroke', col); p.setAttribute('stroke-width', '4'); p.setAttribute('stroke-linecap', 'round');
        svg.append(p);
      });
    }
    if (window.ResizeObserver) new ResizeObserver(draw).observe(wrap); else window.addEventListener('resize', draw);
    ctx.body.append(wrap, fb);
  };
});
