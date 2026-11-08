/* Dạng bài riêng (Quyển 1, Bài 10–14) – cùng một tệp cho các bài này
   'hoi-mau'      : như 'chon-cau' nhưng có khung mẫu (M) của sách ở trên – ex.mau = { nv?, nvTen?, cau: [{ c, am? }] }
   'hat-lai'      : Hát một bài hát đã được học – chọn một bài hát đã học (video YouTube, chỉ tải khi bấm)
                    ex.baiHat = [{ baiHat, tacGia, youtube, bai }], ex.goiY?, ex.ghiAm?
   'hoi-co-khong' : hỏi đáp về bản thân theo mẫu (không có đáp án sai) – em chọn "Có" hoặc "Không", máy hiện câu trả lời đầy đủ
                    để em nói to. ex.mau? (khung M), ex.cau = [{ hinh?, hoi: 'chuỗi' | { c, am? }, co: 'Có. …', khong: 'Không. …' }]
   'bang-so'      : bảng số như trong sách (số – chữ – hình chiếc lá): nghe và nhắc lại, trò chơi nghe và chọn số
   'sinh-nhat'    : trả lời về sinh nhật và tuổi của em (chọn ngày, tháng, tuổi → câu trả lời đầy đủ)
   'hoi-ngay'     : hỏi đáp về thứ, ngày, tháng của hôm nay (đáp án tính theo lịch của máy) */
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
@media (max-width:520px){.bs-row .l{display:grid;grid-template-columns:repeat(10,minmax(0,13px));gap:3px 1px}.bs-row .l img{width:13px}.bs-row .w{font-size:17px}}
.bs.an .bs-row .w{color:transparent}
.bs-row.on{background:#FFF1D6 !important;box-shadow:inset 0 0 0 3px var(--straw)}
.bs-row.heard .n{color:var(--ok)}
.bs-row.good{background:var(--ok-bg) !important}
.bs-row.bad{animation:shake .4s}
.bs-dem{font-weight:700;color:var(--ink-2);margin-top:8px}
.bs.kl{max-width:460px}
.bs.kl .bs-row{grid-template-columns:56px 1fr}
.bs.kl .bs-row .w{border-right:0}
.sn{display:grid;gap:14px;grid-template-columns:minmax(0,220px) 1fr;align-items:start}
@media (max-width:560px){.sn{grid-template-columns:1fr}.sn .sn-img{max-width:200px;margin:0 auto}}
.sn-img{width:100%;border-radius:12px;border:2px solid #EFE7DC;background:#fff}
.sn-q{background:#fff;border:2px solid #EFE7DC;border-radius:16px;padding:12px;margin-bottom:12px}
.sn-q .cc-hoi{justify-content:flex-start;font-size:clamp(19px,4vw,23px);margin-bottom:8px}
.sn-pick{display:flex;flex-wrap:wrap;gap:8px;align-items:center;font-size:19px}
.sn-pick select{font:inherit;font-size:20px;font-weight:700;padding:6px 10px;border-radius:12px;border:2px solid var(--line);background:#fff;min-height:48px;color:var(--ink)}
.sn-ages{display:flex;flex-wrap:wrap;gap:8px}
.sn-ages .opt{min-width:52px;min-height:48px;padding:6px 10px;font-size:20px}
.sn-say{margin-top:10px;font-size:clamp(20px,4.4vw,25px);font-weight:700;min-height:32px}
.sn-say.wait{color:#B7AC9E;font-weight:400;font-size:17px}
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
        if (ex.la) for (let i = 0; i < r.so; i++) leaves.append(h('img', { src: ex.la, alt: '' }));
        const b = h('button', { class: 'bs-row', type: 'button', 'aria-label': String(r.so) }, h('span', { class: 'n' }, String(r.so)), h('span', { class: 'w' }, r.chu), ex.la ? leaves : null);
        tab.append(b); return b;
      });
      return { el: h('div', { class: 'bs' + (an ? ' an' : '') + (ex.la ? '' : ' kl') }, tab), rows };
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

  const THANG = ['Một', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười', 'Mười một', 'Mười hai'];
  const THU = ['Chủ nhật', 'thứ Hai', 'thứ Ba', 'thứ Tư', 'thứ Năm', 'thứ Sáu', 'thứ Bảy'];

  // 'sinh-nhat': trả lời về bản thân – "Sinh nhật em là ngày nào?" (chọn ngày, tháng) và "Năm nay em mấy tuổi?" (chọn tuổi).
  // ex.hinh?, ex.hoi1 = { c, am? }, ex.hoi2 = { c, am? }. Chọn xong cả hai câu thì được sao.
  A.T['sinh-nhat'] = function (ex, ctx) {
    if (ex.goiY) ctx.body.append(h('p', { class: 'hint' }, ex.goiY));
    const qline = q => { const l = h('div', { class: 'cc-hoi' }); if (q.am) { const b = h('button', { class: 'lenh', type: 'button', 'aria-label': 'Nghe câu hỏi' }, icon('spk')); b.onclick = () => { stopAll(); play(q.am, b); }; l.append(b); } l.append(h('span', null, q.c)); return l; };
    let ngay = 0, thang = 0, tuoi = 0, won = false;
    const say1 = h('div', { class: 'sn-say wait', 'aria-live': 'polite' }, 'Em chọn ngày và tháng sinh của em.');
    const say2 = h('div', { class: 'sn-say wait', 'aria-live': 'polite' }, 'Em chọn số tuổi của em.');
    const sNgay = h('select', { 'aria-label': 'Ngày' }, h('option', { value: '0' }, 'ngày …'), Array.from({ length: 31 }, (_, i) => h('option', { value: String(i + 1) }, String(i + 1))));
    const sThang = h('select', { 'aria-label': 'Tháng' }, h('option', { value: '0' }, 'tháng …'), THANG.map((t, i) => h('option', { value: String(i + 1) }, t)));
    const check = () => { if (!won && ngay && thang && tuoi) { won = true; sfx(true); ctx.win(); } };
    const upd1 = () => {
      ngay = +sNgay.value; thang = +sThang.value;
      if (ngay && thang) { say1.className = 'sn-say'; say1.textContent = 'Sinh nhật em là ngày ' + ngay + ' tháng ' + THANG[thang - 1] + '.'; check(); }
    };
    sNgay.onchange = upd1; sThang.onchange = upd1;
    const ages = h('div', { class: 'sn-ages' });
    for (let a = 3; a <= 12; a++) {
      const b = h('button', { class: 'opt', type: 'button' }, String(a));
      b.onclick = () => { tuoi = a; ages.querySelectorAll('.opt').forEach(x => x.classList.toggle('good', x === b)); say2.className = 'sn-say'; say2.textContent = 'Năm nay em ' + a + ' tuổi.'; check(); };
      ages.append(b);
    }
    const right = h('div', null,
      h('div', { class: 'sn-q' }, qline(ex.hoi1), h('div', { class: 'sn-pick' }, sNgay, sThang), say1),
      h('div', { class: 'sn-q' }, qline(ex.hoi2), ages, say2));
    ctx.body.append(h('div', { class: 'sn' }, ex.hinh ? h('img', { class: 'sn-img', src: ex.hinh, alt: ex.moTa || '' }) : h('span'), right),
      recorder({ label: ex.ghiAm || 'Em trả lời to – ghi âm giọng em' }));
  };

  // 'hoi-ngay': hỏi đáp về thứ, ngày, tháng của HÔM NAY (lấy theo lịch của máy) – như 'hoi-mau', câu đúng tính từ ngày hôm nay.
  // ex.hoiThu, ex.hoiNgay, ex.hoiThang = { c, am? }
  A.T['hoi-ngay'] = function (ex, ctx) {
    const d = new Date(), w = d.getDay(), n = d.getDate(), m = d.getMonth();
    const thu = i => 'Hôm nay là ' + THU[(i + 7) % 7] + '.';
    const ngay = (dd, mm) => 'Hôm nay là ngày ' + dd + ' tháng ' + THANG[(mm + 12) % 12] + '.';
    const nn = n > 1 ? n - 1 : n + 2;
    ex.cau = [
      { hoi: ex.hoiThu, dung: thu(w), sai: [thu(w + 1), thu(w + 3)] },
      { hoi: ex.hoiNgay, dung: ngay(n, m), sai: [ngay(nn, m), ngay(n, m + 1)] },
      { hoi: ex.hoiThang, dung: 'Tháng này là tháng ' + THANG[m] + '.', sai: ['Tháng này là tháng ' + THANG[(m + 1) % 12] + '.', 'Tháng này là tháng ' + THANG[(m + 11) % 12] + '.'] }
    ];
    A.T['hoi-mau'](ex, ctx);
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
