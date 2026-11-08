/* Quyển 2 – Bài 20: Ôn tập  (sách trang 132–137; trang 138–142 là Bảng từ ngữ, không có bài tập)
   Bài ôn tập không có ghi âm riêng. Câu "Cháu bị đau bụng." lấy từ ghi âm Hội thoại Bài 19 (nguon-am-thanh/q2/bai-19).
   Các câu khác không có tiếng. */
const A = 'audio/', I = 'img/';

/* 1. Bảng: tên – quốc tịch – thích – không thích */
const nguoi = (k, ten, nuoc, saiNuoc, hoi, dung, sai) => [
  { hinh: I + 'b1-' + k + '.webp', hoi: ten + ' là người nước nào?', dung: ten + ' là người ' + nuoc + '.', sai: saiNuoc.map(n => ten + ' là người ' + n + '.') },
  { hinh: I + 'b1-' + k + '.webp', hoi: hoi, dung: dung, sai: sai }
];
/* 2. Đi … mất bao lâu? */
const thoiGian = (n, tu, xe, dung, sai) => {
  const dau = 'Từ ' + tu + ', đi ' + xe + ' mất ';
  return { hinh: I + 'b2-' + n + '.webp', hoi: dau + 'bao lâu?', dung: dau + dung + '.', sai: sai.map(s => dau + s + '.') };
};
/* 3. Hỏi đường */
const hoiDuong = (n, noi, di, xa, saiDi, saiXa) => {
  const Noi = noi.charAt(0).toUpperCase() + noi.slice(1);
  return [
    { hinh: I + 'b3-' + n + '.webp', hoi: 'Bạn cho tôi hỏi, ' + noi + ' ở đâu?', dung: di, sai: saiDi },
    { hinh: I + 'b3-' + n + '.webp', hoi: Noi + ' cách đây bao xa?', dung: Noi + ' cách đây khoảng ' + xa + '.',
      sai: saiXa.map(x => Noi + ' cách đây khoảng ' + x + '.') }
  ];
};
/* 4. Bác sĩ – bệnh nhân */
const BENH = ['đau bụng', 'ho', 'đau đầu', 'đau răng', 'sốt', 'cảm lạnh'];
const benhNhan = (n, benh, nen, khong, am) => [
  { hinh: I + 'b4-' + n + '.webp', hoi: '– Cháu bị làm sao?', dung: 'Cháu bị ' + benh + '.', amDung: am,
    sai: BENH.filter(b => b !== benh).slice(n % 3, n % 3 + 2).map(b => 'Cháu bị ' + b + '.') },
  { hinh: I + 'b4-' + n + '.webp', hoi: '– Cháu nên làm gì? – Cháu không nên làm gì?',
    dung: 'Cháu nên ' + nen + '. Cháu không nên ' + khong + '.',
    sai: ['Cháu nên ' + khong + '. Cháu không nên ' + nen + '.', 'Cháu không nên ' + nen + '. Cháu không nên ' + khong + '.'] }
];

