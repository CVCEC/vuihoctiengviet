/* Dạng riêng 'danh-van-van' – Đánh vần vần (Quyển 2, các bài học vần: a – nờ – an).
   Giống 'danh-van' (assets/js/dang/danh-van.js), nhưng chữ dưới hình là cả từ trong sách
   (vd. "đàn", phần vần "àn" tô đỏ) thay cho riêng vần.
   ex.tu: [{ hinh, tu: 'đàn', to: 'àn', tieng: 'an', phan: ['a', 'n'], thanh: null, doc: 'a – nờ – an', am? }] */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  A.T['danh-van-van'] = function (ex, ctx) {
    A.T['danh-van'](ex, ctx);
    const words = ctx.body.querySelectorAll('.dv-word');
    ex.tu.forEach((w, i) => {
      const el = words[i];
      if (!w.tu || !el) return;
      const s = w.tu.normalize('NFC'), to = (w.to || '').normalize('NFC');
      const k = to ? s.lastIndexOf(to) : -1;
      el.innerHTML = '';
      if (k >= 0) el.append(s.slice(0, k), A.h('span', { class: 'on' }, to), s.slice(k + to.length));
      else el.append(s);
      const pic = el.closest('.dv-pic');
      if (pic) pic.setAttribute('aria-label', s);
      const img = pic && pic.querySelector('img');
      if (img) img.alt = s;
    });
  };
});
