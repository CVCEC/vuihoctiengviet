/* Quyển 1 – Bài 10: Ôn tập  (sách trang 40–43)
   Bài ôn tập không có file thu âm riêng: các câu / từ / tên chữ dưới đây được cắt từ bản thu của Bài 6–9.
   Câu nào sách không có bản thu thì để chữ, không có tiếng.
   Toạ độ điểm chạm tính theo % của hình: [trái, trên, rộng, cao] */
const A = 'audio/';
const RUNG = {
  hinh: 'img/rung.webp', co: [1100, 641], moTa: 'Khu rừng có nhiều cây và con vật: khế, khỉ, táo, voi, mít, sói, hổ, cam, ngựa, bò, mèo, na, chó, trâu, gà, vịt, dừa',
  diem: [
    { tu: 'khế', goi: 'cây khế', am: A + 'w-khe.mp3', nguoi: [0, 0, 18, 26] },
    { tu: 'khỉ', goi: 'con khỉ', am: A + 'w-khi.mp3', nguoi: [6, 25, 9, 13], z: 2 },
    { tu: 'táo', goi: 'cây táo', am: A + 'w-tao.mp3', nguoi: [0, 42, 15, 36], z: 1 },
    { tu: 'voi', goi: 'con voi', am: A + 'w-voi.mp3', nguoi: [9, 33, 27, 36] },
    { tu: 'mít', goi: 'cây mít', am: A + 'w-mit.mp3', nguoi: [36, 5, 14, 58] },
    { tu: 'sói', goi: 'con sói', am: A + 'w-soi.mp3', nguoi: [3, 72, 23, 26] },
    { tu: 'hổ', goi: 'con hổ', am: A + 'w-ho.mp3', nguoi: [35, 63, 15, 28] },
    { tu: 'cam', goi: 'cây cam', am: A + 'w-cam.mp3', nguoi: [56, 1, 23, 24] },
    { tu: 'ngựa', goi: 'con ngựa', am: A + 'w-ngua.mp3', nguoi: [51, 25, 14, 23] },
    { tu: 'bò', goi: 'con bò', am: A + 'w-bo.mp3', nguoi: [70, 31, 12, 26] },
    { tu: 'mèo', goi: 'con mèo', am: A + 'w-meo.mp3', nguoi: [66, 48, 8, 16], z: 2 },
    { tu: 'na', goi: 'cây na', am: A + 'w-na.mp3', nguoi: [51, 49, 13, 28] },
    { tu: 'chó', goi: 'con chó', am: A + 'w-cho.mp3', nguoi: [71, 64, 9, 19] },
    { tu: 'trâu', goi: 'con trâu', am: A + 'w-trau.mp3', nguoi: [81, 54, 17, 23] },
    { tu: 'gà', goi: 'con gà', am: A + 'w-ga.mp3', nguoi: [60, 78, 10, 19] },
    { tu: 'vịt', goi: 'con vịt', am: A + 'w-vit.mp3', nguoi: [81, 79, 9, 18] },
    { tu: 'dừa', goi: 'cây dừa', am: A + 'w-dua.mp3', nguoi: [84, 3, 16, 46] }
  ]
};
const KIA = { c: 'Kia là con gì?', am: A + 'hoi-kia-con-gi.mp3' };

