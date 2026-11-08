/* Quyển 1 – Bài 12: Hình này là hình gì?  (sách trang 48–52)
   Toạ độ điểm chạm tính theo % của hình: [trái, trên, rộng, cao] */
const A = 'audio/';
// Màu sơn – thứ tự theo bản thu: trắng, vàng, đỏ, tím, xanh, đen
const MAU_SON = {
  hinh: 'img/mau-son.webp', co: [1100, 580], moTa: 'Sáu thùng sơn: trắng, vàng, đỏ, tím, xanh, đen',
  diem: [
    { tu: 'màu trắng', am: A + 'm-trang.mp3', nhan: [38, 0, 27, 12], nguoi: [42, 15, 14.5, 26] },
    { tu: 'màu vàng', am: A + 'm-vang.mp3', nhan: [72.5, 28, 27.5, 11.5], nguoi: [55.5, 22, 13.5, 20] },
    { tu: 'màu đỏ', am: A + 'm-do.mp3', nhan: [72.5, 54.5, 27.5, 12], nguoi: [57, 41, 14, 31] },
    { tu: 'màu tím', am: A + 'm-tim.mp3', nhan: [38, 87.5, 27.5, 12], nguoi: [44, 51, 14.5, 35] },
    { tu: 'màu xanh', am: A + 'm-xanh.mp3', nhan: [0, 54, 27.5, 12], nguoi: [30, 45, 14, 30] },
    { tu: 'màu đen', am: A + 'm-den.mp3', nhan: [0, 27.5, 27.5, 12], nguoi: [30, 26, 13.5, 20] }
  ]
};
const VAI = { 'Mai': { av: 'img/av-mai.webp', mau: '#E0577A' }, 'My': { av: 'img/av-my.webp', mau: '#8A5CC2' } };
const LOI = [
  { ai: 'Mai', c: 'Cái bàn này hình gì?', am: A + 'l01.mp3' },
  { ai: 'My', c: 'Cái bàn này hình tròn.', am: A + 'l02.mp3' },
  { ai: 'Mai', c: 'Cái bàn này màu gì?', am: A + 'l03.mp3' },
  { ai: 'My', c: 'Cái bàn này màu xanh.', am: A + 'l04.mp3' },
  { ai: 'Mai', c: 'Cái ghế kia hình vuông, phải không?', am: A + 'l05.mp3' },
  { ai: 'My', c: 'Phải. Cái ghế ấy hình vuông.', am: A + 'l06.mp3' },
  { ai: 'Mai', c: 'Cái ghế ấy màu tím, phải không?', am: A + 'l07.mp3' },
  { ai: 'My', c: 'Không. Cái ghế ấy màu đỏ.', am: A + 'l08.mp3' },
  { ai: 'Mai', c: 'Cái tủ này hình gì?', am: A + 'l09.mp3' },
  { ai: 'My', c: 'Cái tủ này hình chữ nhật.', am: A + 'l10.mp3' },
  { ai: 'Mai', c: 'Cái tủ ấy màu gì?', am: A + 'l11.mp3' },
  { ai: 'My', c: 'Cái tủ ấy màu vàng.', am: A + 'l12.mp3' }
];
const HOI = { c: 'Hình này là hình gì?', am: A + 'tn2-hoi.mp3' };
const HINH = ['hình tròn', 'hình vuông', 'hình tam giác', 'hình chữ nhật'];
const vat = (hinh, dung, bo) => ({ hinh, hoi: 'Vật này có hình gì?', dung, sai: HINH.filter(x => x !== dung && x !== bo),
  amDung: A + { 'hình tròn': 'tn-tron', 'hình vuông': 'tn-vuong', 'hình tam giác': 'tn-tamgiac', 'hình chữ nhật': 'tn-chunhat' }[dung] + '.mp3' });
const dem = (hinh, hoi, so, ten) => ({ hinh, hoi, dung: 'Có ' + so + ' ' + ten + '.', sai: [so - 1, so + 1].filter(n => n > 0).concat(so === 1 ? [3] : []).map(n => 'Có ' + n + ' ' + ten + '.') });

