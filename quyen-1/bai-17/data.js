/* Quyển 1 – Bài 17: Trường em ở đâu?  (sách trang 70–75) */
const A = 'audio/';
const NOI = [
  ['bệnh viện', 'n-benh-vien', 'tn-benh-vien', 'Bác sĩ ở đâu? – Bác sĩ ở bệnh viện.'],
  ['cửa hàng', 'n-cua-hang', 'tn-cua-hang', 'Người bán hàng ở đâu? – Người bán hàng ở cửa hàng.'],
  ['công trường', 'n-cong-truong', 'tn-cong-truong', 'Kĩ sư và thợ xây ở đâu? – Họ ở công trường.'],
  ['trường học', 'n-truong-hoc', 'tn-truong-hoc', 'Giáo viên và học sinh ở đâu? – Họ ở trường học.']
];
const MEO = ['trong hộp', 'ngoài hộp', 'trên hộp', 'dưới hộp', 'trước hộp', 'sau hộp', 'bên cạnh hộp', 'đối diện hộp'];
const VAI = { 'Dũng': { av: 'img/av-dung.webp', mau: '#3E9B5F' }, 'Nam': { av: 'img/av-nam.webp', mau: '#3C78C8' } };
const LOI = [
  { ai: 'Dũng', c: 'Nam ơi, em học ở đâu?', am: A + 'ht-1.mp3' },
  { ai: 'Nam', c: 'Dạ, em học ở Trường Ngôi Sao.', am: A + 'ht-2.mp3' },
  { ai: 'Dũng', c: 'Trường em ở đâu?', am: A + 'ht-3.mp3' },
  { ai: 'Nam', c: 'Trường em ở trên đường Thanh Niên. Anh có biết đường Thanh Niên không?', am: A + 'ht-4.mp3' },
  { ai: 'Dũng', c: 'Anh biết. Trường em đối diện Bệnh viện Mắt, phải không?', am: A + 'ht-5.mp3' },
  { ai: 'Nam', c: 'Không phải, trường em bên cạnh Bệnh viện Mắt.', am: A + 'ht-6.mp3' },
  { ai: 'Dũng', c: 'Trường em xa hay gần nhà em?', am: A + 'ht-7.mp3' },
  { ai: 'Nam', c: 'Trường em gần nhà em.', am: A + 'ht-8.mp3' }
];
const PHONG = 'img/phong.webp';

