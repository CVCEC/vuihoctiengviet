/* Giọng đọc AI cho những câu sách không có file thu âm.
   - Duyệt dữ liệu bài (BAI_HOC), tìm chỗ có chữ mà chưa có tiếng.
   - Trên trang: nếu bài có AM_AI (quyen-x/bai-yy/am-ai.js: { 'giọng|câu': 'audio/ai/xxx.mp3' }) thì gắn vào,
     và đánh dấu bài tập có dùng giọng AI (ex._ai) để hiện nhãn "Giọng đọc AI".
   - Dùng chung cho công cụ tools/thieu_tieng.js (chạy bằng Node). */
(function (root) {
  'use strict';
  const NAM = /^(nam|dũng|hùng|tâm|sơn|vũ|minh|bố|ba|ông|bác|chú|cậu|dượng|anh|thầy|bạn trai|tú|khoa|bảo|quang|tùng|son|tiến|linh trai)\b/i;
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
  function docDuoc(t) { // chữ đủ để đọc thành tiếng (bỏ chữ cái lẻ như "b", "ngh" – tên chữ phải theo cách đọc của sách)
    if (typeof t !== 'string') return false;
    const s = t.normalize('NFC').replace(/[–—\-“”"'.,!?…:;()]/g, ' ').trim();
    if (!s || !NGUYEN_AM.test(s)) return false;
    if (s.length <= 2 && !/\s/.test(s)) return false;
    return true;
  }
  const sach = t => String(t).normalize('NFC').replace(/^\s*[–—-]\s*/, '').replace(/\s+/g, ' ').trim();
  const khoa = (giong, t) => giong + '|' + sach(t);

  // f(o, khoaChu, khoaAm, giong, ex, chu) – được gọi cho mỗi chỗ thiếu tiếng
  function duyet(D, f) {
    (D.phan || []).forEach(p => (p.bt || []).forEach(ex => walk(ex, ex, null)));
    function visit(o, kc, ka, ex, ai, chu) {
      const t = chu !== undefined ? chu : o[kc];
      if (!docDuoc(t)) return;
      f(o, kc, ka, giongCua(ai), ex, sach(t));
    }
    function walk(o, ex, ai) {
      if (Array.isArray(o)) { o.forEach(x => walk(x, ex, ai)); return; }
      if (!o || typeof o !== 'object') return;
      const nguoi = o.ai || ai;
      if (typeof o.c === 'string' && !o.am) visit(o, 'c', 'am', ex, nguoi);
      else if (typeof o.tu === 'string' && !o.am && (o.hinh !== undefined || o.nguoi !== undefined)) visit(o, 'tu', 'am', ex, nguoi);
      if (typeof o.tieng === 'string' && !o.am && o.phan) visit(o, 'tieng', 'am', ex, nguoi);
      if (typeof o.dap === 'string' && !o.am && o.mau) visit(o, 'dap', 'am', ex, nguoi);
      if (typeof o.dung === 'string' && !o.amDung && o.hoi !== undefined) visit(o, 'dung', 'amDung', ex, nguoi);
      if (typeof o.hoi === 'string' && o.dung !== undefined) { o.hoi = { c: o.hoi }; visit(o.hoi, 'c', 'am', ex, nguoi); }
      for (const k in o) {
        if (k === 'sai' || k === 'dung' || k === 'tranh' && false || k === '_ai') continue;
        const v = o[k];
        if (v && typeof v === 'object') walk(v, ex, nguoi);
      }
    }
    // câu dựng từ mẫu (giới thiệu, lời chào, Ai nhanh)
    (D.phan || []).forEach(p => (p.bt || []).forEach(ex => {
      const amCau = ex.amCau || (ex.amCau = {});
      const them = (cau, ai) => { if (!amCau[cau] && docDuoc(cau)) f(amCau, cau, null, giongCua(ai), ex, sach(cau)); };
      if ((ex.loai === 'gioi-thieu' || ex.loai === 'hoi-dap') && ex.nguon && ex.nguon.diem) {
        const tpl = ex.mauCau || 'Đây là {tu} tôi.', toi = ex.mauToi || 'Đây là tôi.';
        ex.nguon.diem.forEach(d => them(d.toi ? toi : tpl.split('{tu}').join(d.tu)));
      }
      if (ex.loai === 'ai-nhanh' && ex.nguoi) ex.nguoi.forEach(n => { them(n.dung); });
    }));
  }

  // Gắn tiếng AI vào bài trên trang
  function gan(D, map) {
    if (!D || !map) return 0;
    let n = 0;
    duyet(D, (o, kc, ka, giong, ex, chu) => {
      const f = map[khoa(giong, chu)];
      if (!f) return;
      if (ka === null) o[kc] = f; else o[ka] = f;
      ex._ai = true; n++;
    });
    return n;
  }

  const api = { duyet, gan, khoa, giongCua, docDuoc, sach };
  root.GIONG_AI = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  // tự gắn khi chạy trên trang (sau data.js và am-ai.js, trước engine.js)
  try { if (typeof BAI_HOC !== 'undefined' && typeof AM_AI !== 'undefined') gan(BAI_HOC, AM_AI); } catch (e) { /* bỏ qua */ }
})(typeof window !== 'undefined' ? window : globalThis);
