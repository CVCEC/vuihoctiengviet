/* Dạng bài riêng của bài này (dựa trên dạng bài dùng chung):
   - 'chon-mau': như 'chon-cau', thêm khung mẫu M ở trên  (ex.mau = { nv?: 'ảnh', cau: [{ c, am? }] })
   - 'doc-tho' : như 'doc-bai', mỗi câu thơ một dòng
   Thêm: .bigl xuống dòng khi có nhiều chữ (5 chữ ghép tràn màn hình hẹp); tranh hội thoại dọc không quá cao;
         thẻ hình 2 cột trên điện thoại (kể cả khi đặt ex.cot).
   - 'bang-ghep-xam': như 'bang-ghep', thêm các ô tô xám như trong sách (âm đầu không ghép được với vần đó)
                      ex.xam = { k: ['a', 'o', …], gh: […], ngh: […] } */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  if (!document.getElementById('dang-rieng-q2')) {
    const st = document.createElement('style'); st.id = 'dang-rieng-q2';
    st.textContent =
      '.cm-mau{margin:0 0 14px}.cm-mau .model{margin-top:0}' +
      '.db-p.tho{text-indent:0;text-align:center}.db-p.tho .db-s{display:table;margin:0 auto}' +
      '.bigl{flex-wrap:wrap;row-gap:0}' +
      '.lt-scene{width:auto;max-width:min(100%,640px);max-height:440px}' +
      '@media (max-width:420px){.th-grid{grid-template-columns:repeat(2,1fr)!important}}' +
      '.bg td button.xam{background:repeating-linear-gradient(45deg,#D9D6D1 0 6px,#CDC9C3 6px 12px);cursor:not-allowed}';
    document.head.append(st);
  }
  A.T['chon-mau'] = function (ex, ctx) {
    if (ex.mau) ctx.body.append(A.h('div', { class: 'cm-mau' }, A.modelBox(ex.mau).el));
    A.T['chon-cau'](ex, ctx);
  };
  A.T['bang-ghep-xam'] = function (ex, ctx) {
    A.T['bang-ghep'](ex, ctx);
    Object.keys(ex.xam || {}).forEach(on => (ex.xam[on] || []).forEach(v => {
      const b = ctx.body.querySelector('.bg td button[aria-label="' + on + ' ' + v + '"]');
      if (b) { b.disabled = true; b.classList.add('xam'); b.setAttribute('aria-label', on + ' ' + v + ' (không ghép)'); }
    }));
  };
  A.T['doc-tho'] = function (ex, ctx) {
    A.T['doc-bai'](ex, ctx);
    const p = ctx.body.querySelector('.db-p'); if (p) p.classList.add('tho');
  };
});
