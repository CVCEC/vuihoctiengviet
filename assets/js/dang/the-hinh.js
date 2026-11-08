/* Dạng bài "the-hinh": lưới thẻ hình – nghe và nhắc lại; trò chơi nghe và chọn hình.
   ex.the: [{ hinh, tu, am, cau? }], ex.cot (số cột, tuỳ chọn), ex.anChu (ẩn chữ khi chơi), ex.danhSo (hiện số thứ tự) */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, play, stopAll, wait, shuffle, feedback, recorder, flash } = A;
  if (!document.getElementById('dang-the-hinh')) {
    const st = document.createElement('style'); st.id = 'dang-the-hinh';
    st.textContent = `
.th-grid{display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}
@media (min-width:421px){.th-grid.th-cot{grid-template-columns:repeat(var(--cot),1fr)}}
@media (max-width:420px){.th-grid{grid-template-columns:repeat(2,1fr)}}
.th-card{position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;border:2px solid #EFE7DC;background:#fff;border-radius:16px;padding:8px;cursor:pointer;font:inherit;color:var(--ink);touch-action:manipulation;min-height:44px}
.th-card img{width:100%;aspect-ratio:4/3;object-fit:contain;border-radius:10px;pointer-events:none}
.th-card .th-tu{font-weight:700;font-size:19px;min-height:26px;text-align:center;line-height:1.25}
.th-card .th-so{position:absolute;left:8px;top:6px;width:24px;height:24px;border-radius:50%;background:var(--c);color:#fff;font-weight:700;font-size:13px;display:grid;place-items:center}
.th-card.on{border-color:var(--straw);box-shadow:0 0 0 4px rgba(221,170,85,.35)}
.th-card.good{border-color:var(--ok);background:var(--ok-bg)}
.th-card.bad{animation:shake .4s}
.th-card[disabled]{cursor:default}
.th-cap{min-height:40px;margin:10px 0 0;font-size:clamp(22px,4.6vw,28px);font-weight:700;text-align:center}
`;
    document.head.append(st);
  }

  A.T['the-hinh'] = function (ex, ctx) {
    const the = ex.the || [];
    const coAm = the.map((t, i) => t.am ? i : -1).filter(i => i >= 0);
    const seg = h('div', { class: 'seg', role: 'group' });
    const bA = h('button', { type: 'button', 'aria-pressed': 'true' }, ex.tenHoc || 'Nghe và nhắc lại');
    const bB = h('button', { type: 'button', 'aria-pressed': 'false' }, ex.tenChoi || 'Trò chơi: Nghe và chọn hình');
    seg.append(bA);
    if (coAm.length >= 2) seg.append(bB);
    const pane = h('div');
    ctx.body.append(seg, pane);
    const show = w => { stopAll(); bA.setAttribute('aria-pressed', w === 'hoc'); bB.setAttribute('aria-pressed', w === 'luyen'); pane.innerHTML = ''; (w === 'hoc' ? learn : game)(); };
    bA.onclick = () => show('hoc'); bB.onclick = () => show('luyen');

    function grid(hideWords) {
      const g = h('div', { class: 'th-grid' });
      if (ex.cot) { g.classList.add('th-cot'); g.style.setProperty('--cot', ex.cot); }
      const cards = the.map((t, i) => {
        const c = h('button', { class: 'th-card', type: 'button', 'aria-label': t.tu },
          ex.danhSo ? h('span', { class: 'th-so' }, String(i + 1)) : null,
          h('img', { src: t.hinh, alt: hideWords ? '' : t.tu }),
          h('span', { class: 'th-tu' }, hideWords ? '' : t.tu));
        g.append(c); return c;
      });
      return { g, cards };
    }

    function learn() {
      pane.append(h('p', { class: 'hint' }, ex.goiY || 'Chạm vào từng hình để nghe. Nghe xong, em nhắc lại thật to.'));
      const cap = h('div', { class: 'th-cap', 'aria-live': 'polite' });
      const { g, cards } = grid(false);
      cards.forEach((c, i) => {
        c.onclick = () => {
          stopAll(); cards.forEach(x => x.classList.remove('on'));
          c.classList.add('on'); cap.textContent = the[i].cau || the[i].tu;
          play(the[i].am).then(() => c.classList.remove('on'));
        };
      });
      pane.append(g, cap);
      if (coAm.length) {
        const all = h('button', { class: 'btn wood', type: 'button' }, icon('play'), 'Nghe cả bài');
        all.onclick = async () => {
          if (all.classList.contains('playing')) { stopAll(); all.lastChild.textContent = 'Nghe cả bài'; return; }
          stopAll(); const my = A.gen(); all.classList.add('playing'); all.lastChild.textContent = 'Dừng';
          for (const i of coAm) {
            cards.forEach(x => x.classList.remove('on'));
            cards[i].classList.add('on'); cap.textContent = the[i].cau || the[i].tu;
            cards[i].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            const ok = await play(the[i].am);
            if (!ok || A.gen() !== my) break;
            await wait(500);
            if (A.gen() !== my) break;
          }
          if (A.gen() === my) cards.forEach(x => x.classList.remove('on'));
          if (A.gen() === my || !all.classList.contains('playing')) { all.classList.remove('playing'); all.lastChild.textContent = 'Nghe cả bài'; }
        };
        pane.append(h('div', { class: 'mrow' }, all));
      }
      pane.append(recorder({ label: ex.ghiAm || 'Em nói theo – ghi âm giọng em' }));
    }

    function game() {
      const order = shuffle(coAm);
      let k = 0;
      const again = h('button', { class: 'btn wood', type: 'button' }, icon('spk'), 'Nghe lại');
      const dots = h('div', { class: 'dots' }, order.map(() => h('i')));
      const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
      pane.append(h('p', { class: 'hint' }, ex.goiYChoi || 'Nghe và chạm vào hình đúng.'), h('div', { class: 'game-bar' }, again, dots));
      const { g, cards } = grid(!!ex.anChu);
      const ask = () => { if (k < order.length) play(the[order[k]].am, again); };
      cards.forEach((c, i) => {
        c.onclick = async () => {
          if (k >= order.length || c.classList.contains('good')) return;
          const want = order[k];
          if (i === want) {
            stopAll(); c.classList.add('good');
            if (ex.anChu) c.querySelector('.th-tu').textContent = the[i].tu;
            feedback(fb, true, 'Đúng rồi! Đây là ' + the[i].tu + '.');
            dots.children[k].classList.add('done'); k++;
            await wait(900);
            if (k < order.length) ask(); else finish();
          } else {
            flash(c, 'bad', 450); feedback(fb, false, 'Chưa đúng, nghe lại nhé!');
            await wait(500); ask();
          }
        };
      });
      again.onclick = ask;
      pane.append(g, fb);
      function finish() {
        ctx.win();
        const r = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Chơi lại');
        r.onclick = () => show('luyen');
        pane.append(h('div', { class: 'done-box' }, h('b', null, ex.khen || 'Giỏi quá! Em đã chọn đúng hết.'), r));
      }
      setTimeout(ask, 350);
    }
    show('hoc');
  };
});
