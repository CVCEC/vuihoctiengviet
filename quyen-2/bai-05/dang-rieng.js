/* Dạng bài riêng của Quyển 2 – Bài 5: "noi-tieng" – nối 1 tiếng ở A với 1 tiếng phù hợp ở B và tô cùng màu
   (hai chú công trong sách). Hai bên có thể có tiếng trùng nhau (ví dụ ba tiếng "đỏ"), nên đúng/sai
   xét theo từ ghép được, không theo vị trí.
   ex.a: ['đỗ', 'cua', …], ex.b: ['đá', 'đỏ', …], ex.tu: ['cá đĩa', 'cua đá', …] (các từ đúng),
   ex.viDu?: ['cá đĩa'] (đã nối sẵn như trong sách) */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, feedback, flash, sfx } = A;
  if (!document.getElementById('dang-noi-tieng')) {
    const st = document.createElement('style'); st.id = 'dang-noi-tieng';
    st.textContent = `
.nt{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media (max-width:520px){.nt{gap:8px}}
.nt-col{border-radius:22px;padding:10px 8px 12px;display:flex;flex-direction:column;align-items:center;gap:8px}
.nt-col.a{background:#EAF2FD;border:3px solid #6FA3E6}
.nt-col.b{background:#EAF6EC;border:3px solid #7DBB86}
.nt-h{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font-weight:700;color:#fff;font-size:18px}
.nt-col.a .nt-h{background:#4F86D6}
.nt-col.b .nt-h{background:#4E9E5C}
.nt-chips{display:flex;flex-wrap:wrap;justify-content:center;gap:8px}
.nt-c{min-width:64px;min-height:52px;padding:4px 12px;border-radius:999px;border:2px solid #fff;background:#fff;font:inherit;font-weight:700;font-size:clamp(19px,4.4vw,24px);color:#C2185B;cursor:pointer;touch-action:manipulation;box-shadow:0 1px 3px rgba(0,0,0,.12)}
.nt-c.sel{border-color:var(--straw);box-shadow:0 0 0 4px rgba(221,170,85,.4)}
.nt-c.ok{color:#fff;border-color:transparent;cursor:default}
.nt-c.bad{animation:shake .4s}
.nt-list{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 0;min-height:40px;align-items:center}
.nt-list .lab{color:var(--ink-2);font-size:15px}
.nt-w{border-radius:12px;padding:4px 12px;font-weight:700;font-size:19px;color:#fff}
`;
    document.head.append(st);
  }
  const MAU = ['#F08FB0', '#E0577A', '#4F86D6', '#4E9E5C', '#D9822B', '#8A5CC2', '#2B8C99', '#C2457A', '#8F5E36', '#5C6BC0'];

  A.T['noi-tieng'] = function (ex, ctx) {
    const a = ex.a.map(s => s.normalize('NFC')), b = ex.b.map(s => s.normalize('NFC'));
    const tu = new Set(ex.tu.map(s => s.normalize('NFC')));
    const ok = (i, j) => tu.has(a[i] + ' ' + b[j]);
    const pairA = a.map(() => -1), pairB = b.map(() => -1);
    // còn ghép được hết các tiếng còn lại không? (tìm cặp ghép đầy đủ – thử lần lượt)
    function conGhepDuoc(doneA, doneB) {
      const i = a.findIndex((_, k) => !doneA.has(k));
      if (i < 0) return true;
      for (let j = 0; j < b.length; j++) {
        if (doneB.has(j) || !ok(i, j)) continue;
        doneA.add(i); doneB.add(j);
        const r = conGhepDuoc(doneA, doneB);
        doneA.delete(i); doneB.delete(j);
        if (r) return true;
      }
      return false;
    }
    const used = () => [new Set(a.map((_, k) => k).filter(k => pairA[k] >= 0)), new Set(b.map((_, k) => k).filter(k => pairB[k] >= 0))];
    let selA = -1, selB = -1, n = 0, won = false;
    const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    const list = h('div', { class: 'nt-list' }, h('span', { class: 'lab' }, 'Các từ em ghép được:'));
    const chipsA = a.map((s, i) => { const c = h('button', { class: 'nt-c', type: 'button' }, s); c.onclick = () => pick('a', i); return c; });
    const chipsB = b.map((s, j) => { const c = h('button', { class: 'nt-c', type: 'button' }, s); c.onclick = () => pick('b', j); return c; });
    function noi(i, j, im) {
      const col = MAU[n++ % MAU.length];
      pairA[i] = j; pairB[j] = i;
      [chipsA[i], chipsB[j]].forEach(c => { c.classList.add('ok'); c.classList.remove('sel'); c.style.background = col; c.disabled = true; });
      list.append(h('span', { class: 'nt-w', style: { background: col } }, a[i] + ' ' + b[j]));
      if (!im) sfx(true);
    }
    function pick(side, k) {
      if (side === 'a') { if (pairA[k] >= 0) return; selA = selA === k ? -1 : k; }
      else { if (pairB[k] >= 0) return; selB = selB === k ? -1 : k; }
      chipsA.forEach((c, i) => c.classList.toggle('sel', i === selA));
      chipsB.forEach((c, j) => c.classList.toggle('sel', j === selB));
      if (selA < 0 || selB < 0) return;
      const i = selA, j = selB; selA = selB = -1;
      chipsA[i].classList.remove('sel'); chipsB[j].classList.remove('sel');
      const w = a[i] + ' ' + b[j];
      if (!ok(i, j)) { flash(chipsA[i], 'bad', 450); flash(chipsB[j], 'bad', 450); feedback(fb, false, '“' + w + '” chưa phải là từ đúng. Thử lại nhé!'); return; }
      const [dA, dB] = used(); dA.add(i); dB.add(j);
      if (!conGhepDuoc(dA, dB)) { flash(chipsB[j], 'bad', 450); feedback(fb, false, '“' + w + '” cũng là một từ, nhưng tiếng “' + b[j] + '” cần để ghép với tiếng khác. Em thử tiếng khác nhé!'); return; }
      noi(i, j);
      if (pairA.every(x => x >= 0)) { if (!won) { won = true; feedback(fb, true, 'Giỏi quá! Em đã nối và tô màu đúng hết.'); ctx.win(); } }
      else feedback(fb, true, 'Đúng rồi: ' + w + '!');
    }
    (ex.viDu || []).forEach(w => {
      const [x, y] = w.normalize('NFC').split(' ');
      const i = a.findIndex((s, k) => s === x && pairA[k] < 0), j = b.findIndex((s, k) => s === y && pairB[k] < 0);
      if (i >= 0 && j >= 0) noi(i, j, true);
    });
    ctx.body.append(
      h('p', { class: 'hint' }, ex.goiY || 'Chạm vào một tiếng ở A, rồi chạm vào tiếng ở B để ghép thành từ. Hai tiếng nối đúng sẽ được tô cùng màu.'),
      h('div', { class: 'nt' },
        h('div', { class: 'nt-col a' }, h('span', { class: 'nt-h' }, 'A'), h('div', { class: 'nt-chips' }, chipsA)),
        h('div', { class: 'nt-col b' }, h('span', { class: 'nt-h' }, 'B'), h('div', { class: 'nt-chips' }, chipsB))),
      list, fb);
  };
});
