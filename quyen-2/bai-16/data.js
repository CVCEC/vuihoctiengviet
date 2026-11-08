/* Quyển 2 – Bài 16: Em đến trường bằng gì?  (sách trang 101–107)
   Ghi âm của NXB chỉ có phần Từ ngữ và Hội thoại 1; các phần khác không có tiếng. */
const A = 'audio/', I = 'img/';

const HT_A = [
  { ai: 'Chị Hoa', c: 'Nam đi học bằng gì?', am: A + 'a1.mp3' },
  { ai: 'Nam', c: 'Em đi học bằng xe đạp.', am: A + 'a2.mp3' },
  { ai: 'Chị Hoa', c: 'Bố em đi làm bằng gì?', am: A + 'a3.mp3' },
  { ai: 'Nam', c: 'Bố em đi làm bằng ô tô.', am: A + 'a4.mp3' },
  { ai: 'Chị Hoa', c: 'Mẹ em cũng đi làm bằng ô tô à?', am: A + 'a5.mp3' },
  { ai: 'Nam', c: 'Mẹ em đi bộ. Cuối tuần, mẹ em đi mua sắm bằng xe máy.', am: A + 'a6.mp3' }
];
const HT_B = [
  { ai: 'Chị Hoa', c: 'Ngày mai chị sẽ đi du lịch Đà Nẵng.', am: A + 'b1.mp3' },
  { ai: 'Nam', c: 'Thích quá! Chị đi máy bay hay tàu hoả?', am: A + 'b2.mp3' },
  { ai: 'Chị Hoa', c: 'Chị đi tàu hoả.', am: A + 'b3.mp3' },
  { ai: 'Nam', c: 'Từ Hà Nội đến Đà Nẵng, đi tàu hoả mất bao lâu?', am: A + 'b4.mp3' },
  { ai: 'Chị Hoa', c: 'Mất khoảng 16 tiếng.', am: A + 'b5.mp3' },
  { ai: 'Nam', c: 'Đi máy bay nhanh hơn nhỉ?', am: A + 'b6.mp3' },
  { ai: 'Chị Hoa', c: 'Đúng rồi, đi máy bay mất khoảng 1 tiếng rưỡi. Nhưng chị thích đi tàu hoả.', am: A + 'b7.mp3' }
];
const VAI = { 'Chị Hoa': { av: I + 'av-hoa.webp' }, 'Nam': { av: I + 'av-nam.webp' } };
const LD = { khoa: I + 'ld-khoa.webp', hue: I + 'ld-hue.webp', khoe: I + 'ld-khoe.webp', huo: I + 'ld-huo-tay.webp', tau: I + 'ld-tau-thuy.webp' };
const hinh = s => ({ hinh: s });

