/* Quyển 1 – Bài 4: Bố mẹ em thế nào?  (sách trang 18–21) */
const A = 'audio/', H = 'img/';
// Từ đơn để chọn ở bài tập 2 (tiếng cắt từ bản thu Từ ngữ)
const TU = {
  'già': A + 'tn-gia.mp3', 'trẻ': A + 'tn-tre.mp3', 'khoẻ': A + 'tn-khoe.mp3',
  'yếu': A + 'tn-yeu.mp3', 'buồn': A + 'tn-buon.mp3', 'vui': A + 'tn-vui.mp3'
};
const chon = (k, dung, sai) => ({ hinh: H + 'tn2-' + k + '.webp', dung, sai, amDung: TU[dung] });
const NAM_NOI = ['Cảm ơn anh. Bố mẹ em khoẻ ạ.', 'Ông em rất khoẻ. Bà em yếu.', 'Chị Liên khoẻ. Chị ấy học tiếng Việt, vui lắm.'];
const khac = i => NAM_NOI.filter((_, j) => j !== i);

const BAI_HOC = {
  quyen: 1, bai: 4, ten: 'Bố mẹ em thế nào?', chuDe: 'Gia đình', chu: 'e, ê', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [18, 19],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh.mp3',
          the: [
            { hinh: H + 'tn-1.webp', tu: 'già – trẻ', am: A + 'tn-gia-tre.mp3' },
            { hinh: H + 'tn-2.webp', tu: 'khoẻ – yếu', am: A + 'tn-khoe-yeu.mp3' },
            { hinh: H + 'tn-3.webp', tu: 'buồn', am: A + 'tn-buon.mp3' },
            { hinh: H + 'tn-4.webp', tu: 'vui', am: A + 'tn-vui.mp3' }
          ]
        },
        {
          id: 'tn2', so: 2, loai: 'chon-cau', lenh: 'Chọn từ phù hợp',
          goiY: 'Nhìn từng hình, chọn từ phù hợp rồi nói to: già, trẻ, khoẻ, yếu, buồn, vui.',
          cau: [
            chon(1, 'trẻ', ['già', 'yếu']),
            chon(2, 'già', ['trẻ', 'buồn']),
            chon(3, 'yếu', ['khoẻ', 'vui']),
            chon(4, 'khoẻ', ['yếu', 'buồn']),
            chon(5, 'vui', ['buồn', 'yếu']),
            chon(6, 'buồn', ['vui', 'già'])
          ]
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [20],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht-lenh.mp3',
          hinh: H + 'ht-canh.webp', moTa: 'Nam, Mai và anh Dũng ngồi nói chuyện trên ghế sofa',
          vai: { 'Dũng': { av: H + 'av-dung.webp' }, 'Nam': { av: H + 'av-nam.webp' }, 'Mai': { av: H + 'av-mai.webp' } },
          loi: [
            { ai: 'Dũng', c: 'Bố mẹ em thế nào?', am: A + 'ht-1.mp3' },
            { ai: 'Nam', c: NAM_NOI[0], am: A + 'ht-2.mp3' },
            { ai: 'Dũng', c: 'Ông bà em thế nào?', am: A + 'ht-3.mp3' },
            { ai: 'Nam', c: NAM_NOI[1], am: A + 'ht-4.mp3' },
            { ai: 'Mai', c: 'Chị Liên thế nào?', am: A + 'ht-5.mp3' },
            { ai: 'Nam', c: NAM_NOI[2], am: A + 'ht-6.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'chon-cau', lenh: 'Đóng vai, nhắc lại hội thoại trên',
          goiY: 'Em đóng vai Nam. Nghe anh Dũng và Mai hỏi, rồi chọn lời của Nam và nói thật to.',
          cau: [
            { hinh: H + 'av-dung.webp', hoi: { c: 'Dũng: Bố mẹ em thế nào?', am: A + 'ht-1.mp3' }, dung: NAM_NOI[0], sai: khac(0), amDung: A + 'ht-2.mp3' },
            { hinh: H + 'av-dung.webp', hoi: { c: 'Dũng: Ông bà em thế nào?', am: A + 'ht-3.mp3' }, dung: NAM_NOI[1], sai: khac(1), amDung: A + 'ht-4.mp3' },
            { hinh: H + 'av-mai.webp', hoi: { c: 'Mai: Chị Liên thế nào?', am: A + 'ht-5.mp3' }, dung: NAM_NOI[2], sai: khac(2), amDung: A + 'ht-6.mp3' }
          ],
          khen: 'Giỏi lắm! Em đã đóng vai Nam.'
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [20, 21],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'hoat-dong', lenh: 'Hỏi đáp về gia đình bạn',
          hinh: H + 'tvv-mau.webp',
          goiY: 'Mẫu: – Đây là ai? – Đây là bố tôi. – Bố thế nào? – Bố rất khoẻ/trẻ/vui.',
          noiDung: [
            'Em và bạn (hoặc bố mẹ) cùng xem ảnh gia đình.',
            'Bạn chỉ vào một người và hỏi: “Đây là ai?” Em trả lời: “Đây là bố tôi.”',
            'Bạn hỏi tiếp: “Bố thế nào?” Em trả lời: “Bố rất khoẻ.” (hoặc: trẻ, vui)',
            'Đổi vai: em hỏi về gia đình bạn.'
          ],
          nut: 'Em đã hỏi đáp xong', ghiAm: 'Ghi âm em nói về gia đình em'
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Xỉa cá mè (Trương Quang Lục)',
          baiHat: 'Xỉa cá mè', tacGia: 'Trương Quang Lục', youtube: '5hy3muqcEGQ'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [21],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'E', thuong: 'e', am: A + 'hc-e.mp3' },
            { hoa: 'Ê', thuong: 'ê', am: A + 'hc-ee.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['e', 'ê'],
          cau: ['Bà em khoẻ lắm.', 'Mẹ cho em quả khế.']
        }
      ]
    }
  ]
};
