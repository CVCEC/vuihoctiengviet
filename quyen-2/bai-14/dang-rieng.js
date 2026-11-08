/* Dạng riêng của Quyển 2 – Bài 14
   1) 'danh-van-van' – Đánh vần vần (a – i – ai). Giống 'danh-van' (assets/js/dang/danh-van.js), nhưng chữ dưới hình
      là cả từ trong sách (vd. "con nai", phần vần "ai" tô đỏ) thay cho riêng vần.
      ex.tu: [{ hinh, tu: 'con nai', to: 'ai', tieng: 'ai', phan: ['a', 'i'], thanh: null, doc: 'a – i – ai' }]
   2) 'doc-bai-dong' – như 'doc-bai' nhưng mỗi câu là một dòng (bài thơ, lời đối đáp xuống dòng như trong sách).
      ex.cau: [{ c, i?: true (chữ nghiêng) }] */
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

  if (!document.getElementById('dang-doc-bai-dong')) {
    const st = document.createElement('style'); st.id = 'dang-doc-bai-dong';
    st.textContent = '.db-p.dong{text-indent:0}.db-p.dong .db-s{display:block;padding-left:1.2em}.db-p.dong .db-s.dau{padding-left:0;text-indent:1.2em}.db-p.dong .db-s.i{font-style:italic}';
    document.head.append(st);
  }
  A.T['doc-bai-dong'] = function (ex, ctx) {
    A.T['doc-bai'](ex, ctx);
    const p = ctx.body.querySelector('.db-p');
    if (!p) return;
    p.classList.add('dong');
    p.querySelectorAll('.db-s').forEach((s, i) => { if (ex.cau[i] && ex.cau[i].i) s.classList.add('i'); if (i === 0) s.classList.add('dau'); });
  };
});
