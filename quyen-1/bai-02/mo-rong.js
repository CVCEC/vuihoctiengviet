/* Quyển 1 – Bài 2 «Con chào mẹ ạ.» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu lời chào lễ phép với người trong gia đình, họ nội và họ ngoại, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand polite greetings to family members on the father’s and mother’s side, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Nam chào họ nội', cau: [
          ['Nam', 'Con chào bố ạ.'], ['Bố Nam', 'Chào con.'], ['Nam', 'Cháu chào ông ạ.'], ['Ông nội', 'Chào cháu.'],
          ['Nam', 'Cháu chào chú ạ.'], ['Chú Nam', 'Chào cháu.'], ['Nam', 'Em chào chị.'], ['Chị Nam', 'Chào em.']] },
        { ten: 'Hội thoại B – Mai giới thiệu họ ngoại', cau: [
          ['Nam', 'Đây là ai, Mai?'], ['Mai', 'Đây là dì tôi.'], ['Nam', 'Cháu chào dì ạ.'], ['Dì Mai', 'Chào cháu.'],
          ['Nam', 'Còn đây là ai?'], ['Mai', 'Đây là cậu tôi. Còn đây là mợ tôi.'], ['Nam', 'Cháu chào cậu ạ. Cháu chào mợ ạ.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Nam chào bố thế nào?', en: 'How does Nam greet his father?', dung: 'Con chào bố ạ.', sai: ['Cháu chào bố ạ.', 'Em chào bố.'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Nam xưng “cháu” với những ai? (chọn 2)', en: 'With whom does Nam call himself “cháu”? (choose 2)', dung: ['ông', 'chú'], sai: ['bố', 'chị'] },
        { loai: 'chon', hoi: 'Hội thoại A: Chị Nam đáp lại thế nào?', en: 'How does Nam’s sister reply?', dung: 'Chào em.', sai: ['Chào cháu.', 'Chào con.'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp đúng thứ tự Mai giới thiệu', en: 'Put the people in the order Mai introduces them.', dung: ['dì', 'cậu', 'mợ'] },
        { loai: 'go', hoi: 'Nghe và điền: “Cháu chào ___ ạ.”', nghe: 'Cháu chào dì ạ.', en: 'Listen and fill in the missing word.', dung: ['dì'] },
        { loai: 'chon', hoi: 'Hội thoại B: Nam xưng là gì với dì, cậu, mợ của Mai?', en: 'What does Nam call himself when talking to Mai’s aunt and uncle?', dung: 'cháu', sai: ['con', 'em'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: giới thiệu họ nội, họ ngoại của em',
      muc: 'viết một đoạn ngắn 3–5 câu đơn giới thiệu ông bà, cô chú, cậu dì và viết lời chào lễ phép.',
      mucEn: 'Goal: write 3–5 simple sentences introducing relatives and greeting them politely.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Đây là ông nội tôi. Đây là bà nội tôi. Đây là chú tôi. Đây là cô tôi. Tôi là Nam.' },
      tu: ['ông', 'bà', 'bác', 'chú', 'cô', 'cậu', 'dì', 'mợ'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Đây là ', ' tôi.'], ['Cháu chào ', ' ạ.'], ['Đây là ', ' tôi.']], xong: 'Đúng rồi! Em đã giới thiệu và chào người thân.' },
        vua: { huong: 'Viết 3 câu “Đây là … tôi.” về họ nội hoặc họ ngoại của em.', en: 'Medium: write 3 sentences “Đây là … tôi.” about relatives on one side of your family.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: giới thiệu 3 người, rồi viết lời chào lễ phép cho 2 người, ví dụ “Cháu chào bà ạ.”.', en: 'Hard: write 5 sentences. Introduce 3 relatives, then greet 2 of them politely, e.g. “Cháu chào bà ạ.”.', soCau: 5 }
      },
      tuKiemTra: ['Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Lời chào người lớn: “Cháu chào … ạ.”; với bố mẹ: “Con chào … ạ.”', 'Đủ dấu thanh: bác, chú, thím, cậu, dì, mợ.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ chỉ người thân, đúng dấu thanh, đúng chữ b – c – ch và viết hoa đầu câu.',
      mucEn: 'Goal: spell the family words with the right tone marks and the letters b, c, ch; capitalise the first word.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bác', en: 'Listen and write the word.', dung: ['bác'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'chú', dung: ['chú'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'thím', dung: ['thím'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'cháu', dung: ['cháu'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'cậu', dung: ['cậu'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: m_ (người trong họ ngoại)', nghe: 'mợ', en: 'Choose the right tone mark.', dung: 'mợ', sai: ['mờ', 'mớ'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: d_ (người trong họ ngoại)', nghe: 'dì', dung: 'dì', sai: ['dí', 'di'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'bờ', en: 'Listen to the letter name and tap the letter.', dung: 'b', sai: ['c', 'ch'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'cờ', dung: 'c', sai: ['ch', 'b'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'chờ', dung: 'ch', sai: ['c', 'b'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng (c hay ch?)', nghe: 'cháu', en: 'c or ch? Choose the correct spelling.', dung: 'cháu', sai: ['cáu'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “cháu chào bà ạ.”', en: 'Rewrite with a capital letter.', hoa: true, dung: ['Cháu chào bà ạ.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Con chào mẹ ạ.', en: 'Listen and write the sentence.', hoa: true, dung: ['Con chào mẹ ạ.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Em chào chị.', hoa: true, dung: ['Em chào chị.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Lời chào: xưng + chào + người nghe + ạ', 'Con chào mẹ ạ. Cháu chào ông ạ.', ['Người nói xưng mình trước, rồi “chào”, rồi gọi người nghe. “ạ” ở cuối câu để lễ phép với người lớn.', 'Your own term + “chào” + the listener. “ạ” at the end shows respect.']],
          ['Xưng hô: con – cháu – em', 'Con chào bố ạ. Cháu chào chú ạ. Em chào anh.', ['Với bố mẹ xưng “con”; với ông bà, bác, chú, cô, cậu, dì… xưng “cháu”; với anh chị xưng “em”.', 'Say “con” to parents, “cháu” to grandparents, aunts and uncles, “em” to older siblings.']],
          ['Lời đáp: Chào + con / cháu / em', 'Chào con. Chào cháu. Chào em.', ['Người lớn đáp lại bằng chính từ người nhỏ đã xưng.', 'The elder replies with the word the younger person used for themselves.']],
          ['Họ nội – họ ngoại', 'bác, chú, thím, cô · cậu, mợ, dì, dượng', ['Họ nội là bên bố, họ ngoại là bên mẹ. Mỗi bên có từ riêng: ông nội, ông ngoại.', 'Họ nội = father’s side; họ ngoại = mother’s side. Each side has its own words.']]
        ]
      },
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Cháu', 'chào', 'bà', 'ạ.'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “___ chào mẹ ạ.”', en: 'Choose the right word.', dung: 'Con', sai: ['Cháu', 'Em'] },
        { loai: 'chon', hoi: 'Nam chào ông nội thế nào?', en: 'How does Nam greet his grandfather?', dung: 'Cháu chào ông ạ.', sai: ['Con chào ông ạ.', 'Em chào ông.'] },
        { loai: 'chon', hoi: 'Bà đáp lại lời chào của cháu thế nào?', en: 'How does grandmother reply?', dung: 'Chào cháu.', sai: ['Chào bà ạ.', 'Cháu chào bà ạ.'] },
        { loai: 'nhieu', hoi: 'Những người nào thuộc họ ngoại? (chọn 3)', en: 'Which relatives are on the mother’s side? (choose 3)', dung: ['cậu', 'mợ', 'dì'], sai: ['chú', 'thím'] },
        { loai: 'go', hoi: 'Điền từ: “Em chào ___.” (nói với anh của em)', en: 'Fill in the word (speaking to your older brother).', dung: ['anh'] }
      ]
    }
  ]
};
