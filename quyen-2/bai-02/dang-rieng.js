/* Dạng bài riêng của Quyển 2 – Bài 2: "dem-so" – điền số còn thiếu (trò chơi Chạy tiếp sức – đếm số).
   ex.vong: [{ ten: 'Vòng 1', luat?: 'luật chơi', bang?: true (bảng 10 cột) ,
               hang: [[41, 42, 0, 44, …]]  hoặc  [{ nhan: 'a)', so: [30, 31, 32, 0, …] }] }]
   Số 0 = ô trống, đáp án là số đúng theo dãy (tự tính từ hai số bên cạnh). ex.ket?: câu kết.
   Em chạm vào ô trống, bấm số trên bàn phím; điền đúng hết các ô thì được sao. */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, feedback, flash, sfx, toast } = A;
  if (!document.getElementById('dang-dem-so')) {
    const st = document.createElement('style'); st.id = 'dang-dem-so';
    st.textContent = `
.ds-vong{margin:0 0 16px}
.ds-ten{display:inline-block;background:var(--c);color:#fff;font-weight:700;border-radius:10px;padding:4px 14px;font-size:18px;margin:0 0 6px}
.ds-luat{margin:0 0 10px;font-size:16px;line-height:1.45;color:var(--ink-2)}
.ds-bang{display:grid;grid-template-columns:repeat(10,minmax(0,1fr));gap:3px;border-radius:12px;overflow:hidden}
.ds-bang .ds-o{border-radius:6px}
.ds-hang{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin:0 0 10px}
.ds-hang .ds-nhan{font-weight:700;font-size:22px;color:var(--c);min-width:28px}
.ds-hang .ds-o{width:52px;height:52px;border-radius:50%}
.ds-o{display:grid;place-items:center;font:inherit;font-weight:700;font-size:clamp(15px,3.6vw,20px);min-height:38px;border:2px solid transparent;background:#fff;color:var(--ink);padding:0}
.ds-o.so{background:var(--bgc,#F6F1E9)}
button.ds-o{cursor:pointer;border-color:#D9CFC2;border-style:dashed;color:#E0577A;touch-action:manipulation}
button.ds-o.sel{border-color:var(--straw);border-style:solid;box-shadow:0 0 0 3px rgba(221,170,85,.35)}
button.ds-o.ok{border-color:var(--ok);border-style:solid;background:var(--ok-bg);color:var(--ok)}
button.ds-o.bad{animation:shake .4s}
.ds-pad{position:sticky;bottom:8px;z-index:5;margin-top:10px;background:rgba(255,253,249,.97);border-radius:16px;box-shadow:var(--shadow);padding:8px;display:flex;flex-wrap:wrap;gap:6px;align-items:center;justify-content:center}
.ds-k{min-width:48px;min-height:48px;border:2px solid var(--line);background:#fff;border-radius:12px;font:inherit;font-size:24px;font-weight:700;cursor:pointer;touch-action:manipulation;color:var(--ink)}
.ds-k:active{transform:scale(.95)}
.ds-dem{font-weight:700;color:var(--ink-2);margin:6px 0}
.ds-ket{font-weight:700;margin:8px 0 0}
`;
    document.head.append(st);
  }
  const NEN = ['#F3E6F7', '#FCE3D3', '#D9EFE3', '#DCE8FA', '#FFF4CF', '#E9DDF6'];

  A.T['dem-so'] = function (ex, ctx) {
    const blanks = []; // { el, dap, val, done }
    let cur = -1, won = false;
    const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    const dem = h('div', { class: 'ds-dem' });
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Chạm vào ô trống, rồi bấm số còn thiếu. Đếm thật nhanh và thật đúng nhé!'));
    const dapOf = (row, i) => { // số đúng theo dãy: tìm hai số đã biết gần nhất hai bên
      let a = i - 1; while (a >= 0 && !row[a]) a--;
      let b = i + 1; while (b < row.length && !row[b]) b++;
      if (a >= 0 && b < row.length) return row[a] + (row[b] - row[a]) / (b - a) * (i - a);
      if (a >= 1) { let a2 = a - 1; while (a2 >= 0 && !row[a2]) a2--; return row[a] + (row[a] - row[a2]) / (a - a2) * (i - a); }
      let b2 = b + 1; while (b2 < row.length && !row[b2]) b2++;
      return row[b] - (row[b2] - row[b]) / (b2 - b) * (b - i);
    };
    function cell(n, row, i) {
      if (n) return h('span', { class: 'ds-o so' }, String(n));
      const k = blanks.length;
      const el = h('button', { class: 'ds-o', type: 'button', 'aria-label': 'Ô trống' }, '?');
      el.onclick = () => select(k);
      blanks.push({ el, dap: String(Math.round(dapOf(row, i))), val: '', done: false });
      return el;
    }
    ex.vong.forEach(v => {
      const box = h('div', { class: 'ds-vong' }, h('span', { class: 'ds-ten' }, v.ten));
      if (v.luat) box.append(h('p', { class: 'ds-luat' }, v.luat));
      if (v.bang) {
        const g = h('div', { class: 'ds-bang' });
        v.hang.forEach((row, r) => row.forEach((n, i) => { const c = cell(n, row, i); c.style.setProperty('--bgc', NEN[r % NEN.length]); if (!n) c.style.background = NEN[r % NEN.length]; g.append(c); }));
        box.append(g);
      } else {
        v.hang.forEach(hr => {
          const row = h('div', { class: 'ds-hang' }, hr.nhan ? h('span', { class: 'ds-nhan' }, hr.nhan) : null);
          hr.so.forEach((n, i) => row.append(cell(n, hr.so, i)));
          box.append(row);
        });
      }
      ctx.body.append(box);
    });
    if (ex.ket) ctx.body.append(h('p', { class: 'ds-ket' }, ex.ket));
    const show = k => { const b = blanks[k]; b.el.textContent = b.val || (b.done ? b.dap : '?'); };
    const count = () => { dem.textContent = 'Đã điền đúng ' + blanks.filter(b => b.done).length + '/' + blanks.length + ' số'; };
    function select(k) {
      if (blanks[k].done) return;
      cur = k; blanks.forEach((b, j) => b.el.classList.toggle('sel', j === k));
      fb.textContent = ''; fb.className = 'fb';
    }
    function type(d) {
      if (cur < 0) return;
      const b = blanks[cur];
      if (b.val.length >= b.dap.length) b.val = '';
      b.val += d; show(cur);
      if (b.val.length < b.dap.length) return;
      if (b.val === b.dap) {
        b.done = true; b.el.classList.remove('sel'); b.el.classList.add('ok'); b.el.disabled = true; sfx(true); count();
        if (blanks.every(x => x.done)) { cur = -1; if (!won) { won = true; ctx.win(); feedback(fb, true, 'Giỏi quá! Em đã điền đúng hết các số.'); } return; }
        const n = blanks.findIndex((x, j) => j > cur && !x.done); select(n >= 0 ? n : blanks.findIndex(x => !x.done));
      } else {
        flash(b.el, 'bad', 450); feedback(fb, false, 'Chưa đúng, em đếm lại nhé!');
        setTimeout(() => { if (!b.done) { b.val = ''; show(blanks.indexOf(b)); } }, 500);
      }
    }
    const pad = h('div', { class: 'ds-pad', 'aria-label': 'Bàn phím số' });
    '1234567890'.split('').forEach(d => { const k = h('button', { class: 'ds-k', type: 'button' }, d); k.onclick = () => type(d); pad.append(k); });
    const del = h('button', { class: 'btn soft small', type: 'button' }, icon('back'), 'Xoá');
    del.onclick = () => { if (cur < 0) return; const b = blanks[cur]; b.val = b.val.slice(0, -1); show(cur); };
    pad.append(del);
    ctx.body.append(dem, pad, fb);
    count();
    setTimeout(() => select(0), 0);
    if (!blanks.length) toast('Không có ô trống');
  };
});
