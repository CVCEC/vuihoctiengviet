/* Quyển 2 – Bài 14: Giờ nghỉ, cậu thường làm gì?  (sách trang 90–95)
   Thu âm của NXB: Từ ngữ (bài tập 1) và Hội thoại (bài tập 1). Các phần khác không có tiếng.
   Từ ngữ 2, Hội thoại 3: câu mẫu (M) trong sách; các câu lựa chọn khác và câu trả lời ở Luyện đọc 3 là gợi ý soạn thêm. */
const A = 'audio/', I = 'img/';
const TN1 = [
  { tu: 'đá cầu', k: 'da-cau' }, { tu: 'chơi chuyền', k: 'choi-chuyen' }, { tu: 'đánh cầu lông', k: 'danh-cau-long' },
  { tu: 'nhảy dây', k: 'nhay-day' }, { tu: 'chơi trốn tìm', k: 'choi-tron-tim' }, { tu: 'chơi bịt mắt bắt dê', k: 'choi-bit-mat' }
];
const ANH = (viec, ok) => (ok ? 'Có. Anh (Chị) tớ ' : 'Không. Anh (Chị) tớ ') + viec + '.';

const BAI_HOC = {
  quyen: 2, bai: 14, ten: 'Giờ nghỉ, cậu thường làm gì?', chuDe: 'Trường lớp', chu: 'ai – ay', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [90],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn1-lenh.mp3',
          danhSo: true, anChu: true,
          the: TN1.map(d => ({ hinh: I + 't-' + d.k + '.webp', tu: d.tu, am: A + 'tn1-' + d.k + '.mp3' }))
        },
        {
          id: 'tn2', so: 2, loai: 'chon-cau', lenh: 'Hỏi đáp theo mẫu',
          goiY: 'Mẫu: – Anh (Chị) của bạn vẽ đẹp không? – Có. Anh (Chị) tớ vẽ đẹp. / Không. Anh (Chị) tớ vẽ không đẹp. Chọn câu trả lời đúng với từ “Có” hoặc “Không”, rồi hỏi đáp cùng bố mẹ.',
          cau: [
            { hoi: 'a) – Anh (Chị) của bạn hát hay không? (Em trả lời: Có)', dung: ANH('hát hay', 1), sai: [ANH('hát không hay', 1), ANH('hát hay', 0)] },
            { hoi: 'b) – Anh (Chị) của bạn đá cầu giỏi không? (Em trả lời: Không)', dung: ANH('đá cầu không giỏi', 0), sai: [ANH('đá cầu giỏi', 0), ANH('đá cầu không giỏi', 1)] },
            { hoi: 'c) – Anh (Chị) của bạn nhảy dây giỏi không? (Em trả lời: Có)', dung: ANH('nhảy dây giỏi', 1), sai: [ANH('nhảy dây không giỏi', 1), ANH('nhảy dây giỏi', 0)] },
            { hoi: 'd) – Anh (Chị) của bạn bơi nhanh không? (Em trả lời: Không)', dung: ANH('bơi chậm', 0), sai: [ANH('bơi nhanh', 0), ANH('bơi chậm', 1)] }
          ]
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [91, 92],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – Đoạn A', amLenh: A + 'ht1-lenh.mp3',
          hinh: I + 'ht-a.webp', moTa: 'Giờ nghỉ ở sân trường: các bạn đá cầu, nhảy dây',
          vai: { 'Dũng': { mau: '#3E9B5F' }, 'Nam': { mau: '#3C78C8' } },
          loi: [
            { ai: 'Dũng', c: 'Giờ nghỉ, em thường làm gì?', am: A + 'a1.mp3' },
            { ai: 'Nam', c: 'Em thường đá cầu.', am: A + 'a2.mp3' },
            { ai: 'Dũng', c: 'Em đá cầu giỏi không?', am: A + 'a3.mp3' },
            { ai: 'Nam', c: 'Em đá cũng được.', am: A + 'a4.mp3' },
            { ai: 'Dũng', c: 'Các bạn khác làm gì?', am: A + 'a5.mp3' },
            { ai: 'Nam', c: 'Các bạn nữ hay nhảy dây, đánh chuyền. Có bạn chơi trốn tìm.', am: A + 'a6.mp3' },
            { ai: 'Dũng', c: 'Có bạn nào đánh cầu lông không?', am: A + 'a7.mp3' },
            { ai: 'Nam', c: 'Các bạn ít khi chơi cầu lông vì giờ nghỉ ngắn lắm.', am: A + 'a8.mp3' }
          ]
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – Đoạn B', amLenh: A + 'ht1-lenh.mp3',
          hinh: I + 'ht-b.webp', moTa: 'Mai và Nam nói chuyện trong lớp',
          vai: { 'Mai': { av: I + 'av-mai.webp', mau: '#E0577A' }, 'Nam': { av: I + 'av-nam.webp', mau: '#3C78C8' } },
          loi: [
            { ai: 'Mai', c: 'Ở nhà, lúc rảnh, cậu thường làm gì?', am: A + 'b1.mp3' },
            { ai: 'Nam', c: 'Tớ thường đọc sách hoặc nghe nhạc.', am: A + 'b2.mp3' },
            { ai: 'Mai', c: 'Cậu có chơi đàn không?', am: A + 'b3.mp3' },
            { ai: 'Nam', c: 'Tớ chưa bao giờ chơi đàn. Chị Liên đánh đàn rất giỏi.', am: A + 'b4.mp3' },
            { ai: 'Mai', c: 'Chị ấy hát có hay không?', am: A + 'b5.mp3' },
            { ai: 'Nam', c: 'Chị ấy hát không hay lắm. Còn cậu, lúc rảnh, cậu thường làm gì?', am: A + 'b6.mp3' },
            { ai: 'Mai', c: 'Tớ tập vẽ. Nhưng tớ vẽ chậm lắm.', am: A + 'b7.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'hoat-dong', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          goiY: 'Em đóng vai cùng bố mẹ hoặc bạn. Có thể bấm “Đóng vai” ở bài tập 1 để nghe lời của bạn kia.',
          hinh: [I + 'ht-a.webp', I + 'ht-b.webp'],
          noiDung: [
            'Đoạn A: một người đóng vai Dũng, một người đóng vai Nam.',
            'Đoạn B: một người đóng vai Mai, một người đóng vai Nam.',
            'Đổi vai cho nhau, rồi nói lại hai đoạn hội thoại.'
          ],
          ghiAm: 'Ghi âm em đóng vai'
        },
        {
          id: 'ht3', so: 3, loai: 'chon-cau', lenh: 'Hỏi đáp theo mẫu',
          goiY: 'Mẫu: – Cậu có hay đi bộ đến trường không? – Có. Tớ hay đi bộ đến trường. / Không. Tớ không hay (không bao giờ / ít khi) đi bộ đến trường. Chọn câu trả lời đúng, rồi hỏi đáp cùng bố mẹ.',
          cau: [
            { hoi: 'a) – Cậu có hay đi xe không? (Em trả lời: Có)', dung: 'Có. Tớ hay đi xe.', sai: ['Có. Tớ không hay đi xe.', 'Không. Tớ hay đi xe.'] },
            { hoi: 'b) – Cậu có hay đi bơi không? (Em trả lời: Không)', dung: 'Không. Tớ ít khi đi bơi.', sai: ['Không. Tớ hay đi bơi.', 'Có. Tớ không bao giờ đi bơi.'] },
            { hoi: 'c) – Cậu có hay vẽ không? (Em trả lời: Có)', dung: 'Có. Tớ hay vẽ.', sai: ['Có. Tớ không bao giờ vẽ.', 'Không. Tớ hay vẽ.'] },
            { hoi: 'd) – Cậu có hay hát không? (Em trả lời: Không)', dung: 'Không. Tớ không hay hát.', sai: ['Không. Tớ hay hát.', 'Có. Tớ ít khi hát.'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [92, 93],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'danh-van-van', lenh: 'Đánh vần',
          goiY: 'Bấm “Đánh vần” để xem hai chữ ghép thành vần. Chạm vào từng bước và đọc theo.',
          tu: [
            { hinh: I + 'dv-nai.webp', tu: 'con nai', to: 'ai', tieng: 'ai', phan: ['a', 'i'], thanh: null, doc: 'a – i – ai' },
            { hinh: I + 'dv-tay.webp', tu: 'bàn tay', to: 'ay', tieng: 'ay', phan: ['a', 'y'], thanh: null, doc: 'a – y – ay' }
          ]
        },
        {
          id: 'ld2a', so: 2, loai: 'noi', lenh: 'Đọc các từ ngữ sau – từ 1 đến 6', tenA: 'Từ ngữ', tenB: 'Hình',
          goiY: 'Em đọc to từng từ ngữ, rồi chạm vào từ và hình đúng để nối.',
          a: [{ c: 'cái chai' }, { c: 'máy cày' }, { c: 'nhảy dây' }, { c: 'con voi' }, { c: 'múa rối' }, { c: 'cái nồi' }],
          b: [{ hinh: I + 'w-con-voi.webp' }, { hinh: I + 'w-cai-noi.webp' }, { hinh: I + 'w-may-cay.webp' }, { hinh: I + 'w-mua-roi.webp' }, { hinh: I + 'w-cai-chai.webp' }, { hinh: I + 'w-nhay-day.webp' }],
          cap: [[0, 4], [1, 2], [2, 5], [3, 0], [4, 3], [5, 1]]
        },
        {
          id: 'ld2b', so: 2, loai: 'noi', lenh: 'Đọc các từ ngữ sau – từ 7 đến 12', tenA: 'Từ ngữ', tenB: 'Hình',
          goiY: 'Em đọc to từng từ ngữ, rồi chạm vào từ và hình đúng để nối.',
          a: [{ c: 'đồ chơi' }, { c: 'dãy núi' }, { c: 'ngửi' }, { c: 'nải chuối' }, { c: 'trái bưởi' }, { c: 'cưỡi ngựa' }],
          b: [{ hinh: I + 'w-trai-buoi.webp' }, { hinh: I + 'w-ngui.webp' }, { hinh: I + 'w-cuoi-ngua.webp' }, { hinh: I + 'w-do-choi.webp' }, { hinh: I + 'w-nai-chuoi.webp' }, { hinh: I + 'w-day-nui.webp' }],
          cap: [[0, 3], [1, 5], [2, 1], [3, 4], [4, 0], [5, 2]]
        },
        {
          id: 'ld3', so: 3, loai: 'doc-bai-dong', lenh: 'Đọc bài sau',
          ten: 'Cá và chim', hinh: I + 'bai-doc.webp', nguon: 'Theo Nguyễn Thị Thảo',
          cau: [
            { c: 'Cá bơi dưới suối, thấy chim hót trên cây, bèn rủ:' },
            { c: '– Này bạn chim ơi!', i: 1 }, { c: 'Chim có biết bơi', i: 1 }, { c: 'Xuống đây mà chơi!', i: 1 }, { c: 'Thích lắm! Thích lắm!', i: 1 },
            { c: 'Chim trả lời:' },
            { c: '– Ôi, bạn cá ơi!', i: 1 }, { c: 'Chim không biết bơi', i: 1 }, { c: 'Chim có đôi cánh', i: 1 }, { c: 'Chim bay trên trời.', i: 1 },
            { c: 'Cá nói:' },
            { c: '– Không lo, chim ơi!', i: 1 }, { c: 'Cá bơi dưới suối', i: 1 }, { c: 'Chim bay trên trời', i: 1 }, { c: 'Ta cùng đi chơi', i: 1 }, { c: 'Thích lắm! Thích lắm!', i: 1 },
            { c: 'Thế rồi hai bạn cùng đi chơi.' }
          ],
          hoi: [
            { hoi: 'a) Cá rủ chim làm gì?', dung: 'Cá rủ chim xuống nước chơi.', sai: ['Cá rủ chim bay trên trời.', 'Cá rủ chim hót trên cây.'] },
            { hoi: 'b) Chim có biết bơi không?', dung: 'Chim không biết bơi.', sai: ['Chim biết bơi.', 'Chim bơi dưới suối.'] },
            { hoi: 'c) Chim có đi chơi với cá được không?', dung: 'Được. Cá bơi dưới suối, chim bay trên trời, hai bạn cùng đi chơi.', sai: ['Không được, vì chim không biết bơi.', 'Không được, vì cá không biết bay.'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [94],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'viet-o-li', lenh: 'Chép lại các từ ngữ sau',
          tu: [
            { c: 'cái váy', hinh: I + 'v-cai-vay.webp' }, { c: 'cây dừa', hinh: I + 'v-cay-dua.webp' }, { c: 'bầy sói', hinh: I + 'v-bay-soi.webp' },
            { c: 'buổi tối', hinh: I + 'v-buoi-toi.webp' }, { c: 'phơi', hinh: I + 'v-phoi.webp' }, { c: 'bơi lội', hinh: I + 'v-boi-loi.webp' },
            { c: 'chui', hinh: I + 'v-chui.webp' }, { c: 'gửi thư', hinh: I + 'v-gui-thu.webp' }, { c: 'dòng suối', hinh: I + 'v-dong-suoi.webp' },
            { c: 'đồng muối', hinh: I + 'v-dong-muoi.webp' }, { c: 'con muỗi', hinh: I + 'v-con-muoi.webp' }, { c: 'cười tươi', hinh: I + 'v-cuoi-tuoi.webp' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Chép lại các câu sau',
          tu: [{ c: 'Cá bơi dưới suối.' }, { c: 'Chim bay trên trời.' }, { c: 'Hai bạn cùng đi chơi.' }]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [95],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'loi-thoai', lenh: 'Hỏi đáp theo mẫu: Nghỉ hè, cậu thường làm gì?',
          goiY: 'Đọc lời mẫu. Sau đó em hỏi đáp với bố mẹ hoặc bạn: nghỉ hè, em thường làm gì?',
          vai: { 'Bạn trai': { av: I + 'tv-trai.webp', mau: '#E0577A' }, 'Bạn gái': { av: I + 'tv-gai.webp', mau: '#3C78C8' } },
          loi: [
            { ai: 'Bạn trai', c: 'Nghỉ hè, cậu thường làm gì?' },
            { ai: 'Bạn gái', c: 'Tớ thường đi du lịch cùng gia đình. Còn cậu?' },
            { ai: 'Bạn trai', c: 'Tớ ít khi đi du lịch. Tớ đi bơi, học võ, học đàn.' }
          ],
          ghiAm: 'Ghi âm em kể về kì nghỉ hè'
        },
        {
          id: 'tvv2a', so: 2, loai: 'chon-cau', lenh: 'Trò chơi: Đuổi hình bắt chữ – a) Vòng 1: Tìm tiếng có vần đã học',
          goiY: 'Bạn nói một vần (ví dụ: AI), em tìm thật nhanh tiếng có vần đó (TAI).',
          cau: [
            { hoi: 'AI', dung: 'TAI', sai: ['TAY', 'TÔI'] },
            { hoi: 'AY', dung: 'MÁY', sai: ['MÁI', 'MẤY'] },
            { hoi: 'ÂY', dung: 'DÂY', sai: ['DẠY', 'DÀI'] },
            { hoi: 'OI', dung: 'VOI', sai: ['VÔI', 'VUI'] },
            { hoi: 'ƠI', dung: 'CHƠI', sai: ['CHỔI', 'CHUI'] },
            { hoi: 'UÔI', dung: 'CHUỐI', sai: ['CHỔI', 'CHUI'] },
            { hoi: 'ƯƠI', dung: 'BƯỞI', sai: ['BỞI', 'BUỔI'] }
          ]
        },
        {
          id: 'tvv2b', so: 2, loai: 'chon-cau', lenh: 'Trò chơi: Đuổi hình bắt chữ – b) Vòng 2: Tìm từ ứng với hình',
          goiY: 'Bạn đưa một hình, em tìm thật nhanh từ ứng với hình (ví dụ: VOI).',
          cau: [
            { hinh: I + 'vong2-voi.webp', dung: 'VOI', sai: ['NAI', 'NỒI'] },
            { hinh: I + 'w-cai-noi.webp', dung: 'NỒI', sai: ['NÚI', 'NAI'] },
            { hinh: I + 'w-trai-buoi.webp', dung: 'BƯỞI', sai: ['CHUỐI', 'BƠI'] },
            { hinh: I + 'w-cai-chai.webp', dung: 'CHAI', sai: ['CHƠI', 'CHUI'] },
            { hinh: I + 'w-may-cay.webp', dung: 'MÁY CÀY', sai: ['NHẢY DÂY', 'MÚA RỐI'] },
            { hinh: I + 'v-con-muoi.webp', dung: 'CON MUỖI', sai: ['CON VOI', 'CON NAI'] }
          ]
        },
        {
          id: 'tvv2c', so: 2, loai: 'dien-chu', lenh: 'Trò chơi: Đuổi hình bắt chữ – c) Vòng 3: Nghe đọc, viết đúng',
          goiY: 'Bố mẹ hoặc bạn đọc từ, em viết đúng tiếng còn thiếu: chạm vào hình, chọn chữ và dấu thanh.',
          tu: [
            { hinh: I + 'v3-con-nai.webp', mau: 'con …', dap: 'con nai' },
            { hinh: I + 'v3-boi-loi.webp', mau: 'bơi …', dap: 'bơi lội' },
            { hinh: I + 'v3-dong-suoi.webp', mau: 'dòng …', dap: 'dòng suối' }
          ]
        },
        {
          id: 'tvv3', so: 3, loai: 'hoc-hat', lenh: 'Học hát: Dung dăng dung dẻ (Đồng dao)',
          baiHat: 'Dung dăng dung dẻ', tacGia: 'Đồng dao', youtube: 'HHQjBXBIpo8'
        }
      ]
    }
  ]
};