const BAI_HOC = {
  quyen: 1, bai: 12, ten: 'Hình này là hình gì?', chuDe: 'Trường lớp', chu: 'ng, ngh', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [48, 49],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn1-lenh.mp3', danhSo: true, cot: 4,
          the: [
            { hinh: 'img/h-tron.webp', tu: 'hình tròn', am: A + 'tn-tron.mp3' },
            { hinh: 'img/h-vuong.webp', tu: 'hình vuông', am: A + 'tn-vuong.mp3' },
            { hinh: 'img/h-tamgiac.webp', tu: 'hình tam giác', am: A + 'tn-tamgiac.mp3' },
            { hinh: 'img/h-chunhat.webp', tu: 'hình chữ nhật', am: A + 'tn-chunhat.mp3' }
          ]
        },
        {
          id: 'tn2', so: 2, loai: 'chon-cau', lenh: 'Nghe, chỉ vào hình, nhắc lại câu hỏi rồi trả lời', amLenh: A + 'tn2-lenh.mp3',
          goiY: 'Nghe và nhắc lại câu hỏi. Nhìn hình rồi chọn câu trả lời đúng.',
          cau: [
            { hinh: 'img/h-vuong.webp', hoi: HOI, dung: 'Hình này là hình vuông.', sai: ['Hình này là hình chữ nhật.', 'Hình này là hình tròn.'], amDung: A + 'tn-vuong.mp3' },
            { hinh: 'img/h-tamgiac.webp', hoi: HOI, dung: 'Hình này là hình tam giác.', sai: ['Hình này là hình vuông.', 'Hình này là hình tròn.'], amDung: A + 'tn-tamgiac.mp3' },
            { hinh: 'img/h-chunhat.webp', hoi: HOI, dung: 'Hình này là hình chữ nhật.', sai: ['Hình này là hình vuông.', 'Hình này là hình tam giác.'], amDung: A + 'tn-chunhat.mp3' },
            { hinh: 'img/h-tron.webp', hoi: HOI, dung: 'Hình này là hình tròn.', sai: ['Hình này là hình tam giác.', 'Hình này là hình vuông.'], amDung: A + 'tn-tron.mp3' }
          ]
        },
        Object.assign({
          id: 'tn3', so: 3, loai: 'nghe-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn3-lenh.mp3',
          caBai: MAU_SON.diem.map((d, i) => ({ am: d.am, c: d.tu, d: i }))
        }, MAU_SON)
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [49, 50],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-tranh.webp', moTa: 'My, cái bàn tròn màu xanh, cái ghế màu đỏ, cái tủ màu vàng và Mai',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai, nhắc lại hội thoại',
          goiY: 'Chọn “Đóng vai”, rồi chọn Mai hoặc My. Đến lượt em, em nói to lời của bạn ấy.',
          hinh: 'img/ht-tranh.webp', moTa: 'My, cái bàn tròn màu xanh, cái ghế màu đỏ, cái tủ màu vàng và Mai',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht3', so: 3, loai: 'hoi-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Bạn hỏi, em nhìn hình rồi chọn câu trả lời đúng.',
          mau: { nv: 'img/mau-ban.webp', nvTen: 'Hai bạn', cau: [
            { c: 'Hình này là hình gì?', am: A + 'tn2-hoi.mp3' },
            { c: 'Hình này là hình tròn.', am: null },
            { c: 'Hình tròn màu gì?', am: null },
            { c: 'Hình tròn màu đỏ.', am: null }
          ] },
          cau: [
            { hinh: 'img/h-tron.webp', hoi: HOI, dung: 'Hình này là hình tròn.', sai: ['Hình này là hình vuông.', 'Hình này là hình tam giác.'] },
            { hinh: 'img/h-tron.webp', hoi: 'Hình tròn màu gì?', dung: 'Hình tròn màu đỏ.', sai: ['Hình tròn màu xanh.', 'Hình tròn màu vàng.'] },
            { hinh: 'img/h-tamgiac.webp', hoi: HOI, dung: 'Hình này là hình tam giác.', sai: ['Hình này là hình tròn.', 'Hình này là hình chữ nhật.'] },
            { hinh: 'img/h-tamgiac.webp', hoi: 'Hình tam giác màu gì?', dung: 'Hình tam giác màu vàng.', sai: ['Hình tam giác màu đỏ.', 'Hình tam giác màu tím.'] },
            { hinh: 'img/h-chunhat.webp', hoi: HOI, dung: 'Hình này là hình chữ nhật.', sai: ['Hình này là hình vuông.', 'Hình này là hình tròn.'] },
            { hinh: 'img/h-chunhat.webp', hoi: 'Hình chữ nhật màu gì?', dung: 'Hình chữ nhật màu xanh.', sai: ['Hình chữ nhật màu đen.', 'Hình chữ nhật màu đỏ.'] },
            { hinh: 'img/h-vuong.webp', hoi: HOI, dung: 'Hình này là hình vuông.', sai: ['Hình này là hình chữ nhật.', 'Hình này là hình tam giác.'] },
            { hinh: 'img/h-vuong.webp', hoi: 'Hình vuông màu gì?', dung: 'Hình vuông màu tím.', sai: ['Hình vuông màu vàng.', 'Hình vuông màu trắng.'] }
          ]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [50, 51],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'chon-cau', lenh: 'Các vật sau có hình gì?',
          goiY: 'Nhìn từng vật, chọn hình đúng rồi nói to.',
          cau: [
            vat('img/v-mattroi.webp', 'hình tròn'),
            vat('img/v-hopqua.webp', 'hình vuông', 'hình chữ nhật'),
            vat('img/v-bongbay.webp', 'hình tròn'),
            vat('img/v-tivi.webp', 'hình vuông', 'hình chữ nhật'),
            vat('img/v-mu.webp', 'hình tam giác'),
            vat('img/v-vo.webp', 'hình chữ nhật', 'hình vuông'),
            vat('img/v-duahau.webp', 'hình tam giác'),
            vat('img/v-chanh.webp', 'hình tròn'),
            vat('img/v-keo.webp', 'hình tròn')
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'chon-cau', lenh: 'Đố em: Có mấy hình vuông? Mấy hình tam giác? Mấy hình chữ nhật? Mấy hình tròn?',
          goiY: 'Em đếm các hình trong tranh rồi chọn câu trả lời đúng.',
          cau: [
            dem('img/dem1-nha.webp', 'Có mấy hình tròn?', 2, 'hình tròn'),
            dem('img/dem1-nha.webp', 'Có mấy hình tam giác?', 2, 'hình tam giác'),
            dem('img/dem1-nha.webp', 'Có mấy hình chữ nhật?', 1, 'hình chữ nhật'),
            dem('img/dem2-xe.webp', 'Có mấy hình tam giác?', 3, 'hình tam giác'),
            dem('img/dem3-thuyen.webp', 'Có mấy hình vuông?', 1, 'hình vuông'),
            dem('img/dem3-thuyen.webp', 'Có mấy hình tam giác?', 6, 'hình tam giác'),
            dem('img/dem4-nguoi.webp', 'Có mấy hình tròn?', 1, 'hình tròn'),
            dem('img/dem4-nguoi.webp', 'Có mấy hình tam giác?', 5, 'hình tam giác'),
            dem('img/dem4-nguoi.webp', 'Có mấy hình chữ nhật?', 3, 'hình chữ nhật')
          ]
        },
        {
          id: 'tvv3', so: 3, loai: 'hoc-hat', lenh: 'Học hát: Bài hát hình học (Du Trần)',
          baiHat: 'Bài hát hình học', tacGia: 'Du Trần', youtube: 'whvYOBgBcOk'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [52],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'Ng', thuong: 'ng', am: A + 'hc-ng.mp3' },
            { hoa: 'Ngh', thuong: 'ngh', am: A + 'hc-ngh.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['ng', 'ngh'],
          cau: ['Ngân nghỉ hè ở nhà ngoại.', 'Bé Nga ngồi nghe mẹ hát.', 'Ngọc ngắm nghía bức hình.', 'Nghị thích môn nghệ thuật.']
        }
      ]
    }
  ]
};
