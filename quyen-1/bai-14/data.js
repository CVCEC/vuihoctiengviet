/* Quyển 1 – Bài 14: Hôm nay là thứ mấy?  (sách trang 58–61)
   Toạ độ điểm chạm tính theo % của hình: [trái, trên, rộng, cao] */
const A = 'audio/';
const LICH = {
  hinh: 'img/lich.webp', co: [1100, 662], moTa: 'Tờ lịch tháng Bảy năm 2025 với tên các thứ trong tuần',
  diem: [
    { tu: 'Thứ Hai', am: A + 'd-2.mp3', nhan: [7.5, 34.5, 10.5, 6.5], nguoi: [7.2, 41, 11.1, 49] },
    { tu: 'Thứ Ba', am: A + 'd-3.mp3', nhan: [18.5, 34.5, 10.5, 6.5], nguoi: [18.3, 41, 11.2, 49] },
    { tu: 'Thứ Tư', am: A + 'd-4.mp3', nhan: [29.8, 34.5, 10.5, 6.5], nguoi: [29.5, 41, 11.1, 49] },
    { tu: 'Thứ Năm', am: A + 'd-5.mp3', nhan: [40.8, 34.5, 11, 6.5], nguoi: [40.6, 41, 11.2, 49] },
    { tu: 'Thứ Sáu', am: A + 'd-6.mp3', nhan: [52, 34.5, 11, 6.5], nguoi: [51.8, 41, 11.1, 49] },
    { tu: 'Thứ Bảy', am: A + 'd-7.mp3', nhan: [63.2, 34.5, 10.5, 6.5], nguoi: [62.9, 41, 11.1, 49] },
    { tu: 'Chủ nhật', am: A + 'd-cn.mp3', nhan: [74.2, 34.5, 10.8, 6.5], nguoi: [74, 41, 11, 49] }
  ]
};
const VAI = {
  'Cô giáo': { mau: '#D9822B' }, 'Nam': { mau: '#3C78C8' }, 'Hương': { mau: '#E0577A' },
  'Vũ': { mau: '#3E9B5F' }, 'Lê': { mau: '#8A5CC2' }, 'Mai': { mau: '#C2457A' }
};
const LOI = [
  { ai: 'Cô giáo', c: 'Hôm nay là thứ mấy?', am: A + 'l01.mp3' },
  { ai: 'Nam', c: 'Thưa cô, hôm nay là thứ Ba ạ.', am: A + 'l02.mp3' },
  { ai: 'Cô giáo', c: 'Hôm nay là ngày bao nhiêu?', am: A + 'l03.mp3' },
  { ai: 'Hương', c: 'Thưa cô, hôm nay là ngày 22.', am: A + 'l04.mp3' },
  { ai: 'Cô giáo', c: 'Tháng này là tháng mấy?', am: A + 'l05.mp3' },
  { ai: 'Vũ', c: 'Tháng này là tháng Tư ạ.', am: A + 'l06.mp3' },
  { ai: 'Cô giáo', c: 'Hôm nay là sinh nhật Mai.', am: A + 'l07.mp3' },
  { ai: 'Lê', c: 'Mai mấy tuổi?', am: A + 'l08.mp3' },
  { ai: 'Mai', c: 'Tớ 6 tuổi.', am: A + 'l09.mp3' },
  { ai: 'Cô giáo', c: 'Cô và các bạn chúc mừng sinh nhật em!', am: A + 'l10.mp3' },
  { ai: 'Mai', c: 'Em cảm ơn cô và các bạn.', am: A + 'l11.mp3' }
];
const SO = ['Hai (mươi) mốt', 'Hai (mươi) hai', 'Hai (mươi) ba', 'Hai (mươi) tư', 'Hai (mươi) lăm', 'Hai (mươi) sáu',
  'Hai (mươi) bảy', 'Hai (mươi) tám', 'Hai (mươi) chín', 'Ba mươi', 'Ba (mươi) mốt'].map((chu, i) => ({ so: 21 + i, chu, am: A + 'so-' + (21 + i) + '.mp3' }));
const Q_THANG = { c: 'Tháng này là tháng mấy?', am: A + 'q-thang.mp3' };
const Q_NGAY = { c: 'Hôm nay là ngày bao nhiêu?', am: A + 'q-ngay.mp3' };
const Q_THU = { c: 'Hôm nay là thứ mấy?', am: A + 'q-thu.mp3' };
const to = (hinh, thang, thangSai, ngay, ngaySai, thu, thuSai) => [
  { hinh, hoi: Q_THANG, dung: 'Tháng này là tháng ' + thang + '.', sai: thangSai.map(x => 'Tháng này là tháng ' + x + '.') },
  { hinh, hoi: Q_NGAY, dung: 'Hôm nay là ngày ' + ngay + '.', sai: ngaySai.map(x => 'Hôm nay là ngày ' + x + '.') },
  { hinh, hoi: Q_THU, dung: 'Hôm nay là ' + thu + '.', sai: thuSai.map(x => 'Hôm nay là ' + x + '.') }
];

