/* Dạng bài 'to-thanh' – Tô màu theo thanh (bóng bay trong sách Quyển 2)
   ex.mau: { ngang: '#E8738E', huyen: '#3C78C8', sac: '#5E9E6E', hoi?, nga?, nang? } (khoá có thể viết có dấu)
   ex.tieng: ['ca', 'cà', 'cá', ...] */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  const { h, feedback, flash, sfx } = A;
  const CSS = `
.tt{display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:start}
@media (max-width:560px){.tt{grid-template-columns:1fr}}
.tt-key{display:flex;flex-direction:column;gap:8px}
@media (max-width:560px){.tt-key{flex-direction:row;flex-wrap:wrap}}
.tt-sw{display:flex;align-items:center;gap:10px;border:2px solid var(--line);background:#fff;border-radius:14px;padding:6px 14px 6px 6px;font:inherit;font-weight:700;font-size:18px;cursor:pointer;min-height:48px}
.tt-sw i{width:34px;height:34px;border-radius:8px;display:block}
.tt-sw[aria-pressed="true"]{border-color:var(--ink);box-shadow:0 0 0 3px rgba(58,59,60,.15)}
.tt-sky{display:flex;flex-wrap:wrap;gap:6px 4px;justify-content:center;padding:8px 4px 0;background:linear-gradient(180deg,#F3F8FF,#FFFDF9);border-radius:16px}
.tt-b{border:0;background:transparent;padding:0;cursor:pointer;width:96px;display:flex;flex-direction:column;align-items:center;touch-action:manipulation;font:inherit}
.tt-b svg{width:96px;height:132px;overflow:visible}
.tt-b .ball{fill:#fff;stroke:var(--ink);stroke-width:2.5;transition:fill .25s}
.tt-b text{font-family:inherit;font-weight:700;font-size:24px;fill:var(--ink);text-anchor:middle;dominant-baseline:middle}
.tt-b.bad svg{animation:shake .4s}
.tt-b.ok text{fill:#fff}
`;
  if (!document.getElementById('dang-to-thanh')) { const s = document.createElement('style'); s.id = 'dang-to-thanh'; s.textContent = CSS; document.head.append(s); }

  const KEY_OF = { 'ngang': 'ngang', 'huyền': 'huyen', 'huyen': 'huyen', 'sắc': 'sac', 'sac': 'sac', 'hỏi': 'hoi', 'hoi': 'hoi', 'ngã': 'nga', 'nga': 'nga', 'nặng': 'nang', 'nang': 'nang' };
  const NAME = { ngang: 'ngang', huyen: 'huyền', sac: 'sắc', hoi: 'hỏi', nga: 'ngã', nang: 'nặng' };
  const TONE = { '̀': 'huyen', '́': 'sac', '̃': 'nga', '̉': 'hoi', '̣': 'nang' };
  const toneOf = s => { for (const ch of String(s).normalize('NFD')) if (TONE[ch]) return TONE[ch]; return 'ngang'; };
  const NS = 'http://www.w3.org/2000/svg';
  const svg = (tag, attrs) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); return e; };

  A.T['to-thanh'] = function (ex, ctx) {
    const mau = {}; Object.keys(ex.mau).forEach(k => { mau[KEY_OF[k.toLowerCase()] || k] = ex.mau[k]; });
    const keys = Object.keys(mau);
    let cur = keys[0];
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Chọn màu theo thanh, rồi chạm vào quả bóng có tiếng mang thanh đó.'));
    const key = h('div', { class: 'tt-key', role: 'group', 'aria-label': 'Bảng màu' });
    keys.forEach((k, i) => {
      const b = h('button', { class: 'tt-sw', type: 'button', 'aria-pressed': i === 0 ? 'true' : 'false' }, h('i', { style: { background: mau[k] } }), 'thanh ' + NAME[k]);
      b.onclick = () => { cur = k; key.querySelectorAll('.tt-sw').forEach(x => x.setAttribute('aria-pressed', x === b)); };
      key.append(b);
    });
    const sky = h('div', { class: 'tt-sky' });
    const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    const done = new Set();
    ex.tieng.forEach((t, i) => {
      t = t.normalize('NFC');
      const s = svg('svg', { viewBox: '0 0 96 132', 'aria-hidden': 'true' });
      const ball = svg('ellipse', { class: 'ball', cx: 48, cy: 46, rx: 40, ry: 44 });
      const knot = svg('path', { d: 'M42 92 L54 92 L48 84 Z', fill: '#3A3B3C' });
      const str = svg('path', { d: 'M48 92 C 40 104, 56 114, 48 130', fill: 'none', stroke: '#9A928A', 'stroke-width': 2 });
      const shine = svg('ellipse', { cx: 32, cy: 28, rx: 7, ry: 11, fill: '#fff', opacity: .7, transform: 'rotate(25 32 28)' });
      const tx = svg('text', { x: 48, y: 48 }); tx.textContent = t;
      s.append(ball, shine, knot, str, tx);
      const b = h('button', { class: 'tt-b', type: 'button', 'aria-label': 'Quả bóng ' + t });
      b.append(s);
      b.onclick = () => {
        if (done.has(i)) return;
        const tone = toneOf(t);
        if (tone === cur) {
          done.add(i); ball.style.fill = mau[cur]; b.classList.add('ok'); sfx(true);
          if (done.size === ex.tieng.length) { feedback(fb, true, 'Em đã tô đúng tất cả các quả bóng!'); ctx.win(); }
          else { fb.className = 'fb'; fb.textContent = ''; }
        } else {
          flash(b, 'bad', 450);
          feedback(fb, false, '“' + t + '” có thanh ' + NAME[tone] + (mau[tone] ? ', không phải thanh ' + NAME[cur] + '.' : '.'));
        }
      };
      sky.append(b);
    });
    ctx.body.append(h('div', { class: 'tt' }, key, sky), fb);
  };
});
