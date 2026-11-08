/* Dạng bài riêng của Quyển 2, Bài 16–20 (cùng một tệp, chép giống nhau vào từng bài):
   1) "vong-quay-hinh" – vòng quay hình như trong sách.
   2) "ghep-van" – đánh vần vần nhiều chữ cái như bảng màu trong sách: o | a | n → oan, "o – a – nờ – oan". */
/* Dạng bài riêng "vong-quay-hinh": vòng quay hình như trong sách. Bấm “Quay” → dừng ở một hình → hiện to hình và chữ, em nói câu.
   ex.muc: [{ hinh, c, am? }]   ex.can: số lượt quay để được sao (mặc định 5)
   ex.muc[i].cau?: câu gợi ý riêng cho ô đó ('Mời bạn ăn kem!')
   ex.mau?: 'một dòng mẫu' | ['dòng 1', 'dòng 2'] | { cau: [{ c, am? }] } – khung mẫu (M)   ex.cauMau?: 'Em đi học bằng {c}.' – câu gợi ý hiện dưới hình   ex.goiY, ex.ghiAm */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  if (A.T['vong-quay-hinh']) return;
  const { h, icon, play, stopAll, sfx, recorder, modelBox } = A;
  if (!document.getElementById('dang-vong-quay-hinh')) {
    const st = document.createElement('style'); st.id = 'dang-vong-quay-hinh';
    st.textContent = `
.vqh{display:grid;grid-template-columns:minmax(0,1fr);gap:14px;justify-items:center;margin-top:10px}
@media (min-width:700px){.vqh{grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);align-items:center}}
.vqh-wrap{position:relative;width:min(100%,400px);aspect-ratio:1/1}
.vqh-wrap svg{width:100%;height:100%;display:block}
.vqh-ptr{position:absolute;left:50%;top:-6px;transform:translateX(-50%);width:0;height:0;border-left:16px solid transparent;border-right:16px solid transparent;border-top:30px solid var(--ink);filter:drop-shadow(0 2px 2px rgba(0,0,0,.25));z-index:2}
.vqh-side{display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center;width:100%}
.vqh-kq{width:min(100%,260px);min-height:170px;padding:10px;border-radius:22px;background:#fff;border:3px solid var(--line);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;cursor:pointer;font:inherit;color:var(--ink)}
.vqh-kq img{width:100%;max-height:150px;object-fit:contain}
.vqh-kq .q{font-size:64px;font-weight:700;color:#C9BFB2;line-height:1}
.vqh-kq .w{font-size:clamp(26px,6vw,34px);font-weight:700;line-height:1.15}
.vqh-kq.on{border-color:var(--straw);box-shadow:0 0 0 5px rgba(221,170,85,.3);animation:pop .5s ease}
.vqh-cau{font-size:clamp(20px,4.6vw,24px);font-weight:700;min-height:30px;color:var(--ink-2)}
.vqh-dem{font-weight:700;color:var(--ink-2)}
`;
    document.head.append(st);
  }
  const MAU = ['#B79AD9', '#E8789A', '#F2A65A', '#E86D6D', '#F4C04E', '#7FB77E', '#5AA9E6', '#9C8ADE'];
  const NS = 'http://www.w3.org/2000/svg';
  const svgEl = (tag, attrs) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); return e; };

  A.T['vong-quay-hinh'] = function (ex, ctx) {
    const muc = ex.muc || [], n = muc.length, can = ex.can || 5;
    const R = 190, C = 200, step = 360 / n;
    const rad = a => (a - 90) * Math.PI / 180;
    const pt = (a, r) => [C + r * Math.cos(rad(a)), C + r * Math.sin(rad(a))];
    const svg = svgEl('svg', { viewBox: '0 0 400 400', role: 'img', 'aria-label': 'Vòng quay hình' });
    const rot = svgEl('g', {});
    const pics = [];
    const rc = R * (n <= 6 ? 0.56 : 0.6);
    const sz = Math.min(120, 2 * Math.PI * rc / n * 1.08);
    muc.forEach((m, i) => {
      const a0 = i * step, a1 = a0 + step;
      const [x0, y0] = pt(a0, R), [x1, y1] = pt(a1, R);
      const col = MAU[i % MAU.length];
      rot.append(svgEl('path', { d: `M${C},${C} L${x0.toFixed(2)},${y0.toFixed(2)} A${R},${R} 0 ${step > 180 ? 1 : 0} 1 ${x1.toFixed(2)},${y1.toFixed(2)} Z`, fill: '#fff' }));
      rot.append(svgEl('path', { d: `M${x0.toFixed(2)},${y0.toFixed(2)} A${R - 4},${R - 4} 0 0 1 ${x1.toFixed(2)},${y1.toFixed(2)}`, fill: 'none', stroke: col, 'stroke-width': 8 }));
      rot.append(svgEl('line', { x1: C, y1: C, x2: x0.toFixed(2), y2: y0.toFixed(2), stroke: col, 'stroke-width': 3 }));
      const [cx, cy] = pt(a0 + step / 2, rc);
      const im = svgEl('image', { href: m.hinh, x: (cx - sz / 2).toFixed(2), y: (cy - sz / 2).toFixed(2), width: sz.toFixed(2), height: sz.toFixed(2), preserveAspectRatio: 'xMidYMid meet' });
      pics.push({ im, x: cx.toFixed(2), y: cy.toFixed(2) });
      rot.append(im);
    });
    rot.append(svgEl('circle', { cx: C, cy: C, r: 22, fill: '#E9C27A', stroke: '#B9874A', 'stroke-width': 4 }));
    rot.append(svgEl('circle', { cx: C, cy: C, r: 8, fill: '#B9874A' }));
    svg.append(svgEl('circle', { cx: C, cy: C, r: R + 6, fill: '#FFFDF9', stroke: '#5AA9E6', 'stroke-width': 6 }), rot);
    const wrap = h('div', { class: 'vqh-wrap' }, h('div', { class: 'vqh-ptr' }), svg);

    const kq = h('button', { class: 'vqh-kq', type: 'button', 'aria-label': 'Hình vừa quay được' }, h('span', { class: 'q' }, '?'));
    const cau = h('div', { class: 'vqh-cau', 'aria-live': 'polite' });
    const dem = h('div', { class: 'vqh-dem' }, 'Đã quay: 0/' + can);
    const btn = h('button', { class: 'btn green', type: 'button' }, icon('redo'), 'Quay');
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Bấm “Quay”. Vòng quay dừng ở hình nào, em nói to tên hình đó và đặt câu.'));
    if (typeof ex.mau === 'string' || Array.isArray(ex.mau)) { // dòng mẫu chép nguyên văn (không thêm gạch đầu dòng)
      const ds = [].concat(ex.mau);
      ctx.body.append(h('div', { class: 'model' }, h('div', { class: 'lines' }, h('span', { class: 'm' }, 'M'), ds.map(c => h('div', { class: 'line quiet' }, c)))));
    } else if (ex.mau) ctx.body.append(modelBox(ex.mau).el);
    ctx.body.append(h('div', { class: 'vqh' }, wrap, h('div', { class: 'vqh-side' }, kq, cau, btn, dem)));
    ctx.body.append(recorder({ label: ex.ghiAm || 'Ghi âm câu em nói' }));

    let cur = 0, spins = 0, last = -1, busy = false, won = false, chosen = null;
    kq.onclick = () => { if (chosen && chosen.am) { stopAll(); play(chosen.am); } };
    btn.onclick = () => {
      if (busy || !n) return;
      busy = true; btn.disabled = true; stopAll();
      kq.classList.remove('on'); kq.innerHTML = ''; kq.append(h('span', { class: 'q' }, '…')); cau.textContent = '';
      let i = Math.floor(Math.random() * n);
      if (n > 1 && i === last) i = (i + 1 + Math.floor(Math.random() * (n - 1))) % n;
      last = i;
      const centre = i * step + step / 2;
      const target = -(centre + (Math.random() - 0.5) * step * 0.6);
      const base = cur - (((cur % 360) + 360) % 360);
      let next = base + 360 * 5 + (((target % 360) + 360) % 360);
      if (next - cur < 360 * 4) next += 360;
      const from = cur, dur = 3200, t0 = performance.now();
      cur = next;
      const ease = t => 1 - Math.pow(1 - t, 4);
      const frame = now => {
        const t = Math.min(1, (now - t0) / dur);
        const a = from + (next - from) * ease(t);
        rot.setAttribute('transform', `rotate(${a.toFixed(2)} ${C} ${C})`);
        pics.forEach(p => p.im.setAttribute('transform', `rotate(${(-a).toFixed(2)} ${p.x} ${p.y})`));
        if (t < 1) requestAnimationFrame(frame); else done();
      };
      requestAnimationFrame(frame);
      const done = () => {
        busy = false; btn.disabled = false;
        chosen = muc[i];
        kq.innerHTML = ''; kq.append(h('img', { src: chosen.hinh, alt: '' }), h('span', { class: 'w' }, chosen.c));
        kq.setAttribute('aria-label', chosen.c);
        kq.classList.add('on'); sfx(true);
        if (chosen.cau) cau.textContent = chosen.cau;
        else if (ex.cauMau) cau.textContent = ex.cauMau.split('{c}').join(chosen.c);
        if (chosen.am) setTimeout(() => play(chosen.am), 250);
        spins++;
        dem.textContent = 'Đã quay: ' + Math.min(spins, can) + '/' + can + (spins >= can ? ' – giỏi lắm!' : '');
        if (spins >= can && !won) { won = true; ctx.win(); }
      };
    };
  };
});

