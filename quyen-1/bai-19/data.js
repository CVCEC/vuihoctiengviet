/* Quyển 1 – Bài 19: Xe nào nhanh hơn?  (sách trang 82–86) */
const A = 'audio/';
const XE = [
  ['ô tô', 'o-to'], ['xe đạp', 'xe-dap'], ['xe máy', 'xe-may'], ['mê trô', 'me-tro'],
  ['xe buýt', 'xe-buyt'], ['tàu hoả', 'tau-hoa'], ['tàu thuỷ', 'tau-thuy'], ['thuyền', 'thuyen']
];
const SO_SANH = [
  ['nhanh – chậm', 'Xe máy nhanh hơn xe đạp. Xe đạp chậm hơn xe máy.'],
  ['to – nhỏ', 'Xe buýt to hơn ô tô con. Ô tô con nhỏ hơn xe buýt.'],
  ['mới – cũ', 'Mê trô mới hơn tàu hoả. Tàu hoả cũ hơn mê trô.'],
  ['nặng – nhẹ', 'Tàu thuỷ nặng hơn thuyền. Thuyền nhẹ hơn tàu thuỷ.'],
  ['đắt – rẻ', 'Xe máy đắt hơn xe đạp. Xe đạp rẻ hơn xe máy.']
];
const VAI = { 'Sơn': { av: 'img/av-son.webp', mau: '#3C78C8' }, 'Mẹ': { av: 'img/av-me.webp', mau: '#E0577A' } };
const LOI = [
  { ai: 'Sơn', c: 'Mẹ ơi, ô tô màu vàng hay ô tô màu đỏ đẹp hơn?', am: A + 'ht-1.mp3' },
  { ai: 'Mẹ', c: 'Ô tô màu đỏ đẹp hơn ô tô màu vàng.', am: A + 'ht-2.mp3' },
  { ai: 'Sơn', c: 'Nhưng ô tô màu vàng to hơn ô tô màu đỏ. Con thích ô tô to.', am: A + 'ht-3.mp3' },
  { ai: 'Mẹ', c: 'Con thích ô tô to à? Nhưng ô tô to đắt lắm.', am: A + 'ht-4.mp3' },
  { ai: 'Sơn', c: 'Ô tô màu vàng đắt hơn ô tô màu đỏ ạ?', am: A + 'ht-5.mp3' },
  { ai: 'Mẹ', c: 'Đúng rồi. Ô tô màu đỏ rẻ hơn ô tô màu vàng.', am: A + 'ht-6.mp3' },
  { ai: 'Sơn', c: 'Vâng ạ, con muốn mua ô tô màu đỏ.', am: A + 'ht-7.mp3' }
];
// câu hỏi "A hay B … hơn?" – hai câu trả lời (ý kiến) hoặc một câu đúng
const hayHon = (a, b, tt) => a + ' hay ' + b.charAt(0).toLowerCase() + b.slice(1) + ' ' + tt + ' hơn?';
const hon = (a, b, tt) => a + ' ' + tt + ' hơn ' + b.charAt(0).toLowerCase() + b.slice(1) + '.';
const yKien = (hinh, a, b, tt, am) => ({ hinh, hoi: am ? { c: hayHon(a, b, tt), am } : hayHon(a, b, tt), dung: [hon(a, b, tt), hon(b, a, tt)] });
const dung = (hinh, a, b, tt, thang, amDung) => ({ hinh, hoi: hayHon(a, b, tt), dung: thang ? hon(a, b, tt) : hon(b, a, tt), sai: [thang ? hon(b, a, tt) : hon(a, b, tt)], amDung });

