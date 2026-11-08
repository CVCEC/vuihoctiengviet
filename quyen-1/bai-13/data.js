/* Quyển 1 – Bài 13: Cái ghế này có nặng không?  (sách trang 53–57) */
const A = 'audio/';
const VAI = { 'Liên': { av: 'img/av-lien.webp', mau: '#E0577A' }, 'Nam': { av: 'img/av-nam.webp', mau: '#3C78C8' } };
const LOI = [
  { ai: 'Liên', c: 'Cái bàn và cái ghế này thế nào?', am: A + 'l01.mp3' },
  { ai: 'Nam', c: 'Bàn cao, ghế thấp.', am: A + 'l02.mp3' },
  { ai: 'Liên', c: 'Cái bàn kia có cao không?', am: A + 'l03.mp3' },
  { ai: 'Nam', c: 'Không. Cái bàn ấy thấp.', am: A + 'l04.mp3' },
  { ai: 'Liên', c: 'Cái ghế kia thế nào?', am: A + 'l05.mp3' },
  { ai: 'Nam', c: 'Cái ghế kia dài quá.', am: A + 'l06.mp3' },
  { ai: 'Liên', c: 'Cái bàn này có nặng không?', am: A + 'l07.mp3' },
  { ai: 'Nam', c: 'Có, cái bàn này rất nặng.', am: A + 'l08.mp3' },
  { ai: 'Liên', c: 'Cái ghế này có nặng không?', am: A + 'l09.mp3' },
  { ai: 'Nam', c: 'Không, cái ghế này không nặng. Cái ghế này nhẹ.', am: A + 'l10.mp3' },
  { ai: 'Liên', c: 'Cái tủ kia có to không?', am: A + 'l11.mp3' },
  { ai: 'Nam', c: 'Có. Cái tủ ấy to quá.', am: A + 'l12.mp3' }
];
const SO = ['Mười một', 'Mười hai', 'Mười ba', 'Mười bốn', 'Mười lăm', 'Mười sáu', 'Mười bảy', 'Mười tám', 'Mười chín', 'Hai mươi']
  .map((chu, i) => ({ so: 11 + i, chu, am: A + 'so-' + (11 + i) + '.mp3' }));