/* "ghep-van": đánh vần vần (bảng màu như sách Quyển 2).
   ex.tu: [{ hinh?, tu: 'hoa xoan' (chữ dưới hình), van: 'oan', phan: ['o','a','n'], doc: 'o – a – nờ – oan', am? }]
   Mỗi bước đọc ứng với một ô chữ; bước cuối là cả vần. Đánh vần hết các thẻ → được sao. */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  if (A.T['ghep-van']) return;
  const { h, icon, play, stopAll, wait, flash, nfc } = A;
  if (!document.getElementById('dang-ghep-van')) {
    const st = document.createElement('style'); st.id = 'dang-ghep-van';
    st.textContent = `
.gv{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px}
.gv-card{background:#fff;border:2px dashed #E9B8C7;border-radius:16px;padding:10px;display:flex;flex-direction:column;gap:8px}
.gv-card.ok{border-style:solid;border-color:var(--ok)}
.gv-pic{border:0;background:transparent;padding:0;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;font:inherit;color:var(--ink)}
.gv-pic img{width:100%;max-width:220px;aspect-ratio:4/3;object-fit:contain}
.gv-tu{font-size:28px;font-weight:700;line-height:1.15;text-align:center}
.gv-tu .on{color:#E0577A}
.gv-tab{display:grid;border-radius:8px;overflow:hidden;font-weight:700;font-size:24px;text-align:center}
.gv-tab > div{min-height:40px;display:flex;align-items:center;justify-content:center;transition:background .25s, transform .25s}
.gv-tab .c0{background:#FBD9DE;color:#C2185B}
.gv-tab .c1{background:#D8EEDB;color:#2E7D4F}
.gv-tab .c2{background:#FFF0B8;color:#9A6B00}
.gv-tab .c3{background:#E6DAF5;color:#6A3FA0}
.gv-tab .van{grid-column:1 / -1;background:#DCE7FA;color:#C2185B}
.gv-tab .lit{box-shadow:inset 0 0 0 3px var(--straw);transform:scale(1.04);position:relative;z-index:1}
.gv-tab .muted{color:transparent}
.gv-doc{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:2px;border:2px solid #E9B8C7;border-radius:10px;padding:6px}
.gv-doc button{border:0;background:transparent;font:inherit;font-size:20px;padding:4px 6px;border-radius:8px;cursor:pointer;color:#B7AC9E;min-height:40px}
.gv-doc button.done{color:var(--ink)}
.gv-doc button.lit{background:#FFF1D6;color:var(--ink)}
.gv-doc i{font-style:normal;color:#B7AC9E;margin-right:2px}
.gv-st{display:inline-flex;align-items:center;white-space:nowrap}
.gv-go{align-self:center}
`;
    document.head.append(st);
  }
  const strip = s => nfc(s).normalize('NFD').replace(/[̣̀́̃̉]/g, '').normalize('NFC').toLowerCase();
  function caption(tu, van) { // tô màu vần trong chữ dưới hình (không phân biệt dấu thanh)
    const t = Array.from(nfc(tu)), s = Array.from(strip(tu)), v = Array.from(strip(van));
    const el = h('span', { class: 'gv-tu' });
    let at = -1;
    for (let i = s.length - v.length; i >= 0; i--) { if (s.slice(i, i + v.length).join('') === v.join('')) { at = i; break; } }
    if (at < 0) { el.append(t.join('')); return el; }
    el.append(t.slice(0, at).join(''), h('span', { class: 'on' }, t.slice(at, at + v.length).join('')), t.slice(at + v.length).join(''));
    return el;
  }

  A.T['ghep-van'] = function (ex, ctx) {
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Bấm “Đánh vần” để xem các chữ ghép thành vần. Chạm vào từng bước để đọc theo.'));
    const grid = h('div', { class: 'gv' });
    const opened = new Set();
    ex.tu.forEach((w, wi) => {
      const phan = w.phan || Array.from(w.van);
      const steps = (w.doc || '').split(/\s*[–—-]\s*/).map(s => s.trim()).filter(Boolean);
      const pic = h('button', { class: 'gv-pic', type: 'button', 'aria-label': w.tu || w.van }, w.hinh ? h('img', { src: w.hinh, alt: w.tu || '' }) : null, w.tu ? caption(w.tu, w.van) : null);
      const tab = h('div', { class: 'gv-tab', style: { gridTemplateColumns: 'repeat(' + phan.length + ',1fr)' } });
      const cells = phan.map((c, i) => { const d = h('div', { class: 'c' + (i % 4) }, c); tab.append(d); return d; });
      const vanRow = h('div', { class: 'van muted' }, w.van); tab.append(vanRow);
      const docBtns = [];
      const doc = h('div', { class: 'gv-doc' });
      steps.forEach((s, i) => {
        const b = h('button', { type: 'button' }, s);
        b.onclick = () => { stopAll(); show(i); if (w.am && i === steps.length - 1) play(w.am); };
        docBtns.push(b); doc.append(h('span', { class: 'gv-st' }, i ? h('i', null, '–') : null, b));
      });
      const go = h('button', { class: 'btn wood small gv-go', type: 'button' }, icon('play'), 'Đánh vần');
      const card = h('div', { class: 'gv-card' }, pic, tab, doc, go);
      function show(i) {
        cells.forEach(c => c.classList.remove('lit')); vanRow.classList.remove('lit');
        docBtns.forEach((b, j) => { b.classList.toggle('lit', j === i); b.classList.toggle('done', j <= i); });
        const last = steps.length - 1;
        if (i < last && cells[i]) { cells[i].classList.add('lit'); vanRow.classList.add('muted'); }
        if (i >= last) {
          vanRow.classList.remove('muted'); vanRow.classList.add('lit');
          clearTimeout(card._t); card._t = setTimeout(() => vanRow.classList.remove('lit'), 1200);
          if (!opened.has(wi)) { opened.add(wi); card.classList.add('ok'); if (opened.size === ex.tu.length) ctx.win(); }
        }
      }
      async function run() {
        stopAll(); const my = A.gen();
        go.classList.add('playing');
        for (let i = 0; i < steps.length; i++) { show(i); await wait(800); if (A.gen() !== my) break; }
        go.classList.remove('playing');
        if (A.gen() === my && w.am) play(w.am);
      }
      go.onclick = run;
      pic.onclick = () => { stopAll(); flash(pic, 'pulse'); if (w.am) play(w.am); };
      grid.append(card);
    });
    ctx.body.append(grid);
  };
});
