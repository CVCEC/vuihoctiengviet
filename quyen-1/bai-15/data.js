/* Quyển 1 – Bài 15: Ôn tập  (sách trang 62–64)
   Bài ôn tập không có file thu âm riêng: các tiếng được cắt từ ghi âm Bài 8, 11, 12, 13, 14 và 16.
   Toạ độ tính theo % của hình: [trái, trên, rộng, cao] */
const A = 'audio/';
const TAU = 'img/tau-to-mau.webp';

// Bài tập 5: sáu tờ lịch – [thứ, ngày, tháng, tiếng thứ, tiếng ngày, tiếng tháng]
const LICH = [
  ['thứ Bảy', '25', 'Một', 'thu-bay', 'so-25', 'thang-1'],
  ['thứ Ba', '2', 'Bảy', 'thu-ba', 'so-2', 'thang-7'],
  ['thứ Năm', '5', 'Mười hai', 'thu-nam', 'so-5', 'thang-12'],
  ['thứ Sáu', '30', 'Tám', 'thu-sau', 'so-30', 'thang-8'],
  ['thứ Tư', '17', 'Mười hai', 'thu-tu', 'so-17', 'thang-12'],
  ['Chủ nhật', '31', 'Mười hai', 'chu-nhat', 'so-31', 'thang-12']
];
const THU_KHAC = ['thứ Hai', 'thứ Ba', 'thứ Tư', 'thứ Năm', 'thứ Sáu', 'thứ Bảy', 'Chủ nhật'];
const NGAY_KHAC = { '25': ['15', '24'], '2': ['12', '20'], '5': ['15', '25'], '30': ['13', '31'], '17': ['7', '27'], '31': ['13', '30'] };
const THANG_KHAC = { 'Một': ['Bảy', 'Mười một'], 'Bảy': ['Một', 'Hai'], 'Mười hai': ['Hai', 'Mười'], 'Tám': ['Ba', 'Sáu'] };
const cauThu = t => t === 'Chủ nhật' ? 'Hôm nay là Chủ nhật.' : 'Hôm nay là ' + t + '.';
const CAU_LICH = [];
LICH.forEach(([thu, ngay, thang, aThu, aNgay, aThang], i) => {
  const hinh = 'img/lich-' + (i + 1) + '.webp';
  const lech = (i + 2) % 7;
  CAU_LICH.push(
    { hinh, hoi: { c: 'Hôm nay là thứ mấy?', am: A + 'q-thu.mp3' }, dung: cauThu(thu),
      sai: [THU_KHAC.filter(t => t !== thu)[lech % 6], THU_KHAC.filter(t => t !== thu)[(lech + 3) % 6]].map(cauThu), amDung: A + aThu + '.mp3' },
    { hinh, hoi: { c: 'Hôm nay là ngày bao nhiêu?', am: A + 'q-ngay.mp3' }, dung: 'Hôm nay là ngày ' + ngay + '.',
      sai: NGAY_KHAC[ngay].map(n => 'Hôm nay là ngày ' + n + '.'), amDung: A + aNgay + '.mp3' },
    { hinh, hoi: { c: 'Tháng này là tháng mấy?', am: A + 'q-thang.mp3' }, dung: 'Tháng này là tháng ' + thang + '.',
      sai: THANG_KHAC[thang].map(t => 'Tháng này là tháng ' + t + '.'), amDung: A + aThang + '.mp3' }
  );
});