const BAI_HOC = {
  quyen: 2, bai: 20, ten: 'Ôn tập', chuDe: 'Cộng đồng', chu: '',
  phan: [
    {
      id: 'on-tap', ten: 'Ôn tập', mau: 'tn', trang: [132, 133, 134, 135, 136, 137],
      bt: [
        {
          id: 'ot1', so: 1, loai: 'chon-cau', lenh: 'Nhìn bảng, thực hành hỏi đáp với bạn',
          goiY: 'Câu hỏi: – Victor là người nước nào? – Victor thích / không thích ăn gì / uống gì? – Victor có thích ăn phở không? Nhìn bảng của từng bạn, chọn câu trả lời đúng, rồi hỏi đáp với bạn của em.',
          cau: [].concat(
            nguoi('victor', 'Victor', 'Pháp', ['Mỹ', 'Nga'], 'Victor có thích ăn phở không?', 'Có, Victor thích ăn phở.', ['Không, Victor không thích ăn phở.']),
            nguoi('leo', 'Leo', 'Mỹ', ['Đức', 'Pháp'], 'Leo không thích uống gì?', 'Leo không thích uống nước dừa.', ['Leo không thích uống sữa.', 'Leo không thích ăn kem.']),
            nguoi('misa', 'Misa', 'Nga', ['Nhật Bản', 'Mỹ'], 'Misa thích ăn gì / uống gì?', 'Misa thích uống sữa và ăn bánh mì.', ['Misa thích ăn bánh ngọt.', 'Misa thích uống nước chanh.']),
            nguoi('yuto', 'Yuto', 'Nhật Bản', ['Trung Quốc', 'Pháp'], 'Yuto không thích uống gì?', 'Yuto không thích uống sữa.', ['Yuto không thích uống nước chanh.', 'Yuto không thích ăn bánh ngọt.']),
            nguoi('lylong', 'Lý Long', 'Trung Quốc', ['Nhật Bản', 'Nga'], 'Lý Long có thích ăn kem không?', 'Không, Lý Long không thích ăn kem.', ['Có, Lý Long thích ăn kem.']),
            nguoi('emma', 'Emma', 'Đức', ['Nga', 'Mỹ'], 'Emma thích ăn gì?', 'Emma thích ăn bánh mì và kem.', ['Emma thích ăn nem rán.', 'Emma thích ăn phở.'])
          )
        },
        {
          id: 'ot2', so: 2, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp với bạn',
          goiY: 'Hình 1 là mẫu: – Từ Hà Nội đến Tokyo, đi máy bay mất bao lâu? – Từ Hà Nội đến Tokyo, đi máy bay mất 5 tiếng. (Giờ ở Tokyo nhanh hơn giờ ở Hà Nội 2 tiếng.) Nhìn đồng hồ, chọn câu trả lời đúng.',
          cau: [
            thoiGian(1, 'Hà Nội đến Tokyo', 'máy bay', '5 tiếng', ['13 tiếng', '16 tiếng']),
            thoiGian(2, 'nhà đến trường', 'bộ', '15 phút', ['8 phút', '30 phút']),
            thoiGian(3, 'nhà đến công ty', 'xe máy', '45 phút', ['7 phút', '15 phút']),
            thoiGian(4, 'siêu thị đến nhà', 'ô tô', '20 phút', ['9 phút', '2 tiếng']),
            thoiGian(5, 'nhà đến công viên', 'xe đạp', '12 phút', ['10 phút', '22 phút'])
          ]
        },
        {
          id: 'ot3', so: 3, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Hình 1 là mẫu: – Bạn cho tôi hỏi, siêu thị ở đâu? – Bạn đi thẳng qua ngã tư, siêu thị ở bên trái. – Siêu thị cách đây bao xa? – Siêu thị cách đây khoảng 1 ki lô mét. Nhìn mũi tên vàng và số mét dưới hình.',
          cau: [].concat(
            hoiDuong(1, 'siêu thị', 'Bạn đi thẳng qua ngã tư, siêu thị ở bên trái.', '1 ki lô mét', ['Bạn đi thẳng qua cầu, siêu thị ở bên phải.', 'Bạn vòng lại, siêu thị ở bên phải.'], ['1 mét', '10 ki lô mét']),
            hoiDuong(2, 'nhà sách', 'Bạn đi thẳng đến ngã ba, rẽ phải, nhà sách ở bên phải.', '500 mét', ['Bạn đi thẳng qua cầu, nhà sách ở bên trái.', 'Bạn vòng lại, nhà sách ở bên trái.'], ['400 mét', '500 ki lô mét']),
            hoiDuong(3, 'công viên', 'Bạn đi thẳng đến ngã ba, rẽ trái, công viên ở bên trái.', '400 mét', ['Bạn đi thẳng qua cầu, công viên ở bên phải.', 'Bạn vòng lại, công viên ở bên phải.'], ['600 mét', '400 ki lô mét']),
            hoiDuong(4, 'trường', 'Bạn đi thẳng đến ngã tư, rẽ phải, trường ở bên trái.', '600 mét', ['Bạn đi thẳng qua cầu, trường ở bên phải.', 'Bạn vòng lại, trường ở bên phải.'], ['700 mét', '600 ki lô mét']),
            hoiDuong(5, 'bưu điện', 'Bạn đi thẳng qua cầu, bưu điện ở bên phải.', '700 mét', ['Bạn đi thẳng đến ngã ba, rẽ trái, bưu điện ở bên trái.', 'Bạn vòng lại, bưu điện ở bên trái.'], ['500 mét', '700 ki lô mét'])
          )
        },
        {
          id: 'ot4', so: 4, loai: 'chon-cau', lenh: 'Nhìn hình, đóng vai bác sĩ – bệnh nhân, hỏi đáp theo mẫu',
          goiY: 'Hình 1 (Thuý) là mẫu: – Cháu bị làm sao? – Cháu bị đau bụng. – Cháu nên làm gì? – Cháu nên uống thuốc. – Cháu không nên làm gì? – Cháu không nên ăn nhiều. Dấu ✓: nên làm, dấu ✗: không nên làm.',
          cau: [].concat(
            benhNhan(1, 'đau bụng', 'uống thuốc', 'ăn nhiều', A + 'chau-bi-dau-bung.mp3'),
            benhNhan(2, 'ho', 'uống thuốc', 'nói nhiều'),
            benhNhan(3, 'đau đầu', 'nghỉ ngơi', 'xem ti vi'),
            benhNhan(4, 'đau răng', 'chữa răng', 'ăn nhiều'),
            benhNhan(5, 'đau bụng', 'uống thuốc', 'ăn nhiều', A + 'chau-bi-dau-bung.mp3'),
            benhNhan(6, 'sốt', 'đo nhiệt độ', 'đi chơi'),
            benhNhan(7, 'cảm lạnh', 'ăn cháo nóng', 'uống nước lạnh')
          )
        },
        {
          id: 'ot5', so: 5, loai: 'doc-tho', lenh: 'Đọc bài thơ sau',
          ten: 'Mời vào', trich: '(Trích)', tacGia: 'Võ Quảng',
          hinh: [I + 'tho.webp', I + 'nai.webp', I + 'gio.webp'],
          kho: [
            ['– Cốc, cốc, cốc!', '– Ai gọi đó?', '– Tôi là thỏ.', '– Nếu là thỏ', 'Cho xem tai.'],
            ['– Cốc, cốc, cốc!', '– Ai gọi đó?', '– Tôi là nai', '– Thật là nai', 'Cho xem gạc.'],
            ['– Cốc, cốc, cốc!', '– Ai gọi đó?', '– Tôi là gió', '– Xin mời vào!'],
            ['Kiễng chân cao', 'Trèo qua cửa', 'Cùng soạn sửa', 'Đón trăng lên', 'Quạt mát thêm', 'Hơi biển cả', 'Reo hoa lá', 'Đẩy buồm thuyền…', 'Đi khắp miền', 'Làm việc tốt.']
          ],
          cot: [[0, 1, 2], [3]],
          hoi: [
            { hoi: 'a) Em hãy kể tên ba vị khách đến gõ cửa.', dung: 'Thỏ, nai và gió.', sai: ['Thỏ, mèo và gió.', 'Nai, chó và mưa.'] }
          ]
        },
        {
          id: 'ot5b', so: 5, loai: 'noi', lenh: 'b) Mỗi vị khách được đón tiếp thế nào? – Nối đúng',
          a: [{ c: 'a) Thỏ' }, { c: 'b) Nai' }, { c: 'c) Gió' }],
          b: [{ c: '1) đòi xem gạc.' }, { c: '2) mời vào ngay.' }, { c: '3) đòi xem tai.' }],
          cap: [[0, 2], [1, 0], [2, 1]]
        },
        {
          id: 'ot5c', so: 5, loai: 'chon-cau', lenh: 'c) Em hãy kể một việc tốt của gió ở khổ thơ cuối.',
          goiY: 'Đọc lại khổ thơ cuối, chọn một việc tốt của gió. Em kể thêm những việc tốt khác của gió.',
          cau: [
            { hoi: 'Gió làm việc tốt gì?', dung: 'Gió đẩy buồm thuyền.', sai: ['Gió đòi xem tai.', 'Gió đòi xem gạc.'] }
          ]
        },
        {
          id: 'ot6', so: 6, loai: 'chon-cau', lenh: 'Ghép chữ ở cột A và cột B thành vần và tìm những từ có vần đó',
          goiY: 'Cột A: o, u. Cột B: a, e, ê, y. Ghép thành vần, rồi tìm từ có vần đó. Em kể thêm những từ khác em biết.',
          cau: [
            { hoi: 'o + a → ?', dung: 'oa', sai: ['ao', 'ua'] },
            { hoi: 'Từ nào có vần oa?', dung: 'khoá', sai: ['khế', 'kho'] },
            { hoi: 'o + e → ?', dung: 'oe', sai: ['eo', 'ue'] },
            { hoi: 'Từ nào có vần oe?', dung: 'khoẻ', sai: ['kẹo', 'khế'] },
            { hoi: 'u + ê → ?', dung: 'uê', sai: ['êu', 'uy'] },
            { hoi: 'Từ nào có vần uê?', dung: 'Huế', sai: ['hươu', 'hè'] },
            { hoi: 'u + y → ?', dung: 'uy', sai: ['yu', 'uê'] },
            { hoi: 'Từ nào có vần uy?', dung: 'tàu thuỷ', sai: ['tàu hoả', 'thu hoạch'] }
          ]
        },
        {
          id: 'ot7', so: 7, loai: 'viet-o-li', lenh: 'Viết các câu sau',
          goiY: 'Em tô theo chữ mờ trên ô li bằng ngón tay hoặc bút. Viết xong mỗi câu, bấm “Từ tiếp”.',
          tu: [
            { c: 'Con hoẵng chạy nhanh.', hinh: I + 'v-hoang.webp' },
            { c: 'Em thích trượt tuyết.', hinh: I + 'v-truot.webp' },
            { c: 'Chó con ngoạm xương.', hinh: I + 'v-cho.webp' },
            { c: 'Con vẹt mỏ khoằm.', hinh: I + 'v-vet.webp' },
            { c: 'Mẹ khuấy bột làm bánh.', hinh: I + 'v-khuay.webp' }
          ]
        },
        {
          id: 'ot8', so: 8, loai: 'hoat-dong', lenh: 'Hát một bài hát đã được học',
          hinh: I + 'hat.webp',
          goiY: 'Các bài hát em đã học trong chủ đề Cộng đồng: Đoàn tàu nhỏ xíu, Bài ca đi học, Trái Đất này là của chúng mình, Bé khoẻ bé ngoan.',
          noiDung: 'Em chọn một bài hát đã học và hát cho bố mẹ, thầy cô hoặc các bạn nghe.',
          nut: 'Em đã hát xong', ghiAm: 'Ghi âm em hát'
        }
      ]
    }
  ]
};
