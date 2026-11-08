/* Quyển 2 – Bài 6: Hôm nay thời tiết thế nào?  (sách trang 33–39) */
const A = 'audio/', H = 'img/';
const THOI_TIET = [
  ['nắng', 'nang'], ['mưa', 'mua'], ['mây', 'may'], ['gió', 'gio'], ['bão', 'bao'],
  ['tuyết', 'tuyet'], ['sương mù', 'suong-mu'], ['nóng', 'nong'], ['lạnh', 'lanh'],
  ['ấm', 'am'], ['mát', 'mat'], ['ẩm', 'am2'], ['khô', 'kho']
];
const TT = {}; THOI_TIET.forEach(([tu, f]) => { TT[tu] = { hinh: H + 'tn-' + f + '.webp', tu, am: A + 'tn-' + f + '.mp3' }; });
// Trò chơi Chọn tranh đúng: bạn nói tên thời tiết, em chọn tranh
const doTranh = (tu, sai) => ({ hoi: { c: tu.charAt(0).toUpperCase() + tu.slice(1) + '.', am: TT[tu].am }, dung: { hinh: TT[tu].hinh }, sai: sai.map(s => ({ hinh: TT[s].hinh })) });

const BAI_HOC = {
  quyen: 2, bai: 6, ten: 'Hôm nay thời tiết thế nào?', chuDe: 'Thiên nhiên', chu: 'h, ch, nh, k, kh', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [33],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh1.mp3', danhSo: true, anChu: true, cot: 2,
          the: [
            { hinh: H + 'tn-hom-qua.webp', tu: 'hôm qua', am: A + 'tn-hom-qua.mp3' },
            { hinh: H + 'tn-hom-nay.webp', tu: 'hôm nay', am: A + 'tn-hom-nay.mp3' },
            { hinh: H + 'tn-ngay-mai.webp', tu: 'ngày mai', am: A + 'tn-ngay-mai.mp3' },
            { hinh: H + 'tn-do.webp', tu: 'độ', am: A + 'tn-do.mp3' }
          ]
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh2.mp3', danhSo: true, anChu: true,
          the: THOI_TIET.map(([tu]) => TT[tu])
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [34, 35],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – A', amLenh: A + 'ht-lenh.mp3',
          hinh: H + 'ht-a.webp', moTa: 'Mai và chị Liên xem dự báo thời tiết',
          vai: { 'Mai': { mau: '#E0577A' }, 'Liên': { mau: '#D9822B' } },
          loi: [
            { ai: 'Mai', c: '– Chị Liên ơi, hôm nay thời tiết thế nào?', am: A + 'ht-a1.mp3' },
            { ai: 'Liên', c: '– Hôm nay trời nóng.', am: A + 'ht-a2.mp3' },
            { ai: 'Mai', c: '– Hôm qua có nóng không?', am: A + 'ht-a3.mp3' },
            { ai: 'Liên', c: '– Không. Hôm qua có mưa, trời mát.', am: A + 'ht-a4.mp3' },
            { ai: 'Mai', c: '– Ngày mai có mưa không ạ?', am: A + 'ht-a5.mp3' },
            { ai: 'Liên', c: '– Không. Nhưng ngày mai trời nhiều mây.', am: A + 'ht-a6.mp3' }
          ]
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – B', amLenh: A + 'ht-lenh.mp3',
          hinh: H + 'ht-b.webp', moTa: 'Dũng ở Cà Mau gọi điện cho Nam ở Hà Nội',
          vai: { 'Dũng': { av: H + 'av-dung.webp', mau: '#3E9B5F' }, 'Nam': { av: H + 'av-nam.webp', mau: '#3C78C8' } },
          loi: [
            { ai: 'Dũng', c: '– Nam ơi, tháng này thời tiết Hà Nội thế nào?', am: A + 'ht-b1.mp3' },
            { ai: 'Nam', c: '– Tháng này, Hà Nội lạnh và ẩm, 16 độ ạ.', am: A + 'ht-b2.mp3' },
            { ai: 'Dũng', c: '– Hà Nội có lúc lạnh 10 độ, phải không?', am: A + 'ht-b3.mp3' },
            { ai: 'Nam', c: '– Vâng. Còn ở Cà Mau thời tiết thế nào ạ?', am: A + 'ht-b4.mp3' },
            { ai: 'Dũng', c: '– Ở đây, trời khô và nóng lắm.', am: A + 'ht-b5.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'hoat-dong', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          goiY: 'Em và bố mẹ (hoặc bạn) mỗi người một vai. Em cũng có thể bấm “Đóng vai” ở bài 1 để máy nói lời của bạn kia.',
          noiDung: ['Đóng vai Mai và chị Liên, nhắc lại đoạn hội thoại A.', 'Đóng vai Dũng và Nam, nhắc lại đoạn hội thoại B.'],
          ghiAm: 'Ghi âm em đóng vai'
        },
        {
          id: 'ht3', so: 3, loai: 'chon-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Nhìn từng hình và chọn câu trả lời đúng. Ở hình 4 và 5: hình bên trái là hôm nay, hình bên phải là ngày mai. Rồi em hỏi đáp với bố mẹ theo mẫu.',
          mau: { cau: [
            { c: 'Hôm nay, trời thế nào?' },
            { c: 'Hôm nay, trời khá ấm, 25 độ.' },
            { c: 'Ngày mai trời có ấm không?' },
            { c: 'Có. Ngày mai trời cũng ấm, 26 độ. / Không. Ngày mai trời lạnh, 18 độ.' }
          ] },
          cau: [
            { hinh: H + 'ht3-1.webp', hoi: 'Hôm nay, trời thế nào?', dung: 'Hôm nay, trời khá ấm, 25 độ.', sai: ['Hôm nay, trời nóng, 35 độ.', 'Hôm nay, trời lạnh, 18 độ.'] },
            { hinh: H + 'ht3-2.webp', hoi: 'Hôm nay, trời thế nào?', dung: 'Hôm nay, trời mát, 22 độ.', sai: ['Hôm nay, trời nóng, 35 độ.', 'Hôm nay, trời lạnh, 10 độ.'] },
            { hinh: H + 'ht3-3.webp', hoi: 'Hôm nay, trời thế nào?', dung: 'Hôm nay, trời nóng, 35 độ.', sai: ['Hôm nay, trời mát, 22 độ.', 'Hôm nay, trời lạnh, 16 độ.'] },
            { hinh: H + 'ht3-4.webp', hoi: 'Hôm nay, trời thế nào?', dung: 'Hôm nay, trời ẩm.', sai: ['Hôm nay, trời khô.', 'Hôm nay, có bão.'] },
            { hinh: H + 'ht3-4.webp', hoi: 'Ngày mai trời có ẩm không?', dung: 'Không. Ngày mai trời khô.', sai: ['Có. Ngày mai trời cũng ẩm.', 'Không. Ngày mai có bão.'] },
            { hinh: H + 'ht3-5.webp', hoi: 'Hôm nay, trời thế nào?', dung: 'Hôm nay, có gió nhẹ.', sai: ['Hôm nay, có bão.', 'Hôm nay, trời khô.'] },
            { hinh: H + 'ht3-5.webp', hoi: 'Ngày mai có gió nhẹ không?', dung: 'Không. Ngày mai có bão.', sai: ['Có. Ngày mai cũng có gió nhẹ.', 'Không. Ngày mai trời ẩm.'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [36, 37],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'the-chu', lenh: 'Nghe và nhắc lại', amLenh: A + 'ld-lenh.mp3',
          chu: [
            { hoa: 'H', thuong: 'h', am: A + 'ld-h.mp3' },
            { hoa: 'Ch', thuong: 'ch', am: A + 'ld-ch.mp3' },
            { hoa: 'Nh', thuong: 'nh', am: A + 'ld-nh.mp3' },
            { hoa: 'K', thuong: 'k', am: A + 'ld-k.mp3' },
            { hoa: 'Kh', thuong: 'kh', am: A + 'ld-kh.mp3' }
          ]
        },
        {
          id: 'ld2', so: 2, loai: 'danh-van', lenh: 'Đánh vần',
          tu: [
            { hinh: H + 'dv-ho.webp', tieng: 'hổ', phan: ['h', 'ô'], thanh: 'hỏi', doc: 'hờ – ô – hô – hỏi – hổ' },
            { hinh: H + 'dv-cho.webp', tieng: 'chó', phan: ['ch', 'o'], thanh: 'sắc', doc: 'chờ – o – cho – sắc – chó' },
            { hinh: H + 'dv-nho.webp', tieng: 'nho', phan: ['nh', 'o'], thanh: null, doc: 'nhờ – o – nho' },
            { hinh: H + 'dv-ki-da.webp', tieng: 'kì', phan: ['k', 'i'], thanh: 'huyền', doc: 'k (ca) – i – ki – huyền – kì' },
            { hinh: H + 'dv-khe.webp', tieng: 'khế', phan: ['kh', 'ê'], thanh: 'sắc', doc: 'khờ – ê – khê – sắc – khế' }
          ]
        },
        {
          id: 'ld3', so: 3, loai: 'noi', lenh: 'Đọc các từ ngữ sau',
          goiY: 'Em đọc to từng từ ngữ, rồi nối từ ngữ với hình đúng.', tenA: 'Từ ngữ', tenB: 'Hình',
          a: [{ c: 'hồ' }, { c: 'nhà' }, { c: 'cá kho' }, { c: 'kẻ' }],
          b: [{ hinh: H + 'ld-ca-kho.webp' }, { hinh: H + 'ld-ho.webp' }, { hinh: H + 'ld-ke.webp' }, { hinh: H + 'ld-nha.webp' }],
          cap: [[0, 1], [1, 3], [2, 0], [3, 2]]
        },
        {
          id: 'ld4a', so: 4, loai: 'doc-bai', lenh: 'Đọc bài sau',
          ten: 'Nhà của Hà', hinh: H + 'nha-cua-ha.webp',
          cau: [{ c: 'Nhà Hà có hồ.' }, { c: 'Hồ nhỏ mà có cá, có cả ba ba.' }, { c: 'Bờ hồ có nho, có na, có khế.' }]
        },
        {
          id: 'ld4b', so: 4, loai: 'noi', lenh: 'Nối đúng',
          goiY: 'Đọc bài “Nhà của Hà”, rồi nối ô ở cột A với ô ở cột B. Mẫu: Hồ – nhỏ.',
          a: [{ c: 'Hồ' }, { c: 'Hồ có' }, { c: 'Bờ hồ có' }],
          b: [{ c: 'nho, na, khế.' }, { c: 'nhỏ.' }, { c: 'cá, ba ba.' }],
          cap: [[0, 1], [1, 2], [2, 0]]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [37, 38],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'dien-chu', lenh: 'Điền chữ còn thiếu',
          tu: [
            { hinh: H + 'lv-ho.webp', mau: '…ổ', dap: 'hổ' },
            { hinh: H + 'lv-cho.webp', mau: '…ó', dap: 'chó' },
            { hinh: H + 'lv-khe.webp', mau: '…ế', dap: 'khế' },
            { hinh: H + 'lv-nha.webp', mau: '…à', dap: 'nhà' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Chép lại các từ ngữ sau',
          tu: [
            { c: 'chè', hinh: H + 'lv-che.webp' }, { c: 'chú hề', hinh: H + 'lv-chu-he.webp' }, { c: 'kệ', hinh: H + 'lv-ke.webp' },
            { c: 'khỉ', hinh: H + 'lv-khi.webp' }, { c: 'nhổ', hinh: H + 'lv-nho.webp' }, { c: 'nhị', hinh: H + 'lv-nhi.webp' }
          ]
        },
        {
          id: 'lv3', so: 3, loai: 'viet-o-li', lenh: 'Viết các từ sau',
          tu: [{ c: 'hổ' }, { c: 'chó' }, { c: 'kẻ' }, { c: 'nhà' }]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [39],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'loi-thoai', lenh: 'Hỏi đáp với bạn về thời tiết ở nơi em sống',
          goiY: 'Đọc mẫu, rồi hỏi đáp với bạn (hoặc bố mẹ). Em thay “Tokyo” bằng nơi em sống nhé.',
          vai: { 'Bạn trai': { av: H + 'av-trai.webp' }, 'Bạn gái': { av: H + 'av-gai.webp' } },
          loi: [
            { ai: 'Bạn trai', c: '– Bạn sống ở đâu?' },
            { ai: 'Bạn gái', c: '– Tớ sống ở Tokyo.' },
            { ai: 'Bạn trai', c: '– Hôm nay thời tiết Tokyo thế nào?' },
            { ai: 'Bạn gái', c: '– Hôm nay trời nắng.' },
            { ai: 'Bạn trai', c: '– Bây giờ ở Tokyo bao nhiêu độ?' },
            { ai: 'Bạn gái', c: '– Bây giờ 15 độ.' },
            { ai: 'Bạn trai', c: '– Bạn có thích thời tiết mùa này không?' },
            { ai: 'Bạn gái', c: '– Có. Tớ thích. / Không. Tớ không thích.' }
          ],
          ghiAm: 'Ghi âm em nói về thời tiết nơi em sống'
        },
        {
          id: 'tvv2', so: 2, loai: 'chon-cau', lenh: 'Trò chơi: Chọn tranh đúng', tronCau: true,
          goiY: 'Từng cặp đố nhau: một bạn nói tên thời tiết (mưa, nắng, gió, sương mù, tuyết, ẩm, khô), bạn kia giơ tranh đúng. Ở đây, em nghe và chọn tranh đúng.',
          cau: [
            doTranh('mưa', ['tuyết', 'nắng']), doTranh('nắng', ['mưa', 'sương mù']), doTranh('gió', ['khô', 'tuyết']),
            doTranh('sương mù', ['gió', 'ẩm']), doTranh('tuyết', ['sương mù', 'mưa']), doTranh('ẩm', ['khô', 'nắng']),
            doTranh('khô', ['ẩm', 'gió'])
          ]
        },
        {
          id: 'tvv3', so: 3, loai: 'doc-tho', lenh: 'Học thơ: Mưa (Lê Lâm)', amLenh: A + 'tvv-lenh3.mp3',
          ten: 'Mưa', nguon: 'Lê Lâm',
          cau: [
            { c: 'Mưa ở trên trời', am: A + 'tvv-t1.mp3' }, { c: 'Mưa rơi xuống đất', am: A + 'tvv-t2.mp3' },
            { c: 'Vừa ngồi trong nước', am: A + 'tvv-t3.mp3' }, { c: 'Đã nhào ra sân', am: A + 'tvv-t4.mp3' },
            { c: 'Mưa không có chân', am: A + 'tvv-t5.mp3' }, { c: 'Ở đâu cũng đến.', am: A + 'tvv-t6.mp3' }
          ]
        }
      ]
    }
  ]
};
