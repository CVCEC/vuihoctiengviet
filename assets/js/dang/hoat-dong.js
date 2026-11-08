/* Dạng bài "hoat-dong": hoạt động làm ngoài màn hình hoặc trên lớp (gấp thuyền, trò chơi nhóm…).
   ex.noiDung: 'đoạn văn' | ['bước 1', 'bước 2', …]   (mảng → danh sách để bố mẹ đánh dấu)
   ex.hinh: 'ảnh' | ['ảnh', …] (tuỳ chọn), ex.nut: chữ trên nút (mặc định "Em đã làm xong"),
   ex.am: âm thanh đọc yêu cầu (tuỳ chọn), ex.ghiAm: true | 'nhãn' → thêm ô ghi âm */
(window.VHTV_DANG = window.VHTV_DANG || []).push(function (A) {
  'use strict';
  const { h, icon, play, stopAll, recorder, sfx } = A;
  if (!document.getElementById('dang-hoat-dong')) {
    const st = document.createElement('style'); st.id = 'dang-hoat-dong';
    st.textContent = `
.hd-imgs{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:12px}
.hd-imgs img{width:100%;border-radius:14px;border:2px solid #EFE7DC;background:#fff}
.hd-text{font-size:19px;line-height:1.55;margin:0 0 12px}
.hd-steps{list-style:none;margin:0 0 12px;padding:0;display:flex;flex-direction:column;gap:8px}
.hd-step{display:flex;align-items:flex-start;gap:12px;background:#fff;border:2px solid #EFE7DC;border-radius:14px;padding:10px 12px;cursor:pointer;font-size:18px;line-height:1.45;min-height:48px;user-select:none;-webkit-user-select:none}
.hd-step .bx{flex:none;width:30px;height:30px;border-radius:8px;border:2px solid var(--line);display:grid;place-items:center;color:#fff;background:#fff;margin-top:1px}
.hd-step .bx .ico{width:20px;height:20px}
.hd-step.on{border-color:var(--ok);background:var(--ok-bg)}
.hd-step.on .bx{background:var(--ok);border-color:var(--ok)}
.hd-step .n{font-weight:700;color:var(--c);margin-right:4px}
.hd-act{display:flex;flex-wrap:wrap;gap:10px;align-items:center}
.hd-act .note{color:var(--ink-2);font-size:15px}
`;
    document.head.append(st);
  }

  A.T['hoat-dong'] = function (ex, ctx) {
    if (ex.goiY) ctx.body.append(h('p', { class: 'hint' }, ex.goiY));
    const imgs = ex.hinh ? (Array.isArray(ex.hinh) ? ex.hinh : [ex.hinh]) : [];
    if (imgs.length) ctx.body.append(h('div', { class: 'hd-imgs' }, imgs.map(s => h('img', { src: s, alt: '' }))));
    if (ex.am) {
      const b = h('button', { class: 'btn soft small', type: 'button', style: { marginBottom: '10px' } }, icon('spk'), 'Nghe hướng dẫn');
      b.onclick = () => { stopAll(); play(ex.am, b); };
      ctx.body.append(b);
    }
    const steps = Array.isArray(ex.noiDung) ? ex.noiDung : null;
    const btn = h('button', { class: 'btn green', type: 'button' }, icon('check'), ex.nut || 'Em đã làm xong');
    const note = h('span', { class: 'note' });
    let marks = [];
    if (steps) {
      const ul = h('ul', { class: 'hd-steps' });
      marks = steps.map((s, i) => {
        const li = h('li', { class: 'hd-step', role: 'checkbox', 'aria-checked': 'false', tabindex: '0' },
          h('span', { class: 'bx', html: '' }), h('span', null, h('span', { class: 'n' }, (i + 1) + '.'), s));
        const toggle = () => {
          const on = !li.classList.contains('on');
          li.classList.toggle('on', on); li.setAttribute('aria-checked', String(on));
          li.firstChild.innerHTML = ''; if (on) { li.firstChild.append(icon('check')); sfx(true); }
          update();
        };
        li.addEventListener('click', toggle);
        li.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); } });
        ul.append(li); return li;
      });
      ctx.body.append(ul);
    } else if (ex.noiDung) {
      ctx.body.append(h('p', { class: 'hd-text' }, ex.noiDung));
    }
    function update() {
      const left = marks.filter(m => !m.classList.contains('on')).length;
      btn.disabled = left > 0;
      note.textContent = left > 0 ? 'Bố mẹ đánh dấu từng bước khi em làm xong (còn ' + left + ' bước).' : '';
    }
    btn.onclick = () => {
      ctx.win();
      btn.disabled = true;
      note.textContent = '';
      ctx.body.append(h('div', { class: 'done-box' }, h('b', null, ex.khen || 'Giỏi lắm! Em đã hoàn thành hoạt động.')));
    };
    ctx.body.append(h('div', { class: 'hd-act' }, btn, note));
    if (ex.ghiAm) ctx.body.append(recorder({ label: typeof ex.ghiAm === 'string' ? ex.ghiAm : 'Ghi âm phần em nói' }));
    update();
  };
});
