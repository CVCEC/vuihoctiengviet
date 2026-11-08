/* Quyển 1 – Bài 3: Em làm gì đó?  (sách trang 13–17) */
const A = 'audio/', H = 'img/';
// Sáu hoạt động ở Từ ngữ (thứ tự như sách và như bản thu âm)
const HOAT_DONG = [
  { hinh: H + 'tn-1.webp', tu: 'chơi', am: A + 'tn-choi.mp3' },
  { hinh: H + 'tn-2.webp', tu: 'hát', am: A + 'tn-hat.mp3' },
  { hinh: H + 'tn-3.webp', tu: 'xem ti vi', am: A + 'tn-xem-ti-vi.mp3' },
  { hinh: H + 'tn-4.webp', tu: 'ăn cơm', am: A + 'tn-an-com.mp3' },
  { hinh: H + 'tn-5.webp', tu: 'rửa bát (chén)', am: A + 'tn-rua-bat.mp3' },
  { hinh: H + 'tn-6.webp', tu: 'đi học', am: A + 'tn-di-hoc.mp3' }
];
const doan = (k, sai) => {
  const t = HOAT_DONG[k];
  return { hinh: t.hinh, hoi: 'Làm gì đó?', dung: t.tu, sai: sai.map(j => HOAT_DONG[j].tu), amDung: t.am };
};
const HOI_EM = { c: 'Em làm gì đó?', am: A + 'ht-5.mp3' };

