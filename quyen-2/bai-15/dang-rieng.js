/* Dạng riêng của Quyển 2 – Bài 15
   1) 'danh-van-van' – Đánh vần vần (a – o – ao). Giống 'danh-van' (assets/js/dang/danh-van.js), nhưng chữ dưới hình
      là cả từ trong sách (vd. "ngôi sao", phần vần "ao" tô đỏ) thay cho riêng vần.
      ex.tu: [{ hinh, tu: 'ngôi sao', to: 'ao', tieng: 'ao', phan: ['a', 'o'], thanh: null, doc: 'a – o – ao' }]
   2) 'bang-van' – Ghép vần và tìm những từ có vần đó (bảng âm chính × âm cuối, sách trang 100).
      ex.hang: ['a', 'ă', …] (âm chính), ex.cot: ['m', 'p', …] (âm cuối),
      ex.co: { 'a': ['m', 'p', …], … } – ô ghép được (các ô khác tô xám như trong sách),
      ex.viDu: { 'a:nh': 'xanh', … } – từ in sẵn trong sách,
      ex.tu: [{ c: 'đàn', o: 'a:n' }, …] – trò chơi: chạm vào ô có vần của tiếng (đủ hết thì được sao). */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, stopAll, feedback, flash, sfx, wait, shuffle } = A;

  A.T['danh-van-van'] = function (ex, ctx) {
    A.T['danh-van'](ex, ctx);
    const words = ctx.body.querySelectorAll('.dv-word');
    ex.tu.forEach((w, i) => {
      const el = words[i];
      if (!w.tu || !el) return;
      const s = w.tu.normalize('NFC'), to = (w.to || '').normalize('NFC');
      const k = to ? s.lastIndexOf(to) : -1;
      el.innerHTML = '';
      if (k >= 0) el.append(s.slice(0, k), h('span', { class: 'on' }, to), s.slice(k + to.length));
      else el.append(s);
      const pic = el.closest('.dv-pic');
      if (pic) pic.setAttribute('aria-label', s);
      const img = pic && pic.querySelector('img');
      if (img) img.alt = s;
    });
  };

  if (!document.getElementById('dang-bang-van')) {
    const st = document.createElement('style'); st.id = 'dang-bang-van';
    st.textContent = `
.bv-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:12px;border:2px solid #F3E2A8;margin-top:10px;max-width:100%}
.bv{border-collapse:collapse;min-width:100%;background:#FFF8D6}
.bv th{background:#FCE7EC;color:#D2233F;font-weight:700;font-size:18px;padding:6px 4px;min-width:50px}
.bv th.r{background:#E3EEFB;color:#2457A6;position:sticky;left:0;z-index:2;min-width:44px}
.bv th.c0{position:sticky;left:0;z-index:3;background:#FFF8D6}
.bv td{border:1px solid #F1E3B0;padding:0}
.bv td.x{background:#C3C7D1;border-color:#D5D8DF}
.bv td button{display:block;width:100%;min-width:50px;height:46px;border:0;background:transparent;font:inherit;font-weight:700;font-size:15px;line-height:1.1;color:var(--ink);cursor:pointer;touch-action:manipulation;padding:0 3px}
.bv td button.peek{color:#9A8F80}
.bv td button.got{background:#F8C6D3;color:#B0174F}
.bv td button.bad{animation:shake .4s}
.bv-q{display:flex;align-items:center;gap:12px;flex-wrap:wrap;background:#fff;border:2px solid #EFE7DC;border-radius:16px;padding:10px 14px;min-height:64px}
.bv-q .bv-l{color:var(--ink-2);font-size:16px}
.bv-q .bv-w{font-size:clamp(28px,6vw,36px);font-weight:700;color:#B0174F;line-height:1.1}
.bv-q .dots{margin-left:auto}
`;
    document.head.append(st);
  }

  A.T['bang-van'] = function (ex, ctx) {
    const hang = ex.hang.map(x => x.normalize('NFC')), cot = ex.cot.map(x => x.normalize('NFC'));
    const co = {}; Object.keys(ex.co).forEach(k => { co[k.normalize('NFC')] = ex.co[k].map(x => x.normalize('NFC')); });
    const vd = {}; Object.keys(ex.viDu || {}).forEach(k => { vd[k.normalize('NFC')] = ex.viDu[k].normalize('NFC'); });
    const tu = (ex.tu || []).map(t => ({ c: t.c.normalize('NFC'), o: t.o.normalize('NFC') }));
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Chạm vào một ô để ghép âm chính với âm cuối thành vần. Bấm “Tìm vần” để chơi: chạm vào ô có vần của tiếng.'));
    const btn = {};
    const head = h('tr', null, h('th', { class: 'c0' }), cot.map(c => h('th', { scope: 'col' }, c)));
    const rows = hang.map(v => h('tr', null, h('th', { class: 'r', scope: 'row' }, v), cot.map(c => {
      if (!(co[v] || []).includes(c)) return h('td', { class: 'x' });
      const k = v + ':' + c;
      const b = h('button', { type: 'button', 'aria-label': 'vần ' + v + c }, vd[k] || '');
      if (vd[k]) b.dataset.vd = '1';
      btn[k] = b;
      b.onclick = () => pick(k, v + c, b);
      return h('td', null, b);
    })));
    const table = h('table', { class: 'bv' }, h('thead', null, head), h('tbody', null, rows));
    const q = h('div', { class: 'bv-q', 'aria-live': 'polite' });
    const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    let order = null, k = 0, dots = null, busy = false;

    function peek(b, rime) {
      if (b.classList.contains('got') || b.dataset.vd) { flash(b, 'peek', 600); return; }
      b.textContent = rime; b.classList.add('peek'); clearTimeout(b._t);
      b._t = setTimeout(() => { if (!b.classList.contains('got')) { b.textContent = ''; b.classList.remove('peek'); } }, 1400);
    }
    function idle() {
      q.innerHTML = '';
      const go = h('button', { class: 'btn green', type: 'button' }, icon('play'), 'Tìm vần');
      go.onclick = start;
      q.append(h('span', { class: 'bv-l' }, 'Trò chơi: tìm vần của ' + tu.length + ' tiếng'), go);
    }
    function start() {
      stopAll();
      Object.keys(btn).forEach(x => { const b = btn[x]; b.classList.remove('got', 'peek'); b.textContent = vd[x] || ''; });
      order = shuffle(tu); k = 0; fb.className = 'fb'; fb.textContent = '';
      dots = h('div', { class: 'dots' }, order.map(() => h('i')));
      ask();
    }
    function ask() {
      q.innerHTML = '';
      q.append(h('span', { class: 'bv-l' }, 'Tiếng:'), h('span', { class: 'bv-w', lang: 'vi' }, order[k].c), h('span', { class: 'bv-l' }, '– chạm vào ô có vần của tiếng này'), dots);
    }
    async function pick(key, rime, b) {
      if (!order || k >= order.length) { peek(b, rime); return; }
      if (busy) return;
      const t = order[k];
      if (key === t.o) {
        busy = true;
        b.classList.remove('peek'); b.classList.add('got');
        b.textContent = b.dataset.vd ? vd[key] + ', ' + t.c : t.c;
        sfx(true); feedback(fb, true, 'Đúng rồi! “' + t.c + '” có vần “' + rime + '”.');
        dots.children[k].classList.add('done'); k++;
        await wait(700); busy = false;
        if (k < order.length) ask();
        else {
          ctx.win(); q.innerHTML = '';
          const r = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Chơi lại');
          r.onclick = start;
          q.append(h('b', null, 'Giỏi quá! Em đã tìm đúng vần của ' + order.length + ' tiếng.'), r);
          order = null;
        }
      } else {
        peek(b, rime); flash(b, 'bad', 450);
        feedback(fb, false, 'Ô này là vần “' + rime + '”. Thử lại nhé!');
      }
    }
    idle();
    ctx.body.append(q, h('div', { class: 'bv-wrap' }, table), fb);
  };
});
