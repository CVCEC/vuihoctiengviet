/* Quyển 2 – Bài 12: Các em vào lớp nhé!  (sách trang 75–82)
   Thu âm của NXB: Từ ngữ (bài tập 1, 2) và Hội thoại (bài tập 1). Các phần khác không có tiếng.
   Câu trả lời mẫu ở Hội thoại 3 và Tiếng Việt vui 1–2 (trừ câu M trong sách) là câu gợi ý soạn thêm cho trò chơi. */
const A = 'audio/', I = 'img/';
const NOI = [ // Từ ngữ 2 – theo thứ tự trong sách và trong file thu âm
  { tu: 'ra', k: 'ra' }, { tu: 'vào', k: 'vao' }, { tu: 'lên', k: 'len' }, { tu: 'xuống', k: 'xuong' }
];
const am2 = w => A + 'tn2-' + NOI.find(x => x.tu === w).k + '.mp3';
const TV1 = [ // Tiếng Việt vui 1: tình huống – câu nói gợi ý
  'Em ơi, em nín đi!', 'Em ơi, em dậy đi!', 'Mẹ ơi, mẹ cho con đi công viên nhé!',
  'Cậu cho tớ mượn bút màu nhé!', 'Cô ơi, cô dạy em hát tiếng Việt với ạ!', 'Bác ơi, bác chỉ cho cháu đường đến thư viện với ạ!'
];
const TH3 = ['Các em vào lớp nào!', 'Chúng ta ra sân chơi đi!', 'Chúng ta lên tầng 2 đi!', 'Cậu vào nhà vệ sinh rửa tay đi!'];