const BAI_HOC = {
  quyen: 1, bai: 3, ten: 'Em làm gì đó?', chuDe: 'Gia đình', chu: 'd, đ', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [13],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh.mp3',
          cot: 3, the: HOAT_DONG
        },
        {
          id: 'tn2', so: 2, loai: 'chon-cau', lenh: 'Chỉ vào hình ở bài tập 1, đố nhau', tronCau: true,
          goiY: 'Mẫu: – Nam làm gì đó? – Nam chơi. Bạn chỉ vào một hình và đố, em chọn câu trả lời đúng rồi nói to.',
          cau: [doan(0, [1, 5]), doan(1, [3, 2]), doan(2, [0, 4]), doan(3, [5, 1]), doan(4, [2, 3]), doan(5, [4, 0])]
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [14, 15],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht-lenh.mp3',
          hinh: H + 'ht-canh.webp', moTa: 'Nam ngồi học, chị Liên rửa bát, Mai đến cùng anh Dũng',
          vai: { 'Mai': { av: H + 'av-mai.webp' }, 'Nam': { av: H + 'av-nam.webp' }, 'Dũng': { av: H + 'av-dung.webp' } },
          loi: [
            { ai: 'Mai', c: 'Chào Nam!', am: A + 'ht-1.mp3' },
            { ai: 'Nam', c: 'Chào Mai!', am: A + 'ht-2.mp3' },
            { ai: 'Mai', c: 'Đây là anh Dũng.', am: A + 'ht-3.mp3' },
            { ai: 'Nam', c: 'Em chào anh.', am: A + 'ht-4.mp3' },
            { ai: 'Dũng', c: 'Em làm gì đó?', am: A + 'ht-5.mp3' },
            { ai: 'Nam', c: 'Em học ạ.', am: A + 'ht-6.mp3' },
            { ai: 'Mai', c: 'Chị Liên làm gì đó, Nam?', am: A + 'ht-7.mp3' },
            { ai: 'Nam', c: 'Chị Liên rửa bát.', am: A + 'ht-8.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'chon-cau', lenh: 'Đóng vai, nhắc lại hội thoại trên',
          goiY: 'Em đóng vai Nam. Nghe Mai và anh Dũng nói, rồi chọn lời của Nam và nói thật to.',
          cau: [
            { hinh: H + 'av-mai.webp', hoi: { c: 'Mai: Chào Nam!', am: A + 'ht-1.mp3' }, dung: 'Chào Mai!', sai: ['Chào Nam!', 'Em chào anh.'], amDung: A + 'ht-2.mp3' },
            { hinh: H + 'av-mai.webp', hoi: { c: 'Mai: Đây là anh Dũng.', am: A + 'ht-3.mp3' }, dung: 'Em chào anh.', sai: ['Chào Mai!', 'Em học ạ.'], amDung: A + 'ht-4.mp3' },
            { hinh: H + 'av-dung.webp', hoi: { c: 'Dũng: Em làm gì đó?', am: A + 'ht-5.mp3' }, dung: 'Em học ạ.', sai: ['Em chào anh.', 'Chị Liên rửa bát.'], amDung: A + 'ht-6.mp3' },
            { hinh: H + 'av-mai.webp', hoi: { c: 'Mai: Chị Liên làm gì đó, Nam?', am: A + 'ht-7.mp3' }, dung: 'Chị Liên rửa bát.', sai: ['Em học ạ.', 'Chào Mai!'], amDung: A + 'ht-8.mp3' }
          ],
          khen: 'Giỏi lắm! Em đã đóng vai Nam.'
        },
        {
          id: 'ht3', so: 3, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Mẫu: – Em làm gì đó? – Em rửa bát ạ. Người có dấu “?” hỏi, em là bạn nhỏ trong hình: chọn câu trả lời rồi nói to.',
          cau: [
            { hinh: H + 'ht3-1.webp', hoi: HOI_EM, dung: 'Em chơi ạ.', sai: ['Em học ạ.', 'Em hát ạ.'] },
            { hinh: H + 'ht3-2.webp', hoi: HOI_EM, dung: 'Em học ạ.', sai: ['Em chơi ạ.', 'Em ăn cơm ạ.'], amDung: A + 'ht-6.mp3' },
            { hinh: H + 'ht3-3.webp', hoi: HOI_EM, dung: 'Em xem ti vi ạ.', sai: ['Em đi học ạ.', 'Em hát ạ.'] },
            { hinh: H + 'ht3-4.webp', hoi: HOI_EM, dung: 'Em ăn cơm ạ.', sai: ['Em xem ti vi ạ.', 'Em rửa bát ạ.'] },
            { hinh: H + 'ht3-5.webp', hoi: HOI_EM, dung: 'Em hát ạ.', sai: ['Em chơi ạ.', 'Em học ạ.'] },
            { hinh: H + 'ht3-6.webp', hoi: HOI_EM, dung: 'Em đi học ạ.', sai: ['Em ăn cơm ạ.', 'Em xem ti vi ạ.'] }
          ]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [16, 17],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'tranh-thoai', lenh: 'Đóng vai, chào nhau',
          troChoi: 'Trò chơi: Chọn lời chào', goiYChoi: 'Bạn nhỏ chào thế nào? Chọn câu đúng.',
          tranh: [
            { hinh: H + 'tvv1-1.webp', a: { c: 'Cháu chào ông ạ.', am: A + 'chao-ong.mp3', sai: ['Em chào ông.', 'Con chào ông ạ.'] }, b: { c: 'Chào cháu.', am: A + 'chao-chau.mp3' } },
            { hinh: H + 'tvv1-2.webp', a: { c: 'Cháu chào ông ạ.', am: A + 'chao-ong.mp3', sai: ['Em chào ông.', 'Cháu chào bà ạ.'] }, b: { c: 'Chào cháu.', am: A + 'chao-chau.mp3' } },
            { hinh: H + 'tvv1-3.webp', a: { c: 'Em chào chị.', am: null, sai: ['Cháu chào chị ạ.', 'Em chào anh.'] }, b: { c: 'Chào em.', am: A + 'tvv-1b.mp3' } },
            { hinh: H + 'tvv1-4.webp', a: { c: 'Em chào chị.', am: null, sai: ['Con chào chị ạ.', 'Chào em.'] }, b: { c: 'Chào em.', am: A + 'tvv-1b.mp3' } }
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'tranh-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tvv-lenh.mp3',
          troChoi: 'Trò chơi: Chọn lời chào', goiYChoi: 'Học sinh chào thầy cô thế nào? Chọn câu đúng.',
          tranh: [
            { hinh: H + 'tvv2-1.webp', a: { c: 'Em chào cô ạ!', am: A + 'tvv-1a.mp3', sai: ['Cháu chào cô ạ!', 'Em chào thầy ạ!'] }, b: { c: 'Chào em.', am: A + 'tvv-1b.mp3' } },
            { hinh: H + 'tvv2-2.webp', a: { c: 'Chúng em chào thầy ạ!', am: A + 'tvv-2a.mp3', sai: ['Chúng em chào cô ạ!', 'Chào các em.'] }, b: { c: 'Chào các em.', am: A + 'tvv-2b.mp3' } }
          ]
        },
        {
          id: 'tvv3', so: 3, loai: 'hoc-hat', lenh: 'Học hát: Lời chào buổi sáng (Nguyễn Thị Nhung)',
          baiHat: 'Lời chào buổi sáng', tacGia: 'Nguyễn Thị Nhung', youtube: '-6q7CyaaOE4'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [17],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'D', thuong: 'd', am: A + 'hc-d.mp3' },
            { hoa: 'Đ', thuong: 'đ', am: A + 'hc-dd.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['d', 'đ'],
          cau: ['Anh Dũng làm gì đó?', 'Mai và dì Đào đi chợ.']
        }
      ]
    }
  ]
};
