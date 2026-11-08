/* Quyển 1 – Bài 8: Cây cam có mấy quả?  (sách trang 32–35)
   Toạ độ điểm chạm tính theo % của hình: [trái, trên, rộng, cao] */
const A = 'audio/';
const SO = ['một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín', 'mười'];
const AM_SO = n => A + 'so-' + n + '.mp3';
const NHAN = n => n + ' (' + SO[n - 1] + ')';   // "6 (sáu)" như trong sách

// Từ ngữ 2: con khỉ và các bộ phận – thứ tự theo bản ghi âm (đầu, đuôi, bụng, chân, tay, tai)
const KHI = {
  hinh: 'img/khi.webp', co: [1100, 798], moTa: 'Con khỉ cầm quả chuối, đu trên cành cây, có ghi tên các bộ phận',
  diem: [
    { tu: 'đầu', am: A + 'tn-dau.mp3', nhan: [63.5, 0.5, 11, 8.5], nguoi: [43, 10, 21, 15] },
    { tu: 'đuôi', am: A + 'tn-duoi.mp3', nhan: [2, 50.5, 12, 9.5], nguoi: [22, 54, 15, 26] },
    { tu: 'bụng', am: A + 'tn-bung.mp3', nhan: [83.5, 40.5, 15, 9.5], nguoi: [44, 50, 15, 18] },
    { tu: 'chân', am: A + 'tn-chan.mp3', nhan: [61.5, 86, 14, 9.5], nguoi: [46, 74, 13, 26] },
    { tu: 'tay', am: A + 'tn-tay.mp3', nhan: [14.5, 29.5, 11, 9], nguoi: [25, 22, 14, 27] },
    { tu: 'tai', am: A + 'tn-tai.mp3', nhan: [70, 19, 11, 9], nguoi: [59, 26, 8, 12], z: 2 }
  ]
};

