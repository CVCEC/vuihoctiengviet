/* Quyển 1 – Bài 15: dạng bài riêng
   hoi-dap-mau : khung mẫu hỏi – đáp của hai bạn (như sách), rồi trắc nghiệm theo từng hình (dùng lại "chon-cau").
                 ex.mau: [[{ c, am? }, { c, am? }], …], ex.mauAv: [ảnh bạn hỏi, ảnh bạn đáp], các khoá khác như chon-cau.
   to-mau-hinh : tô màu tranh nét theo câu trả lời – mỗi loại hình một màu, máy kiểm tra từng hình.
                 ex.hinh (tranh nét, nền trắng), ex.mau: [{ ten, ma, am? }], ex.kieu: { k: { ten, mau, am? } },
                 ex.vung: [[x %, y %, k], …] – một điểm bên trong mỗi hình cần tô.
   hai-qua     : hái quả trên cây – chạm vào quả để hái, nghe và đọc chữ trên quả.
                 ex.hinh, ex.co: [w, h], ex.qua: [{ c, am?, o: [trái, trên, rộng, cao] (%) }] */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, play, stopAll, feedback, flash, sfx, toast } = A;
  if (!document.getElementById('dang-rieng-q1b15')) {
    const st = document.createElement('style'); st.id = 'dang-rieng-q1b15';
    st.textContent = `
.hdm-model .duo{margin:0}
.hdm-model .bub .t{font-size:clamp(17px,3.6vw,21px)}
.tmh-pal{display:flex;flex-wrap:wrap;gap:8px;margin:4px 0 12px}
.tmh-but{display:inline-flex;align-items:center;gap:8px;border:2px solid var(--line);background:#fff;border-radius:999px;padding:6px 14px 6px 6px;font:inherit;font-weight:700;font-size:18px;color:var(--ink);cursor:pointer;min-height:48px}
.tmh-but .sw{width:34px;height:34px;border-radius:50%;border:2px solid rgba(0,0,0,.15);flex:none}
.tmh-but[aria-pressed="true"]{border-color:var(--ink);box-shadow:0 0 0 3px rgba(0,0,0,.12)}
.tmh-wrap{position:relative;background:#fff;border:2px solid var(--line);border-radius:var(--r-sm,12px);padding:6px}
.tmh-wrap canvas{display:block;width:100%;height:auto;touch-action:manipulation;cursor:pointer;border-radius:8px}
.tmh-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:10px}
.tmh-bar .count{margin-left:auto}
.hq{background:#fff}
.hq{cursor:pointer}
.hq-q{position:absolute;border:0;padding:0;background:transparent;border-radius:50%;cursor:pointer;z-index:2;pointer-events:none;transition:background .3s,box-shadow .3s}
.hq-q.hai{background:rgba(255,255,255,.82);box-shadow:0 0 0 3px var(--ok) inset}
.hq-q.pulse{animation:pulse .8s ease}
.hq-gio{display:flex;flex-wrap:wrap;gap:8px;align-items:center;min-height:56px;margin-top:10px;padding:8px 10px;border:2px dashed var(--straw);border-radius:16px;background:#FFF7E6}
.hq-gio>b{font-size:16px;color:var(--ink-2);margin-right:4px}
.hq-chip{min-width:52px;height:52px;border-radius:50%;border:0;background:#E5484D;color:#fff;font:inherit;font-weight:700;font-size:22px;cursor:pointer;padding:0 8px;box-shadow:0 2px 0 rgba(0,0,0,.15)}
.hq-chip.playing{outline:3px solid var(--straw)}
`;
    document.head.append(st);
  }

  /* ---------- Hỏi đáp theo mẫu ---------- */
  A.T['hoi-dap-mau'] = function (ex, ctx) {
    const av = ex.mauAv || [];
    const duo = h('div', { class: 'duo' });
    (ex.mau || []).forEach(p => {
      p.forEach((l, j) => {
        const t = l.am ? h('button', { class: 'line t', type: 'button' }, l.c) : h('div', { class: 't' }, l.c);
        if (l.am) t.onclick = () => { stopAll(); play(l.am, t); };
        duo.append(h('div', { class: 'bub' + (j ? ' r' : '') }, av[j] ? h('img', { src: av[j], alt: '' }) : null, t));
      });
    });
    ctx.body.append(h('div', { class: 'model hdm-model' }, h('div', { class: 'lines', style: { paddingTop: '14px' } }, h('span', { class: 'm' }, 'M'), duo)));
    A.T['chon-cau'](ex, ctx);
  };

  /* ---------- Tô màu tranh theo câu trả lời ---------- */
  A.T['to-mau-hinh'] = function (ex, ctx) {
    const pal = ex.mau || [];
    let cur = pal[0];
    const row = h('div', { class: 'tmh-pal', role: 'group', 'aria-label': 'Chọn màu' });
    pal.forEach((m, i) => {
      const b = h('button', { class: 'tmh-but', type: 'button', 'aria-pressed': i === 0 ? 'true' : 'false' }, h('span', { class: 'sw', style: { background: m.ma } }), 'màu ' + m.ten);
      b.onclick = () => { cur = m; row.querySelectorAll('.tmh-but').forEach(x => x.setAttribute('aria-pressed', String(x === b))); stopAll(); if (m.am) play(m.am); };
      row.append(b);
    });
    const canvas = h('canvas', { 'aria-label': 'Tranh để tô màu' });
    const wrap = h('div', { class: 'tmh-wrap' }, canvas);
    const count = h('span', { class: 'count' });
    const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    const bReset = h('button', { class: 'btn soft small', type: 'button' }, icon('redo'), 'Tô lại');
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Chọn màu, rồi chạm vào từng hình để tô.'), row, wrap, h('div', { class: 'tmh-bar' }, bReset, count), fb);

    let W = 0, H = 0, g = null, base = null, out = null, label = null, lum = null;
    const kindOf = new Map(); // vùng → loại hình
    const ok = new Set();
    let won = false;
    const need = () => kindOf.size;
    const setCount = () => { count.textContent = 'Đã tô đúng ' + ok.size + '/' + need() + ' hình'; };

    const img = new Image();
    img.onload = () => {
      W = img.naturalWidth; H = img.naturalHeight; canvas.width = W; canvas.height = H;
      g = canvas.getContext('2d', { willReadFrequently: true });
      g.fillStyle = '#fff'; g.fillRect(0, 0, W, H); g.drawImage(img, 0, 0);
      base = g.getImageData(0, 0, W, H); out = g.createImageData(W, H); out.data.set(base.data);
      regions();
      (ex.vung || []).forEach(([x, y, k]) => {
        const rid = label[Math.min(H - 1, Math.round(y / 100 * H)) * W + Math.min(W - 1, Math.round(x / 100 * W))];
        if (rid >= 0) kindOf.set(rid, k);
      });
      setCount();
    };
    img.src = ex.hinh;

    function regions() {
      const d = base.data, n = W * H;
      lum = new Uint8Array(n);
      for (let i = 0, p = 0; i < n; i++, p += 4) lum[i] = (d[p] * 299 + d[p + 1] * 587 + d[p + 2] * 114) / 1000;
      const thr = ex.nguong || 165, wall = new Uint8Array(n);
      for (let i = 0; i < n; i++) if (lum[i] < thr) wall[i] = 1;
      const w2 = new Uint8Array(wall);
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        const i = y * W + x; if (!wall[i]) continue;
        if (x > 0) w2[i - 1] = 1; if (x < W - 1) w2[i + 1] = 1; if (y > 0) w2[i - W] = 1; if (y < H - 1) w2[i + W] = 1;
      }
      label = new Int32Array(n).fill(-1);
      const stack = new Int32Array(n); let id = 0;
      for (let s = 0; s < n; s++) {
        if (w2[s] || label[s] !== -1) continue;
        let sp = 0; stack[sp++] = s; label[s] = id;
        while (sp) {
          const i = stack[--sp], x = i % W;
          if (x > 0 && !w2[i - 1] && label[i - 1] === -1) { label[i - 1] = id; stack[sp++] = i - 1; }
          if (x < W - 1 && !w2[i + 1] && label[i + 1] === -1) { label[i + 1] = id; stack[sp++] = i + 1; }
          if (i >= W && !w2[i - W] && label[i - W] === -1) { label[i - W] = id; stack[sp++] = i - W; }
          if (i < n - W && !w2[i + W] && label[i + W] === -1) { label[i + W] = id; stack[sp++] = i + W; }
        }
        id++;
      }
      for (let pass = 0; pass < 2; pass++) for (let i = 0; i < n; i++) {
        if (label[i] !== -1 || wall[i]) continue;
        const x = i % W;
        label[i] = (x > 0 && label[i - 1] >= 0) ? label[i - 1] : (x < W - 1 && label[i + 1] >= 0) ? label[i + 1] : (i >= W && label[i - W] >= 0) ? label[i - W] : (i < n - W && label[i + W] >= 0) ? label[i + W] : -1;
      }
    }
    const hex = c => { const v = parseInt(c.slice(1), 16); return [(v >> 16) & 255, (v >> 8) & 255, v & 255]; };
    function paint(rid, color) {
      const d = base.data, o = out.data, n = W * H, rgb = color ? hex(color) : null;
      for (let i = 0, p = 0; i < n; i++, p += 4) {
        if (label[i] !== rid) continue;
        if (!rgb) { o[p] = d[p]; o[p + 1] = d[p + 1]; o[p + 2] = d[p + 2]; continue; }
        const k = Math.min(1, lum[i] / 235);
        o[p] = rgb[0] * k; o[p + 1] = rgb[1] * k; o[p + 2] = rgb[2] * k;
      }
    }
    canvas.addEventListener('click', e => {
      if (!label) return;
      const r = canvas.getBoundingClientRect();
      const x = Math.floor((e.clientX - r.left) / r.width * W), y = Math.floor((e.clientY - r.top) / r.height * H);
      if (x < 0 || y < 0 || x >= W || y >= H) return;
      let rid = label[y * W + x];
      if (!kindOf.has(rid)) { // chạm trúng nét: tìm hình gần nhất
        rid = -1;
        outer: for (let rr = 1; rr <= 8; rr++) for (let dy = -rr; dy <= rr; dy++) for (let dx = -rr; dx <= rr; dx++) {
          const xx = x + dx, yy = y + dy; if (xx < 0 || yy < 0 || xx >= W || yy >= H) continue;
          if (kindOf.has(label[yy * W + xx])) { rid = label[yy * W + xx]; break outer; }
        }
      }
      if (rid < 0) return;
      const k = ex.kieu[kindOf.get(rid)];
      stopAll();
      if (cur.ten === k.mau) {
        paint(rid, cur.ma); g.putImageData(out, 0, 0); sfx(true);
        ok.add(rid); setCount();
        fb.className = 'fb'; fb.textContent = '';
        if (k.am) play(k.am);
        if (!won && ok.size >= need()) { won = true; ctx.win(); feedback(fb, true, ex.khen || 'Giỏi quá! Em đã tô đúng hết.'); }
      } else {
        const T = k.ten.charAt(0).toUpperCase() + k.ten.slice(1);
        feedback(fb, false, 'Đây là ' + k.ten + '. ' + T + ' màu gì nhỉ? Em chọn lại màu nhé!');
        if (k.am) play(k.am);
      }
    });
    bReset.onclick = () => {
      if (!out) return;
      out.data.set(base.data); g.putImageData(out, 0, 0); ok.clear(); setCount(); fb.className = 'fb'; fb.textContent = '';
    };
  };

  /* ---------- Hái quả trên cây ---------- */
  A.T['hai-qua'] = function (ex, ctx) {
    const sc = h('div', { class: 'scene hq' }, h('img', { src: ex.hinh, alt: ex.moTa || '', width: ex.co[0], height: ex.co[1] }));
    const cap = h('div', { class: 'phude', 'aria-live': 'polite' });
    const gio = h('div', { class: 'hq-gio' }, h('b', null, 'Giỏ của em:'));
    const count = h('p', { class: 'count' });
    const area = h('div');
    const picked = new Set();
    const btns = [];
    const setCount = () => { count.textContent = 'Đã hái ' + picked.size + '/' + ex.qua.length + ' quả'; };
    // chạm vào tranh → hái quả gần ngón tay nhất (quả nhỏ trên điện thoại vẫn dễ chạm)
    sc.addEventListener('click', e => {
      if (e.detail === 0) return; // bấm bằng bàn phím: để nút tự xử lý
      const r = sc.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width * 100, y = (e.clientY - r.top) / r.height * 100;
      let best = -1, bd = 1e9;
      ex.qua.forEach((q, i) => {
        const dx = x - (q.o[0] + q.o[2] / 2), dy = (y - (q.o[1] + q.o[3] / 2)) * r.height / r.width;
        const d = dx * dx + dy * dy; if (d < bd) { bd = d; best = i; }
      });
      if (best >= 0 && Math.sqrt(bd) < 9) btns[best].pick();
    });
    ex.qua.forEach((q, i) => {
      const b = h('button', { class: 'hq-q', type: 'button', 'aria-label': 'Quả có chữ ' + q.c, style: { left: q.o[0] + '%', top: q.o[1] + '%', width: q.o[2] + '%', height: q.o[3] + '%' } });
      b.addEventListener('click', e => { if (e.detail === 0) b.pick(); });
      b.pick = () => {
        stopAll(); flash(b, 'pulse', 800); cap.textContent = q.c;
        if (q.am) play(q.am);
        if (picked.has(i)) return;
        picked.add(i); b.classList.add('hai'); sfx(true);
        const chip = h('button', { class: 'hq-chip', type: 'button', 'aria-label': 'Nghe chữ ' + q.c }, q.c);
        chip.onclick = () => { stopAll(); cap.textContent = q.c; if (q.am) play(q.am, chip); };
        gio.append(chip); setCount();
        if (picked.size === ex.qua.length) {
          ctx.win();
          const r = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Hái lại');
          r.onclick = reset;
          area.append(h('div', { class: 'done-box' }, h('b', null, ex.khen || 'Giỏi quá! Em đã hái hết quả và đọc các chữ.'), r));
        }
      };
      btns.push(b); sc.append(b);
    });
    function reset() {
      stopAll(); picked.clear(); btns.forEach(b => b.classList.remove('hai'));
      gio.querySelectorAll('.hq-chip').forEach(c => c.remove()); area.innerHTML = ''; cap.textContent = ''; setCount();
    }
    setCount();
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Chạm vào từng quả để hái. Nghe và đọc to chữ trên quả.'), sc, cap, gio, count, area);
  };
});
