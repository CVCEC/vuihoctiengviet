/* Quyển 2 – Bài 5: Ôn tập và học chữ  (sách trang 28–32)
   Phần Ôn tập không có file thu âm riêng: tiếng gợi ý tên người thân cắt từ bản thu âm của NXB
   (Quyển 2 Bài 1 – Từ ngữ; "cô", "cậu" từ Quyển 1 Bài 2 – Từ ngữ).
   Toạ độ điểm chạm tính theo % của hình: [trái, trên, rộng, cao] */
const A = 'audio/';
const CAY = {
  hinh: 'img/ho-hang.webp', co: [1100, 770], moTa: 'Cây gia đình: ông, bà, dượng, cô, bố, mẹ, dì, cậu, em và em họ',
  diem: [
    { tu: 'ông nội', am: A + 'ot-ong-noi.mp3', nguoi: [35, 0, 15, 24.5] },
    { tu: 'bà nội', am: A + 'ot-ba-noi.mp3', nguoi: [51, 0, 15, 24.5] },
    { tu: 'dượng', am: A + 'ot-duong.mp3', nguoi: [1, 30, 15, 25.5] },
    { tu: 'cô', am: A + 'ot-co.mp3', nguoi: [18, 30, 15, 25.5] },
    { tu: 'bố', am: A + 'ot-bo.mp3', nguoi: [35, 30, 15, 25.5] },
    { tu: 'mẹ', am: A + 'ot-me.mp3', nguoi: [52, 30, 15, 25.5] },
    { tu: 'dì', am: A + 'ot-di.mp3', nguoi: [69, 30, 15, 25.5] },
    { tu: 'cậu', am: A + 'ot-cau.mp3', nguoi: [85, 30, 15, 25.5] },
    { tu: 'em', nguoi: [33, 59, 15, 27], toi: true },
    { tu: 'em họ', am: A + 'ot-em-ho.mp3', nguoi: [53, 59, 16, 27] }
  ]
};
const cau = (hinh, hoi, dung, sai) => ({ hinh: 'img/' + hinh + '.webp', hoi, dung, sai });
const hinh = k => ({ hinh: 'img/' + k + '.webp' });