const BAI_HOC = {
  quyen: 1, bai: 8, ten: 'Cây cam có mấy quả?', chuDe: 'Thiên nhiên', chu: 'k, kh', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [32],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và đếm', amLenh: A + 'tn1-lenh.mp3',
          goiY: 'Chạm vào từng thẻ để nghe. Em đếm số bông hoa rồi nói to số đó.',
          tenChoi: 'Trò chơi: Nghe và chọn số hoa', goiYChoi: 'Nghe số, rồi chạm vào thẻ có đúng chừng ấy bông hoa.', anChu: true,
          khen: 'Giỏi quá! Em đã đếm đúng từ 1 đến 10.',
          the: SO.map((_, i) => ({ hinh: 'img/hoa-' + (i + 1) + '.webp', tu: NHAN(i + 1), am: AM_SO(i + 1) }))
        },
        Object.assign({
          id: 'tn2', so: 2, loai: 'nghe-hinh-vat', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn2-lenh.mp3',
          goiY: 'Chạm vào từng bộ phận của con khỉ (hoặc chữ) để nghe. Nghe xong, em nhắc lại thật to.',
          tenChoi: 'Trò chơi: Chỉ đúng bộ phận', goiYChoi: 'Nghe và chạm vào đúng bộ phận của con khỉ.',
          khen: 'Giỏi quá! Em đã chỉ đúng các bộ phận của con khỉ.',
          caBai: KHI.diem.map((d, i) => ({ am: d.am, c: d.tu, d: i }))
        }, KHI)
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [33],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'tranh-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht-lenh.mp3',
          troChoi: 'Trò chơi: Chọn câu hỏi', goiYChoi: 'Đọc câu trả lời. Bạn đã hỏi thế nào? Chọn câu hỏi đúng.',
          tranh: [
            { hinh: 'img/ht-p1.webp', a: { c: 'Đây là cây gì?', am: A + 'p1a.mp3', sai: ['Cây cam có mấy quả?', 'Đây là con gì?'] }, b: { c: 'Đây là cây cam.', am: A + 'p1b.mp3' } },
            { hinh: 'img/ht-p2.webp', a: { c: 'Cây cam có mấy quả?', am: A + 'p2a.mp3', sai: ['Đây là cây gì?', 'Con cua có mấy chân?'] }, b: { c: 'Cây cam có 10 quả.', am: A + 'p2b.mp3' } },
            { hinh: 'img/ht-p3.webp', a: { c: 'Mai có 6 bông hoa, phải không?', am: A + 'p3a.mp3', sai: ['Mai có 8 bông hoa, phải không?', 'Mai có mấy bông hoa?'] }, b: { c: 'Phải. Tôi có 6 bông hoa.', am: A + 'p3b.mp3' } },
            { hinh: 'img/ht-p4.webp', a: { c: 'Con cua có 8 chân, phải không?', am: A + 'p4a.mp3', sai: ['Con cua có 10 chân, phải không?', 'Con cua có mấy chân?'] }, b: { c: 'Không phải. Con cua có 10 chân.', am: A + 'p4b.mp3' } }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'chon-cau', lenh: 'Chỉ vào hình, hỏi đáp',
          goiY: 'Bạn chỉ vào hình và hỏi. Em đếm rồi chọn câu trả lời đúng. Hai câu đầu là mẫu trong sách.',
          khen: 'Giỏi quá! Em đã trả lời đúng hết.',
          cau: [
            { hinh: 'img/khi.webp', hoi: 'Con khỉ có mấy tai?', dung: 'Con khỉ có 2 tai.', sai: ['Con khỉ có 4 tai.', 'Con khỉ có 1 tai.'] },
            { hinh: 'img/khi.webp', hoi: 'Con khỉ có 4 tai, phải không?', dung: 'Không phải. Con khỉ có 2 tai.', sai: ['Phải. Con khỉ có 4 tai.', 'Không phải. Con khỉ có 4 tai.'] },
            { hinh: 'img/khi.webp', hoi: 'Con khỉ có 2 tay, phải không?', dung: 'Phải. Con khỉ có 2 tay.', sai: ['Không phải. Con khỉ có 2 tay.', 'Phải. Con khỉ có 4 tay.'] },
            { hinh: 'img/ht-p4.webp', hoi: 'Con cua có mấy chân?', dung: 'Con cua có 10 chân.', sai: ['Con cua có 8 chân.', 'Con cua có 6 chân.'] },
            { hinh: 'img/ht-p2.webp', hoi: 'Cây cam có 8 quả, phải không?', dung: 'Không phải. Cây cam có 10 quả.', sai: ['Phải. Cây cam có 8 quả.', 'Không phải. Cây cam có 8 quả.'] },
            { hinh: 'img/ht-p3.webp', hoi: 'Có mấy bông hoa?', dung: 'Có 6 bông hoa.', sai: ['Có 5 bông hoa.', 'Có 7 bông hoa.'] }
          ]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [34, 35],
      bt: [
        {
          id: 'tvv1a', so: 1, loai: 'the-hinh', lenh: 'Đố em – Chỉ vào hình, đếm.',
          goiY: 'Chạm vào từng số để nghe, rồi đếm to theo: một, hai, ba… mười.',
          tenChoi: 'Trò chơi: Nghe và chọn số', goiYChoi: 'Nghe số, rồi chạm vào số đúng.', anChu: true,
          khen: 'Giỏi quá! Em đã biết các số từ 1 đến 10.',
          the: SO.map((tu, i) => ({ hinh: 'img/so-' + (i + 1) + '.webp', tu, am: AM_SO(i + 1) }))
        },
        {
          id: 'tvv1b', so: 1, loai: 'chon-cau', lenh: 'Đố em – Có mấy…? Đếm nhanh.',
          goiY: 'Em đếm rồi chọn số đúng. Nói to cả câu, ví dụ: “Có năm con mèo.”',
          khen: 'Giỏi quá! Em đếm rất giỏi.',
          cau: [
            ['do-meo', 'Có mấy con mèo?', 5, [4, 6]], ['do-ga', 'Có mấy con gà?', 6, [5, 7]],
            ['do-tao', 'Có mấy quả táo?', 3, [2, 4]], ['do-tho', 'Con thỏ có mấy chân?', 4, [2, 6]],
            ['dem-cay', 'Đếm nhanh.', 9, [8, 10]], ['dem-ca', 'Đếm nhanh.', 10, [9, 8]],
            ['dem-sao', 'Đếm nhanh.', 8, [7, 9]], ['dem-buom', 'Đếm nhanh.', 10, [8, 9]]
          ].map(([f, hoi, n, sai]) => ({ hinh: 'img/' + f + '.webp', hoi, dung: NHAN(n), sai: sai.map(NHAN), amDung: AM_SO(n) }))
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Quả (tiếp theo) (Xanh Xanh)',
          baiHat: 'Quả (tiếp theo)', tacGia: 'Xanh Xanh', youtube: 'g1QXSvOqcTM'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [35],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'K', thuong: 'k', am: A + 'hc-k.mp3' },
            { hoa: 'Kh', thuong: 'kh', am: A + 'hc-kh.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['k', 'kh'],
          cau: ['Kia là cây khế.', 'Con khỉ có đuôi.']
        }
      ]
    }
  ]
};
