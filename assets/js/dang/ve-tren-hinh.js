/* Dạng bài: ve-tren-hinh – vẽ tự do lên tranh (mê cung, chỉ đường, nối điểm…).
   ex = { hinh: 'img/me-cung.webp', goiY?: '…', dich?: [trái, trên, rộng, cao] (% – vùng đích), xong?: 'Em đã tới nơi!' }
   Nét vẽ lưu theo toạ độ tương đối nên vẽ lại đúng khi xoay máy / đổi cỡ. Tắt bút để cuộn trang trên điện thoại. */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, sfx, toast, crayons, feedback } = A;

  if (!document.getElementById('dang-ve-tren-hinh')) {
    const st = document.createElement('style'); st.id = 'dang-ve-tren-hinh';
    st.textContent =
      '.vth-stage{position:relative;margin:0 auto;width:fit-content;max-width:100%;border-radius:var(--r-sm,12px);overflow:hidden;border:2px solid var(--line);background:#fff;user-select:none;-webkit-user-select:none}' +
      '.vth-stage img{display:block;max-width:100%;max-height:72vh;width:auto;height:auto;pointer-events:none}' +
      '.vth-stage canvas{position:absolute;left:0;top:0;width:100%;height:100%;touch-action:none;cursor:crosshair}' +
      '.vth-stage.off canvas{pointer-events:none;cursor:default}' +
      '.vth-stage .vth-goal{position:absolute;border:3px dashed var(--ok);border-radius:14px;pointer-events:none;opacity:0;transition:opacity .3s}' +
      '.vth-stage .vth-goal.on{opacity:1;background:rgba(47,143,85,.12)}' +
      '.vth-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:10px 0}' +
      '.vth-bar .seg{margin:0}';
    document.head.append(st);
  }

  A.T['ve-tren-hinh'] = function (ex, ctx) {
    const cr = crayons(() => {});
    const img = h('img', { src: ex.hinh, alt: ex.moTa || '' });
    const canvas = h('canvas', { 'aria-label': 'Vùng vẽ trên tranh' });
    const stage = h('div', { class: 'vth-stage' }, img, canvas);
    let goal = null;
    if (ex.dich) { goal = h('div', { class: 'vth-goal', style: { left: ex.dich[0] + '%', top: ex.dich[1] + '%', width: ex.dich[2] + '%', height: ex.dich[3] + '%' } }); stage.append(goal); }
    const seg = h('div', { class: 'seg', role: 'group', 'aria-label': 'Cỡ bút' });
    const bThin = h('button', { type: 'button', 'aria-pressed': 'false' }, 'Bút mảnh');
    const bThick = h('button', { type: 'button', 'aria-pressed': 'true' }, 'Bút to');
    seg.append(bThin, bThick);
    const bPen = h('button', { class: 'btn soft small', type: 'button', 'aria-pressed': 'true' }, 'Tắt bút để cuộn trang');
    const bUndo = h('button', { class: 'btn soft small', type: 'button' }, icon('redo'), 'Hoàn tác');
    const bClear = h('button', { class: 'btn soft small', type: 'button' }, icon('x'), 'Xoá hết');
    const bDone = h('button', { class: 'btn green', type: 'button' }, icon('check'), 'Em đã vẽ xong');
    const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    ctx.body.append(
      h('p', { class: 'hint' }, ex.goiY || 'Dùng ngón tay hoặc bút để vẽ lên tranh.'),
      cr.el, h('div', { class: 'vth-bar' }, seg, bPen), stage,
      h('div', { class: 'vth-bar' }, bUndo, bClear, bDone), fb);

    let size = 0.012; // độ dày nét theo tỉ lệ chiều rộng tranh
    const strokes = []; let cur = null, won = false;
    const g = canvas.getContext('2d');
    function fit() {
      const r = canvas.getBoundingClientRect(); const dpr = window.devicePixelRatio || 1;
      if (!r.width) return;
      canvas.width = Math.round(r.width * dpr); canvas.height = Math.round(r.height * dpr);
      draw();
    }
    function drawStroke(s) {
      const W = canvas.width, H = canvas.height, pts = s.p;
      if (!pts.length) return;
      g.strokeStyle = s.c; g.fillStyle = s.c; g.lineCap = 'round'; g.lineJoin = 'round';
      if (pts.length === 1) { g.beginPath(); g.arc(pts[0][0] * W, pts[0][1] * H, s.w * W / 2, 0, Math.PI * 2); g.fill(); return; }
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1], b = pts[i];
        g.lineWidth = Math.max(1, s.w * W * (0.7 + 0.6 * (b[2] || 0.5)));
        g.beginPath(); g.moveTo(a[0] * W, a[1] * H); g.lineTo(b[0] * W, b[1] * H); g.stroke();
      }
    }
    function draw() { g.clearRect(0, 0, canvas.width, canvas.height); strokes.forEach(drawStroke); }
    if (window.ResizeObserver) new ResizeObserver(fit).observe(stage); else window.addEventListener('resize', fit);
    img.addEventListener('load', fit);

    function pt(e) {
      const r = canvas.getBoundingClientRect();
      const pr = e.pointerType === 'pen' ? (e.pressure || 0.5) : 0.5;
      return [(e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height, pr];
    }
    function checkGoal(p) {
      if (!ex.dich || won) return;
      const x = p[0] * 100, y = p[1] * 100, d = ex.dich;
      if (x >= d[0] && x <= d[0] + d[2] && y >= d[1] && y <= d[1] + d[3]) {
        won = true; goal.classList.add('on'); feedback(fb, true, ex.xong || 'Em đã tới nơi! Giỏi quá!'); ctx.win();
      }
    }
    canvas.addEventListener('pointerdown', e => {
      if (stage.classList.contains('off')) return;
      e.preventDefault(); canvas.setPointerCapture(e.pointerId);
      cur = { c: cr.get(), w: size, p: [pt(e)] }; strokes.push(cur); draw();
    });
    canvas.addEventListener('pointermove', e => {
      if (!cur) return;
      const evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
      const W = canvas.width, H = canvas.height;
      g.strokeStyle = cur.c; g.lineCap = 'round';
      for (const ev of (evs.length ? evs : [e])) {
        const p = pt(ev), a = cur.p[cur.p.length - 1];
        cur.p.push(p);
        g.lineWidth = Math.max(1, cur.w * W * (0.7 + 0.6 * p[2]));
        g.beginPath(); g.moveTo(a[0] * W, a[1] * H); g.lineTo(p[0] * W, p[1] * H); g.stroke();
        checkGoal(p);
      }
    });
    const end = () => { if (cur) { checkGoal(cur.p[cur.p.length - 1]); cur = null; } };
    canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end);

    bThin.onclick = () => { size = 0.006; bThin.setAttribute('aria-pressed', 'true'); bThick.setAttribute('aria-pressed', 'false'); };
    bThick.onclick = () => { size = 0.012; bThin.setAttribute('aria-pressed', 'false'); bThick.setAttribute('aria-pressed', 'true'); };
    bPen.onclick = () => {
      const off = stage.classList.toggle('off');
      bPen.setAttribute('aria-pressed', String(!off));
      bPen.textContent = off ? 'Bật bút để vẽ' : 'Tắt bút để cuộn trang';
    };
    bUndo.onclick = () => { strokes.pop(); draw(); };
    bClear.onclick = () => { strokes.length = 0; draw(); };
    bDone.onclick = () => {
      if (!strokes.length) { feedback(fb, false, 'Em hãy vẽ lên tranh trước nhé!'); return; }
      if (ex.dich && !won) { feedback(fb, false, 'Đường vẽ chưa tới nơi. Em vẽ tiếp nhé!'); return; }
      if (!won) { won = true; feedback(fb, true, ex.xong || 'Giỏi lắm! Em đã vẽ xong.'); ctx.win(); }
      else { sfx(true); toast(ex.xong || 'Giỏi lắm!'); }
    };
  };
});
