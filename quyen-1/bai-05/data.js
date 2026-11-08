/* Quyển 1 – Bài 5: Ôn tập  (sách trang 22–24)
   Toạ độ điểm chạm tính theo % của hình: [trái, trên, rộng, cao].
   Tiếng: bản thu on-tap.mp3 của bài này; chữ cái và từ ở bài tập 4, 5 cắt từ bản thu gốc Bài 1–4. */
const A = 'audio/', H = 'img/';
// Cây gia đình – thứ tự theo bản thu: hàng bố (trái → phải), hàng trên, hàng mẹ, hàng dưới
const NGUOI = [
  { tu: 'bác', am: A + 'cay-bac-1.mp3', nhan: [0.5, 35, 18, 4], nguoi: [0.5, 20.5, 17.5, 14.5] },
  { tu: 'bác', am: A + 'cay-bac-2.mp3', nhan: [20, 35, 17, 4], nguoi: [20, 20.5, 17, 14.5] },
  { tu: 'bố', am: A + 'cay-bo.mp3', nhan: [39, 34.2, 21.5, 4.8], nguoi: [39.5, 16.5, 21, 17.5] },
  { tu: 'chú', am: A + 'cay-chu.mp3', nhan: [63, 35, 17, 4], nguoi: [63, 20.5, 17, 14.5] },
  { tu: 'cô', am: A + 'cay-co.mp3', nhan: [82, 35, 17, 4], nguoi: [82, 20.5, 17, 14.5] },
  { tu: 'anh', am: A + 'cay-anh-1.mp3', nhan: [5.5, 12, 9, 4.2], nguoi: [3.5, 1, 12.5, 10.5] },
  { tu: 'chị', am: A + 'cay-chi-1.mp3', nhan: [24, 12, 9, 4.2], nguoi: [22, 1, 13, 10.5] },
  { tu: 'em', am: A + 'cay-em-1.mp3', nhan: [67, 12, 9.5, 4.2], nguoi: [65.5, 1, 12.5, 10.5] },
  { tu: 'em', am: A + 'cay-em-2.mp3', nhan: [86, 12, 9.5, 4.2], nguoi: [84, 1, 13, 10.5] },
  { tu: 'bác', am: A + 'cay-bac-3.mp3', nhan: [0.5, 75, 17, 4.5], nguoi: [0.5, 61, 17, 14] },
  { tu: 'bác', am: A + 'cay-bac-4.mp3', nhan: [20, 75, 17, 4.5], nguoi: [20, 61, 17, 14] },
  { tu: 'mẹ', am: A + 'cay-me.mp3', nhan: [39, 74.6, 21.5, 4.9], nguoi: [39.5, 57.5, 21, 17] },
  { tu: 'cậu', am: A + 'cay-cau.mp3', nhan: [63, 75, 17, 4.5], nguoi: [63, 61, 17, 14] },
  { tu: 'dì', am: A + 'cay-di.mp3', nhan: [82, 75, 17, 4.5], nguoi: [82, 61, 17, 14] },
  { tu: 'anh', am: A + 'cay-anh-2.mp3', nhan: [5, 95.5, 9, 4], nguoi: [3, 84.5, 13, 10.5] },
  { tu: 'chị', am: A + 'cay-chi-2.mp3', nhan: [24, 95.5, 9, 4], nguoi: [22, 84.5, 13, 10.5] },
  { tu: 'em', am: A + 'cay-em-3.mp3', nhan: [67, 95.5, 9, 4], nguoi: [65, 84.5, 13, 10.5] },
  { tu: 'em', am: A + 'cay-em-4.mp3', nhan: [86, 95.5, 9.5, 4], nguoi: [84, 84.5, 13, 10.5] }
];
const CAY = { hinh: H + 'cay-gia-dinh.webp', co: [1100, 1299], moTa: 'Cây gia đình: họ nội, họ ngoại và bạn nhỏ ở giữa', diem: NGUOI };
// Bài tập 2: thêm bạn nhỏ ở giữa ("Đây là tôi.")
const CAY_TOI = Object.assign({}, CAY, { diem: NGUOI.concat([{ tu: 'tôi', toi: true, nguoi: [41, 42, 16, 13.5] }]) });
const chu = (c, f) => ({ c, am: A + 'chu-' + f + '.mp3' });

