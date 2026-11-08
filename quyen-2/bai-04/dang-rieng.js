/* Dạng bài riêng của Quyển 2 – Bài 4: "doc-tho" – học thơ.
   Dùng lại dạng "doc-bai" (chạm từng dòng để nghe, đọc cả bài, ghi âm) nhưng mỗi câu thơ nằm trên một dòng;
   ex.cau[i].kho = true → bắt đầu khổ thơ mới (cách một dòng). */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  if (!document.getElementById('dang-doc-tho')) {
    const st = document.createElement('style'); st.id = 'dang-doc-tho';
    st.textContent = '.db-p.tho{text-indent:0;line-height:1.5;padding-left:6%}' +
      '.db-p.tho .db-s{display:block;width:fit-content;font-style:italic}' +
      '.db-p.tho .db-s.kho{margin-top:.75em}';
    document.head.append(st);
  }
  A.T['doc-tho'] = function (ex, ctx) {
    A.T['doc-bai'](Object.assign({ goiY: 'Chạm vào từng câu thơ để nghe. Bấm “Đọc cả bài” để nghe cả bài thơ, rồi em đọc to theo.' }, ex), ctx);
    const p = ctx.body.querySelector('.db-p');
    if (!p) return;
    p.classList.add('tho');
    p.querySelectorAll('.db-s').forEach((s, i) => { if (ex.cau[i] && ex.cau[i].kho) s.classList.add('kho'); });
  };
});
