/* Quyển 2 – Bài 3: Trong phòng khách có gì?  (sách trang 16–21)
   Toạ độ điểm chạm tính theo % của hình: [trái, trên, rộng, cao] */
const A = 'audio/';
const PHONG = [
  { k: 'phong-khach', tu: 'phòng khách' }, { k: 'phong-bep', tu: 'phòng bếp' }, { k: 'phong-an', tu: 'phòng ăn' }, { k: 'phong-lam-viec', tu: 'phòng làm việc' },
  { k: 'phong-ngu', tu: 'phòng ngủ' }, { k: 'phong-tam', tu: 'phòng tắm' }, { k: 'san', tu: 'sân' }, { k: 'vuon', tu: 'vườn' }
];
// Từ ngữ 2 – tranh ngôi nhà; thứ tự theo file thu âm
const NHA = {
  hinh: 'img/nha.webp', co: [1100, 560], moTa: 'Ngôi nhà: bếp, bàn ăn, tủ lạnh, ti vi, bàn ghế, tranh, giường, tủ quần áo',
  diem: [
    { tu: 'bếp', am: A + 'tn-bep.mp3', nguoi: [9.5, 45, 10.5, 18], z: 1 },
    { tu: 'bàn ăn', am: A + 'tn-ban-an.mp3', nguoi: [0, 63, 18, 19] },
    { tu: 'tủ lạnh', am: A + 'tn-tu-lanh.mp3', nguoi: [19.5, 26, 12, 36], z: 1 },
    { tu: 'ti vi', am: A + 'tn-ti-vi.mp3', nguoi: [35.5, 44, 21.5, 14.5], z: 1 },
    { tu: 'bàn ghế', am: A + 'tn-ban-ghe.mp3', nguoi: [24, 58.5, 51, 24] },
    { tu: 'tranh', am: A + 'tn-tranh.mp3', nguoi: [43, 20, 21.5, 23] },
    { tu: 'giường', am: A + 'tn-giuong.mp3', nguoi: [75, 54, 20, 23] },
    { tu: 'tủ quần áo', am: A + 'tn-tu-quan-ao.mp3', nguoi: [80, 27, 17, 27] }
  ]
};
const cau = (hinh, hoi, dung, sai) => ({ hinh: 'img/' + hinh + '.webp', hoi, dung, sai });

