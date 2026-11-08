/* Quyển 2 – Bài 4: Con rửa rau giúp mẹ được không?  (sách trang 22–27)
   Toạ độ điểm chạm tính theo % của hình: [trái, trên, rộng, cao] */
const A = 'audio/';
// Từ ngữ 1 – tranh việc nhà; thứ tự theo file thu âm (tên người, rồi việc làm)
const VIEC = [
  { k: 'me', ai: 'Mẹ', viec: 'nấu cơm', nguoi: [0, 0, 29, 33.5] },
  { k: 'lien', ai: 'Liên', viec: 'rửa cốc chén', nguoi: [26, 19, 24, 32.5], z: 1 },
  { k: 'dung', ai: 'Dũng', viec: 'quét dọn', nguoi: [47, 1, 33, 32.5] },
  { k: 'thu', ai: 'Thu', viec: 'giặt quần áo', nguoi: [68, 19, 31, 32.5], z: 1 },
  { k: 'nam', ai: 'Nam', viec: 'tưới cây', nguoi: [4, 46.5, 35, 32.5] },
  { k: 'chi-ha', ai: 'Chị Hà', viec: 'rửa rau', nguoi: [24, 65, 28, 34.5], z: 1 },
  { k: 'tam', ai: 'Tâm', viec: 'cho mèo ăn', nguoi: [47, 47.5, 24, 32.5] },
  { k: 'bo', ai: 'Bố', viec: 'lau bát đĩa', nguoi: [68, 63, 31, 36], z: 1 }
];
const TRANH = { hinh: 'img/viec-nha.webp', co: [1100, 802], moTa: 'Mọi người làm việc nhà: nấu cơm, rửa cốc chén, quét dọn, giặt quần áo, tưới cây, rửa rau, cho mèo ăn, lau bát đĩa' };
const VIEC_NHA = Object.assign({}, TRANH, {
  diem: VIEC.map(v => ({ tu: v.viec, goi: v.ai.toLowerCase() + ' – ' + v.viec, cau: v.ai + ' – ' + v.viec, am: A + 'tn-' + v.k + '.mp3', nguoi: v.nguoi, z: v.z }))
});
// Từ ngữ 2 – hỏi đáp: "… đang làm gì?" → "Mẹ đang nấu cơm."
const DANG_LAM = Object.assign({}, TRANH, {
  diem: VIEC.map(v => ({ tu: v.ai + ' đang ' + v.viec, am: A + 'tn-' + v.k + '.mp3', nguoi: v.nguoi, z: v.z }))
});
const giup = (hinh, hoi, dung, sai) => ({ hinh: 'img/' + hinh + '.webp', hoi, dung, sai: [sai] });