const BAI_HOC = {
  quyen: 1, bai: 14, ten: 'Hôm nay là thứ mấy?', chuDe: 'Trường lớp', chu: 'u, ư', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [58, 59],
      bt: [
        Object.assign({
          id: 'tn1', so: 1, loai: 'nghe-hinh', lenh: 'Nghe, chỉ vào lịch và nhắc lại tên các thứ trong tuần', amLenh: A + 'tn1-lenh.mp3',
          caBai: LICH.diem.map((d, i) => ({ am: d.am, c: d.tu, d: i }))
        }, LICH),
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn2-lenh.mp3', cot: 2, anChu: true,
          the: [
            { hinh: 'img/s-xuan.webp', tu: 'mùa xuân', cau: 'mùa xuân – tháng Một, tháng Hai, tháng Ba', am: A + 'mua-xuan.mp3' },
            { hinh: 'img/s-he.webp', tu: 'mùa hè', cau: 'mùa hè – tháng Tư, tháng Năm, tháng Sáu', am: A + 'mua-he.mp3' },
            { hinh: 'img/s-thu.webp', tu: 'mùa thu', cau: 'mùa thu – tháng Bảy, tháng Tám, tháng Chín', am: A + 'mua-thu.mp3' },
            { hinh: 'img/s-dong.webp', tu: 'mùa đông', cau: 'mùa đông – tháng Mười, tháng Mười một, tháng Mười hai', am: A + 'mua-dong.mp3' }
          ]
        },
        {
          id: 'tn3', so: 3, loai: 'bang-so', lenh: 'Nhìn một tờ lịch, nghe và trả lời', amLenh: A + 'tn3-lenh.mp3',
          bang: SO
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [59, 60],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-tranh.webp', moTa: 'Cô giáo và các bạn chúc mừng sinh nhật Mai trong lớp',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai, nhắc lại hội thoại',
          goiY: 'Chọn “Đóng vai”, rồi chọn một vai. Đến lượt em, em nói to lời của vai đó.',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht3a', so: 3, loai: 'chon-cau', lenh: 'Nhìn hình, nghe và trả lời', amLenh: A + 'ht3-lenh.mp3',
          goiY: 'Nhìn tờ lịch, nghe câu hỏi rồi chọn câu trả lời đúng.',
          cau: [].concat(
            to('img/lich1.webp', 'Sáu', ['Năm', 'Một'], 1, [6, 7], 'thứ Năm', ['thứ Ba', 'Chủ nhật']),
            to('img/lich2.webp', 'Ba', ['Tám', 'Hai'], 8, [3, 18], 'thứ Ba', ['thứ Hai', 'thứ Năm']),
            to('img/lich3.webp', 'Tám', ['Chín', 'Sáu'], 19, [8, 9], 'Chủ nhật', ['thứ Hai', 'thứ Bảy'])
          )
        },
        {
          id: 'ht3b', so: 3, loai: 'sinh-nhat', lenh: 'Nhìn hình, nghe và trả lời',
          goiY: 'Em trả lời về em: chọn ngày, tháng sinh nhật và số tuổi của em, rồi nói to câu trả lời.',
          hinh: 'img/lich4.webp', moTa: 'Tờ lịch: ngày 20, thứ Hai, tháng 11',
          hoi1: { c: 'Sinh nhật em là ngày nào?', am: A + 'q-sinhnhat.mp3' },
          hoi2: { c: 'Năm nay em mấy tuổi?', am: A + 'q-tuoi.mp3' }
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [60, 61],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'hoi-ngay', lenh: 'Hỏi đáp về thứ, ngày, tháng',
          goiY: 'Hôm nay là thứ mấy, ngày bao nhiêu? Em xem lịch (hoặc hỏi bố mẹ) rồi chọn câu đúng.',
          mau: { nv: 'img/mau-ban.webp', nvTen: 'Hai bạn', cau: [
            { c: 'Hôm nay là thứ mấy?', am: A + 'l01.mp3' },
            { c: 'Hôm nay là thứ Tư.', am: null },
            { c: 'Hôm nay là ngày bao nhiêu?', am: A + 'l03.mp3' },
            { c: 'Hôm nay là ngày 12 tháng Năm.', am: null }
          ] },
          hoiThu: { c: 'Hôm nay là thứ mấy?', am: A + 'l01.mp3' },
          hoiNgay: { c: 'Hôm nay là ngày bao nhiêu?', am: A + 'l03.mp3' },
          hoiThang: { c: 'Tháng này là tháng mấy?', am: A + 'l05.mp3' }
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Cả tuần đều ngoan (Phạm Tuyên)',
          baiHat: 'Cả tuần đều ngoan', tacGia: 'Phạm Tuyên', youtube: 'ufrQcPozU1Y'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [61],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'U', thuong: 'u', am: A + 'hc-u.mp3' },
            { hoa: 'Ư', thuong: 'ư', am: A + 'hc-uw.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['u', 'ư'],
          cau: ['Chú Tùng là một kĩ sư.', 'Chú làm ở công trường.', 'Chú thích đội mũ màu nâu.']
        }
      ]
    }
  ]
};
