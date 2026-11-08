/* Dạng bài "chon-cau": trắc nghiệm chung – mỗi câu có hình (tuỳ chọn), câu hỏi, đáp án đúng và các đáp án sai.
   ex.cau: [{ hinh?, hoi: { c, am? } | 'chuỗi', dung, sai: [...], amDung?, khen? }]
   Đáp án là chuỗi, hoặc { hinh, c? } để chọn bằng hình. Câu giữ đúng thứ tự; ex.tronCau: true → trộn thứ tự câu. */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, play, stopAll, wait, shuffle, feedback, flash } = A;
  if (!document.getElementById('dang-chon-cau')) {
    const st = document.createElement('style'); st.id = 'dang-chon-cau';
    st.textContent = `
.cc-q{display:flex;flex-direction:column;align-items:center;gap:10px;margin:6px 0 10px}
.cc-q .cc-img{max-width:min(100%,420px);max-height:300px;width:auto;border-radius:14px;border:2px solid #EFE7DC;background:#fff;object-fit:contain}
.cc-hoi{display:flex;align-items:center;gap:10px;font-size:clamp(21px,4.4vw,27px);font-weight:700;text-align:center;justify-content:center;flex-wrap:wrap}
.cc-hoi .lenh{flex:none}
.cc-opts{display:grid;gap:10px;grid-template-columns:1fr}
@media (min-width:640px){.cc-opts{grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}}
.cc-opts.hinh{grid-template-columns:repeat(auto-fit,minmax(130px,1fr))}
@media (max-width:420px){.cc-opts.hinh{grid-template-columns:repeat(2,1fr)}}
.opt.cc-io{display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px}
.opt.cc-io img{width:100%;aspect-ratio:4/3;object-fit:contain;border-radius:10px;pointer-events:none}
.opt.cc-io span{font-size:18px}
`;
    document.head.append(st);
  }
  const isObj = v => v && typeof v === 'object';

  A.T['chon-cau'] = function (ex, ctx) {
    const area = h('div');
    if (ex.goiY) ctx.body.append(h('p', { class: 'hint' }, ex.goiY));
    ctx.body.append(area);
    function start() {
      area.innerHTML = '';
      const list = ex.tronCau ? shuffle(ex.cau) : ex.cau.slice();
      let k = 0;
      const dots = h('div', { class: 'dots' }, list.map(() => h('i')));
      const holder = h('div'), opts = h('div', { class: 'cc-opts' }), fb = h('div', { class: 'fb', 'aria-live': 'polite' });
      area.append(h('div', { class: 'game-bar' }, h('b', { class: 'cc-dem' }, ''), dots), holder, opts, fb);
      const dem = area.querySelector('.cc-dem');
      function next() {
        if (k >= list.length) return finish();
        const q = list[k], hoi = typeof q.hoi === 'string' ? { c: q.hoi } : (q.hoi || {});
        dem.textContent = 'Câu ' + (k + 1) + '/' + list.length;
        holder.innerHTML = ''; opts.innerHTML = ''; fb.textContent = ''; fb.className = 'fb';
        const qbox = h('div', { class: 'cc-q' });
        if (q.hinh) qbox.append(h('img', { class: 'cc-img', src: q.hinh, alt: '' }));
        if (hoi.c || hoi.am) {
          const line = h('div', { class: 'cc-hoi' });
          if (hoi.am) { const b = h('button', { class: 'lenh', type: 'button', 'aria-label': 'Nghe câu hỏi' }, icon('spk')); b.onclick = () => { stopAll(); play(hoi.am, b); }; line.append(b); }
          if (hoi.c) line.append(h('span', null, hoi.c));
          qbox.append(line);
        }
        holder.append(qbox);
        const choices = shuffle([{ v: q.dung, ok: true }].concat((q.sai || []).map(v => ({ v, ok: false }))));
        opts.classList.toggle('hinh', choices.some(c => isObj(c.v)));
        choices.forEach(cx => {
          const b = isObj(cx.v)
            ? h('button', { class: 'opt cc-io', type: 'button', 'aria-label': cx.v.c || 'hình' }, h('img', { src: cx.v.hinh, alt: '' }), cx.v.c ? h('span', null, cx.v.c) : null)
            : h('button', { class: 'opt', type: 'button' }, String(cx.v));
          b.onclick = async () => {
            if (cx.ok) {
              b.classList.add('good'); opts.querySelectorAll('.opt').forEach(o => o.disabled = true);
              feedback(fb, true, q.khen || 'Đúng rồi!');
              dots.children[k].classList.add('done'); k++;
              const my = A.gen();
              if (q.amDung) { await wait(150); await play(q.amDung); } else await wait(900);
              if (A.gen() !== my) return;
              await wait(350); next();
            } else { flash(b, 'bad', 450); b.classList.add('bad'); feedback(fb, false, q.goiYSai || 'Thử lại nhé!'); }
          };
          opts.append(b);
        });
        if (hoi.am) setTimeout(() => play(hoi.am, holder.querySelector('.cc-hoi .lenh')), 250);
      }
      function finish() {
        opts.innerHTML = ''; holder.innerHTML = ''; dem.textContent = '';
        ctx.win();
        const r = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Làm lại');
        r.onclick = start;
        area.append(h('div', { class: 'done-box' }, h('b', null, ex.khen || 'Giỏi quá! Em đã trả lời đúng hết.'), r));
      }
      next();
    }
    start();
  };
});
