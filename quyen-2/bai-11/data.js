/* Quyển 2 – Bài 11: Bây giờ là mấy giờ?  (sách trang 68–74)
   Thu âm của NXB: Từ ngữ (bài tập 1, 2) và Hội thoại (bài tập 1). Các phần khác không có tiếng.
   Toạ độ điểm chạm tính theo % của hình: [trái, trên, rộng, cao] */
const A = 'audio/', I = 'img/';

// 8 hoạt động trong ngày (Từ ngữ – bài tập 2), theo thứ tự trong sách và trong file thu âm
const HD = [
  { tu: 'dậy', k: 'day' }, { tu: 'đánh răng', k: 'danh-rang' }, { tu: 'rửa mặt', k: 'rua-mat' }, { tu: 'tập thể dục', k: 'tap-the-duc' },
  { tu: 'ăn sáng', k: 'an-sang' }, { tu: 'ăn trưa', k: 'an-trua' }, { tu: 'ăn tối', k: 'an-toi' }, { tu: 'đi ngủ', k: 'di-ngu' }
];
// Tranh ghép 8 hình của bài tập 2 (bỏ nhãn chữ) – dùng cho bài hỏi đáp
const CANH_HD = {
  hinh: I + 'tn3-canh.webp', co: [1096, 398], moTa: 'Tám hình: bạn gái dậy, đánh răng, rửa mặt, tập thể dục, ăn sáng, ăn trưa, ăn tối, đi ngủ',
  diem: HD.map((d, i) => ({ tu: d.tu, am: A + 'tn2-' + d.k + '.mp3', nguoi: [[0.7, 25.5, 50.4, 75.2][i % 4], i < 4 ? 2 : 51, 24.1, 47] }))
};
const GIO = (hoat, gio) => 'Tớ ' + hoat + ' lúc ' + gio + '.';