const BAI_HOC = {
  quyen: 1, bai: 13, ten: 'Cái ghế này có nặng không?', chuDe: 'Trường lớp', chu: 'o, ô, ơ', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [53, 54],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn1-lenh.mp3', danhSo: true, cot: 3,
          the: [
            { hinh: 'img/t-sach.webp', tu: 'quyển sách', am: A + 'tn-sach.mp3' },
            { hinh: 'img/t-giuong.webp', tu: 'cái giường', am: A + 'tn-giuong.mp3' },
            { hinh: 'img/t-vo.webp', tu: 'quyển vở', am: A + 'tn-vo.mp3' },
            { hinh: 'img/t-keo.webp', tu: 'cái kéo', am: A + 'tn-keo.mp3' },
            { hinh: 'img/t-hopbut.webp', tu: 'cái hộp bút', am: A + 'tn-hopbut.mp3' },
            { hinh: 'img/t-balo.webp', tu: 'cái ba lô', am: A + 'tn-balo.mp3' }
          ]
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn2-lenh.mp3', cot: 2, anChu: true,
          goiY: 'Chạm vào từng hình để nghe câu. Nghe xong, em nhắc lại thật to.',
          the: [
            { hinh: 'img/s-tao.webp', tu: 'quả táo to', cau: 'Quả táo to.', am: A + 'c-tao.mp3' },
            { hinh: 'img/s-nho.webp', tu: 'quả nho nhỏ', cau: 'Quả nho nhỏ.', am: A + 'c-nho.mp3' },
            { hinh: 'img/s-dua.webp', tu: 'cây dừa cao', cau: 'Cây dừa cao.', am: A + 'c-dua.mp3' },
            { hinh: 'img/s-chuoi.webp', tu: 'cây chuối thấp', cau: 'Cây chuối thấp.', am: A + 'c-chuoi.mp3' },
            { hinh: 'img/s-balo.webp', tu: 'ba lô nặng', cau: 'Ba lô nặng.', am: A + 'c-balo.mp3' },
            { hinh: 'img/s-hopbut.webp', tu: 'hộp bút nhẹ', cau: 'Hộp bút nhẹ.', am: A + 'c-hopbut.mp3' },
            { hinh: 'img/s-ghedai.webp', tu: 'cái ghế này dài', cau: 'Cái ghế này dài.', am: A + 'c-ghedai.mp3' },
            { hinh: 'img/s-ghengan.webp', tu: 'cái ghế kia ngắn', cau: 'Cái ghế kia ngắn.', am: A + 'c-ghengan.mp3' }
          ]
        },
        {
          id: 'tn3', so: 3, loai: 'bang-so', lenh: 'Nghe các số sau và nhắc lại', amLenh: A + 'tn3-lenh.mp3',
          la: 'img/la.webp', bang: SO
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [54, 55],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-tranh.webp', moTa: 'Nam lau bàn, Liên lau cửa sổ; trong phòng có cái tủ, cái ghế, cái bàn và ghế dài',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai, nhắc lại hội thoại',
          goiY: 'Chọn “Đóng vai”, rồi chọn Liên hoặc Nam. Đến lượt em, em nói to lời của bạn ấy.',
          hinh: 'img/ht-tranh.webp', moTa: 'Nam lau bàn, Liên lau cửa sổ; trong phòng có cái tủ, cái ghế, cái bàn và ghế dài',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht3', so: 3, loai: 'hoi-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu câu đã học',
          goiY: 'Bạn hỏi, em nhìn hình rồi chọn câu trả lời đúng.',
          mau: { nv: 'img/mau-ban.webp', nvTen: 'Hai bạn', cau: [
            { c: 'Cái bàn này thế nào?', am: null },
            { c: 'Cái bàn này thấp.', am: null },
            { c: 'Cái bàn này cao, phải không?', am: null },
            { c: 'Phải (Không phải). Cái bàn này cao (thấp).', am: null }
          ] },
          cau: [
            { hinh: 'img/m-bandai.webp', hoi: 'Cái bàn này thế nào?', dung: 'Cái bàn này dài.', sai: ['Cái bàn này ngắn.', 'Cái bàn này nhẹ.'] },
            { hinh: 'img/m-banngan.webp', hoi: 'Cái bàn này dài, phải không?', dung: 'Không phải. Cái bàn này ngắn.', sai: ['Phải. Cái bàn này dài.', 'Không phải. Cái bàn này dài.'] },
            { hinh: 'img/m-ghego.webp', hoi: 'Cái ghế này nặng, phải không?', dung: 'Phải. Cái ghế này nặng.', sai: ['Không phải. Cái ghế này nhẹ.', 'Phải. Cái ghế này nhẹ.'] },
            { hinh: 'img/m-ghenhua.webp', hoi: 'Cái ghế này thế nào?', dung: 'Cái ghế này nhẹ.', sai: ['Cái ghế này nặng.', 'Cái ghế này dài.'] },
            { hinh: 'img/m-voi.webp', hoi: 'Con voi này thế nào?', dung: 'Con voi này to.', sai: ['Con voi này nhỏ.', 'Con voi này thấp.'] },
            { hinh: 'img/m-tho.webp', hoi: 'Con thỏ này to, phải không?', dung: 'Không phải. Con thỏ này nhỏ.', sai: ['Phải. Con thỏ này to.', 'Không phải. Con thỏ này to.'] },
            { hinh: 'img/m-dua.webp', hoi: 'Cây dừa này cao, phải không?', dung: 'Phải. Cây dừa này cao.', sai: ['Không phải. Cây dừa này thấp.', 'Phải. Cây dừa này thấp.'] },
            { hinh: 'img/m-dua2.webp', hoi: 'Cây dứa này thế nào?', dung: 'Cây dứa này thấp.', sai: ['Cây dứa này cao.', 'Cây dứa này dài.'] }
          ]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [56, 57],
      bt: [
        {
          id: 'tvv1a', so: 1, loai: 'to-mau-tranh', lenh: 'Tô màu, gọi tên 5 vật trong bức tranh',
          hinh: 'img/to-mau.webp', can: 5, goiY: 'Chọn màu, rồi chạm vào từng vùng trong tranh để tô. Tô xong, em chỉ và gọi tên các vật.'
        },
        {
          id: 'tvv1b', so: 1, loai: 'chon-cau', lenh: 'Tô màu, gọi tên 5 vật trong bức tranh',
          goiY: 'Gọi tên 5 vật trong bức tranh: chọn tên đúng rồi nói to.',
          cau: [
            { hinh: 'img/o-tu.webp', hoi: 'Đây là cái gì?', dung: 'cái tủ', sai: ['cái giường', 'cái bàn'] },
            { hinh: 'img/o-ghe.webp', hoi: 'Đây là cái gì?', dung: 'cái ghế', sai: ['cái bàn', 'cái tủ'] },
            { hinh: 'img/o-giuong.webp', hoi: 'Đây là cái gì?', dung: 'cái giường', sai: ['cái ghế', 'cái tủ'], amDung: A + 'tn-giuong.mp3' },
            { hinh: 'img/o-ban.webp', hoi: 'Đây là cái gì?', dung: 'cái bàn', sai: ['cái ghế', 'cái giường'] },
            { hinh: 'img/o-keo.webp', hoi: 'Đây là cái gì?', dung: 'cái kéo', sai: ['cái hộp bút', 'cái bàn'], amDung: A + 'tn-keo.mp3' }
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Hộp bút chì màu (Nguyễn Tín Nghĩa)',
          baiHat: 'Hộp bút chì màu', tacGia: 'Nguyễn Tín Nghĩa', youtube: 'FTVbag6Wd5Y'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [57],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'O', thuong: 'o', am: A + 'hc-o.mp3' },
            { hoa: 'Ô', thuong: 'ô', am: A + 'hc-oo.mp3' },
            { hoa: 'Ơ', thuong: 'ơ', am: A + 'hc-ow.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['o', 'ô', 'ơ'],
          cau: ['con bò, lá cờ, con voi', 'Cô Thơ có cái ô tô to.']
        }
      ]
    }
  ]
};
