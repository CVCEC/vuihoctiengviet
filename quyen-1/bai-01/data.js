/* Quyển 1 – Bài 1: Đây là ai?  (sách trang 5–7)
   Toạ độ điểm chạm tính theo % của hình: [trái, trên, rộng, cao] */
const GD_NAM = {
  hinh: 'img/gd-nam.webp', co: [1100, 846], moTa: 'Gia đình Nam: chị, bố, mẹ và Nam',
  diem: [
    { tu: 'chị', am: 'audio/tn-chi.mp3', nhan: [4.5, 6.5, 15, 13], nguoi: [7, 27, 26, 73] },
    { tu: 'bố',  am: 'audio/tn-bo.mp3',  nhan: [25.5, 4.5, 15, 11.5], nguoi: [38, 5, 24, 42] },
    { tu: 'mẹ',  am: 'audio/tn-me.mp3',  nhan: [82, 3, 15.5, 11], nguoi: [66, 17, 29, 83] },
    { tu: 'Nam', am: 'audio/tn-nam.mp3', nhan: [55, 55, 15.5, 12], nguoi: [34, 48, 25, 52], toi: true, z: 1 }
  ]
};
const GD_MAI = {
  hinh: 'img/gd-mai.webp', co: [1200, 714], moTa: 'Gia đình Mai: Mai, má, ba, anh và em',
  diem: [
    { tu: 'Mai', am: 'audio/ht-mai.mp3', nhan: [1.5, 29, 13.5, 13], nguoi: [12, 47, 18, 53], toi: true, z: 1 },
    { tu: 'má',  am: 'audio/ht-ma.mp3',  nhan: [13, 4, 13, 12.5], nguoi: [30, 13, 20, 87] },
    { tu: 'ba',  am: 'audio/ht-ba.mp3',  nhan: [62, 2, 11.5, 12], nguoi: [48, 3, 22, 55] },
    { tu: 'anh', am: 'audio/ht-anh.mp3', nhan: [87, 9.5, 12.5, 12], nguoi: [70, 10, 25, 90] },
    { tu: 'em',  am: 'audio/ht-em.mp3',  nhan: [70.5, 71, 13.5, 13], nguoi: [54, 60, 17, 40], z: 2 }
  ]
};

const BAI_HOC = {
  quyen: 1, bai: 1, ten: 'Đây là ai?', chuDe: 'Gia đình', chu: 'a, ă, â',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [5],
      bt: [
        Object.assign({
          id: 'tn1', so: 1, loai: 'nghe-hinh', lenh: 'Nhìn hình, nghe và nhắc lại',
          mau: { nv: 'img/nam-chi.webp', nvTen: 'Nam', cau: [
            { c: 'Đây là ai?', am: 'audio/tn-m1.mp3' },
            { c: 'Đây là Nam.', am: 'audio/tn-m2.mp3' },
            { c: 'Đây là ai?', am: 'audio/tn-m3.mp3' },
            { c: 'Đây là mẹ Nam.', am: 'audio/tn-m4.mp3' }
          ] }
        }, GD_NAM),
        {
          id: 'tn2', so: 2, loai: 'gioi-thieu', lenh: 'Đóng vai Nam, giới thiệu gia đình',
          goiY: 'Em là Nam. Chạm vào từng người trong tranh và giới thiệu: “Đây là … tôi.”',
          nguon: GD_NAM,
          mau: { cau: [ { c: 'Đây là tôi.', am: null }, { c: 'Đây là mẹ tôi.', am: null } ] },
          amCau: {}
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [5, 6],
      bt: [
        Object.assign({
          id: 'ht1', so: 1, loai: 'nghe-hinh', lenh: 'Nhìn hình, nghe và nhắc lại',
          mau: { nv: 'img/mai-chi.webp', nvTen: 'Mai', cau: [
            { c: 'Đây là ai?', am: 'audio/ht-m1.mp3' },
            { c: 'Đây là Mai.', am: 'audio/ht-m2.mp3' },
            { c: 'Đây là ai?', am: 'audio/ht-m3.mp3' },
            { c: 'Đây là ba Mai.', am: 'audio/ht-m4.mp3' }
          ] }
        }, GD_MAI),
        {
          id: 'ht2', so: 2, loai: 'hoi-dap', lenh: 'Đóng vai, hỏi đáp về gia đình Mai',
          goiY: 'Em là Mai. Bạn chỉ vào một người và hỏi, em chọn câu trả lời đúng.',
          nguon: GD_MAI,
          hoi: { c: 'Đây là ai?', am: 'audio/ht-m1.mp3', av: 'img/ban-trai.webp' },
          dap: { ten: 'Mai', av: 'img/ban-gai.webp' },
          mau: [
            [ { c: 'Đây là ai?', am: 'audio/ht-m1.mp3' }, { c: 'Đây là tôi.', am: null } ],
            [ { c: 'Đây là ai?', am: 'audio/ht-m3.mp3' }, { c: 'Đây là má tôi.', am: null } ]
          ],
          amCau: {}
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [6],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'dan-nhan', lenh: 'Hỏi đáp về ảnh (hình) gia đình em',
          hinh: 'img/gd-em.webp', moTa: 'Ảnh một gia đình đi dạo trong rừng',
          nhan: ['tôi', 'bố', 'mẹ', 'ba', 'má', 'anh', 'chị', 'em']
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Cả nhà thương nhau (Phan Văn Minh)',
          baiHat: 'Cả nhà thương nhau', tacGia: 'Phan Văn Minh', youtube: 'maPjEZjdX38'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [7],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu',
          chu: [
            { hoa: 'A', thuong: 'a', am: 'audio/hc-a.mp3' },
            { hoa: 'Ă', thuong: 'ă', am: 'audio/hc-aw.mp3' },
            { hoa: 'Â', thuong: 'â', am: 'audio/hc-aa.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['a', 'ă', 'â'],
          cau: ['Đây là ai?', 'Đây là ba tôi.', 'Đây là má tôi.', 'Em bé ăn bột.']
        }
      ]
    }
  ]
};