const BAI_HOC = {
  quyen: 2, bai: 11, ten: 'Bây giờ là mấy giờ?', chuDe: 'Trường lớp', chu: 'an – at', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [68],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn1-lenh.mp3',
          danhSo: true, anChu: true, tenChoi: 'Trò chơi: Nghe và chọn đồng hồ',
          goiY: 'Chạm vào từng đồng hồ để nghe giờ. Nghe xong, em nhắc lại thật to.',
          the: [
            { hinh: I + 'dh-1.webp', tu: '2 giờ', am: A + 'tn1-1.mp3' },
            { hinh: I + 'dh-2.webp', tu: '2 giờ 50 phút (3 giờ kém 10 phút)', am: A + 'tn1-2.mp3' },
            { hinh: I + 'dh-3.webp', tu: '7 giờ 15 phút', am: A + 'tn1-3.mp3' },
            { hinh: I + 'dh-4.webp', tu: '9 giờ 30 phút (9 giờ rưỡi)', am: A + 'tn1-4.mp3' }
          ]
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn2-lenh.mp3',
          danhSo: true, anChu: true,
          the: HD.map(d => ({ hinh: I + 'hd-' + d.k + '.webp', tu: d.tu, am: A + 'tn2-' + d.k + '.mp3' }))
        },
        {
          id: 'tn3', so: 3, loai: 'hoi-dap', lenh: 'Nhìn hình ở bài tập 2, hỏi đáp theo mẫu',
          goiY: 'Bạn hỏi: “Bạn ấy đang làm gì?”. Em nhìn hình được khoanh vàng, chọn câu trả lời đúng.',
          nguon: CANH_HD, mauCau: 'Bạn ấy đang {tu}.',
          hoi: { c: 'Bạn ấy đang làm gì?', am: null, av: I + 'm-trai.webp' },
          dap: { ten: 'người trả lời', av: I + 'm-gai.webp' },
          mau: [[{ c: 'Bạn ấy đang làm gì?', am: null }, { c: 'Bạn ấy đang ăn sáng.', am: null }]],
          amCau: {}
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [69, 70],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – Đoạn A', amLenh: A + 'ht1-lenh.mp3',
          hinh: I + 'ht-a.webp', moTa: 'Mai chào má trước khi đi học',
          vai: { 'Mai': { av: I + 'av-mai.webp', mau: '#E0577A' }, 'Má': { av: I + 'av-ma.webp', mau: '#3E9B5F' } },
          loi: [
            { ai: 'Mai', c: 'Má ơi, bây giờ là mấy giờ ạ?', am: A + 'a1.mp3' },
            { ai: 'Má', c: 'Bây giờ là 6 giờ 25 phút.', am: A + 'a2.mp3' },
            { ai: 'Mai', c: 'Con chào má. Con đi học ạ.', am: A + 'a3.mp3' },
            { ai: 'Má', c: 'Con đã ăn sáng chưa?', am: A + 'a4.mp3' },
            { ai: 'Mai', c: 'Dạ, con ăn sáng rồi ạ.', am: A + 'a5.mp3' },
            { ai: 'Má', c: 'Con đi xe chứ?', am: A + 'a6.mp3' },
            { ai: 'Mai', c: 'Không ạ. Hôm nay con không vội. Con đi bộ.', am: A + 'a7.mp3' },
            { ai: 'Má', c: 'Mấy giờ con vào học?', am: A + 'a8.mp3' },
            { ai: 'Mai', c: 'Hôm nay, 7 giờ 30 phút chúng con vào học ạ.', am: A + 'a9.mp3' }
          ]
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – Đoạn B', amLenh: A + 'ht1-lenh.mp3',
          hinh: I + 'ht-b.webp', moTa: 'Mai, Liên và Nam nói chuyện về giờ dậy của ông',
          vai: { 'Mai': { av: I + 'av-mai-b.webp', mau: '#E0577A' }, 'Liên': { av: I + 'av-lien.webp', mau: '#D9822B' }, 'Nam': { av: I + 'av-nam.webp', mau: '#3C78C8' } },
          loi: [
            { ai: 'Mai', c: 'Ở nhà, chị thường dậy lúc mấy giờ?', am: A + 'b1.mp3' },
            { ai: 'Liên', c: 'Chị thường dậy lúc 6 giờ.', am: A + 'b2.mp3' },
            { ai: 'Mai', c: 'Ở nhà chị, ai dậy sớm nhất?', am: A + 'b3.mp3' },
            { ai: 'Liên', c: 'Ông chị dậy sớm nhất. 5 giờ ông đã dậy rồi.', am: A + 'b4.mp3' },
            { ai: 'Mai', c: 'Ông không ngủ được à?', am: A + 'b5.mp3' },
            { ai: 'Nam', c: 'Đúng. Ông dậy tập thể dục 30 phút. Sau đó, ông đun nước, pha trà.', am: A + 'b6.mp3' },
            { ai: 'Mai', c: 'Còn ở nhà em, má em dậy sớm nhất.', am: A + 'b7.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'hoat-dong', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          goiY: 'Em đóng vai cùng bố mẹ hoặc bạn. Có thể bấm “Đóng vai” ở bài tập 1 để nghe lời của bạn kia.',
          hinh: [I + 'ht-a.webp', I + 'ht-b.webp'],
          noiDung: [
            'Đoạn A: một người đóng vai Mai, một người đóng vai má.',
            'Đoạn B: đóng vai Mai, Liên và Nam.',
            'Đổi vai cho nhau, rồi nói lại hai đoạn hội thoại.'
          ],
          ghiAm: 'Ghi âm em đóng vai'
        },
        {
          id: 'ht3', so: 3, loai: 'chon-cau', lenh: 'Dựa vào các hình ở bài tập 2 phần Từ ngữ, hỏi đáp theo mẫu',
          goiY: 'Mẫu: – Ở nhà, bạn dậy lúc mấy giờ? – Tớ dậy lúc 6 giờ. – Mấy giờ bạn ăn sáng? – Tớ ăn sáng lúc 6 giờ 30 phút. Em nhìn đồng hồ trong hình, chọn câu trả lời đúng.',
          cau: [
            { hinh: I + 'hd-day.webp', hoi: 'Ở nhà, bạn dậy lúc mấy giờ?', dung: GIO('dậy', '6 giờ'), sai: [GIO('dậy', '12 giờ 30 phút'), GIO('dậy', '9 giờ')] },
            { hinh: I + 'hd-danh-rang.webp', hoi: 'Mấy giờ bạn đánh răng?', dung: GIO('đánh răng', '6 giờ 10 phút'), sai: [GIO('đánh răng', '2 giờ 30 phút'), GIO('đánh răng', '6 giờ 30 phút')] },
            { hinh: I + 'hd-rua-mat.webp', hoi: 'Mấy giờ bạn rửa mặt?', dung: GIO('rửa mặt', '6 giờ 15 phút'), sai: [GIO('rửa mặt', '3 giờ 30 phút'), GIO('rửa mặt', '7 giờ 15 phút')] },
            { hinh: I + 'hd-tap-the-duc.webp', hoi: 'Mấy giờ bạn tập thể dục?', dung: GIO('tập thể dục', '6 giờ 20 phút'), sai: [GIO('tập thể dục', '4 giờ 30 phút'), GIO('tập thể dục', '9 giờ 20 phút')] },
            { hinh: I + 'hd-an-sang.webp', hoi: 'Mấy giờ bạn ăn sáng?', dung: GIO('ăn sáng', '6 giờ 30 phút'), sai: [GIO('ăn sáng', '12 giờ 30 phút'), GIO('ăn sáng', '6 giờ')] },
            { hinh: I + 'hd-an-trua.webp', hoi: 'Mấy giờ bạn ăn trưa?', dung: GIO('ăn trưa', '11 giờ 30 phút'), sai: [GIO('ăn trưa', '6 giờ 55 phút'), GIO('ăn trưa', '12 giờ')] },
            { hinh: I + 'hd-an-toi.webp', hoi: 'Mấy giờ bạn ăn tối?', dung: GIO('ăn tối', '7 giờ kém 15 phút'), sai: [GIO('ăn tối', '9 giờ 35 phút'), GIO('ăn tối', '7 giờ 15 phút')] },
            { hinh: I + 'hd-di-ngu.webp', hoi: 'Mấy giờ bạn đi ngủ?', dung: GIO('đi ngủ', '9 giờ'), sai: [GIO('đi ngủ', '12 giờ 45 phút'), GIO('đi ngủ', '3 giờ')] }
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [70, 71, 72],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'danh-van-van', lenh: 'Đánh vần',
          goiY: 'Bấm “Đánh vần” để xem hai chữ ghép thành vần. Chạm vào từng bước và đọc theo.',
          tu: [
            { hinh: I + 'dv-dan.webp', tu: 'đàn', to: 'àn', tieng: 'an', phan: ['a', 'n'], thanh: null, doc: 'a – nờ – an' },
            { hinh: I + 'dv-nha-hat.webp', tu: 'nhà hát', to: 'át', tieng: 'at', phan: ['a', 't'], thanh: null, doc: 'a – tờ – at' }
          ]
        },
        {
          id: 'ld2a', so: 2, loai: 'noi', lenh: 'Đọc các từ ngữ sau – từ 1 đến 6', tenA: 'Từ ngữ', tenB: 'Hình',
          goiY: 'Em đọc to từng từ ngữ, rồi chạm vào từ và hình đúng để nối.',
          a: [{ c: 'khăn rằn' }, { c: 'mắt' }, { c: 'bàn chân' }, { c: 'bít tất' }, { c: 'đèn' }, { c: 'quét' }],
          b: [{ hinh: I + 'w-bit-tat.webp' }, { hinh: I + 'w-quet.webp' }, { hinh: I + 'w-khan-ran.webp' }, { hinh: I + 'w-den.webp' }, { hinh: I + 'w-mat.webp' }, { hinh: I + 'w-ban-chan.webp' }],
          cap: [[0, 2], [1, 4], [2, 5], [3, 0], [4, 3], [5, 1]]
        },
        {
          id: 'ld2b', so: 2, loai: 'noi', lenh: 'Đọc các từ ngữ sau – từ 7 đến 14', tenA: 'Từ ngữ', tenB: 'Hình',
          goiY: 'Em đọc to từng từ ngữ, rồi chạm vào từ và hình đúng để nối.',
          a: [{ c: 'nến' }, { c: 'Tết' }, { c: 'đèn pin' }, { c: 'con vịt' }, { c: 'cô tiên' }, { c: 'chim yến' }, { c: 'Việt Nam' }, { c: 'Nam Yết' }],
          b: [{ hinh: I + 'w-chim-yen.webp' }, { hinh: I + 'w-den-pin.webp' }, { hinh: I + 'w-nam-yet.webp' }, { hinh: I + 'w-nen.webp' }, { hinh: I + 'w-co-tien.webp' }, { hinh: I + 'w-tet.webp' }, { hinh: I + 'w-viet-nam.webp' }, { hinh: I + 'w-con-vit.webp' }],
          cap: [[0, 3], [1, 5], [2, 1], [3, 7], [4, 4], [5, 0], [6, 6], [7, 2]]
        },
        {
          id: 'ld3', so: 3, loai: 'doc-bai', lenh: 'Đọc bài sau',
          ten: 'Ở nhà Yến', hinh: I + 'bai-doc.webp', nguon: 'Theo sách Tiếng Việt 1 (NXB Đại học Sư phạm TP.HCM)',
          cau: [
            { c: 'Nhà Yến có bà và bố mẹ.' }, { c: 'À, có Yến và bé Lân nữa.' },
            { c: '6 giờ, Yến giúp mẹ sắp bát đũa.' }, { c: 'Bố cho gà vịt ăn.' }, { c: 'Bà rửa mặt cho bé Lân.' },
            { c: 'Tiếp đó, cả nhà ăn cơm.' }, { c: '7 giờ kém 5 phút, bố mẹ dắt xe đi làm.' }, { c: 'Yến đến lớp.' },
            { c: 'Bà đưa bé Lân đi nhà trẻ.' }
          ]
        },
        {
          id: 'ld3b', so: 3, loai: 'chon-cau', lenh: 'Mỗi người làm gì?',
          goiY: 'Đọc lại bài “Ở nhà Yến”, rồi chọn câu đúng cho mỗi ô có dấu hỏi.',
          cau: [
            { hinh: I + 'bang.webp', hoi: 'Lúc 6 giờ, Yến làm gì?', dung: 'Yến giúp mẹ sắp bát đũa.', sai: ['Yến đến lớp.', 'Yến cho gà vịt ăn.'] },
            { hinh: I + 'bang.webp', hoi: 'Lúc 6 giờ, bố làm gì?', dung: 'Bố cho gà vịt ăn.', sai: ['Bố dắt xe đi làm.', 'Bố rửa mặt cho bé Lân.'] },
            { hinh: I + 'bang.webp', hoi: 'Lúc 7 giờ kém 5 phút, mẹ làm gì?', dung: 'Mẹ dắt xe đi làm.', sai: ['Mẹ sắp bát đũa.', 'Mẹ đưa bé Lân đi nhà trẻ.'] },
            { hinh: I + 'bang.webp', hoi: 'Lúc 6 giờ, bà làm gì?', dung: 'Bà rửa mặt cho bé Lân.', sai: ['Bà đưa bé Lân đi nhà trẻ.', 'Bà cho gà vịt ăn.'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [72, 73],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'viet-o-li', lenh: 'Chép lại các từ ngữ sau',
          tu: [
            { c: 'nón lá', hinh: I + 'v-non-la.webp' }, { c: 'chim hót', hinh: I + 'v-chim-hot.webp' }, { c: 'nụ hôn', hinh: I + 'v-nu-hon.webp' },
            { c: 'cột nhà', hinh: I + 'v-cot-nha.webp' }, { c: 'con lợn', hinh: I + 'v-con-lon.webp' }, { c: 'quả ớt', hinh: I + 'v-qua-ot.webp' },
            { c: 'chuồn chuồn', hinh: I + 'v-chuon-chuon.webp' }, { c: 'con chuột', hinh: I + 'v-con-chuot.webp' }, { c: 'đun', hinh: I + 'v-dun.webp' },
            { c: 'bút (viết)', hinh: I + 'v-but.webp' }, { c: 'mứt', hinh: I + 'v-mut.webp' }, { c: 'nứt nẻ', hinh: I + 'v-nut-ne.webp' },
            { c: 'vườn mít', hinh: I + 'v-vuon-mit.webp' }, { c: 'vượt lên', hinh: I + 'v-vuot-len.webp' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Viết các từ sau',
          tu: [{ c: 'đàn' }, { c: 'vườn' }, { c: 'hát' }, { c: 'bút' }]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [73, 74],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'chon-cau', lenh: 'Trò chơi: Mấy giờ rồi?',
          goiY: 'Xoay kim đồng hồ, hỏi đáp với nhau về giờ. Trên máy: em nhìn đồng hồ và chọn câu trả lời đúng.',
          cau: [
            { hinh: I + 'tvv-dong-ho.webp', hoi: 'Mấy giờ rồi?', dung: 'Bây giờ là 5 giờ 30 phút.', sai: ['Bây giờ là 6 giờ 25 phút.', 'Bây giờ là 2 giờ 30 phút.'] },
            { hinh: I + 'dh-1.webp', hoi: 'Mấy giờ rồi?', dung: 'Bây giờ là 2 giờ.', sai: ['Bây giờ là 12 giờ 10 phút.', 'Bây giờ là 6 giờ.'] },
            { hinh: I + 'c-6h.webp', hoi: 'Mấy giờ rồi?', dung: 'Bây giờ là 6 giờ.', sai: ['Bây giờ là 12 giờ 30 phút.', 'Bây giờ là 6 giờ 30 phút.'] },
            { hinh: I + 'dh-3.webp', hoi: 'Mấy giờ rồi?', dung: 'Bây giờ là 7 giờ 15 phút.', sai: ['Bây giờ là 3 giờ 35 phút.', 'Bây giờ là 7 giờ 30 phút.'] },
            { hinh: I + 'c-1130.webp', hoi: 'Mấy giờ rồi?', dung: 'Bây giờ là 11 giờ 30 phút.', sai: ['Bây giờ là 6 giờ 55 phút.', 'Bây giờ là 11 giờ.'] },
            { hinh: I + 'dh-2.webp', hoi: 'Mấy giờ rồi?', dung: 'Bây giờ là 2 giờ 50 phút.', sai: ['Bây giờ là 10 giờ 15 phút.', 'Bây giờ là 3 giờ 10 phút.'] },
            { hinh: I + 'c-9h.webp', hoi: 'Mấy giờ rồi?', dung: 'Bây giờ là 9 giờ.', sai: ['Bây giờ là 12 giờ 45 phút.', 'Bây giờ là 3 giờ.'] },
            { hinh: I + 'dh-4.webp', hoi: 'Mấy giờ rồi?', dung: 'Bây giờ là 9 giờ rưỡi.', sai: ['Bây giờ là 6 giờ 45 phút.', 'Bây giờ là 12 giờ 30 phút.'] }
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'chon-cau', lenh: 'Trò chơi: Ai đúng? Ai nhanh?', tronCau: true,
          goiY: 'Chuẩn bị một số tranh ảnh thể hiện các hoạt động: dậy, đánh răng, rửa mặt, tập thể dục, ăn sáng, ăn trưa, ăn tối, đi ngủ. Từng cặp học sinh đố nhau. Trên máy: nhìn tranh, chọn thật nhanh hoạt động đúng.',
          cau: HD.map((d, i) => {
            const cap = s => s.charAt(0).toUpperCase() + s.slice(1) + '.';
            const khac = [HD[(i + 3) % 8], HD[(i + 5) % 8]];
            return { hinh: I + 'tc-' + d.k + '.webp', hoi: 'Bạn ấy đang làm gì?', dung: cap(d.tu), sai: khac.map(x => cap(x.tu)), amDung: A + 'tn2-' + d.k + '.mp3' };
          })
        },
        {
          id: 'tvv3', so: 3, loai: 'hoc-hat', lenh: 'Học hát: Dậy đi thôi! (Nghiêm Bá Hồng)',
          baiHat: 'Dậy đi thôi!', tacGia: 'Nghiêm Bá Hồng', youtube: 'qmJ1qxwFJUc'
        }
      ]
    }
  ]
};
