/* Quyển 2 – Bài 1: Đây là em họ của em à?  (sách trang 5–9)
   Toạ độ điểm chạm tính theo % của hình: [trái, trên, rộng, cao] */
const A = 'audio/';
// Sơ đồ họ hàng của Nam (Từ ngữ 1, 2) – theo thứ tự đọc trong file thu âm
const HO_HANG = {
  hinh: 'img/ho-hang.webp', co: [1100, 772], moTa: 'Sơ đồ họ hàng của Nam: ông bà nội, ông bà ngoại, bác, bố mẹ, dì dượng, anh chị họ, Liên, Nam và em họ',
  diem: [
    { tu: 'ông nội', am: A + 'tn-ong-noi.mp3', nguoi: [16, 0.5, 15, 26.5], nhan: [16.6, 19.8, 13.6, 5.7] },
    { tu: 'bà nội', am: A + 'tn-ba-noi.mp3', nguoi: [34, 0.5, 15, 26.5], nhan: [33.6, 19.8, 13.6, 5.7] },
    { tu: 'ông ngoại', am: A + 'tn-ong-ngoai.mp3', nguoi: [52, 0.5, 15, 26.5], nhan: [51.2, 19.8, 14.5, 5.7] },
    { tu: 'bà ngoại', am: A + 'tn-ba-ngoai.mp3', nguoi: [70, 0.5, 15, 26.5], nhan: [68.6, 19.8, 14.5, 5.7] },
    { tu: 'bác gái', am: A + 'tn-bac-gai.mp3', nguoi: [1.5, 35, 15.5, 26.5], nhan: [2.6, 55.3, 13.8, 6.0] },
    { tu: 'bác trai', am: A + 'tn-bac-trai.mp3', nguoi: [18, 35, 15.5, 26.5], nhan: [18.4, 55.3, 14.1, 6.0] },
    { tu: 'bố', am: A + 'tn-bo.mp3', nguoi: [34.5, 35, 15.5, 26.5], nhan: [35.2, 55.3, 13.6, 6.0] },
    { tu: 'mẹ', am: A + 'tn-me.mp3', nguoi: [51.5, 35, 15.5, 26.5], nhan: [51.1, 55.3, 13.6, 6.0] },
    { tu: 'dì', am: A + 'tn-di.mp3', nguoi: [67.5, 35, 15.5, 26.5], nhan: [67.9, 55.3, 13.6, 6.0] },
    { tu: 'dượng', am: A + 'tn-duong.mp3', nguoi: [83.5, 35, 15.5, 26.5], nhan: [84.3, 55.3, 13.8, 6.0] },
    { tu: 'anh họ', am: A + 'tn-anh-ho.mp3', nguoi: [1.5, 72, 15.5, 25.5], nhan: [2.6, 90.8, 13.8, 6.0] },
    { tu: 'chị họ', am: A + 'tn-chi-ho.mp3', nguoi: [18, 72, 15.5, 25.5], nhan: [18.5, 90.8, 13.8, 6.0] },
    { tu: 'Liên', am: A + 'tn-lien.mp3', nguoi: [34.5, 72, 15.5, 25.5], nhan: [35.0, 90.8, 13.6, 6.0] },
    { tu: 'Nam', am: A + 'tn-nam.mp3', nguoi: [51, 72, 15.5, 25.5], nhan: [51.4, 90.8, 13.6, 6.0] },
    { tu: 'em họ', am: A + 'tn-em-ho.mp3', nguoi: [75, 72, 15.5, 25.5], nhan: [74.9, 90.8, 13.8, 6.0] }
  ]
};
// Hỏi đáp "Đây là … của Nam." – họ hàng của Nam (không tính Liên và Nam)
const HOI_NAM = Object.assign({}, HO_HANG, { diem: HO_HANG.diem.filter(d => d.tu !== 'Liên' && d.tu !== 'Nam') });