const BAI_HOC = {
  quyen: 1, bai: 5, ten: 'Ôn tập', chuDe: 'Gia đình', chu: '', amTen: A + 'ot-ten.mp3',
  phan: [
    {
      id: 'on-tap', ten: 'Ôn tập', mau: 'hc', trang: [22, 23, 24],
      bt: [
        Object.assign({
          id: 'ot1', so: 1, loai: 'nghe-chi', lenh: 'Nghe, chỉ vào hình phù hợp', amLenh: A + 'ot-lenh.mp3',
          caBai: NGUOI.map((d, i) => ({ am: d.am, c: d.tu, d: i }))
        }, CAY),
        {
          id: 'ot2', so: 2, loai: 'gioi-thieu', lenh: 'Giới thiệu từng người trong gia đình em với bạn cùng nhóm',
          goiY: 'Em là bạn nhỏ ở giữa. Chạm vào từng người và giới thiệu: “Đây là … tôi.” Nói thêm người đó thế nào, ví dụ: “Bố tôi rất khoẻ.” Sau đó, em giới thiệu gia đình em với các bạn.',
          nguon: CAY_TOI, goiYTu: true,
          mau: { nv: H + 'mai-gioi-thieu.webp', nvTen: 'bạn nhỏ', cau: [
            { c: 'Đây là bố tôi.', am: null }, { c: 'Bố tôi rất khoẻ.', am: null },
            { c: 'Đây là chú tôi.', am: null }, { c: 'Chú tôi trẻ lắm.', am: null }
          ] },
          xong: 'Giỏi lắm! Em đã giới thiệu cả nhà.', ghiAm: 'Ghi âm em giới thiệu gia đình em'
        },
        {
          id: 'ot3', so: 3, loai: 've-tren-hinh', lenh: 'Nói lời chào mọi người trên đường đi học',
          hinh: H + 'me-cung.webp', moTa: 'Mê cung: đường từ nhà đến trường, gặp chú thợ, cô lao công, thầy cô giáo',
          goiY: 'Vẽ đường từ nhà đến trường. Gặp ai trên đường, em nói lời chào nhé (ví dụ: “Cháu chào chú ạ.”).',
          dich: [62, 76, 24, 22], xong: 'Em đã tới trường! Giỏi quá!'
        },
        {
          id: 'ot4', so: 4, loai: 'vong-quay', lenh: 'Đố vui: Đặt một câu với từ bạn đưa ra', can: 3,
          goiY: 'Mẫu: – Khoẻ. – Chị tôi khoẻ lắm. Bấm “Quay”: vòng quay đưa ra một từ, em đặt một câu với từ đó và nói to.',
          muc: [
            { c: 'khoẻ', am: A + 'tu-khoe.mp3' }, { c: 'yếu', am: A + 'tu-yeu.mp3' },
            { c: 'già', am: A + 'tu-gia.mp3' }, { c: 'trẻ', am: A + 'tu-tre.mp3' },
            { c: 'vui', am: A + 'tu-vui.mp3' }, { c: 'buồn', am: A + 'tu-buon.mp3' },
            { c: 'chơi', am: A + 'tu-choi.mp3' }, { c: 'hát', am: A + 'tu-hat.mp3' },
            { c: 'ăn cơm', am: A + 'tu-an-com.mp3' }, { c: 'đi học', am: A + 'tu-di-hoc.mp3' }
          ]
        },
        {
          id: 'ot5', so: 5, loai: 'vong-quay', lenh: 'Tự xoay vòng quay, đọc những chữ em đã biết', can: 5,
          // các ô theo thứ tự trên vòng quay trong sách (chiều kim đồng hồ, từ trên xuống)
          muc: [
            chu('E', 'e'), chu('B', 'b'), chu('ê', 'ee'), chu('Đ', 'dd'), chu('Ch', 'ch'), chu('Ă', 'aw'), chu('A', 'a'),
            chu('c', 'c'), chu('d', 'd'), chu('Ê', 'ee'), chu('a', 'a'), chu('e', 'e'), chu('b', 'b'), chu('Â', 'aa'),
            chu('ch', 'ch'), chu('đ', 'dd'), chu('ă', 'aw'), chu('D', 'd'), chu('C', 'c'), chu('â', 'aa')
          ]
        },
        {
          id: 'ot6', so: 6, loai: 'hoat-dong', lenh: 'Hát một bài hát đã được học',
          hinh: H + 'hat.webp',
          noiDung: 'Em chọn một bài hát đã học và hát cho bố mẹ, bạn bè nghe: Cả nhà thương nhau, Cháu yêu bà, Lời chào buổi sáng, Xỉa cá mè.',
          nut: 'Em đã hát xong'
        }
      ]
    }
  ]
};