const BAI_HOC = {
  quyen: 1, bai: 19, ten: 'Xe nào nhanh hơn?', chuDe: 'Cộng đồng', chu: 's, x, v', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [82, 83],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn-lenh.mp3',
          danhSo: true, anChu: true,
          the: XE.map(([tu, k]) => ({ tu, hinh: 'img/n-' + k + '.webp', am: A + 'tn-' + k + '.mp3' }))
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn2-lenh.mp3',
          danhSo: true, anChu: true, cot: 2,
          goiY: 'Chạm vào từng hình để nghe hai câu so sánh. Nghe xong, em nhắc lại thật to.',
          the: SO_SANH.map(([tu, cau], i) => ({ tu, cau, hinh: 'img/ss-' + (i + 1) + '.webp', am: A + 'ss-' + (i + 1) + '.mp3' }))
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [84, 85],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-tranh.webp', moTa: 'Sơn và mẹ ở cửa hàng đồ chơi, Sơn cầm ô tô màu đỏ, trên giá có ô tô màu vàng',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai, nhắc lại hội thoại trên',
          goiY: 'Chọn “Đóng vai”, rồi chọn Sơn hoặc Mẹ. Đến lượt em, em nói to lời của người ấy.',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht3', so: 3, loai: 'hoi-dap-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          mauAv: ['img/av-hoi.webp', 'img/av-dap.webp'],
          mau: [[{ c: 'Ô tô màu vàng hay ô tô màu đỏ đẹp hơn?', am: A + 'm-hoi.mp3' }, { c: 'Ô tô màu vàng đẹp hơn ô tô màu đỏ. Nhưng ô tô màu đỏ rẻ hơn ô tô màu vàng.' }]],
          goiY: 'Bạn hỏi, em trả lời. Câu nào nói về ý thích (đẹp hơn…) thì em chọn theo ý em.',
          cau: [
            yKien('img/sh-1.webp', 'Ô tô màu vàng', 'Ô tô màu đỏ', 'đẹp', A + 'm-hoi.mp3'),
            dung('img/sh-1.webp', 'Ô tô màu vàng', 'Ô tô màu đỏ', 'rẻ', false, A + 'do-re-hon.mp3'),
            dung('img/sh-2.webp', 'Ô tô con', 'Xe buýt', 'to', false, A + 'ss-2a.mp3'),
            dung('img/sh-2.webp', 'Ô tô con', 'Xe buýt', 'nhanh', true),
            dung('img/sh-3.webp', 'Tàu thuỷ', 'Thuyền', 'nặng', true, A + 'ss-4a.mp3'),
            dung('img/sh-3.webp', 'Tàu thuỷ', 'Thuyền', 'nhanh', true),
            yKien('img/sh-4.webp', 'Mũ màu vàng', 'Mũ màu xanh', 'đẹp'),
            yKien('img/sh-4.webp', 'Mũ màu vàng', 'Mũ màu xanh', 'đắt'),
            dung('img/sh-5.webp', 'Tủ màu xanh', 'Tủ màu nâu', 'cao', true),
            yKien('img/sh-5.webp', 'Tủ màu xanh', 'Tủ màu nâu', 'nặng')
          ]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [85, 86],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'mau-hoat-dong', lenh: 'Gấp thuyền giấy. Tô màu. Đặt câu so sánh với thuyền giấy của bạn',
          mauAv: ['img/av-hoi2.webp', 'img/av-dap2.webp'],
          mau: [[{ c: 'Thuyền của tớ hay thuyền của cậu to hơn?' }, { c: 'Thuyền của cậu to hơn thuyền của tớ.' }]],
          hinh: 'img/gap-thuyen.webp',
          noiDung: [
            'Gấp thuyền giấy theo các hình từ 1 đến 12.',
            'Tô màu thuyền giấy của em.',
            'Đặt thuyền của em cạnh thuyền giấy của bạn (hoặc của bố mẹ), rồi hỏi đáp và đặt câu so sánh theo mẫu.'
          ],
          ghiAm: 'Ghi âm câu so sánh của em'
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Em đi chơi thuyền (Trần Kiết Tường)',
          baiHat: 'Em đi chơi thuyền', tacGia: 'Trần Kiết Tường', youtube: 'BIkAl4GMzmE'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [86],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'S', thuong: 's', am: A + 'hc-s.mp3' },
            { hoa: 'X', thuong: 'x', am: A + 'hc-x.mp3' },
            { hoa: 'V', thuong: 'v', am: A + 'hc-v.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['s', 'x', 'v'],
          cau: ['Sơn thích ô tô màu xanh.', 'Xuân rất vui vì sắp nghỉ hè.']
        }
      ]
    }
  ]
};
