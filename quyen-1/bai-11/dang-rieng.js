/* Dạng bài riêng (Quyển 1, Bài 10–14) – cùng một tệp cho các bài này
   'hoi-mau'      : như 'chon-cau' nhưng có khung mẫu (M) của sách ở trên – ex.mau = { nv?, nvTen?, cau: [{ c, am? }] }
   'hat-lai'      : Hát một bài hát đã được học – chọn một bài hát đã học (video YouTube, chỉ tải khi bấm)
                    ex.baiHat = [{ baiHat, tacGia, youtube, bai }], ex.goiY?, ex.ghiAm?
   'hoi-co-khong' : hỏi đáp về bản thân theo mẫu (không có đáp án sai) – em chọn "Có" hoặc "Không", máy hiện câu trả lời đầy đủ
                    để em nói to. ex.mau? (khung M), ex.cau = [{ hinh?, hoi: 'chuỗi' | { c, am? }, co: 'Có. …', khong: 'Không. …' }]
   'bang-so'      : bảng số như trong sách (số – chữ – hình chiếc lá): nghe và nhắc lại, trò chơi nghe và chọn số */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, play, stopAll, sfx, recorder } = A;
  if (!document.getElementById('dang-rieng-q1')) {
    const st = document.createElement('style'); st.id = 'dang-rieng-q1';
    st.textContent = `
.hl-grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.hl-it{display:flex;flex-direction:column;gap:6px}
.hl-it .hl-t{font-weight:700;font-size:18px}
.hl-it .hl-t span{display:block;color:var(--ink-2);font-weight:400;font-size:15px}
.hl-it .song .cap{display:none}
.hl-it .song .play{width:64px;height:64px}
.hl-it .song .play svg{width:30px;height:30px}
.ck-btns{display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:460px;margin:0 auto}
.ck-btns .opt{font-size:22px;min-height:56px}
.ck-say{min-height:44px;margin:12px 0 6px;font-size:clamp(21px,4.6vw,27px);font-weight:700;text-align:center;color:var(--ink)}
.ck-say.wait{color:#B7AC9E;font-weight:400;font-size:18px}
.ck-next{display:flex;justify-content:center;margin-top:6px}
.bs-tab{display:flex;flex-direction:column;border:2px solid #9CC9A5;border-radius:12px;overflow:hidden;background:#fff}
.bs-row{display:grid;grid-template-columns:46px minmax(96px,130px) 1fr;align-items:stretch;border:0;border-top:1px solid #CFE6D2;background:#fff;font:inherit;text-align:left;cursor:pointer;min-height:46px;padding:0;color:var(--ink);touch-action:manipulation}
.bs-row:first-child{border-top:0}
.bs-row:nth-child(even){background:#F2F9F3}
.bs-row .n{font-weight:700;display:grid;place-items:center;border-right:1px solid #CFE6D2;font-size:20px}
.bs-row .w{padding:0 8px;font-size:19px;border-right:1px solid #CFE6D2;display:flex;align-items:center}
.bs-row .l{display:flex;flex-wrap:wrap;align-content:center;gap:1px 2px;padding:4px 6px}
.bs-row .l img{width:20px;height:auto}
@media (max-width:520px){.bs-row .l img{width:14px}.bs-row .w{font-size:17px}}
.bs.an .bs-row .w{color:transparent}
.bs-row.on{background:#FFF1D6 !important;box-shadow:inset 0 0 0 3px var(--straw)}
.bs-row.heard .n{color:var(--ok)}
.bs-row.good{background:var(--ok-bg) !important}
.bs-row.bad{animation:shake .4s}
.bs-dem{font-weight:700;color:var(--ink-2);margin-top:8px}
`;
    document.head.append(st);
  }

  A.T['hoi-mau'] = function (ex, ctx) {
    if (ex.mau) ctx.body.append(A.modelBox(ex.mau).el);
    A.T['chon-cau'](ex, ctx);
  };

  A.T['hat-lai'] = function (ex, ctx) {
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Em chọn một bài hát đã học, bấm để xem video rồi hát cho bố mẹ nghe.'));
    const grid = h('div', { class: 'hl-grid' });
    ex.baiHat.forEach(s => {
      const sub = h('div');
      A.T['hoc-hat'](s, { body: sub, win: ctx.win });
      const hint = sub.querySelector('.hint'); if (hint) hint.remove();
      grid.append(h('div', { class: 'hl-it' }, h('div', { class: 'hl-t' }, s.baiHat, h('span', null, (s.tacGia ? s.tacGia + ' · ' : '') + 'Bài ' + s.bai)), sub));
    });
    ctx.body.append(grid, recorder({ label: ex.ghiAm || 'Ghi âm em hát', max: 60 }));
  };

  // 'bang-so': bảng số như trong sách (số – chữ – hình chiếc lá). ex.bang = [{ so: 11, chu: 'Mười một', am }], ex.la = 'img/la.webp'
  // Nghe hết các số (chạm từng hàng hoặc "Nghe cả bài") hoặc chơi xong trò chơi thì được sao.
  A.T['bang-so'] = function (ex, ctx) {
    const { wait, shuffle, feedback, flash } = A;
    const seg = h('div', { class: 'seg', role: 'group' });
    const bA = h('button', { type: 'button', 'aria-pressed': 'true' }, 'Nghe và nhắc lại');
    const bB = h('button', { type: 'button', 'aria-pressed': 'false' }, 'Trò chơi: Nghe và chọn số');
    seg.append(bA, bB);
    const pane = h('div'); ctx.body.append(seg, pane);
    const show = w => { stopAll(); bA.setAttribute('aria-pressed', w === 'hoc'); bB.setAttribute('aria-pressed', w === 'luyen'); pane.innerHTML = ''; (w === 'hoc' ? learn : game)(); };
    bA.onclick = () => show('hoc'); bB.onclick = () => show('luyen');
    const heard = new Set();
    function table(an) {
      const tab = h('div', { class: 'bs-tab' });
      const rows = ex.bang.map(r => {
        const leaves = h('span', { class: 'l', 'aria-hidden': 'true' });
        for (let i = 0; i < r.so; i++) leaves.append(h('img', { src: ex.la, alt: '' }));
        const b = h('button', { class: 'bs-row', type: 'button', 'aria-label': String(r.so) }, h('span', { class: 'n' }, String(r.so)), h('span', { class: 'w' }, r.chu), leaves);
        tab.append(b); return b;
      });
      return { el: h('div', { class: 'bs' + (an ? ' an' : '') }, tab), rows };
    }
    function learn() {
      pane.append(h('p', { class: 'hint' }, 'Chạm vào từng hàng để nghe số. Nghe xong, em nhắc lại thật to.'));
      const t = table(false);
      const dem = h('div', { class: 'bs-dem' });
      const upd = () => { dem.textContent = 'Em đã nghe ' + heard.size + '/' + ex.bang.length + ' số'; if (heard.size === ex.bang.length) ctx.win(); };
      const mark = i => { heard.add(i); t.rows[i].classList.add('heard'); upd(); };
      heard.forEach(i => t.rows[i].classList.add('heard'));
      t.rows.forEach((b, i) => { b.onclick = () => { stopAll(); t.rows.forEach(x => x.classList.remove('on')); b.classList.add('on'); mark(i); play(ex.bang[i].am).then(() => b.classList.remove('on')); }; });
      const all = h('button', { class: 'btn wood', type: 'button' }, icon('play'), 'Nghe cả bài');
      all.onclick = async () => {
        if (all.classList.contains('playing')) { stopAll(); all.lastChild.textContent = 'Nghe cả bài'; return; }
        stopAll(); const my = A.gen(); all.classList.add('playing'); all.lastChild.textContent = 'Dừng';
        for (let i = 0; i < ex.bang.length; i++) {
          t.rows.forEach(x => x.classList.remove('on')); t.rows[i].classList.add('on');
          t.rows[i].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          const ok = await play(ex.bang[i].am);
          if (!ok || A.gen() !== my) break;
          mark(i); await wait(600);
          if (A.gen() !== my) break;
        }
        if (A.gen() === my) t.rows.forEach(x => x.classList.remove('on'));
        if (A.gen() === my || !all.classList.contains('playing')) { all.classList.remove('playing'); all.lastChild.textContent = 'Nghe cả bài'; }
      };
      pane.append(t.el, dem, h('div', { class: 'mrow' }, all), recorder({ label: 'Em đọc các số – ghi âm giọng em', max: 30 }));
      upd();
    }
    function game() {
      const order = shuffle(ex.bang.map((_, i) => i));
      let k = 0;
      const again = h('button', { class: 'btn wood', type: 'button' }, icon('spk'), 'Nghe lại');
      const dots = h('div', { class: 'dots' }, order.map(() => h('i')));
      const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
      const t = table(true);
      const ask = () => { if (k < order.length) play(ex.bang[order[k]].am, again); };
      pane.append(h('p', { class: 'hint' }, 'Nghe số rồi chạm vào hàng đúng.'), h('div', { class: 'game-bar' }, again, dots), t.el, fb);
      t.rows.forEach((b, i) => {
        b.onclick = async () => {
          if (k >= order.length || b.classList.contains('good')) return;
          if (i === order[k]) {
            stopAll(); b.classList.add('good'); feedback(fb, true, 'Đúng rồi! ' + ex.bang[i].chu + '.');
            dots.children[k].classList.add('done'); k++;
            await wait(900);
            if (k < order.length) ask(); else finish();
          } else { flash(b, 'bad', 450); feedback(fb, false, 'Chưa đúng, nghe lại nhé!'); await wait(500); ask(); }
        };
      });
      again.onclick = ask;
      function finish() {
        pane.querySelector('.bs').classList.remove('an');
        ctx.win();
        const r = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Chơi lại'); r.onclick = () => show('luyen');
        pane.append(h('div', { class: 'done-box' }, h('b', null, 'Giỏi quá! Em đã chọn đúng hết.'), r));
      }
      setTimeout(ask, 350);
    }
    show('hoc');
  };

  A.T['hoi-co-khong'] = function (ex, ctx) {
    if (ex.mau) ctx.body.append(A.modelBox(ex.mau).el);
    if (ex.goiY) ctx.body.append(h('p', { class: 'hint' }, ex.goiY));
    const area = h('div'); ctx.body.append(area);
    function start() {
      area.innerHTML = '';
      let k = 0;
      const dots = h('div', { class: 'dots' }, ex.cau.map(() => h('i')));
      const dem = h('b', null, '');
      const holder = h('div');
      area.append(h('div', { class: 'game-bar' }, dem, dots), holder);
      function next() {
        if (k >= ex.cau.length) return finish();
        const q = ex.cau[k], hoi = typeof q.hoi === 'string' ? { c: q.hoi } : q.hoi;
        dem.textContent = 'Câu ' + (k + 1) + '/' + ex.cau.length;
        holder.innerHTML = '';
        const qbox = h('div', { class: 'cc-q' });
        if (q.hinh) qbox.append(h('img', { class: 'cc-img', src: q.hinh, alt: '' }));
        const line = h('div', { class: 'cc-hoi' });
        let spk = null;
        if (hoi.am) { spk = h('button', { class: 'lenh', type: 'button', 'aria-label': 'Nghe câu hỏi' }, icon('spk')); spk.onclick = () => { stopAll(); play(hoi.am, spk); }; line.append(spk); }
        line.append(h('span', null, hoi.c));
        qbox.append(line);
        const say = h('div', { class: 'ck-say wait', 'aria-live': 'polite' }, 'Em chọn “Có” hoặc “Không”.');
        const bCo = h('button', { class: 'opt', type: 'button' }, 'Có');
        const bKh = h('button', { class: 'opt', type: 'button' }, 'Không');
        const nx = h('div', { class: 'ck-next' });
        const pick = (b, c) => {
          [bCo, bKh].forEach(x => x.classList.toggle('good', x === b));
          say.className = 'ck-say'; say.textContent = c; sfx(true);
          if (!dots.children[k].classList.contains('done')) dots.children[k].classList.add('done');
          nx.innerHTML = '';
          const go = h('button', { class: 'btn green', type: 'button' }, k + 1 < ex.cau.length ? 'Câu tiếp' : 'Xong', icon('next'));
          go.onclick = () => { stopAll(); k++; next(); };
          nx.append(h('p', { class: 'hint', style: { textAlign: 'center', width: '100%' } }, 'Em nói to câu này nhé.'));
          nx.append(go);
        };
        bCo.onclick = () => pick(bCo, q.co);
        bKh.onclick = () => pick(bKh, q.khong);
        nx.style.flexDirection = 'column'; nx.style.alignItems = 'center';
        holder.append(qbox, h('div', { class: 'ck-btns' }, bCo, bKh), say, nx);
        if (hoi.am) setTimeout(() => play(hoi.am, spk), 250);
      }
      function finish() {
        holder.innerHTML = ''; dem.textContent = '';
        ctx.win();
        const r = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Làm lại');
        r.onclick = start;
        area.append(h('div', { class: 'done-box' }, h('b', null, ex.khen || 'Giỏi lắm! Em đã trả lời hết.'), r),
          recorder({ label: ex.ghiAm || 'Hỏi đáp cùng bố mẹ, rồi ghi âm' }));
      }
      next();
    }
    start();
  };
});
