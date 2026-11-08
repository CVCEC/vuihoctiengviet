/* Quyển 1 – Bài 16: Cô ấy làm nghề gì?  (sách trang 65–69) */
const A = 'audio/';
const NGHE = [
  ['bác sĩ', 'n-bac-si', 'tn-bac-si'], ['giáo viên', 'n-giao-vien', 'tn-giao-vien'], ['kĩ sư', 'n-ki-su', 'tn-ki-su'], ['thợ may', 'n-tho-may', 'tn-tho-may'],
  ['học sinh', 'n-hoc-sinh', 'tn-hoc-sinh'], ['thợ xây', 'n-tho-xay', 'tn-tho-xay'], ['cảnh sát', 'n-canh-sat', 'tn-canh-sat'], ['người bán hàng', 'n-ban-hang', 'tn-ban-hang']
];
const VAI = { 'Nam': { av: 'img/av-nam.webp', mau: '#3C78C8' }, 'Hương': { av: 'img/av-huong.webp', mau: '#D9822B' } };
const LOI = [
  { ai: 'Nam', c: 'Hương ơi, tớ cho cậu xem ảnh này. Đây là ông bà tớ. Đây là bố tớ. Đây là chú Linh và chú Tiến.', am: A + 'ht-1.mp3' },
  { ai: 'Hương', c: 'Ông cậu làm nghề gì?', am: A + 'ht-2.mp3' },
  { ai: 'Nam', c: 'Ông tớ là giáo viên.', am: A + 'ht-3.mp3' },
  { ai: 'Hương', c: 'Bà cậu có phải là giáo viên không?', am: A + 'ht-4.mp3' },
  { ai: 'Nam', c: 'Đúng, bà tớ cũng là giáo viên.', am: A + 'ht-5.mp3' },
  { ai: 'Hương', c: 'Bố cậu có phải là giáo viên không?', am: A + 'ht-6.mp3' },
  { ai: 'Nam', c: 'Không, bố tớ không phải là giáo viên. Bố tớ là bác sĩ.', am: A + 'ht-7.mp3' },
  { ai: 'Hương', c: 'Chú Linh và chú Tiến làm nghề gì?', am: A + 'ht-8.mp3' },
  { ai: 'Nam', c: 'Chú Tiến là kĩ sư. Chú Linh là cảnh sát.', am: A + 'ht-9.mp3' }
];

