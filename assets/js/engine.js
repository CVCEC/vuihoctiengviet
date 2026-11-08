/* Vui học tiếng Việt – bộ máy bài học (đọc dữ liệu từ const BAI_HOC) */
(function () {
  'use strict';
  const D = BAI_HOC;

  /* ---------- tiện ích ---------- */
  const $ = (s, el) => (el || document).querySelector(s);
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'html') el.innerHTML = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else if (k === 'style' && typeof v === 'object') { for (const sk in v) { if (sk.startsWith('--')) el.style.setProperty(sk, v[sk]); else el.style[sk] = v[sk]; } }
      else el.setAttribute(k, v === true ? '' : v);
    }
    for (const k of kids.flat()) if (k != null && k !== false) el.append(k.nodeType ? k : document.createTextNode(k));
    return el;
  }
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const nfc = s => (s || '').normalize('NFC');
  // bỏ dấu thanh, giữ dấu mũ/trăng/móc: "à"→"a", "ậ"→"â", "ớ"→"ơ"
  const TONES = /[̣̀́̃̉]/g;
  const baseLetter = ch => nfc(ch).normalize('NFD').replace(TONES, '').normalize('NFC').toLowerCase();
  const isLetter = ch => /\p{L}/u.test(ch);
  const pct = n => n + '%';

  const I = {
    spk: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
    mic: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    stop: '<svg class="ico" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
    play: '<svg class="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z"/></svg>',
    book: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2zM22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z"/></svg>',
    redo: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
    back: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    next: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
    check: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>',
    img: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 8"/></svg>',
    x: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>'
  };
  const icon = (k) => { const s = h('span', { html: I[k] }); return s.firstChild; };

  /* ---------- tiến độ (lưu trên máy) ---------- */
  const KEY = 'vhtv:q' + D.quyen + ':b' + String(D.bai).padStart(2, '0');
  const store = {
    get() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } },
    put(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) { /* bỏ qua */ } },
    done(id) { const s = this.get(); s[id] = 1; this.put(s); },
    has(id) { return !!this.get()[id]; }
  };

  /* ---------- âm thanh ---------- */
  const player = new Audio();
  player.preload = 'auto';
  let token = 0, playingBtn = null;
  function stopAll() { token++; player.pause(); if (playingBtn) playingBtn.classList.remove('playing'); playingBtn = null; document.querySelectorAll('.line.on').forEach(e => e.classList.remove('on')); }
  function play(src, btn) {
    return new Promise(res => {
      if (!src) { res(false); return; }
      const my = ++token;
      player.pause();
      if (playingBtn) playingBtn.classList.remove('playing');
      playingBtn = btn || null; if (btn) btn.classList.add('playing');
      const done = ok => { player.onended = player.onerror = null; if (btn) btn.classList.remove('playing'); if (playingBtn === btn) playingBtn = null; res(ok && my === token); };
      player.onended = () => done(true);
      player.onerror = () => { toast('Chưa có file âm thanh cho phần này'); done(false); };
      player.src = src;
      const p = player.play();
      if (p && p.catch) p.catch(() => done(false));
    });
  }
  async function playSeq(items) { // [{am, el}]
    const my = token + 1;
    for (const it of items) {
      if (token + 1 !== my && token !== my) { /* đã bị dừng */ }
      if (it.el) it.el.classList.add('on');
      const ok = await play(it.am);
      if (it.el) it.el.classList.remove('on');
      if (!ok) return false;
      await wait(250);
    }
    return true;
  }
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const src = p => p ? (/^(https?:)?\//.test(p) ? p : p) : null;

  // tiếng "ting" / "tạch" nhỏ, tự tạo – không cần file
  let ac;
  function sfx(ok) {
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === 'suspended') ac.resume();
      const t = ac.currentTime;
      const notes = ok ? [880, 1318] : [220, 196];
      notes.forEach((f, i) => {
        const o = ac.createOscillator(), g = ac.createGain();
        o.type = ok ? 'sine' : 'triangle'; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t + i * 0.11);
        g.gain.exponentialRampToValueAtTime(ok ? 0.22 : 0.15, t + i * 0.11 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.11 + 0.22);
        o.connect(g).connect(ac.destination); o.start(t + i * 0.11); o.stop(t + i * 0.11 + 0.25);
      });
    } catch (e) { /* bỏ qua */ }
  }

  let toastT;
  function toast(msg) {
    let t = $('.toast'); if (!t) { t = h('div', { class: 'toast', role: 'status' }); document.body.append(t); }
    t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2200);
  }
  function feedback(el, ok, msg) {
    el.className = 'fb ' + (ok ? 'ok' : 'no');
    el.innerHTML = ''; el.append(icon(ok ? 'check' : 'redo'), msg || (ok ? 'Đúng rồi!' : 'Thử lại nhé!'));
    sfx(ok);
  }

  /* ---------- ghi âm (chỉ lưu trên máy, không gửi đi) ---------- */
  function recorder(opts) {
    opts = opts || {};
    const box = h('div', { class: 'recbox' });
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
      box.append(h('span', { class: 'lab' }, icon('mic'), 'Em hãy nói to theo mẫu nhé.'));
      return box;
    }
    const lab = h('span', { class: 'lab' }, icon('mic'), opts.label || 'Em nói theo – ghi âm giọng em');
    const bRec = h('button', { class: 'btn rec small', type: 'button' }, icon('mic'), 'Ghi âm');
    const bMine = h('button', { class: 'btn soft small', type: 'button', disabled: true }, icon('play'), 'Nghe giọng em');
    box.append(lab, bRec, bMine);
    let mr = null, chunks = [], url = null, timer = null, stream = null;
    const mine = new Audio();
    async function start() {
      stopAll();
      try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
      catch (e) { toast('Cần cho phép dùng micro để ghi âm'); return; }
      chunks = []; mr = new MediaRecorder(stream);
      mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
      mr.onstop = () => {
        stream.getTracks().forEach(t => t.stop());
        if (url) URL.revokeObjectURL(url);
        url = URL.createObjectURL(new Blob(chunks, { type: mr.mimeType || 'audio/mp4' }));
        bMine.disabled = false; bRec.innerHTML = ''; bRec.append(icon('mic'), 'Ghi lại');
        lab.innerHTML = ''; lab.append(icon('check'), 'Giỏi lắm! Nghe lại giọng em nhé');
        if (opts.onRecorded) opts.onRecorded();
      };
      mr.start(); let s = 0;
      bRec.innerHTML = ''; bRec.append(icon('stop'), 'Dừng');
      lab.innerHTML = ''; const tm = h('span', { class: 'tm' }, '0:00'); lab.append(h('span', { class: 'recdot' }), 'Đang ghi âm… ', tm);
      timer = setInterval(() => { s++; tm.textContent = '0:' + String(s).padStart(2, '0'); if (s >= (opts.max || 10)) stop(); }, 1000);
    }
    function stop() { clearInterval(timer); if (mr && mr.state !== 'inactive') mr.stop(); }
    bRec.addEventListener('click', () => { if (mr && mr.state === 'recording') stop(); else start(); });
    bMine.addEventListener('click', () => { stopAll(); if (url) { mine.src = url; mine.play().catch(() => {}); } });
    return box;
  }

  /* ---------- tranh có điểm chạm ---------- */
  function scene(ex, mode, onPick) {
    const wrap = h('div', { class: 'scene' }, h('img', { src: ex.hinh, alt: ex.moTa || '', width: ex.co[0], height: ex.co[1] }));
    const items = ex.diem.map((d, i) => {
      const who = h('button', { class: 'who', type: 'button', 'aria-label': d.tu, style: { left: pct(d.nguoi[0]), top: pct(d.nguoi[1]), width: pct(d.nguoi[2]), height: pct(d.nguoi[3]), zIndex: 2 + (d.z || 0) } });
      const tag = h('button', { class: 'tag' + (mode === 'luyen' ? ' cover' : ''), type: 'button', 'aria-label': d.tu, style: { left: pct(d.nhan[0]), top: pct(d.nhan[1]), width: pct(d.nhan[2]), height: pct(d.nhan[3]), zIndex: 10 } }, mode === 'luyen' ? '?' : '');
      const pick = () => onPick(i, who, tag);
      who.addEventListener('click', pick); tag.addEventListener('click', pick);
      wrap.append(who, tag);
      return { who, tag };
    });
    return { el: wrap, items };
  }
  function flash(el, cls, ms) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); setTimeout(() => el.classList.remove(cls), ms || 900); }

  /* ---------- khung bài tập ---------- */
  function card(ex, sec) {
    const star = h('span', { class: 'star' + (store.has(ex.id) ? ' got' : ''), html: I.star, title: 'Sao hoàn thành' });
    const head = h('div', { class: 'card-h' }, h('span', { class: 'num' }, String(ex.so)), h('h3', null, ex.lenh), star);
    const body = h('div');
    const c = h('section', { class: 'card', id: ex.id, style: { '--c': `var(--${sec.mau})` } }, head, body);
    const ctx = {
      body, sec,
      win() {
        if (!store.has(ex.id)) { store.done(ex.id); star.classList.add('got'); updateTabs(); }
        else { flash(star, 'got', 600); star.classList.add('got'); }
      }
    };
    return { el: c, ctx };
  }

  function modelBox(m, color) {
    const lines = h('div', { class: 'lines' }, h('span', { class: 'm' }, 'M'));
    const rows = m.cau.map(l => {
      const b = h('button', { class: 'line', type: 'button' }, icon('spk'), (l.ai ? '' : '– ') + l.c);
      b.addEventListener('click', () => { stopAll(); b.classList.add('on'); play(l.am).then(() => b.classList.remove('on')); });
      lines.append(b); return { am: l.am, el: b };
    });
    const box = h('div', { class: 'model' });
    if (m.nv) box.append(h('img', { class: 'who-img', src: m.nv, alt: m.nvTen || '' }));
    box.append(lines);
    return { el: box, rows };
  }

  /* ======================= CÁC DẠNG BÀI ======================= */
  const T = {};

  // 1) Nhìn hình, nghe và nhắc lại  (+ trò chơi: Nghe và chỉ vào hình)
  T['nghe-hinh'] = function (ex, ctx) {
    const seg = h('div', { class: 'seg', role: 'group' });
    const bA = h('button', { type: 'button', 'aria-pressed': 'true' }, 'Nghe và nhắc lại');
    const bB = h('button', { type: 'button', 'aria-pressed': 'false' }, 'Trò chơi: Ai đây?');
    seg.append(bA, bB);
    const pane = h('div');
    ctx.body.append(seg, pane);
    const show = (which) => { stopAll(); bA.setAttribute('aria-pressed', which === 'hoc'); bB.setAttribute('aria-pressed', which === 'luyen'); pane.innerHTML = ''; (which === 'hoc' ? learn : game)(); };
    bA.onclick = () => show('hoc'); bB.onclick = () => show('luyen');

    function learn() {
      pane.append(h('p', { class: 'hint' }, 'Chạm vào từng người để nghe. Nghe xong, em nhắc lại thật to.'));
      const sc = scene(ex, 'hoc', (i, who, tag) => { stopAll(); flash(who, 'pulse'); flash(tag, 'pulse'); play(ex.diem[i].am); });
      pane.append(sc.el);
      if (ex.mau) {
        const mb = modelBox(ex.mau);
        pane.append(mb.el);
        const row = h('div', { class: 'mrow' });
        const all = h('button', { class: 'btn wood', type: 'button' }, icon('play'), 'Nghe cả bài');
        all.onclick = async () => {
          if (all.classList.contains('playing')) { stopAll(); return; }
          stopAll(); all.classList.add('playing');
          const seq = ex.diem.map((d, i) => ({ am: d.am, el: sc.items[i].who, tag: sc.items[i].tag }));
          for (const s of seq) { flash(s.el, 'pulse', 1100); const ok = await play(s.am); if (!ok) { all.classList.remove('playing'); return; } await wait(200); }
          await playSeq(mb.rows);
          all.classList.remove('playing');
        };
        row.append(all);
        pane.append(row);
      }
      pane.append(recorder({ label: 'Em nói theo mẫu – ghi âm giọng em' }));
    }

    function game() {
      const order = shuffle(ex.diem.map((_, i) => i));
      let k = 0, tries = 0;
      const again = h('button', { class: 'btn wood', type: 'button' }, icon('spk'), 'Nghe lại');
      const dots = h('div', { class: 'dots' }, order.map(() => h('i')));
      pane.append(h('p', { class: 'hint' }, 'Nghe và chạm vào người đúng.'), h('div', { class: 'game-bar' }, again, dots));
      const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
      const sc = scene(ex, 'luyen', async (i, who, tag) => {
        if (k >= order.length) return;
        const want = order[k];
        if (i === want) {
          stopAll(); feedback(fb, true, 'Đúng rồi! Đây là ' + (ex.diem[i].goi || ex.diem[i].tu) + '.');
          who.classList.add('good'); tag.textContent = ex.diem[i].tu; tag.classList.add('reveal');
          dots.children[k].classList.add('done'); k++;
          await wait(900); who.classList.remove('good');
          if (k < order.length) ask(); else finish();
        } else { tries++; feedback(fb, false, 'Chưa đúng, nghe lại nhé!'); flash(who, 'bad', 450); await wait(500); play(ex.diem[want].am, again); }
      });
      pane.append(sc.el, fb);
      const ask = () => play(ex.diem[order[k]].am, again);
      again.onclick = () => { if (k < order.length) ask(); };
      function finish() {
        ctx.win();
        const r = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Chơi lại');
        r.onclick = () => show('luyen');
        pane.append(h('div', { class: 'done-box' }, h('b', null, 'Giỏi quá! Em đã tìm đúng cả nhà.'), r));
      }
      setTimeout(ask, 350);
    }
    show('hoc');
  };

  // 2) Đóng vai, giới thiệu gia đình
  T['gioi-thieu'] = function (ex, ctx) {
    const base = ex.nguon;
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Chạm vào từng người, rồi nói câu giới thiệu.'));
    if (ex.mau) ctx.body.append(modelBox(ex.mau).el);
    const say = h('div', { class: 'say', 'aria-live': 'polite' }, h('span', { style: { color: '#B7AC9E', fontWeight: 400, fontSize: '20px' } }, 'Chạm vào một người trong tranh…'));
    const seen = new Set();
    const chips = h('div', { class: 'chips' }, base.diem.map(d => h('span', { class: 'chip' }, d.tu)));
    const sc = scene(base, 'hoc', (i, who) => {
      stopAll(); flash(who, 'pulse');
      const d = base.diem[i];
      say.innerHTML = '';
      if (d.toi) say.append('Đây là ', h('em', null, 'tôi'), '.');
      else say.append('Đây là ', h('em', null, d.tu), ' tôi.');
      const cau = d.toi ? 'Đây là tôi.' : 'Đây là ' + d.tu + ' tôi.';
      const am = (ex.amCau || {})[cau];
      if (am) play(am);
      seen.add(i); chips.children[i].classList.add('done');
      if (seen.size === base.diem.length) { ctx.win(); toast('Em đã giới thiệu cả nhà!'); }
    });
    ctx.body.append(sc.el, say, chips, recorder({ label: 'Ghi âm câu giới thiệu của em' }));
  };

  // 3) Đóng vai, hỏi – đáp
  T['hoi-dap'] = function (ex, ctx) {
    const base = ex.nguon;
    if (ex.mau) {
      const m = h('div', { class: 'duo' });
      ex.mau.forEach(p => {
        const q = h('div', { class: 'bub' }, h('img', { src: ex.hoi.av, alt: '' }), h('button', { class: 'line t', type: 'button' }, p[0].c));
        const a = h('div', { class: 'bub r' }, h('img', { src: ex.dap.av, alt: '' }), h('button', { class: 'line t', type: 'button' }, p[1].c));
        q.lastChild.onclick = () => { stopAll(); play(p[0].am); };
        a.lastChild.onclick = () => { stopAll(); play(p[1].am); };
        m.append(q, a);
      });
      ctx.body.append(h('div', { class: 'model' }, h('div', { class: 'lines', style: { paddingTop: '14px' } }, h('span', { class: 'm' }, 'M'), m)));
    }
    const area = h('div', { style: { marginTop: '16px' } });
    ctx.body.append(area);
    function round() {
      area.innerHTML = '';
      const order = shuffle(base.diem.map((_, i) => i));
      let k = 0;
      const dots = h('div', { class: 'dots' }, order.map(() => h('i')));
      area.append(h('div', { class: 'game-bar' }, h('b', null, ex.goiY || 'Em là ' + ex.dap.ten + '. Bạn hỏi, em trả lời.'), dots));
      const sc = scene(base, 'hoc', () => {});
      sc.el.style.pointerEvents = 'none';
      const qb = h('div', { class: 'bub' }, h('img', { src: ex.hoi.av, alt: '' }), h('div', { class: 't' }, ex.hoi.c));
      const ab = h('div', { class: 'bub r' }, h('img', { src: ex.dap.av, alt: '' }), h('div', { class: 't wait' }, '…'));
      const opts = h('div', { class: 'opts' });
      const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
      area.append(sc.el, h('div', { class: 'duo' }, qb, ab), opts, fb);
      const cauOf = d => d.toi ? 'Đây là tôi.' : 'Đây là ' + d.tu + ' tôi.';
      function next() {
        if (k >= order.length) return done();
        const i = order[k], d = base.diem[i];
        sc.items.forEach(it => it.who.classList.remove('ring'));
        sc.items[i].who.classList.add('ring');
        ab.lastChild.className = 't wait'; ab.lastChild.textContent = '…';
        const right = cauOf(d);
        const others = shuffle(base.diem.filter((_, j) => j !== i)).slice(0, 2).map(cauOf);
        const choices = shuffle([right, ...others]);
        opts.innerHTML = ''; fb.textContent = ''; fb.className = 'fb';
        choices.forEach(cx => {
          const b = h('button', { class: 'opt', type: 'button' }, cx);
          b.onclick = async () => {
            if (cx === right) {
              b.classList.add('good'); feedback(fb, true, 'Đúng rồi! Em nói to câu này nhé.');
              ab.lastChild.className = 't'; ab.lastChild.textContent = right;
              opts.querySelectorAll('.opt').forEach(o => o.disabled = true);
              dots.children[k].classList.add('done'); k++;
              const am = (ex.amCau || {})[right]; if (am) await play(am); else await wait(1400);
              await wait(500); next();
            } else { flash(b, 'bad', 450); b.classList.add('bad'); feedback(fb, false); }
          };
          opts.append(b);
        });
        play(ex.hoi.am);
      }
      function done() {
        sc.items.forEach(it => it.who.classList.remove('ring'));
        opts.innerHTML = '';
        ctx.win();
        const r = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Chơi lại');
        r.onclick = round;
        area.append(h('div', { class: 'done-box' }, h('b', null, 'Tuyệt vời! Em đã đóng vai ' + ex.dap.ten + '.'), r), recorder({ label: 'Đóng vai cùng bố mẹ, rồi ghi âm' }));
      }
      setTimeout(next, 300);
    }
    const startBtn = h('button', { class: 'btn green', type: 'button' }, icon('play'), 'Bắt đầu đóng vai');
    startBtn.onclick = round;
    area.append(startBtn);
  };

  // 4) Dán nhãn lên ảnh gia đình (ảnh trong sách hoặc ảnh của em – ảnh không rời khỏi máy)
  T['dan-nhan'] = function (ex, ctx) {
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Chọn một chữ, rồi chạm vào người trong ảnh để dán. Sau đó hỏi – đáp cùng bố mẹ: “Đây là ai?”'));
    const pick = h('div', { class: 'row', style: { marginBottom: '10px' } });
    const bBook = h('button', { class: 'btn soft small', type: 'button' }, icon('book'), 'Ảnh trong sách');
    const file = h('input', { type: 'file', accept: 'image/*', class: 'sr', id: ex.id + '-f' });
    const bOwn = h('label', { class: 'btn soft small', for: ex.id + '-f' }, icon('img'), 'Chọn ảnh nhà em');
    pick.append(bBook, bOwn, file);
    const img = h('img', { src: ex.hinh, alt: ex.moTa || 'Ảnh gia đình' });
    const stage = h('div', { class: 'stage' }, img);
    const tray = h('div', { class: 'tray' });
    const list = h('ul', { class: 'sents' });
    let armed = null; const placed = [];
    ex.nhan.forEach(w => {
      const b = h('button', { type: 'button', 'aria-pressed': 'false' }, w);
      b.onclick = () => { armed = armed === w ? null : w; tray.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x.textContent === armed)); stage.classList.toggle('placing', !!armed); if (armed) toast('Chạm vào người trong ảnh để dán chữ “' + w + '”'); };
      tray.append(b);
    });
    function refresh() {
      list.innerHTML = '';
      placed.forEach(p => list.append(h('li', null, p.w === 'tôi' ? 'Đây là tôi.' : 'Đây là ' + p.w + ' tôi.')));
      if (placed.length >= 2) ctx.win();
    }
    function addSticker(w, x, y) {
      const s = h('div', { class: 'stk', style: { left: x + '%', top: y + '%' } }, w);
      const x0 = h('button', { class: 'x', type: 'button', 'aria-label': 'Bỏ' }, '×');
      s.append(x0);
      const rec = { w, el: s }; placed.push(rec);
      x0.addEventListener('pointerdown', e => e.stopPropagation());
      x0.onclick = e => { e.stopPropagation(); s.remove(); placed.splice(placed.indexOf(rec), 1); refresh(); };
      // kéo để di chuyển
      s.addEventListener('pointerdown', e => {
        e.stopPropagation(); s.setPointerCapture(e.pointerId);
        const r = stage.getBoundingClientRect();
        const mv = ev => { s.style.left = Math.max(4, Math.min(96, (ev.clientX - r.left) / r.width * 100)) + '%'; s.style.top = Math.max(4, Math.min(96, (ev.clientY - r.top) / r.height * 100)) + '%'; };
        const up = () => { s.removeEventListener('pointermove', mv); s.removeEventListener('pointerup', up); s.removeEventListener('pointercancel', up); };
        s.addEventListener('pointermove', mv); s.addEventListener('pointerup', up); s.addEventListener('pointercancel', up);
      });
      stage.append(s); refresh();
    }
    stage.addEventListener('pointerup', e => {
      if (!armed || e.target.closest('.stk')) return;
      const r = stage.getBoundingClientRect();
      addSticker(armed, (e.clientX - r.left) / r.width * 100, (e.clientY - r.top) / r.height * 100);
      armed = null; stage.classList.remove('placing'); tray.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', 'false'));
    });
    function clear() { placed.splice(0).forEach(p => p.el.remove()); refresh(); }
    let ownUrl = null;
    bBook.onclick = () => { clear(); img.src = ex.hinh; };
    file.onchange = () => { const f = file.files && file.files[0]; if (!f) return; clear(); if (ownUrl) URL.revokeObjectURL(ownUrl); ownUrl = URL.createObjectURL(f); img.src = ownUrl; };
    ctx.body.append(pick, stage, tray, list,
      h('p', { class: 'privacy' }, 'Ảnh của em chỉ hiện trên máy này, không được gửi hay lưu lên mạng.'),
      recorder({ label: 'Giới thiệu gia đình em – ghi âm' }));
  };

  // 5) Học hát (video YouTube, chỉ tải khi bấm)
  T['hoc-hat'] = function (ex, ctx) {
    const box = h('button', { class: 'song', type: 'button', 'aria-label': 'Mở video bài hát' },
      h('span', { class: 'play', html: I.play }),
      h('span', { class: 'cap' }, ex.baiHat + (ex.tacGia ? ' – ' + ex.tacGia : '')));
    box.onclick = () => {
      stopAll();
      const f = h('iframe', { src: 'https://www.youtube-nocookie.com/embed/' + ex.youtube + '?autoplay=1&rel=0&playsinline=1', title: ex.baiHat, allow: 'autoplay; encrypted-media; picture-in-picture', allowfullscreen: true });
      box.innerHTML = ''; box.append(f); box.style.cursor = 'default'; ctx.win();
    };
    ctx.body.append(h('p', { class: 'hint' }, 'Bấm để xem video, nghe và hát theo cùng bố mẹ.'), box);
  };

  // 6) Nghe, nhắc lại tên chữ và tô màu
  const CRAYONS = ['#E8738E', '#F2A541', '#F4D35E', '#5E9E6E', '#3C78C8', '#8A5CC2'];
  function crayons(onPick) {
    let cur = CRAYONS[0];
    const row = h('div', { class: 'crayons' }, h('b', { style: { fontSize: '16px' } }, 'Chọn màu:'));
    CRAYONS.forEach((c, i) => {
      const b = h('button', { class: 'crayon', type: 'button', 'aria-pressed': i === 0 ? 'true' : 'false', 'aria-label': 'Màu ' + (i + 1), style: { background: c } });
      b.onclick = () => { cur = c; row.querySelectorAll('.crayon').forEach(x => x.setAttribute('aria-pressed', x === b)); if (onPick) onPick(c); };
      row.append(b);
    });
    return { el: row, get: () => cur };
  }
  T['the-chu'] = function (ex, ctx) {
    const chips = h('div', { class: 'lchips' });
    ex.chu.forEach(c => { const b = h('button', { class: 'lchip', type: 'button' }, c.hoa + ' ' + c.thuong); b.onclick = () => { stopAll(); play(c.am, b); }; chips.append(b); });
    const cr = crayons();
    const big = h('div', { class: 'bigl' });
    const colored = new Set();
    ex.chu.forEach((c, i) => {
      const b = h('button', { class: 'hollow', type: 'button', 'aria-label': 'Tô màu chữ ' + c.thuong }, c.thuong);
      b.onclick = () => { b.style.color = cr.get(); stopAll(); play(c.am); colored.add(i); if (colored.size === ex.chu.length) ctx.win(); };
      big.append(b);
    });
    ctx.body.append(h('p', { class: 'hint' }, 'Chạm vào thẻ chữ để nghe và nhắc lại. Rồi chọn màu và chạm vào chữ to để tô.'), chips, cr.el, big);
  };

  // 7) Tìm và tô màu các chữ vừa học
  T['tim-chu'] = function (ex, ctx) {
    const targets = new Set(ex.dich.map(baseLetter));
    const cr = crayons();
    let total = 0, found = 0;
    const count = h('span', { class: 'count' });
    const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    const boxes = ex.cau.map(s => {
      const box = h('div', { class: 'sentbox', lang: 'vi' });
      nfc(s).split(' ').forEach(word => {
        const w = h('span', { class: 'w' });
        Array.from(word).forEach(ch => {
          const letter = isLetter(ch);
          const hit = letter && targets.has(baseLetter(ch));
          if (hit) total++;
          const g = h('button', { class: 'g hollow' + (letter ? '' : ' p'), type: 'button', tabindex: letter ? null : '-1', 'aria-label': letter ? 'chữ ' + ch : null }, ch);
          if (letter) g.onclick = () => {
            if (g.dataset.done) return;
            if (hit) {
              g.dataset.done = 1; g.style.color = cr.get(); found++; sfx(true);
              count.textContent = 'Đã tìm được ' + found + '/' + total + ' chữ';
              if (found === total) { feedback(fb, true, 'Em đã tìm hết các chữ ' + ex.dich.join(', ') + '!'); ctx.win(); }
            } else { flash(g, 'bad', 450); feedback(fb, false, '“' + ch + '” không phải chữ ' + ex.dich.join(', ') + '. Thử lại nhé!'); }
          };
          w.append(g);
        });
        box.append(w);
      });
      return box;
    });
    count.textContent = 'Đã tìm được 0/' + total + ' chữ';
    ctx.body.append(h('p', { class: 'hint' }, 'Tìm các chữ ' + ex.dich.join(', ') + ' trong câu và chạm để tô màu (cả chữ có dấu thanh như à, á).'), cr.el, count, ...boxes, fb);
  };

  /* ======================= DỰNG TRANG ======================= */
  const app = document.getElementById('app');
  const tabs = [];
  function updateTabs() {
    const s = store.get();
    D.phan.forEach((p, i) => {
      const got = p.bt.filter(b => s[b.id]).length;
      tabs[i].st.textContent = got + '/' + p.bt.length;
    });
    const all = D.phan.reduce((n, p) => n + p.bt.length, 0);
    const got = D.phan.reduce((n, p) => n + p.bt.filter(b => s[b.id]).length, 0);
    const f = $('.finish .stars'); if (f) f.textContent = 'Em đã có ' + got + '/' + all + ' sao';
    const o = store.get(); o._tong = all; store.put(o);
  }

  function lightbox() {
    const img = h('img', { alt: 'Trang sách' });
    const title = h('b');
    const close = h('button', { class: 'btn soft small', type: 'button' }, icon('x'), 'Đóng');
    const nav = h('div', { class: 'row' });
    const lb = h('div', { class: 'lb', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Trang sách' }, h('div', { class: 'bar' }, title, nav, close), h('div', { class: 'pg' }, img));
    close.onclick = () => lb.classList.remove('on');
    lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('pg')) lb.classList.remove('on'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('on'); });
    document.body.append(lb);
    return pages => {
      nav.innerHTML = '';
      const go = p => { img.src = 'img/trang-' + p + '.jpg'; title.textContent = 'Trang ' + p + ' trong sách'; nav.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b.textContent === String(p))); };
      if (pages.length > 1) pages.forEach(p => { const b = h('button', { class: 'btn soft small', type: 'button' }, String(p)); b.onclick = () => go(p); nav.append(b); });
      go(pages[0]); lb.classList.add('on');
    };
  }

  function render() {
    document.title = 'Bài ' + D.bai + ': ' + D.ten + ' – Vui học tiếng Việt ' + D.quyen;
    const openPages = lightbox();
    app.append(h('div', { class: 'hero' },
      h('span', { class: 'lbl' }, 'Quyển ' + D.quyen + ' · Bài ' + D.bai),
      h('h1', null, D.ten),
      h('p', null, D.chuDe ? 'Chủ đề: ' + D.chuDe + (D.chu ? ' · Chữ: ' + D.chu : '') : '')));
    const tabbar = h('div', { class: 'tabs', role: 'tablist' });
    app.append(tabbar);
    const secs = [];
    D.phan.forEach((p, i) => {
      const st = h('span', { class: 'st' });
      const t = h('button', { class: 'tab', role: 'tab', type: 'button', 'aria-selected': 'false', style: { '--c': `var(--${p.mau})` } }, h('span', { class: 'dot' }), p.ten, st);
      t.onclick = () => go(i, true);
      tabbar.append(t); tabs.push({ t, st });
      const bookBtn = h('button', { class: 'btn soft small', type: 'button' }, icon('book'), 'Xem trang sách');
      bookBtn.onclick = () => openPages(p.trang);
      const sec = h('section', { class: 'sec', id: 'sec-' + p.id, role: 'tabpanel', style: { '--c': `var(--${p.mau})` } },
        h('div', { class: 'sec-head' }, h('span', { class: 'banner' }, p.ten), bookBtn));
      p.bt.forEach(ex => {
        const { el, ctx } = card(ex, p);
        const fn = T[ex.loai];
        if (fn) fn(ex, ctx); else ctx.body.append(h('p', null, '(Dạng bài “' + ex.loai + '” đang được xây dựng)'));
        sec.append(el);
      });
      const nav = h('div', { class: 'next' });
      if (i > 0) { const b = h('button', { class: 'btn soft', type: 'button' }, icon('back'), D.phan[i - 1].ten); b.onclick = () => go(i - 1, true); nav.append(b); } else nav.append(h('span'));
      if (i < D.phan.length - 1) { const b = h('button', { class: 'btn', type: 'button' }, 'Tiếp: ' + D.phan[i + 1].ten, icon('next')); b.onclick = () => go(i + 1, true); nav.append(b); }
      sec.append(nav);
      if (i === D.phan.length - 1) {
        sec.append(h('div', { class: 'finish' },
          h('h2', { style: { margin: '0 0 6px' } }, 'Hoàn thành Bài ' + D.bai + '!'),
          h('p', { class: 'stars' }, ''),
          h('div', { class: 'row', style: { justifyContent: 'center' } },
            h('a', { class: 'btn soft', href: '../../#quyen-' + D.quyen }, icon('back'), 'Danh sách bài'))));
      }
      app.append(sec); secs.push(sec);
    });
    function go(i, scroll) {
      stopAll();
      secs.forEach((s, j) => s.classList.toggle('on', i === j));
      tabs.forEach((t, j) => t.t.setAttribute('aria-selected', i === j));
      const tb = tabs[i].t, bar = tb.parentNode; bar.scrollTo({ left: tb.offsetLeft - (bar.clientWidth - tb.offsetWidth) / 2, behavior: 'smooth' });
      try { history.replaceState(null, '', '#' + D.phan[i].id); } catch (e) { /* bỏ qua */ }
      if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const start = Math.max(0, D.phan.findIndex(p => '#' + p.id === location.hash));
    go(start, false);
    updateTabs();
    window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 0);
  }
  render();
})();
