/* Bảo vệ tài liệu: chặn chuột phải / nhấn giữ để lưu ảnh, kéo thả ảnh, Ctrl/Cmd+S, Ctrl/Cmd+P.
   (Khi in, CSS chỉ in một dòng báo "chỉ để xem trực tuyến" – xem site.css @media print.)
   Ô nhập chữ vẫn dùng chuột phải bình thường. */
(function () {
  'use strict';
  const choNhap = t => t && t.closest && t.closest('input, textarea, [contenteditable="true"]');
  document.addEventListener('contextmenu', e => { if (!choNhap(e.target)) e.preventDefault(); });
  document.addEventListener('dragstart', e => { if (e.target && (e.target.tagName === 'IMG' || e.target.tagName === 'CANVAS' || e.target.tagName === 'AUDIO')) e.preventDefault(); });
  document.addEventListener('keydown', e => {
    if (!(e.ctrlKey || e.metaKey)) return;
    const k = (e.key || '').toLowerCase();
    if (k === 's' || k === 'p') { e.preventDefault(); e.stopPropagation(); }
  }, true);
  // Safari iOS: nhấn giữ ảnh không hiện menu "Lưu ảnh"
  const st = document.createElement('style');
  st.textContent = 'img,canvas,audio,video{-webkit-touch-callout:none;-webkit-user-drag:none;user-drag:none;-webkit-user-select:none;user-select:none}';
  document.head.append(st);
})();
