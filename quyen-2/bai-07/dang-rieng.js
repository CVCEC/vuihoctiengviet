/* Dạng bài riêng của bài này (dựa trên dạng bài dùng chung):
   - 'chon-mau': như 'chon-cau', thêm khung mẫu M ở trên  (ex.mau = { nv?: 'ảnh', cau: [{ c, am? }] })
   - 'doc-tho' : như 'doc-bai', mỗi câu thơ một dòng
   Thêm: .bigl xuống dòng khi có nhiều chữ (5 chữ ghép tràn màn hình hẹp); tranh hội thoại dọc không quá cao;
         thẻ hình 2 cột trên điện thoại (kể cả khi đặt ex.cot). */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  if (!document.getElementById('dang-rieng-q2')) {
    const st = document.createElement('style'); st.id = 'dang-rieng-q2';
    st.textContent =
      '.cm-mau{margin:0 0 14px}.cm-mau .model{margin-top:0}' +
      '.db-p.tho{text-indent:0;text-align:center}.db-p.tho .db-s{display:table;margin:0 auto}' +
      '.bigl{flex-wrap:wrap;row-gap:0}' +
      '.lt-scene{width:auto;max-width:min(100%,640px);max-height:440px}' +
      '@media (max-width:420px){.th-grid{grid-template-columns:repeat(2,1fr)!important}}';
    document.head.append(st);
  }
  A.T['chon-mau'] = function (ex, ctx) {
    if (ex.mau) ctx.body.append(A.h('div', { class: 'cm-mau' }, A.modelBox(ex.mau).el));
    A.T['chon-cau'](ex, ctx);
  };
  A.T['doc-tho'] = function (ex, ctx) {
    A.T['doc-bai'](ex, ctx);
    const p = ctx.body.querySelector('.db-p'); if (p) p.classList.add('tho');
  };
});