const BAI_HOC = {
  quyen: 2, bai: 4, ten: 'Con rửa rau giúp mẹ được không?', chuDe: 'Gia đình', chu: 'm, n, ư, ưa', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [22],
      bt: [
        Object.assign({
          id: 'tn1', so: 1, loai: 'nghe-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh.mp3',
          caBai: VIEC_NHA.diem.map((d, i) => ({ am: d.am, c: d.cau, d: i }))
        }, VIEC_NHA),
        {
          id: 'tn2', so: 2, loai: 'hoi-dap', lenh: 'Nhìn hình ở bài tập 1, hỏi đáp theo mẫu',
          goiY: 'Bạn chỉ vào một người và hỏi “… đang làm gì?”. Em chọn câu trả lời đúng.',
          nguon: DANG_LAM, mauCau: '{tu}.',
          dap: { ten: 'người trả lời', av: 'img/ban-gai.webp' }, mauAv: ['img/ban-trai.webp', 'img/ban-gai.webp'],
          mau: [
            [{ c: 'Mẹ đang làm gì?', am: null }, { c: 'Mẹ đang nấu cơm.', am: null }],
            [{ c: 'Mẹ đang rửa rau, phải không?', am: null }, { c: 'Phải. Mẹ đang rửa rau. / Không phải. Mẹ đang nấu cơm.', am: null }]
          ],
          amCau: {}
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [23, 24],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – A', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-a.webp', moTa: 'Mẹ nấu cơm, Liên rửa rau, Nam đứng cạnh mẹ trong bếp',
          vai: { 'Mẹ': { av: 'img/av-me.webp' }, 'Nam': { av: 'img/av-nam.webp' }, 'Liên': { av: 'img/av-lien.webp' } },
          loi: [
            { ai: 'Mẹ', c: 'Nam ơi, con đang làm gì đó?', am: A + 'ht-a1.mp3' },
            { ai: 'Nam', c: 'Con đang chơi ạ.', am: A + 'ht-a2.mp3' },
            { ai: 'Mẹ', c: 'Con cho mèo ăn giúp mẹ được không?', am: A + 'ht-a3.mp3' },
            { ai: 'Nam', c: 'Dạ, con cho mèo ăn được ạ.', am: A + 'ht-a4.mp3' },
            { ai: 'Mẹ', c: 'Còn Liên, con rửa rau giúp mẹ được không?', am: A + 'ht-a5.mp3' },
            { ai: 'Liên', c: 'Vâng, con làm được ạ.', am: A + 'ht-a6.mp3' },
            { ai: 'Nam', c: 'Mẹ ơi, mẹ đang làm gì đó?', am: A + 'ht-a7.mp3' },
            { ai: 'Mẹ', c: 'Mẹ đang nấu cơm. Con thích ăn gì?', am: A + 'ht-a8.mp3' }
          ]
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – B', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-b.webp', moTa: 'Bố giặt quần áo, Liên quét dọn, Nam cho mèo ăn',
          vai: { 'Bố': { av: 'img/av-bo.webp' }, 'Nam': { av: 'img/av-nam.webp' }, 'Liên': { av: 'img/av-lien.webp' } },
          loi: [
            { ai: 'Bố', c: 'Nam ơi, con tưới cây giúp bố được không?', am: A + 'ht-b1.mp3' },
            { ai: 'Nam', c: 'Con không giúp bố được ạ. Con không biết tưới cây.', am: A + 'ht-b2.mp3' },
            { ai: 'Bố', c: 'Thế con cho mèo ăn giúp bố được không?', am: A + 'ht-b3.mp3' },
            { ai: 'Nam', c: 'Được ạ. Con thích cho mèo ăn lắm.', am: A + 'ht-b4.mp3' },
            { ai: 'Bố', c: 'Còn Liên, con quét dọn giúp bố được không?', am: A + 'ht-b5.mp3' },
            { ai: 'Liên', c: 'Vâng, con quét dọn được ạ!', am: A + 'ht-b6.mp3' },
            { ai: 'Bố', c: 'Vậy, bố sẽ giặt quần áo.', am: A + 'ht-b7.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'hoat-dong', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          hinh: ['img/ht-a.webp', 'img/ht-b.webp'],
          noiDung: [
            'Em và bạn (hoặc bố mẹ) đóng vai mẹ, Nam và Liên, nhắc lại đoạn hội thoại A.',
            'Đổi vai cho nhau, nói lại đoạn A.',
            'Đóng vai bố, Nam và Liên, nhắc lại đoạn hội thoại B.',
            'Đổi vai cho nhau, nói lại đoạn B.'
          ],
          ghiAm: 'Ghi âm em đóng vai'
        },
        {
          id: 'ht3', so: 3, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Hình 1 là mẫu. Bố hoặc mẹ hỏi, em nhìn hình và chọn câu trả lời đúng rồi nói to.',
          cau: [
            giup('m1', 'Con nấu cơm giúp bố được không?', 'Con không giúp bố được ạ. Con không biết nấu cơm.', 'Được ạ. Con nấu cơm được.'),
            giup('m1', 'Con giặt quần áo giúp bố được không?', 'Được ạ. Con giặt quần áo được.', 'Con không giúp bố được ạ. Con không biết giặt quần áo.'),
            giup('m2', 'Con nấu cơm giúp mẹ được không?', 'Con không giúp mẹ được ạ. Con không biết nấu cơm.', 'Được ạ. Con nấu cơm được.'),
            giup('m2', 'Con nhặt rau giúp mẹ được không?', 'Được ạ. Con nhặt rau được.', 'Con không giúp mẹ được ạ. Con không biết nhặt rau.'),
            giup('m3', 'Con lau bát đĩa giúp mẹ được không?', 'Được ạ. Con lau bát đĩa được.', 'Con không giúp mẹ được ạ. Con không biết lau bát đĩa.'),
            giup('m4', 'Con tưới cây giúp bố được không?', 'Con không giúp bố được ạ. Con không biết tưới cây.', 'Được ạ. Con tưới cây được.'),
            giup('m4', 'Con quét dọn giúp bố được không?', 'Được ạ. Con quét dọn được.', 'Con không giúp bố được ạ. Con không biết quét dọn.'),
            giup('m5', 'Con cho mèo ăn giúp mẹ được không?', 'Được ạ. Con cho mèo ăn được.', 'Con không giúp mẹ được ạ. Con không biết cho mèo ăn.')
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [25, 26],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'the-chu', lenh: 'Nghe và nhắc lại', amLenh: A + 'ld-lenh.mp3',
          chu: [
            { hoa: 'M', thuong: 'm', am: A + 'ld-m.mp3' },
            { hoa: 'N', thuong: 'n', am: A + 'ld-n.mp3' },
            { hoa: 'Ư', thuong: 'ư', am: A + 'ld-uw.mp3' },
            { hoa: 'Ưa', thuong: 'ưa', am: A + 'ld-uwa.mp3' }
          ]
        },
        {
          id: 'ld2', so: 2, loai: 'danh-van', lenh: 'Đánh vần',
          tu: [
            { hinh: 'img/nua.webp', tieng: 'nứa', phan: ['n', 'ưa'], thanh: 'sắc', doc: 'nờ – ưa – nưa – sắc – nứa' },
            { hinh: 'img/mua.webp', tieng: 'mưa', phan: ['m', 'ưa'], thanh: null, doc: 'mờ – ưa – mưa' }
          ]
        },
        {
          id: 'ld3', so: 3, loai: 'chon-cau', lenh: 'Đọc các từ ngữ sau',
          goiY: 'Em đọc to từ ngữ, rồi chạm vào hình đúng.',
          cau: [
            { hoi: 'mưa', dung: { hinh: 'img/mua2.webp' }, sai: [{ hinh: 'img/dua-xanh.webp' }, { hinh: 'img/no-do.webp' }] },
            { hoi: 'dừa', dung: { hinh: 'img/dua-xanh.webp' }, sai: [{ hinh: 'img/dua.webp' }, { hinh: 'img/no-dua.webp' }] },
            { hoi: 'dứa', dung: { hinh: 'img/dua.webp' }, sai: [{ hinh: 'img/dua-xanh.webp' }, { hinh: 'img/mua2.webp' }] },
            { hoi: 'nô đùa', dung: { hinh: 'img/no-dua.webp' }, sai: [{ hinh: 'img/no-do.webp' }, { hinh: 'img/dua.webp' }] },
            { hoi: 'nơ đỏ', dung: { hinh: 'img/no-do.webp' }, sai: [{ hinh: 'img/no-dua.webp' }, { hinh: 'img/mua2.webp' }] }
          ]
        },
        {
          id: 'ld4', so: 4, loai: 'doc-bai', lenh: 'Đọc các câu sau',
          cau: [{ c: 'Đi mưa, cô Mơ đã có dù.' }, { c: 'Cô mua cả mũ.' }, { c: 'Mũ có nơ.' }]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [26],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'dien-chu', lenh: 'Viết tiếng còn thiếu', them: 'o',
          tu: [
            { hinh: 'img/no-dua.webp', mau: '… đùa', dap: 'nô đùa' },
            { hinh: 'img/mu-do.webp', mau: '… đỏ', dap: 'mũ đỏ' },
            { hinh: 'img/no-do.webp', mau: '… đỏ', dap: 'nơ đỏ' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Chép lại các từ ngữ sau',
          tu: [{ c: 'mía', hinh: 'img/mia.webp' }, { c: 'nứa', hinh: 'img/nua2.webp' }, { c: 'dưa đỏ', hinh: 'img/dua-do.webp' }]
        },
        {
          id: 'lv3', so: 3, loai: 'viet-o-li', lenh: 'Viết các từ em mới học',
          tu: [{ c: 'mưa', hinh: 'img/mua3.webp' }, { c: 'dừa', hinh: 'img/dua-xanh.webp' }, { c: 'nô đùa', hinh: 'img/no-dua.webp' }]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [27],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'hoat-dong', lenh: 'Trò chơi: Làm việc nhà',
          goiY: 'Ở nhà: bố mẹ hỏi “Ai giúp mẹ nhặt rau được không?”, em trả lời “Con giúp mẹ nhặt rau được ạ.” và làm động tác việc đó.',
          hinh: 'img/tvv-viec-nha.webp',
          noiDung: [
            'Chia lớp thành 2 nhóm gia đình, mỗi nhóm gồm 3 học sinh (1 bố / mẹ, 2 con).',
            'Mỗi nhóm nhận một bộ thẻ việc nhà, phát ngẫu nhiên cho 2 bạn đóng vai con, mỗi bạn 4 thẻ.',
            'Một bạn đóng vai mẹ hoặc bố, nhận “việc nhà” từ giáo viên và hỏi (Ví dụ: “Ai giúp mẹ nhặt rau được không?”). Hai con sẽ xem thẻ việc nhà của mình và trả lời: “Con giúp mẹ nhặt rau được ạ.” (hoặc “Con không giúp được ạ.”) và thực hiện động tác mô phỏng việc làm.'
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'doc-tho', lenh: 'Học thơ: Giúp cha mẹ (Nguyễn Thu Phương)', amLenh: A + 'tvv-lenh.mp3',
          ten: 'Giúp cha mẹ', nguon: 'Nguyễn Thu Phương', hinh: 'img/tho-a.webp',
          cau: [
            { c: 'Hôm nay Chủ nhật', am: A + 'tvv-t1.mp3' },
            { c: 'Được nghỉ ở nhà', am: A + 'tvv-t2.mp3' },
            { c: 'Em giúp mẹ cha', am: A + 'tvv-t3.mp3' },
            { c: 'Nhặt rau, quét dọn.', am: A + 'tvv-t4.mp3' },
            { c: 'Áo quần xếp gọn', am: A + 'tvv-t5.mp3', kho: true },
            { c: 'Dỗ bé cùng chơi', am: A + 'tvv-t6.mp3' },
            { c: 'Cha mẹ vui cười', am: A + 'tvv-t7.mp3' },
            { c: 'Khen con ngoan quá.', am: A + 'tvv-t8.mp3' }
          ]
        }
      ]
    }
  ]
};