const BAI_HOC = {
  quyen: 1, bai: 15, ten: 'Ôn tập', chuDe: 'Trường lớp', chu: '',
  phan: [
    {
      id: 'on-tap', ten: 'Ôn tập', mau: 'hc', trang: [62, 63, 64],
      bt: [
        {
          id: 'ot1', so: 1, loai: 'hoi-dap-mau', lenh: 'Hỏi đáp theo mẫu',
          mauAv: ['img/av-hoi.webp', 'img/av-dap.webp'],
          mau: [
            [{ c: 'Bạn biết làm gì?' }, { c: 'Tôi biết hát.' }],
            [{ c: 'Bạn có biết đọc không?' }, { c: 'Có (Không). Tôi biết (không biết) đọc.' }],
            [{ c: 'Bạn có thích chạy không?' }, { c: 'Có (Không). Tôi thích (không thích) chạy.' }]
          ],
          goiY: 'Nhìn từng hình. Bạn hỏi, em là bạn trong hình: chọn câu trả lời đúng rồi nói to.',
          cau: [
            { hinh: 'img/hd-doc.webp', hoi: 'Bạn biết làm gì?', dung: 'Tôi biết đọc.', sai: ['Tôi biết hát.', 'Tôi biết bơi.'] },
            { hinh: 'img/hd-viet.webp', hoi: 'Bạn có biết viết không?', dung: 'Có. Tôi biết viết.', sai: ['Không. Tôi không biết viết.', 'Có. Tôi biết vẽ.'] },
            { hinh: 'img/hd-hat.webp', hoi: 'Bạn có thích hát không?', dung: 'Có. Tôi thích hát.', sai: ['Không. Tôi không thích hát.', 'Có. Tôi thích múa.'] },
            { hinh: 'img/hd-mua.webp', hoi: 'Bạn biết làm gì?', dung: 'Tôi biết múa.', sai: ['Tôi biết đọc.', 'Tôi biết vẽ.'] },
            { hinh: 'img/hd-ve.webp', hoi: 'Bạn có biết vẽ không?', dung: 'Có. Tôi biết vẽ.', sai: ['Không. Tôi không biết vẽ.', 'Có. Tôi biết viết.'] },
            { hinh: 'img/hd-boi.webp', hoi: 'Bạn có thích bơi không?', dung: 'Có. Tôi thích bơi.', sai: ['Không. Tôi không thích bơi.', 'Có. Tôi thích chạy.'] }
          ]
        },
        {
          id: 'ot2', so: 2, loai: 'chon-cau', lenh: 'Nhìn hình, trả lời câu hỏi',
          goiY: 'Nhìn đoàn tàu, đếm các hình rồi chọn câu trả lời đúng.',
          cau: [
            { hinh: TAU, hoi: 'a) Có bao nhiêu hình vuông?', dung: 'Có 9 hình vuông.', sai: ['Có 8 hình vuông.', 'Có 10 hình vuông.'] },
            { hinh: TAU, hoi: 'b) Có bao nhiêu hình tròn?', dung: 'Có 10 hình tròn.', sai: ['Có 9 hình tròn.', 'Có 12 hình tròn.'] },
            { hinh: TAU, hoi: 'c) Có bao nhiêu hình chữ nhật?', dung: 'Có 8 hình chữ nhật.', sai: ['Có 6 hình chữ nhật.', 'Có 9 hình chữ nhật.'] },
            { hinh: TAU, hoi: 'd) Có bao nhiêu hình tam giác?', dung: 'Có 6 hình tam giác.', sai: ['Có 4 hình tam giác.', 'Có 5 hình tam giác.'] }
          ]
        },
        {
          id: 'ot3a', so: 3, loai: 'chon-cau', lenh: 'Trả lời câu hỏi',
          goiY: 'Nhìn hình, trả lời câu hỏi. Sau đó em tô màu đoàn tàu ở bài tập 2.',
          cau: [
            { hinh: 'img/h-vuong.webp', hoi: 'a) Hình vuông màu gì?', dung: 'Hình vuông màu xanh.', sai: ['Hình vuông màu vàng.', 'Hình vuông màu đỏ.'], amDung: A + 'mau-xanh.mp3' },
            { hinh: 'img/h-tron.webp', hoi: 'b) Hình tròn màu gì?', dung: 'Hình tròn màu vàng.', sai: ['Hình tròn màu xanh.', 'Hình tròn màu nâu.'], amDung: A + 'mau-vang.mp3' },
            { hinh: 'img/h-cn.webp', hoi: 'c) Hình chữ nhật màu gì?', dung: 'Hình chữ nhật màu nâu.', sai: ['Hình chữ nhật màu đỏ.', 'Hình chữ nhật màu tím.'] },
            { hinh: 'img/h-tg.webp', hoi: 'd) Hình tam giác màu gì?', dung: 'Hình tam giác màu đỏ.', sai: ['Hình tam giác màu nâu.', 'Hình tam giác màu vàng.'], amDung: A + 'mau-do.mp3' }
          ]
        },
        {
          id: 'ot3b', so: 3, loai: 'to-mau-hinh', lenh: 'Tô màu tranh ở bài tập 2 theo câu trả lời của em',
          goiY: 'Hình vuông, hình tròn, hình chữ nhật, hình tam giác – mỗi hình một màu như câu trả lời của em. Chọn màu rồi chạm vào hình để tô.',
          hinh: TAU,
          mau: [
            { ten: 'xanh', ma: '#3E9B5F', am: A + 'mau-xanh.mp3' },
            { ten: 'vàng', ma: '#F4D35E', am: A + 'mau-vang.mp3' },
            { ten: 'nâu', ma: '#8B5A2B' },
            { ten: 'đỏ', ma: '#E0473F', am: A + 'mau-do.mp3' },
            { ten: 'tím', ma: '#8A5CC2', am: A + 'mau-tim.mp3' }
          ],
          kieu: {
            vuong: { ten: 'hình vuông', mau: 'xanh', am: A + 'h-vuong.mp3' },
            tron: { ten: 'hình tròn', mau: 'vàng', am: A + 'h-tron.mp3' },
            cn: { ten: 'hình chữ nhật', mau: 'nâu', am: A + 'h-chu-nhat.mp3' },
            tg: { ten: 'hình tam giác', mau: 'đỏ', am: A + 'h-tam-giac.mp3' }
          },
          vung: [
            [18.5, 7.6, 'tg'], [15.8, 12.1, 'tg'], [21.2, 12.1, 'tg'], [26.1, 36.5, 'tg'], [12.0, 49.5, 'tg'], [8.6, 87.2, 'tg'],
            [18.5, 26.1, 'cn'], [85.5, 22.2, 'cn'], [64.9, 22.9, 'cn'], [35.2, 63.5, 'cn'], [84.1, 61.3, 'cn'], [56.9, 62.3, 'cn'], [22.1, 64.3, 'cn'], [36.3, 85.0, 'cn'],
            [89.0, 39.4, 'vuong'], [78.8, 39.7, 'vuong'], [62.1, 40.4, 'vuong'], [51.7, 40.9, 'vuong'], [35.5, 41.4, 'vuong'], [26.1, 46.1, 'vuong'], [9.6, 63.5, 'vuong'], [70.7, 78.3, 'vuong'], [43.3, 79.6, 'vuong'],
            [92.5, 82.5, 'tron'], [84.8, 83.0, 'tron'], [76.8, 83.0, 'tron'], [65.1, 83.5, 'tron'], [57.4, 83.7, 'tron'], [49.5, 84.2, 'tron'], [37.8, 79.6, 'tron'], [30.6, 80.0, 'tron'], [21.7, 85.5, 'tron'], [14.9, 85.5, 'tron']
          ],
          khen: 'Giỏi quá! Đoàn tàu của em thật đẹp.'
        },
        {
          id: 'ot4', so: 4, loai: 'hoi-dap-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          mauAv: ['img/av-hoi2.webp', 'img/av-dap2.webp'],
          mau: [
            [{ c: 'Có mấy quyển vở?' }, { c: 'Có hai quyển vở.' }],
            [{ c: 'Hai quyển vở màu gì?' }, { c: 'Một quyển màu trắng, một quyển màu vàng.' }],
            [{ c: 'Quyển vở màu vàng có to không?' }, { c: 'Không. Quyển vở màu vàng nhỏ.' }]
          ],
          goiY: 'Nhìn từng hình, đọc câu hỏi rồi chọn câu trả lời đúng. Sau đó hỏi đáp cùng bố mẹ.',
          cau: [
            { hinh: 'img/vat-vo.webp', hoi: 'Quyển vở màu trắng có to không?', dung: 'Có. Quyển vở màu trắng to.', sai: ['Không. Quyển vở màu trắng nhỏ.'] },
            { hinh: 'img/vat-sach.webp', hoi: 'Có mấy quyển sách?', dung: 'Có hai quyển sách.', sai: ['Có một quyển sách.', 'Có ba quyển sách.'] },
            { hinh: 'img/vat-sach.webp', hoi: 'Quyển sách màu đỏ có nặng không?', dung: 'Có. Quyển sách màu đỏ nặng.', sai: ['Không. Quyển sách màu đỏ nhẹ.'] },
            { hinh: 'img/vat-but.webp', hoi: 'Bút chì màu xanh có dài không?', dung: 'Có. Bút chì màu xanh dài.', sai: ['Không. Bút chì màu xanh ngắn.'] },
            { hinh: 'img/vat-but.webp', hoi: 'Bút chì màu vàng có dài không?', dung: 'Không. Bút chì màu vàng ngắn.', sai: ['Có. Bút chì màu vàng dài.'] },
            { hinh: 'img/vat-ban.webp', hoi: 'Có mấy cái bàn?', dung: 'Có hai cái bàn.', sai: ['Có một cái bàn.', 'Có ba cái bàn.'] },
            { hinh: 'img/vat-ban.webp', hoi: 'Cái bàn nhỏ có cao không?', dung: 'Không. Cái bàn nhỏ thấp.', sai: ['Có. Cái bàn nhỏ cao.'] },
            { hinh: 'img/vat-ghe.webp', hoi: 'Có mấy cái ghế?', dung: 'Có hai cái ghế.', sai: ['Có một cái ghế.', 'Có ba cái ghế.'] },
            { hinh: 'img/vat-ghe.webp', hoi: 'Hai cái ghế màu gì?', dung: 'Hai cái ghế màu xanh.', sai: ['Hai cái ghế màu vàng.', 'Một cái màu xanh, một cái màu đỏ.'] }

          ]
        },
        {
          id: 'ot5', so: 5, loai: 'chon-cau', lenh: 'Hỏi đáp về thứ, ngày, tháng',
          goiY: 'Nhìn từng tờ lịch, nghe câu hỏi rồi chọn câu trả lời đúng.',
          cau: CAU_LICH
        },
        {
          id: 'ot6', so: 6, loai: 'hai-qua', lenh: 'Hái quả trên cây, đọc những chữ em đã biết',
          hinh: 'img/cay-tao.webp', co: [1100, 745], moTa: 'Cây táo, mỗi quả có một chữ',
          qua: [
            { c: 'p', am: A + 'c-p.mp3', o: [38.5, 7.5, 9, 13] },
            { c: 'ơ', am: A + 'c-ow.mp3', o: [51, 9.5, 9, 13] },
            { c: 'nh', am: A + 'c-nh.mp3', o: [26.5, 17.5, 9, 13] },
            { c: 'Ng', am: A + 'c-ng.mp3', o: [64, 16, 9, 13] },
            { c: 'Qu', am: A + 'c-qu.mp3', o: [14, 29, 9, 13] },
            { c: 'Ơ', am: A + 'c-ow.mp3', o: [38.5, 25.5, 9, 13] },
            { c: 'Nh', am: A + 'c-nh.mp3', o: [50, 27.5, 9, 13] },
            { c: 'n', am: A + 'c-n.mp3', o: [74.5, 28, 9, 13] },
            { c: 'O', am: A + 'c-o.mp3', o: [27, 35, 9, 13] },
            { c: 'ô', am: A + 'c-oo.mp3', o: [62.5, 33.5, 9, 13] },
            { c: 'N', am: A + 'c-n.mp3', o: [5.5, 45.5, 9, 13] },
            { c: 'Ô', am: A + 'c-oo.mp3', o: [19.5, 52.5, 9, 13] },
            { c: 'ng', am: A + 'c-ng.mp3', o: [37, 48.5, 9, 13] },
            { c: 'qu', am: A + 'c-qu.mp3', o: [51.5, 47.5, 9, 13] },
            { c: 'o', am: A + 'c-o.mp3', o: [67.5, 51, 9, 13] },
            { c: 'P', am: A + 'c-p.mp3', o: [82.5, 47.5, 9, 13] }
          ]
        },
        {
          id: 'ot7', so: 7, loai: 'hoat-dong', lenh: 'Hát một bài hát đã được học',
          hinh: 'img/hat.webp',
          noiDung: 'Em chọn một bài hát đã học trong các bài trước (ví dụ: Cả nhà thương nhau, Cháu yêu bà) và hát cho bố mẹ nghe.',
          nut: 'Em đã hát xong', ghiAm: 'Ghi âm em hát'
        }
      ]
    }
  ]
};
