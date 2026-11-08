/* Quyển 1 – Bài 20: Ôn tập  (sách trang 87–90)
   Bài ôn tập không có file thu âm riêng: các tiếng được cắt từ ghi âm Bài 14, 16, 17, 18 và 19. */
const A = 'audio/';
const NGHE = [
  ['giáo viên', 'giao-vien'], ['học sinh', 'hoc-sinh'], ['thợ xây', 'tho-xay'], ['bác sĩ', 'bac-si'],
  ['thợ may', 'tho-may'], ['người bán hàng', 'ban-hang'], ['cảnh sát', 'canh-sat']
];
const DO_VAT = ['ong-nghe', 'bang', 'rao-chan', 'balo', 'cua-hang', 'gach', 'may-may'];
// Bài tập 3: đi theo con đường từ mũi tên đến dấu ✓ – [hình, động từ, đồ, màu, sai 1, sai 2]
const DUONG = [
  ['ao-xanh', 'mặc', 'áo', 'xanh', 'mặc áo màu đỏ', 'mặc váy màu xanh'],
  ['giay', 'đi', 'giày', 'nâu', 'đi giày màu trắng', 'đi tất màu nâu'],
  ['mu-trang', 'đội', 'mũ', 'trắng', 'đội mũ màu đen', 'mặc áo màu trắng'],
  ['mu-vang', 'đội', 'mũ', 'vàng', 'đội mũ màu tím', 'đội mũ màu trắng'],
  ['quan-tim', 'mặc', 'quần', 'tím', 'mặc quần màu xanh', 'mặc váy màu tím'],
  ['khan', 'quàng', 'khăn', 'xanh', 'quàng khăn màu đỏ', 'đội mũ màu xanh'],
  ['vay', 'mặc', 'váy', 'hồng', 'mặc váy màu cam', 'mặc áo màu hồng'],
  ['tat', 'đi', 'tất', 'nâu', 'đi tất màu trắng', 'đi giày màu nâu'],
  ['quan-den', 'mặc', 'quần', 'đen', 'mặc quần màu nâu', 'mặc áo màu đen'],
  ['ao-cam', 'mặc', 'áo', 'cam', 'mặc áo màu hồng', 'mặc áo màu vàng'],
  ['mu-do', 'đội', 'mũ', 'đỏ', 'đội mũ màu cam', 'mặc áo màu đỏ']
];
// Bài tập 4: [hình, A, B, loại, tính từ, A thắng?, tiếng câu đúng]
const XE = [
  [1, 'Xe máy', 'xe đạp', 'xe', 'nhanh', true, 'ss-1a'], [1, 'Xe máy', 'xe đạp', 'xe', 'chậm', false, 'ss-1b'],
  [2, 'Xe buýt', 'ô tô con', 'xe', 'to', true, 'ss-2a'], [2, 'Xe buýt', 'ô tô con', 'xe', 'nhỏ', false, 'ss-2b'],
  [3, 'Mê trô', 'tàu hoả', 'tàu', 'mới', true, 'ss-3a'], [3, 'Mê trô', 'tàu hoả', 'tàu', 'cũ', false, 'ss-3b'],
  [4, 'Tàu thuỷ', 'thuyền', 'cái', 'nặng', true, 'ss-4a'], [4, 'Tàu thuỷ', 'thuyền', 'cái', 'nhẹ', false, 'ss-4b'],
  [5, 'Ô tô', 'xe đạp', 'xe', 'đắt', true, null], [5, 'Ô tô', 'xe đạp', 'xe', 'rẻ', false, null]
];
const hoa = s => s.charAt(0).toUpperCase() + s.slice(1), thuong = s => s.charAt(0).toLowerCase() + s.slice(1);
const hon = (x, y, tt) => hoa(x) + ' ' + tt + ' hơn ' + thuong(y) + '.';

