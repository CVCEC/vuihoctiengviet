/* =====================================================================
   PHẦN MỞ RỘNG 15+ (Lộ trình theo khung năng lực) cho bài Vui học tiếng Việt
   Bài nào có tệp mo-rong.js (const MO_RONG = {...}) thì có thêm một thẻ "Mở rộng 15+" sau các phần của sách:
   nghe hội thoại, viết văn xuôi, chính tả, ngữ pháp. Nội dung chỉ dùng từ và mẫu câu của bài (và các bài trước).

   - Sao của phần mở rộng lưu cùng khoá bài (vhtv:qN:bNN) nhưng mã bắt đầu bằng "_" nên KHÔNG tính vào
     số sao mở khoá bài sau (khoa.js bỏ qua mã "_…"); bài cũ của người học không bị khoá lại.
   - Kết quả gửi lên cổng với mã bài riêng "qN-bNN-mr" và mã hoạt động "mr-…" (cổng chỉ nhận a-z, 0-9, gạch nối).
   - Lời đọc: TTV.phat({ tep, chu }) của bộ mẫu chung (có tệp ghi âm thì phát tệp, chưa có thì tạm đọc bằng giọng máy).
   - Bài viết (mức Vừa, Khó) chỉ lưu trên máy: khoá mới "vhtv:viet:qN-bNN".
   ===================================================================== */
