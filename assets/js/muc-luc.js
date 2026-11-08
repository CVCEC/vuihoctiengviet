/* Mục lục 2 quyển – "san: true" là bài đã có bản tương tác */
const MUC_LUC = [
  {
    quyen: 1, ten: 'Quyển 1', moTa: 'Nghe – nói, làm quen mặt chữ', mau: '#4C7BD9',
    chuong: [
      { ten: 'Gia đình', bai: [
        { so: 1, ten: 'Đây là ai?', chu: 'a, ă, â', san: true },
        { so: 2, ten: 'Con chào mẹ ạ.', chu: 'b, c, ch' },
        { so: 3, ten: 'Em làm gì đó?', chu: 'd, đ' },
        { so: 4, ten: 'Bố mẹ em thế nào?', chu: 'e, ê' },
        { so: 5, ten: 'Ôn tập', on: true } ] },
      { ten: 'Thiên nhiên', bai: [
        { so: 6, ten: 'Kia là con gì?', chu: 'g, gh, gi' },
        { so: 7, ten: 'Kia là cây cam, phải không?', chu: 'h, i, y' },
        { so: 8, ten: 'Cây cam có mấy quả?', chu: 'k, kh' },
        { so: 9, ten: 'Con hổ đang làm gì?', chu: 'l, m' },
        { so: 10, ten: 'Ôn tập', on: true } ] },
      { ten: 'Trường lớp', bai: [
        { so: 11, ten: 'Em có biết vẽ không?', chu: 'n, nh' },
        { so: 12, ten: 'Hình này là hình gì?', chu: 'ng, ngh' },
        { so: 13, ten: 'Cái ghế này có nặng không?', chu: 'o, ô, ơ' },
        { so: 14, ten: 'Hôm nay là thứ mấy?', chu: 'u, ư' },
        { so: 15, ten: 'Ôn tập', on: true } ] },
      { ten: 'Cộng đồng', bai: [
        { so: 16, ten: 'Cô ấy làm nghề gì?', chu: 'p, qu' },
        { so: 17, ten: 'Trường em ở đâu?', chu: 'r, t' },
        { so: 18, ten: 'Cậu thích mặc áo màu gì?', chu: 'th, tr' },
        { so: 19, ten: 'Xe nào nhanh hơn?', chu: 's, x, v' },
        { so: 20, ten: 'Ôn tập', on: true } ] }
    ]
  },
  {
    quyen: 2, ten: 'Quyển 2', moTa: 'Luyện nói, bắt đầu đọc – viết', mau: '#3E9B5F',
    chuong: [
      { ten: 'Gia đình', bai: [
        { so: 1, ten: 'Đây là em họ của em à?', chu: 'a, ă, â, c' },
        { so: 2, ten: 'Ai chăm nhất nhà?', chu: 'o, ô, ơ, d, đ' },
        { so: 3, ten: 'Trong phòng khách có gì?', chu: 'i, ia, u, ua' },
        { so: 4, ten: 'Con rửa rau giúp mẹ được không?', chu: 'm, n, ư, ưa' },
        { so: 5, ten: 'Ôn tập và học chữ', chu: 'e, ê, l, y, b', on: true } ] },
      { ten: 'Thiên nhiên', bai: [
        { so: 6, ten: 'Hôm nay thời tiết thế nào?', chu: 'h, ch, nh, k, kh' },
        { so: 7, ten: 'Bạn thích đi du lịch chứ?', chu: 'g, gh, gi, ng, ngh' },
        { so: 8, ten: 'Anh đã đi vịnh Hạ Long chưa?', chu: 'p, ph, t, qu, th' },
        { so: 9, ten: 'Hè này bạn sẽ đi đâu?', chu: 'r, tr, v, s, x' },
        { so: 10, ten: 'Ôn tập và học chữ', chu: 'am – ap', on: true } ] },
      { ten: 'Trường lớp', bai: [
        { so: 11, ten: 'Bây giờ là mấy giờ?', chu: 'an – at' },
        { so: 12, ten: 'Các em vào lớp nhé!', chu: 'ang – ac' },
        { so: 13, ten: 'Các em đừng hái hoa nhé!', chu: 'anh – ach' },
        { so: 14, ten: 'Giờ nghỉ, cậu thường làm gì?', chu: 'ai – ay' },
        { so: 15, ten: 'Ôn tập và học chữ', chu: 'ao – au', on: true } ] },
      { ten: 'Cộng đồng', bai: [
        { so: 16, ten: 'Em đến trường bằng gì?', chu: 'oa – uê' },
        { so: 17, ten: 'Bác cho cháu hỏi, siêu thị ở đâu ạ?', chu: 'oan – oat, oam – oăm' },
        { so: 18, ten: 'Bạn là người nước nào?', chu: 'oang – oac, oanh – oach' },
        { so: 19, ten: 'Cháu bị làm sao?', chu: 'oai – oay' },
        { so: 20, ten: 'Ôn tập', on: true } ] }
    ]
  }
];
