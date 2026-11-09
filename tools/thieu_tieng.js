#!/usr/bin/env node
/* Giọng đọc AI – liệt kê câu thiếu tiếng và gắn file đã tạo vào bài.
   node tools/thieu_tieng.js            → viết giong-ai/can-doc.tsv (mọi câu chưa có file thu âm của NXB)
   node tools/thieu_tieng.js --gan      → với các file đã có trong am-ai/, viết quyen-x/bai-yy/am-ai.js
                                           và trang nghe thử giong-ai/index.html
   Mỗi câu (theo giọng + chữ) chỉ tạo một lần, dùng chung cho mọi bài: am-ai/<ma>.mp3 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm'), crypto = require('crypto');
const ROOT = path.resolve(__dirname, '..');
const G = require(path.join(ROOT, 'assets/js/giong-ai.js'));
const ma = k => crypto.createHash('sha1').update(k).digest('hex').slice(0, 12);

function docBai(f) {
  const ctx = { window: {}, console };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(f, 'utf8') + '\n;this.__D = BAI_HOC;', ctx);
  return ctx.__D;
}
const dsBai = [];
for (const q of ['quyen-1', 'quyen-2']) {
  const d = path.join(ROOT, q);
  if (!fs.existsSync(d)) continue;
  for (const b of fs.readdirSync(d).sort()) {
    const f = path.join(d, b, 'data.js');
    if (fs.existsSync(f)) dsBai.push({ thuMuc: path.join(d, b), ten: q + '/' + b, D: docBai(f) });
  }
}

const cau = new Map(); // khoá → { ma, giong, chu, bai:Set }
for (const b of dsBai) {
  G.duyet(b.D, (g, giong, ex, chu) => {
    const k = G.khoa(giong, chu);
    if (!cau.has(k)) cau.set(k, { ma: ma(k), giong, chu, bai: new Set() });
    cau.get(k).bai.add(b.ten);
  });
}

const OUT = path.join(ROOT, 'giong-ai');
fs.mkdirSync(OUT, { recursive: true });
const AM = path.join(ROOT, 'am-ai');

if (!process.argv.includes('--gan')) {
  const dong = ['ma\tgiong\tchu\tbai'];
  [...cau.values()].sort((a, b) => a.ma.localeCompare(b.ma))
    .forEach(c => dong.push([c.ma, c.giong, c.chu.replace(/\t/g, ' '), [...c.bai].join(',')].join('\t')));
  fs.writeFileSync(path.join(OUT, 'can-doc.tsv'), dong.join('\n') + '\n');
  const theoGiong = {};
  cau.forEach(c => { theoGiong[c.giong] = (theoGiong[c.giong] || 0) + 1; });
  const kyTu = [...cau.values()].reduce((s, c) => s + c.chu.length, 0);
  console.log('Câu cần đọc:', cau.size, '| ký tự:', kyTu, '| theo giọng:', JSON.stringify(theoGiong));
  process.exit(0);
}

// --gan: gắn những file đã có
const coFile = c => fs.existsSync(path.join(AM, c.ma + '.mp3'));
const loi = {}; // ma → ghi chú kiểm tra (Whisper nghe khác chữ)
const fLoi = path.join(OUT, 'kiem-tra.tsv');
if (fs.existsSync(fLoi)) fs.readFileSync(fLoi, 'utf8').split('\n').slice(1).filter(Boolean).forEach(l => { const [m, nghe, diem] = l.split('\t'); loi[m] = { nghe, diem: +diem }; });
const tat = new Set(); // câu bố mẹ / giáo viên bảo bỏ (giong-ai/bo.txt, mỗi dòng một mã)
const fBo = path.join(OUT, 'bo.txt');
if (fs.existsSync(fBo)) fs.readFileSync(fBo, 'utf8').split(/\s+/).filter(Boolean).forEach(m => tat.add(m));

let tong = 0;
const nhom = [];
for (const b of dsBai) {
  const map = {}, ds = [];
  const D = docBai(path.join(b.thuMuc, 'data.js'));
  G.duyet(D, (g, giong, ex, chu) => {
    const c = cau.get(G.khoa(giong, chu));
    if (!c || !coFile(c) || tat.has(c.ma)) return;
    const k = G.khoa(giong, chu);
    if (!map[k]) { map[k] = '../../am-ai/' + c.ma + '.mp3'; ds.push(c); }
  });
  const f = path.join(b.thuMuc, 'am-ai.js');
  if (ds.length) {
    fs.writeFileSync(f, '/* Giọng đọc AI (Google Gemini) cho câu sách không có file thu âm – tạo tự động bằng tools/thieu_tieng.js --gan */\nconst AM_AI = ' + JSON.stringify(map, null, 0).replace(/","/g, '",\n"') + ';\n');
    tong += ds.length;
    nhom.push({ ten: b.ten, tieuDe: 'Quyển ' + D.quyen + ' – Bài ' + D.bai + ': ' + D.ten, ds });
  } else if (fs.existsSync(f)) fs.unlinkSync(f);
}

