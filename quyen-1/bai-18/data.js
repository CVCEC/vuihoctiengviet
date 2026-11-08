/* Quyển 1 – Bài 18: Cậu thích mặc áo màu gì?  (sách trang 76–81)
   Tiếng các màu trắng, đen, đỏ, vàng, xanh, tím (bảng chọn màu) cắt từ ghi âm Bài 12. */
const A = 'audio/';
const DO = [
  ['áo', 'n-ao', 'tn-ao'], ['quần', 'n-quan', 'tn-quan'], ['váy', 'n-vay', 'tn-vay'], ['mũ (nón)', 'n-mu', 'tn-mu'],
  ['giày', 'n-giay', 'tn-giay'], ['bít tất (vớ)', 'n-tat', 'tn-tat'], ['khăn', 'n-khan', 'tn-khan']
];
const MAU = [['màu hồng', 'm-hong', 'mau-hong'], ['màu nâu', 'm-nau', 'mau-nau'], ['màu cam', 'm-cam', 'mau-cam']];
const MAC = [
  ['mặc áo', 'd-mac-ao'], ['mặc quần', 'd-mac-quan'], ['mặc váy', 'd-mac-vay'], ['đội mũ', 'd-doi-mu'],
  ['đi giày', 'd-di-giay'], ['đi tất', 'd-di-tat'], ['quàng khăn', 'd-quang-khan']
];
const VAI = { 'Mai': { av: 'img/av-mai.webp', mau: '#D9822B' }, 'Lan': { av: 'img/av-lan.webp', mau: '#E0577A' }, 'Nam': { av: 'img/av-nam.webp', mau: '#3C78C8' } };
const LOI = [
  { ai: 'Mai', c: 'Lan ơi, cậu thích mặc váy màu gì?', am: A + 'ht-1.mp3' },
  { ai: 'Lan', c: 'Tớ thích mặc váy màu hồng hoặc màu tím. Còn cậu?', am: A + 'ht-2.mp3' },
  { ai: 'Mai', c: 'Tớ thích mặc váy màu cam, đội mũ màu vàng, đi giày màu nâu. Rất đẹp.', am: A + 'ht-3.mp3' },
  { ai: 'Lan', c: 'Ồ, tớ không thích giày màu nâu. Giày màu nâu xấu. Tớ thích đi giày trắng, đội mũ trắng, mặc váy hồng hoặc tím. Cũng rất xinh. Còn Nam, cậu thích mặc màu gì?', am: A + 'ht-4.mp3' },
  { ai: 'Nam', c: 'Tớ thích mặc áo màu trắng, quần xanh, đi giày xanh. Tớ cũng thích đội mũ màu trắng.', am: A + 'ht-5.mp3' }
];
const CHON = [
  { c: 'trắng', ma: '#FFFFFF', am: A + 'mau-trang.mp3' }, { c: 'đen', ma: '#333333', am: A + 'mau-den.mp3' },
  { c: 'đỏ', ma: '#E0473F', am: A + 'mau-do.mp3' }, { c: 'vàng', ma: '#F4D35E', am: A + 'mau-vang.mp3' },
  { c: 'xanh', ma: '#3C78C8', am: A + 'mau-xanh.mp3' }, { c: 'tím', ma: '#8A5CC2', am: A + 'mau-tim.mp3' },
  { c: 'hồng', ma: '#F08BB0', am: A + 'mau-hong.mp3' }, { c: 'nâu', ma: '#8B5A2B', am: A + 'mau-nau.mp3' },
  { c: 'cam', ma: '#F2913D', am: A + 'mau-cam.mp3' }
];
const O = { o: 1 };
const ic = (t) => ({ hinh: 'img/ic-' + t + '.webp', tu: { ao: 'áo', quan: 'quần', mu: 'mũ' }[t] });
const banThan = (dt, t) => ['Tôi thích ' + dt + ' ', ic(t), ' màu ', O, ' hoặc màu ', O, '. Tôi không thích ' + dt + ' ', ic(t), ' màu ', O, '.'];

