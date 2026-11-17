// Kiểm tra dữ liệu phần Mở rộng 15+ (quyen-N/bai-NN/mo-rong.js). Chạy: node tools/kiem_mo_rong.js [quyen-1/bai-02 ...]
// Không có tham số: kiểm tra mọi bài có mo-rong.js.
const fs = require('fs'), path = require('path'), vm = require('vm');
const R = path.join(__dirname, '..');
let ds = process.argv.slice(2);
if (!ds.length) for (const q of ['quyen-1', 'quyen-2']) for (const b of fs.readdirSync(path.join(R, q))) if (fs.existsSync(path.join(R, q, b, 'mo-rong.js'))) ds.push(q + '/' + b);
let tongLoi = 0;
for (const d of ds) {
  const loi = [], f = path.join(R, d, 'mo-rong.js');
  const L = m => loi.push(m);
  let M;
  try { const src = fs.readFileSync(f, 'utf8'); if (src !== src.normalize('NFC')) L('tệp chưa chuẩn NFC'); const c = {}; vm.runInNewContext(src + ';this.M=MO_RONG', c); M = c.M; }
  catch (e) { console.log('❌', d, 'lỗi cú pháp/không đọc được:', e.message); tongLoi++; continue; }
  const s = x => typeof x === 'string' && x.trim().length > 0;
  if (!Array.isArray(M.bt) || M.bt.length !== 4) L('cần đúng 4 bài tập');
  const ids = (M.bt || []).map(b => b.id).join(',');
  if (ids !== 'nghe,viet,chinh-ta,ngu-phap') L('id phải theo thứ tự nghe,viet,chinh-ta,ngu-phap (đang: ' + ids + ')');
  (M.bt || []).forEach(b => {
    const P = b.id + ': ';
    if (!s(b.lenh) || !s(b.muc) || !s(b.mucEn)) L(P + 'thiếu lenh/muc/mucEn');
    if (b.id === 'viet') {
      if (b.loai !== 'mr-viet') L(P + 'loai phải là mr-viet');
      if (!b.mau || !s(b.mau.ten) || !s(b.mau.chu)) L(P + 'thiếu mau');
      if (!Array.isArray(b.tu) || b.tu.length < 3) L(P + 'tu cần ≥3 từ');
      const m = b.muc_ || {};
      if (!m.de || !Array.isArray(m.de.khung) || m.de.khung.length < 3 || m.de.khung.some(k => !Array.isArray(k) || k.length !== 2)) L(P + 'muc_.de.khung cần ≥3 cặp [trước, sau]');
      if (!m.de || !s(m.de.xong)) L(P + 'muc_.de.xong thiếu');
      ['de', 'vua', 'kho'].forEach(k => { if (!m[k] || !s(m[k].huong) || !s(m[k].en)) L(P + 'muc_.' + k + ' thiếu huong/en'); });
      if (!(m.vua && m.vua.soCau >= 2) || !(m.kho && m.kho.soCau > m.vua.soCau)) L(P + 'soCau: vua ≥2, kho > vua');
      if (!Array.isArray(b.tuKiemTra) || b.tuKiemTra.length < 2) L(P + 'tuKiemTra cần ≥2 dòng');
      return;
    }
    if (b.loai !== 'mr-bai') L(P + 'loai phải là mr-bai');
    if (b.id === 'nghe' && (!Array.isArray(b.thoai) || !b.thoai.length)) L(P + 'cần thoai');
    (b.thoai || []).forEach(t => { if (!s(t.ten) || !Array.isArray(t.cau) || t.cau.length < 4 || t.cau.some(c => !s(c[0]) || !s(c[1]))) L(P + 'thoai "' + t.ten + '" cần ≥4 câu [người, lời]'); });
    if (b.id === 'ngu-phap') {
      const g = b.bang;
      if (!g || !Array.isArray(g.cot) || g.cot.length !== 3 || !Array.isArray(g.dong) || g.dong.length < 2) L(P + 'bang cần 3 cột và ≥2 dòng');
      else g.dong.forEach((d, i) => { if (d.length !== 3 || !s(d[0]) || !s(d[1]) || !Array.isArray(d[2]) || d[2].length !== 2) L(P + 'bang dòng ' + (i + 1) + ': [điểm, ví dụ, [giải thích VI, EN]]'); });
    }
    if (!Array.isArray(b.cauHoi) || b.cauHoi.length < 4) { L(P + 'cần ≥4 câu hỏi'); return; }
    b.cauHoi.forEach((q, i) => {
      const Q = P + 'câu ' + (i + 1) + ' (' + q.loai + '): ';
      if (!s(q.hoi)) L(Q + 'thiếu hoi');
      if (q.loai === 'chon') {
        if (!s(q.dung) || !Array.isArray(q.sai) || !q.sai.length) L(Q + 'cần dung (chuỗi) và sai (mảng)');
        else { if (q.sai.includes(q.dung)) L(Q + 'đáp án đúng nằm trong sai'); if (new Set(q.sai).size !== q.sai.length) L(Q + 'sai bị trùng'); }
      } else if (q.loai === 'nhieu') {
        if (!Array.isArray(q.dung) || q.dung.length < 2 || !Array.isArray(q.sai) || !q.sai.length) L(Q + 'cần dung (≥2) và sai');
        else if (q.dung.some(x => q.sai.includes(x))) L(Q + 'dung và sai trùng nhau');
      } else if (q.loai === 'xep') {
        if (!Array.isArray(q.dung) || q.dung.length < 2) L(Q + 'dung cần ≥2 ô');
        else if (new Set(q.dung).size !== q.dung.length) L(Q + 'các ô xếp không được trùng chữ (không phân biệt được thứ tự)');
      } else if (q.loai === 'go') {
        if (!Array.isArray(q.dung) || !q.dung.length || !q.dung.every(s)) L(Q + 'dung là mảng chuỗi');
      } else L(Q + 'loai không hợp lệ (chon, nhieu, xep, go)');
      if (q.nghe !== undefined && !s(q.nghe)) L(Q + 'nghe rỗng');
      if (q.loai === 'go' && /^Nghe/.test(q.hoi || '') && !s(q.nghe)) L(Q + 'câu "Nghe…" cần trường nghe');
    });
  });
  if (loi.length) { tongLoi += loi.length; console.log('❌', d); loi.forEach(x => console.log('   -', x)); } else console.log('✅', d);
}
process.exit(tongLoi ? 1 : 0);