const BAI_HOC = {
  quyen: 2, bai: 16, ten: 'Em đến trường bằng gì?', chuDe: 'Cộng đồng', chu: 'oa – uê', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [101, 102],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh.mp3', danhSo: true,
          the: [
            { hinh: I + 'tn-di-lam.webp', tu: 'đi làm', am: A + 'tn-di-lam.mp3' },
            { hinh: I + 'tn-di-hoc.webp', tu: 'đi học', am: A + 'tn-di-hoc.mp3' },
            { hinh: I + 'tn-di-choi.webp', tu: 'đi chơi', am: A + 'tn-di-choi.mp3' },
            { hinh: I + 'tn-du-lich.webp', tu: 'đi du lịch', am: A + 'tn-du-lich.mp3' },
            { hinh: I + 'tn-mua-sam.webp', tu: 'đi mua sắm', am: A + 'tn-mua-sam.mp3' }
          ]
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn2-lenh.mp3', danhSo: true,
          the: [
            { hinh: I + 'tn-xe-dap.webp', tu: 'đi xe đạp', am: A + 'tn-xe-dap.mp3' },
            { hinh: I + 'tn-xe-may.webp', tu: 'đi xe máy', am: A + 'tn-xe-may.mp3' },
            { hinh: I + 'tn-o-to.webp', tu: 'đi ô tô', am: A + 'tn-o-to.mp3' },
            { hinh: I + 'tn-xe-buyt.webp', tu: 'đi xe buýt', am: A + 'tn-xe-buyt.mp3' },
            { hinh: I + 'tn-tau.webp', tu: 'đi tàu', am: A + 'tn-tau.mp3' },
            { hinh: I + 'tn-may-bay.webp', tu: 'đi máy bay', am: A + 'tn-may-bay.mp3' },
            { hinh: I + 'tn-thuyen.webp', tu: 'đi thuyền', am: A + 'tn-thuyen.mp3' },
            { hinh: I + 'tn-di-bo.webp', tu: 'đi bộ', am: A + 'tn-di-bo.mp3' }
          ]
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [102, 103, 104],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – A', amLenh: A + 'ht-lenh.mp3',
          hinh: I + 'ht-a.webp', moTa: 'Nam nói chuyện với chị Hoa về cách đi học, đi làm', vai: VAI, loi: HT_A
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – B', amLenh: A + 'ht-lenh.mp3',
          hinh: I + 'ht-b.webp', moTa: 'Chị Hoa đi tàu hoả', vai: VAI, loi: HT_B
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          goiY: 'Bấm “Đóng vai”, chọn vai Nam hoặc chị Hoa. Đến lượt em, em nói thật to.',
          vai: VAI, loi: HT_A.concat(HT_B)
        },
        {
          id: 'ht3', so: 3, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Câu 1 là mẫu. Nhìn hình, đọc câu hỏi, chọn câu trả lời đúng rồi nói to cả câu.',
          cau: [
            { hinh: I + 'ht3-1.webp', hoi: 'Chị Mây đi du lịch bằng gì?', dung: 'Chị Mây đi du lịch bằng máy bay.', sai: ['Chị Mây đi du lịch bằng xe máy.', 'Chị Mây đi du lịch bằng tàu hoả.'] },
            { hinh: I + 'ht3-2.webp', hoi: 'Hương và Sơn đi học bằng gì?', dung: 'Hương và Sơn đi học bằng xe buýt.', sai: ['Hương và Sơn đi học bằng xe đạp.', 'Hương và Sơn đi học bằng ô tô.'] },
            { hinh: I + 'ht3-3.webp', hoi: 'Chú Minh đi làm bằng gì?', dung: 'Chú Minh đi làm bằng xe máy.', sai: ['Chú Minh đi làm bằng xe đạp.', 'Chú Minh đi làm bằng xe buýt.'] },
            { hinh: I + 'ht3-4.webp', hoi: 'Cô Huyền đi siêu thị bằng gì?', dung: 'Cô Huyền đi siêu thị bằng ô tô.', sai: ['Cô Huyền đi siêu thị bằng xe máy.', 'Cô Huyền đi siêu thị bằng xe buýt.'] },
            { hinh: I + 'ht3-5.webp', hoi: 'An và Vy đi chơi bằng gì?', dung: 'An và Vy đi chơi bằng xe đạp.', sai: ['An và Vy đi chơi bằng xe máy.', 'An và Vy đi chơi bằng ô tô.'] }
          ]
        },
        {
          id: 'ht4', so: 4, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Câu 1 là mẫu. Nhìn đồng hồ lúc đi và lúc đến, chọn câu trả lời đúng rồi nói to cả câu.',
          cau: [
            { hinh: I + 'ht4-1.webp', hoi: 'Từ Hà Nội đến Lào Cai, đi tàu hoả mất bao lâu?', dung: 'Từ Hà Nội đến Lào Cai, đi tàu hoả mất khoảng 8 tiếng.', sai: ['Từ Hà Nội đến Lào Cai, đi tàu hoả mất khoảng 6 tiếng.', 'Từ Hà Nội đến Lào Cai, đi tàu hoả mất khoảng 16 tiếng.'] },
            { hinh: I + 'ht4-2.webp', hoi: 'Từ nhà đến trường, đi xe đạp mất bao lâu?', dung: 'Từ nhà đến trường, đi xe đạp mất khoảng 30 phút.', sai: ['Từ nhà đến trường, đi xe đạp mất khoảng 8 tiếng.', 'Từ nhà đến trường, đi xe đạp mất khoảng 3 tiếng.'] },
            { hinh: I + 'ht4-3.webp', hoi: 'Từ Huế đến Đà Nẵng, đi ô tô mất bao lâu?', dung: 'Từ Huế đến Đà Nẵng, đi ô tô mất khoảng 3 tiếng.', sai: ['Từ Huế đến Đà Nẵng, đi ô tô mất khoảng 9 tiếng.', 'Từ Huế đến Đà Nẵng, đi ô tô mất khoảng 12 tiếng.'] },
            { hinh: I + 'ht4-4.webp', hoi: 'Từ Thành phố Hồ Chí Minh đến Côn Đảo, đi tàu thuỷ mất bao lâu?', dung: 'Từ Thành phố Hồ Chí Minh đến Côn Đảo, đi tàu thuỷ mất khoảng 6 tiếng.', sai: ['Từ Thành phố Hồ Chí Minh đến Côn Đảo, đi tàu thuỷ mất khoảng 7 tiếng.', 'Từ Thành phố Hồ Chí Minh đến Côn Đảo, đi tàu thuỷ mất khoảng 13 tiếng.'] },
            { hinh: I + 'ht4-5.webp', hoi: 'Từ Hà Nội đến Tokyo, đi máy bay mất bao lâu?', dung: 'Từ Hà Nội đến Tokyo, đi máy bay mất khoảng 3 tiếng.', sai: ['Từ Hà Nội đến Tokyo, đi máy bay mất khoảng 13 tiếng.', 'Từ Hà Nội đến Tokyo, đi máy bay mất khoảng 16 tiếng.'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [104, 105],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'ghep-van', lenh: 'Đánh vần',
          goiY: 'Hoa huệ: tiếng “hoa” có vần oa, tiếng “huệ” có vần uê. Bấm “Đánh vần” rồi đọc theo.',
          tu: [
            { hinh: I + 'hoa-hue.webp', tu: 'hoa huệ', van: 'oa', phan: ['o', 'a'], doc: 'o – a – oa' },
            { hinh: I + 'hoa-hue.webp', tu: 'hoa huệ', van: 'uê', phan: ['u', 'ê'], doc: 'u – ê – uê' }
          ]
        },
        {
          id: 'ld2', so: 2, loai: 'chon-cau', lenh: 'Đọc các từ ngữ sau',
          goiY: 'Em đọc to từ ngữ, rồi chạm vào hình đúng.',
          cau: [
            { hoi: 'khoá', dung: hinh(LD.khoa), sai: [hinh(LD.khoe), hinh(LD.tau)] },
            { hoi: 'Huế', dung: hinh(LD.hue), sai: [hinh(LD.huo), hinh(LD.khoa)] },
            { hoi: 'khoẻ', dung: hinh(LD.khoe), sai: [hinh(LD.hue), hinh(LD.huo)] },
            { hoi: 'huơ tay', dung: hinh(LD.huo), sai: [hinh(LD.khoe), hinh(LD.tau)] },
            { hoi: 'tàu thuỷ', dung: hinh(LD.tau), sai: [hinh(LD.hue), hinh(LD.khoa)] }
          ]
        },
        {
          id: 'ld3', so: 3, loai: 'doc-bai', lenh: 'Đọc bài sau',
          ten: 'Khoa đi du lịch', hinh: I + 'ld-bai.webp',
          cau: [
            { c: 'Mùa hè, Khoa đi du lịch ở thành phố Huế.' },
            { c: 'Huế có sông Hương rất đẹp.' },
            { c: 'Khoa đi chơi trên sông Hương bằng tàu thuỷ.' },
            { c: 'Khoa vui vẻ huơ tay chào mọi người.' },
            { c: 'Khoa đi chơi nhiều nhưng cảm thấy rất khoẻ.' }
          ],
          hoi: [
            { hoi: 'a) Khoa đi du lịch ở đâu?', dung: 'Khoa đi du lịch ở thành phố Huế.', sai: ['Khoa đi du lịch ở Đà Nẵng.', 'Khoa đi du lịch ở Hà Nội.'] },
            { hoi: 'b) Sông Hương thế nào?', dung: 'Sông Hương rất đẹp.', sai: ['Sông Hương rất nhỏ.', 'Sông Hương không đẹp.'] },
            { hoi: 'c) Khoa đi chơi trên sông Hương bằng gì?', dung: 'Khoa đi chơi bằng tàu thuỷ.', sai: ['Khoa đi chơi bằng thuyền.', 'Khoa đi chơi bằng xe đạp.'] },
            { hoi: 'd) Khoa đi chơi nhiều, có mệt không?', dung: 'Không, Khoa cảm thấy rất khoẻ.', sai: ['Có, Khoa rất mệt.'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [106],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'dien-chu', lenh: 'Điền vần và dấu thanh còn thiếu',
          goiY: 'Chạm vào từng hình, rồi chọn chữ và dấu thanh để điền vần còn thiếu.',
          tu: [
            { hinh: LD.khoa, mau: 'kh…', dap: 'khoá' },
            { hinh: LD.hue, mau: 'H…', dap: 'Huế' },
            { hinh: LD.khoe, mau: 'kh…', dap: 'khoẻ' },
            { hinh: LD.huo, mau: 'h… tay', dap: 'huơ tay' },
            { hinh: LD.tau, mau: 'tàu th…', dap: 'tàu thuỷ' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Chép lại các từ ngữ sau',
          tu: [
            { c: 'cái loa', hinh: I + 'lv-cai-loa.webp' },
            { c: 'tàu hoả', hinh: I + 'lv-tau-hoa.webp' },
            { c: 'tròn xoe', hinh: I + 'lv-tron-xoe.webp' },
            { c: 'thuở bé', hinh: I + 'lv-thuo-be.webp' },
            { c: 'xum xuê', hinh: I + 'lv-xum-xue.webp' },
            { c: 'đêm khuya', hinh: I + 'lv-dem-khuya.webp' },
            { c: 'khuy áo', hinh: I + 'lv-khuy-ao.webp' },
            { c: 'luỹ tre', hinh: I + 'lv-luy-tre.webp' }
          ]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [107],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'vong-quay-hinh', lenh: 'Xoay vòng quay, đặt câu về phương tiện giao thông',
          mau: 'xe đạp → Em đi học bằng xe đạp.', can: 5,
          goiY: 'Bấm “Quay”. Vòng quay dừng ở phương tiện nào, em nói tên phương tiện đó và đặt một câu.',
          ghiAm: 'Ghi âm câu em đặt',
          muc: [
            { hinh: I + 'w-tau-thuy.webp', c: 'tàu thuỷ' },
            { hinh: I + 'w-o-to.webp', c: 'ô tô' },
            { hinh: I + 'w-xich-lo.webp', c: 'xích lô' },
            { hinh: I + 'w-xe-buyt.webp', c: 'xe buýt' },
            { hinh: I + 'w-may-bay.webp', c: 'máy bay' },
            { hinh: I + 'w-tau-hoa.webp', c: 'tàu hoả' },
            { hinh: I + 'w-xe-may.webp', c: 'xe máy' },
            { hinh: I + 'w-xe-dap.webp', c: 'xe đạp' }
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'loi-thoai', lenh: 'Hỏi đáp với bạn theo mẫu',
          goiY: 'Đọc mẫu, rồi hỏi đáp với bạn (hoặc bố mẹ): bạn đi học bằng gì, từ nhà đến trường mất bao lâu?',
          ghiAm: 'Ghi âm em hỏi đáp với bạn',
          vai: { 'Bạn A': { av: I + 'av-ban1.webp' }, 'Bạn B': { av: I + 'av-ban2.webp' } },
          loi: [
            { ai: 'Bạn A', c: 'Cậu đi học bằng gì?' },
            { ai: 'Bạn B', c: 'Tớ đi học bằng xe đạp.' },
            { ai: 'Bạn A', c: 'Từ nhà cậu đến trường, đi xe đạp mất bao lâu?' },
            { ai: 'Bạn B', c: 'Từ nhà tớ đến trường, đi xe đạp mất 15 phút.' }
          ]
        },
        {
          id: 'tvv3', so: 3, loai: 'hoc-hat', lenh: 'Học hát: Đoàn tàu nhỏ xíu (Mộng Lân)',
          baiHat: 'Đoàn tàu nhỏ xíu', tacGia: 'Mộng Lân', youtube: 'ZoCqZAp7iSQ'
        }
      ]
    }
  ]
};
