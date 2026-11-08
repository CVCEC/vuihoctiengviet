/* Quyển 2 – Bài 17: Bác cho cháu hỏi, siêu thị ở đâu ạ?  (sách trang 108–115)
   Ghi âm của NXB chỉ có phần Từ ngữ và Hội thoại 1; các phần khác không có tiếng. */
const A = 'audio/', I = 'img/';

const HT_A = [
  { ai: 'Má', c: 'Chúng ta đi chơi công viên nhé!', am: A + 'a1.mp3' },
  { ai: 'Mai', c: 'Công viên cách nhà bao xa ạ?', am: A + 'a2.mp3' },
  { ai: 'Má', c: 'Công viên cách nhà khoảng 500 mét.', am: A + 'a3.mp3' },
  { ai: 'Mai', c: 'Má và con đi đến công viên bằng gì ạ?', am: A + 'a4.mp3' },
  { ai: 'Má', c: 'Công viên rất gần nhà, nên chúng ta đi bộ. Bây giờ đi sang đường, sau đó đi qua cầu là đến công viên.', am: A + 'a5.mp3' }
];
const HT_B = [
  { ai: 'Nam', c: 'Cháu chào bác ạ. Bác cho cháu hỏi, siêu thị ở đâu ạ?', am: A + 'b1.mp3' },
  { ai: 'Người đi đường', c: 'Siêu thị à? Cháu đi thẳng đường này, đến ngã tư, rẽ phải.', am: A + 'b2.mp3' },
  { ai: 'Nam', c: 'Siêu thị cách đây bao xa ạ?', am: A + 'b3.mp3' },
  { ai: 'Người đi đường', c: 'Khoảng 1 ki lô mét.', am: A + 'b4.mp3' },
  { ai: 'Nam', c: 'Cháu cảm ơn bác ạ.', am: A + 'b5.mp3' }
];
const VAI_A = { 'Má': { av: I + 'av-ma.webp' }, 'Mai': { av: I + 'av-mai.webp' } };

/* Hội thoại 4: hỏi đường – mỗi bản đồ hai câu (đi thế nào, bao xa) */
const DUONG = {
  thang: 'Cháu đi thẳng đường này, đến ngã tư, rẽ phải.',
  baTrai: 'Cháu đi thẳng đường này, đến ngã ba, rẽ trái.',
  cau: 'Cháu đi thẳng đường này, đi qua cầu.',
  sang: 'Cháu đi sang đường, rẽ trái.',
  quaTu: 'Cháu đi thẳng đường này, qua ngã tư.'
};
const hoiDuong = (n, noi, di, xa, saiDi, saiXa) => [
  { hinh: I + 'ht4-' + n + '.webp', hoi: 'Bác cho cháu hỏi, ' + noi + ' ở đâu ạ?', dung: di, sai: saiDi },
  { hinh: I + 'ht4-' + n + '.webp', hoi: noi.charAt(0).toUpperCase() + noi.slice(1) + ' cách đây bao xa ạ?', dung: noi.charAt(0).toUpperCase() + noi.slice(1) + ' cách đây khoảng ' + xa + '.', sai: saiXa.map(x => noi.charAt(0).toUpperCase() + noi.slice(1) + ' cách đây khoảng ' + x + '.') }
];

/* Luyện đọc 2: đọc từ, chọn hình */
const TU_DOC = [
  ['bé ngoan', 'be-ngoan'], ['đoạt giải', 'doat-giai'], ['tóc xoăn', 'toc-xoan'], ['chỗ ngoặt', 'cho-ngoat'], ['nhoẻn cười', 'nhoen-cuoi'],
  ['loè loẹt', 'loe-loet'], ['mùa xuân', 'mua-xuan'], ['ảo thuật', 'ao-thuat'], ['màn tuyn', 'man-tuyn'], ['xe buýt', 'xe-buyt'],
  ['thuyền buồm', 'thuyen-buom'], ['trượt tuyết', 'truot-tuyet'], ['quyển truyện', 'quyen-truyen'], ['ngoạm', 'ngoam'], ['mỏ khoằm', 'mo-khoam']
];
const hinhLD = k => ({ hinh: I + 'ld-' + k + '.webp' });

