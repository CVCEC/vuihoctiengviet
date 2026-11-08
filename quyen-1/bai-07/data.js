/* Quyển 1 – Bài 7: Kia là cây cam, phải không?  (sách trang 28–31) */
const A = 'audio/';
// 12 thẻ (Từ ngữ 1) – thứ tự như sách và như bản ghi âm
const THE = [
  ['cam', 'cam'], ['na', 'na'], ['bưởi', 'buoi'], ['táo', 'tao'], ['chuối', 'chuoi'], ['dứa', 'dua-sac'],
  ['dừa', 'dua-huyen'], ['mít', 'mit'], ['khế', 'khe'], ['lá', 'la'], ['hoa', 'hoa'], ['quả', 'qua']
];
const AM = {}, HINH = {};
THE.forEach(([tu, f]) => { AM[tu] = A + 'tn-' + f + '.mp3'; HINH[tu] = 'img/the-' + f + '.webp'; });
const VAI = { 'Mai': { av: 'img/av-mai.webp', mau: '#E0577A' }, 'Nam': { av: 'img/av-nam.webp', mau: '#3C78C8' } };
// Tiếng Việt vui 1: [hình, cây được hỏi, câu đúng, 2 câu sai] – hai câu đầu là mẫu trong sách
const HOI_PHAI = [
  ['mít', 'mít', 'Phải. Đây là cây mít.', ['Không phải. Đây là cây mít.', 'Phải. Đây là cây dừa.']],
  ['chuối', 'dừa', 'Không phải. Đây là cây chuối.', ['Phải. Đây là cây dừa.', 'Không phải. Đây là cây dừa.']],
  ['cam', 'cam', 'Phải. Đây là cây cam.', ['Không phải. Đây là cây cam.', 'Phải. Đây là cây bưởi.']],
  ['bưởi', 'táo', 'Không phải. Đây là cây bưởi.', ['Phải. Đây là cây táo.', 'Không phải. Đây là cây táo.']],
  ['khế', 'khế', 'Phải. Đây là cây khế.', ['Không phải. Đây là cây khế.', 'Phải. Đây là cây na.']],
  ['dứa', 'na', 'Không phải. Đây là cây dứa.', ['Phải. Đây là cây na.', 'Không phải. Đây là cây na.']]
];

