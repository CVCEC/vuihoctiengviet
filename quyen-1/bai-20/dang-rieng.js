/* Quyển 1 – Bài 20: dạng bài riêng
   hoi-dap-mau   : khung mẫu hỏi – đáp của hai bạn (như sách), rồi hỏi đáp theo từng hình.
                   ex.mau: [[{ c, am? }, { c, am? }], …], ex.mauAv: [ảnh bạn hỏi, ảnh bạn đáp]
                   ex.cau: [{ hinh?, hoi: 'chữ' | { c, am? }, dung: 'câu' | ['câu', 'câu'] , sai?: […], amDung?: 'tệp' | { 'câu': 'tệp' } }]
                   dung là mảng → câu hỏi ý kiến (đẹp hơn, đắt hơn…): em chọn câu nào cũng đúng.
   mau-noi       : khung mẫu hỏi – đáp (như trên) + nối cột A với cột B (dạng "noi").
   boc-tham      : bốc thăm chữ – mỗi lần bốc được một thẻ chữ, nghe và đọc to.
                   ex.the: [{ c, am? }], ex.hinh (tranh lớp học, tuỳ chọn), ex.can (số lần bốc để được sao, mặc định hết thẻ) */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, play, stopAll, wait, shuffle, feedback, flash } = A;
  if (!document.getElementById('dang-hoi-dap-mau')) {
    const st = document.createElement('style'); st.id = 'dang-hoi-dap-mau';
    st.textContent = '.hdm-model .duo{margin:0}.hdm-model .bub .t{font-size:clamp(17px,3.6vw,21px)}.hdm-model{margin-bottom:12px}';
    document.head.append(st);
  }
  function modelDuo(ex) {
    const av = ex.mauAv || [];
    const duo = h('div', { class: 'duo' });
    (ex.mau || []).forEach(p => p.forEach((l, j) => {
      const t = l.am ? h('button', { class: 'line t', type: 'button' }, l.c) : h('div', { class: 't' }, l.c);
      if (l.am) t.onclick = () => { stopAll(); play(l.am, t); };
      duo.append(h('div', { class: 'bub' + (j ? ' r' : '') }, av[j] ? h('img', { src: av[j], alt: '' }) : null, t));
    }));
    return h('div', { class: 'model hdm-model' }, h('div', { class: 'lines', style: { paddingTop: '14px' } }, h('span', { class: 'm' }, 'M'), duo));
  }

  A.T['hoi-dap-mau'] = function (ex, ctx) {
    ctx.body.append(modelDuo(ex));
    if (ex.goiY) ctx.body.append(h('p', { class: 'hint' }, ex.goiY));
    const area = h('div'); ctx.body.append(area);
    function start() {
      area.innerHTML = '';
      const list = ex.cau.slice(); let k = 0;
      const dots = h('div', { class: 'dots' }, list.map(() => h('i')));
      const dem = h('b', { class: 'cc-dem' });
      const holder = h('div'), opts = h('div', { class: 'cc-opts' }), fb = h('div', { class: 'fb', 'aria-live': 'polite' });
      area.append(h('div', { class: 'game-bar' }, dem, dots), holder, opts, fb);
      function next() {
        if (k >= list.length) return finish();
        const q = list[k], hoi = typeof q.hoi === 'string' ? { c: q.hoi } : (q.hoi || {});
        const dung = Array.isArray(q.dung) ? q.dung : [q.dung], yKien = dung.length > 1;
        dem.textContent = 'Câu ' + (k + 1) + '/' + list.length;
        holder.innerHTML = ''; opts.innerHTML = ''; fb.textContent = ''; fb.className = 'fb';
        const qbox = h('div', { class: 'cc-q' });
        if (q.hinh) qbox.append(h('img', { class: 'cc-img', src: q.hinh, alt: '' }));
        const line = h('div', { class: 'cc-hoi' });
        if (hoi.am) { const b = h('button', { class: 'lenh', type: 'button', 'aria-label': 'Nghe câu hỏi' }, icon('spk')); b.onclick = () => { stopAll(); play(hoi.am, b); }; line.append(b); }
        line.append(h('span', null, hoi.c || ''));
        qbox.append(line); holder.append(qbox);
        if (yKien) holder.append(h('p', { class: 'hint', style: { textAlign: 'center' } }, 'Em nghĩ thế nào? Chọn câu em thích.'));
        shuffle(dung.map(v => ({ v, ok: true })).concat((q.sai || []).map(v => ({ v, ok: false })))).forEach(cx => {
          const b = h('button', { class: 'opt', type: 'button' }, cx.v);
          b.onclick = async () => {
            if (cx.ok) {
              b.classList.add('good'); opts.querySelectorAll('.opt').forEach(o => o.disabled = true);
              feedback(fb, true, yKien ? 'Hay lắm! Em nói to câu của em nhé.' : 'Đúng rồi! Em nói to câu này nhé.');
              dots.children[k].classList.add('done'); k++;
              const my = A.gen();
              const am = typeof q.amDung === 'string' ? q.amDung : (q.amDung || {})[cx.v];
              if (am) { await wait(150); await play(am); } else await wait(1200);
              if (A.gen() !== my) return;
              await wait(350); next();
            } else { flash(b, 'bad', 450); b.classList.add('bad'); feedback(fb, false); }
          };
          opts.append(b);
        });
        if (hoi.am) setTimeout(() => play(hoi.am, line.querySelector('.lenh')), 250);
      }
      function finish() {
        opts.innerHTML = ''; holder.innerHTML = ''; dem.textContent = '';
        ctx.win();
        const r = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Làm lại');
        r.onclick = start;
        area.append(h('div', { class: 'done-box' }, h('b', null, ex.khen || 'Giỏi quá! Em đã hỏi đáp xong.'), r));
      }
      next();
    }
    start();
  };

  if (!document.getElementById('dang-mau-noi')) {
    const st = document.createElement('style'); st.id = 'dang-mau-noi';
    st.textContent = '.mn-to .noi-it img{width:72px;height:72px}.mn-to .noi-col.b .noi-it{justify-content:center;padding:6px 10px}.mn-to .noi-col.b .noi-it img{flex:1;width:auto;max-width:100%;height:84px}' +
      '@media (max-width:520px){.mn-to .noi-col.a .noi-it{flex-direction:column;gap:2px;padding:6px 14px 6px 8px;text-align:center;font-size:16px}.mn-to .noi-col.a .noi-it img{width:64px;height:56px}.mn-to .noi-col.b .noi-it img{height:66px}}';
    document.head.append(st);
  }
  A.T['mau-noi'] = function (ex, ctx) {
    ctx.body.append(modelDuo(ex));
    ctx.body.classList.add('mn-to');
    A.T['noi'](ex, ctx);
  };

  /* ---------- Bốc thăm ---------- */
  if (!document.getElementById('dang-boc-tham')) {
    const st = document.createElement('style'); st.id = 'dang-boc-tham';
    st.textContent = `
.bt{display:grid;gap:14px;grid-template-columns:1fr}
@media (min-width:700px){.bt{grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:start}}
.bt-img{width:100%;border-radius:14px;border:2px solid #EFE7DC;background:#fff}
.bt-side{display:flex;flex-direction:column;align-items:center;gap:10px}
.bt-kq{width:140px;height:140px;border-radius:22px;border:3px dashed var(--straw);background:#FFF7E6;display:grid;place-items:center;font-size:64px;font-weight:700;color:#B7AC9E;cursor:pointer;font-family:inherit}
.bt-kq.on{border-style:solid;background:#fff;color:var(--c);animation:pulse .6s ease}
.bt-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;width:100%;max-width:360px}
.bt-the{aspect-ratio:1;border-radius:12px;border:2px solid var(--line);background:repeating-linear-gradient(45deg,#F4EEE5,#F4EEE5 6px,#FBF7F1 6px,#FBF7F1 12px);font:inherit;font-weight:700;font-size:clamp(20px,5vw,30px);color:transparent;cursor:default;padding:0}
.bt-the.up{background:#fff;cursor:pointer;color:var(--mc)}
.bt-the.playing{border-color:var(--straw)}
`;
    document.head.append(st);
  }
  const MAU_THE = ['#E8743B', '#E0577A', '#3E9B5F', '#3C78C8', '#8A5CC2', '#C2457A', '#D9822B', '#2B8C99'];
  A.T['boc-tham'] = function (ex, ctx) {
    const the = ex.the || [], can = Math.min(ex.can || the.length, the.length);
    const kq = h('button', { class: 'bt-kq', type: 'button', 'aria-label': 'Nghe lại chữ vừa bốc' }, '?');
    const btn = h('button', { class: 'btn green', type: 'button' }, icon('redo'), 'Bốc thăm');
    const dem = h('div', { class: 'count' });
    const grid = h('div', { class: 'bt-grid' });
    const area = h('div');
    let left = [], cur = null, n = 0, won = false;
    const cards = the.map((t, i) => {
      const b = h('button', { class: 'bt-the', type: 'button', 'aria-label': 'Thẻ chưa bốc', style: { '--mc': MAU_THE[i % MAU_THE.length] } }, t.c);
      b.onclick = () => { if (b.classList.contains('up') && t.am) { stopAll(); play(t.am, b); } };
      grid.append(b); return b;
    });
    function reset() {
      left = the.map((_, i) => i); n = 0; cur = null; area.innerHTML = '';
      cards.forEach(c => { c.classList.remove('up'); c.setAttribute('aria-label', 'Thẻ chưa bốc'); });
      kq.textContent = '?'; kq.classList.remove('on'); btn.disabled = false;
      dem.textContent = 'Đã bốc: 0/' + the.length;
    }
    kq.onclick = () => { if (cur && cur.am) { stopAll(); play(cur.am); } };
    btn.onclick = () => {
      if (!left.length) return;
      stopAll();
      const k = left.splice(Math.floor(Math.random() * left.length), 1)[0];
      cur = the[k]; n++;
      kq.textContent = cur.c; kq.style.setProperty('--c', MAU_THE[k % MAU_THE.length]);
      kq.classList.remove('on'); void kq.offsetWidth; kq.classList.add('on');
      cards[k].classList.add('up'); cards[k].setAttribute('aria-label', 'Chữ ' + cur.c);
      A.sfx(true);
      if (cur.am) setTimeout(() => play(cur.am), 250);
      dem.textContent = 'Đã bốc: ' + n + '/' + the.length;
      if (!left.length) btn.disabled = true;
      if (n >= can && !won) {
        won = true; ctx.win();
        const r = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Bốc lại từ đầu');
        r.onclick = () => { won = false; reset(); };
        area.append(h('div', { class: 'done-box' }, h('b', null, ex.khen || 'Giỏi quá! Em đã đọc hết các chữ.'), r));
      }
    };
    const side = h('div', { class: 'bt-side' }, kq, btn, dem, grid);
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Bấm “Bốc thăm”. Em bốc được chữ nào thì đọc to chữ đó.'),
      h('div', { class: 'bt' }, ex.hinh ? h('img', { class: 'bt-img', src: ex.hinh, alt: ex.moTa || '' }) : null, side), area);
    reset();
  };
});
