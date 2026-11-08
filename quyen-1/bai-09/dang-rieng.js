/* Dạng bài riêng "nghe-hinh-vat": giống hệt "nghe-hinh" (assets/js/engine.js) – tranh lớn, chạm để nghe, trò chơi nghe và chạm –
   nhưng dùng cho tranh con vật / bộ phận cơ thể. engine.js viết sẵn câu chữ cho tranh người ("Trò chơi: Ai đây?",
   "Chạm vào từng người…", "…tìm đúng cả nhà."), nên ở đây thay các câu đó bằng:
   ex.tenChoi (tên nút trò chơi), ex.goiY (gợi ý khi học), ex.goiYChoi (gợi ý khi chơi), ex.khen (lời khen cuối trò chơi).
   Khi engine.js nhận các tuỳ chọn này cho "nghe-hinh", có thể bỏ tệp này và đổi loai về "nghe-hinh". */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  A.T['nghe-hinh-vat'] = function (ex, ctx) {
    const doi = [
      ['Trò chơi: Ai đây?', ex.tenChoi || 'Trò chơi: Nghe và chỉ'],
      ['Chạm vào từng người để nghe. Nghe xong, em nhắc lại thật to.', ex.goiY || 'Chạm vào từng chỗ trong tranh để nghe. Nghe xong, em nhắc lại thật to.'],
      ['Nghe và chạm vào người đúng.', ex.goiYChoi || 'Nghe và chạm vào đúng chỗ trong tranh.'],
      ['Giỏi quá! Em đã tìm đúng cả nhà.', ex.khen || 'Giỏi quá! Em đã tìm đúng hết.']
    ];
    const sua = root => {
      if (!root) return;
      if (root.nodeType === 3) { for (const [a, b] of doi) if (root.nodeValue === a) root.nodeValue = b; return; }
      const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      for (let n = w.nextNode(); n; n = w.nextNode()) for (const [a, b] of doi) if (n.nodeValue === a) n.nodeValue = b;
    };
    new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(sua))).observe(ctx.body, { childList: true, subtree: true });
    A.T['nghe-hinh'](ex, ctx);
    sua(ctx.body);
  };
});
