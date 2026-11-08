/* Dạng bài riêng của Quyển 1 – Bài 5: "nghe-chi" – Nghe, chỉ vào hình phù hợp (cây gia đình).
   Giống nghe-hinh, nhưng trong tranh có nhiều người cùng một từ (4 "bác", 4 "em", 2 "anh", 2 "chị"):
   khi chơi, chạm vào bất kì người nào có từ vừa nghe đều đúng, rồi hiện chữ của tất cả những người đó.
   ex: { hinh, co, moTa, diem: [{ tu, am, nhan, nguoi }], caBai?: [{ am, c, d }], goiY?, goiYChoi? } */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, play, stopAll, wait, shuffle, feedback, recorder, scene, flash } = A;
  if (!document.getElementById('dang-nghe-chi')) {
    const st = document.createElement('style'); st.id = 'dang-nghe-chi';
    st.textContent = '.nc .tag.cover{border-radius:10px;border-width:2px;font-size:clamp(14px,3vw,24px)}';
    document.head.append(st);
  }

  A.T['nghe-chi'] = function (ex, ctx) {
    const seg = h('div', { class: 'seg', role: 'group' });
    const bA = h('button', { type: 'button', 'aria-pressed': 'true' }, 'Nghe và nhắc lại');
    const bB = h('button', { type: 'button', 'aria-pressed': 'false' }, 'Trò chơi: Nghe và chỉ');
    seg.append(bA, bB);
    const pane = h('div', { class: 'nc' });
    ctx.body.append(seg, pane);
    const show = w => { stopAll(); bA.setAttribute('aria-pressed', w === 'hoc'); bB.setAttribute('aria-pressed', w === 'luyen'); pane.innerHTML = ''; (w === 'hoc' ? learn : game)(); };
    bA.onclick = () => show('hoc'); bB.onclick = () => show('luyen');

    function learn() {
      pane.append(h('p', { class: 'hint' }, ex.goiY || 'Chạm vào từng người để nghe. Nghe xong, em nhắc lại thật to.'));
      const cap = h('div', { class: 'phude', 'aria-live': 'polite' });
      const sc = scene(ex, 'hoc', (i, who, tag) => { stopAll(); flash(who, 'pulse'); flash(tag, 'pulse'); cap.textContent = ex.diem[i].tu; play(ex.diem[i].am); });
      const all = h('button', { class: 'btn wood', type: 'button' }, icon('play'), 'Nghe cả bài');
      all.onclick = async () => {
        if (all.classList.contains('playing')) { stopAll(); all.lastChild.textContent = 'Nghe cả bài'; return; }
        stopAll(); const my = A.gen(); all.classList.add('playing'); all.lastChild.textContent = 'Dừng';
        const seq = ex.caBai || ex.diem.map((d, i) => ({ am: d.am, c: d.tu, d: i }));
        for (const it of seq) {
          sc.items.forEach(x => x.who.classList.remove('ring'));
          if (it.d != null) sc.items[it.d].who.classList.add('ring');
          cap.textContent = it.c || '';
          const ok = await play(it.am);
          if (!ok || A.gen() !== my) break;
          await wait(700);
          if (A.gen() !== my) break;
        }
        if (A.gen() === my) sc.items.forEach(x => x.who.classList.remove('ring'));
        if (A.gen() === my || !all.classList.contains('playing')) { all.classList.remove('playing'); all.lastChild.textContent = 'Nghe cả bài'; }
      };
      pane.append(sc.el, cap, h('div', { class: 'mrow' }, all), recorder({ label: 'Em nói theo – ghi âm giọng em' }));
    }

    function game() {
      // mỗi từ hỏi một lần; nghe một bản thu bất kì của từ đó
      const tuList = [];
      ex.diem.forEach(d => { if (d.am && !tuList.includes(d.tu)) tuList.push(d.tu); });
      const order = shuffle(tuList);
      let k = 0, clip = null;
      const again = h('button', { class: 'btn wood', type: 'button' }, icon('spk'), 'Nghe lại');
      const dots = h('div', { class: 'dots' }, order.map(() => h('i')));
      const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
      pane.append(h('p', { class: 'hint' }, ex.goiYChoi || 'Nghe và chạm vào người đúng. Có nhiều người cùng tên gọi thì chạm vào một người là được.'), h('div', { class: 'game-bar' }, again, dots));
      const found = new Set();
      const sc = scene(ex, 'luyen', async (i, who) => {
        if (k >= order.length) return;
        const want = order[k], d = ex.diem[i];
        if (d.tu === want && !found.has(want)) {
          stopAll(); found.add(want);
          const n = ex.diem.filter(x => x.tu === want).length;
          feedback(fb, true, 'Đúng rồi! Đây là ' + want + '.' + (n > 1 ? ' Trong tranh có ' + n + ' người là ' + want + '.' : ''));
          ex.diem.forEach((x, j) => {
            if (x.tu !== want) return;
            const it = sc.items[j]; it.who.classList.add('good');
            if (it.tag) { it.tag.textContent = x.tu; it.tag.classList.add('reveal'); }
          });
          dots.children[k].classList.add('done'); k++;
          await wait(1100);
          sc.items.forEach(it => it.who.classList.remove('good'));
          if (k < order.length) ask(); else finish();
        } else {
          feedback(fb, false, 'Chưa đúng, nghe lại nhé!'); flash(who, 'bad', 450);
          await wait(500); if (clip) play(clip, again);
        }
      });
      pane.append(sc.el, fb);
      function ask() {
        const cands = ex.diem.filter(d => d.tu === order[k] && d.am);
        clip = cands[Math.floor(Math.random() * cands.length)].am;
        play(clip, again);
      }
      again.onclick = () => { if (k < order.length && clip) { stopAll(); play(clip, again); } };
      function finish() {
        ctx.win();
        const r = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Chơi lại');
        r.onclick = () => show('luyen');
        pane.append(h('div', { class: 'done-box' }, h('b', null, ex.khen || 'Giỏi quá! Em đã chỉ đúng cả nhà.'), r));
      }
      setTimeout(ask, 350);
    }
    show('hoc');
  };
});
