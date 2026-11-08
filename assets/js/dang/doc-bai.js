/* Dạng bài 'doc-bai' – Đọc bài: chạm từng câu để nghe, đọc cả bài, ghi âm, câu hỏi hiểu bài (tuỳ chọn)
   ex.ten, ex.hinh?, ex.nguon? (dòng ghi nguồn), ex.cau: [{ c, am? }], ex.amBai? (cả bài một file),
   ex.hoi?: [{ hoi, dung, sai: [...] }] */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  const { h, icon, play, stopAll, wait, shuffle, feedback, recorder, flash } = A;
  const CSS = `
.db{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:14px;align-items:start}
@media (max-width:620px){.db{grid-template-columns:1fr}}
.db-img{width:100%;border-radius:14px;border:2px dashed #E9B8C7;background:#fff}
.db-txt{background:#FFF7E6;border-radius:16px;padding:14px 16px;box-shadow:inset 0 0 0 2px #F6E3B8}
.db-txt h4{margin:0 0 8px;text-align:center;font-size:22px;color:#2E7D4F}
.db-p{font-size:clamp(21px,4.4vw,26px);line-height:1.65;margin:0;text-indent:1.4em}
.db-s{border:0;background:transparent;font:inherit;color:inherit;padding:1px 2px;border-radius:8px;cursor:pointer;display:inline;text-align:left;line-height:inherit}
.db-s.on{background:#FFE08A}
.db-s.read{background:#E6F1E4}
.db-src{text-align:right;font-size:14px;color:var(--ink-2);margin:8px 0 0;font-style:italic}
.db-q{margin-top:16px;border-top:1px dashed var(--line);padding-top:12px}
.db-q h4{margin:0 0 8px;font-size:18px}
.db-qt{font-size:21px;font-weight:700;margin:6px 0 10px}
`;
  if (!document.getElementById('dang-doc-bai')) { const s = document.createElement('style'); s.id = 'dang-doc-bai'; s.textContent = CSS; document.head.append(s); }

  A.T['doc-bai'] = function (ex, ctx) {
    const coAm = ex.cau.some(c => c.am);
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || (coAm ? 'Chạm vào từng câu để nghe. Bấm “Đọc cả bài” để nghe hết, rồi em đọc to theo.' : 'Em đọc từng câu thật to. Bấm “Câu tiếp theo” sau khi đọc xong mỗi câu.')));
    const p = h('p', { class: 'db-p', lang: 'vi' });
    const read = new Set();
    let doneRead = false;
    const sents = ex.cau.map((c, i) => {
      const b = h('button', { class: 'db-s', type: 'button' }, c.c);
      b.onclick = async () => {
        stopAll(); sents.forEach(x => x.classList.remove('on')); b.classList.add('on'); mark(i);
        if (c.am) { await play(c.am); b.classList.remove('on'); }
      };
      p.append(b, ' ');
      return b;
    });
    function mark(i) { read.add(i); sents[i].classList.add('read'); if (read.size === sents.length) finishedReading(); }
    function finishedReading() { if (doneRead) return; doneRead = true; if (!ex.hoi || !ex.hoi.length) ctx.win(); else if (qbox) qbox.hidden = false; }
    const txt = h('div', { class: 'db-txt' }, ex.ten ? h('h4', null, ex.ten) : null, p, ex.nguon ? h('p', { class: 'db-src' }, ex.nguon) : null);
    ctx.body.append(ex.hinh ? h('div', { class: 'db' }, h('img', { class: 'db-img', src: ex.hinh, alt: ex.ten || '' }), txt) : txt);

    const row = h('div', { class: 'mrow' });
    if (coAm || ex.amBai) {
      const all = h('button', { class: 'btn wood', type: 'button' }, icon('play'), 'Đọc cả bài');
      all.onclick = async () => {
        if (all.classList.contains('playing')) { stopAll(); all.lastChild.textContent = 'Đọc cả bài'; return; }
        stopAll(); const my = A.gen(); all.classList.add('playing'); all.lastChild.textContent = 'Dừng';
        if (coAm) {
          for (let i = 0; i < ex.cau.length; i++) {
            sents.forEach(x => x.classList.remove('on')); sents[i].classList.add('on'); mark(i);
            if (ex.cau[i].am) { const ok = await play(ex.cau[i].am); if (!ok || A.gen() !== my) break; } else { await wait(1800); if (A.gen() !== my) break; }
            await wait(250); if (A.gen() !== my) break;
          }
        } else {
          sents.forEach(x => x.classList.add('on'));
          const ok = await play(ex.amBai);
          if (ok && A.gen() === my) sents.forEach((_, i) => mark(i));
        }
        if (A.gen() === my || !all.classList.contains('playing')) { sents.forEach(x => x.classList.remove('on')); all.classList.remove('playing'); all.lastChild.textContent = 'Đọc cả bài'; }
      };
      row.append(all);
    }
    // tự đọc: tô sáng lần lượt từng câu
    let k = -1;
    const nx = h('button', { class: 'btn soft', type: 'button' }, 'Câu tiếp theo', icon('next'));
    nx.onclick = () => {
      stopAll(); sents.forEach(x => x.classList.remove('on'));
      k = (k + 1) % sents.length; sents[k].classList.add('on'); mark(k);
      sents[k].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    };
    row.append(nx);
    ctx.body.append(row, recorder({ label: 'Ghi âm em đọc bài', max: 40 }));

    // câu hỏi hiểu bài
    let qbox = null;
    if (ex.hoi && ex.hoi.length) {
      qbox = h('div', { class: 'db-q' }); qbox.hidden = true;
      const dots = h('div', { class: 'dots' }, ex.hoi.map(() => h('i')));
      const qt = h('div', { class: 'db-qt' }), opts = h('div', { class: 'opts' }), fb = h('div', { class: 'fb', 'aria-live': 'polite' });
      qbox.append(h('div', { class: 'game-bar' }, h('h4', null, 'Trả lời câu hỏi'), dots), qt, opts, fb);
      let qi = 0;
      const next = () => {
        if (qi >= ex.hoi.length) { opts.innerHTML = ''; qt.textContent = ''; ctx.win(); qbox.append(h('div', { class: 'done-box' }, h('b', null, 'Em đọc hiểu bài rất tốt!'))); return; }
        const q = ex.hoi[qi]; qt.textContent = q.hoi; opts.innerHTML = ''; fb.textContent = ''; fb.className = 'fb';
        shuffle([q.dung, ...(q.sai || [])]).forEach(cx => {
          const b = h('button', { class: 'opt', type: 'button' }, cx);
          b.onclick = async () => {
            if (cx === q.dung) { b.classList.add('good'); opts.querySelectorAll('.opt').forEach(o => o.disabled = true); feedback(fb, true); dots.children[qi].classList.add('done'); qi++; await wait(900); next(); }
            else { flash(b, 'bad', 450); b.classList.add('bad'); feedback(fb, false); }
          };
          opts.append(b);
        });
      };
      next();
      ctx.body.append(qbox);
      const open = h('button', { class: 'btn green', type: 'button' }, 'Trả lời câu hỏi');
      open.onclick = () => { qbox.hidden = false; open.remove(); qbox.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); };
      row.append(open);
    }
  };
});