const BAI_HOC = {
  quyen: 1, bai: 16, ten: 'Cô ấy làm nghề gì?', chuDe: 'Cộng đồng', chu: 'p, qu', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [65, 66],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn-lenh.mp3',
          danhSo: true, anChu: true,
          the: NGHE.map(([tu, hinh, am]) => ({ tu, hinh: 'img/' + hinh + '.webp', am: A + am + '.mp3' }))
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nghe và nhắc lại', amLenh: A + 'tn2-lenh.mp3',
          danhSo: true, anChu: true, cot: 2,
          goiY: 'Chạm vào từng cặp hình để nghe. Nghe xong, em nhắc lại thật to.',
          the: [
            { hinh: 'img/cap-1.webp', tu: 'cô Hoa', cau: 'Cô Hoa là giáo viên. Cô ấy không phải là học sinh.', am: A + 'cap-1.mp3' },
            { hinh: 'img/cap-2.webp', tu: 'ông Minh', cau: 'Ông Minh là bác sĩ. Ông ấy không phải là kĩ sư.', am: A + 'cap-2.mp3' },
            { hinh: 'img/cap-3.webp', tu: 'bà Huyền', cau: 'Bà Huyền là người bán hàng. Bà ấy không phải là thợ may.', am: A + 'cap-3.mp3' },
            { hinh: 'img/cap-4.webp', tu: 'các anh ấy', cau: 'Các anh ấy là kĩ sư. Các anh ấy không phải là thợ xây.', am: A + 'cap-4.mp3' },
            { hinh: 'img/cap-5.webp', tu: 'cô Hằng', cau: 'Cô Hằng là cảnh sát. Cô ấy không phải là thợ xây.', am: A + 'cap-5.mp3' }
          ]
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [66, 67],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-tranh.webp', moTa: 'Nam cho Hương xem ảnh gia đình: ông, bà, bố, chú Linh và chú Tiến',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai Nam và Hương, nhắc lại hội thoại',
          goiY: 'Chọn “Đóng vai”, rồi chọn Nam hoặc Hương. Đến lượt em, em nói to lời của bạn ấy.',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht3', so: 3, loai: 'hoi-dap-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          mauAv: ['img/av-hoi.webp', 'img/av-dap.webp'],
          mau: [
            [{ c: 'Cô Hoa làm nghề gì?' }, { c: 'Cô ấy là giáo viên.' }],
            [{ c: 'Cô ấy có phải là giáo viên không?' }, { c: 'Đúng. Cô ấy là giáo viên.' }],
            [{ c: 'Cô ấy có phải là học sinh không?' }, { c: 'Không. Cô ấy không phải là học sinh.' }]
          ],
          goiY: 'Nhìn hình: dấu ✓ là đúng, dấu ✗ là không đúng. Đọc câu hỏi rồi chọn câu trả lời đúng.',
          cau: [
            { hinh: 'img/hd-1.webp', hoi: 'Cô Hoa làm nghề gì?', dung: 'Cô ấy là giáo viên.', sai: ['Cô ấy là học sinh.', 'Cô ấy là bác sĩ.'] },
            { hinh: 'img/hd-1.webp', hoi: 'Cô ấy có phải là học sinh không?', dung: 'Không. Cô ấy không phải là học sinh.', sai: ['Đúng. Cô ấy là học sinh.'] },
            { hinh: 'img/hd-2.webp', hoi: 'Ông Minh làm nghề gì?', dung: 'Ông ấy là bác sĩ.', sai: ['Ông ấy là kĩ sư.', 'Ông ấy là giáo viên.'] },
            { hinh: 'img/hd-2.webp', hoi: 'Ông ấy có phải là kĩ sư không?', dung: 'Không. Ông ấy không phải là kĩ sư.', sai: ['Đúng. Ông ấy là kĩ sư.'] },
            { hinh: 'img/hd-3.webp', hoi: 'Bà Huyền làm nghề gì?', dung: 'Bà ấy là người bán hàng.', sai: ['Bà ấy là thợ may.', 'Bà ấy là cảnh sát.'] },
            { hinh: 'img/hd-3.webp', hoi: 'Bà ấy có phải là thợ may không?', dung: 'Không. Bà ấy không phải là thợ may.', sai: ['Đúng. Bà ấy là thợ may.'] },
            { hinh: 'img/hd-4.webp', hoi: 'Cô Hằng làm nghề gì?', dung: 'Cô ấy là cảnh sát.', sai: ['Cô ấy là thợ xây.', 'Cô ấy là thợ may.'] },
            { hinh: 'img/hd-4.webp', hoi: 'Cô ấy có phải là cảnh sát không?', dung: 'Đúng. Cô ấy là cảnh sát.', sai: ['Không. Cô ấy không phải là cảnh sát.'] },
            { hinh: 'img/hd-5.webp', hoi: 'Các chú ấy làm nghề gì?', dung: 'Các chú ấy là kĩ sư.', sai: ['Các chú ấy là thợ xây.', 'Các chú ấy là bác sĩ.'] },
            { hinh: 'img/hd-5.webp', hoi: 'Các chú ấy có phải là thợ xây không?', dung: 'Không. Các chú ấy không phải là thợ xây.', sai: ['Đúng. Các chú ấy là thợ xây.'] }
          ]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [68, 69],
      bt: [
        {
          id: 'tvv1a', so: 1, loai: 'to-mau-tranh', lenh: 'Tô màu, sau đó hỏi đáp theo tranh – Tô màu',
          goiY: 'Chọn màu, rồi chạm vào từng vùng trong tranh để tô: cô giáo, bạn học sinh, cô thợ may và anh bác sĩ.',
          hinh: 'img/to-mau.webp', can: 8
        },
        {
          id: 'tvv1b', so: 1, loai: 'chon-cau', lenh: 'Tô màu, sau đó hỏi đáp theo tranh – Hỏi đáp',
          goiY: 'Nhìn từng người trong tranh, hỏi và trả lời. Chọn câu trả lời đúng rồi nói to.',
          cau: [
            { hinh: 'img/tv-1.webp', hoi: { c: 'Cô ấy làm nghề gì?', am: A + 'q-nghe.mp3' }, dung: 'Cô ấy là giáo viên.', sai: ['Cô ấy là bác sĩ.', 'Cô ấy là thợ may.'] },
            { hinh: 'img/tv-2.webp', hoi: 'Bạn ấy có phải là học sinh không?', dung: 'Đúng. Bạn ấy là học sinh.', sai: ['Không. Bạn ấy không phải là học sinh.'] },
            { hinh: 'img/tv-3.webp', hoi: { c: 'Cô ấy làm nghề gì?', am: A + 'q-nghe.mp3' }, dung: 'Cô ấy là thợ may.', sai: ['Cô ấy là giáo viên.', 'Cô ấy là người bán hàng.'] },
            { hinh: 'img/tv-4.webp', hoi: 'Anh ấy làm nghề gì?', dung: 'Anh ấy là bác sĩ.', sai: ['Anh ấy là kĩ sư.', 'Anh ấy là cảnh sát.'] }
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Em muốn làm (Nguyễn Văn Chung)',
          baiHat: 'Em muốn làm', tacGia: 'Nguyễn Văn Chung', youtube: 'NJnDNG4be-w'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [69],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'P', thuong: 'p', am: A + 'hc-p.mp3' },
            { hoa: 'Qu', thuong: 'qu', am: A + 'hc-qu.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['p', 'qu'],
          cau: ['Tháng Năm, em đi Sa Pa.', 'Quả cam này ngon quá.']
        }
      ]
    }
  ]
};