const BAI_HOC = {
  quyen: 2, bai: 12, ten: 'Các em vào lớp nhé!', chuDe: 'Trường lớp', chu: 'ang – ac', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [75, 76],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn1-lenh.mp3',
          danhSo: true, anChu: true,
          the: [
            { hinh: I + 't-lop.webp', tu: 'lớp', am: A + 'tn1-lop.mp3' },
            { hinh: I + 't-san.webp', tu: 'sân', am: A + 'tn1-san.mp3' },
            { hinh: I + 't-thu-vien.webp', tu: 'thư viện', am: A + 'tn1-thu-vien.mp3' },
            { hinh: I + 't-tang.webp', tu: 'tầng (lầu)', am: A + 'tn1-tang.mp3' },
            { hinh: I + 't-cau-thang.webp', tu: 'cầu thang', am: A + 'tn1-cau-thang.mp3' },
            { hinh: I + 't-nha-ve-sinh.webp', tu: 'nhà vệ sinh', am: A + 'tn1-nha-ve-sinh.mp3' }
          ]
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn2-lenh.mp3',
          danhSo: true, anChu: true,
          the: NOI.map(d => ({ hinh: I + 'h-' + d.k + '.webp', tu: d.tu, am: A + 'tn2-' + d.k + '.mp3' }))
        },
        {
          id: 'tn3', so: 3, loai: 'chon-cau', lenh: 'Chọn từ phù hợp',
          goiY: 'Chọn từ đúng để điền vào chỗ “...”, rồi đọc to cả câu.',
          cau: [
            { hoi: 'a) Từ ngoài sân, em ... lớp để học.', dung: 'vào', sai: ['ra', 'lên', 'xuống'], amDung: am2('vào') },
            { hoi: 'b) Từ trong lớp, em ... sân để chơi.', dung: 'ra', sai: ['vào', 'lên', 'xuống'], amDung: am2('ra') },
            { hoi: 'c) Từ dưới tầng 1, em ... tầng 2.', dung: 'lên', sai: ['ra', 'vào', 'xuống'], amDung: am2('lên') },
            { hoi: 'd) Từ trên tầng 2, em ... tầng 1.', dung: 'xuống', sai: ['ra', 'vào', 'lên'], amDung: am2('xuống') }
          ]
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [76, 77, 78],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – Đoạn A', amLenh: A + 'ht1-lenh.mp3',
          hinh: I + 'ht-a.webp', moTa: 'Cô giáo và cả lớp trong giờ đọc bài',
          vai: { 'Cô giáo': { av: I + 'av-co.webp', mau: '#E0577A' }, 'Cả lớp': { mau: '#8A5CC2' }, 'Nam': { av: I + 'av-nam-a.webp', mau: '#3C78C8' } },
          loi: [
            { ai: 'Cô giáo', c: 'Chào các em!', am: A + 'a1.mp3' },
            { ai: 'Cả lớp', c: 'Chúng em chào cô ạ!', am: A + 'a2.mp3' },
            { ai: 'Cô giáo', c: 'Hôm nay, chúng ta sẽ đọc bài “Nàng tiên cá”. Các em nghe cô đọc nhé!', am: A + 'a3.mp3' },
            { ai: 'Cả lớp', c: 'Truyện này hay quá!', am: A + 'a4.mp3' },
            { ai: 'Cô giáo', c: 'Bây giờ, cô mời các em đọc. Các em hãy mở sách ra! Nam đọc câu 1 nào!', am: A + 'a5.mp3' },
            { ai: 'Nam', c: 'Cô chờ em một chút ạ!', am: A + 'a6.mp3' },
            { ai: 'Cô giáo', c: 'Cả lớp chú ý nghe bạn đọc nhé!', am: A + 'a7.mp3' }
          ]
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – Đoạn B', amLenh: A + 'ht1-lenh.mp3',
          hinh: I + 'ht-b.webp', moTa: 'Nam và Mai nói chuyện ở sân trường',
          vai: { 'Mai': { av: I + 'av-mai.webp', mau: '#E0577A' }, 'Nam': { av: I + 'av-nam.webp', mau: '#3C78C8' }, 'Liên': { mau: '#D9822B' }, 'Cô giáo': { av: I + 'av-co.webp', mau: '#C2457A' } },
          loi: [
            { ai: 'Mai', c: 'Cậu có vào thư viện không?', am: A + 'b1.mp3' },
            { ai: 'Nam', c: 'Không. Tớ lên tầng 2.', am: A + 'b2.mp3' },
            { ai: 'Mai', c: 'Cậu tìm chị Liên à?', am: A + 'b3.mp3' },
            { ai: 'Nam', c: 'Đúng rồi. Kìa, chị ấy đang xuống!', am: A + 'b4.mp3' },
            { ai: 'Liên', c: 'Chào các em! Chúng ta ra sân chơi đi!', am: A + 'b5.mp3' },
            { ai: 'Mai', c: 'Em muốn vào thư viện tìm sách.', am: A + 'b6.mp3' },
            { ai: 'Liên', c: 'Không kịp! Bây giờ là 10 giờ kém 5 rồi.', am: A + 'b7.mp3' },
            { ai: 'Cô giáo', c: 'Các em vào lớp nào!', am: A + 'b8.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'hoat-dong', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          goiY: 'Em đóng vai cùng bố mẹ hoặc các bạn. Có thể bấm “Đóng vai” ở bài tập 1 để nghe lời của các vai khác.',
          hinh: [I + 'ht-a.webp', I + 'ht-b.webp'],
          noiDung: [
            'Đoạn A: đóng vai cô giáo, cả lớp và Nam.',
            'Đoạn B: đóng vai Mai, Nam, Liên và cô giáo.',
            'Đổi vai cho nhau, rồi nói lại hai đoạn hội thoại.'
          ],
          ghiAm: 'Ghi âm em đóng vai'
        },
        {
          id: 'ht3', so: 3, loai: 'chon-cau', lenh: 'Nói lời khuyên, lời đề nghị phù hợp trong các tình huống sau',
          goiY: 'Nhìn tranh, chọn lời nói phù hợp, rồi nói to câu đó.',
          cau: [
            { hinh: I + 'th-1.webp', hoi: '1. Cô giáo mời học sinh vào lớp.', dung: TH3[0], sai: [TH3[1], TH3[2]], amDung: A + 'b8.mp3' },
            { hinh: I + 'th-2.webp', hoi: '2. Giờ nghỉ, em rủ bạn ra sân chơi.', dung: TH3[1], sai: [TH3[2], TH3[3]] },
            { hinh: I + 'th-3.webp', hoi: '3. Giờ nghỉ, em rủ bạn lên tầng 2.', dung: TH3[2], sai: [TH3[1], TH3[0]] },
            { hinh: I + 'th-4.webp', hoi: '4. Em khuyên bạn vào nhà vệ sinh rửa tay.', dung: TH3[3], sai: [TH3[0], TH3[2]] }
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [78, 79],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'danh-van-van', lenh: 'Đánh vần',
          goiY: 'Bấm “Đánh vần” để xem hai chữ ghép thành vần. Chạm vào từng bước và đọc theo.',
          tu: [
            { hinh: I + 'dv-thang.webp', tu: 'thang', to: 'ang', tieng: 'ang', phan: ['a', 'ng'], thanh: null, doc: 'a – ngờ – ang' },
            { hinh: I + 'dv-bac-si.webp', tu: 'bác sĩ', to: 'ác', tieng: 'ac', phan: ['a', 'c'], thanh: null, doc: 'a – cờ – ac' }
          ]
        },
        {
          id: 'ld2a', so: 2, loai: 'noi', lenh: 'Đọc các từ ngữ sau – từ 1 đến 6', tenA: 'Từ ngữ', tenB: 'Hình',
          goiY: 'Em đọc to từng từ ngữ, rồi chạm vào từ và hình đúng để nối.',
          a: [{ c: 'nàng tiên' }, { c: 'con hạc' }, { c: 'tia nắng' }, { c: 'sáng vằng vặc' }, { c: 'nhà tầng' }, { c: 'nhấc lên' }],
          b: [{ hinh: I + 'w-tia-nang.webp' }, { hinh: I + 'w-nhac-len.webp' }, { hinh: I + 'w-nang-tien.webp' }, { hinh: I + 'w-nha-tang.webp' }, { hinh: I + 'w-con-hac.webp' }, { hinh: I + 'w-sang-vang-vac.webp' }],
          cap: [[0, 2], [1, 4], [2, 0], [3, 5], [4, 3], [5, 1]]
        },
        {
          id: 'ld2b', so: 2, loai: 'noi', lenh: 'Đọc các từ ngữ sau – từ 7 đến 12', tenA: 'Từ ngữ', tenB: 'Hình',
          goiY: 'Em đọc to từng từ ngữ, rồi chạm vào từ và hình đúng để nối.',
          a: [{ c: 'xẻng' }, { c: 'xe téc' }, { c: 'chiêng' }, { c: 'khiêng' }, { c: 'xiếc' }, { c: 'chim yểng' }],
          b: [{ hinh: I + 'w-khieng.webp' }, { hinh: I + 'w-chim-yeng.webp' }, { hinh: I + 'w-xe-tec.webp' }, { hinh: I + 'w-xiec.webp' }, { hinh: I + 'w-xeng.webp' }, { hinh: I + 'w-chieng.webp' }],
          cap: [[0, 4], [1, 2], [2, 5], [3, 0], [4, 3], [5, 1]]
        },
        {
          id: 'ld3', so: 3, loai: 'doc-bai', lenh: 'Đọc bài sau',
          ten: 'Xe rác', hinh: I + 'bai-doc.webp', nguon: 'Theo Nguyễn Ly',
          cau: [
            { c: 'Sáng sáng, xe rác lặng lẽ đi làm.' }, { c: 'Nó về khi tất cả đã ngon giấc.' }, { c: 'Xe điện, xe téc cằn nhằn: “Bẩn quá!”.' },
            { c: 'Một đêm, mưa to, đường phố ngập rác.' }, { c: 'Xe điện, xe téc lo lắng nhìn.' },
            { c: 'Thế mà sáng sớm, đường phố đã hết rác.' }, { c: 'Nhìn xe rác bon bon chở rác, xe téc hớn hở, xe điện leng keng: “Cảm ơn bạn nhé!”.' }
          ]
        },
        {
          id: 'ld3b', so: 3, loai: 'sap-xep', lenh: 'Sắp xếp các ý đúng thứ tự',
          goiY: 'Đọc lại bài “Xe rác”. Chạm vào từng ý theo đúng thứ tự trong bài, rồi bấm “Kiểm tra”.',
          muc: ['Xe điện, xe téc chê xe rác bẩn.', 'Một đêm, mưa to, đường phố ngập rác.', 'Xe rác chở rác đi.', 'Xe điện, xe téc cảm ơn xe rác.']
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [80],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'viet-o-li', lenh: 'Chép lại các từ ngữ sau',
          tu: [
            { c: 'quả bóng', hinh: I + 'v-qua-bong.webp' }, { c: 'con sóc', hinh: I + 'v-con-soc.webp' }, { c: 'dòng sông', hinh: I + 'v-dong-song.webp' },
            { c: 'gốc đa', hinh: I + 'v-goc-da.webp' }, { c: 'bông súng', hinh: I + 'v-bong-sung.webp' }, { c: 'bông cúc', hinh: I + 'v-bong-cuc.webp' },
            { c: 'quả trứng', hinh: I + 'v-qua-trung.webp' }, { c: 'lực sĩ', hinh: I + 'v-luc-si.webp' }, { c: 'chuông', hinh: I + 'v-chuong.webp' },
            { c: 'đuốc', hinh: I + 'v-duoc.webp' }, { c: 'gương', hinh: I + 'v-guong.webp' }, { c: 'lược', hinh: I + 'v-luoc.webp' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Viết các từ sau',
          tu: [{ c: 'nắng' }, { c: 'bóng' }, { c: 'xiếc' }, { c: 'sóc' }]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [81, 82],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'chon-cau', lenh: 'Hỏi đáp: Bạn sẽ nói thế nào?',
          goiY: 'Mẫu: Dỗ em. – Em ơi, em nín đi! Nhìn tranh, chọn câu bạn sẽ nói, rồi nói to.',
          cau: [
            { hinh: I + 'tv-1.webp', hoi: '1. Dỗ em.', dung: TV1[0], sai: [TV1[1], TV1[3]] },
            { hinh: I + 'tv-2.webp', hoi: '2. Gọi em dậy.', dung: TV1[1], sai: [TV1[0], TV1[2]] },
            { hinh: I + 'tv-3.webp', hoi: '3. Nói với mẹ cho đi công viên.', dung: TV1[2], sai: [TV1[4], TV1[1]] },
            { hinh: I + 'tv-4.webp', hoi: '4. Mượn bút màu của bạn.', dung: TV1[3], sai: [TV1[5], TV1[0]] },
            { hinh: I + 'tv-5.webp', hoi: '5. Nhờ cô giáo dạy hát tiếng Việt.', dung: TV1[4], sai: [TV1[3], TV1[2]] },
            { hinh: I + 'tv-6.webp', hoi: '6. Nhờ một bác chỉ đường đến thư viện.', dung: TV1[5], sai: [TV1[4], TV1[1]] }
          ]
        },
        {
          id: 'tvv2a', so: 2, loai: 'chon-cau', lenh: 'Trò chơi: Đuổi hình bắt chữ – a) Vòng 1: Tìm tiếng có vần đã học',
          goiY: 'Bạn nói một vần (ví dụ: ĂNG), em tìm thật nhanh tiếng có vần đó (TRẮNG).',
          cau: [
            { hoi: 'ĂNG', dung: 'TRẮNG', sai: ['TRỨNG', 'TRANG'] },
            { hoi: 'ANG', dung: 'NÀNG', sai: ['NẮNG', 'NÓNG'] },
            { hoi: 'AC', dung: 'HẠC', sai: ['HỌC', 'HÁT'] },
            { hoi: 'IÊNG', dung: 'CHIÊNG', sai: ['CHIẾC', 'CHUÔNG'] },
            { hoi: 'ÔNG', dung: 'SÔNG', sai: ['SÓC', 'SÚNG'] },
            { hoi: 'ƯƠNG', dung: 'GƯƠNG', sai: ['LƯỢC', 'GỐC'] }
          ]
        },
        {
          id: 'tvv2b', so: 2, loai: 'chon-cau', lenh: 'Trò chơi: Đuổi hình bắt chữ – b) Vòng 2: Tìm từ ứng với hình',
          goiY: 'Bạn đưa một hình, em tìm thật nhanh từ ứng với hình (ví dụ: XIẾC).',
          cau: [
            { hinh: I + 'w-xiec.webp', dung: 'XIẾC', sai: ['XẺNG', 'CHIÊNG'] },
            { hinh: I + 'w-chieng.webp', dung: 'CHIÊNG', sai: ['KHIÊNG', 'CHUÔNG'] },
            { hinh: I + 'w-xeng.webp', dung: 'XẺNG', sai: ['XIẾC', 'XE TÉC'] },
            { hinh: I + 'w-con-hac.webp', dung: 'CON HẠC', sai: ['CON SÓC', 'CHIM YỂNG'] },
            { hinh: I + 'w-xe-tec.webp', dung: 'XE TÉC', sai: ['XE RÁC', 'NHÀ TẦNG'] },
            { hinh: I + 'v-chuong.webp', dung: 'CHUÔNG', sai: ['CHIÊNG', 'GƯƠNG'] }
          ]
        },
        {
          id: 'tvv2c', so: 2, loai: 'dien-chu', lenh: 'Trò chơi: Đuổi hình bắt chữ – c) Vòng 3: Nghe đọc, viết đúng',
          goiY: 'Bố mẹ hoặc bạn đọc từ, em viết đúng tiếng còn thiếu: chạm vào hình, chọn chữ và dấu thanh.',
          tu: [
            { hinh: I + 'v3-dong-song.webp', mau: 'dòng …', dap: 'dòng sông' },
            { hinh: I + 'v3-con-soc.webp', mau: 'con …', dap: 'con sóc' },
            { hinh: I + 'v3-uong-thuoc.webp', mau: 'uống …', dap: 'uống thuốc' }
          ]
        },
        {
          id: 'tvv3', so: 3, loai: 'hoc-hat', lenh: 'Học hát: Nếu vui, bạn hãy vỗ tay nhé! (Nhạc: BabyBus – lời tiếng Việt)',
          baiHat: 'Nếu vui, bạn hãy vỗ tay nhé!', tacGia: 'Nhạc: BabyBus – lời tiếng Việt', youtube: 'D5TkqD9qS-E'
        }
      ]
    }
  ]
};