const BAI_HOC = {
  quyen: 2, bai: 3, ten: 'Trong phòng khách có gì?', chuDe: 'Gia đình', chu: 'i, ia, u, ua', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [16],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh.mp3',
          danhSo: true, anChu: true,
          the: PHONG.map(p => ({ hinh: 'img/tn-' + p.k + '.webp', tu: p.tu, am: A + 'tn-' + p.k + '.mp3' }))
        },
        Object.assign({
          id: 'tn2', so: 2, loai: 'nghe-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn2-lenh.mp3',
          caBai: NHA.diem.map((d, i) => ({ am: d.am, c: d.tu, d: i }))
        }, NHA)
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [17, 18],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – A', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-a.webp', moTa: 'Ngôi nhà nhiều phòng của Mai',
          vai: { 'Liên': { av: 'img/av-lien.webp' }, 'Mai': { av: 'img/av-mai.webp' } },
          loi: [
            { ai: 'Liên', c: 'Nhà của em có mấy phòng?', am: A + 'ht-a1.mp3' },
            { ai: 'Mai', c: 'Nhà em có 8 phòng.', am: A + 'ht-a2.mp3' },
            { ai: 'Liên', c: 'Đó là những phòng nào?', am: A + 'ht-a3.mp3' },
            { ai: 'Mai', c: 'Đó là phòng khách, phòng ăn, phòng làm việc, ba phòng ngủ và hai phòng tắm.', am: A + 'ht-a4.mp3' },
            { ai: 'Liên', c: 'Trong phòng khách có gì?', am: A + 'ht-a5.mp3' },
            { ai: 'Mai', c: 'Trong phòng khách có một bộ bàn ghế, một cái ti vi và một bức tranh lớn.', am: A + 'ht-a6.mp3' }
          ]
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – B', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-b.webp', moTa: 'Phòng ăn có bàn ăn, bếp, tủ bếp và tủ lạnh',
          vai: { 'Dũng': { av: 'img/av-dung.webp' }, 'Nam': { av: 'img/av-nam.webp' } },
          loi: [
            { ai: 'Dũng', c: 'Trong phòng ăn nhà em có gì?', am: A + 'ht-b1.mp3' },
            { ai: 'Nam', c: 'Trong phòng ăn nhà em có một bộ bàn ăn.', am: A + 'ht-b2.mp3' },
            { ai: 'Dũng', c: 'Trong phòng ăn có bếp, phải không?', am: A + 'ht-b3.mp3' },
            { ai: 'Nam', c: 'Phải. Trong phòng ăn có một cái bếp, một cái tủ bếp và một cái tủ lạnh.', am: A + 'ht-b4.mp3' },
            { ai: 'Dũng', c: 'Trong phòng ngủ có gì?', am: A + 'ht-b5.mp3' },
            { ai: 'Nam', c: 'Trong phòng ngủ có một cái giường và một cái tủ quần áo.', am: A + 'ht-b6.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'hoat-dong', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          hinh: ['img/ht-a.webp', 'img/ht-b.webp'],
          noiDung: [
            'Em và bạn (hoặc bố mẹ) đóng vai Liên và Mai, nhắc lại đoạn hội thoại A.',
            'Đổi vai cho nhau, nói lại đoạn A.',
            'Đóng vai Dũng và Nam, nhắc lại đoạn hội thoại B.',
            'Đổi vai cho nhau, nói lại đoạn B.'
          ],
          ghiAm: 'Ghi âm em đóng vai'
        },
        {
          id: 'ht3', so: 3, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Hình 1 là mẫu. Dấu (+) là có, dấu (–) là không có. Bạn hỏi, em chọn câu trả lời đúng rồi nói to.',
          cau: [
            cau('m1', 'Trong phòng bếp có gì?', 'Trong phòng bếp có 1 cái bếp, 1 cái tủ bếp và 1 cái tủ lạnh.', ['Trong phòng bếp có 1 cái bếp, 1 cái tủ bếp và 1 bộ bàn ăn.', 'Trong phòng bếp có 1 cái giường và 1 cái tủ quần áo.']),
            cau('m1', 'Trong phòng bếp có bàn ăn, phải không?', 'Không, trong phòng bếp không có bàn ăn. Bàn ăn ở trong phòng ăn.', ['Phải, trong phòng bếp có bàn ăn.']),
            cau('m2', 'Trong phòng khách có gì?', 'Trong phòng khách có 1 bộ bàn ghế, 1 cái ti vi và 1 bức tranh.', ['Trong phòng khách có 1 bộ bàn ghế, 1 cái ti vi và 1 cái tủ lạnh.', 'Trong phòng khách có 1 cái giường và 1 cái tủ quần áo.']),
            cau('m2', 'Trong phòng khách có tủ lạnh, phải không?', 'Không, trong phòng khách không có tủ lạnh.', ['Phải, trong phòng khách có tủ lạnh.']),
            cau('m3', 'Trong phòng ngủ có gì?', 'Trong phòng ngủ có 1 cái giường, 1 cái ghế và 1 cái tủ quần áo.', ['Trong phòng ngủ có 1 cái giường, 1 cái ghế và 1 cái ti vi.', 'Trong phòng ngủ có 1 cái bếp và 1 cái tủ lạnh.']),
            cau('m3', 'Trong phòng ngủ có ti vi, phải không?', 'Không, trong phòng ngủ không có ti vi.', ['Phải, trong phòng ngủ có ti vi.']),
            cau('m4', 'Trong phòng làm việc có gì?', 'Trong phòng làm việc có 1 cái bàn, 1 cái máy tính và 1 cái ghế.', ['Trong phòng làm việc có 1 cái bàn, 1 cái máy tính và 1 cái tủ quần áo.', 'Trong phòng làm việc có 1 cái bếp và 1 cái tủ bếp.']),
            cau('m4', 'Trong phòng làm việc có tủ quần áo, phải không?', 'Không, trong phòng làm việc không có tủ quần áo.', ['Phải, trong phòng làm việc có tủ quần áo.']),
            cau('m5', 'Trong phòng ăn có gì?', 'Trong phòng ăn có 1 bộ bàn ăn và 1 cái tủ lạnh.', ['Trong phòng ăn có 1 bộ bàn ăn, 1 cái tủ lạnh và 1 cái tủ bếp.', 'Trong phòng ăn có 1 cái giường và 1 cái tủ quần áo.']),
            cau('m5', 'Trong phòng ăn có tủ bếp, phải không?', 'Không, trong phòng ăn không có tủ bếp.', ['Phải, trong phòng ăn có tủ bếp.'])
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [19, 20],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'the-chu', lenh: 'Nghe và nhắc lại', amLenh: A + 'ld-lenh.mp3',
          chu: [
            { hoa: 'I', thuong: 'i', am: A + 'ld-i.mp3' },
            { hoa: 'Ia', thuong: 'ia', am: A + 'ld-ia.mp3' },
            { hoa: 'U', thuong: 'u', am: A + 'ld-u.mp3' },
            { hoa: 'Ua', thuong: 'ua', am: A + 'ld-ua.mp3' }
          ]
        },
        {
          id: 'ld2', so: 2, loai: 'danh-van', lenh: 'Đánh vần',
          tu: [
            { hinh: 'img/cua.webp', tieng: 'cua', phan: ['c', 'ua'], thanh: null, doc: 'cờ – ua – cua' },
            { hinh: 'img/dia.webp', tieng: 'đĩa', phan: ['đ', 'ia'], thanh: 'ngã', doc: 'đờ – ia – đia – ngã – đĩa' }
          ]
        },
        {
          id: 'ld3', so: 3, loai: 'chon-cau', lenh: 'Đọc từ',
          goiY: 'Em đọc to từ, rồi chạm vào hình đúng.',
          cau: [
            { hoi: 'dì', dung: { hinh: 'img/di.webp' }, sai: [{ hinh: 'img/dua.webp' }, { hinh: 'img/du-du.webp' }] },
            { hoi: 'đũa', dung: { hinh: 'img/dua.webp' }, sai: [{ hinh: 'img/dia2.webp' }, { hinh: 'img/cua-da.webp' }] },
            { hoi: 'đĩa', dung: { hinh: 'img/dia2.webp' }, sai: [{ hinh: 'img/di.webp' }, { hinh: 'img/dua.webp' }] },
            { hoi: 'đu đủ', dung: { hinh: 'img/du-du.webp' }, sai: [{ hinh: 'img/cua-da.webp' }, { hinh: 'img/dia2.webp' }] },
            { hoi: 'cua đá', dung: { hinh: 'img/cua-da.webp' }, sai: [{ hinh: 'img/du-du.webp' }, { hinh: 'img/di.webp' }] }
          ]
        },
        {
          id: 'ld4', so: 4, loai: 'noi', lenh: 'Đọc và nối các từ ngữ với hình', tenA: 'Từ ngữ', tenB: 'Hình',
          a: [{ c: 'cá đĩa' }, { c: 'đũa' }, { c: 'dì' }, { c: 'đĩa' }, { c: 'dù đỏ' }, { c: 'đu đủ' }],
          b: [{ hinh: 'img/di.webp' }, { hinh: 'img/dia2.webp' }, { hinh: 'img/ca-dia.webp' }, { hinh: 'img/du-do.webp' }, { hinh: 'img/du-du.webp' }, { hinh: 'img/dua.webp' }],
          cap: [[0, 2], [1, 5], [2, 0], [3, 1], [4, 3], [5, 4]]
        },
        {
          id: 'ld5', so: 5, loai: 'doc-bai', lenh: 'Đọc các câu sau',
          cau: [{ c: 'Dì có đu đủ.' }, { c: 'Cô có đĩa cá.' }, { c: 'Đĩa cá có đũa.' }]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [20, 21],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'dien-chu', lenh: 'Viết tiếng còn thiếu', them: 'o',
          tu: [
            { hinh: 'img/ca-dia.webp', mau: 'cá …', dap: 'cá đĩa' },
            { hinh: 'img/cua-da.webp', mau: '… đá', dap: 'cua đá' },
            { hinh: 'img/du-do.webp', mau: '… đỏ', dap: 'dù đỏ' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Chép lại các từ ngữ sau',
          tu: [
            { c: 'dì', hinh: 'img/di.webp' }, { c: 'dù đỏ', hinh: 'img/du-do.webp' }, { c: 'đũa', hinh: 'img/dua.webp' },
            { c: 'cá đĩa', hinh: 'img/ca-dia.webp' }, { c: 'đu đủ', hinh: 'img/du-du.webp' }, { c: 'cua đá', hinh: 'img/cua-da.webp' }
          ]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [21],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'hoat-dong', lenh: 'Trò chơi: Tham quan ngôi nhà',
          goiY: 'Ở nhà: bố mẹ hỏi “Trong phòng … có gì?”, em chạy đến phòng đó và nói tên đồ vật em thấy.',
          hinh: 'img/tvv-tham-quan.webp',
          noiDung: [
            'Chia lớp thành 3 hoặc 4 đội.',
            'Mỗi học sinh trong mỗi đội cầm 1 – 2 thẻ từ.',
            'Khi giáo viên hô: “Trong phòng khách có gì?”, các bạn đang cầm thẻ từ phù hợp (ví dụ: ti vi, bàn ghế) sẽ chạy nhanh đến góc có tranh phòng khách và nói: “Trong phòng khách có ti vi / bàn ghế.”.'
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Đồ dùng bé yêu (Hoàng Quân Dụng)',
          baiHat: 'Đồ dùng bé yêu', tacGia: 'Hoàng Quân Dụng', youtube: 'TDJ2y04rgOc'
        }
      ]
    }
  ]
};
