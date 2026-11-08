/* Dạng bài 'sap-xep' – Sắp xếp theo đúng thứ tự (câu trong đoạn, hoặc từ trong câu)
   ex.muc: ['…', '…'] theo thứ tự ĐÚNG (trẻ thấy đã xáo trộn); ex.ngang?: true để xếp từ thành câu trên một hàng;
   ex.am?: [] âm thanh từng mục (cùng thứ tự với ex.muc); ex.goiY? */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  const { h, icon, play, stopAll, wait, shuffle, feedback, flash, sfx } = A;
  const CSS = `
.sx-slots{display:flex;flex-direction:column;gap:8px;margin-bottom:12px}
.sx.ngang .sx-slots{flex-direction:row;flex-wrap:wrap;align-items:center;gap:8px;padding:10px;border:2px dashed var(--line);border-radius:16px;min-height:72px}
.sx-slot{display:flex;align-items:center;gap:10px;min-height:56px;border:2px dashed #D9CFC2;border-radius:14px;padding:4px 8px;background:#FFFDF9;cursor:pointer;font:inherit;text-align:left;color:var(--ink);touch-action:manipulation}
.sx.ngang .sx-slot{min-width:72px;justify-content:center}
.sx-slot .n{flex:none;width:30px;height:30px;border-radius:50%;background:var(--c,#8A5CC2);color:#fff;font-weight:700;display:grid;place-items:center;font-size:15px}
.sx.ngang .sx-slot .n{display:none}
.sx-slot.arm{border-color:var(--straw);box-shadow:0 0 0 4px rgba(221,170,85,.3)}
.sx-slot.full{border-style:solid;border-color:var(--line);background:#fff}
.sx-slot.good{border-color:var(--ok);background:var(--ok-bg)}
.sx-slot.bad{border-color:var(--no);background:var(--no-bg);animation:shake .4s}
.sx-slot .t{font-weight:700;font-size:clamp(17px,3.8vw,21px)}
.sx-bank{display:flex;flex-wrap:wrap;gap:8px}
.sx-bank .opt{font-size:clamp(17px,3.8vw,20px);text-align:left;min-height:52px}
.sx-bank:empty::before{content:'Đã xếp hết – bấm “Kiểm tra”.';color:var(--ink-2);font-size:15px}
.sx.solved .sx-bank:empty::before{content:none}
`;
  if (!document.getElementById('dang-sap-xep')) { const s = document.createElement('style'); s.id = 'dang-sap-xep'; s.textContent = CSS; document.head.append(s); }

  A.T['sap-xep'] = function (ex, ctx) {
    const n = ex.muc.length;
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || (ex.ngang ? 'Chạm vào các từ theo đúng thứ tự để xếp thành câu.' : 'Chạm vào từng câu theo đúng thứ tự. Chạm vào ô đã xếp để bỏ ra.')));
    const box = h('div', { class: 'sx' + (ex.ngang ? ' ngang' : '') });
    const slotsEl = h('div', { class: 'sx-slots' }), bank = h('div', { class: 'sx-bank' });
    const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    const check = h('button', { class: 'btn green', type: 'button', disabled: true }, icon('check'), 'Kiểm tra');
    const slots = []; // mỗi ô: chỉ số mục (theo thứ tự đúng) hoặc -1
    let armed = -1, solved = false;
    for (let i = 0; i < n; i++) {
      const t = h('span', { class: 't' });
      const s = h('button', { class: 'sx-slot', type: 'button', 'aria-label': 'Ô thứ ' + (i + 1) }, h('span', { class: 'n' }, String(i + 1)), t);
      s.onclick = () => {
        if (solved) return;
        if (slots[i].v >= 0) { const v = slots[i].v; slots[i].v = -1; render(); addBank(v); }
        else { armed = armed === i ? -1 : i; render(); }
      };
      slots.push({ el: s, t, v: -1 }); slotsEl.append(s);
    }
    let order = shuffle(ex.muc.map((_, i) => i));
    if (n > 1) for (let tries = 0; order.every((v, i) => ex.muc[v] === ex.muc[i]) && tries < 10; tries++) order = shuffle(order);
    const bankBtns = {};
    function addBank(v) {
      const b = h('button', { class: 'opt', type: 'button' }, ex.muc[v]);
      b.onclick = () => {
        if (solved) return;
        if (ex.am && ex.am[v]) { stopAll(); play(ex.am[v]); }
        let target = armed >= 0 && slots[armed].v < 0 ? armed : slots.findIndex(s => s.v < 0);
        if (target < 0) return;
        slots[target].v = v; armed = -1; b.remove(); delete bankBtns[v]; render();
      };
      bankBtns[v] = b; bank.append(b);
    }
    order.forEach(addBank);
    function render() {
      slots.forEach((s, i) => {
        s.t.textContent = s.v >= 0 ? ex.muc[s.v] : '';
        s.el.classList.toggle('full', s.v >= 0);
        s.el.classList.toggle('arm', i === armed);
        s.el.classList.remove('good', 'bad');
      });
      check.disabled = slots.some(s => s.v < 0) || solved;
      fb.className = 'fb'; fb.textContent = '';
    }
    check.onclick = async () => {
      let ok = 0;
      const same = (v, i) => v >= 0 && ex.muc[v] === ex.muc[i];
      slots.forEach((s, i) => { const g = same(s.v, i); s.el.classList.add(g ? 'good' : 'bad'); if (g) ok++; });
      if (ok === n) {
        solved = true; box.classList.add('solved'); check.disabled = true; feedback(fb, true, 'Đúng rồi! Em đã xếp đúng thứ tự.'); ctx.win();
        if (ex.am && ex.am.some(Boolean)) { const my = A.gen(); for (let i = 0; i < n && A.gen() === my; i++) { slots[i].el.classList.add('arm'); if (ex.am[i]) await play(ex.am[i]); slots[i].el.classList.remove('arm'); } }
      } else {
        feedback(fb, false, 'Có ' + (n - ok) + ' chỗ chưa đúng. Các ô đỏ sẽ trở về để em xếp lại.');
        await wait(1300);
        slots.forEach((s, i) => { if (s.v >= 0 && !same(s.v, i)) { const v = s.v; s.v = -1; addBank(v); } });
        render();
        slots.forEach((s, i) => { if (same(s.v, i)) s.el.classList.add('good'); });
      }
    };
    const again = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Làm lại');
    again.onclick = () => { solved = false; box.classList.remove('solved'); slots.forEach(s => { if (s.v >= 0) { const v = s.v; s.v = -1; addBank(v); } }); render(); };
    box.append(slotsEl, bank);
    ctx.body.append(box, h('div', { class: 'mrow' }, check, again), fb);
    render();
  };
});