const BAI_HOC = {
  quyen: 2, bai: 17, ten: 'Bác cho cháu hỏi, siêu thị ở đâu ạ?', chuDe: 'Cộng đồng', chu: 'oan – oat, oam – oăm', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [108, 109],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh.mp3', danhSo: true,
          the: [
            { hinh: I + 'tn-duong.webp', tu: 'đường', am: A + 'tn-duong.mp3' },
            { hinh: I + 'tn-den.webp', tu: 'đèn giao thông', am: A + 'tn-den.mp3' },
            { hinh: I + 'tn-cau.webp', tu: 'cầu', am: A + 'tn-cau.mp3' },
            { hinh: I + 'tn-nga-ba.webp', tu: 'ngã ba', am: A + 'tn-nga-ba.mp3' },
            { hinh: I + 'tn-nga-tu.webp', tu: 'ngã tư', am: A + 'tn-nga-tu.mp3' }
          ]
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn2-lenh.mp3', danhSo: true,
          the: [
            { hinh: I + 'tn-di-thang.webp', tu: 'đi thẳng', am: A + 'tn-di-thang.mp3' },
            { hinh: I + 'tn-re-phai.webp', tu: 'rẽ phải', am: A + 'tn-re-phai.mp3' },
            { hinh: I + 'tn-re-trai.webp', tu: 'rẽ trái', am: A + 'tn-re-trai.mp3' },
            { hinh: I + 'tn-vong-lai.webp', tu: 'vòng lại', am: A + 'tn-vong-lai.mp3' },
            { hinh: I + 'tn-sang-duong.webp', tu: 'đi sang đường', am: A + 'tn-sang-duong.mp3' },
            { hinh: I + 'tn-qua-cau.webp', tu: 'đi qua cầu', am: A + 'tn-qua-cau.mp3' }
          ]
        },
        {
          id: 'tn3', so: 3, loai: 'the-hinh', lenh: 'Nghe và nhắc lại', amLenh: A + 'tn3-lenh.mp3', anChu: true,
          goiYChoi: 'Nghe và chạm vào số đúng.', tenChoi: 'Trò chơi: Nghe và chọn số',
          the: [
            { hinh: I + 's100.webp', tu: 'một trăm', am: A + 's100.mp3' },
            { hinh: I + 's200.webp', tu: 'hai trăm', am: A + 's200.mp3' },
            { hinh: I + 's300.webp', tu: 'ba trăm', am: A + 's300.mp3' },
            { hinh: I + 's400.webp', tu: 'bốn trăm', am: A + 's400.mp3' },
            { hinh: I + 's500.webp', tu: 'năm trăm', am: A + 's500.mp3' },
            { hinh: I + 's600.webp', tu: 'sáu trăm', am: A + 's600.mp3' },
            { hinh: I + 's700.webp', tu: 'bảy trăm', am: A + 's700.mp3' },
            { hinh: I + 's800.webp', tu: 'tám trăm', am: A + 's800.mp3' },
            { hinh: I + 's900.webp', tu: 'chín trăm', am: A + 's900.mp3' }
          ]
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [109, 110, 111],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – A', amLenh: A + 'ht-lenh.mp3',
          hinh: I + 'ht-a.webp', moTa: 'Mai và má đứng cạnh con kênh, xa xa có cây cầu', vai: VAI_A, loi: HT_A
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – B', amLenh: A + 'ht-lenh.mp3',
          hinh: I + 'ht-b.webp', moTa: 'Bản đồ: đi thẳng đến ngã tư, rẽ phải là đến siêu thị', loi: HT_B
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          goiY: 'Bấm “Đóng vai”, chọn một vai (Má, Mai, Nam hoặc người đi đường). Đến lượt em, em nói thật to.',
          vai: VAI_A, loi: HT_A.concat(HT_B)
        },
        {
          id: 'ht3', so: 3, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Câu 1 là mẫu. Nhìn hình, đọc câu hỏi, chọn câu trả lời đúng rồi nói to cả câu.',
          cau: [
            { hinh: I + 'ht3-1.webp', hoi: 'Nhà cách trường bao xa?', dung: 'Nhà cách trường khoảng 900 mét.', sai: ['Nhà cách trường khoảng 900 ki lô mét.', 'Nhà cách trường khoảng 300 mét.'] },
            { hinh: I + 'ht3-2.webp', hoi: 'Huế cách Đà Nẵng bao xa?', dung: 'Huế cách Đà Nẵng khoảng 100 ki lô mét.', sai: ['Huế cách Đà Nẵng khoảng 100 mét.', 'Huế cách Đà Nẵng khoảng 230 ki lô mét.'] },
            { hinh: I + 'ht3-3.webp', hoi: 'Siêu thị cách nhà bao xa?', dung: 'Siêu thị cách nhà khoảng 300 mét.', sai: ['Siêu thị cách nhà khoảng 300 ki lô mét.', 'Siêu thị cách nhà khoảng 500 mét.'] },
            { hinh: I + 'ht3-4.webp', hoi: 'Thành phố Hồ Chí Minh cách Côn Đảo bao xa?', dung: 'Thành phố Hồ Chí Minh cách Côn Đảo khoảng 230 ki lô mét.', sai: ['Thành phố Hồ Chí Minh cách Côn Đảo khoảng 230 mét.', 'Thành phố Hồ Chí Minh cách Côn Đảo khoảng 100 ki lô mét.'] },
            { hinh: I + 'ht3-5.webp', hoi: 'Nhà cách công viên bao xa?', dung: 'Nhà cách công viên khoảng 500 mét.', sai: ['Nhà cách công viên khoảng 500 ki lô mét.', 'Nhà cách công viên khoảng 900 mét.'] }
          ]
        },
        {
          id: 'ht4', so: 4, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Hình 1 là mẫu. Em hỏi đường, rồi chọn câu người đi đường trả lời. Nhìn mũi tên vàng và số mét dưới hình.',
          cau: [].concat(
            hoiDuong(1, 'siêu thị', DUONG.thang, '1 ki lô mét', [DUONG.baTrai, DUONG.cau], ['100 mét', '10 ki lô mét']),
            hoiDuong(2, 'công viên', DUONG.baTrai, '800 mét', [DUONG.thang, DUONG.cau], ['200 mét', '800 ki lô mét']),
            hoiDuong(3, 'bảo tàng', DUONG.cau, '200 mét', [DUONG.thang, DUONG.sang], ['300 mét', '200 ki lô mét']),
            hoiDuong(4, 'nhà sách', DUONG.sang, '300 mét', [DUONG.cau, DUONG.quaTu], ['400 mét', '800 mét']),
            hoiDuong(5, 'bưu điện', DUONG.quaTu, '400 mét', [DUONG.baTrai, DUONG.cau], ['300 mét', '400 ki lô mét'])
          )
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [112, 113],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'ghep-van', lenh: 'Đánh vần',
          tu: [
            { hinh: I + 'ld-hoa-xoan.webp', tu: 'hoa xoan', van: 'oan', phan: ['o', 'a', 'n'], doc: 'o – a – nờ – oan' },
            { hinh: I + 'ld-hoat-hinh.webp', tu: 'phim hoạt hình', van: 'oat', phan: ['o', 'a', 't'], doc: 'o – a – tờ – oat' }
          ]
        },
        {
          id: 'ld2', so: 2, loai: 'chon-cau', lenh: 'Đọc các từ ngữ sau',
          goiY: 'Em đọc to từ ngữ, rồi chạm vào hình đúng.',
          cau: TU_DOC.map(([tu, k], i) => ({ hoi: tu, dung: hinhLD(k), sai: [hinhLD(TU_DOC[(i + 4) % 15][1]), hinhLD(TU_DOC[(i + 9) % 15][1])] }))
        },
        {
          id: 'ld3', so: 3, loai: 'doc-bai', lenh: 'Đọc bài sau',
          ten: 'Hai chị em', hinh: I + 'ld-bai.webp',
          cau: [
            { c: 'Huyền và Xuân là hai chị em.' },
            { c: 'Huyền thích xem phim hoạt hình, còn Xuân thích xem xiếc.' },
            { c: 'Huyền thích nhất phim Công chúa tuyết.' },
            { c: 'Xuân thì thích xem chú hề.' },
            { c: 'Chú hề tóc xoăn tít, mặc áo loè loẹt.' },
            { c: 'Chú hề làm ảo thuật với con vẹt mỏ khoằm.' },
            { c: 'Chú nhoẻn cười và huýt sáo rất vui.' }
          ],
          hoi: [
            { hoi: 'a) Huyền và Xuân thích xem gì?', dung: 'Huyền thích xem phim hoạt hình, còn Xuân thích xem xiếc.', sai: ['Huyền thích xem xiếc, còn Xuân thích xem phim hoạt hình.', 'Huyền và Xuân thích xem bóng chuyền.'] },
            { hoi: 'b) Huyền thích xem phim gì nhất?', dung: 'Huyền thích nhất phim Công chúa tuyết.', sai: ['Huyền thích nhất phim về chú hề.', 'Huyền thích nhất phim về con vẹt.'] },
            { hoi: 'c) Chú hề làm ảo thuật với con vật nào?', dung: 'Chú hề làm ảo thuật với con vẹt mỏ khoằm.', sai: ['Chú hề làm ảo thuật với con chó.', 'Chú hề làm ảo thuật với con mèo.'] },
            { hoi: 'd) Theo em, vì sao Xuân thích xem chú hề?', dung: 'Vì chú hề làm ảo thuật, nhoẻn cười và huýt sáo rất vui.', sai: ['Vì chú hề rất buồn.', 'Vì chú hề không biết làm ảo thuật.'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [113, 114],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'dien-chu', lenh: 'Điền vần hoặc tiếng và dấu thanh còn thiếu',
          goiY: 'Chạm vào từng hình, rồi chọn chữ và dấu thanh để điền vần (hoặc tiếng) còn thiếu.',
          tu: [
            { hinh: I + 'ld-hoa-xoan.webp', mau: 'hoa x…', dap: 'hoa xoan' },
            { hinh: I + 'ld-hoat-hinh.webp', mau: 'h… hình', dap: 'hoạt hình' },
            { hinh: I + 'ld-toc-xoan.webp', mau: 'tóc x…', dap: 'tóc xoăn' },
            { hinh: I + 'ld-cho-ngoat.webp', mau: 'chỗ ng…', dap: 'chỗ ngoặt' },
            { hinh: I + 'ld-nhoen-cuoi.webp', mau: 'nh… cười', dap: 'nhoẻn cười' },
            { hinh: I + 'ld-loe-loet.webp', mau: 'loè …', dap: 'loè loẹt' },
            { hinh: I + 'ld-mua-xuan.webp', mau: 'mùa x…', dap: 'mùa xuân' },
            { hinh: I + 'ld-ao-thuat.webp', mau: 'ảo th…', dap: 'ảo thuật' },
            { hinh: I + 'ld-man-tuyn.webp', mau: 'màn t…', dap: 'màn tuyn' },
            { hinh: I + 'ld-xe-buyt.webp', mau: 'xe …', dap: 'xe buýt' },
            { hinh: I + 'lv-bong-chuyen.webp', mau: 'bóng ch…', dap: 'bóng chuyền' },
            { hinh: I + 'ld-truot-tuyet.webp', mau: 'trượt t…', dap: 'trượt tuyết' },
            { hinh: I + 'ld-quyen-truyen.webp', mau: 'quyển tr…', dap: 'quyển truyện' },
            { hinh: I + 'ld-ngoam.webp', mau: 'ng…', dap: 'ngoạm' },
            { hinh: I + 'ld-mo-khoam.webp', mau: 'mỏ kh…', dap: 'mỏ khoằm' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Chép lại các từ ngữ sau',
          tu: [
            { c: 'trốn thoát', hinh: I + 'lv-tron-thoat.webp' },
            { c: 'soát vé', hinh: I + 'lv-soat-ve.webp' },
            { c: 'khuya khoắt', hinh: I + 'lv-khuya-khoat.webp' },
            { c: 'thoăn thoắt', hinh: I + 'lv-thoan-thoat.webp' },
            { c: 'đoạt giải', hinh: I + 'lv-doat-giai.webp' },
            { c: 'thuyền buồm', hinh: I + 'lv-thuyen-buom.webp' },
            { c: 'dầu luyn', hinh: I + 'lv-dau-luyn.webp' },
            { c: 'sâu hoắm', hinh: I + 'lv-sau-hoam.webp' }
          ]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [115],
      bt: [
        {
          id: 'tvv1a', so: 1, loai: 'chon-cau', lenh: 'Trò chơi: Ai nhanh? Ai đúng? – a) Chỉ vào hình, hỏi đáp tên người, vật.',
          goiY: 'Mẫu: – Đây là ai? / Đây là gì? – Đây là hai bạn học sinh. / Đây là đèn giao thông. Nhìn số trên hình, chọn câu đúng thật nhanh!',
          cau: [
            { hinh: I + 'v1.webp', hoi: 'Số 1: Đây là gì?', dung: 'Đây là đường.', sai: ['Đây là cầu.', 'Đây là xe buýt.'] },
            { hinh: I + 'v2.webp', hoi: 'Số 2: Đây là gì?', dung: 'Đây là đèn giao thông.', sai: ['Đây là xe đạp.', 'Đây là cầu.'] },
            { hinh: I + 'v3.webp', hoi: 'Số 3: Đây là gì?', dung: 'Đây là xe máy.', sai: ['Đây là xe đạp.', 'Đây là ô tô.'] },
            { hinh: I + 'v4.webp', hoi: 'Số 4: Đây là gì?', dung: 'Đây là xe buýt.', sai: ['Đây là ô tô.', 'Đây là tàu hoả.'] },
            { hinh: I + 'v5.webp', hoi: 'Số 5: Đây là gì?', dung: 'Đây là xe đạp.', sai: ['Đây là xe máy.', 'Đây là xe buýt.'] },
            { hinh: I + 'v6.webp', hoi: 'Số 6: Đây là gì?', dung: 'Đây là ô tô.', sai: ['Đây là xe buýt.', 'Đây là xe máy.'] },
            { hinh: I + 'v7.webp', hoi: 'Số 7: Đây là ai?', dung: 'Đây là hai bạn học sinh.', sai: ['Đây là hai mẹ con.', 'Đây là ông và bà.'] },
            { hinh: I + 'v8.webp', hoi: 'Số 8: Đây là ai?', dung: 'Đây là hai mẹ con.', sai: ['Đây là hai bạn học sinh.', 'Đây là ông và cháu.'] }
          ]
        },
        {
          id: 'tvv1b', so: 1, loai: 'chon-cau', lenh: 'Trò chơi: Ai nhanh? Ai đúng? – b) Chỉ vào hình, hỏi đáp hoạt động của người, vật.',
          goiY: 'Mẫu: – Hai bạn này đang làm gì? – Hai bạn ấy đang qua đường.',
          cau: [
            { hinh: I + 'v7.webp', hoi: 'Hai bạn này đang làm gì?', dung: 'Hai bạn ấy đang qua đường.', sai: ['Hai bạn ấy đang đi xe đạp.', 'Hai bạn ấy đang đi máy bay.'] },
            { hinh: I + 'v8.webp', hoi: 'Hai mẹ con này đang làm gì?', dung: 'Hai mẹ con ấy đang đi bộ.', sai: ['Hai mẹ con ấy đang đi xe buýt.', 'Hai mẹ con ấy đang đi xe đạp.'] },
            { hinh: I + 'v5.webp', hoi: 'Bạn này đang làm gì?', dung: 'Bạn ấy đang đi xe đạp.', sai: ['Bạn ấy đang đi xe máy.', 'Bạn ấy đang đi bộ.'] },
            { hinh: I + 'v3.webp', hoi: 'Người này đang làm gì?', dung: 'Người ấy đang đi xe máy.', sai: ['Người ấy đang đi xe đạp.', 'Người ấy đang đi ô tô.'] }
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'loi-thoai', lenh: 'Hỏi đáp với bạn theo mẫu',
          goiY: 'Đọc mẫu, rồi hỏi đáp với bạn (hoặc bố mẹ). Ở chỗ “…”, em nói về nhà của em.',
          ghiAm: 'Ghi âm em hỏi đáp với bạn',
          vai: { 'Bạn A': { av: I + 'av-ban1.webp' }, 'Bạn B': { av: I + 'av-ban2.webp' } },
          loi: [
            { ai: 'Bạn A', c: 'Nhà cậu ở đâu?' },
            { ai: 'Bạn B', c: 'Nhà tớ ở …' },
            { ai: 'Bạn A', c: 'Nhà cậu cách trường bao xa?' },
            { ai: 'Bạn B', c: 'Nhà tớ cách trường …' },
            { ai: 'Bạn A', c: 'Cậu đi học bằng gì?' },
            { ai: 'Bạn B', c: 'Tớ …' }
          ]
        },
        {
          id: 'tvv3', so: 3, loai: 'hoc-hat', lenh: 'Học hát: Bài ca đi học (Phan Trần Bảng)',
          baiHat: 'Bài ca đi học', tacGia: 'Phan Trần Bảng', youtube: 'vGY7tawVDco'
        }
      ]
    }
  ]
};
