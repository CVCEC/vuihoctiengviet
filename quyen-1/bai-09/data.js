/* Quyển 1 – Bài 9: Con hổ đang làm gì?  (sách trang 36–39)
   Toạ độ điểm chạm tính theo % của hình: [trái, trên, rộng, cao] */
const A = 'audio/';
// Từ ngữ 2: mặt con khỉ – thứ tự theo bản ghi âm (mặt, miệng, răng, mắt, mũi)
const MAT_KHI = {
  hinh: 'img/mat-khi.webp', co: [1100, 645], moTa: 'Mặt con khỉ, có ghi tên: mặt, mũi, mắt, miệng, răng',
  diem: [
    { tu: 'mặt', am: A + 'tn-mat-nang.mp3', nhan: [17, 12.7, 12, 11.3], nguoi: [32, 34, 40, 60] },
    { tu: 'miệng', am: A + 'tn-mieng.mp3', nhan: [4, 57.9, 16, 11.8], nguoi: [44, 71, 20, 17], z: 2 },
    { tu: 'răng', am: A + 'tn-rang.mp3', nhan: [79, 59.4, 16, 10.8], nguoi: [49, 71, 12, 7], z: 3 },
    { tu: 'mắt', am: A + 'tn-mat-sac.mp3', nhan: [78, 35.3, 12, 10.8], nguoi: [58, 47.6, 12, 18.5], z: 2 },
    { tu: 'mũi', am: A + 'tn-mui.mp3', nhan: [55, 1.4, 12, 10.3], nguoi: [50, 60, 11, 10.3], z: 2 }
  ]
};
const VAI = { 'Bà': { av: 'img/av-ba.webp', mau: '#7B4FB5' }, 'My': { av: 'img/av-my.webp', mau: '#B7791F' } };
const LOI = [
  { ai: 'Bà', c: 'Bà đố My, đây là con gì?', am: A + 'l1.mp3' },
  { ai: 'My', c: 'Đây là con hổ ạ.', am: A + 'l2.mp3' },
  { ai: 'Bà', c: 'Đúng rồi! Con hổ đang làm gì?', am: A + 'l3.mp3' },
  { ai: 'My', c: 'Con hổ đang ngủ.', am: A + 'l4.mp3' },
  { ai: 'Bà', c: 'Kia là con gì?', am: A + 'l5.mp3' },
  { ai: 'My', c: 'Kia là con voi ạ.', am: A + 'l6.mp3' },
  { ai: 'Bà', c: 'Con voi đang chạy à?', am: A + 'l7.mp3' },
  { ai: 'My', c: 'Không ạ. Con voi đang đứng.', am: A + 'l8.mp3' },
  { ai: 'Bà', c: 'Con voi có một cái vòi. Đấy là mũi con voi.', am: A + 'l9.mp3' }
];
const LENH_TVV1 = 'Tô màu tranh con mèo. Hỏi đáp theo mẫu';