const BAI_HOC = {
  quyen: 1, bai: 17, ten: 'Trường em ở đâu?', chuDe: 'Cộng đồng', chu: 'r, t', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [70, 71],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn-lenh.mp3',
          danhSo: true, anChu: true,
          the: NOI.map(([tu, hinh, am]) => ({ tu, hinh: 'img/' + hinh + '.webp', am: A + am + '.mp3' }))
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nghe và nhắc lại', amLenh: A + 'tn2-lenh.mp3',
          danhSo: true, anChu: true,
          goiY: 'Chạm vào từng hình để nghe câu hỏi và câu trả lời. Nghe xong, em nhắc lại thật to.',
          the: NOI.map(([tu, hinh, am, cau], i) => ({ tu, cau, hinh: 'img/' + hinh + '.webp', am: A + 'tn2-' + (i + 1) + '.mp3' }))
        },
        {
          id: 'tn3', so: 3, loai: 'the-hinh', lenh: 'Nghe, chỉ vào hình và nhắc lại', amLenh: A + 'tn3-lenh.mp3',
          danhSo: true, anChu: true,
          goiY: 'Chạm vào từng hình để nghe: Con mèo ở đâu? Nghe xong, em nhắc lại thật to.',
          the: MEO.map((tu, i) => ({ tu, cau: 'Con mèo ở đâu? – Con mèo ở ' + tu + '.', hinh: 'img/meo-' + (i + 1) + '.webp', am: A + 'meo-' + (i + 1) + '.mp3' }))
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [72, 73],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-tranh.webp', moTa: 'Dũng hỏi Nam về Trường Ngôi Sao trên đường Thanh Niên, bên cạnh Bệnh viện Mắt',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai, nhắc lại hội thoại trên',
          goiY: 'Chọn “Đóng vai”, rồi chọn Dũng hoặc Nam. Đến lượt em, em nói to lời của bạn ấy.',
          vai: VAI, loi: LOI
        },
        {
          id: 'ht3', so: 3, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp với bạn',
          goiY: 'Bạn hỏi, em nhìn hình rồi chọn câu trả lời đúng. Sau đó đổi vai cùng bố mẹ.',
          cau: [
            { hinh: 'img/hd-1.webp', hoi: 'Nam học ở đâu?', dung: 'Nam học ở Trường Ngôi Sao.', sai: ['Nam học ở Bệnh viện Mắt.', 'Nam học ở công trường.'] },
            { hinh: 'img/hd-2.webp', hoi: 'Trường Ngôi Sao ở đâu?', dung: 'Trường Ngôi Sao ở trên đường Thanh Niên.', sai: ['Trường Ngôi Sao ở trong bệnh viện.', 'Trường Ngôi Sao ở trong cửa hàng.'] },
            { hinh: 'img/hd-3.webp', hoi: 'Trường Ngôi Sao đối diện Bệnh viện Mắt, phải không?', dung: 'Không phải, Trường Ngôi Sao bên cạnh Bệnh viện Mắt.', sai: ['Phải, Trường Ngôi Sao đối diện Bệnh viện Mắt.'] },
            { hinh: 'img/hd-4.webp', hoi: 'Trường Nam ở xa hay gần nhà Nam?', dung: 'Trường Nam ở gần nhà Nam.', sai: ['Trường Nam ở xa nhà Nam.'] }
          ]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [74, 75],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp với bạn',
          goiY: 'A hỏi, B trả lời. Nhìn tranh căn phòng rồi chọn câu trả lời đúng cho B.',
          cau: [
            { hinh: PHONG, hoi: { c: 'Con mèo ở đâu?', am: A + 'q-meo.mp3' }, dung: 'Con mèo ở bên cạnh cái ghế.', sai: ['Con mèo ở trên cái ghế.', 'Con mèo ở dưới cái bàn.'] },
            { hinh: PHONG, hoi: 'Quả bóng ở đâu?', dung: 'Quả bóng ở dưới cái bàn.', sai: ['Quả bóng ở trên cái bàn.', 'Quả bóng ở bên cạnh cái ghế.'] },
            { hinh: PHONG, hoi: 'Đồng hồ ở đâu?', dung: 'Đồng hồ ở trên tường.', sai: ['Đồng hồ ở trên cái bàn.', 'Đồng hồ ở dưới cái ghế.'] },
            { hinh: PHONG, hoi: 'Quyển sách ở đâu?', dung: 'Quyển sách ở trên cái bàn.', sai: ['Quyển sách ở dưới cái bàn.', 'Quyển sách ở trên cái ghế.'] },
            { hinh: PHONG, hoi: 'Cái đèn ở đâu?', dung: 'Cái đèn ở trên cái bàn.', sai: ['Cái đèn ở dưới cái bàn.', 'Cái đèn ở bên cạnh con mèo.'] },
            { hinh: PHONG, hoi: 'Lọ hoa ở đâu?', dung: 'Lọ hoa ở trên cái bàn.', sai: ['Lọ hoa ở dưới cái bàn.', 'Lọ hoa ở trên cái ghế.'] }
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Tập thể dục buổi sáng (Minh Trang)',
          baiHat: 'Tập thể dục buổi sáng', tacGia: 'Minh Trang', youtube: 'X7GRELUmy7A'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [75],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'R', thuong: 'r', am: A + 'hc-r.mp3' },
            { hoa: 'T', thuong: 't', am: A + 'hc-t.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['r', 't'],
          cau: ['Chú Tiến là kĩ sư.', 'Chú Linh là cảnh sát.', 'Các chú ấy rất giỏi.']
        }
      ]
    }
  ]
};