const BAI_HOC = {
  quyen: 1, bai: 7, ten: 'Kia là cây cam, phải không?', chuDe: 'Thiên nhiên', chu: 'h, i, y', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [28],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh.mp3',
          danhSo: true, anChu: true, khen: 'Giỏi quá! Em đã nghe và chọn đúng hết.',
          the: THE.map(([tu]) => ({ hinh: HINH[tu], tu, am: AM[tu] }))
        },
        {
          id: 'tn2', so: 2, loai: 'chon-cau', lenh: 'Chỉ vào hình trên, đố tên cây và bộ phận của cây', tronCau: true,
          goiY: 'Nhìn hình và đoán: đây là cây gì, hay bộ phận nào của cây (lá, hoa, quả)? Chọn tên đúng.',
          khen: 'Giỏi quá! Em đã biết tên các cây và bộ phận của cây.',
          cau: [
            ['cam', ['bưởi', 'táo']], ['na', ['mít', 'khế']], ['bưởi', ['cam', 'dừa']], ['táo', ['cam', 'na']],
            ['chuối', ['dừa', 'dứa']], ['dứa', ['dừa', 'mít']], ['dừa', ['dứa', 'bưởi']], ['mít', ['na', 'dứa']],
            ['khế', ['chuối', 'táo']]
          ].map(([tu, sai]) => ({ hinh: HINH[tu], hoi: 'Đây là cây gì?', dung: tu, sai, amDung: AM[tu] }))
            .concat([['lá', ['hoa', 'quả']], ['hoa', ['lá', 'quả']], ['quả', ['lá', 'hoa']]]
              .map(([tu, sai]) => ({ hinh: HINH[tu], hoi: 'Đây là gì?', dung: tu, sai, amDung: AM[tu] })))
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [29],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'tranh-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht-lenh.mp3',
          troChoi: 'Trò chơi: Chọn câu hỏi', goiYChoi: 'Đọc câu trả lời. Bạn đã hỏi thế nào? Chọn câu hỏi đúng.',
          tranh: [
            { hinh: 'img/ht-p1.webp', a: { c: 'Đây là quả gì?', am: A + 'p1a.mp3', sai: ['Đây là con gì?', 'Kia là cây cam, phải không?'] }, b: { c: 'Đây là quả khế.', am: A + 'p1b.mp3' } },
            { hinh: 'img/ht-p2.webp', a: { c: 'Kia là cây cam, phải không?', am: A + 'p2a.mp3', sai: ['Kia là cây khế, phải không?', 'Đây là quả gì?'] }, b: { c: 'Phải. Đó là cây cam.', am: A + 'p2b.mp3' } },
            { hinh: 'img/ht-p3.webp', a: { c: 'Kia là con bò, phải không?', am: A + 'p3a.mp3', sai: ['Kia là con trâu, phải không?', 'Đây là quả gì?'] }, b: { c: 'Không phải. Đó là con trâu.', am: A + 'p3b.mp3' } },
            { hinh: 'img/ht-p4.webp', a: { c: 'Kia là con khỉ, phải không?', am: A + 'p4a.mp3', sai: ['Kia là con bò, phải không?', 'Kia là con gì?'] }, b: { c: 'Phải. Đó là con khỉ.', am: A + 'p4b.mp3' } }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai, nhắc lại hội thoại trên',
          goiY: 'Chọn “Đóng vai”, rồi chọn Mai hoặc Nam. Đến lượt em, em nói to lời của bạn ấy.',
          vai: VAI,
          loi: [
            { ai: 'Mai', c: 'Đây là quả gì?', am: A + 'p1a.mp3' },
            { ai: 'Nam', c: 'Đây là quả khế.', am: A + 'p1b.mp3' },
            { ai: 'Mai', c: 'Kia là cây cam, phải không?', am: A + 'p2a.mp3' },
            { ai: 'Nam', c: 'Phải. Đó là cây cam.', am: A + 'p2b.mp3' },
            { ai: 'Nam', c: 'Kia là con bò, phải không?', am: A + 'p3a.mp3' },
            { ai: 'Mai', c: 'Không phải. Đó là con trâu.', am: A + 'p3b.mp3' },
            { ai: 'Nam', c: 'Kia là con khỉ, phải không?', am: A + 'p4a.mp3' },
            { ai: 'Mai', c: 'Phải. Đó là con khỉ.', am: A + 'p4b.mp3' }
          ]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [30],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'chon-cau', lenh: 'Chỉ vào hình, hỏi đáp',
          goiY: 'Bạn chỉ vào hình và hỏi: “Đây là cây …, phải không?”. Em chọn câu trả lời đúng: “Phải. …” hay “Không phải. …”.',
          khen: 'Giỏi quá! Em đã trả lời đúng hết.',
          cau: HOI_PHAI.map(([h, hoi, dung, sai]) => ({ hinh: HINH[h], hoi: 'Đây là cây ' + hoi + ', phải không?', dung, sai }))
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Quả (Xanh Xanh)',
          baiHat: 'Quả', tacGia: 'Xanh Xanh', youtube: 'g1QXSvOqcTM'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [31],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'H', thuong: 'h', am: A + 'hc-h.mp3' },
            { hoa: 'I', thuong: 'i', am: A + 'hc-i.mp3' },
            { hoa: 'Y', thuong: 'y', am: A + 'hc-y.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['h', 'i', 'y'],
          cau: ['Kia là cây chuối.', 'Em yêu hoa hồng.', 'Hoa mai rất đẹp.', 'Con yêu ba má nhất.']
        }
      ]
    }
  ]
};
