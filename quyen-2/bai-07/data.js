/* Quyển 2 – Bài 7: Bạn thích đi du lịch chứ?  (sách trang 40–46) */
const A = 'audio/', H = 'img/';
const the = (f, tu) => ({ hinh: H + 'tn-' + f + '.webp', tu, am: A + 'tn-' + f + '.mp3' });
// Trò chơi Ai nhanh tay?: 8 mảnh bìa
const BIA = {
  'tắm biển': 'tam-bien', 'leo núi': 'leo-nui', 'đi rừng': 'di-rung', 'cắm trại': 'cam-trai',
  'bảo tàng': 'bao-tang', 'triển lãm': 'trien-lam', 'công viên': 'cong-vien', 'nhà hát': 'nha-hat'
};
const biaHinh = tu => ({ hinh: H + 'an-' + BIA[tu] + '.webp' });
const biaAm = tu => tu === 'công viên' ? null : A + 'tn-' + BIA[tu] + '.mp3';
// Học sinh 1 nói "Tớ thích đi…", em tìm mảnh bìa
const timBia = (tu, cau, sai) => ({ hoi: { c: cau, am: biaAm(tu) }, dung: biaHinh(tu), sai: sai.map(biaHinh) });
// Học sinh 2 đưa mảnh bìa, em nói đúng từ
const noiTu = (tu, sai) => ({ hinh: H + 'an-' + BIA[tu] + '.webp', hoi: 'Từ nào đúng với hình?', dung: tu, sai, amDung: biaAm(tu) });

