/* Quyển 1 – Bài 2: Con chào mẹ ạ.  (sách trang 8–12)
   Toạ độ điểm chạm tính theo % của hình: [trái, trên, rộng, cao] */
const A = 'audio/';
const HO_NOI = {
  hinh: 'img/gd-noi.webp', co: [1100, 832], moTa: 'Họ nội của Nam: bác, chú, thím, cô, ông, bà và cháu',
  diem: [
    { tu: 'bác', am: A + 't1-bac.mp3', nhan: [1, 3.5, 11.5, 8], nguoi: [4, 9, 18, 91] },
    { tu: 'chú', am: A + 't1-chu.mp3', nhan: [42.5, 2.5, 10.5, 9], nguoi: [30, 7, 20, 22] },
    { tu: 'thím', am: A + 't1-thim.mp3', nhan: [65.5, 2.5, 10.5, 9], nguoi: [52, 8, 20, 24] },
    { tu: 'cô', am: A + 't1-co.mp3', nhan: [87, 2.5, 11, 9], nguoi: [73, 10, 19, 90] },
    { tu: 'ông', am: A + 't1-ong.mp3', nhan: [13.5, 57.5, 11, 8], nguoi: [25, 27, 21, 73] },
    { tu: 'bà', am: A + 't1-ba.mp3', nhan: [74.5, 57.5, 11, 8], nguoi: [58, 30, 15, 70] },
    { tu: 'cháu', am: A + 't1-chau.mp3', nhan: [64, 83.5, 12, 8], nguoi: [45, 57, 13, 43], z: 2 }
  ]
};
const HO_NGOAI = {
  hinh: 'img/gd-ngoai.webp', co: [1100, 802], moTa: 'Họ ngoại của Nam: dượng, dì, mợ, cậu, ông, bà và cháu',
  diem: [
    { tu: 'dượng', am: A + 't2-duong.mp3', nhan: [1, 3, 15, 8], nguoi: [8, 9, 21, 32] },
    { tu: 'dì', am: A + 't2-di.mp3', nhan: [41, 3, 10, 8], nguoi: [30, 13, 17, 22] },
    { tu: 'mợ', am: A + 't2-mo.mp3', nhan: [64.5, 3, 11, 8], nguoi: [53, 10, 19, 30] },
    { tu: 'cậu', am: A + 't2-cau.mp3', nhan: [84, 3, 12, 8], nguoi: [72, 11, 18, 40] },
    { tu: 'ông', am: A + 't2-ong.mp3', nhan: [18, 33, 11, 8], nguoi: [25, 30, 24, 70] },
    { tu: 'bà', am: A + 't2-ba.mp3', nhan: [77.5, 47, 11, 8], nguoi: [54, 36, 24, 64] },
    { tu: 'cháu', am: A + 't2-chau.mp3', nhan: [1, 59, 13, 8], nguoi: [9, 41, 16, 59], z: 1 }
  ]
};
// Tranh không có chữ (phần Hội thoại) – bạn nhỏ là người nói, không tính là người được chào
const CHAO_NGOAI = {
  hinh: 'img/chao-ngoai.webp', co: [1100, 786], moTa: 'Họ ngoại: dượng, dì, mợ, cậu, ông, bà và bạn nhỏ',
  diem: [
    { tu: 'dượng', am: A + 't2-duong.mp3', nguoi: [6, 1, 22, 38] },
    { tu: 'dì', am: A + 't2-di.mp3', nguoi: [29, 4, 18, 24] },
    { tu: 'mợ', am: A + 't2-mo.mp3', nguoi: [53, 3, 20, 28] },
    { tu: 'cậu', am: A + 't2-cau.mp3', nguoi: [77, 4, 19, 66] },
    { tu: 'ông', am: A + 't2-ong.mp3', nguoi: [22, 25, 30, 75] },
    { tu: 'bà', am: A + 't2-ba.mp3', nguoi: [55, 29, 25, 71] }
  ]
};
const CHAO_NOI = {
  hinh: 'img/chao-noi.webp', co: [1100, 814], moTa: 'Họ nội: bác, chú, thím, cô, ông, bà và bạn nhỏ',
  diem: [
    { tu: 'bác', am: A + 't1-bac.mp3', nguoi: [10, 3, 16, 97] },
    { tu: 'chú', am: A + 't1-chu.mp3', nguoi: [32, 2, 20, 23] },
    { tu: 'thím', am: A + 't1-thim.mp3', nguoi: [55, 4, 19, 26] },
    { tu: 'cô', am: A + 't1-co.mp3', nguoi: [76, 5, 18, 95] },
    { tu: 'ông', am: A + 't1-ong.mp3', nguoi: [27, 24, 20, 76] },
    { tu: 'bà', am: A + 't1-ba.mp3', nguoi: [62, 28, 13, 72] }
  ]
};
const CHAO_CHAU = { c: 'Chào cháu.', am: A + 'p2b.mp3' };