const BAI_HOC = {
  quyen: 2, bai: 5, ten: 'Ôn tập và học chữ', chuDe: 'Gia đình', chu: 'e, ê, l, y, b', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'on-tap', ten: 'Ôn tập', mau: 'ht', trang: [28, 29, 30],
      bt: [
        {
          id: 'ot1', so: 1, loai: 'hoi-dap', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Bạn chỉ vào một người và hỏi “Đây là ai?”. Em chọn câu trả lời đúng.',
          nguon: CAY, mauCau: 'Đây là {tu} của em.', mauToi: 'Đây là em.', goiYTu: true,
          hoi: { c: 'Đây là ai?', am: null, av: 'img/ban-gai.webp' },
          dap: { ten: 'người trả lời', av: 'img/ban-trai.webp' },
          mau: [[{ c: 'Đây là ai?', am: null }, { c: 'Đây là ông nội của em.', am: null }]],
          amCau: {}
        },
        {
          id: 'ot2', so: 2, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Hình 1 là mẫu. Bạn hỏi, em chọn câu trả lời đúng rồi nói to.',
          cau: [
            cau('a1', 'Bạn Hùng thế nào?', 'Bạn Hùng khá thân thiện.', ['Bạn Hùng rất hiền.', 'Bạn Tú vui vẻ nhất.']),
            cau('a1', 'Còn bạn Tâm?', 'Bạn Tâm rất hiền.', ['Bạn Tâm khá thân thiện.', 'Bạn Tú vui vẻ nhất.']),
            cau('a1', 'Ai vui vẻ nhất?', 'Bạn Tú vui vẻ nhất.', ['Bạn Hùng vui vẻ nhất.', 'Bạn Tâm vui vẻ nhất.']),
            cau('a2', 'Bố bạn thế nào?', 'Bố tớ rất nghiêm.', ['Bố tớ rất dễ thương.', 'Bố tớ rất hiền.']),
            cau('a2', 'Còn mẹ bạn?', 'Mẹ tớ rất hiền.', ['Mẹ tớ rất nghiêm.', 'Mẹ tớ rất thân thiện.']),
            cau('a2', 'Anh trai bạn thế nào?', 'Anh trai tớ rất thân thiện.', ['Anh trai tớ rất nghiêm.', 'Anh trai tớ rất dễ thương.']),
            cau('a2', 'Còn em gái bạn?', 'Em gái tớ rất dễ thương.', ['Em gái tớ rất nghiêm.', 'Em gái tớ rất thân thiện.']),
            cau('a3', 'Bạn Hà thế nào?', 'Bạn Hà rất xinh đẹp.', ['Bạn Hà rất hiền.', 'Bạn Hoa rất xinh đẹp.']),
            cau('a3', 'Còn bạn Hoa?', 'Bạn Hoa rất dễ thương.', ['Bạn Hoa rất hiền.', 'Bạn Hoa rất xinh đẹp.']),
            cau('a3', 'Ai hiền nhất?', 'Bạn Hồng hiền nhất.', ['Bạn Hà hiền nhất.', 'Bạn Hoa hiền nhất.'])
          ]
        },
        {
          id: 'ot3', so: 3, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Hình 1 là mẫu. Mũi tên chỉ vào phòng nào? Bạn hỏi, em chọn câu trả lời đúng rồi nói to.',
          cau: [
            cau('b1', 'Nhà cậu có mấy phòng?', 'Nhà tớ có 6 phòng: phòng khách, phòng bếp, 2 phòng ngủ và 2 phòng tắm.', ['Phòng khách ở tầng 1.']),
            cau('b1', 'Phòng khách ở đâu?', 'Phòng khách ở tầng 1.', ['Phòng khách ở tầng 2.']),
            cau('b1', 'Trong phòng khách có gì?', 'Trong phòng khách có một bộ sô pha, một cái ti vi và một bức tranh.', ['Trong phòng khách có một cái bếp, một cái tủ bếp và một cái tủ lạnh.']),
            cau('b2', 'Phòng ngủ ở đâu?', 'Phòng ngủ ở tầng 2.', ['Phòng ngủ ở tầng 1.']),
            cau('b2', 'Trong phòng ngủ có gì?', 'Trong phòng ngủ có một cái giường, một cái ghế và một cái tủ quần áo.', ['Trong phòng ngủ có một bộ sô pha, một cái ti vi và một bức tranh.']),
            cau('b3', 'Phòng bếp ở đâu?', 'Phòng bếp ở tầng 1.', ['Phòng bếp ở tầng 2.']),
            cau('b3', 'Trong phòng bếp có gì?', 'Trong phòng bếp có một cái bếp, một cái tủ bếp và một cái tủ lạnh.', ['Trong phòng bếp có một cái giường, một cái ghế và một cái tủ quần áo.'])
          ]
        },
        {
          id: 'ot4', so: 4, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Hình 1 là mẫu. Đọc câu dưới mỗi hình, rồi chọn lời nhờ giúp đúng.',
          cau: [
            cau('c1', 'Bố nói thế nào?', 'Bố đi giặt quần áo. Con và em quét dọn giúp bố được không?', ['Bố đi giặt quần áo. Con và em tưới cây giúp bố được không?', 'Bố đi quét dọn. Con và em giặt quần áo giúp bố được không?']),
            cau('c1', 'Con trả lời thế nào?', 'Dạ, con và em quét dọn được ạ!', ['Dạ, con và em giặt quần áo được ạ!']),
            cau('c2', 'Em nói thế nào?', 'Em đang trồng cây. Anh tưới nước giúp em được không?', ['Em đang trồng cây. Anh quét dọn giúp em được không?', 'Anh đang trồng cây. Em tưới nước giúp anh được không?']),
            cau('c3', 'Chị nói thế nào?', 'Chị đang rửa bát. Em lau bát giúp chị được không?', ['Chị đang rửa bát. Em cho mèo ăn giúp chị được không?', 'Em đang rửa bát. Chị lau bát giúp em được không?']),
            cau('c4', 'Bà nói thế nào?', 'Bà đang quét dọn. Hai cháu quét giúp bà được không?', ['Bà đang quét dọn. Hai cháu tưới cây giúp bà được không?', 'Bà đang quét dọn. Hai con quét giúp mẹ được không?']),
            cau('c5', 'Mẹ nói thế nào?', 'Mẹ đang nấu cơm. Con cho mèo ăn giúp mẹ được không?', ['Mẹ đang nấu cơm. Con quét dọn giúp mẹ được không?', 'Mẹ đang nấu cơm. Cháu cho mèo ăn giúp bà được không?'])
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [31],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'the-chu', lenh: 'Nghe và nhắc lại', amLenh: A + 'ld-lenh.mp3',
          chu: [
            { hoa: 'E', thuong: 'e', am: A + 'ld-e.mp3' },
            { hoa: 'Ê', thuong: 'ê', am: A + 'ld-ee.mp3' },
            { hoa: 'L', thuong: 'l', am: A + 'ld-l.mp3' },
            { hoa: 'Y', thuong: 'y', am: A + 'ld-y.mp3' },
            { hoa: 'B', thuong: 'b', am: A + 'ld-b.mp3' }
          ]
        },
        {
          id: 'ld2', so: 2, loai: 'danh-van', lenh: 'Đánh vần',
          tu: [
            { hinh: 'img/le.webp', tieng: 'lê', phan: ['l', 'ê'], thanh: null, doc: 'lờ – ê – lê' },
            { hinh: 'img/be.webp', tieng: 'bé', phan: ['b', 'e'], thanh: 'sắc', doc: 'bờ – e – be – sắc – bé' }
          ]
        },
        {
          id: 'ld3', so: 3, loai: 'chon-cau', lenh: 'Đọc các từ ngữ sau',
          goiY: 'Em đọc to từ ngữ, rồi chạm vào hình đúng.',
          cau: [
            { hoi: 'bê', dung: hinh('be2'), sai: [hinh('de'), hinh('dua-le')] },
            { hoi: 'dê', dung: hinh('de'), sai: [hinh('be2'), hinh('bo-de')] },
            { hoi: 'dưa lê', dung: hinh('dua-le'), sai: [hinh('be-nua'), hinh('de')] },
            { hoi: 'bờ đê', dung: hinh('bo-de'), sai: [hinh('be-nua'), hinh('be2')] },
            { hoi: 'bè nứa', dung: hinh('be-nua'), sai: [hinh('bo-de'), hinh('dua-le')] }
          ]
        },
        {
          id: 'ld4', so: 4, loai: 'doc-bai', lenh: 'Đọc các câu sau',
          cau: [{ c: 'Dì Lê đưa bé Ly đi bộ.' }, { c: 'Bé nô đùa.' }, { c: 'Dì đỡ bé.' }]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [32],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'bang-ghep', lenh: 'Ghép vần và tô màu hồng những từ em đã biết',
          hang: ['b', 'c', 'd', 'đ', 'l', 'm', 'n'],
          cot: ['a', 'o', 'ô', 'ơ', 'i', 'ia', 'u', 'ua', 'ư', 'ưa', 'e', 'ê'],
          viDu: ['bố', 'đi', 'nứa'],
          biet: ['bà', 'bờ', 'bé', 'bè', 'bê', 'ca', 'cà', 'cá', 'cỏ', 'cọ', 'cô', 'cổ', 'cua', 'dì', 'dỗ', 'dù', 'dưa', 'dừa', 'dứa', 'dê',
            'đá', 'đỏ', 'đỗ', 'độ', 'đỡ', 'đĩa', 'đu', 'đủ', 'đũa', 'đùa', 'đê', 'lê', 'mẹ', 'mũ', 'mía', 'mưa', 'nô', 'nơ']
        },
        {
          id: 'lv2', so: 2, loai: 'noi-tieng', lenh: 'Nối 1 tiếng ở A với 1 tiếng phù hợp ở B và tô cùng màu',
          a: ['đỗ', 'cua', 'cá', 'bờ', 'dưa', 'nô', 'mũ', 'bè', 'nơ'],
          b: ['đá', 'đỏ', 'đĩa', 'đê', 'đỏ', 'đùa', 'lê', 'nứa', 'đỏ'],
          tu: ['cá đĩa', 'cua đá', 'đỗ đỏ', 'bờ đê', 'nô đùa', 'bè nứa', 'mũ đỏ', 'nơ đỏ', 'dưa lê', 'dưa đỏ'],
          viDu: ['cá đĩa']
        },
        {
          id: 'lv3', so: 3, loai: 'viet-o-li', lenh: 'Chép câu sau',
          tu: [{ c: 'Dì Lê đưa bé Ly đi bộ.' }]
        }
      ]
    }
  ]
};