const BAI_HOC = {
  quyen: 2, bai: 7, ten: 'Bạn thích đi du lịch chứ?', chuDe: 'Thiên nhiên', chu: 'g, gh, gi, ng, ngh', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [40],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh1.mp3', danhSo: true, anChu: true,
          the: [the('leo-nui', 'leo núi'), the('di-rung', 'đi rừng'), the('tam-bien', 'tắm biển'), the('cam-trai', 'cắm trại')]
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh2.mp3', danhSo: true, anChu: true,
          the: [the('den', 'đền'), the('chua', 'chùa'), the('nha-tho', 'nhà thờ'), the('bao-tang', 'bảo tàng'), the('trien-lam', 'triển lãm'), the('nha-hat', 'nhà hát'), the('cho', 'chợ')]
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [41, 42],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – A', amLenh: A + 'ht-lenh.mp3',
          hinh: H + 'ht-a.webp', moTa: 'Nam và Mai đọc cẩm nang du lịch: tắm biển, cắm trại',
          vai: { 'Nam': { av: H + 'av-nam.webp', mau: '#3C78C8' }, 'Mai': { av: H + 'av-mai.webp', mau: '#E0577A' } },
          loi: [
            { ai: 'Nam', c: '– Bạn thích tắm biển à?', am: A + 'ht-a1.mp3' },
            { ai: 'Mai', c: '– Tớ thích lắm. Còn bạn có thích không?', am: A + 'ht-a2.mp3' },
            { ai: 'Nam', c: '– Tớ cũng thích tắm biển. Nhưng tớ thích cắm trại hơn.', am: A + 'ht-a3.mp3' },
            { ai: 'Mai', c: '– Bố mẹ bạn cũng thích cắm trại chứ?', am: A + 'ht-a4.mp3' },
            { ai: 'Nam', c: '– Đúng rồi. Bố mẹ tớ thích lắm.', am: A + 'ht-a5.mp3' }
          ]
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – B', amLenh: A + 'ht-lenh.mp3',
          hinh: H + 'ht-b.webp', moTa: 'Gia đình Liên: bà đi chùa, ông ở nhà, bố đi bảo tàng, mẹ đi siêu thị, Liên đi nhà hát',
          vai: { 'Dũng': { av: H + 'av-dung.webp', mau: '#3E9B5F' }, 'Liên': { av: H + 'av-lien.webp', mau: '#D9822B' } },
          loi: [
            { ai: 'Dũng', c: '– Hôm nay, em đi nhà hát à?', am: A + 'ht-b1.mp3' },
            { ai: 'Liên', c: '– Vâng. Em đi xem hát.', am: A + 'ht-b2.mp3' },
            { ai: 'Dũng', c: '– Bố mẹ em cũng đi nhà hát chứ?', am: A + 'ht-b3.mp3' },
            { ai: 'Liên', c: '– Không. Bố em đi bảo tàng. Mẹ em đi siêu thị.', am: A + 'ht-b4.mp3' },
            { ai: 'Dũng', c: '– Còn ông bà em?', am: A + 'ht-b5.mp3' },
            { ai: 'Liên', c: '– Bà em đi chùa. Ông em ở nhà xem ti vi.', am: A + 'ht-b6.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'hoat-dong', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          goiY: 'Em và bố mẹ (hoặc bạn) mỗi người một vai. Em cũng có thể bấm “Đóng vai” ở bài 1 để máy nói lời của bạn kia.',
          noiDung: ['Đóng vai Nam và Mai, nhắc lại đoạn hội thoại A.', 'Đóng vai Dũng và Liên, nhắc lại đoạn hội thoại B.'],
          ghiAm: 'Ghi âm em đóng vai'
        },
        {
          id: 'ht3', so: 3, loai: 'chon-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Nhìn từng hình, chọn câu hỏi đúng với hình. Rồi em hỏi đáp với bố mẹ theo mẫu.',
          mau: { cau: [
            { c: 'Bạn thích leo núi chứ?' },
            { c: 'Đúng. Tớ thích leo núi. / Không. Tớ không thích leo núi.' },
            { c: 'Còn bố mẹ bạn thích làm gì?' },
            { c: 'Bố tớ thích cắm trại. Còn mẹ tớ thích tắm biển.' }
          ] },
          cau: [
            { hinh: H + 'ht3-1.webp', hoi: 'Em hỏi bạn thế nào?', dung: 'Bạn thích leo núi chứ?', sai: ['Bạn thích tắm biển chứ?', 'Bạn thích đi rừng chứ?'] },
            { hinh: H + 'ht3-2.webp', hoi: 'Em hỏi bạn thế nào?', dung: 'Bạn thích cắm trại chứ?', sai: ['Bạn thích leo núi chứ?', 'Bạn thích đi chùa chứ?'] },
            { hinh: H + 'ht3-3.webp', hoi: 'Em hỏi bạn thế nào?', dung: 'Bạn thích đi rừng chứ?', sai: ['Bạn thích cắm trại chứ?', 'Bạn thích đi bảo tàng chứ?'] },
            { hinh: H + 'ht3-4.webp', hoi: 'Em hỏi bạn thế nào?', dung: 'Bạn thích đi chùa chứ?', sai: ['Bạn thích đi nhà thờ chứ?', 'Bạn thích đi rừng chứ?'] },
            { hinh: H + 'ht3-5.webp', hoi: 'Em hỏi bạn thế nào?', dung: 'Bạn thích đi bảo tàng chứ?', sai: ['Bạn thích đi nhà hát chứ?', 'Bạn thích đi chùa chứ?'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [43, 44],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'the-chu', lenh: 'Nghe và nhắc lại', amLenh: A + 'ld-lenh.mp3',
          chu: [
            { hoa: 'G', thuong: 'g', am: A + 'ld-g.mp3' },
            { hoa: 'Gh', thuong: 'gh', am: A + 'ld-gh.mp3' },
            { hoa: 'Gi', thuong: 'gi', am: A + 'ld-gi.mp3' },
            { hoa: 'Ng', thuong: 'ng', am: A + 'ld-ng.mp3' },
            { hoa: 'Ngh', thuong: 'ngh', am: A + 'ld-ngh.mp3' }
          ]
        },
        {
          id: 'ld2', so: 2, loai: 'danh-van', lenh: 'Đánh vần',
          tu: [
            { hinh: H + 'dv-ga.webp', tieng: 'ga', phan: ['g', 'a'], thanh: null, doc: 'gờ – a – ga' },
            { hinh: H + 'dv-gia.webp', tieng: 'già', phan: ['gi', 'a'], thanh: 'huyền', doc: 'gi (di) – a – gia – huyền – già' },
            { hinh: H + 'dv-ngo.webp', tieng: 'ngô', phan: ['ng', 'ô'], thanh: null, doc: 'ngờ – ô – ngô' },
            { hinh: H + 'dv-nghe.webp', tieng: 'nghé', phan: ['ngh', 'e'], thanh: 'sắc', doc: 'ngờ – e – nghe – sắc – nghé' }
          ]
        },
        {
          id: 'ld3', so: 3, loai: 'noi', lenh: 'Đọc các từ sau',
          goiY: 'Em đọc to từng từ, rồi nối từ với hình đúng.', tenA: 'Từ', tenB: 'Hình',
          a: [{ c: 'gà' }, { c: 'ghế' }, { c: 'gió' }, { c: 'ngủ' }, { c: 'ngựa' }, { c: 'nghệ' }],
          b: [{ hinh: H + 'ld-ngua.webp' }, { hinh: H + 'ld-ga.webp' }, { hinh: H + 'ld-nghe.webp' }, { hinh: H + 'ld-gio.webp' }, { hinh: H + 'ld-ghe.webp' }, { hinh: H + 'ld-ngu.webp' }],
          cap: [[0, 1], [1, 4], [2, 3], [3, 5], [4, 0], [5, 2]]
        },
        {
          id: 'ld4a', so: 4, loai: 'doc-bai', lenh: 'Đọc bài sau',
          ten: 'Nghỉ hè', hinh: H + 'nghi-he.webp',
          cau: [
            { c: 'Bà của Nga đã già.' }, { c: 'Nghỉ hè, Nga ở nhà bà.' }, { c: 'Nhà bà có gà, có cả nghé.' },
            { c: 'Ổ gà be bé.' }, { c: 'Nhà của nghé nho nhỏ.' }, { c: 'Gà có ngô.' }, { c: 'Nghé có cỏ.' }
          ]
        },
        {
          id: 'ld4b', so: 4, loai: 'noi', lenh: 'Nối đúng',
          goiY: 'Đọc bài “Nghỉ hè”, rồi nối ô ở cột A với ô ở cột B.',
          a: [{ c: 'Nhà của nghé' }, { c: 'Nga' }, { c: 'Ổ gà' }],
          b: [{ c: 'nghỉ hè.' }, { c: 'be bé.' }, { c: 'nho nhỏ.' }],
          cap: [[0, 2], [1, 0], [2, 1]]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [44, 45],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'dien-chu', lenh: 'Điền chữ còn thiếu',
          tu: [
            { hinh: H + 'lv-ga.webp', mau: '…à', dap: 'gà' },
            { hinh: H + 'lv-ghe.webp', mau: '…ế', dap: 'ghế' },
            { hinh: H + 'lv-gio.webp', mau: '…ó', dap: 'gió' },
            { hinh: H + 'lv-ngo.webp', mau: '…ô', dap: 'ngô' },
            { hinh: H + 'lv-nghe.webp', mau: '…ệ', dap: 'nghệ' },
            { hinh: H + 'lv-ngua.webp', mau: '…ựa', dap: 'ngựa' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Chép lại các từ ngữ sau',
          tu: [
            { c: 'gỗ', hinh: H + 'lv-go.webp' }, { c: 'ghe', hinh: H + 'lv-ghe2.webp' }, { c: 'giã giò', hinh: H + 'lv-gia-gio.webp' },
            { c: 'giá đỗ', hinh: H + 'lv-gia-do.webp' }, { c: 'ngà', hinh: H + 'lv-nga.webp' }, { c: 'nghĩ', hinh: H + 'lv-nghi.webp' }
          ]
        },
        {
          id: 'lv3', so: 3, loai: 'viet-o-li', lenh: 'Viết các từ sau',
          tu: [{ c: 'ghế' }, { c: 'giã' }, { c: 'ngô' }, { c: 'nghệ' }]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [46],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'loi-thoai', lenh: 'Hỏi đáp với bạn về du lịch',
          goiY: 'Đọc mẫu, rồi hỏi đáp với bạn (hoặc bố mẹ) về nơi em đã đi du lịch.',
          vai: { 'Bạn trai': { av: H + 'av-trai.webp' }, 'Bạn gái': { av: H + 'av-gai.webp' } },
          loi: [
            { ai: 'Bạn trai', c: '– Bạn thích đi du lịch chứ?' },
            { ai: 'Bạn gái', c: '– Có. Tớ đã đi Vũng Tàu.' },
            { ai: 'Bạn trai', c: '– Vũng Tàu đẹp chứ?' },
            { ai: 'Bạn gái', c: '– Vũng Tàu có biển xanh. Đẹp lắm.' },
            { ai: 'Bạn trai', c: '– Bạn đi Vũng Tàu vào mùa đông à?' },
            { ai: 'Bạn gái', c: '– Không. Tớ đi Vũng Tàu vào mùa hè. Gió biển mát lắm.' }
          ],
          ghiAm: 'Ghi âm em kể về chuyến du lịch của em'
        },
        {
          id: 'tvv2', so: 2, loai: 'chon-cau', lenh: 'Trò chơi: Ai nhanh tay?', tronCau: true,
          goiY: 'Chuẩn bị các mảnh bìa có hình: 1) tắm biển, 2) leo núi, 3) đi rừng, 4) cắm trại, 5) bảo tàng, 6) triển lãm, 7) công viên, 8) nhà hát. Từng cặp học sinh đố nhau. Mẫu: Học sinh 1 nói: “Tớ thích đi…”. Học sinh 2 tìm thật nhanh mảnh bìa phù hợp. Học sinh 2 đưa mảnh bìa có hình. Học sinh 1 nói đúng từ ứng với hình trên mảnh bìa. Ở đây, em làm cả hai vai.',
          cau: [
            timBia('tắm biển', 'Tớ thích đi tắm biển.', ['leo núi', 'công viên']),
            timBia('leo núi', 'Tớ thích đi leo núi.', ['đi rừng', 'tắm biển']),
            timBia('cắm trại', 'Tớ thích đi cắm trại.', ['công viên', 'đi rừng']),
            timBia('triển lãm', 'Tớ thích đi triển lãm.', ['bảo tàng', 'nhà hát']),
            noiTu('đi rừng', ['leo núi', 'công viên']),
            noiTu('bảo tàng', ['triển lãm', 'nhà hát']),
            noiTu('công viên', ['đi rừng', 'cắm trại']),
            noiTu('nhà hát', ['bảo tàng', 'triển lãm'])
          ]
        },
        {
          id: 'tvv3', so: 3, loai: 'hoc-hat', lenh: 'Học hát: Nhà mình đi biển (Nguyễn Văn Chung)',
          baiHat: 'Nhà mình đi biển', tacGia: 'Nguyễn Văn Chung', youtube: 'Cq9YeONe81Q'
        }
      ]
    }
  ]
};