(function () {
  'use strict';
  if (typeof BAI_HOC === 'undefined' || typeof MO_RONG === 'undefined') return;
  const D = BAI_HOC, M = MO_RONG;
  const MA = 'q' + D.quyen + '-b' + String(D.bai).padStart(2, '0');
  // thêm thẻ "Mở rộng 15+" vào cuối bài; mỗi bài tập đánh dấu để bộ máy tính riêng
  const bt = M.bt.map((b, i) => Object.assign({ so: i + 1 }, b, { id: '_mr-' + b.id, _hoatDong: 'mr-' + b.id, _maBai: MA + '-mr', _soTro: M.bt.length }));
  D.phan.push({ id: 'mo-rong', ten: M.ten || 'Mở rộng 15+', mau: 'ld', trang: [], moRong: true, bt });

  window.VHTV_DANG = window.VHTV_DANG || [];
  window.VHTV_DANG.push(function (A) {
    const { T, h, icon, shuffle, feedback, nfc, stopAll } = A;
    const noi = (chu, tep) => { stopAll(); if (window.TTV && TTV.phat) return TTV.phat({ tep: tep || null, chu }); return Promise.resolve(false); };
    const chuan = s => nfc(String(s || '')).replace(/\s+/g, ' ').trim();
    const en = t => t ? h('p', { class: 'mr-en', lang: 'en' }, t) : null;
    const loa = (chu, tep, nhan) => { const b = h('button', { class: 'btn soft small', type: 'button' }, icon('spk'), nhan || 'Nghe'); b.onclick = () => noi(chu, tep); return b; };

    /* ---------- một câu hỏi: chọn / chọn nhiều / xếp / gõ ---------- */
    function cauHoi(q, xong) {
      const box = h('div', { class: 'mr-cau' });
      const dau = h('div', { class: 'mr-hoi' }, h('b', null, q.hoi));
      if (q.nghe) dau.append(' ', loa(q.nghe, q.tep));
      box.append(dau); if (q.en) box.append(en(q.en));
      const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
      let daXong = false;
      const dat = () => { if (daXong) return; daXong = true; box.classList.add('xong'); xong(); };
      if (q.loai === 'chon') {
        const ds = h('div', { class: 'mr-chon' });
        shuffle([q.dung, ...q.sai]).forEach(o => {
          const b = h('button', { class: 'opt', type: 'button' }, o);
          b.onclick = () => {
            if (daXong) return;
            if (o === q.dung) { b.classList.add('good'); feedback(fb, true); ds.querySelectorAll('button').forEach(x => { x.disabled = true; }); dat(); }
            else { b.classList.add('bad'); feedback(fb, false); setTimeout(() => b.classList.remove('bad'), 600); }
          };
          ds.append(b);
        });
        box.append(ds);
      } else if (q.loai === 'nhieu') {
        const ds = h('div', { class: 'mr-chon' }), chon = new Set();
        shuffle([...q.dung, ...q.sai]).forEach(o => {
          const b = h('button', { class: 'opt', type: 'button', 'aria-pressed': 'false' }, o);
          b.onclick = () => { if (daXong) return; if (chon.has(o)) chon.delete(o); else chon.add(o); b.setAttribute('aria-pressed', String(chon.has(o))); };
          ds.append(b);
        });
        const kt = h('button', { class: 'btn small', type: 'button' }, icon('check'), 'Kiểm tra');
        kt.onclick = () => {
          if (daXong) return;
          const dung = q.dung.length === chon.size && q.dung.every(x => chon.has(x));
          feedback(fb, dung); if (dung) { kt.disabled = true; ds.querySelectorAll('button').forEach(x => { x.disabled = true; }); dat(); }
        };
        box.append(ds, h('div', { class: 'row' }, kt));
      } else if (q.loai === 'xep') {
        const hang = h('div', { class: 'mr-xep-dich', 'aria-live': 'polite' }), kho = h('div', { class: 'mr-chon' });
        let da = [];
        const ve = () => {
          hang.innerHTML = ''; da.forEach(x => hang.append(h('span', { class: 'chip' }, x)));
          if (!da.length) hang.append(h('span', { class: 'mr-goi-y' }, 'Chạm các ô theo đúng thứ tự…'));
        };
        shuffle(q.dung.slice()).forEach(o => {
          const b = h('button', { class: 'opt', type: 'button' }, o);
          b.onclick = () => {
            if (daXong || b.disabled) return;
            da.push(o); b.disabled = true; ve();
            if (da.length === q.dung.length) {
              if (da.every((x, i) => x === q.dung[i])) { feedback(fb, true); dat(); }
              else { feedback(fb, false); setTimeout(() => { da = []; kho.querySelectorAll('button').forEach(x => { x.disabled = false; }); ve(); }, 900); }
            }
          };
          kho.append(b);
        });
        ve(); box.append(hang, kho);
      } else if (q.loai === 'go') {
        const o = h('input', { class: 'mr-go', type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', lang: 'vi', 'aria-label': q.hoi });
        const kt = h('button', { class: 'btn small', type: 'button' }, icon('check'), 'Kiểm tra');
        const thu = () => {
          if (daXong) return;
          const v = chuan(o.value), dsDung = [].concat(q.dung).map(chuan);
          const dung = q.hoa ? dsDung.includes(v) : dsDung.map(x => x.toLowerCase()).includes(v.toLowerCase());
          if (dung) { feedback(fb, true); o.disabled = true; kt.disabled = true; dat(); }
          else feedback(fb, false, v ? 'Thử lại nhé! Chú ý dấu thanh' + (q.hoa ? ', viết hoa' : '') + ' và dấu câu.' : 'Em gõ câu trả lời nhé.', !v);
        };
        kt.onclick = thu; o.addEventListener('keydown', e => { if (e.key === 'Enter') thu(); });
        box.append(h('div', { class: 'mr-go-hang' }, o, kt));
      }
      box.append(fb);
      return box;
    }

    /* ---------- Mở rộng: thẻ có giới thiệu, hội thoại, bảng, mẫu và các câu hỏi ---------- */
    T['mr-bai'] = function (ex, ctx) {
      const b = ctx.body;
      if (ex.muc) b.append(h('p', { class: 'mr-muc' }, h('b', null, 'Mục tiêu: '), ex.muc));
      if (ex.mucEn) b.append(en(ex.mucEn));
      (ex.thoai || []).forEach(t => {
        const ds = h('ul', { class: 'mr-thoai', hidden: !!ex.anChu }, t.cau.map(c => h('li', null, h('b', null, c[0]), h('span', null, c[1]))));
        const nghe = h('button', { class: 'btn wood small', type: 'button' }, icon('play'), 'Nghe hội thoại');
        nghe.onclick = async () => { for (const c of t.cau) { const ok = await noi(c[1], c[2]); if (ok === false && !(window.TTV && TTV.phat)) break; } };
        const hien = h('button', { class: 'btn soft small', type: 'button', 'aria-expanded': String(!ex.anChu) }, ex.anChu ? 'Hiện lời thoại' : 'Ẩn lời thoại');
        hien.onclick = () => { ds.hidden = !ds.hidden; hien.textContent = ds.hidden ? 'Hiện lời thoại' : 'Ẩn lời thoại'; hien.setAttribute('aria-expanded', String(!ds.hidden)); };
        b.append(h('h4', { class: 'mr-h4' }, t.ten), h('div', { class: 'row' }, nghe, hien), ds);
      });
      if (ex.bang) {
        const tb = h('table', { class: 'mr-bang' }, h('thead', null, h('tr', null, ex.bang.cot.map(c => h('th', null, c)))),
          h('tbody', null, ex.bang.dong.map(d => h('tr', null, d.map((o, i) => h('td', null, i === 2 && Array.isArray(o) ? [o[0], h('br'), h('span', { class: 'mr-en', lang: 'en' }, o[1])] : o))))));
        b.append(h('div', { class: 'mr-bang-cuon' }, tb));
      }
      if (ex.ghiChu) b.append(h('p', { class: 'mr-ghi' }, ex.ghiChu));
      const can = new Set(ex.cauHoi.map((_, i) => i));
      b.append(h('h4', { class: 'mr-h4' }, ex.tenLuyen || 'Luyện tập'));
      ex.cauHoi.forEach((q, i) => b.append(cauHoi(q, () => { can.delete(i); if (!can.size) ctx.win(); })));
    };

    /* ---------- Viết văn xuôi: đoạn mẫu, ba mức, tự kiểm tra ---------- */
    T['mr-viet'] = function (ex, ctx) {
      const b = ctx.body, KHOA = 'vhtv:viet:' + MA;
      const doc = () => { try { return JSON.parse(localStorage.getItem(KHOA)) || {}; } catch (e) { return {}; } };
      const luu = o => { try { localStorage.setItem(KHOA, JSON.stringify(o)); } catch (e) { /* bỏ qua */ } };
      b.append(h('p', { class: 'mr-muc' }, h('b', null, 'Mục tiêu: '), ex.muc), en(ex.mucEn));
      b.append(h('h4', { class: 'mr-h4' }, ex.mau.ten), h('p', { class: 'mr-mau' }, ex.mau.chu, ' ', loa(ex.mau.chu, null, 'Nghe đoạn mẫu')));
      const seg = h('div', { class: 'seg', role: 'group' }), pane = h('div');
      const mucs = [['de', '★ Dễ'], ['vua', '★★ Vừa'], ['kho', '★★★ Khó']];
      const fb = h('div', { class: 'fb', 'aria-live': 'polite' });
      const hien = k => {
        seg.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.k === k)));
        pane.innerHTML = ''; fb.className = 'fb'; fb.textContent = '';
        const m = ex.muc_[k];
        pane.append(h('p', { class: 'hint' }, m.huong), en(m.en));
        if (k === 'de') {
          const hang = m.khung.map(() => ({ v: null }));
          m.khung.forEach((kh, i) => {
            const o = h('span', { class: 'mr-o' }, '___');
            const ds = h('div', { class: 'mr-chon' }, ex.tu.map(t => { const x = h('button', { class: 'opt', type: 'button' }, t); x.onclick = () => { hang[i].v = t; o.textContent = t; o.classList.add('co'); }; return x; }));
            pane.append(h('div', { class: 'mr-cau' }, h('p', { class: 'mr-dien' }, kh[0], o, kh[1]), ds));
          });
          const kt = h('button', { class: 'btn', type: 'button' }, icon('check'), 'Xong');
          kt.onclick = () => { const du = hang.every(x => x.v); feedback(fb, du, du ? 'Đúng rồi! Em đã giới thiệu gia đình em.' : 'Em chọn từ cho mọi chỗ trống nhé.', !du); if (du) ctx.win(); };
          pane.append(h('div', { class: 'row' }, kt));
        } else {
          const o = doc(), ta = h('textarea', { class: 'mr-viet', rows: k === 'kho' ? 7 : 4, lang: 'vi', 'aria-label': 'Bài viết của em' });
          ta.value = o[k] || ''; ta.addEventListener('input', () => { const x = doc(); x[k] = ta.value; luu(x); });
          const kt = h('button', { class: 'btn', type: 'button' }, icon('check'), 'Kiểm tra');
          kt.onclick = () => {
            const cau = nfc(ta.value).split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean);
            const loi = [];
            if (cau.length < m.soCau) loi.push('Em viết ít nhất ' + m.soCau + ' câu nhé.');
            if (cau.some(c => c[0] !== c[0].toLocaleUpperCase('vi'))) loi.push('Viết hoa chữ đầu mỗi câu.');
            if (cau.some(c => !/[.!?]$/.test(c))) loi.push('Mỗi câu kết thúc bằng dấu chấm.');
            if (loi.length) feedback(fb, false, loi.join(' '), !ta.value.trim()); else { feedback(fb, true, 'Đúng rồi! Em đã viết ' + cau.length + ' câu. Đọc to bài viết của em nhé.'); ctx.win(); }
          };
          const sao = h('button', { class: 'btn soft small', type: 'button' }, 'Sao chép bài viết');
          sao.onclick = () => { try { navigator.clipboard.writeText(ta.value).then(() => A.toast('Đã sao chép. Em dán gửi thầy cô nhé!'), () => A.toast('Em chọn chữ rồi sao chép nhé.')); } catch (e) { A.toast('Em chọn chữ rồi sao chép nhé.'); } };
          pane.append(ta, h('div', { class: 'row' }, kt, sao));
        }
      };
      mucs.forEach(([k, t]) => { const x = h('button', { type: 'button', 'aria-pressed': 'false' }, t); x.dataset.k = k; x.onclick = () => hien(k); seg.append(x); });
      b.append(h('h4', { class: 'mr-h4' }, 'Chọn mức của em'), seg, pane, fb,
        h('div', { class: 'mr-tu-kt' }, h('b', null, 'Tự kiểm tra'), h('ul', null, ex.tuKiemTra.map(x => h('li', null, x)))),
        h('p', { class: 'mr-ghi' }, 'Bài viết chỉ lưu trên máy này, không gửi lên mạng.'));
      hien('de');
    };
  });
})();
