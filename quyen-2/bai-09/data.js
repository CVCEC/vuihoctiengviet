/* Quyển 2 – Bài 9: Hè này bạn sẽ đi đâu?  (sách trang 54–60) */
const A = 'audio/', H = 'img/';
const the = (f, tu) => ({ hinh: H + 'tn-' + f + '.webp', tu, am: A + 'tn-' + f + '.mp3' });
const hoiDi = (hinh, dung, sai) => ({ hinh: H + hinh, hoi: 'Em hỏi bạn thế nào?', dung, sai });

const BAI_HOC = {
  quyen: 2, bai: 9, ten: 'Hè này bạn sẽ đi đâu?', chuDe: 'Thiên nhiên', chu: 'r, tr, v, s, x', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [54],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh1.mp3', danhSo: true, anChu: true, cot: 3,
          goiY: 'Chạm vào từng hình để nghe, rồi nhắc lại. Lịch: ngày khoanh đỏ là hôm nay, phần tô màu là thời gian được nói đến. Mũi tên: chấm có vòng vàng là năm được nói đến.',
          the: [
            the('ngay-kia', 'ngày kia (ngày mốt)'), the('tuan-sau', 'tuần sau'), the('thang-sau', 'tháng sau'),
            the('nam-nay', 'năm nay'), the('nam-sau', 'năm sau')
          ]
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh2.mp3', danhSo: true, anChu: true, cot: 2,
          the: [
            the('bao-gio', 'Bao giờ?'), the('bay-gio', 'bây giờ (16 giờ 15 phút)'),
            the('luc-nay', 'lúc nãy (15 giờ)'), the('lat-nua', 'lát nữa (17 giờ 30 phút)')
          ]
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [55, 56],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – A', amLenh: A + 'ht-lenh.mp3',
          hinh: H + 'ht-a.webp', moTa: 'Nam gọi điện cho bố, muốn mua hộp bút màu',
          vai: { 'Nam': { av: H + 'av-nam.webp', mau: '#3C78C8' }, 'Bố': { av: H + 'av-bo.webp', mau: '#2B8C99' } },
          loi: [
            { ai: 'Nam', c: '– Bố ơi! Bao giờ bố về ạ?', am: A + 'ht-a1.mp3' },
            { ai: 'Bố', c: '– Bây giờ bố đang làm việc. Lát nữa bố về.', am: A + 'ht-a2.mp3' },
            { ai: 'Nam', c: '– Con muốn mua một hộp bút màu.', am: A + 'ht-a3.mp3' },
            { ai: 'Bố', c: '– Con muốn mua ngay à?', am: A + 'ht-a4.mp3' },
            { ai: 'Nam', c: '– Vâng. Ngày mai, con sẽ đi học vẽ.', am: A + 'ht-a5.mp3' },
            { ai: 'Bố', c: '– Con không nhờ mẹ mua à?', am: A + 'ht-a6.mp3' },
            { ai: 'Nam', c: '– Lúc nãy, mẹ đi chợ, con không nhớ.', am: A + 'ht-a7.mp3' },
            { ai: 'Bố', c: '– Được, lát nữa bố sẽ mua.', am: A + 'ht-a8.mp3' }
          ]
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – B', amLenh: A + 'ht-lenh.mp3',
          hinh: H + 'ht-b.webp', moTa: 'Nam và Dũng nói về kế hoạch nghỉ hè: tắm biển, leo núi, cắm trại',
          vai: { 'Nam': { av: H + 'av-nam.webp', mau: '#3C78C8' }, 'Dũng': { av: H + 'av-dung.webp', mau: '#3E9B5F' } },
          loi: [
            { ai: 'Nam', c: '– Khi nào anh nghỉ hè?', am: A + 'ht-b1.mp3' },
            { ai: 'Dũng', c: '– Tuần sau. Còn em?', am: A + 'ht-b2.mp3' },
            { ai: 'Nam', c: '– Tuần sau, em cũng được nghỉ. Hè này, anh sẽ đi đâu?', am: A + 'ht-b3.mp3' },
            { ai: 'Dũng', c: '– Anh sẽ về quê và đi tắm biển. Còn em sẽ đi đâu?', am: A + 'ht-b4.mp3' },
            { ai: 'Nam', c: '– Hè này, nhà em sẽ đi Sa Pa.', am: A + 'ht-b5.mp3' },
            { ai: 'Dũng', c: '– Em sẽ leo núi, cắm trại à?', am: A + 'ht-b6.mp3' },
            { ai: 'Nam', c: '– Vâng.', am: A + 'ht-b7.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'hoat-dong', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          goiY: 'Em và bố mẹ (hoặc bạn) mỗi người một vai. Em cũng có thể bấm “Đóng vai” ở bài 1 để máy nói lời của bạn kia.',
          noiDung: ['Đóng vai Nam và bố, nhắc lại đoạn hội thoại A.', 'Đóng vai Nam và Dũng, nhắc lại đoạn hội thoại B.'],
          ghiAm: 'Ghi âm em đóng vai'
        },
        {
          id: 'ht3', so: 3, loai: 'chon-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Nhìn từng hình, chọn câu hỏi đúng với hình. Rồi em hỏi đáp với bố mẹ theo mẫu: “Bao giờ bạn đi?” – “Ngày kia / Tuần sau / Tháng sau… tớ sẽ đi.”.',
          mau: { cau: [
            { c: 'Bạn sẽ đi bảo tàng à?' }, { c: 'Vâng. Đúng rồi.' }, { c: 'Bao giờ bạn đi?' }, { c: 'Ngày kia tớ sẽ đi.' }
          ] },
          cau: [
            hoiDi('ht3-1.webp', 'Bạn sẽ đi bảo tàng à?', ['Bạn sẽ đi nhà hát à?', 'Bạn sẽ đi Sa Pa à?']),
            hoiDi('ht3-2.webp', 'Bạn sẽ đi nhà hát à?', ['Bạn sẽ đi triển lãm à?', 'Bạn sẽ đi bảo tàng à?']),
            hoiDi('ht3-3.webp', 'Bạn sẽ đi triển lãm à?', ['Bạn sẽ đi nhà hát à?', 'Bạn sẽ đi Cà Mau à?']),
            hoiDi('ht3-4.webp', 'Bạn sẽ đi Sa Pa à?', ['Bạn sẽ đi Cà Mau à?', 'Bạn sẽ đi bảo tàng à?']),
            hoiDi('ht3-5.webp', 'Bạn sẽ đi Cà Mau à?', ['Bạn sẽ đi Sa Pa à?', 'Bạn sẽ đi triển lãm à?'])
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [56, 57, 58],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'the-chu', lenh: 'Nghe và nhắc lại', amLenh: A + 'ld-lenh.mp3',
          chu: [
            { hoa: 'R', thuong: 'r', am: A + 'ld-r.mp3' },
            { hoa: 'Tr', thuong: 'tr', am: A + 'ld-tr.mp3' },
            { hoa: 'V', thuong: 'v', am: A + 'ld-v.mp3' },
            { hoa: 'S', thuong: 's', am: A + 'ld-s.mp3' },
            { hoa: 'X', thuong: 'x', am: A + 'ld-x.mp3' }
          ]
        },
        {
          id: 'ld2', so: 2, loai: 'danh-van', lenh: 'Đánh vần',
          tu: [
            { hinh: H + 'dv-ro.webp', tieng: 'rổ', phan: ['r', 'ô'], thanh: 'hỏi', doc: 'rờ – ô – rô – hỏi – rổ' },
            { hinh: H + 'dv-tre.webp', tieng: 'tre', phan: ['tr', 'e'], thanh: null, doc: 'trờ – e – tre' },
            { hinh: H + 'dv-vo.webp', tieng: 'vở', phan: ['v', 'ơ'], thanh: 'hỏi', doc: 'vờ – ơ – vơ – hỏi – vở' },
            { hinh: H + 'dv-se.webp', tieng: 'sẻ', phan: ['s', 'e'], thanh: 'hỏi', doc: 'sờ – e – se – hỏi – sẻ' },
            { hinh: H + 'dv-xe.webp', tieng: 'xe', phan: ['x', 'e'], thanh: null, doc: 'xờ – e – xe' }
          ]
        },
        {
          id: 'ld3', so: 3, loai: 'noi', lenh: 'Đọc các từ sau',
          goiY: 'Em đọc to từng từ, rồi nối từ với hình đúng.', tenA: 'Từ', tenB: 'Hình',
          a: [{ c: 'rá' }, { c: 'rễ' }, { c: 'gà ri' }, { c: 'cá rô' }, { c: 've' }, { c: 'võ' }],
          b: [{ hinh: H + 'ld-ve.webp' }, { hinh: H + 'ld-ga-ri.webp' }, { hinh: H + 'ld-vo.webp' }, { hinh: H + 'ld-ra.webp' }, { hinh: H + 'ld-ca-ro.webp' }, { hinh: H + 'ld-re.webp' }],
          cap: [[0, 3], [1, 5], [2, 1], [3, 4], [4, 0], [5, 2]]
        },
        {
          id: 'ld4a', so: 4, loai: 'doc-bai', lenh: 'Đọc bài sau',
          ten: 'Về quê', hinh: H + 've-que.webp',
          cau: [
            { c: 'Nghỉ hè, cả nhà Vũ về quê.' }, { c: 'Cả nhà sẽ đi ô tô vì quê Vũ ở xa.' }, { c: 'Ở đó có hồ Ba Bể.' },
            { c: 'Hồ có cá to.' }, { c: 'Bờ hồ có tre, nứa, có cả khế, su su.' }
          ]
        },
        {
          id: 'ld4b', so: 4, loai: 'chon-cau', lenh: 'Nói tiếp',
          goiY: 'Đọc bài “Về quê”, rồi chọn ý đúng để nói tiếp câu. Em nói to cả câu nhé.',
          cau: [
            { hoi: 'Nghỉ hè, cả nhà Vũ …', dung: 'về quê.', sai: ['đi Sa Pa.', 'đi tắm biển.'] },
            { hoi: 'Cả nhà sẽ đi ô tô vì …', dung: 'quê Vũ ở xa.', sai: ['quê Vũ ở gần.', 'Vũ thích ô tô.'] },
            { hoi: 'Quê Vũ có hồ …', dung: 'Ba Bể.', sai: ['Gươm.', 'Tây.'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [58, 59],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'dien-chu', lenh: 'Điền chữ còn thiếu',
          tu: [
            { hinh: H + 'lv-ro.webp', mau: '…ổ', dap: 'rổ' },
            { hinh: H + 'lv-tre.webp', mau: '…e', dap: 'tre' },
            { hinh: H + 'lv-vo.webp', mau: '…ở', dap: 'vở' },
            { hinh: H + 'lv-re.webp', mau: '…ễ', dap: 'rễ' },
            { hinh: H + 'lv-se.webp', mau: '…ẻ', dap: 'sẻ' },
            { hinh: H + 'lv-xe.webp', mau: '…e ca', dap: 'xe ca' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Chép lại các từ ngữ sau',
          tu: [
            { c: 'rùa', hinh: H + 'lv-rua.webp' }, { c: 'cá trê', hinh: H + 'lv-ca-tre.webp' }, { c: 'về quê', hinh: H + 'lv-ve-que.webp' },
            { c: 'su su', hinh: H + 'lv-su-su.webp' }, { c: 'xu', hinh: H + 'lv-xu.webp' }, { c: 'vẽ', hinh: H + 'lv-ve.webp' }
          ]
        },
        {
          id: 'lv3', so: 3, loai: 'viet-o-li', lenh: 'Viết các từ sau',
          tu: [{ c: 'rổ' }, { c: 'tre' }, { c: 'võ' }, { c: 'xe' }, { c: 'sẻ' }]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [60],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'hoat-dong', lenh: 'Trò chơi: Tôi nghỉ hè',
          goiY: 'Ở nhà, em chơi cùng bố mẹ: mỗi người nói một phần của kế hoạch nghỉ hè, rồi ghép lại thành câu. Ví dụ: “Tuần sau, nhà tớ sẽ đi công viên.”',
          hinh: H + 'tvv-nhom.webp',
          noiDung: [
            'Lập nhóm 3 người, cùng nói kế hoạch nghỉ hè: học sinh 1 nói hoạt động, học sinh 2 nói địa điểm, học sinh 3 nói thời gian.',
            'Các nhóm hỏi đáp với nhau về kế hoạch nghỉ hè đã chuẩn bị.'
          ],
          ghiAm: 'Ghi âm kế hoạch nghỉ hè của em'
        },
        {
          id: 'tvv2', so: 2, loai: 'noi', lenh: 'Nối hình với câu phù hợp',
          goiY: 'Đọc từng câu ở cột A, rồi nối với hình phù hợp ở cột B.',
          a: [{ c: 'Tuần sau, cả nhà tớ sẽ đi cắm trại.' }, { c: 'Năm sau, tớ sẽ lên lớp 2.' }, { c: 'Tháng sau, tớ sẽ nghỉ hè.' }, { c: 'Tuần sau, tớ sẽ đi xem phim.' }],
          b: [{ hinh: H + 'n-phim.webp' }, { hinh: H + 'n-nghi-he.webp' }, { hinh: H + 'n-lop.webp' }, { hinh: H + 'n-cam-trai.webp' }],
          cap: [[0, 3], [1, 2], [2, 1], [3, 0]]
        },
        {
          id: 'tvv3', so: 3, loai: 'hoc-hat', lenh: 'Học hát: Mùa hè đến (Nguyễn Thị Nhung)',
          baiHat: 'Mùa hè đến', tacGia: 'Nguyễn Thị Nhung', youtube: 'HU5rjUD_4sw'
        }
      ]
    }
  ]
};
