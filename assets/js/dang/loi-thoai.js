/* Dạng bài "loi-thoai": đoạn hội thoại nhiều lượt lời, có vai.
   ex.vai: { 'Mai': { av?, mau? }, 'Nam': { … } }   (mau = màu tên vai, tuỳ chọn)
   ex.loi: [{ ai: 'Mai', c: 'Chào Nam!', am? }]
   ex.hinh: tranh minh hoạ (tuỳ chọn), ex.goiY, ex.ghiAm */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, play, stopAll, wait, recorder } = A;
  if (!document.getElementById('dang-loi-thoai')) {
    const st = document.createElement('style'); st.id = 'dang-loi-thoai';
    st.textContent = `
.lt-scene{width:100%;max-width:640px;margin:0 auto 12px;border-radius:14px;border:2px solid #EFE7DC;display:block}
.lt-script{display:flex;flex-direction:column;gap:6px;background:#fff;border:2px solid #EFE7DC;border-radius:16px;padding:10px}
.lt-line{display:flex;align-items:flex-start;gap:10px;border:0;background:transparent;font:inherit;color:var(--ink);text-align:left;padding:6px 8px;border-radius:12px;min-height:44px;cursor:pointer;width:100%}
.lt-line:hover{background:#F7F2EA}
.lt-line.on{background:#FFF1D6;box-shadow:0 0 0 3px var(--straw) inset}
.lt-line.mine{background:#F0F7EE}
.lt-line.mine.on{background:#FFF1D6}
.lt-ai{flex:none;display:inline-flex;align-items:center;gap:6px;font-weight:700;min-width:64px}
.lt-ai img{width:34px;height:34px;border-radius:50%;object-fit:cover;object-position:center 40%;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,.15)}
.lt-c{font-size:19px;line-height:1.4;padding-top:4px}
.lt-line .ico{width:18px;height:18px;color:var(--wood);flex:none;margin-top:6px}
.lt-roles{display:flex;flex-wrap:wrap;gap:10px;margin:6px 0 12px}
.lt-role{display:inline-flex;align-items:center;gap:8px;border:2px solid var(--line);background:#fff;border-radius:999px;padding:6px 16px 6px 6px;font:inherit;font-weight:700;font-size:18px;min-height:52px;cursor:pointer}
.lt-role img{width:40px;height:40px;border-radius:50%;object-fit:cover;object-position:center 40%}
.lt-role .dot0{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;color:#fff;font-size:17px}
.lt-turn{margin:12px 0;padding:16px;border-radius:16px;background:#FFF7E6;border:2px dashed var(--straw);text-align:center}
.lt-turn p{margin:0 0 4px;color:var(--ink-2);font-size:15px}
.lt-turn b{display:block;font-size:clamp(24px,5vw,32px);margin:4px 0 12px}
.lt-turn .row{justify-content:center}
`;
    document.head.append(st);
  }
  const MAU = ['#E0577A', '#3C78C8', '#3E9B5F', '#D9822B', '#8A5CC2', '#C2457A'];

  A.T['loi-thoai'] = function (ex, ctx) {
    const vai = ex.vai || {};
    const ten = [];
    Object.keys(vai).forEach(k => { if (!ten.includes(k)) ten.push(k); });
    ex.loi.forEach(l => { if (!ten.includes(l.ai)) ten.push(l.ai); });
    const mauOf = n => (vai[n] && vai[n].mau) || MAU[ten.indexOf(n) % MAU.length];
    const avOf = n => vai[n] && vai[n].av;

    const seg = h('div', { class: 'seg', role: 'group' });
    const bA = h('button', { type: 'button', 'aria-pressed': 'true' }, 'Nghe hội thoại');
    const bB = h('button', { type: 'button', 'aria-pressed': 'false' }, 'Đóng vai');
    seg.append(bA, bB);
    const pane = h('div');
    ctx.body.append(seg, pane);
    const show = w => { stopAll(); bA.setAttribute('aria-pressed', w === 'hoc'); bB.setAttribute('aria-pressed', w === 'vai'); pane.innerHTML = ''; (w === 'hoc' ? learn : chonVai)(); };
    bA.onclick = () => show('hoc'); bB.onclick = () => show('vai');

    function script(mine) {
      const box = h('div', { class: 'lt-script' });
      const rows = ex.loi.map(l => {
        const r = h('button', { class: 'lt-line' + (mine && l.ai === mine ? ' mine' : ''), type: 'button' },
          h('span', { class: 'lt-ai', style: { color: mauOf(l.ai) } }, avOf(l.ai) ? h('img', { src: avOf(l.ai), alt: '' }) : null, l.ai + ':'),
          h('span', { class: 'lt-c' }, l.c),
          l.am ? icon('spk') : null);
        r.onclick = () => { stopAll(); r.classList.add('on'); (l.am ? play(l.am) : wait(1200)).then(() => r.classList.remove('on')); };
        box.append(r); return r;
      });
      return { box, rows };
    }
    const scene = () => ex.hinh ? h('img', { class: 'lt-scene', src: ex.hinh, alt: ex.moTa || '' }) : null;

    function learn() {
      pane.append(h('p', { class: 'hint' }, ex.goiY || 'Chạm vào từng lời để nghe, rồi nhắc lại thật to.'));
      const s = script(null);
      const all = h('button', { class: 'btn wood', type: 'button' }, icon('play'), 'Nghe cả bài');
      all.onclick = async () => {
        if (all.classList.contains('playing')) { stopAll(); all.lastChild.textContent = 'Nghe cả bài'; return; }
        stopAll(); const my = A.gen(); all.classList.add('playing'); all.lastChild.textContent = 'Dừng';
        for (let i = 0; i < ex.loi.length; i++) {
          s.rows.forEach(r => r.classList.remove('on'));
          s.rows[i].classList.add('on'); s.rows[i].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          const l = ex.loi[i];
          if (l.am) { const ok = await play(l.am); if (!ok) break; } else await wait(1600);
          if (A.gen() !== my) break;
          await wait(300);
          if (A.gen() !== my) break;
        }
        if (A.gen() === my) { s.rows.forEach(r => r.classList.remove('on')); ctx.win(); }
        if (A.gen() === my || !all.classList.contains('playing')) { all.classList.remove('playing'); all.lastChild.textContent = 'Nghe cả bài'; }
      };
      const sc = scene(); if (sc) pane.append(sc);
      pane.append(s.box, h('div', { class: 'mrow' }, all), recorder({ label: ex.ghiAm || 'Em nói theo – ghi âm giọng em' }));
    }

    function chonVai() {
      pane.append(h('p', { class: 'hint' }, 'Em muốn đóng vai ai? Máy sẽ nói lời của bạn kia, đến lượt em thì em nói to lời của mình.'));
      const roles = h('div', { class: 'lt-roles' });
      ten.forEach(n => {
        if (!ex.loi.some(l => l.ai === n)) return;
        const b = h('button', { class: 'lt-role', type: 'button' },
          avOf(n) ? h('img', { src: avOf(n), alt: '' }) : h('span', { class: 'dot0', style: { background: mauOf(n) } }, n.charAt(0)),
          'Em là ' + n);
        b.onclick = () => run(n);
        roles.append(b);
      });
      pane.append(roles);
    }

    async function run(mine) {
      stopAll(); const my = A.gen();
      pane.innerHTML = '';
      const sc = scene(); if (sc) pane.append(sc);
      const s = script(mine);
      const turn = h('div', { class: 'lt-turn', 'aria-live': 'polite' });
      pane.append(h('p', { class: 'hint' }, 'Em đóng vai ' + mine + '. Lời của em có nền xanh.'), s.box, turn);
      for (let i = 0; i < ex.loi.length; i++) {
        if (A.gen() !== my) return;
        const l = ex.loi[i];
        s.rows.forEach(r => r.classList.remove('on'));
        s.rows[i].classList.add('on'); s.rows[i].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        if (l.ai === mine) {
          turn.innerHTML = '';
          const ok = h('button', { class: 'btn green', type: 'button' }, icon('check'), 'Em đã nói xong');
          const row = h('div', { class: 'row' });
          if (l.am) { const m = h('button', { class: 'btn soft', type: 'button' }, icon('spk'), 'Nghe mẫu'); m.onclick = () => { play(l.am, m); }; row.append(m); }
          row.append(ok);
          turn.append(h('p', null, 'Đến lượt em – nói thật to:'), h('b', null, l.c), row);
          turn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          await new Promise(res => { ok.onclick = () => { player0(); res(); }; });
          turn.innerHTML = '';
        } else {
          turn.innerHTML = '';
          turn.append(h('p', null, l.ai + ' đang nói…'));
          if (l.am) { const okp = await play(l.am); if (!okp && A.gen() !== my) return; } else await wait(1600);
          if (A.gen() !== my) return;
          await wait(300);
        }
      }
      s.rows.forEach(r => r.classList.remove('on'));
      turn.remove();
      ctx.win();
      const again = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Đóng vai khác');
      again.onclick = () => show('vai');
      pane.append(h('div', { class: 'done-box' }, h('b', null, 'Giỏi lắm! Em đã đóng vai ' + mine + '.'), again),
        recorder({ label: ex.ghiAm || 'Đóng vai cùng bố mẹ, rồi ghi âm' }));
    }
    function player0() { /* dừng tiếng mẫu đang phát (nếu có) mà không huỷ lượt đóng vai */
      document.querySelectorAll('.lt-turn .playing').forEach(e => e.classList.remove('playing'));
    }
    show('hoc');
  };
});
