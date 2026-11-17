/* Quyển 1 – Bài 8 «Cây cam có mấy quả?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “… có mấy …?”, các số từ 1 đến 10 và tên bộ phận của con vật, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand “How many … does it have?”, the numbers 1–10 and animal body parts, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai và Nam đếm quả', cau: [
          ['Mai', 'Cây cam có mấy quả?'], ['Nam', 'Cây cam có tám quả.'], ['Mai', 'Cây na có mấy quả?'],
          ['Nam', 'Cây na có năm quả.'], ['Mai', 'Cây khế có mười quả, phải không?'], ['Nam', 'Không phải. Cây khế có chín quả.']] },
        { ten: 'Hội thoại B – Chị Liên đố Dũng', cau: [
          ['Chị Liên', 'Dũng, đây là con gì?'], ['Dũng', 'Đây là con khỉ ạ.'], ['Chị Liên', 'Con khỉ có mấy chân?'],
          ['Dũng', 'Con khỉ có hai chân và hai tay.'], ['Chị Liên', 'Con khỉ có đuôi, phải không?'], ['Dũng', 'Phải. Con khỉ có đuôi.'],
          ['Chị Liên', 'Còn con cua có mấy chân?'], ['Dũng', 'Con cua có mười chân ạ.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Cây cam có mấy quả?', en: 'How many oranges are on the tree?', dung: '8 quả', sai: ['10 quả', '6 quả'] },
        { loai: 'go', hoi: 'Nghe và điền số (viết bằng chữ): “Cây na có ___ quả.”', nghe: 'Cây na có năm quả.', en: 'Listen and write the number.', dung: ['năm', '5'] },
        { loai: 'chon', hoi: 'Hội thoại A: Cây khế có mấy quả?', en: 'How many star fruits are on the tree?', dung: '9 quả', sai: ['10 quả', '5 quả'] },
        { loai: 'xep', hoi: 'Hội thoại A: xếp đúng thứ tự các cây Mai hỏi', en: 'Put the trees in the order Mai asks about them.', dung: ['cam', 'na', 'khế'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Dũng nói đến những bộ phận nào của con khỉ? (chọn 3)', en: 'Which body parts of the monkey does Dũng mention? (choose 3)', dung: ['chân', 'tay', 'đuôi'], sai: ['tai', 'bụng'] },
        { loai: 'chon', hoi: 'Hội thoại B: Con cua có mấy chân?', en: 'How many legs does the crab have?', dung: 'Con cua có 10 chân.', sai: ['Con cua có 8 chân.', 'Con cua có 2 chân.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: em có gì?',
      muc: 'viết một đoạn ngắn 3–5 câu đơn dùng “có” + số + tên vật, nói về em và những gì quanh em.',
      mucEn: 'Goal: write 3–5 simple sentences with “có” + number + noun, about yourself and things around you.',
      mau: { ten: 'Đoạn mẫu (Mai viết)', chu: 'Tôi là Mai. Tôi có hai anh và một em. Tôi có sáu bông hoa. Tôi có một con mèo. Con mèo có bốn chân và hai tai.' },
      tu: ['một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám'],
      muc_: {
        de: { huong: 'Chọn số để điền vào 3 câu.', en: 'Easy: choose a number for each blank.', khung: [['Tôi có ', ' con mèo.'], ['Cây cam có ', ' quả.'], ['Mai có ', ' bông hoa.']], xong: 'Đúng rồi! Em đã dùng số để nói “có mấy”.' },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu, thay bằng số và vật của em.', en: 'Medium: write 3 sentences like the model, with your own numbers and things.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: câu đầu “Tôi là …”; các câu sau dùng “có” + số + người trong gia đình, con vật, hoa hoặc quả.', en: 'Hard: write 5 sentences. Start with “Tôi là …”, then use “có” + number + family members, animals, flowers or fruit.', soCau: 5 }
      },
      tuKiemTra: ['Số đứng trước tên vật: hai con mèo, sáu bông hoa.', 'Số viết bằng chữ có đủ dấu: bốn, năm, sáu, bảy, tám, mười.', 'Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng số đếm và tên bộ phận, đúng dấu thanh, đúng chữ c – k – kh và viết hoa đầu câu.',
      mucEn: 'Goal: spell numbers and body parts with the right tone marks, use c, k, kh correctly, and capitalise the first word.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'khỉ', en: 'Listen and write the word.', dung: ['khỉ'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đuôi', dung: ['đuôi'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bụng', dung: ['bụng'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'chân', dung: ['chân'] },
        { loai: 'go', hoi: 'Nghe và viết số bằng chữ', nghe: 'bảy', en: 'Listen and write the number in words.', dung: ['bảy'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: s_u (6)', nghe: 'sáu', en: 'Choose the right tone mark.', dung: 'sáu', sai: ['sau', 'sàu'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng (10)', nghe: 'mười', dung: 'mười', sai: ['mươi', 'mưới'] },
        { loai: 'chon', hoi: 'Chọn chữ đúng: “_ia là cây khế.” (trước e, ê, i viết k)', en: 'Before e, ê, i we write “k”, not “c”.', dung: 'Kia', sai: ['Cia'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng: con _ua', dung: 'cua', sai: ['kua'] },
        { loai: 'chon', hoi: 'Nghe và chọn chữ đúng', nghe: 'khế', en: 'Listen and choose the right spelling.', dung: 'khế', sai: ['kế', 'hế'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'ca', en: 'Listen to the letter name and tap the letter.', dung: 'k', sai: ['c', 'q'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “con khỉ có hai tai.”', en: 'Rewrite with a capital letter.', hoa: true, dung: ['Con khỉ có hai tai.', 'Con khỉ có 2 tai.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Cây cam có mấy quả?', en: 'Listen and write the sentence.', hoa: true, dung: ['Cây cam có mấy quả?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Con cua có mười chân.', hoa: true, dung: ['Con cua có mười chân.', 'Con cua có 10 chân.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['có + số + tên vật', 'Cây cam có 10 quả. Con khỉ có 2 tai.', ['“có” nói ai, cái gì có những gì. Số đứng trước tên vật.', '“có” = have / has. The number comes before the noun.']],
          ['Hỏi số với “mấy”', 'Cây cam có mấy quả?', ['“mấy” hỏi số nhỏ (thường dưới 10); “mấy” đứng ở chỗ của số trong câu trả lời.', '“mấy” = how many (small numbers); it stands where the number goes.']],
          ['… có …, phải không?', 'Con cua có 8 chân, phải không?', ['Hỏi lại cho chắc (như Bài 7). Trả lời: Phải. / Không phải. Con cua có 10 chân.', 'Checking question from Lesson 7; answer “Phải.” or “Không phải.” and correct it.']],
          ['bông / quả / con + tên vật', 'Mai có 6 bông hoa. Cây cam có 10 quả.', ['Đếm hoa dùng “bông”, đếm quả dùng “quả”, đếm con vật dùng “con”.', 'Counting words: “bông” for flowers, “quả” for fruit, “con” for animals.']]
        ]
      },
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Con khỉ', 'có', 'mấy', 'tai?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Cây na có NĂM quả.”', en: 'Make a question for the capitalised part.', dung: 'Cây na có mấy quả?', sai: ['Cây na có quả mấy?', 'Đây là cây gì?'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Mai có sáu bông hoa.', sai: ['Mai có bông hoa sáu.', 'Mai sáu có bông hoa.'] },
        { loai: 'chon', hoi: 'Hỏi: “Con gà có 4 chân, phải không?” Chọn câu trả lời đúng.', en: 'Choose the right answer.', dung: 'Không phải. Con gà có 2 chân.', sai: ['Phải. Con gà có 4 chân.', 'Không phải. Con gà có 4 chân.'] },
        { loai: 'go', hoi: 'Điền từ hỏi: “Con thỏ có ___ chân?”', en: 'Fill in the question word.', dung: ['mấy'] }
      ]
    }
  ]
};
