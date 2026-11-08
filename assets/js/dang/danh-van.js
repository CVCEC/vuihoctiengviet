/* Dạng bài 'danh-van' – Đánh vần: âm + vần → tiếng, thêm thanh (giống bảng màu trong sách Quyển 2)
   ex.tu: [{ hinh, tieng: 'cá', am?, phan: ['c', 'a'], thanh: 'sắc' | null, doc: 'cờ – a – ca – sắc – cá', amDoc? }] */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  const { h, icon, play, stopAll, wait, flash } = A;
  const CSS = `
.dv{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:14px}
.dv-card{background:#fff;border:2px dashed #E9B8C7;border-radius:16px;padding:10px;display:flex;flex-direction:column;gap:8px}
.dv-pic{border:0;background:transparent;padding:0;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;font:inherit;color:var(--ink)}
.dv-pic img{width:100%;max-width:200px;aspect-ratio:4/3;object-fit:contain}
.dv-word{font-size:30px;font-weight:700;line-height:1.1}
.dv-word .on{color:#E0577A}
.dv-tab{display:grid;grid-template-columns:1fr 1fr;border-radius:8px;overflow:hidden;font-weight:700;font-size:22px;text-align:center}
.dv-tab > div{min-height:36px;display:flex;align-items:center;justify-content:center;transition:background .25s, transform .25s}
.dv-tone{grid-column:1 / -1;background:#FFF6CF;display:grid !important;grid-template-columns:1fr 1fr}
.dv-tone span{display:flex;align-items:flex-end;justify-content:center;font-size:30px;line-height:1;color:#E0577A;height:36px}
.dv-am{background:#FBD9DE;color:#C2185B}
.dv-van{background:#D8EEDB;color:#2E7D4F}
.dv-tieng{grid-column:1 / -1;background:#DCE7FA;color:#C2185B}
.dv-tab .lit{box-shadow:inset 0 0 0 3px var(--straw);transform:scale(1.03);position:relative;z-index:1}
.dv-tab .muted{color:transparent}
.dv-doc{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:2px;border:2px solid #E9B8C7;border-radius:10px;padding:6px}
.dv-doc button{border:0;background:transparent;font:inherit;font-size:19px;padding:4px 6px;border-radius:8px;cursor:pointer;color:#B7AC9E;min-height:36px}
.dv-doc button.done{color:var(--ink)}
.dv-doc button.lit{background:#FFF1D6;color:var(--ink)}
.dv-doc i{font-style:normal;color:#B7AC9E;margin-right:2px}
.dv-st{display:inline-flex;align-items:center;white-space:nowrap}
.dv-go{align-self:center}
.dv-card.ok{border-style:solid;border-color:var(--ok)}
`;
  if (!document.getElementById('dang-danh-van')) { const s = document.createElement('style'); s.id = 'dang-danh-van'; s.textContent = CSS; document.head.append(s); }

  const MARK = { 'huyền': '̀', 'huyen': '̀', 'sắc': '́', 'sac': '́', 'hỏi': '̉', 'hoi': '̉', 'ngã': '̃', 'nga': '̃', 'nặng': '̣', 'nang': '̣' };
  const strip = s => s.normalize('NFD').replace(/[̣̀́̃̉]/g, '').normalize('NFC');

  A.T['danh-van'] = function (ex, ctx) {
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Bấm “Đánh vần” để xem âm và vần ghép thành tiếng. Chạm vào từng bước để đọc theo.'));
    const grid = h('div', { class: 'dv' });
    const opened = new Set();
    ex.tu.forEach((w, wi) => {
      const tieng = w.tieng.normalize('NFC');
      const am = (w.phan && w.phan.length > 1) ? w.phan[0] : '';
      const van = (w.phan && w.phan.length) ? w.phan[w.phan.length - 1] : tieng;
      const base = strip(tieng);
      const mark = w.thanh ? (MARK[w.thanh.toLowerCase()] || '') : '';
      const steps = (w.doc || '').split(/\s*[–—-]\s*/).map(s => s.trim()).filter(Boolean);
      // chữ dưới hình: tô màu âm đầu
      const word = h('span', { class: 'dv-word' });
      if (am && tieng.toLowerCase().startsWith(am.toLowerCase())) word.append(h('span', { class: 'on' }, tieng.slice(0, am.length)), tieng.slice(am.length));
      else word.append(tieng);
      const pic = h('button', { class: 'dv-pic', type: 'button', 'aria-label': 'Nghe tiếng ' + tieng }, w.hinh ? h('img', { src: w.hinh, alt: tieng }) : null, word);
      const toneR = h('span'), toneL = h('span');
      const cAm = h('div', { class: 'dv-am' }, am || ' ');
      const cVan = h('div', { class: 'dv-van' }, van);
      const cTieng = h('div', { class: 'dv-tieng muted' }, base);
      const tab = h('div', { class: 'dv-tab' }, h('div', { class: 'dv-tone' }, toneL, toneR), cAm, cVan, cTieng);
      const docBtns = [];
      const doc = h('div', { class: 'dv-doc' });
      steps.forEach((s, i) => {
        const b = h('button', { type: 'button' }, s);
        b.onclick = () => { stopAll(); show(i); if (w.am && i === steps.length - 1) play(w.am); };
        docBtns.push(b); doc.append(h('span', { class: 'dv-st' }, i ? h('i', null, '–') : null, b));
      });
      const go = h('button', { class: 'btn wood small dv-go', type: 'button' }, icon('play'), 'Đánh vần');
      const card = h('div', { class: 'dv-card' }, pic, tab, doc, go);
      // trạng thái từng bước: 0 âm · 1 vần · 2 ghép · 3 thanh · 4 tiếng có thanh
      function show(i) {
        [cAm, cVan, cTieng].forEach(c => c.classList.remove('lit'));
        docBtns.forEach((b, j) => { b.classList.toggle('lit', j === i); b.classList.toggle('done', j <= i); });
        const last = steps.length - 1;
        const hasTone = !!mark && steps.length >= 4;
        let st;
        if (i >= last) st = 'final';
        else if (i === 0) st = 'am';
        else if (i === 1) st = 'van';
        else if (i === 2) st = 'ghep';
        else st = 'thanh';
        if (!am && st === 'am') st = 'van';
        toneR.textContent = ''; cTieng.classList.add('muted'); cTieng.textContent = base;
        if (st === 'am') cAm.classList.add('lit');
        if (st === 'van') cVan.classList.add('lit');
        if (st === 'ghep') { cTieng.classList.remove('muted'); cTieng.classList.add('lit'); }
        if (st === 'thanh') { cTieng.classList.remove('muted'); toneR.textContent = ' ' + mark; toneR.parentNode.classList.add('lit'); }
        else toneR.parentNode.classList.remove('lit');
        if (st === 'final') {
          cTieng.classList.remove('muted'); cTieng.classList.add('lit'); cTieng.textContent = tieng;
          clearTimeout(card._t); card._t = setTimeout(() => cTieng.classList.remove('lit'), 1200);
          if (hasTone || mark) toneR.textContent = ' ' + mark;
          if (!opened.has(wi)) { opened.add(wi); card.classList.add('ok'); if (opened.size === ex.tu.length) ctx.win(); }
        }
      }
      async function run() {
        stopAll(); const my = A.gen();
        go.classList.add('playing');
        if (w.amDoc) play(w.amDoc);
        for (let i = 0; i < steps.length; i++) {
          show(i);
          await wait(w.amDoc ? (w.nhip || 800) : 750);
          if (A.gen() !== my) break;
        }
        go.classList.remove('playing');
        if (A.gen() === my && w.am && !w.amDoc) play(w.am);
      }
      go.onclick = run;
      pic.onclick = () => { stopAll(); flash(pic, 'pulse'); if (w.am) play(w.am); };
      grid.append(card);
    });
    ctx.body.append(grid);
  };
});