const BAI_HOC = {
  quyen: 1, bai: 9, ten: 'Con hổ đang làm gì?', chuDe: 'Thiên nhiên', chu: 'l, m', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [36],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn1-lenh.mp3',
          danhSo: true, anChu: true, khen: 'Giỏi quá! Em đã chọn đúng hết.',
          the: [
            { hinh: 'img/the-di.webp', tu: 'đi', am: A + 'tn-di.mp3' },
            { hinh: 'img/the-chay.webp', tu: 'chạy', am: A + 'tn-chay.mp3' },
            { hinh: 'img/the-dung.webp', tu: 'đứng', am: A + 'tn-dung.mp3' },
            { hinh: 'img/the-nam.webp', tu: 'nằm', am: A + 'tn-nam.mp3' },
            { hinh: 'img/the-ngu.webp', tu: 'ngủ', am: A + 'tn-ngu.mp3' }
          ]
        },
        Object.assign({
          id: 'tn2', so: 2, loai: 'nghe-hinh-vat', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn2-lenh.mp3',
          goiY: 'Chạm vào từng chỗ trên mặt con khỉ (hoặc chữ) để nghe. Nghe xong, em nhắc lại thật to.',
          tenChoi: 'Trò chơi: Chỉ đúng chỗ', goiYChoi: 'Nghe và chạm vào đúng chỗ trên mặt con khỉ.',
          khen: 'Giỏi quá! Em đã chỉ đúng mặt, mũi, mắt, miệng, răng.',
          caBai: MAT_KHI.diem.map((d, i) => ({ am: d.am, c: d.tu, d: i }))
        }, MAT_KHI)
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [37, 38],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht1-lenh.mp3',
          hinh: 'img/ht-tranh.webp', moTa: 'Bà và My ở vườn thú: con hổ nằm ngủ, con voi đứng trong chuồng',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai bà và My, nhắc lại hội thoại',
          goiY: 'Chọn “Đóng vai”, rồi chọn Bà hoặc My. Đến lượt em, em nói to lời của vai mình.',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht3', so: 3, loai: 'tranh-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht3-lenh.mp3',
          troChoi: 'Trò chơi: Chọn câu hỏi', goiYChoi: 'Đọc câu trả lời. Bạn đã hỏi thế nào? Chọn câu hỏi đúng.',
          tranh: [
            { hinh: 'img/ht-p1.webp', a: { c: 'Con ngựa đang làm gì?', am: A + 'p1a.mp3', sai: ['Con mèo đang làm gì?', 'Con ngựa thế nào?'] }, b: { c: 'Con ngựa đang chạy.', am: A + 'p1b.mp3' } },
            { hinh: 'img/ht-p2.webp', a: { c: 'Con mèo đang làm gì?', am: A + 'p2a.mp3', sai: ['Con chó đang làm gì?', 'Con mèo thế nào?'] }, b: { c: 'Con mèo đang đi.', am: A + 'p2b.mp3' } },
            { hinh: 'img/ht-p3.webp', a: { c: 'Con voi đang làm gì?', am: A + 'p3a.mp3', sai: ['Con hổ đang làm gì?', 'Con voi thế nào?'] }, b: { c: 'Con voi đang ăn.', am: A + 'p3b.mp3' } },
            { hinh: 'img/ht-p4.webp', a: { c: 'Con hổ đang làm gì?', am: A + 'p4a.mp3', sai: ['Con voi đang làm gì?', 'Kia là con gì?'] }, b: { c: 'Con hổ đang nằm.', am: A + 'p4b.mp3' } },
            { hinh: 'img/ht-p5.webp', a: { c: 'Con chó đang làm gì?', am: A + 'p5a.mp3', sai: ['Con ngựa đang làm gì?', 'Đây là con gì?'] }, b: { c: 'Con chó đang ngủ.', am: A + 'p5b.mp3' } }
          ]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [38, 39],
      bt: [
        {
          id: 'tvv1a', so: 1, loai: 'to-mau-tranh', lenh: LENH_TVV1 + ' – Tô màu',
          goiY: 'Chọn màu, rồi chạm vào từng vùng để tô con mèo của em.',
          hinh: 'img/meo-to-mau.webp', can: 5
        },
        {
          id: 'tvv1b', so: 1, loai: 'chon-cau', lenh: LENH_TVV1 + ' – Hỏi đáp',
          goiY: 'Bạn hỏi về con mèo, em chọn câu trả lời đúng rồi nói to. Hai câu đầu là mẫu trong sách.',
          khen: 'Giỏi quá! Em đã hỏi đáp về con mèo.',
          cau: [
            { hinh: 'img/meo-to-mau.webp', hoi: 'Đây là con gì?', dung: 'Đây là con mèo.', sai: ['Đây là con hổ.', 'Đây là con chó.'] },
            { hinh: 'img/meo-to-mau.webp', hoi: 'Con mèo có mấy tai?', dung: 'Con mèo có hai tai.', sai: ['Con mèo có một tai.', 'Con mèo có bốn tai.'] },
            { hinh: 'img/meo-to-mau.webp', hoi: 'Con mèo có mấy mắt?', dung: 'Con mèo có hai mắt.', sai: ['Con mèo có một mắt.', 'Con mèo có ba mắt.'] },
            { hinh: 'img/meo-to-mau.webp', hoi: 'Con mèo có mấy chân?', dung: 'Con mèo có bốn chân.', sai: ['Con mèo có hai chân.', 'Con mèo có sáu chân.'] }
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Con vỏi con voi (Nguyễn Xuân Khoát)',
          baiHat: 'Con vỏi con voi', tacGia: 'Nguyễn Xuân Khoát', youtube: 'TDlfGintHmk'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [39],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'L', thuong: 'l', am: A + 'hc-l.mp3' },
            { hoa: 'M', thuong: 'm', am: A + 'hc-m.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['l', 'm'],
          cau: ['Con mèo đang làm gì?', 'Con mèo đang nằm.']
        }
      ]
    }
  ]
};