const BAI_HOC = {
  quyen: 2, bai: 1, ten: 'Đây là em họ của em à?', chuDe: 'Gia đình', chu: 'a, ă, â, c', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [5],
      bt: [
        Object.assign({
          id: 'tn1', so: 1, loai: 'nghe-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh.mp3',
          caBai: HO_HANG.diem.map((d, i) => ({ am: d.am, c: d.tu, d: i }))
        }, HO_HANG),
        {
          id: 'tn2', so: 2, loai: 'hoi-dap', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Bạn chỉ vào một người và hỏi “Đây là ai?”. Em chọn câu trả lời đúng.',
          nguon: HOI_NAM, mauCau: 'Đây là {tu} của Nam.', goiYTu: true,
          hoi: { c: 'Đây là ai?', am: null, av: 'img/ban-trai.webp' },
          dap: { ten: 'người trả lời', av: 'img/ban-gai.webp' },
          mau: [[{ c: 'Đây là ai?', am: null }, { c: 'Đây là ông nội của Nam.', am: null }]],
          amCau: {}
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [6, 7],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – A', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-a.webp', moTa: 'Liên và Mai ngồi trên ghế, xem ảnh gia đình',
          vai: { 'Mai': { av: 'img/av-mai.webp' }, 'Liên': { av: 'img/av-lien.webp' } },
          loi: [
            { ai: 'Mai', c: 'Đây là ai ạ?', am: A + 'ht-a1.mp3' },
            { ai: 'Liên', c: 'Đây là hai bác của chị.', am: A + 'ht-a2.mp3' },
            { ai: 'Mai', c: 'Hai bác của chị làm nghề gì?', am: A + 'ht-a3.mp3' },
            { ai: 'Liên', c: 'Bác trai là giáo viên. Bác làm việc ở trường.', am: A + 'ht-a4.mp3' },
            { ai: 'Mai', c: 'Còn bác gái làm việc ở đâu ạ?', am: A + 'ht-a5.mp3' },
            { ai: 'Liên', c: 'Bác gái làm việc ở cửa hàng. Bác bán hàng.', am: A + 'ht-a6.mp3' },
            { ai: 'Mai', c: 'Hai bác sống ở đâu ạ?', am: A + 'ht-a7.mp3' },
            { ai: 'Liên', c: 'Hai bác ở Hà Nội.', am: A + 'ht-a8.mp3' }
          ]
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – B', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-b.webp', moTa: 'Dũng và Nam nhìn ảnh gia đình treo trên tường',
          vai: { 'Dũng': { av: 'img/av-dung.webp' }, 'Nam': { av: 'img/av-nam.webp' } },
          loi: [
            { ai: 'Dũng', c: 'Nam ơi, đây là ai?', am: A + 'ht-b1.mp3' },
            { ai: 'Nam', c: 'Đây là ông bà ngoại của em.', am: A + 'ht-b2.mp3' },
            { ai: 'Dũng', c: 'Còn đây?', am: A + 'ht-b3.mp3' },
            { ai: 'Nam', c: 'Đây là dì và dượng của em.', am: A + 'ht-b4.mp3' },
            { ai: 'Dũng', c: 'Đây là em họ của em à?', am: A + 'ht-b5.mp3' },
            { ai: 'Nam', c: 'Vâng. Em ấy là con của dì và dượng em ạ.', am: A + 'ht-b6.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'hoat-dong', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          hinh: ['img/ht-a.webp', 'img/ht-b.webp'],
          noiDung: [
            'Em và bạn (hoặc bố mẹ) đóng vai Mai và Liên, nhắc lại đoạn hội thoại A.',
            'Đổi vai cho nhau, nói lại đoạn A.',
            'Đóng vai Dũng và Nam, nhắc lại đoạn hội thoại B.',
            'Đổi vai cho nhau, nói lại đoạn B.'
          ],
          ghiAm: 'Ghi âm em đóng vai'
        },
        {
          id: 'ht3', so: 3, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Hình 1 là mẫu. Bạn hỏi, em chọn câu trả lời đúng rồi nói to.',
          cau: [
            { hinh: 'img/chi-hien.webp', hoi: 'Đây là ai?', dung: 'Đây là chị họ của tớ.', sai: ['Đây là bác của tớ.', 'Đây là chú của tớ.'] },
            { hinh: 'img/chi-hien.webp', hoi: 'Chị họ của cậu làm nghề gì?', dung: 'Chị tớ là giáo viên.', sai: ['Chị tớ là bác sĩ.', 'Chị tớ bán hàng.'] },
            { hinh: 'img/chi-hien.webp', hoi: 'Chị ấy làm việc ở đâu?', dung: 'Chị ấy làm việc ở trường.', sai: ['Chị ấy làm việc ở bệnh viện.', 'Chị ấy làm việc ở cửa hàng.'] },
            { hinh: 'img/bac-hung.webp', hoi: 'Đây là ai?', dung: 'Đây là bác của tớ.', sai: ['Đây là chú của tớ.', 'Đây là chị họ của tớ.'] },
            { hinh: 'img/bac-hung.webp', hoi: 'Bác của cậu làm nghề gì?', dung: 'Bác tớ là bác sĩ.', sai: ['Bác tớ là giáo viên.', 'Bác tớ là thợ xây.'] },
            { hinh: 'img/bac-hung.webp', hoi: 'Bác ấy làm việc ở đâu?', dung: 'Bác ấy làm việc ở bệnh viện.', sai: ['Bác ấy làm việc ở trường.', 'Bác ấy làm việc ở cửa hàng.'] },
            { hinh: 'img/chu-minh.webp', hoi: 'Đây là ai?', dung: 'Đây là chú của tớ.', sai: ['Đây là bác của tớ.', 'Đây là chị họ của tớ.'] },
            { hinh: 'img/chu-minh.webp', hoi: 'Chú của cậu làm nghề gì?', dung: 'Chú tớ là thợ xây.', sai: ['Chú tớ là bác sĩ.', 'Chú tớ là giáo viên.'] },
            { hinh: 'img/chu-minh.webp', hoi: 'Chú ấy làm việc ở đâu?', dung: 'Chú ấy làm việc ở công trường.', sai: ['Chú ấy làm việc ở bệnh viện.', 'Chú ấy làm việc ở trường.'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [7, 8],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'the-chu', lenh: 'Nghe và nhắc lại', amLenh: A + 'ld-lenh.mp3',
          chu: [
            { hoa: 'A', thuong: 'a', am: A + 'ld-a.mp3' },
            { hoa: 'Ă', thuong: 'ă', am: A + 'ld-aw.mp3' },
            { hoa: 'Â', thuong: 'â', am: A + 'ld-aa.mp3' },
            { hoa: 'C', thuong: 'c', am: A + 'ld-c.mp3' }
          ]
        },
        {
          id: 'ld2', so: 2, loai: 'danh-van', lenh: 'Đánh vần',
          tu: [
            { hinh: 'img/ca.webp', tieng: 'ca', phan: ['c', 'a'], thanh: null, doc: 'cờ – a – ca' },
            { hinh: 'img/ca-ngu.webp', tieng: 'cá', phan: ['c', 'a'], thanh: 'sắc', doc: 'cờ – a – ca – sắc – cá' }
          ]
        },
        {
          id: 'ld3', so: 3, loai: 'noi', lenh: 'Đọc các từ sau',
          goiY: 'Em đọc to từng từ, rồi nối từ với hình đúng.', tenA: 'Từ', tenB: 'Hình',
          a: [{ c: 'ca' }, { c: 'cà' }, { c: 'cá' }],
          b: [{ hinh: 'img/ca-ngu.webp' }, { hinh: 'img/ca.webp' }, { hinh: 'img/ca-tim.webp' }],
          cap: [[0, 1], [1, 2], [2, 0]]
        },
        {
          id: 'ld4', so: 4, loai: 'to-thanh', lenh: 'Tô màu',
          mau: { ngang: '#EE7FB0', 'huyền': '#4A92E0', 'sắc': '#5EA36A' },
          tieng: ['cá', 'ca', 'cà']
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [8],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'dien-chu', lenh: 'Viết chữ và dấu thanh còn thiếu', them: 'ăâ',
          tu: [
            { hinh: 'img/ca-tim.webp', mau: '…à', dap: 'cà' },
            { hinh: 'img/ca-ngu.webp', mau: 'c…', dap: 'cá' },
            { hinh: 'img/ca.webp', mau: 'c…', dap: 'ca' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Viết các từ em mới học',
          tu: [{ c: 'cá', hinh: 'img/ca-ngu.webp' }, { c: 'ca', hinh: 'img/ca.webp' }, { c: 'cà', hinh: 'img/ca-tim.webp' }]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [9],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'hoat-dong', lenh: 'Trò chơi Phỏng vấn về họ hàng: Hỏi đáp với bạn về ông, bà và họ hàng trong ảnh (hình) gia đình em',
          hinh: ['img/tvv-a.webp', 'img/tvv-b.webp'],
          noiDung: [
            'Em chuẩn bị một ảnh (hình) gia đình có ông, bà và họ hàng.',
            'Bạn hỏi: “Đây là ai?” – Em trả lời, ví dụ: “Đây là chú của tớ.”',
            'Bạn hỏi: “Chú bạn làm nghề gì?” – Em trả lời, ví dụ: “Chú tớ là bác sĩ.”',
            'Bạn hỏi: “Chú bạn làm việc ở đâu?” – Em trả lời, ví dụ: “Chú tớ làm việc ở bệnh viện.”',
            'Bạn hỏi: “Chú bạn sống ở đâu?” – Em trả lời, ví dụ: “Chú tớ sống ở Hà Nội.”',
            'Đổi vai: em hỏi, bạn trả lời về ảnh gia đình của bạn.'
          ],
          ghiAm: 'Ghi âm em trả lời phỏng vấn'
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Họ nhà chim (Đồng dao)',
          baiHat: 'Họ nhà chim', tacGia: 'Đồng dao', youtube: 'yhATWM_avnM'
        }
      ]
    }
  ]
};
