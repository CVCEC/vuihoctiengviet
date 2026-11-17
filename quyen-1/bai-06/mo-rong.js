/* Quyển 1 – Bài 6 «Kia là con gì?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “Đây (Kia) là con gì?”, “Con … đang làm gì?”, “Con … thế nào?” và câu trả lời ngắn, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand “What animal is this/that?”, “What is it doing?”, “What is it like?” and short answers, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai và Nam ở vườn thú', cau: [
          ['Mai', 'Đây là con gì, Nam?'], ['Nam', 'Đây là con sóc.'], ['Mai', 'Con sóc đang làm gì?'],
          ['Nam', 'Con sóc đang ăn.'], ['Mai', 'Còn kia là con gì?'], ['Nam', 'Kia là con hổ.'],
          ['Mai', 'Con hổ thế nào?'], ['Nam', 'Con hổ rất khoẻ.']] },
        { ten: 'Hội thoại B – Dũng đến chơi với bà', cau: [
          ['Dũng', 'Cháu chào bà ạ.'], ['Bà', 'Chào cháu.'], ['Dũng', 'Kia là con gì ạ?'],
          ['Bà', 'Kia là con trâu.'], ['Dũng', 'Con trâu đang làm gì ạ?'], ['Bà', 'Con trâu đang ăn.'],
          ['Dũng', 'Còn đây là con gì ạ?'], ['Bà', 'Đây là con chó. Con chó đang chơi.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Đây là con gì?', en: 'What animal is this?', dung: 'con sóc', sai: ['con sói', 'con chó'] },
        { loai: 'chon', hoi: 'Hội thoại A: Con hổ thế nào?', en: 'What is the tiger like?', dung: 'Con hổ rất khoẻ.', sai: ['Con hổ đang ăn.', 'Con hổ rất yếu.'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Bà nói đến những con vật nào? (chọn 2)', en: 'Which animals does Grandma name? (choose 2)', dung: ['trâu', 'chó'], sai: ['bò', 'gà'] },
        { loai: 'chon', hoi: 'Hội thoại B: Con trâu đang làm gì?', en: 'What is the buffalo doing?', dung: 'Con trâu đang ăn.', sai: ['Con trâu đang chơi.', 'Con trâu rất khoẻ.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Kia là con ___.”', nghe: 'Kia là con trâu.', en: 'Listen and fill in the missing word.', dung: ['trâu'] },
        { loai: 'chon', hoi: 'Hội thoại B: Dũng hỏi bà thế nào cho lễ phép?', en: 'How does Dũng ask Grandma politely?', dung: 'Kia là con gì ạ?', sai: ['Kia là con gì?', 'Kia là con trâu.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: các con vật em biết',
      muc: 'viết một đoạn ngắn 3–5 câu đơn về con vật: đây (kia) là con gì, con vật thế nào, đang làm gì.',
      mucEn: 'Goal: write 3–5 simple sentences about animals: what they are, what they are like, what they are doing.',
      mau: { ten: 'Đoạn mẫu (Mai viết)', chu: 'Đây là con mèo. Con mèo đang ăn. Kia là con voi. Con voi rất khoẻ. Con voi đang chơi.' },
      tu: ['gà', 'vịt', 'chó', 'mèo', 'trâu', 'bò', 'voi', 'ngựa'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Đây là con ', '.'], ['Kia là con ', '.'], ['Con ', ' đang ăn.']], xong: 'Đúng rồi! Em đã gọi tên các con vật.' },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu, thay bằng con vật em biết.', en: 'Medium: write 3 sentences like the model, about animals you know.', soCau: 3 },
        kho: { huong: 'Viết 5 câu về hai con vật: dùng “Đây là con …”, “Kia là con …”, “Con … rất …” và “Con … đang …”.', en: 'Hard: write 5 sentences about two animals, using “Đây là con …”, “Kia là con …”, “rất …” and “đang …”.', soCau: 5 }
      },
      tuKiemTra: ['Có “con” trước tên con vật: con gà, con voi.', 'Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Đủ dấu thanh: gà, vịt, chó, mèo, ngựa, hổ.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng tên các con vật, đúng dấu thanh, đúng chữ g – gh – gi và viết hoa đầu câu.',
      mucEn: 'Goal: spell animal names with the right tone marks, use g, gh, gi correctly, and capitalise the first word.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'gà', en: 'Listen and write the word.', dung: ['gà'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'ngựa', dung: ['ngựa'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'sóc', dung: ['sóc'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'trâu', dung: ['trâu'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'mèo', dung: ['mèo'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: v_t', nghe: 'vịt', en: 'Choose the right tone mark.', dung: 'vịt', sai: ['vít', 'vit'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: h_ (con hổ)', nghe: 'hổ', dung: 'hổ', sai: ['hồ', 'hố'] },
        { loai: 'chon', hoi: 'Nghe và chọn chữ đúng', nghe: 'gà', en: 'Listen and choose the right spelling.', dung: 'gà', sai: ['ghà', 'già'] },
        { loai: 'chon', hoi: 'Nghe và chọn chữ đúng', nghe: 'già', dung: 'già', sai: ['gà', 'ghà'] },
        { loai: 'chon', hoi: 'Chọn chữ đúng: “Con voi già mà khoẻ _ê.” (trước e, ê, i viết gh)', en: 'Before e, ê, i we write “gh”.', dung: 'ghê', sai: ['gê'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “kia là con gì?”', en: 'Rewrite with a capital letter.', hoa: true, dung: ['Kia là con gì?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Kia là con voi.', en: 'Listen and write the sentence.', hoa: true, dung: ['Kia là con voi.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Con voi rất khoẻ.', hoa: true, dung: ['Con voi rất khoẻ.', 'Con voi rất khỏe.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Đây là / Kia là + con + tên con vật', 'Đây là con vịt. Kia là con voi.', ['“đây” chỉ vật ở gần, “kia” chỉ vật ở xa. Trước tên con vật thường có “con”.', '“đây” = this (near), “kia” = that (far). Animal names take “con”.']],
          ['Hỏi với “gì”', 'Kia là con gì?', ['“gì” hỏi về con vật, đồ vật; “ai” hỏi về người (Bài 1). “gì” đứng ở chỗ của câu trả lời.', '“gì” = what (animals, things); “ai” = who. It stays where the answer goes.']],
          ['đang + từ chỉ hoạt động', 'Con voi đang ăn.', ['“đang” cho biết việc xảy ra lúc nói. Hỏi: Con … đang làm gì?', '“đang” = happening now (-ing). Question: … đang làm gì?']],
          ['rất + từ chỉ tính chất', 'Con voi rất khoẻ.', ['“rất” đứng trước từ chỉ tính chất. Hỏi: Con … thế nào?', '“rất” = very; it comes before the adjective. Question: … thế nào?']]
        ]
      },
      ghiChu: '“Đây là ai?” (Bài 1) hỏi người; “Đây là con gì?” hỏi con vật.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Kia', 'là', 'con', 'gì?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Kia là con NGỰA.”', en: 'Make a question for the capitalised part.', dung: 'Kia là con gì?', sai: ['Kia là ai?', 'Con ngựa đang làm gì?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Con voi ĐANG ĂN.”', dung: 'Con voi đang làm gì?', sai: ['Con voi thế nào?', 'Kia là con gì?'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Con hổ rất khoẻ.', sai: ['Con hổ khoẻ rất.', 'Rất con hổ khoẻ.'] },
        { loai: 'go', hoi: 'Điền từ: “Con mèo ___ ăn.” (việc xảy ra lúc nói)', en: 'Fill in the word for “happening now”.', dung: ['đang'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', dung: 'Đây là con chó.', sai: ['Đây con chó.', 'Đây là con gì chó.'] }
      ]
    }
  ]
};
