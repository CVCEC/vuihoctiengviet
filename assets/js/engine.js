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
  const pad = n => String(n).padStart(2, '0');
  const coKhoa = typeof KHOA !== 'undefined' && typeof MUC_LUC !== 'undefined';

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
    lock: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
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
  let pending = null; // kết thúc lượt phát đang dở (để vòng lặp "Nghe cả bài" không bị treo)
  let gen = 0;       // tăng mỗi lần dừng – các vòng phát liên tiếp tự thoát
  function stopAll() {
    gen++;
    player.pause();
    if (pending) { const p = pending; pending = null; p(false); }
    document.querySelectorAll('.line.on').forEach(e => e.classList.remove('on'));
    document.querySelectorAll('.playing').forEach(e => e.classList.remove('playing'));
    document.querySelectorAll('.who.ring').forEach(e => e.classList.remove('ring'));
  }
  function play(src, btn) {
    return new Promise(res => {
      if (!src) { res(false); return; }
      if (pending) { const p = pending; pending = null; p(false); }
      player.pause();
      if (btn) btn.classList.add('playing');
      let settled = false;
      const done = ok => {
        if (settled) return; settled = true;
        if (pending === done) pending = null;
        player.onended = player.onerror = null;
        if (btn) btn.classList.remove('playing');
        res(ok);
      };
      pending = done;
      player.onended = () => done(true);
      player.onerror = () => { toast('Chưa có file âm thanh cho phần này'); done(false); };
      player.src = src;
      const pr = player.play();
      if (pr && pr.catch) pr.catch(() => done(false));
    });
  }
  async function playSeq(items) { // [{am, el}]
    for (const it of items) {
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
      const tag = d.nhan ? h('button', { class: 'tag' + (mode === 'luyen' ? ' cover' : ''), type: 'button', 'aria-label': d.tu, style: { left: pct(d.nhan[0]), top: pct(d.nhan[1]), width: pct(d.nhan[2]), height: pct(d.nhan[3]), zIndex: 10 } }, mode === 'luyen' ? '?' : '') : null;
      const pick = () => onPick(i, who, tag);
      who.addEventListener('click', pick); wrap.append(who);
      if (tag) { tag.addEventListener('click', pick); wrap.append(tag); }
      return { who, tag };
    });
    return { el: wrap, items };
  }
  function flash(el, cls, ms) { if (!el) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); setTimeout(() => el.classList.remove(cls), ms || 900); }

  /* ---------- khung bài tập ---------- */
  function card(ex, sec) {
    const star = h('span', { class: 'star' + (store.has(ex.id) ? ' got' : ''), html: I.star, title: 'Sao hoàn thành' });
    const head = h('div', { class: 'card-h' }, h('span', { class: 'num' }, String(ex.so)), h('h3', null, ex.lenh));
    if (ex.amLenh) { const lb = h('button', { class: 'lenh', type: 'button', 'aria-label': 'Nghe yêu cầu' }, icon('spk')); lb.onclick = () => { stopAll(); play(ex.amLenh, lb); }; head.append(lb); }
    head.append(star);
    const body = h('div');
    const c = h('section', { class: 'card', id: ex.id, style: { '--c': `var(--${sec.mau})` } }, head, body);
    const ctx = {
      body, sec,
      win() {
        if (!store.has(ex.id)) {
          store.done(ex.id); star.classList.add('got'); updateTabs();
          if (coKhoa && KHOA.xong(D.quyen, D.bai)) { const n = KHOA.sau(D.quyen, D.bai); toast(n && n.san ? 'Giỏi quá! Em đã mở Bài ' + n.so + '.' : 'Giỏi quá! Em đã có đủ sao Bài ' + D.bai + '.'); }
        }
        else { flash(star, 'got', 600); star.classList.add('got'); }
      }
    };
    return { el: c, ctx };
  }

  function modelBox(m, color) {
    const lines = h('div', { class: 'lines' }, h('span', { class: 'm' }, 'M'));
    const rows = m.cau.map(l => {
      if (!l.am) { const d = h('div', { class: 'line quiet' }, '– ' + l.c); lines.append(d); return { am: null, el: d }; }
      const b = h('button', { class: 'line', type: 'button' }, icon('spk'), '– ' + l.c);
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
    const bB = h('button', { type: 'button', 'aria-pressed': 'false' }, ex.tenChoi || 'Trò chơi: Ai đây?');
    seg.append(bA, bB);
    const pane = h('div');
    ctx.body.append(seg, pane);
    const show = (which) => { stopAll(); bA.setAttribute('aria-pressed', which === 'hoc'); bB.setAttribute('aria-pressed', which === 'luyen'); pane.innerHTML = ''; (which === 'hoc' ? learn : game)(); };
    bA.onclick = () => show('hoc'); bB.onclick = () => show('luyen');

    function learn() {
      pane.append(h('p', { class: 'hint' }, ex.goiY || 'Chạm vào từng người để nghe. Nghe xong, em nhắc lại thật to.'));
      const cap = h('div', { class: 'phude', 'aria-live': 'polite' });
      const sc = scene(ex, 'hoc', (i, who, tag) => { stopAll(); flash(who, 'pulse'); flash(tag, 'pulse'); cap.textContent = ex.diem[i].cau || ex.diem[i].tu; play(ex.diem[i].am); });
      pane.append(sc.el, cap);
      if (ex.nv) pane.append(h('div', { class: 'nv-row' }, h('img', { src: ex.nv.hinh, alt: ex.nv.ten || '' }), h('span', null, ex.nv.loi || '')));
      if (ex.mau) pane.append(modelBox(ex.mau).el);
      if (ex.mau || ex.caBai) {
        const row = h('div', { class: 'mrow' });
        const all = h('button', { class: 'btn wood', type: 'button' }, icon('play'), 'Nghe cả bài');
        all.onclick = async () => {
          if (all.classList.contains('playing')) { stopAll(); all.lastChild.textContent = 'Nghe cả bài'; return; }
          stopAll(); const my = gen; all.classList.add('playing'); all.lastChild.textContent = 'Dừng';
          const seq = ex.caBai || ex.diem.map((d, i) => ({ am: d.am, d: i, c: d.cau }));
          for (const it of seq) {
            sc.items.forEach(x => x.who.classList.remove('ring'));
            if (it.d != null) sc.items[it.d].who.classList.add('ring');
            cap.textContent = it.c || '';
            const ok = await play(it.am);
            if (!ok || gen !== my) break;
            await wait(it.d != null ? 900 : 250);
            if (gen !== my) break;
          }
          if (gen === my || !all.classList.contains('playing')) {
            if (gen === my) sc.items.forEach(x => x.who.classList.remove('ring'));
            all.classList.remove('playing'); all.lastChild.textContent = 'Nghe cả bài';
          }
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
      pane.append(h('p', { class: 'hint' }, ex.goiYChoi || 'Nghe và chạm vào người đúng.'), h('div', { class: 'game-bar' }, again, dots));
      const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
      const sc = scene(ex, 'luyen', async (i, who, tag) => {
        if (k >= order.length) return;
        const want = order[k];
        if (i === want || ex.diem[i].tu === ex.diem[want].tu) {
          stopAll(); feedback(fb, true, 'Đúng rồi! Đây là ' + (ex.diem[i].goi || ex.diem[i].tu) + '.');
          who.classList.add('good'); if (tag) { tag.textContent = ex.diem[i].tu; tag.classList.add('reveal'); }
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
        pane.append(h('div', { class: 'done-box' }, h('b', null, ex.khen || 'Giỏi quá! Em đã tìm đúng cả nhà.'), r));
      }
      setTimeout(ask, 350);
    }
    show('hoc');
  };

  // Câu theo mẫu: 'Cháu chào {tu} ạ.' → 'Cháu chào bác ạ.'
  const fill = (tpl, d) => tpl.split('{tu}').join(d.tu);
  function sayParts(el, tpl, word) { // in đậm từ thay vào mẫu
    const parts = tpl.split('{tu}');
    el.innerHTML = '';
    parts.forEach((p, i) => { el.append(p); if (i < parts.length - 1) el.append(h('em', null, word)); });
  }
  function bubble(av, cls, text, wait) {
    return h('div', { class: 'bub' + (cls ? ' ' + cls : '') }, av ? h('img', { src: av, alt: '' }) : h('span', { class: 'av0', html: I.spk }), h('div', { class: 't' + (wait ? ' wait' : '') }, text));
  }

  // 2) Chạm vào người trong tranh → câu mẫu (giới thiệu "Đây là … tôi." hoặc lời chào "Cháu chào … ạ.")
  T['gioi-thieu'] = function (ex, ctx) {
    const base = ex.nguon;
    const tpl = ex.mauCau || 'Đây là {tu} tôi.', tplToi = ex.mauToi || 'Đây là tôi.';
    const cauOf = d => d.toi ? tplToi : fill(tpl, d);
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || 'Chạm vào từng người, rồi nói câu giới thiệu.'));
    if (ex.mau) ctx.body.append(modelBox(ex.mau).el);
    const say = h('div', { class: 'say', 'aria-live': 'polite' }, h('span', { style: { color: '#B7AC9E', fontWeight: 400, fontSize: '20px' } }, 'Chạm vào một người trong tranh…'));
    const rep = ex.traLoi ? bubble(ex.traLoi.av, '', '…', true) : null;
    const seen = new Set();
    const chips = h('div', { class: 'chips' }, base.diem.map(d => h('span', { class: 'chip' }, d.tu)));
    const sc = scene(base, 'hoc', async (i, who) => {
      stopAll(); flash(who, 'pulse');
      const my = gen, d = base.diem[i], cau = cauOf(d);
      if (d.toi) { say.textContent = tplToi; } else sayParts(say, tpl, d.tu);
      if (rep) { rep.lastChild.className = 't wait'; rep.lastChild.textContent = '…'; }
      seen.add(i); chips.children[i].classList.add('done');
      if (seen.size === base.diem.length) { ctx.win(); toast(ex.xong || 'Giỏi lắm! Em đã nói với cả nhà.'); }
      const am = (ex.amCau || {})[cau];
      if (am) await play(am); else if (ex.goiYTu && d.am) await play(d.am);
      if (rep && gen === my) {
        await wait(ex.traLoi.cho || 900); if (gen !== my) return;
        rep.lastChild.className = 't'; rep.lastChild.textContent = ex.traLoi.c;
        play(ex.traLoi.am);
      }
    });
    ctx.body.append(sc.el, say);
    if (rep) ctx.body.append(h('div', { class: 'duo' }, rep));
    ctx.body.append(chips, recorder({ label: ex.ghiAm || 'Ghi âm câu của em' }));
  };

  // 3) Đóng vai, hỏi – đáp / chọn lời chào: khoanh một người, em chọn câu đúng
  T['hoi-dap'] = function (ex, ctx) {
    const base = ex.nguon;
    const tpl = ex.mauCau || 'Đây là {tu} tôi.', tplToi = ex.mauToi || 'Đây là tôi.';
    const cauOf = d => d.toi ? tplToi : fill(tpl, d);
    const avL = (ex.mauAv || [])[0] || (ex.hoi && ex.hoi.av), avR = (ex.mauAv || [])[1] || ex.dap.av;
    if (ex.mau) {
      const m = h('div', { class: 'duo' });
      ex.mau.forEach(p => {
        const q = h('div', { class: 'bub' }, avL ? h('img', { src: avL, alt: '' }) : null, h('button', { class: 'line t', type: 'button' }, p[0].c));
        const a = h('div', { class: 'bub r' }, avR ? h('img', { src: avR, alt: '' }) : null, h('button', { class: 'line t', type: 'button' }, p[1].c));
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
      const qb = ex.hoi ? bubble(ex.hoi.av, '', ex.hoi.c) : null;
      const ab = bubble(ex.dap.av, 'r', '…', true);
      const rb = ex.traLoi ? bubble(ex.traLoi.av, '', '…', true) : null;
      const opts = h('div', { class: 'opts' });
      const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
      const tools = h('div', { class: 'row' });
      let hintBtn = null;
      if (ex.goiYTu) { hintBtn = h('button', { class: 'btn soft small', type: 'button' }, icon('spk'), 'Gợi ý: người này là ai?'); tools.append(hintBtn); }
      area.append(sc.el, h('div', { class: 'duo' }, qb, ab, rb), opts, fb, tools);
      function next() {
        if (k >= order.length) return done();
        const i = order[k], d = base.diem[i];
        sc.items.forEach(it => it.who.classList.remove('ring'));
        sc.items[i].who.classList.add('ring');
        ab.lastChild.className = 't wait'; ab.lastChild.textContent = '…';
        if (rb) { rb.lastChild.className = 't wait'; rb.lastChild.textContent = '…'; }
        if (hintBtn) hintBtn.onclick = () => { stopAll(); sc.items[i].who.classList.add('ring'); play(d.am); toast('Đây là ' + d.tu + '.'); };
        const right = cauOf(d);
        const wrongOwn = (ex.mauSai || []).map(t => fill(t, d));
        const others = shuffle(base.diem.filter((_, j) => j !== i)).map(cauOf).filter(c => c !== right);
        const pool = wrongOwn.length ? [shuffle(wrongOwn)[0], others[0]] : others.slice(0, 2);
        const choices = shuffle([right, ...pool]);
        opts.innerHTML = ''; fb.textContent = ''; fb.className = 'fb';
        choices.forEach(cx => {
          const b = h('button', { class: 'opt', type: 'button' }, cx);
          b.onclick = async () => {
            if (cx === right) {
              b.classList.add('good'); feedback(fb, true, 'Đúng rồi! Em nói to câu này nhé.');
              ab.lastChild.className = 't'; ab.lastChild.textContent = right;
              opts.querySelectorAll('.opt').forEach(o => o.disabled = true);
              dots.children[k].classList.add('done'); k++;
              const my = gen;
              const am = (ex.amCau || {})[right]; if (am) await play(am); else await wait(1400);
              if (rb && gen === my) { rb.lastChild.className = 't'; rb.lastChild.textContent = ex.traLoi.c; await play(ex.traLoi.am); }
              await wait(500); if (gen === my) next();
            } else { flash(b, 'bad', 450); b.classList.add('bad'); feedback(fb, false); }
          };
          opts.append(b);
        });
        if (ex.hoi) play(ex.hoi.am);
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

  // Tách một tiếng thành các chữ cái, giữ nguyên chữ ghép: "Cháu" → Ch|á|u, "nghỉ" → ngh|ỉ
  const CHU_GHEP = ['ngh', 'ng', 'gh', 'kh', 'nh', 'ph', 'th', 'tr', 'ch', 'qu', 'gi'];
  function tachChu(word, dich) {
    const list = CHU_GHEP.filter(g => g !== 'gi' || (dich || []).includes('gi'));
    const cs = Array.from(word), out = [];
    for (let i = 0; i < cs.length;) {
      let m = null;
      if (isLetter(cs[i])) for (const g of list) {
        const seg = cs.slice(i, i + g.length);
        if (seg.length === g.length && seg.every(isLetter) && baseLetter(seg.join('')) === g) { m = seg.join(''); break; }
      }
      if (m) { out.push(m); i += Array.from(m).length; } else { out.push(cs[i]); i++; }
    }
    return out;
  }

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
        tachChu(word, ex.dich).forEach(ch => {
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

  // 8) Xưng hô: chạm từng người, chọn từ em tự xưng (mẹ – con, ông – cháu, chị – em…)
  T['xung-ho'] = function (ex, ctx) {
    ctx.body.append(h('p', { class: 'hint' }, ex.goiY || ('Chạm vào từng người, rồi chọn từ ' + ex.giua.ten + ' tự xưng khi nói với người đó.')));
    const L = h('div', { class: 'xh-col' }), R = h('div', { class: 'xh-col' });
    const mid = h('div', { class: 'xh-mid' }, h('div', { class: 'xh-card me' }, h('img', { src: ex.giua.hinh, alt: ex.giua.ten }), h('b', null, ex.giua.ten)));
    const grid = h('div', { class: 'xh' }, L, mid, R);
    const chips = h('div', { class: 'xh-chips' });
    const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    let cur = -1; const done = new Set(); const cards = [];
    ex.nguoi.forEach((p, i) => {
      const ans = h('span', { class: 'xh-ans' }, '– ?');
      const c = h('button', { class: 'xh-card', type: 'button' }, h('span', { class: 'xh-n' }, '(' + (i + 1) + ')'), h('img', { src: p.hinh, alt: p.tu }), h('b', null, p.tu), ans);
      c.onclick = () => select(i);
      cards.push({ c, ans });
      (i % 2 === 0 ? L : R).append(c);
      if (ex.mau === i) { done.add(i); c.classList.add('ok', 'model'); ans.textContent = '– ' + p.dung; c.prepend(h('span', { class: 'm' }, 'M')); }
    });
    const need = ex.nguoi.length;
    function select(i) {
      if (done.has(i)) { stopAll(); if (ex.nguoi[i].am) play(ex.nguoi[i].am); return; }
      cur = i; cards.forEach((x, j) => x.c.classList.toggle('sel', j === i));
      chips.querySelectorAll('button').forEach(b => b.disabled = false);
      fb.textContent = ''; fb.className = 'fb';
      stopAll(); if (ex.nguoi[i].am) play(ex.nguoi[i].am);
    }
    ex.chon.forEach(w => {
      const b = h('button', { class: 'opt', type: 'button', disabled: true }, w);
      b.onclick = () => {
        if (cur < 0) return;
        const p = ex.nguoi[cur];
        if (w === p.dung) {
          done.add(cur); cards[cur].c.classList.remove('sel'); cards[cur].c.classList.add('ok'); cards[cur].ans.textContent = '– ' + w;
          feedback(fb, true, p.tu + ' – ' + w + '. Đúng rồi!');
          const nxt = ex.nguoi.findIndex((_, j) => !done.has(j));
          if (done.size >= need) { ctx.win(); chips.querySelectorAll('button').forEach(x => x.disabled = true); cur = -1; }
          else if (nxt >= 0) select(nxt);
        } else { flash(b, 'bad', 450); feedback(fb, false, ex.giua.ten + ' không xưng “' + w + '” với ' + p.tu + '. Thử lại nhé!'); }
      };
      chips.append(b);
    });
    ctx.body.append(grid, h('div', { class: 'xh-pick' }, h('span', null, ex.giua.ten + ' xưng là:'), chips), fb);
    const first = ex.nguoi.findIndex((_, j) => !done.has(j)); if (first >= 0) setTimeout(() => select(first), 0);
  };

  // 9) Tranh hội thoại: nghe từng cặp lời; trò chơi chọn câu đúng cho bạn nhỏ
  T['tranh-thoai'] = function (ex, ctx) {
    const seg = h('div', { class: 'seg', role: 'group' });
    const bA = h('button', { type: 'button', 'aria-pressed': 'true' }, 'Nghe và nhắc lại');
    const bB = h('button', { type: 'button', 'aria-pressed': 'false' }, ex.troChoi || 'Trò chơi: Chọn câu đúng');
    seg.append(bA, bB);
    const pane = h('div'); ctx.body.append(seg, pane);
    const show = w => { stopAll(); bA.setAttribute('aria-pressed', w === 'hoc'); bB.setAttribute('aria-pressed', w === 'luyen'); pane.innerHTML = ''; (w === 'hoc' ? learn : game)(); };
    bA.onclick = () => show('hoc'); bB.onclick = () => show('luyen');
    function panel(t, n, hideA) {
      const a = h('button', { class: 'pb a' + (hideA ? ' wait' : ''), type: 'button' }, hideA ? '?' : t.a.c);
      const b = h('button', { class: 'pb b', type: 'button' }, t.b.c);
      if (!hideA) a.onclick = () => { stopAll(); play(t.a.am, a); };
      b.onclick = () => { stopAll(); play(t.b.am, b); };
      return { el: h('div', { class: 'panel' }, h('span', { class: 'pn' }, String(n)), h('div', { class: 'pbs' }, a, b), h('img', { src: t.hinh, alt: '' })), a, b };
    }
    function learn() {
      pane.append(h('p', { class: 'hint' }, 'Chạm vào lời nói để nghe, rồi nhắc lại thật to.'));
      const g = h('div', { class: 'panels' }); const ps = ex.tranh.map((t, i) => panel(t, i + 1)); ps.forEach(p => g.append(p.el));
      const all = h('button', { class: 'btn wood', type: 'button' }, icon('play'), 'Nghe cả bài');
      all.onclick = async () => {
        if (all.classList.contains('playing')) { stopAll(); all.lastChild.textContent = 'Nghe cả bài'; return; }
        stopAll(); const my = gen; all.classList.add('playing'); all.lastChild.textContent = 'Dừng';
        for (let i = 0; i < ps.length && gen === my; i++) {
          ps[i].el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          for (const x of [['a', ps[i].a], ['b', ps[i].b]]) {
            x[1].classList.add('on'); const ok = await play(ex.tranh[i][x[0]].am); x[1].classList.remove('on');
            if (gen !== my) break; await wait(ok ? 300 : 1200);
          }
        }
        if (gen === my || !all.classList.contains('playing')) { all.classList.remove('playing'); all.lastChild.textContent = 'Nghe cả bài'; }
      };
      pane.append(g, h('div', { class: 'mrow' }, all), recorder({ label: 'Em nói theo – ghi âm giọng em' }));
    }
    function game() {
      let k = 0;
      const dots = h('div', { class: 'dots' }, ex.tranh.map(() => h('i')));
      const holder = h('div'), opts = h('div', { class: 'opts' }), fb = h('div', { class: 'fb', 'aria-live': 'polite' });
      pane.append(h('div', { class: 'game-bar' }, h('b', null, ex.goiYChoi || 'Bạn nhỏ sẽ nói gì? Chọn câu đúng.'), dots), holder, opts, fb);
      function next() {
        if (k >= ex.tranh.length) {
          opts.innerHTML = ''; ctx.win();
          const r = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Chơi lại'); r.onclick = () => show('luyen');
          pane.append(h('div', { class: 'done-box' }, h('b', null, 'Giỏi quá! Em đã chọn đúng hết.'), r)); return;
        }
        const t = ex.tranh[k], p = panel(t, k + 1, true);
        holder.innerHTML = ''; holder.append(p.el); opts.innerHTML = ''; fb.textContent = ''; fb.className = 'fb';
        shuffle([t.a.c, ...t.a.sai]).forEach(cx => {
          const b = h('button', { class: 'opt', type: 'button' }, cx);
          b.onclick = async () => {
            if (cx === t.a.c) {
              b.classList.add('good'); opts.querySelectorAll('.opt').forEach(o => o.disabled = true);
              p.a.classList.remove('wait'); p.a.textContent = t.a.c; feedback(fb, true);
              dots.children[k].classList.add('done'); k++;
              const my = gen; await play(t.a.am, p.a); if (gen !== my) return; await wait(200); await play(t.b.am, p.b); if (gen !== my) return; await wait(500); next();
            } else { flash(b, 'bad', 450); b.classList.add('bad'); feedback(fb, false); }
          };
          opts.append(b);
        });
      }
      next();
    }
    show('hoc');
  };

  // 10) Ai đúng, ai nhanh? – bạn giới thiệu người thân, em chọn lời chào nhanh nhất
  T['ai-nhanh'] = function (ex, ctx) {
    if (ex.mau) {
      ctx.body.append(h('div', { class: 'model' }, h('div', { class: 'lines', style: { paddingTop: '14px' } }, h('span', { class: 'm' }, 'M'),
        h('div', { class: 'duo' }, bubble(ex.ban.av, '', ex.mau[0]), bubble(ex.em.av, 'r', ex.mau[1])))));
    }
    const area = h('div', { style: { marginTop: '14px' } }); ctx.body.append(area);
    const bestKey = KEY + ':' + ex.id + ':nhanh';
    const best = () => { try { return parseFloat(localStorage.getItem(bestKey)) || 0; } catch (e) { return 0; } };
    function start() {
      area.innerHTML = '';
      const order = shuffle(ex.nguoi.map((_, i) => i)); let k = 0, total = 0, t0 = 0, timer = null;
      const clock = h('b', { class: 'clock' }, '0,0 giây');
      const dots = h('div', { class: 'dots' }, order.map(() => h('i')));
      const img = h('img', { class: 'an-img', alt: '' });
      const qb = bubble(ex.ban.av, '', '…'), ab = bubble(ex.em.av, 'r', '…', true);
      const opts = h('div', { class: 'opts' }), fb = h('div', { class: 'fb', 'aria-live': 'polite' });
      area.append(h('div', { class: 'game-bar' }, clock, dots), h('div', { class: 'an' }, img, h('div', { class: 'duo' }, qb, ab)), opts, fb);
      const tick = () => { clock.textContent = ((total + (performance.now() - t0) / 1000)).toFixed(1).replace('.', ',') + ' giây'; };
      function next() {
        if (k >= order.length) return finish();
        const p = ex.nguoi[order[k]];
        img.src = p.hinh; qb.lastChild.textContent = 'Đây là ' + p.tu + ' tôi.';
        ab.lastChild.className = 't wait'; ab.lastChild.textContent = '…';
        opts.innerHTML = ''; fb.textContent = ''; fb.className = 'fb';
        shuffle([p.dung, ...p.sai]).forEach(cx => {
          const b = h('button', { class: 'opt', type: 'button' }, cx);
          b.onclick = async () => {
            if (cx === p.dung) {
              total += (performance.now() - t0) / 1000; clearInterval(timer);
              b.classList.add('good'); opts.querySelectorAll('.opt').forEach(o => o.disabled = true);
              ab.lastChild.className = 't'; ab.lastChild.textContent = p.dung; feedback(fb, true);
              dots.children[k].classList.add('done'); k++;
              const am = (ex.amCau || {})[p.dung]; if (am) await play(am); else await wait(700);
              await wait(300); t0 = performance.now(); timer = setInterval(tick, 100); next();
            } else { total += 2; flash(b, 'bad', 450); b.classList.add('bad'); feedback(fb, false, 'Chưa đúng! Cộng thêm 2 giây.'); }
          };
          opts.append(b);
        });
      }
      function finish() {
        clearInterval(timer); opts.innerHTML = ''; ctx.win();
        const t = Math.round(total * 10) / 10, b = best(), rec = !b || t < b;
        if (rec) { try { localStorage.setItem(bestKey, String(t)); } catch (e) { /* bỏ qua */ } }
        const r = h('button', { class: 'btn soft', type: 'button' }, icon('redo'), 'Chơi lại'); r.onclick = start;
        area.append(h('div', { class: 'done-box' }, h('b', null, 'Em hoàn thành trong ' + String(t).replace('.', ',') + ' giây!'),
          h('p', null, rec ? 'Kỉ lục mới của em!' : 'Kỉ lục của em: ' + String(b).replace('.', ',') + ' giây.'), r));
      }
      t0 = performance.now(); timer = setInterval(tick, 100); next();
    }
    const b0 = h('button', { class: 'btn green', type: 'button' }, icon('play'), 'Bắt đầu');
    b0.onclick = start;
    area.append(h('p', { class: 'hint' }, ex.goiY || 'Bạn giới thiệu người thân, em chọn lời chào đúng thật nhanh. Chọn sai bị cộng 2 giây.'), b0);
  };

  /* ---------- dạng bài bổ sung (assets/js/dang/*.js) ---------- */
  (window.VHTV_DANG || []).forEach(f => f({ T, h, icon, I, play, stopAll, wait, shuffle, feedback, recorder, scene, flash, toast, sfx, crayons, fill, bubble, sayParts, modelBox, baseLetter, tachChu, nfc, isLetter, store, KEY, gen: () => gen }));

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
    const nw = $('.finish .nextwrap');
    if (nw && coKhoa) {
      const n = KHOA.sau(D.quyen, D.bai);
      nw.innerHTML = '';
      if (n && got >= all) nw.append(n.san ? h('a', { class: 'btn green', href: '../bai-' + pad(n.so) + '/' }, 'Đã mở Bài ' + n.so + ': ' + n.ten, icon('next')) : h('p', { class: 'hint' }, 'Em giỏi lắm! Bài ' + n.so + ' sắp có.'));
      else if (n) nw.append(h('p', { class: 'hint' }, 'Nhận đủ ' + all + ' sao để mở Bài ' + n.so + '.'));
    }
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
    if (coKhoa && !KHOA.mo(D.quyen, D.bai)) return renderLock();
    const openPages = lightbox();
    app.append(h('div', { class: 'hero' },
      h('span', { class: 'lbl' }, 'Quyển ' + D.quyen + ' · Bài ' + D.bai),
      (() => { const t = h('h1', null, D.ten); if (D.amTen) { const b = h('button', { class: 'lenh', type: 'button', 'aria-label': 'Nghe tên bài' }, icon('spk')); b.onclick = () => { stopAll(); play(D.amTen, b); }; t.append(' ', b); } return t; })(),
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
          h('div', { class: 'nextwrap' }),
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
    window.addEventListener('hashchange', () => { const k = D.phan.findIndex(p => '#' + p.id === location.hash); if (k >= 0) go(k, true); });
    go(start, false);
    updateTabs();
    window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 0);
  }
  function renderLock() {
    const p = KHOA.truoc(D.quyen, D.bai), s = KHOA.sao(D.quyen, p.so);
    const adult = h('button', { class: 'btn soft', type: 'button' }, icon('lock'), 'Bố mẹ / giáo viên mở khoá');
    adult.onclick = () => KHOA.hoi(D.quyen, D.bai, () => location.reload());
    app.append(
      h('div', { class: 'hero' }, h('span', { class: 'lbl' }, 'Quyển ' + D.quyen + ' · Bài ' + D.bai), h('h1', null, D.ten)),
      h('div', { class: 'locked' },
        h('div', { class: 'lk-ico', html: I.lock }),
        h('h2', null, 'Bài này chưa mở'),
        h('p', null, 'Em hãy học xong Bài ' + p.so + ' – ' + p.ten + ' và nhận đủ sao để mở bài này nhé.'),
        h('p', { class: 'lk-st' }, s.tong ? 'Bài ' + p.so + ': em đã có ' + s.got + '/' + s.tong + ' sao' : 'Em chưa học Bài ' + p.so + '.'),
        h('div', { class: 'row', style: { justifyContent: 'center' } },
          p.san ? h('a', { class: 'btn', href: '../bai-' + pad(p.so) + '/' }, icon('back'), 'Học Bài ' + p.so) : null, adult)));
  }
  render();
})();
