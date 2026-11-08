/* Quyển 1 – Bài 11: Em có biết vẽ không?  (sách trang 44–47) */
const A = 'audio/';
const VAI = { 'Mai': { av: 'img/av-mai.webp', mau: '#E0577A' }, 'Nam': { av: 'img/av-nam.webp', mau: '#3C78C8' } };
const LOI = [
  { ai: 'Mai', c: 'Nam ơi, cậu có biết bơi không?', am: A + 'l1.mp3' },
  { ai: 'Nam', c: 'Có, tớ biết.', am: A + 'l2.mp3' },
  { ai: 'Mai', c: 'Cậu có biết vẽ không?', am: A + 'l3.mp3' },
  { ai: 'Nam', c: 'Có. Tớ thích vẽ lắm. Cậu có biết vẽ không?', am: A + 'l4.mp3' },
  { ai: 'Mai', c: 'Tớ không biết vẽ, cũng không biết bơi.', am: A + 'l5.mp3' },
  { ai: 'Nam', c: 'Cậu biết làm gì?', am: A + 'l6.mp3' },
  { ai: 'Mai', c: 'Tớ biết hát. Tớ thích đọc sách và hát.', am: A + 'l7.mp3' }
];

const BAI_HOC = {
  quyen: 1, bai: 11, ten: 'Em có biết vẽ không?', chuDe: 'Trường lớp', chu: 'n, nh', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [44, 45],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn1-lenh.mp3', danhSo: true, cot: 3,
          the: [
            { hinh: 'img/t-doc.webp', tu: 'đọc', am: A + 'tn-doc.mp3' },
            { hinh: 'img/t-viet.webp', tu: 'viết', am: A + 'tn-viet.mp3' },
            { hinh: 'img/t-hat.webp', tu: 'hát', am: A + 'tn-hat.mp3' },
            { hinh: 'img/t-mua.webp', tu: 'múa', am: A + 'tn-mua.mp3' },
            { hinh: 'img/t-ve.webp', tu: 'vẽ', am: A + 'tn-ve.mp3' },
            { hinh: 'img/t-boi.webp', tu: 'bơi', am: A + 'tn-boi.mp3' }
          ]
        },
        {
          id: 'tn2', so: 2, loai: 'chon-cau', lenh: 'Nghe, chỉ vào hình và trả lời', amLenh: A + 'tn2-lenh.mp3',
          goiY: 'Nghe câu hỏi, nhìn hình rồi chọn câu trả lời đúng. Em nói to câu trả lời nhé.',
          cau: [
            { hinh: 'img/h1-lien.webp', hoi: { c: 'Chị Liên đang làm gì?', am: A + 'q1.mp3' }, dung: 'Chị Liên đang hát.', sai: ['Chị Liên đang múa.', 'Chị Liên đang bơi.'] },
            { hinh: 'img/h2-dung.webp', hoi: { c: 'Anh Dũng đang làm gì?', am: A + 'q2.mp3' }, dung: 'Anh Dũng đang bơi.', sai: ['Anh Dũng đang vẽ.', 'Anh Dũng đang hát.'] },
            { hinh: 'img/h3-hoang.webp', hoi: { c: 'Em Hoàng đang làm gì?', am: A + 'q3.mp3' }, dung: 'Em Hoàng đang viết.', sai: ['Em Hoàng đang bơi.', 'Em Hoàng đang hát.'] },
            { hinh: 'img/h4-ban.webp', hoi: { c: 'Các bạn ấy đang làm gì?', am: A + 'q4.mp3' }, dung: 'Các bạn ấy đang múa.', sai: ['Các bạn ấy đang bơi.', 'Các bạn ấy đang vẽ.'] },
            { hinh: 'img/h5-chi.webp', hoi: { c: 'Các chị ấy đang làm gì?', am: A + 'q5.mp3' }, dung: 'Các chị ấy đang vẽ.', sai: ['Các chị ấy đang múa.', 'Các chị ấy đang bơi.'] },
            { hinh: 'img/h6-tung.webp', hoi: { c: 'Em Tùng đang làm gì?', am: A + 'q6.mp3' }, dung: 'Em Tùng đang đọc.', sai: ['Em Tùng đang hát.', 'Em Tùng đang bơi.'] }
          ]
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [45, 46],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-tranh.webp', moTa: 'Mai và Nam nói chuyện trong lớp, các bạn đứng phía sau',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai, nhắc lại hội thoại',
          goiY: 'Chọn “Đóng vai”, rồi chọn Mai hoặc Nam. Đến lượt em, em nói to lời của bạn ấy.',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht3', so: 3, loai: 'hoi-co-khong', lenh: 'Nhìn hình ở bài tập 1 phần Từ ngữ, hỏi đáp theo mẫu',
          goiY: 'Bạn hỏi em. Em biết (thích) thì chọn “Có”, không biết (không thích) thì chọn “Không”, rồi nói to câu trả lời.',
          mau: { nv: 'img/mau-ban.webp', nvTen: 'Hai bạn', cau: [
            { c: 'Cậu có biết vẽ không?', am: A + 'l3.mp3' },
            { c: 'Có (Không). Tớ biết (không biết) vẽ.', am: null },
            { c: 'Cậu có thích múa không?', am: null },
            { c: 'Có (Không). Tớ thích (không thích) múa.', am: null }
          ] },
          cau: [
            { hinh: 'img/t-doc.webp', hoi: 'Cậu có biết đọc không?', co: 'Có. Tớ biết đọc.', khong: 'Không. Tớ không biết đọc.' },
            { hinh: 'img/t-viet.webp', hoi: 'Cậu có thích viết không?', co: 'Có. Tớ thích viết.', khong: 'Không. Tớ không thích viết.' },
            { hinh: 'img/t-hat.webp', hoi: 'Cậu có biết hát không?', co: 'Có. Tớ biết hát.', khong: 'Không. Tớ không biết hát.' },
            { hinh: 'img/t-mua.webp', hoi: 'Cậu có thích múa không?', co: 'Có. Tớ thích múa.', khong: 'Không. Tớ không thích múa.' },
            { hinh: 'img/t-ve.webp', hoi: { c: 'Cậu có biết vẽ không?', am: A + 'l3.mp3' }, co: 'Có. Tớ biết vẽ.', khong: 'Không. Tớ không biết vẽ.' },
            { hinh: 'img/t-boi.webp', hoi: 'Cậu có thích bơi không?', co: 'Có. Tớ thích bơi.', khong: 'Không. Tớ không thích bơi.' }
          ]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [46, 47],
      bt: [
        {
          id: 'tvv1a', so: 1, loai: 'to-mau-tranh', lenh: 'Hãy tô màu bức tranh sau.',
          hinh: 'img/to-mau.webp', can: 6, goiY: 'Chọn màu, rồi chạm vào từng vùng trong tranh để tô.'
        },
        {
          id: 'tvv1b', so: 1, loai: 'chon-cau', lenh: 'Cho biết các con vật đang làm gì',
          goiY: 'Nhìn từng con vật trong tranh, chọn câu đúng rồi nói to.',
          cau: [
            { hinh: 'img/cv-tho.webp', hoi: 'Con thỏ đang làm gì?', dung: 'Con thỏ đang ăn.', sai: ['Con thỏ đang bơi.', 'Con thỏ đang vẽ.'] },
            { hinh: 'img/cv-meo.webp', hoi: 'Con mèo đang làm gì?', dung: 'Con mèo đang hát.', sai: ['Con mèo đang ngủ.', 'Con mèo đang bơi.'] },
            { hinh: 'img/cv-gau.webp', hoi: 'Con gấu đang làm gì?', dung: 'Con gấu đang đọc sách.', sai: ['Con gấu đang múa.', 'Con gấu đang bơi.'] },
            { hinh: 'img/cv-vit.webp', hoi: 'Con vịt đang làm gì?', dung: 'Con vịt đang bơi.', sai: ['Con vịt đang hát.', 'Con vịt đang đọc sách.'] },
            { hinh: 'img/cv-soc.webp', hoi: 'Con sóc đang làm gì?', dung: 'Con sóc đang múa.', sai: ['Con sóc đang ngủ.', 'Con sóc đang bơi.'] }
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Kìa con bướm vàng (Lời tiếng Việt: Vũ Trọng Phương)',
          baiHat: 'Kìa con bướm vàng', tacGia: 'Lời tiếng Việt: Vũ Trọng Phương', youtube: 'lSD6IsQRBUQ'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [47],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'N', thuong: 'n', am: A + 'hc-n.mp3' },
            { hoa: 'Nh', thuong: 'nh', am: A + 'hc-nh.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['n', 'nh'],
          cau: ['Con cua có nhiều chân.', 'Chị Nhung bơi rất nhanh.']
        }
      ]
    }
  ]
};
