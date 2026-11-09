/* Giọng đọc AI cho những câu sách không có file thu âm.
   - Duyệt dữ liệu bài (BAI_HOC), tìm chỗ có chữ mà chưa có tiếng.
   - Trên trang: nếu bài có AM_AI (quyen-x/bai-yy/am-ai.js: { 'giọng|câu': '../../am-ai/xxx.mp3' }) thì gắn vào,
     và đánh dấu bài tập có dùng giọng AI (ex._ai) để hiện nhãn "Giọng đọc AI".
   - Dùng chung cho công cụ tools/thieu_tieng.js (chạy bằng Node).
   Quy tắc:
   - Phần Luyện đọc là để em tự đọc: chỉ bài đọc (doc-bai…) có giọng mẫu; nối từ, chọn hình, đánh vần thì không.
   - Câu hỏi dạng chữ (hoi: 'chuỗi') chỉ đổi thành { c, am } ở các dạng chọn đáp án dựa trên chon-cau. */
(function (root) {
  'use strict';
  const NAM = /^(nam|dũng|hùng|tâm|sơn|vũ|minh|bố|ba|ông|bác|chú|cậu|dượng|anh|thầy|bạn trai|tú|khoa|bảo|quang|tùng|son|tiến)\b/i;
  const LON = /^(bố|ba|mẹ|má|ông|bà|bác|chú|cậu|dượng|cô|dì|mợ|thím|thầy|cô giáo|người bán hàng|bác sĩ|mẹ nam|bố nam)/i;
  // giọng có sẵn của Gemini: nữ trẻ, nam trẻ, nữ lớn, nam lớn
  const GIONG = { treNu: 'Leda', treNam: 'Puck', lonNu: 'Kore', lonNam: 'Charon', ke: 'Kore' };
  function giongCua(ai) {
    if (!ai) return GIONG.ke;
    const s = String(ai).trim().toLowerCase();
    const lon = LON.test(s), nam = NAM.test(s);
    return lon ? (nam ? GIONG.lonNam : GIONG.lonNu) : (nam ? GIONG.treNam : GIONG.treNu);
  }
  const NGUYEN_AM = /[aăâeêioôơuưyáàảãạắằẳẵặấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵ]/i;
  function docDuoc(t) { // chữ đủ để đọc thành tiếng
    if (typeof t !== 'string') return false;
    if (/…|\.\.\.|_{2,}|\{|\}/.test(t)) return false;           // câu còn chỗ trống để điền
    const s = t.normalize('NFC').replace(/[–—\-“”"'.,!?:;()]/g, ' ').trim();
    if (!s || !NGUYEN_AM.test(s)) return false;
    if (s.length <= 2 && !/\s/.test(s)) return false;           // chữ cái lẻ như "b", "ngh"
    return true;
  }
  const sach = t => String(t).normalize('NFC').replace(/^\s*[–—-]\s*/, '').replace(/\s+/g, ' ').trim();
  const khoa = (giong, t) => giong + '|' + sach(t);
  const CHON = /^(chon-cau|chon-mau|hoi-mau|hoi-dap-mau)$/;
  const DOC = /^(doc-bai|doc-bai-dong|doc-tho)$/;
  const BO_QUA = { sai: 1, dung: 1, _ai: 1, hinh: 1, av: 1, youtube: 1 };

  // f(gan, giong, ex, chu): gọi cho mỗi chỗ thiếu tiếng; gan(file) gắn file tiếng vào đúng chỗ
  function duyet(D, f) {
    (D.phan || []).forEach(p => (p.bt || []).forEach(ex => {
      if (p.id === 'luyen-doc' && !DOC.test(ex.loai)) return;
      const chon = CHON.test(ex.loai);
      walk(ex, ex, null, chon);
      // câu dựng từ mẫu (giới thiệu, lời chào, Ai nhanh)
      const them = (cau, ai) => {
        if (!docDuoc(cau)) return;
        if (ex.amCau && ex.amCau[cau]) return;
        f(file => { (ex.amCau || (ex.amCau = {}))[cau] = file; }, giongCua(ai), ex, sach(cau));
      };
      if ((ex.loai === 'gioi-thieu' || ex.loai === 'hoi-dap') && ex.nguon && ex.nguon.diem) {
        const tpl = ex.mauCau || 'Đây là {tu} tôi.', toi = ex.mauToi || 'Đây là tôi.';
        ex.nguon.diem.forEach(d => them(d.toi ? toi : tpl.split('{tu}').join(d.tu)));
      }
      if (ex.loai === 'ai-nhanh' && ex.nguoi) ex.nguoi.forEach(n => { them(n.dung); });
    }));
    function visit(gan, t, ex, ai) { if (docDuoc(t)) f(gan, giongCua(ai), ex, sach(t)); }
    function walk(o, ex, ai, chon) {
      if (Array.isArray(o)) { o.forEach(x => walk(x, ex, ai, chon)); return; }
      if (!o || typeof o !== 'object') return;
      const nguoi = o.ai || ai;
      if (typeof o.c === 'string' && !o.am) visit(file => { o.am = file; }, o.c, ex, nguoi);
      else if (typeof o.tu === 'string' && !o.am && (o.hinh !== undefined || o.nguoi !== undefined)) visit(file => { o.am = file; }, o.tu, ex, nguoi);
      if (typeof o.dap === 'string' && !o.am && o.mau) visit(file => { o.am = file; }, o.dap, ex, nguoi);
      if (chon && typeof o.dung === 'string' && !o.amDung && o.hoi !== undefined) visit(file => { o.amDung = file; }, o.dung, ex, nguoi);
      if (chon && typeof o.hoi === 'string' && o.dung !== undefined) { const t = o.hoi; visit(file => { o.hoi = { c: t, am: file }; }, t, ex, nguoi); }
      for (const k in o) {
        if (BO_QUA[k]) continue;
        const v = o[k];
        if (v && typeof v === 'object') walk(v, ex, nguoi, chon);
      }
    }
  }

  // Gắn tiếng AI vào bài trên trang (gom trước rồi mới gắn, để không đổi dữ liệu khi đang duyệt)
  function gan(D, map) {
    if (!D || !map) return 0;
    const viec = [];
    duyet(D, (g, giong, ex, chu) => { const file = map[khoa(giong, chu)]; if (file) viec.push([g, file, ex]); });
    viec.forEach(([g, file, ex]) => { g(file); ex._ai = true; });
    return viec.length;
  }

  const api = { duyet, gan, khoa, giongCua, docDuoc, sach };
  root.GIONG_AI = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  // tự gắn khi chạy trên trang (sau data.js và am-ai.js, trước engine.js)
  try { if (typeof BAI_HOC !== 'undefined' && typeof AM_AI !== 'undefined') gan(BAI_HOC, AM_AI); } catch (e) { /* bỏ qua */ }
})(typeof window !== 'undefined' ? window : globalThis);