// Trang nghe thử
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const TEN_GIONG = { Leda: 'nữ trẻ', Puck: 'nam trẻ', Kore: 'nữ lớn', Charon: 'nam lớn' };
const khac = m => loi[m] && loi[m].diem < 1 ? (loi[m].diem < 0.75 ? 'can' : 'nhe') : '';
const daCo = [...cau.values()].filter(coFile);
const soCan = daCo.filter(c => khac(c.ma) === 'can').length, soNhe = daCo.filter(c => khac(c.ma) === 'nhe').length;
const html = `<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Nghe thử giọng đọc AI – Vui học tiếng Việt</title><meta name="robots" content="noindex">
<link rel="stylesheet" href="../assets/css/site.css">
<style>
body{background:var(--bg,#F4F0EA)}
.gw{max-width:860px;margin:0 auto;padding:16px}
.gw h1{font-size:26px;margin:8px 0}
.gw h2{font-size:19px;margin:22px 0 8px}
.gw .note{background:#fff;border:2px solid #EFE7DC;border-radius:14px;padding:12px 14px;font-size:16px;line-height:1.5}
.gw .row{display:flex;align-items:center;gap:10px;background:#fff;border:2px solid #EFE7DC;border-radius:12px;padding:6px 10px;margin:6px 0}
.gw .row.can{border-color:#E0A23C;background:#FFF7E6}
.gw .row.nhe{border-color:#EAD58A;background:#FFFCEB}
.gw button{flex:none;width:44px;height:44px;border-radius:50%;border:0;background:#C68B59;color:#fff;font-size:18px;cursor:pointer}
.gw .t{flex:1;font-size:18px}
.gw .m{font:12px ui-monospace,monospace;color:#8a7f72}
.gw .g{font-size:13px;color:#8a7f72;white-space:nowrap}
.gw .w{display:block;font-size:14px;color:#A0522D}
.gw .loc{margin:10px 0}
</style></head><body><div class="gw">
<h1>Nghe thử giọng đọc AI</h1>
<p class="note">Đây là những câu trong sách không có file thu âm của Nhà xuất bản, được đọc bằng giọng AI (Google Gemini). Trên trang bài học, các bài tập có giọng AI mang nhãn «Giọng đọc AI».<br>
Đã có <b>${tong}</b> chỗ dùng giọng AI trong <b>${nhom.length}</b> bài. Máy (Whisper) nghe lại từng câu: <b>${soCan}</b> câu viền cam (khác nhiều – nên nghe kỹ), <b>${soNhe}</b> câu viền vàng (khác một chữ, thường là dấu thanh – nghe lại xem máy đọc sai hay máy nghe nhầm).<br>
Câu nào đọc sai: ghi lại <b>mã</b> (chữ số nhỏ bên phải) và gửi cho người phụ trách, câu đó sẽ được bỏ hoặc đọc lại.</p>
<label class="loc"><input type="checkbox" id="chiCan"> Chỉ hiện câu viền cam / vàng</label>
${nhom.map(n => `<h2>${esc(n.tieuDe)} <a href="../${n.ten}/">↗</a></h2>\n` + n.ds.map(c => `<div class="row ${khac(c.ma)}"><button type="button" data-a="../am-ai/${c.ma}.mp3" aria-label="Nghe">▶</button><span class="t">${esc(c.chu)}${khac(c.ma) ? `<span class="w">Máy nghe thành: ${esc(loi[c.ma].nghe)}</span>` : ''}</span><span class="g">${TEN_GIONG[c.giong] || c.giong}</span><span class="m">${c.ma}</span></div>`).join('\n')).join('\n')}
</div>
<script>
const a=new Audio();let nut=null;
document.addEventListener('click',e=>{const b=e.target.closest('button[data-a]');if(!b)return;if(nut)nut.textContent='▶';a.src=b.dataset.a;a.play();nut=b;b.textContent='■';a.onended=()=>{b.textContent='▶'};});
document.getElementById('chiCan').onchange=e=>{document.querySelectorAll('.gw .row').forEach(r=>{r.style.display=e.target.checked&&!(r.classList.contains('can')||r.classList.contains('nhe'))?'none':''});};
</script></body></html>
`;
fs.writeFileSync(path.join(OUT, 'index.html'), html);
console.log('Đã gắn', tong, 'chỗ trong', nhom.length, 'bài');
