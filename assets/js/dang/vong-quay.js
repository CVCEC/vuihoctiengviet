/* Dạng bài "vong-quay": vòng quay chữ / từ. Quay → dừng ở một ô → hiện to và đọc.
   ex.muc: [{ c: 'b', am? }], ex.can: số lượt quay để được sao (mặc định 5), ex.goiY */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, play, stopAll, sfx } = A;
  if (!document.getElementById('dang-vong-quay')) {
    const st = document.createElement('style'); st.id = 'dang-vong-quay';
    st.textContent = `
.vq{display:grid;grid-template-columns:minmax(0,1fr);gap:14px;justify-items:center}
@media (min-width:700px){.vq{grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);align-items:center}}
.vq-wrap{position:relative;width:min(100%,380px);aspect-ratio:1/1}
.vq-wrap svg{width:100%;height:100%;display:block}
.vq-ptr{position:absolute;left:50%;top:-6px;transform:translateX(-50%);width:0;height:0;border-left:16px solid transparent;border-right:16px solid transparent;border-top:30px solid var(--ink);filter:drop-shadow(0 2px 2px rgba(0,0,0,.25));z-index:2}
.vq-side{display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center}
.vq-kq{min-width:150px;min-height:120px;padding:10px 22px;border-radius:22px;background:#fff;border:3px solid var(--line);display:grid;place-items:center;font-size:clamp(52px,14vw,84px);font-weight:700;line-height:1.1;cursor:pointer}
.vq-kq.on{border-color:var(--straw);box-shadow:0 0 0 5px rgba(221,170,85,.3);animation:pop .5s ease}
.vq-kq.nho{font-size:clamp(30px,7vw,44px)}
.vq-dem{font-weight:700;color:var(--ink-2)}
`;
    document.head.append(st);
  }
  const MAU = ['#F2A7B5', '#F6C177', '#F4D35E', '#A7D49B', '#9CC4EE', '#C7AEE6', '#F4B79B', '#8FD3C5'];
  const NS = 'http://www.w3.org/2000/svg';
  const svgEl = (tag, attrs, text) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (text != null) e.textContent = text; return e; };

  A.T['vong-quay'] = function (ex, ctx) {
    const muc = ex.muc || [], n = muc.length, can = ex.can || 5;
    const R = 190, C = 200, step = 360 / n;
    const svg = svgEl('svg', { viewBox: '0 0 400 400', role: 'img', 'aria-label': 'Vòng quay' });
    const rot = svgEl('g', { class: 'vq-rot' });
    const rad = a => (a - 90) * Math.PI / 180;
    const pt = (a, r) => [C + r * Math.cos(rad(a)), C + r * Math.sin(rad(a))];
    const longest = Math.max(...muc.map(m => Array.from(m.c).length));
    const fs = Math.max(14, Math.min(46, (n <= 6 ? 46 : 300 / n) * (longest > 3 ? 3.2 / longest : 1)));
    muc.forEach((m, i) => {
      const a0 = i * step, a1 = a0 + step;
      const [x0, y0] = pt(a0, R), [x1, y1] = pt(a1, R);
      const large = step > 180 ? 1 : 0;
      rot.append(svgEl('path', { d: `M${C},${C} L${x0.toFixed(2)},${y0.toFixed(2)} A${R},${R} 0 ${large} 1 ${x1.toFixed(2)},${y1.toFixed(2)} Z`, fill: MAU[i % MAU.length], stroke: '#fff', 'stroke-width': 3 }));
      const am = a0 + step / 2, [tx, ty] = pt(am, R * (n <= 4 ? 0.58 : 0.7));
      rot.append(svgEl('text', { x: tx.toFixed(2), y: ty.toFixed(2), 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': fs.toFixed(1), 'font-weight': 700, fill: '#3A3B3C', 'font-family': 'Andika, sans-serif', transform: `rotate(${am.toFixed(2)} ${tx.toFixed(2)} ${ty.toFixed(2)})` }, m.c));
    });
    rot.append(svgEl('circle', { cx: C, cy: C, r: 26, fill: '#fff', stroke: '#E4DBCF', 'stroke-width': 4 }));
    rot.append(svgEl('circle', { cx: C, cy: C, r: 9, fill: '#C68B59' }));
    svg.append(svgEl('circle', { cx: C, cy: C, r: R + 6, fill: '#FFFDF9', stroke: '#E4DBCF', 'stroke-width': 4 }), rot);
    const wrap = h('div', { class: 'vq-wrap' }, h('div', { class: 'vq-ptr' }), svg);

    const kq = h('button', { class: 'vq-kq', type: 'button', 'aria-label': 'Nghe lại' }, '?');
    const dem = h('div', { class: 'vq-dem' }, 'Đã quay: 0/' + can);
    const btn = h('button', { class: 'btn green', type: 'button' }, icon('redo'), 'Quay');
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Bấm “Quay”. Vòng quay dừng ở chữ nào, em đọc to chữ đó.'),
      h('div', { class: 'vq' }, wrap, h('div', { class: 'vq-side' }, kq, btn, dem)));

    let cur = 0, spins = 0, last = -1, busy = false, won = false;
    let chosen = null;
    kq.onclick = () => { if (chosen && chosen.am) { stopAll(); play(chosen.am); } };
    btn.onclick = () => {
      if (busy || !n) return;
      busy = true; btn.disabled = true; stopAll();
      kq.classList.remove('on'); kq.textContent = '…';
      let i = Math.floor(Math.random() * n);
      if (n > 1 && i === last) i = (i + 1 + Math.floor(Math.random() * (n - 1))) % n;
      last = i;
      const centre = i * step + step / 2;
      const jitter = (Math.random() - 0.5) * step * 0.6;
      const target = -(centre + jitter);
      const base = cur - (((cur % 360) + 360) % 360);
      let next = base + 360 * 5 + (((target % 360) + 360) % 360);
      if (next - cur < 360 * 4) next += 360;
      const from = cur, dur = 3200, t0 = performance.now();
      cur = next;
      const ease = t => 1 - Math.pow(1 - t, 4);
      const frame = now => {
        const t = Math.min(1, (now - t0) / dur);
        rot.setAttribute('transform', `rotate(${(from + (next - from) * ease(t)).toFixed(2)} ${C} ${C})`);
        if (t < 1) requestAnimationFrame(frame); else done();
      };
      requestAnimationFrame(frame);
      const done = () => {
        busy = false; btn.disabled = false;
        chosen = muc[i];
        kq.textContent = chosen.c; kq.classList.toggle('nho', Array.from(chosen.c).length > 4);
        kq.classList.add('on'); sfx(true);
        if (chosen.am) setTimeout(() => play(chosen.am), 250);
        spins++;
        dem.textContent = 'Đã quay: ' + Math.min(spins, can) + '/' + can + (spins >= can ? ' – giỏi lắm!' : '');
        if (spins >= can && !won) { won = true; ctx.win(); }
      };
    };
  };
});
