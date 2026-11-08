/* Quyển 2 – Bài 8: Anh đã đi vịnh Hạ Long chưa?  (sách trang 47–53) */
const A = 'audio/', H = 'img/';
const the = (f, tu) => ({ hinh: H + 'tn-' + f + '.webp', tu, am: A + 'tn-' + f + '.mp3' });
const hoiDi = (hinh, dung, sai) => ({ hinh: H + hinh, hoi: 'Em hỏi bạn thế nào?', dung, sai });
const danhDau = (f, ten, dung, sai) => ({ hinh: H + 'tt-' + f + '-dau.webp', hoi: 'Bạn ' + ten + ' đánh dấu tranh này. Em nói thế nào?', dung: 'Bạn ' + ten + ' đã đi ' + dung + '.', sai: sai.map(s => 'Bạn ' + ten + ' đã đi ' + s + '.') });

const BAI_HOC = {
  quyen: 2, bai: 8, ten: 'Anh đã đi vịnh Hạ Long chưa?', chuDe: 'Thiên nhiên', chu: 'p, ph, t, qu, th', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [47],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh1.mp3', danhSo: true, anChu: true, cot: 3,
          goiY: 'Chạm vào từng hình để nghe, rồi nhắc lại. Lịch: ngày khoanh đỏ là hôm nay, phần tô xanh là thời gian được nói đến. Mũi tên: chấm có vòng vàng là năm được nói đến.',
          the: [
            the('hom-kia', 'hôm kia'), the('tuan-truoc', 'tuần trước'), the('thang-truoc', 'tháng trước'),
            the('nam-kia', 'năm kia'), the('nam-ngoai', 'năm ngoái'), the('nam-nay', 'năm nay')
          ]
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh2.mp3', danhSo: true, anChu: true, cot: 3,
          the: [
            the('ha-long', 'đi vịnh Hạ Long'), the('truong', 'đi đến trường'), the('xem-phim', 'đi xem phim'),
            the('cong-vien', 'đi công viên'), the('sieu-thi', 'đi siêu thị'), the('cho', 'đi chợ')
          ]
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [48, 49],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – A', amLenh: A + 'ht-lenh.mp3',
          hinh: H + 'ht-a.webp', moTa: 'Nam nghĩ đến xem phim, đi công viên; Dũng nghĩ đến vịnh Hạ Long',
          vai: { 'Dũng': { av: H + 'av-dung.webp', mau: '#3E9B5F' }, 'Nam': { av: H + 'av-nam.webp', mau: '#3C78C8' } },
          loi: [
            { ai: 'Dũng', c: '– Mùa hè, em thích làm gì?', am: A + 'ht-a1.mp3' },
            { ai: 'Nam', c: '– Em thích đi xem phim, đi công viên. Còn anh?', am: A + 'ht-a2.mp3' },
            { ai: 'Dũng', c: '– Anh thích đi du lịch.', am: A + 'ht-a3.mp3' },
            { ai: 'Nam', c: '– Anh đã đi vịnh Hạ Long chưa?', am: A + 'ht-a4.mp3' },
            { ai: 'Dũng', c: '– Anh đi rồi.', am: A + 'ht-a5.mp3' },
            { ai: 'Nam', c: '– Anh đi bao giờ?', am: A + 'ht-a6.mp3' },
            { ai: 'Dũng', c: '– Anh đi năm ngoái.', am: A + 'ht-a7.mp3' },
            { ai: 'Nam', c: '– Anh thấy vịnh Hạ Long đẹp chứ?', am: A + 'ht-a8.mp3' },
            { ai: 'Dũng', c: '– Vịnh rất đẹp. Du lịch ở đó rất thú vị.', am: A + 'ht-a9.mp3' }
          ]
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – B', amLenh: A + 'ht-lenh.mp3',
          hinh: H + 'ht-b.webp', moTa: 'Mai kể với chị Liên về siêu thị Nhật',
          vai: { 'Mai': { av: H + 'av-mai.webp', mau: '#E0577A' }, 'Liên': { av: H + 'av-lien.webp', mau: '#D9822B' } },
          loi: [
            { ai: 'Mai', c: '– Chị Liên ơi, chị đã đi siêu thị Nhật chưa?', am: A + 'ht-b1.mp3' },
            { ai: 'Liên', c: '– Chị chưa đi. Siêu thị đó thế nào?', am: A + 'ht-b2.mp3' },
            { ai: 'Mai', c: '– Siêu thị đó khá to, có nhiều món ăn Nhật.', am: A + 'ht-b3.mp3' },
            { ai: 'Liên', c: '– Em đi hôm nào?', am: A + 'ht-b4.mp3' },
            { ai: 'Mai', c: '– Em đi hôm kia. Chị đã ăn món ăn Nhật chưa?', am: A + 'ht-b5.mp3' },
            { ai: 'Liên', c: '– Tuần trước, chị ăn ở nhà ông bà chị rồi.', am: A + 'ht-b6.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'hoat-dong', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          goiY: 'Em và bố mẹ (hoặc bạn) mỗi người một vai. Em cũng có thể bấm “Đóng vai” ở bài 1 để máy nói lời của bạn kia.',
          noiDung: ['Đóng vai Dũng và Nam, nhắc lại đoạn hội thoại A.', 'Đóng vai Mai và chị Liên, nhắc lại đoạn hội thoại B.'],
          ghiAm: 'Ghi âm em đóng vai'
        },
        {
          id: 'ht3', so: 3, loai: 'chon-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Nhìn từng hình, chọn câu hỏi đúng với hình. Rồi em hỏi đáp với bố mẹ theo mẫu: “Bạn đi khi nào?” – “Tớ đi hôm kia / tuần trước / năm ngoái…”.',
          mau: { cau: [
            { c: 'Bạn đã đi vịnh Hạ Long chưa?' }, { c: 'Tớ đi rồi.' }, { c: 'Bạn đi khi nào?' }, { c: 'Tớ đi hôm kia.' }
          ] },
          cau: [
            hoiDi('ht3-1.webp', 'Bạn đã đi vịnh Hạ Long chưa?', ['Bạn đã đi công viên chưa?', 'Bạn đã đi Đà Lạt chưa?']),
            hoiDi('ht3-2.webp', 'Bạn đã đi công viên chưa?', ['Bạn đã đi chợ chưa?', 'Bạn đã đi vịnh Hạ Long chưa?']),
            hoiDi('ht3-3.webp', 'Bạn đã đi chợ chưa?', ['Bạn đã đi công viên chưa?', 'Bạn đã đi đến trường chưa?']),
            hoiDi('ht3-4.webp', 'Bạn đã đi đến trường chưa?', ['Bạn đã đi chợ chưa?', 'Bạn đã đi Đà Lạt chưa?']),
            hoiDi('ht3-5.webp', 'Bạn đã đi Đà Lạt chưa?', ['Bạn đã đi vịnh Hạ Long chưa?', 'Bạn đã đi công viên chưa?'])
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [50, 51],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'the-chu', lenh: 'Nghe và nhắc lại', amLenh: A + 'ld-lenh.mp3',
          chu: [
            { hoa: 'P', thuong: 'p', am: A + 'ld-p.mp3' },
            { hoa: 'Ph', thuong: 'ph', am: A + 'ld-ph.mp3' },
            { hoa: 'T', thuong: 't', am: A + 'ld-t.mp3' },
            { hoa: 'Qu', thuong: 'qu', am: A + 'ld-qu.mp3' },
            { hoa: 'Th', thuong: 'th', am: A + 'ld-th.mp3' }
          ]
        },
        {
          id: 'ld2', so: 2, loai: 'danh-van', lenh: 'Đánh vần',
          tu: [
            { hinh: H + 'dv-pi.webp', tieng: 'pi', phan: ['p', 'i'], thanh: null, doc: 'pờ – i – pi' },
            { hinh: H + 'dv-pho.webp', tieng: 'phở', phan: ['ph', 'ơ'], thanh: 'hỏi', doc: 'phờ – ơ – phơ – hỏi – phở' },
            { hinh: H + 'dv-to.webp', tieng: 'tổ', phan: ['t', 'ô'], thanh: 'hỏi', doc: 'tờ – ô – tô – hỏi – tổ' },
            { hinh: H + 'dv-qua.webp', tieng: 'quả', phan: ['qu', 'a'], thanh: 'hỏi', doc: 'quờ – a – qua – hỏi – quả' },
            { hinh: H + 'dv-tho.webp', tieng: 'thỏ', phan: ['th', 'o'], thanh: 'hỏi', doc: 'thờ – o – tho – hỏi – thỏ' }
          ]
        },
        {
          id: 'ld3', so: 3, loai: 'noi', lenh: 'Đọc các từ ngữ sau',
          goiY: 'Em đọc to từng từ ngữ, rồi nối từ ngữ với hình đúng.', tenA: 'Từ ngữ', tenB: 'Hình',
          a: [{ c: 'pa nô' }, { c: 'phố cổ' }, { c: 'quê nhà' }, { c: 'tủ gỗ' }, { c: 'thìa' }, { c: 'thợ mỏ' }],
          b: [{ hinh: H + 'ld-thia.webp' }, { hinh: H + 'ld-que-nha.webp' }, { hinh: H + 'ld-pa-no.webp' }, { hinh: H + 'ld-tho-mo.webp' }, { hinh: H + 'ld-pho-co.webp' }, { hinh: H + 'ld-tu-go.webp' }],
          cap: [[0, 2], [1, 4], [2, 1], [3, 5], [4, 0], [5, 3]]
        },
        {
          id: 'ld4a', so: 4, loai: 'doc-bai', lenh: 'Đọc bài sau',
          ten: 'Qua nhà bà', hinh: H + 'qua-nha-ba.webp',
          cau: [
            { c: 'Mẹ đưa bé qua nhà bà.' }, { c: 'Nhà bà ở phố Nhà Thờ.' },
            { c: 'Phố có nhà thờ to, có ô tô.' }, { c: 'Hè phố có phở, có cả cà phê.' }
          ]
        },
        {
          id: 'ld4b', so: 4, loai: 'noi', lenh: 'Nối đúng',
          goiY: 'Đọc bài “Qua nhà bà”, rồi nối ô ở cột A với ô ở cột B.',
          a: [{ c: 'Nhà bà' }, { c: 'Phố' }, { c: 'Hè phố' }],
          b: [{ c: 'có phở, có cả cà phê.' }, { c: 'có nhà thờ to, có ô tô.' }, { c: 'ở phố Nhà Thờ.' }],
          cap: [[0, 2], [1, 1], [2, 0]]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [52],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'dien-chu', lenh: 'Điền chữ còn thiếu',
          tu: [
            { hinh: H + 'lv-pho.webp', mau: '…ở', dap: 'phở' },
            { hinh: H + 'lv-que-nha.webp', mau: '…ê nhà', dap: 'quê nhà' },
            { hinh: H + 'lv-to.webp', mau: '…ổ', dap: 'tổ' },
            { hinh: H + 'lv-tho.webp', mau: '…ỏ', dap: 'thỏ' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Chép lại các từ sau',
          tu: [
            { c: 'cà phê', hinh: H + 'lv-ca-phe.webp' }, { c: 'quạ', hinh: H + 'lv-qua.webp' },
            { c: 'tô', hinh: H + 'lv-to2.webp' }, { c: 'thẻ', hinh: H + 'lv-the.webp' }
          ]
        },
        {
          id: 'lv3', so: 3, loai: 'viet-o-li', lenh: 'Viết các từ sau',
          tu: [{ c: 'phố' }, { c: 'quả' }, { c: 'tủ' }, { c: 'thợ' }]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [53],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'chon-cau', lenh: 'Trò chơi: Bạn đã đi đâu?',
          goiY: 'Từng cặp học sinh chơi. Học sinh 1 tự đánh dấu hoạt động của mình trong bảng. Học sinh 2 nhìn vào đó và nói: “Bạn … đã đi …”. Đổi vai, làm lại như vậy. Mẫu: Học sinh 1 đánh dấu vào tranh siêu thị. Học sinh 2 nói: “Bạn … (tên học sinh 1) đã đi siêu thị.”. Ở đây, em nhìn tranh có dấu và chọn câu đúng.',
          cau: [
            danhDau('sieu-thi', 'Mai', 'siêu thị', ['công viên', 'xem phim']),
            danhDau('xem-phim', 'Nam', 'xem phim', ['siêu thị', 'công viên']),
            danhDau('cong-vien', 'Liên', 'công viên', ['xem phim', 'siêu thị']),
            danhDau('svd', 'Dũng', 'sân vận động', ['công viên', 'xem phim'])
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'loi-thoai', lenh: 'Hỏi đáp với bạn theo mẫu',
          goiY: 'Đọc mẫu, rồi hỏi đáp với bạn (hoặc bố mẹ) về nơi em đã đi.',
          vai: { 'Bạn gái': { av: H + 'av-gai.webp' }, 'Bạn trai': { av: H + 'av-trai.webp' } },
          loi: [
            { ai: 'Bạn gái', c: '– Bạn đã đi công viên chưa?' },
            { ai: 'Bạn trai', c: '– Tớ đi rồi.' },
            { ai: 'Bạn gái', c: '– Bạn đi công viên bao giờ?' },
            { ai: 'Bạn trai', c: '– Tớ đi tuần trước.' }
          ],
          ghiAm: 'Ghi âm em hỏi đáp cùng bố mẹ'
        },
        {
          id: 'tvv3', so: 3, loai: 'hoc-hat', lenh: 'Học hát: Chủ nhật, cả nhà em đi chơi (Nguyễn Hậu)',
          baiHat: 'Chủ nhật, cả nhà em đi chơi', tacGia: 'Nguyễn Hậu', youtube: 'eAwdXu5ONPk'
        }
      ]
    }
  ]
};
