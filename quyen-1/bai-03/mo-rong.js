/* Quyển 1 – Bài 3 «Em làm gì đó?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “… làm gì đó?” và câu trả lời về việc mọi người đang làm, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand “What is … doing?” and short answers about everyday activities, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai đến nhà Nam', cau: [
          ['Mai', 'Chào Nam!'], ['Nam', 'Chào Mai!'], ['Mai', 'Nam làm gì đó?'], ['Nam', 'Tôi xem ti vi.'],
          ['Mai', 'Chị Liên làm gì đó?'], ['Nam', 'Chị Liên ăn cơm.'], ['Mai', 'Còn bố mẹ Nam làm gì đó?'], ['Nam', 'Bố tôi hát. Mẹ tôi rửa bát.']] },
        { ten: 'Hội thoại B – Nam và cô giáo', cau: [
          ['Nam', 'Em chào cô ạ!'], ['Cô giáo', 'Chào em. Em làm gì đó?'], ['Nam', 'Em học ạ.'],
          ['Cô giáo', 'Còn Mai làm gì đó?'], ['Nam', 'Mai hát ạ.'], ['Cô giáo', 'Còn anh Dũng?'], ['Nam', 'Anh Dũng chơi ạ.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Nam làm gì?', en: 'What is Nam doing?', dung: 'xem ti vi', sai: ['ăn cơm', 'hát'] },
        { loai: 'chon', hoi: 'Hội thoại A: Chị Liên làm gì?', en: 'What is Liên doing?', dung: 'ăn cơm', sai: ['rửa bát', 'xem ti vi'] },
        { loai: 'chon', hoi: 'Hội thoại A: Ai rửa bát?', en: 'Who is washing the dishes?', dung: 'mẹ Nam', sai: ['bố Nam', 'chị Liên'] },
        { loai: 'chon', hoi: 'Hội thoại B: Nam chào cô thế nào?', en: 'How does Nam greet the teacher?', dung: 'Em chào cô ạ!', sai: ['Cháu chào cô ạ!', 'Chào em.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Em ___ ạ.”', nghe: 'Em học ạ.', en: 'Listen and fill in the missing word.', dung: ['học'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Nam nói về những ai? (chọn 2)', en: 'Who does Nam talk about? (choose 2)', dung: ['Mai', 'anh Dũng'], sai: ['chị Liên', 'mẹ Nam'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp lại câu Nam trả lời về Mai', en: 'Put Nam’s answer about Mai in order.', dung: ['Mai', 'hát', 'ạ.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: cả nhà em làm gì?',
      muc: 'viết một đoạn ngắn 3–5 câu đơn kể mỗi người trong gia đình đang làm gì.',
      mucEn: 'Goal: write 3–5 simple sentences saying what each person in your family is doing.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Đây là gia đình tôi. Bố tôi xem ti vi. Mẹ tôi hát. Chị Liên rửa bát. Tôi học.' },
      tu: ['chơi', 'hát', 'học', 'xem ti vi', 'ăn cơm', 'rửa bát', 'đi học'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Bố tôi ', '.'], ['Mẹ tôi ', '.'], ['Tôi ', '.']], xong: 'Đúng rồi! Em đã kể cả nhà em làm gì.' },
        vua: { huong: 'Viết 3 câu, mỗi câu nói một người trong gia đình em làm gì.', en: 'Medium: write 3 sentences, each saying what one family member is doing.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: câu đầu “Đây là gia đình tôi.”, kể 3 người làm gì, câu cuối nói em làm gì “Tôi …”.', en: 'Hard: write 5 sentences. Start with “Đây là gia đình tôi.”, say what 3 people are doing, and end with what you are doing.', soCau: 5 }
      },
      tuKiemTra: ['Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Tên người viết hoa: Nam, Liên, Dũng.', 'Đủ dấu thanh: hát, ăn cơm, rửa bát, đi học.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ chỉ hoạt động, đúng dấu thanh, đúng chữ d – đ và viết hoa tên riêng.',
      mucEn: 'Goal: spell the activity words with the right tone marks and the letters d, đ; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'chơi', en: 'Listen and write the word.', dung: ['chơi'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'hát', dung: ['hát'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'ăn cơm', dung: ['ăn cơm'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'rửa bát', dung: ['rửa bát'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đi học', dung: ['đi học'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'xem ti vi', dung: ['xem ti vi', 'xem tivi'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: h_t (hát)', nghe: 'hát', en: 'Choose the right tone mark.', dung: 'hát', sai: ['hạt', 'hat'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: r_a bát (rửa bát)', nghe: 'rửa', dung: 'rửa', sai: ['rứa', 'rữa'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'dờ', en: 'Listen to the letter name and tap the letter.', dung: 'd', sai: ['đ', 'b'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'đờ', dung: 'đ', sai: ['d', 'b'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng (d hay đ?)', nghe: 'đi học', en: 'd or đ? Choose the correct spelling.', dung: 'đi học', sai: ['di học'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “anh dũng làm gì đó?”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Anh Dũng làm gì đó?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Chị Liên rửa bát.', en: 'Listen and write the sentence.', hoa: true, dung: ['Chị Liên rửa bát.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Em làm gì đó?', hoa: true, dung: ['Em làm gì đó?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Hỏi việc đang làm: … làm gì đó?', 'Em làm gì đó? Chị Liên làm gì đó, Nam?', ['“làm gì” hỏi về việc người đó làm; “đó” ở cuối làm câu hỏi thân mật, tự nhiên.', '“làm gì” = doing what; “đó” at the end makes the question friendly.']],
          ['Trả lời: người + việc', 'Chị Liên rửa bát. Nam chơi.', ['Thay “làm gì” bằng việc. Việc đứng sau người.', 'Replace “làm gì” with the activity; the verb comes after the person.']],
          ['“ạ” khi trả lời người lớn hơn', 'Em học ạ.', ['Trả lời anh chị, thầy cô, người lớn: thêm “ạ” ở cuối cho lễ phép.', 'Add “ạ” at the end when answering someone older.']],
          ['Từ theo vùng', 'rửa bát (chén)', ['“bát” hay dùng ở miền Bắc, “chén” ở miền Nam. Cả hai đều đúng.', 'Both are correct; regional usage.']]
        ]
      },
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Em', 'làm', 'gì', 'đó?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Chị Liên RỬA BÁT.”', en: 'Make a question for the capitalised part.', dung: 'Chị Liên làm gì đó?', sai: ['Chị Liên là ai?', 'Đây là ai?'] },
        { loai: 'chon', hoi: 'Anh Dũng hỏi: “Em làm gì đó?” Nam trả lời lễ phép thế nào?', en: 'Choose Nam’s polite answer.', dung: 'Em học ạ.', sai: ['Học.', 'Anh học ạ.'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Chị Liên rửa bát.', sai: ['Chị Liên bát rửa.', 'Rửa bát chị Liên.'] },
        { loai: 'go', hoi: 'Điền từ: “Nam làm ___ đó?”', en: 'Fill in the missing word.', dung: ['gì'] }
      ]
    }
  ]
};
