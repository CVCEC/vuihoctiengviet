/* Dạng bài: dien-chu – viết chữ / dấu thanh còn thiếu.
   ex = { tu: [{ hinh?: 'img/ca-tim.webp', mau: '…à', dap: 'cà', am?: 'audio/ca.mp3' }, …], goiY?: '…', them?: 'đ' }
   '…' là chỗ trống. Bàn phím chỉ có các chữ cần dùng trong bài (thêm chữ ở ex.them nếu muốn) và 5 dấu thanh.
   Dấu thanh tự đặt đúng vị trí trên nguyên âm của tiếng có chỗ trống (kiểu mới: hoà, khoẻ, thuỷ). */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, play, stopAll, sfx, feedback, flash, nfc } = A;

  if (!document.getElementById('dang-dien-chu')) {
    const st = document.createElement('style'); st.id = 'dang-dien-chu';
    st.textContent =
      '.dc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}' +
      '.dc-card{position:relative;display:flex;flex-direction:column;align-items:center;gap:6px;background:#fff;border:2px solid var(--line);border-radius:16px;padding:10px 8px 12px;cursor:pointer;font:inherit;color:var(--ink);touch-action:manipulation}' +
      '.dc-card img{height:84px;width:auto;max-width:100%;object-fit:contain}' +
      '.dc-card .dc-w{font-size:clamp(24px,7vw,34px);font-weight:700;line-height:1.25;min-height:44px;letter-spacing:.02em}' +
      '.dc-card .dc-w .bl{color:var(--c);border-bottom:3px dashed var(--c);padding:0 2px;min-width:.9em;display:inline-block;text-align:center}' +
      '.dc-card .dc-w .bl.trong{color:#C9BFB2}' +
      '.dc-card.sel{border-color:var(--straw);box-shadow:0 0 0 4px rgba(221,170,85,.35)}' +
      '.dc-card.ok{border-color:var(--ok);background:var(--ok-bg)}' +
      '.dc-card.ok .dc-w .bl{color:var(--ok);border-bottom-color:var(--ok)}' +
      '.dc-card.bad{animation:shake .4s}' +
      '.dc-card .lenh{position:absolute;right:6px;top:6px;width:34px;height:34px}' +
      '.dc-pad{position:sticky;bottom:8px;z-index:5;margin-top:14px;background:rgba(255,253,249,.97);border-radius:16px;box-shadow:var(--shadow);padding:10px;display:flex;flex-direction:column;gap:8px}' +
      '.dc-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}' +
      '.dc-key{min-width:52px;min-height:52px;border:2px solid var(--line);background:#fff;border-radius:14px;font:inherit;font-size:26px;font-weight:700;cursor:pointer;touch-action:manipulation;padding:0 10px;color:var(--ink)}' +
      '.dc-key:active{transform:scale(.95)}' +
      '.dc-key.tone{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:0;font-size:13px;min-width:62px;padding:2px 6px}' +
      '.dc-key.tone svg{width:26px;height:22px}' +
      '.dc-key.tone[aria-pressed="true"]{border-color:var(--c);background:var(--c);color:#fff}' +
      '.dc-row .btn{min-height:52px}';
    document.head.append(st);
  }

  // ----- dấu thanh -----
  const MARK = { huyen: '̀', sac: '́', hoi: '̉', nga: '̃', nang: '̣' };
  const TEN = { huyen: 'huyền', sac: 'sắc', hoi: 'hỏi', nga: 'ngã', nang: 'nặng' };
  const SVG = {
    huyen: '<svg viewBox="0 0 26 22"><path d="M9 4l8 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/></svg>',
    sac: '<svg viewBox="0 0 26 22"><path d="M17 4L9 14" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/></svg>',
    hoi: '<svg viewBox="0 0 26 22"><path d="M9 6c1-3 8-3 8 1 0 3-4 3-4 6" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" fill="none"/></svg>',
    nga: '<svg viewBox="0 0 26 22"><path d="M5 13c3-6 6 1 8-1s4-5 8-1" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" fill="none"/></svg>',
    nang: '<svg viewBox="0 0 26 22"><circle cx="13" cy="12" r="3.2" fill="currentColor"/></svg>'
  };
  const TONE_RE = /[̣̀́̃̉]/g;
  const strip = s => nfc(s).normalize('NFD').replace(TONE_RE, '').normalize('NFC');
  const VOW = 'aăâeêioôơuưy';
  function placeTone(syl, mark) {
    const chars = Array.from(strip(syl)), low = chars.map(c => c.toLowerCase());
    let idx = low.map((c, i) => VOW.includes(c) ? i : -1).filter(i => i >= 0);
    if (!idx.length || !mark) return chars.join('');
    if (low[0] === 'q' && low[1] === 'u' && idx.length > 1) idx = idx.filter(i => i !== 1);
    if (low[0] === 'g' && low[1] === 'i' && idx.length > 1 && idx[1] === 2) idx = idx.filter(i => i !== 1);
    const cl = [idx[0]];
    for (let j = 1; j < idx.length; j++) { if (idx[j] === cl[cl.length - 1] + 1) cl.push(idx[j]); else break; }
    const sp = cl.filter(i => 'ăâêôơư'.includes(low[i]));
    let t;
    if (sp.length) t = sp[sp.length - 1];
    else if (cl.length === 1) t = cl[0];
    else {
      const pair = cl.map(i => low[i]).join(''), coCuoi = cl[cl.length - 1] < low.length - 1;
      if (coCuoi) t = cl[cl.length - 1];
      else if (['oa', 'oe', 'uy'].includes(pair)) t = cl[1];
      else if (cl.length === 3) t = cl[1];
      else t = cl[0];
    }
    chars[t] = (chars[t] + mark).normalize('NFC');
    return chars.join('');
  }
  function toneOf(s) { const m = nfc(s).normalize('NFD').match(TONE_RE); return m ? Object.keys(MARK).find(k => MARK[k] === m[0]) : null; }

  A.T['dien-chu'] = function (ex, ctx) {
    const items = ex.tu.map(t => {
      const mau = nfc(t.mau).replace('...', '…').replace('_', '…');
      const [pre, post = ''] = mau.split('…');
      const dap = nfc(t.dap);
      const P = Array.from(pre).length, Q = Array.from(post).length, D = Array.from(dap);
      const can = D.slice(P, D.length - Q).join('');
      return { ...t, pre, post, dap, can, input: '', tone: undefined, done: false };
    });
    const need = new Set();
    items.forEach(it => Array.from(strip(it.can)).forEach(c => { if (c.trim()) need.add(c.toLowerCase()); }));
    Array.from(ex.them || '').forEach(c => need.add(c));
    const ORDER = 'aăâbcdđeêghiklmnoôơpqrstuưvxy';
    const keys = [...need].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b));

    let cur = -1, won = false;
    const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    const grid = h('div', { class: 'dc-grid' });
    const cards = items.map((it, i) => {
      const w = h('span', { class: 'dc-w', lang: 'vi' });
      const c = h('div', { class: 'dc-card', role: 'button', tabindex: '0', 'aria-label': 'Từ số ' + (i + 1) },
        it.hinh ? h('img', { src: it.hinh, alt: '' }) : null, w);
      if (it.am) { const s = h('button', { class: 'lenh', type: 'button', 'aria-label': 'Nghe từ' }, icon('spk')); s.onclick = e => { e.stopPropagation(); stopAll(); play(it.am, s); }; c.append(s); }
      c.addEventListener('click', () => select(i));
      c.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(i); } });
      grid.append(c);
      return { c, w };
    });

    function compose(it) {
      let s = it.pre + it.input + it.post;
      if (it.tone !== undefined) {
        const cs = Array.from(s), at = Array.from(it.pre).length;
        let a = at, b = at;
        while (a > 0 && cs[a - 1] !== ' ') a--;
        while (b < cs.length && cs[b] !== ' ') b++;
        const syl = cs.slice(a, b).join('');
        s = cs.slice(0, a).join('') + placeTone(syl, it.tone ? MARK[it.tone] : '') + cs.slice(b).join('');
      }
      return nfc(s);
    }
    function show(i) {
      const it = items[i], w = cards[i].w; w.innerHTML = '';
      const cs = Array.from(compose(it)), P = Array.from(it.pre).length, L = Array.from(it.input).length;
      w.append(cs.slice(0, P).join(''));
      if (L) w.append(h('span', { class: 'bl' }, cs.slice(P, P + L).join('')));
      else w.append(h('span', { class: 'bl trong' }, '…'));
      w.append(cs.slice(P + L).join(''));
    }
    items.forEach((_, i) => show(i));

    const toneBtns = {};
    function syncTones() {
      const it = items[cur];
      Object.keys(toneBtns).forEach(k => toneBtns[k].setAttribute('aria-pressed', String(!!it && it.tone === k)));
    }
    function select(i) {
      if (items[i].done) { if (items[i].am) { stopAll(); play(items[i].am); } return; }
      cur = i; cards.forEach((x, j) => x.c.classList.toggle('sel', j === i)); syncTones();
      fb.textContent = ''; fb.className = 'fb';
    }
    function changed() {
      const it = items[cur]; show(cur); syncTones();
      if (compose(it) === it.dap) {
        it.done = true; cards[cur].c.classList.remove('sel'); cards[cur].c.classList.add('ok'); sfx(true);
        feedback(fb, true, 'Đúng rồi: ' + it.dap);
        if (it.am) play(it.am);
        if (items.every(x => x.done)) { if (!won) { won = true; ctx.win(); } cur = -1; return; }
        const n = items.findIndex(x => !x.done); setTimeout(() => select(n), 500);
      }
    }
    const pad = h('div', { class: 'dc-pad' });
    const rowL = h('div', { class: 'dc-row', 'aria-label': 'Chữ cái' });
    keys.forEach(k => {
      const b = h('button', { class: 'dc-key', type: 'button' }, k);
      b.onclick = () => { if (cur < 0) return; const it = items[cur]; if (Array.from(it.input).length >= Array.from(strip(it.can)).length + 1) return; it.input += k; changed(); };
      rowL.append(b);
    });
    const rowT = h('div', { class: 'dc-row', 'aria-label': 'Dấu thanh' });
    Object.keys(MARK).forEach(k => {
      const b = h('button', { class: 'dc-key tone', type: 'button', 'aria-pressed': 'false', 'aria-label': 'Dấu ' + TEN[k] }, h('span', { html: SVG[k] }), TEN[k]);
      b.onclick = () => { if (cur < 0) return; const it = items[cur]; it.tone = it.tone === k ? (toneOf(it.pre + it.post) ? undefined : '') : k; changed(); };
      toneBtns[k] = b; rowT.append(b);
    });
    const bDel = h('button', { class: 'btn soft small', type: 'button' }, icon('back'), 'Xoá');
    bDel.onclick = () => {
      if (cur < 0) return; const it = items[cur];
      if (it.input) it.input = Array.from(it.input).slice(0, -1).join(''); else it.tone = undefined;
      changed();
    };
    const bCheck = h('button', { class: 'btn small', type: 'button' }, icon('check'), 'Kiểm tra');
    bCheck.onclick = () => {
      if (cur < 0) return; const it = items[cur];
      if (compose(it) === it.dap) return changed();
      flash(cards[cur].c, 'bad', 450);
      feedback(fb, false, it.input || it.tone ? 'Chưa đúng, em thử lại nhé!' : 'Em chọn chữ hoặc dấu để điền vào chỗ trống.');
    };
    rowT.append(bDel, bCheck);
    pad.append(rowL, rowT);
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Chạm vào từng hình, rồi chọn chữ và dấu thanh để điền vào chỗ trống.'), grid, pad, fb);
    setTimeout(() => select(0), 0);
  };
  A.T['dien-chu'].placeTone = placeTone;
});
