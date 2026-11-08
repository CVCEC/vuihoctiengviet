/* Dạng bài: to-mau-tranh – tô màu tranh nét (chạm để đổ màu vào từng vùng).
   ex = { hinh: 'img/tranh.webp', goiY?: '…', can?: 6 }
   Vùng tô được tính một lần từ nét vẽ gốc (pixel tối = đường viền), tô màu kiểu "nhân" để giữ nét. */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, sfx, toast, crayons } = A;

  if (!document.getElementById('dang-to-mau-tranh')) {
    const st = document.createElement('style'); st.id = 'dang-to-mau-tranh';
    st.textContent =
      '.tmt-wrap{position:relative;display:flex;justify-content:center;background:#fff;border:2px solid var(--line);border-radius:var(--r-sm,12px);padding:6px}' +
      '.tmt-wrap canvas{display:block;max-width:100%;max-height:72vh;width:auto;height:auto;touch-action:manipulation;cursor:crosshair;border-radius:8px}' +
      '.tmt-wrap .tmt-load{position:absolute;inset:0;display:grid;place-items:center;color:var(--ink-2);font-weight:700}' +
      '.tmt-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:10px}' +
      '.tmt-bar .count{margin-left:auto}';
    document.head.append(st);
  }

  A.T['to-mau-tranh'] = function (ex, ctx) {
    const need = ex.can || 6;
    const cr = crayons();
    const canvas = h('canvas', { 'aria-label': 'Tranh để tô màu. Chạm vào một vùng để tô.' });
    const loading = h('div', { class: 'tmt-load' }, 'Đang mở tranh…');
    const wrap = h('div', { class: 'tmt-wrap' }, canvas, loading);
    const bUndo = h('button', { class: 'btn soft small', type: 'button', disabled: true }, icon('redo'), 'Hoàn tác');
    const bReset = h('button', { class: 'btn soft small', type: 'button' }, icon('x'), 'Làm lại');
    const bSave = h('button', { class: 'btn soft small', type: 'button' }, icon('img'), 'Lưu tranh');
    const count = h('span', { class: 'count' }, '');
    ctx.body.append(
      h('p', { class: 'hint' }, ex.goiY || 'Chọn màu, rồi chạm vào từng vùng trong tranh để tô.'),
      cr.el, wrap, h('div', { class: 'tmt-bar' }, bUndo, bReset, bSave, count));

    let W = 0, H = 0, g = null, base = null, out = null, label = null, lum = null, regionColor = [], history = [], fills = 0, won = false;
    const used = new Set();
    function setCount() { count.textContent = won ? 'Em đã tô ' + fills + ' vùng' : 'Đã tô ' + Math.min(fills, need) + '/' + need + ' vùng'; }

    const img = new Image();
    img.onload = () => {
      W = img.naturalWidth; H = img.naturalHeight;
      canvas.width = W; canvas.height = H;
      g = canvas.getContext('2d', { willReadFrequently: true });
      g.fillStyle = '#fff'; g.fillRect(0, 0, W, H); g.drawImage(img, 0, 0);
      base = g.getImageData(0, 0, W, H);
      out = g.createImageData(W, H); out.data.set(base.data);
      buildRegions();
      loading.remove(); setCount();
    };
    img.onerror = () => { loading.textContent = 'Chưa mở được tranh.'; };
    img.src = ex.hinh;

    // Chia vùng: pixel sáng (không phải nét) nối liền nhau là một vùng. Nét được làm dày 1px để bịt khe hở nhỏ.
    function buildRegions() {
      const d = base.data, n = W * H;
      lum = new Uint8Array(n);
      for (let i = 0, p = 0; i < n; i++, p += 4) lum[i] = (d[p] * 299 + d[p + 1] * 587 + d[p + 2] * 114) / 1000;
      const thr = ex.nguong || 165;
      const wall = new Uint8Array(n);
      for (let i = 0; i < n; i++) if (lum[i] < thr) wall[i] = 1;
      const wall2 = new Uint8Array(wall);
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        const i = y * W + x; if (!wall[i]) continue;
        if (x > 0) wall2[i - 1] = 1; if (x < W - 1) wall2[i + 1] = 1;
        if (y > 0) wall2[i - W] = 1; if (y < H - 1) wall2[i + W] = 1;
      }
      label = new Int32Array(n).fill(-1);
      let id = 0; const stack = new Int32Array(n);
      for (let s = 0; s < n; s++) {
        if (wall2[s] || label[s] !== -1) continue;
        let sp = 0; stack[sp++] = s; label[s] = id;
        while (sp) {
          const i = stack[--sp]; const x = i % W;
          if (x > 0 && !wall2[i - 1] && label[i - 1] === -1) { label[i - 1] = id; stack[sp++] = i - 1; }
          if (x < W - 1 && !wall2[i + 1] && label[i + 1] === -1) { label[i + 1] = id; stack[sp++] = i + 1; }
          if (i >= W && !wall2[i - W] && label[i - W] === -1) { label[i - W] = id; stack[sp++] = i - W; }
          if (i < n - W && !wall2[i + W] && label[i + W] === -1) { label[i + W] = id; stack[sp++] = i + W; }
        }
        id++;
      }
      // Pixel đường viền (đã làm dày) nhận màu của vùng sáng kề bên để mép tô không bị viền trắng
      for (let pass = 0; pass < 2; pass++) for (let i = 0; i < n; i++) {
        if (label[i] !== -1 || wall[i]) continue;
        const x = i % W;
        label[i] = (x > 0 && label[i - 1] >= 0) ? label[i - 1] : (x < W - 1 && label[i + 1] >= 0) ? label[i + 1] : (i >= W && label[i - W] >= 0) ? label[i - W] : (i < n - W && label[i + W] >= 0) ? label[i + W] : -1;
      }
      regionColor = new Array(id).fill(null);
    }
    function hex(c) { const v = parseInt(c.slice(1), 16); return [(v >> 16) & 255, (v >> 8) & 255, v & 255]; }
    function paint(rid, color) {
      const d = base.data, o = out.data, n = W * H;
      const rgb = color ? hex(color) : null;
      for (let i = 0, p = 0; i < n; i++, p += 4) {
        if (label[i] !== rid) continue;
        if (!rgb) { o[p] = d[p]; o[p + 1] = d[p + 1]; o[p + 2] = d[p + 2]; continue; }
        const k = Math.min(1, lum[i] / 235); // nhân với độ sáng gốc → giữ nét mờ, bóng
        o[p] = rgb[0] * k; o[p + 1] = rgb[1] * k; o[p + 2] = rgb[2] * k;
      }
    }
    function redraw() { g.putImageData(out, 0, 0); }

    canvas.addEventListener('click', e => {
      if (!label) return;
      const r = canvas.getBoundingClientRect();
      const x = Math.floor((e.clientX - r.left) / r.width * W), y = Math.floor((e.clientY - r.top) / r.height * H);
      if (x < 0 || y < 0 || x >= W || y >= H) return;
      let rid = label[y * W + x];
      if (rid < 0) { // chạm trúng nét: tìm vùng gần nhất trong bán kính nhỏ
        outer: for (let rr = 1; rr <= 6; rr++) for (let dy = -rr; dy <= rr; dy++) for (let dx = -rr; dx <= rr; dx++) {
          const xx = x + dx, yy = y + dy; if (xx < 0 || yy < 0 || xx >= W || yy >= H) continue;
          if (label[yy * W + xx] >= 0) { rid = label[yy * W + xx]; break outer; }
        }
      }
      if (rid < 0) return;
      const color = cr.get();
      if (regionColor[rid] === color) return;
      history.push([rid, regionColor[rid]]); bUndo.disabled = false;
      regionColor[rid] = color; paint(rid, color); redraw(); sfx(true);
      if (!used.has(rid)) { used.add(rid); fills = used.size; }
      if (!won && fills >= need) { won = true; ctx.win(); toast('Tranh của em đẹp quá!'); }
      setCount();
    });
    bUndo.onclick = () => {
      const last = history.pop(); if (!last) return;
      const [rid, prev] = last; regionColor[rid] = prev; paint(rid, prev); redraw();
      if (!prev && !history.some(hh => hh[0] === rid)) { used.delete(rid); fills = used.size; }
      bUndo.disabled = !history.length; setCount();
    };
    bReset.onclick = () => {
      if (!out) return;
      out.data.set(base.data); regionColor.fill(null); history = []; bUndo.disabled = true; redraw();
      used.clear(); fills = 0; setCount();
    };
    bSave.onclick = () => {
      if (!out) return;
      canvas.toBlob(b => {
        if (!b) return;
        const a = h('a', { href: URL.createObjectURL(b), download: 'tranh-to-mau.png' });
        document.body.append(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      }, 'image/png');
    };
  };
});