const BAI_HOC = {
  quyen: 1, bai: 18, ten: 'Cậu thích mặc áo màu gì?', chuDe: 'Cộng đồng', chu: 'th, tr', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [76, 77],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn-lenh.mp3',
          danhSo: true, anChu: true,
          the: DO.map(([tu, hinh, am]) => ({ tu, hinh: 'img/' + hinh + '.webp', am: A + am + '.mp3' }))
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn2-lenh.mp3',
          danhSo: true, anChu: true, cot: 3,
          the: MAU.map(([tu, hinh, am]) => ({ tu, hinh: 'img/' + hinh + '.webp', am: A + am + '.mp3' }))
        },
        {
          id: 'tn3', so: 3, loai: 'the-hinh', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn3-lenh.mp3',
          danhSo: true, anChu: true,
          the: MAC.map(([tu, k]) => ({ tu, hinh: 'img/' + k + '.webp', am: A + k + '.mp3' }))
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [78, 79],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-tranh.webp', moTa: 'Mai, Lan và Nam ở sân chơi nói về màu quần áo các bạn thích',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai, nhắc lại hội thoại trên',
          goiY: 'Chọn “Đóng vai”, rồi chọn Mai, Lan hoặc Nam. Đến lượt em, em nói to lời của bạn ấy.',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht3', so: 3, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp với bạn',
          goiY: 'Bạn hỏi, em nhìn hình (và nhớ lại hội thoại) rồi chọn câu trả lời đúng.',
          cau: [
            { hinh: 'img/hd-nam.webp', hoi: 'Nam thích mặc màu gì?', dung: 'Nam thích mặc áo màu trắng, quần xanh.', sai: ['Nam thích mặc áo màu cam, quần nâu.', 'Nam thích mặc váy màu hồng.'] },
            { hinh: 'img/hd-mai.webp', hoi: 'Mai thích mặc màu gì?', dung: 'Mai thích mặc váy màu cam, đội mũ màu vàng.', sai: ['Mai thích mặc váy màu tím, đội mũ màu trắng.', 'Mai thích mặc áo màu trắng, quần xanh.'] },
            { hinh: 'img/hd-lan.webp', hoi: 'Lan thích mặc màu gì?', dung: 'Lan thích mặc váy màu hồng hoặc màu tím.', sai: ['Lan thích mặc váy màu cam.', 'Lan thích mặc áo màu trắng, quần xanh.'] }
          ]
        },
        {
          id: 'ht4', so: 4, loai: 'dien-cau', lenh: 'Nói về bản thân',
          goiY: 'Em thích màu gì? Chạm vào chỗ trống, chọn màu, rồi đọc to các câu nói về em.',
          khacNhau: true, chon: CHON,
          cau: [banThan('mặc', 'ao'), banThan('mặc', 'quan'), banThan('đội', 'mu')],
          khen: 'Giỏi lắm! Bây giờ em đọc to cho bố mẹ nghe nhé.', ghiAm: 'Ghi âm em nói về bản thân'
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [80, 81],
      bt: [
        {
          id: 'tvv1a', so: 1, loai: 'to-mau-tranh', lenh: 'Tô màu và miêu tả bức tranh – Tô màu',
          goiY: 'Chọn màu, rồi chạm vào áo, quần, váy, mũ, giày của từng người để tô.',
          hinh: 'img/gia-dinh.webp', can: 8
        },
        {
          id: 'tvv1b', so: 1, loai: 'dien-cau', lenh: 'Tô màu và miêu tả bức tranh – Miêu tả',
          goiY: 'Nhìn tranh em vừa tô. Chạm vào chỗ trống, chọn màu giống tranh của em, rồi đọc to.',
          av: 'img/av-m.webp', chon: CHON,
          cau: [
            ['Đây là bố, mẹ và con trai.'],
            ['Bố mặc áo màu ', O, ', mặc quần màu ', O, ', đi giày màu ', O, '.'],
            ['Mẹ mặc áo màu ', O, ', mặc váy màu ', O, ', đi giày màu ', O, '.'],
            ['Con trai đội mũ màu ', O, ', mặc áo màu ', O, ', đi giày màu ', O, '.']
          ],
          ghiAm: 'Ghi âm em miêu tả bức tranh'
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Chị ong nâu và em bé (Tân Huyền)',
          baiHat: 'Chị ong nâu và em bé', tacGia: 'Tân Huyền', youtube: 'FCI7NjiyB4E'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [81],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'Th', thuong: 'th', am: A + 'hc-th.mp3' },
            { hoa: 'Tr', thuong: 'tr', am: A + 'hc-tr.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['th', 'tr'],
          cau: ['Trường ở trên đường Thanh Niên.', 'Mùa thu, bầu trời trong xanh.']
        }
      ]
    }
  ]
};