const BAI_HOC = {
  quyen: 1, bai: 20, ten: 'Ôn tập', chuDe: 'Cộng đồng', chu: '',
  phan: [
    {
      id: 'on-tap', ten: 'Ôn tập', mau: 'hc', trang: [87, 88, 89, 90],
      bt: [
        {
          id: 'ot1', so: 1, loai: 'mau-noi', lenh: 'Ghép hình ở cột A với hình thích hợp ở cột B. Hỏi đáp theo mẫu',
          mauAv: ['img/av-hoi1.webp', 'img/av-dap1.webp'],
          mau: [[{ c: 'Cô ấy làm nghề gì?', am: A + 'q-nghe.mp3' }, { c: 'Cô ấy là giáo viên.' }]],
          goiY: 'Chạm vào một người ở cột A, rồi chạm vào hình hợp với nghề của người đó ở cột B. Sau đó hỏi đáp với bố mẹ theo mẫu.',
          a: NGHE.map(([c, k]) => ({ c, hinh: 'img/a-' + k + '.webp', am: A + k + '.mp3' })),
          b: DO_VAT.map(k => ({ hinh: 'img/b-' + k + '.webp' })),
          cap: [[0, 1], [1, 3], [2, 5], [3, 0], [4, 6], [5, 4], [6, 2]]
        },
        {
          id: 'ot2', so: 2, loai: 'hoi-dap-mau', lenh: 'Hỏi đáp theo mẫu',
          mauAv: ['img/av-hoi2.webp', 'img/av-dap2.webp'],
          mau: [[{ c: 'Người bán hàng ở đâu?', am: A + 'q-ban-hang.mp3' }, { c: 'Người bán hàng ở trong cửa hàng.' }]],
          goiY: 'Nhìn từng hình. Bạn hỏi, em chọn câu trả lời đúng rồi nói to.',
          cau: [
            { hinh: 'img/vt-1.webp', hoi: { c: 'Người bán hàng ở đâu?', am: A + 'q-ban-hang.mp3' }, dung: 'Người bán hàng ở trong cửa hàng.', sai: ['Người bán hàng ở ngoài cửa hàng.', 'Người bán hàng ở trên cửa hàng.'] },
            { hinh: 'img/vt-2.webp', hoi: 'Quả dứa ở đâu?', dung: 'Quả dứa ở trên bàn.', sai: ['Quả dứa ở dưới bàn.', 'Quả dứa ở bên cạnh bàn.'] },
            { hinh: 'img/vt-3.webp', hoi: { c: 'Con mèo ở đâu?', am: A + 'q-meo.mp3' }, dung: 'Con mèo ở trước cửa.', sai: ['Con mèo ở sau cửa.', 'Con mèo ở trên cửa.'] },
            { hinh: 'img/vt-4.webp', hoi: 'Bệnh viện ở đâu?', dung: 'Bệnh viện ở đối diện ngôi nhà màu đỏ.', sai: ['Bệnh viện ở trong ngôi nhà màu đỏ.', 'Bệnh viện ở dưới ngôi nhà màu đỏ.'] },
            { hinh: 'img/vt-5.webp', hoi: 'Xe đạp ở đâu?', dung: 'Xe đạp ở trước cửa hàng.', sai: ['Xe đạp ở trong cửa hàng.', 'Xe đạp ở trên cửa hàng.'] },
            { hinh: 'img/vt-6.webp', hoi: 'Con chó ở đâu?', dung: 'Con chó ở dưới bàn.', sai: ['Con chó ở trên bàn.', 'Con chó ở sau bàn.'] },
            { hinh: 'img/vt-7.webp', hoi: 'Cái ghế ở đâu?', dung: 'Cái ghế ở sau bàn.', sai: ['Cái ghế ở trên bàn.', 'Cái ghế ở dưới bàn.'] },
            { hinh: 'img/vt-8.webp', hoi: 'Cửa hàng ở đâu?', dung: 'Cửa hàng ở bên cạnh bệnh viện.', sai: ['Cửa hàng ở trong bệnh viện.', 'Cửa hàng ở đối diện bệnh viện.'] }
          ]
        },
        {
          id: 'ot3', so: 3, loai: 'hoi-dap-mau', lenh: 'Hỏi đáp theo mẫu',
          mauAv: ['img/av-hoi3.webp', 'img/av-dap3.webp'],
          mau: [[{ c: 'Bạn thích mặc áo màu gì?' }, { c: 'Tôi thích mặc áo màu vàng.' }]],
          goiY: 'Đi theo con đường từ mũi tên đến dấu ✓. Đến mỗi ô, bạn hỏi, em trả lời theo hình trong ô.',
          cau: DUONG.map(([k, dt, mon, mau, s1, s2]) => ({
            hinh: 'img/p-' + k + '.webp', hoi: 'Bạn thích ' + dt + ' ' + mon + ' màu gì?',
            dung: 'Tôi thích ' + dt + ' ' + mon + ' màu ' + mau + '.', sai: ['Tôi thích ' + s1 + '.', 'Tôi thích ' + s2 + '.']
          })),
          khen: 'Giỏi quá! Em đã về đích.'
        },
        {
          id: 'ot4', so: 4, loai: 'hoi-dap-mau', lenh: 'Hỏi đáp theo mẫu',
          mauAv: ['img/av-hoi4.webp', 'img/av-dap4.webp'],
          mau: [
            [{ c: 'Xe máy và xe đạp, xe nào nhanh hơn?' }, { c: 'Xe máy nhanh hơn xe đạp.', am: A + 'ss-1a.mp3' }],
            [{ c: 'Xe máy và xe đạp, xe nào chậm hơn?' }, { c: 'Xe đạp chậm hơn xe máy.', am: A + 'ss-1b.mp3' }]
          ],
          goiY: 'Nhìn từng hình. Bạn hỏi, em chọn câu trả lời đúng rồi nói to.',
          cau: XE.map(([n, x, y, loai, tt, xThang, am]) => ({
            hinh: 'img/xe-' + n + '.webp', hoi: x + ' và ' + y + ', ' + loai + ' nào ' + tt + ' hơn?',
            dung: xThang ? hon(x, y, tt) : hon(y, x, tt), sai: [xThang ? hon(y, x, tt) : hon(x, y, tt)],
            amDung: am ? A + am + '.mp3' : undefined
          }))
        },
        {
          id: 'ot5', so: 5, loai: 'boc-tham', lenh: 'Bốc thăm, đọc những chữ em đã biết',
          hinh: 'img/lop.webp', moTa: 'Cô giáo và các bạn bốc thăm chữ trong hộp',
          the: [
            ['R', 'r'], ['tr', 'tr'], ['U', 'u'], ['X', 'x'], ['s', 's'], ['t', 't'], ['ư', 'uw'], ['th', 'th'],
            ['T', 't'], ['Th', 'th'], ['S', 's'], ['Ư', 'uw'], ['x', 'x'], ['r', 'r'], ['Tr', 'tr'], ['u', 'u']
          ].map(([c, k]) => ({ c, am: A + 'c-' + k + '.mp3' }))
        },
        {
          id: 'ot6', so: 6, loai: 'hoat-dong', lenh: 'Hát một bài hát đã được học',
          hinh: 'img/hat.webp',
          noiDung: 'Em chọn một bài hát đã học trong các bài trước (ví dụ: Em muốn làm, Tập thể dục buổi sáng, Chị ong nâu và em bé, Em đi chơi thuyền) và hát cho bố mẹ nghe.',
          nut: 'Em đã hát xong', ghiAm: 'Ghi âm em hát'
        }
      ]
    }
  ]
};
