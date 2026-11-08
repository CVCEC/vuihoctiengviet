/* Khoá bài: bài sau mở khi bài trước đủ sao; bố mẹ / giáo viên mở khoá bằng một phép tính nhỏ.
   Cần MUC_LUC (muc-luc.js). Mọi dữ liệu chỉ lưu trong trình duyệt của máy này. */
const KHOA = (function () {
  'use strict';
  const key = (q, b) => 'vhtv:q' + q + ':b' + String(b).padStart(2, '0');
  const read = k => { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bỏ qua */ } };

  function dsBai(q) { const book = MUC_LUC.find(x => x.quyen === q); return book ? book.chuong.flatMap(c => c.bai) : []; }
  function timBai(q, b) { return dsBai(q).find(x => x.so === b) || null; }
  function truoc(q, b) { // bài trước gần nhất đã có bản tương tác
    const ds = dsBai(q); const i = ds.findIndex(x => x.so === b);
    for (let j = i - 1; j >= 0; j--) if (ds[j].san) return ds[j];
    return null;
  }
  function sau(q, b) { const ds = dsBai(q); const i = ds.findIndex(x => x.so === b); return i >= 0 && i < ds.length - 1 ? ds[i + 1] : null; }

  function sao(q, b) {
    const s = read(key(q, b)) || {};
    return { got: Object.keys(s).filter(k => k[0] !== '_').length, tong: s._tong || 0 };
  }
  function xong(q, b) { const s = sao(q, b); return s.tong > 0 && s.got >= s.tong; }
  function moTay(q, b) { const m = read('vhtv:mo') || {}; return !!(m.tatCa || m['q' + q + 'b' + b]); }
  function mo(q, b) {
    const ds = dsBai(q);
    if (!ds.length || ds[0].so === b) return true;
    if (!truoc(q, b)) return true;
    if (moTay(q, b)) return true;
    const p = truoc(q, b);
    return p ? xong(q, p.so) : true;
  }
  function moKhoa(q, b, tatCa) {
    const m = read('vhtv:mo') || {};
    if (tatCa) m.tatCa = 1; else m['q' + q + 'b' + b] = 1;
    write('vhtv:mo', m);
  }

  // Hộp hỏi phép tính – dành cho người lớn
  function hoi(q, b, onOk) {
    const old = document.querySelector('.pin'); if (old) old.remove();
    const el = document.createElement('div');
    el.className = 'pin'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true');
    el.innerHTML =
      '<div class="pin-box">' +
      '<h2>Dành cho bố mẹ / giáo viên</h2>' +
      '<p>Trả lời phép tính để mở khoá <b>Bài ' + b + '</b>.</p>' +
      '<div class="pin-q"><span class="pq"></span> = <input inputmode="numeric" pattern="[0-9]*" maxlength="3" aria-label="Kết quả" autocomplete="off"></div>' +
      '<p class="pin-msg" aria-live="polite"></p>' +
      '<div class="pin-act">' +
      '<button type="button" class="btn" data-a="mot">Mở bài này</button>' +
      '<button type="button" class="btn soft" data-a="tat-ca">Mở tất cả các bài</button>' +
      '<button type="button" class="btn soft" data-a="huy">Huỷ</button>' +
      '</div></div>';
    document.body.append(el);
    const input = el.querySelector('input'), msg = el.querySelector('.pin-msg'), pq = el.querySelector('.pq');
    let ans = 0;
    const moi = () => { const a = 6 + Math.floor(Math.random() * 4), c = 5 + Math.floor(Math.random() * 5); ans = a + c; pq.textContent = a + ' + ' + c; input.value = ''; };
    moi();
    const close = () => el.remove();
    el.addEventListener('click', e => {
      if (e.target === el) return close();
      const a = e.target.closest('button') && e.target.closest('button').dataset.a;
      if (!a) return;
      if (a === 'huy') return close();
      if (parseInt(input.value, 10) !== ans) { msg.textContent = 'Chưa đúng, thử phép tính khác nhé.'; moi(); input.focus(); return; }
      moKhoa(q, b, a === 'tat-ca'); close(); if (onOk) onOk();
    });
    input.addEventListener('keydown', e => { if (e.key === 'Enter') el.querySelector('[data-a="mot"]').click(); if (e.key === 'Escape') close(); });
    setTimeout(() => input.focus(), 50);
  }

  return { sao, xong, mo, truoc, sau, timBai, moKhoa, hoi };
})();