const BAI_HOC = {
  quyen: 1, bai: 2, ten: 'Con chào mẹ ạ.', chuDe: 'Gia đình', chu: 'b, c, ch', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [8, 9],
      bt: [
        Object.assign({
          id: 'tn1a', so: 1, loai: 'nghe-hinh', lenh: 'Nhìn hình, nghe và nhắc lại – Tranh 1: họ nội', amLenh: A + 'tn-lenh.mp3',
          nv: { hinh: 'img/bo-chi.webp', ten: 'bố Nam', loi: 'Bố Nam giới thiệu họ nội.' },
          caBai: HO_NOI.diem.map((d, i) => ({ am: d.am, c: d.tu, d: i }))
        }, HO_NOI),
        Object.assign({
          id: 'tn1b', so: 1, loai: 'nghe-hinh', lenh: 'Nhìn hình, nghe và nhắc lại – Tranh 2: họ ngoại', amLenh: A + 'tn-lenh.mp3',
          nv: { hinh: 'img/me-chi.webp', ten: 'mẹ Nam', loi: 'Mẹ Nam giới thiệu họ ngoại.' },
          caBai: HO_NGOAI.diem.map((d, i) => ({ am: d.am, c: d.tu, d: i }))
        }, HO_NGOAI),
        {
          id: 'tn2', so: 2, loai: 'xung-ho', lenh: 'Chỉ hình, nói đúng',
          goiY: 'Nam nói chuyện với từng người thì xưng là gì? Chạm vào người đó rồi chọn từ đúng.',
          giua: { ten: 'Nam', hinh: 'img/p-nam.webp' }, chon: ['con', 'cháu', 'em'], mau: 0,
          nguoi: [
            { tu: 'mẹ', hinh: 'img/p-me.webp', dung: 'con' },
            { tu: 'ông ngoại', hinh: 'img/p-ong-ngoai.webp', dung: 'cháu' },
            { tu: 'bố', hinh: 'img/p-bo.webp', dung: 'con' },
            { tu: 'bà nội', hinh: 'img/p-ba-noi.webp', dung: 'cháu' },
            { tu: 'chú', hinh: 'img/p-chu.webp', dung: 'cháu', am: A + 't1-chu.mp3' },
            { tu: 'chị', hinh: 'img/p-chi.webp', dung: 'em' }
          ]
        },
        {
          id: 'tn3', so: 3, loai: 'xung-ho', lenh: 'Đố em chọn đúng từ',
          goiY: 'Mai nói chuyện với từng người thì xưng là gì? Chạm vào người đó rồi chọn từ đúng.',
          giua: { ten: 'Mai', hinh: 'img/p-mai.webp' }, chon: ['con', 'cháu', 'em', 'chị'],
          nguoi: [
            { tu: 'má', hinh: 'img/p-ma.webp', dung: 'con' },
            { tu: 'ông nội', hinh: 'img/p-ong-noi.webp', dung: 'cháu' },
            { tu: 'dì', hinh: 'img/p-di.webp', dung: 'cháu', am: A + 't2-di.mp3' },
            { tu: 'cậu', hinh: 'img/p-cau.webp', dung: 'cháu', am: A + 't2-cau.mp3' },
            { tu: 'anh', hinh: 'img/p-anh.webp', dung: 'em' },
            { tu: 'em', hinh: 'img/p-em.webp', dung: 'chị' }
          ]
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [10, 11],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'tranh-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht-lenh.mp3',
          troChoi: 'Trò chơi: Chọn lời chào', goiYChoi: 'Bạn nhỏ sẽ chào thế nào? Chọn câu đúng.',
          tranh: [
            { hinh: 'img/ht-p1.webp', a: { c: 'Con chào mẹ ạ.', am: A + 'p1a.mp3', sai: ['Cháu chào mẹ ạ.', 'Em chào mẹ.'] }, b: { c: 'Chào con.', am: A + 'p1b.mp3' } },
            { hinh: 'img/ht-p2.webp', a: { c: 'Cháu chào ông ạ.', am: A + 'p2a.mp3', sai: ['Em chào ông.', 'Cháu chào bà ạ.'] }, b: { c: 'Chào cháu.', am: A + 'p2b.mp3' } },
            { hinh: 'img/ht-p3.webp', a: { c: 'Con chào ba ạ.', am: A + 'p3a.mp3', sai: ['Cháu chào ba ạ.', 'Em chào ba.'] }, b: { c: 'Chào con.', am: A + 'p3b.mp3' } },
            { hinh: 'img/ht-p4.webp', a: { c: 'Em chào anh.', am: A + 'p4a.mp3', sai: ['Cháu chào anh ạ.', 'Em chào chị.'] }, b: { c: 'Chào em.', am: A + 'p4b.mp3' } }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'gioi-thieu', lenh: 'Chỉ vào hình, nói lời chào',
          goiY: 'Em là bạn nhỏ áo nâu. Chạm vào từng người và nói lời chào.',
          nguon: CHAO_NGOAI, mauCau: 'Cháu chào {tu} ạ.', goiYTu: true,
          traLoi: CHAO_CHAU, amCau: { 'Cháu chào ông ạ.': A + 'p2a.mp3' },
          mau: { cau: [{ c: 'Cháu chào bà ạ.', am: null }, { c: 'Chào cháu.', am: A + 'p2b.mp3' }] },
          xong: 'Giỏi lắm! Em đã chào cả nhà.', ghiAm: 'Ghi âm lời chào của em'
        },
        {
          id: 'ht3', so: 3, loai: 'hoi-dap', lenh: 'Đóng vai, nói lời chào',
          goiY: 'Em là bạn nhỏ áo kẻ. Chọn lời chào người được khoanh vàng.',
          nguon: CHAO_NOI, mauCau: 'Cháu chào {tu} ạ.', mauSai: ['Em chào {tu}.'], goiYTu: true,
          dap: { ten: 'cháu', av: 'img/chau-noi.webp' }, traLoi: CHAO_CHAU
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [11, 12],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'ai-nhanh', lenh: 'Ai đúng, ai nhanh?',
          ban: { av: 'img/tvv-trai.webp' }, em: { av: 'img/tvv-gai.webp' },
          mau: ['Đây là dì tôi.', 'Cháu chào dì ạ.'],
          amCau: { 'Cháu chào ông ạ.': A + 'p2a.mp3', 'Em chào anh.': A + 'p4a.mp3' },
          nguoi: [
            { tu: 'ông', hinh: 'img/p-ong-ngoai.webp', dung: 'Cháu chào ông ạ.', sai: ['Em chào ông.', 'Cháu chào bà ạ.'] },
            { tu: 'bà', hinh: 'img/p-ba-noi.webp', dung: 'Cháu chào bà ạ.', sai: ['Em chào bà.', 'Cháu chào ông ạ.'] },
            { tu: 'chú', hinh: 'img/p-chu.webp', dung: 'Cháu chào chú ạ.', sai: ['Em chào chú.', 'Cháu chào cô ạ.'] },
            { tu: 'dì', hinh: 'img/p-di.webp', dung: 'Cháu chào dì ạ.', sai: ['Em chào dì.', 'Cháu chào cậu ạ.'] },
            { tu: 'cậu', hinh: 'img/p-cau.webp', dung: 'Cháu chào cậu ạ.', sai: ['Em chào cậu.', 'Cháu chào dì ạ.'] },
            { tu: 'anh', hinh: 'img/p-anh.webp', dung: 'Em chào anh.', sai: ['Cháu chào anh ạ.', 'Em chào chị.'] },
            { tu: 'chị', hinh: 'img/p-chi.webp', dung: 'Em chào chị.', sai: ['Cháu chào chị ạ.', 'Em chào anh.'] }
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Cháu yêu bà (Xuân Giao)',
          baiHat: 'Cháu yêu bà', tacGia: 'Xuân Giao', youtube: '9cobWNfDus8'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [12],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'B', thuong: 'b', am: A + 'hc-b.mp3' },
            { hoa: 'C', thuong: 'c', am: A + 'hc-c.mp3' },
            { hoa: 'Ch', thuong: 'ch', am: A + 'hc-ch.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['b', 'c', 'ch'],
          cau: ['Cháu chào bà ạ.', 'Con chào bố ạ.', 'Em chào chị.']
        }
      ]
    }
  ]
};
