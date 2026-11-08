/* Quyển 1 – Bài 19: dạng bài riêng
   hoi-dap-mau   : khung mẫu hỏi – đáp của hai bạn (như sách), rồi hỏi đáp theo từng hình.
                   ex.mau: [[{ c, am? }, { c, am? }], …], ex.mauAv: [ảnh bạn hỏi, ảnh bạn đáp]
                   ex.cau: [{ hinh?, hoi: 'chữ' | { c, am? }, dung: 'câu' | ['câu', 'câu'] , sai?: […], amDung?: 'tệp' | { 'câu': 'tệp' } }]
                   dung là mảng → câu hỏi ý kiến (đẹp hơn, đắt hơn…): em chọn câu nào cũng đúng.
   mau-hoat-dong : khung mẫu hỏi – đáp (như trên) + hoạt động làm ở nhà (dạng "hoat-dong"). */
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

  A.T['mau-hoat-dong'] = function (ex, ctx) {
    ctx.body.append(modelDuo(ex));
    A.T['hoat-dong'](ex, ctx);
  };
});
