/* Quyển 1 – Bài 16: dạng bài riêng
   hoi-dap-mau : khung mẫu hỏi – đáp của hai bạn (như sách), rồi trắc nghiệm theo từng hình (dùng lại "chon-cau").
                 ex.mau: [[{ c, am? }, { c, am? }], …], ex.mauAv: [ảnh bạn hỏi, ảnh bạn đáp], các khoá khác như chon-cau. */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, play, stopAll } = A;
  if (!document.getElementById('dang-hoi-dap-mau')) {
    const st = document.createElement('style'); st.id = 'dang-hoi-dap-mau';
    st.textContent = '.hdm-model .duo{margin:0}.hdm-model .bub .t{font-size:clamp(17px,3.6vw,21px)}';
    document.head.append(st);
  }
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
});