const BAI_HOC = {
  quyen: 1, bai: 10, ten: 'Ôn tập', chuDe: 'Thiên nhiên', chu: '',
  phan: [
    {
      id: 'on-tap', ten: 'Ôn tập', mau: 'hc', trang: [40, 41, 42, 43],
      bt: [
        {
          id: 'ot1', so: 1, loai: 'hoi-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Nhìn từng hình. Bạn hỏi, em chọn câu trả lời đúng rồi nói to.',
          mau: { nv: 'img/mau-ban.webp', nvTen: 'Hai bạn', cau: [
            { c: 'Đây (Kia) là con gì?', am: null },
            { c: 'Đây (Kia) là con mèo.', am: null },
            { c: 'Con mèo đang làm gì?', am: A + 'meo-lam-gi.mp3' },
            { c: 'Con mèo đang ngủ.', am: null }
          ] },
          cau: [
            { hinh: 'img/c1-meo.webp', hoi: KIA, dung: 'Kia là con mèo.', sai: ['Kia là con chó.', 'Kia là con thỏ.'] },
            { hinh: 'img/c1-meo.webp', hoi: { c: 'Con mèo đang làm gì?', am: A + 'meo-lam-gi.mp3' }, dung: 'Con mèo đang ngủ.', sai: ['Con mèo đang ăn.', 'Con mèo đang chạy.'] },
            { hinh: 'img/c1-vit.webp', hoi: { c: 'Đây là con gì?', am: A + 'hoi-day-con-gi.mp3' }, dung: 'Đây là con vịt.', sai: ['Đây là con gà.', 'Đây là con mèo.'] },
            { hinh: 'img/c1-vit.webp', hoi: 'Con vịt đang làm gì?', dung: 'Con vịt đang đi.', sai: ['Con vịt đang ngủ.', 'Con vịt đang nằm.'] },
            { hinh: 'img/c1-khi.webp', hoi: KIA, dung: 'Kia là con khỉ.', sai: ['Kia là con sóc.', 'Kia là con hổ.'] },
            { hinh: 'img/c1-khi.webp', hoi: 'Con khỉ đang làm gì?', dung: 'Con khỉ đang chơi.', sai: ['Con khỉ đang ngủ.', 'Con khỉ đang nằm.'] },
            { hinh: 'img/c1-voi.webp', hoi: KIA, dung: 'Kia là con voi.', sai: ['Kia là con trâu.', 'Kia là con ngựa.'], amDung: A + 'kia-con-voi.mp3' },
            { hinh: 'img/c1-voi.webp', hoi: { c: 'Con voi đang làm gì?', am: A + 'voi-lam-gi.mp3' }, dung: 'Con voi đang ăn.', sai: ['Con voi đang ngủ.', 'Con voi đang chạy.'], amDung: A + 'voi-an.mp3' },
            { hinh: 'img/c1-ga.webp', hoi: KIA, dung: 'Kia là con gà.', sai: ['Kia là con vịt.', 'Kia là con chó.'] },
            { hinh: 'img/c1-ga.webp', hoi: 'Con gà đang làm gì?', dung: 'Con gà đang chạy.', sai: ['Con gà đang ngủ.', 'Con gà đang nằm.'] },
            { hinh: 'img/c1-ngua.webp', hoi: KIA, dung: 'Kia là con ngựa.', sai: ['Kia là con bò.', 'Kia là con voi.'] },
            { hinh: 'img/c1-ngua.webp', hoi: { c: 'Con ngựa đang làm gì?', am: A + 'ngua-lam-gi.mp3' }, dung: 'Con ngựa đang đi.', sai: ['Con ngựa đang ngủ.', 'Con ngựa đang nằm.'] }
          ]
        },
        {
          id: 'ot2', so: 2, loai: 'hoi-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Bạn hỏi “… phải không?”. Em nhìn quả trong hình, chọn câu trả lời đúng.',
          mau: { nv: 'img/mau-qua.webp', nvTen: 'quả táo, quả cam', cau: [
            { c: 'Đây là quả táo, phải không?', am: null },
            { c: 'Phải (Không phải). Đây là quả táo (cam).', am: null }
          ] },
          cau: [
            { hinh: 'img/q-dua.webp', hoi: 'Đây là quả dứa, phải không?', dung: 'Phải. Đây là quả dứa.', sai: ['Không phải. Đây là quả dứa.', 'Phải. Đây là quả khế.'] },
            { hinh: 'img/q-khe.webp', hoi: 'Đây là quả dứa, phải không?', dung: 'Không phải. Đây là quả khế.', sai: ['Phải. Đây là quả dứa.', 'Không phải. Đây là quả dứa.'] },
            { hinh: 'img/q-mit.webp', hoi: 'Đây là quả cam, phải không?', dung: 'Không phải. Đây là quả mít.', sai: ['Phải. Đây là quả cam.', 'Không phải. Đây là quả cam.'] },
            { hinh: 'img/q-cam.webp', hoi: 'Đây là quả cam, phải không?', dung: 'Phải. Đây là quả cam.', sai: ['Không phải. Đây là quả cam.', 'Phải. Đây là quả mít.'] },
            { hinh: 'img/q-chuoi.webp', hoi: 'Đây là quả chuối, phải không?', dung: 'Phải. Đây là quả chuối.', sai: ['Không phải. Đây là quả chuối.', 'Phải. Đây là quả dừa.'] },
            { hinh: 'img/q-dua-xiem.webp', hoi: 'Đây là quả chuối, phải không?', dung: 'Không phải. Đây là quả dừa.', sai: ['Phải. Đây là quả chuối.', 'Không phải. Đây là quả chuối.'] },
            { hinh: 'img/q-tao.webp', hoi: 'Đây là quả bưởi, phải không?', dung: 'Không phải. Đây là quả táo.', sai: ['Phải. Đây là quả bưởi.', 'Không phải. Đây là quả bưởi.'] },
            { hinh: 'img/q-buoi.webp', hoi: 'Đây là quả bưởi, phải không?', dung: 'Phải. Đây là quả bưởi.', sai: ['Không phải. Đây là quả bưởi.', 'Phải. Đây là quả táo.'] }
          ]
        },
        {
          id: 'ot3', so: 3, loai: 'hoi-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Em đếm trong hình rồi chọn câu trả lời đúng.',
          mau: { nv: 'img/mau-ban2.webp', nvTen: 'Hai bạn', cau: [
            { c: 'Cây cam có mấy quả?', am: A + 'cam-may-qua.mp3' },
            { c: 'Cây cam có 8 quả.', am: null },
            { c: 'Cây cam có 8 quả, phải không?', am: null },
            { c: 'Phải (Không phải). Cây cam có 8 (10) quả.', am: null }
          ] },
          cau: [
            { hinh: 'img/d1-cam.webp', hoi: { c: 'Cây cam có mấy quả?', am: A + 'cam-may-qua.mp3' }, dung: 'Cây cam có 8 quả.', sai: ['Cây cam có 10 quả.', 'Cây cam có 6 quả.'] },
            { hinh: 'img/d2-ga.webp', hoi: 'Con gà có 2 chân, phải không?', dung: 'Phải. Con gà có 2 chân.', sai: ['Không phải. Con gà có 4 chân.', 'Phải. Con gà có 4 chân.'] },
            { hinh: 'img/d3-na.webp', hoi: 'Cây na có mấy quả?', dung: 'Cây na có 7 quả.', sai: ['Cây na có 5 quả.', 'Cây na có 9 quả.'] },
            { hinh: 'img/d4-ho.webp', hoi: 'Con hổ có 2 chân, phải không?', dung: 'Không phải. Con hổ có 4 chân.', sai: ['Phải. Con hổ có 2 chân.', 'Không phải. Con hổ có 6 chân.'] },
            { hinh: 'img/d5-mit.webp', hoi: 'Cây mít có mấy quả?', dung: 'Cây mít có 3 quả.', sai: ['Cây mít có 2 quả.', 'Cây mít có 5 quả.'] },
            { hinh: 'img/d6-tho.webp', hoi: 'Con thỏ có 2 tai, phải không?', dung: 'Phải. Con thỏ có 2 tai.', sai: ['Không phải. Con thỏ có 4 tai.', 'Phải. Con thỏ có 4 tai.'] },
            { hinh: 'img/d7-dua.webp', hoi: 'Cây dừa có mấy quả?', dung: 'Cây dừa có 6 quả.', sai: ['Cây dừa có 4 quả.', 'Cây dừa có 8 quả.'] },
            { hinh: 'img/d8-khi.webp', hoi: 'Con khỉ có 4 tai, phải không?', dung: 'Không phải. Con khỉ có 2 tai.', sai: ['Phải. Con khỉ có 4 tai.', 'Không phải. Con khỉ có 3 tai.'] }
          ]
        },
        Object.assign({
          id: 'ot4', so: 4, loai: 'nghe-hinh', lenh: 'Nhìn hình, hỏi đáp theo các mẫu câu đã học',
          mau: { cau: [
            { c: 'Kia là con gì?', am: A + 'hoi-kia-con-gi.mp3' },
            { c: 'Kia là con voi.', am: A + 'kia-con-voi.mp3' },
            { c: 'Con voi đang làm gì?', am: A + 'voi-lam-gi.mp3' },
            { c: 'Con voi đang ăn.', am: A + 'voi-an.mp3' },
            { c: 'Kia là cây cam, phải không?', am: A + 'kia-cay-cam-pk.mp3' },
            { c: 'Cây cam có mấy quả?', am: A + 'cam-may-qua.mp3' }
          ] }
        }, RUNG),
        {
          id: 'ot5', so: 5, loai: 'vong-quay', lenh: 'Tự xoay vòng quay, đọc những chữ em đã biết', can: 5,
          muc: [
            { c: 'M', am: A + 'l-m.mp3' }, { c: 'gh', am: A + 'l-gh.mp3' }, { c: 'l', am: A + 'l-l.mp3' },
            { c: 'y', am: A + 'l-y.mp3' }, { c: 'Gi', am: A + 'l-gi.mp3' }, { c: 'kh', am: A + 'l-kh.mp3' },
            { c: 'I', am: A + 'l-i.mp3' }, { c: 'G', am: A + 'l-g.mp3' }, { c: 'k', am: A + 'l-k.mp3' },
            { c: 'm', am: A + 'l-m.mp3' }, { c: 'Gh', am: A + 'l-gh.mp3' }, { c: 'L', am: A + 'l-l.mp3' },
            { c: 'gi', am: A + 'l-gi.mp3' }, { c: 'Y', am: A + 'l-y.mp3' }, { c: 'Kh', am: A + 'l-kh.mp3' },
            { c: 'g', am: A + 'l-g.mp3' }, { c: 'i', am: A + 'l-i.mp3' }, { c: 'K', am: A + 'l-k.mp3' }
          ]
        },
        {
          id: 'ot6', so: 6, loai: 'hat-lai', lenh: 'Hát một bài hát đã được học',
          baiHat: [
            { baiHat: 'Một con vịt', tacGia: 'Kim Duyên', youtube: 'X4RcUejsAHE', bai: 6 },
            { baiHat: 'Quả', tacGia: 'Xanh Xanh', youtube: 'g1QXSvOqcTM', bai: 7 },
            { baiHat: 'Con vỏi con voi', tacGia: 'Nguyễn Xuân Khoát', youtube: 'TDlfGintHmk', bai: 9 }
          ]
        }
      ]
    }
  ]
};
