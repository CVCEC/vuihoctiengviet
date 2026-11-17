/* Quyển 1 – Bài 5 «Ôn tập» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1). Ôn tổng hợp Bài 1–4.
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu hội thoại ngắn có lời chào, giới thiệu người, hỏi “làm gì đó?” và “thế nào?”, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand short dialogues with greetings, introductions, “What is … doing?” and “How is …?”, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai đến nhà Nam', cau: [
          ['Mai', 'Cháu chào cô ạ.'], ['Mẹ Nam', 'Chào cháu.'], ['Mai', 'Nam làm gì đó ạ?'], ['Mẹ Nam', 'Nam xem ti vi.'],
          ['Nam', 'Chào Mai! Đây là bà tôi.'], ['Mai', 'Cháu chào bà ạ.'], ['Bà Nam', 'Chào cháu.']] },
        { ten: 'Hội thoại B – Nam hỏi về họ ngoại của Mai', cau: [
          ['Nam', 'Ông bà ngoại Mai thế nào?'], ['Mai', 'Cảm ơn Nam. Ông ngoại tôi già. Bà ngoại tôi yếu.'],
          ['Nam', 'Còn cậu Mai thế nào?'], ['Mai', 'Cậu tôi rất khoẻ.'], ['Nam', 'Dì Mai làm gì đó?'], ['Mai', 'Dì tôi hát.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Mai chào mẹ Nam thế nào?', en: 'How does Mai greet Nam’s mother?', dung: 'Cháu chào cô ạ.', sai: ['Con chào cô ạ.', 'Em chào cô.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Nam làm gì?', en: 'What is Nam doing?', dung: 'xem ti vi', sai: ['học', 'ăn cơm'] },
        { loai: 'chon', hoi: 'Hội thoại A: Nam giới thiệu ai với Mai?', en: 'Who does Nam introduce to Mai?', dung: 'bà', sai: ['mẹ', 'chị'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Mai nói về những người nào? (chọn 4)', en: 'Who does Mai talk about? (choose 4)', dung: ['ông ngoại', 'bà ngoại', 'cậu', 'dì'], sai: ['chú', 'cô'] },
        { loai: 'chon', hoi: 'Hội thoại B: Cậu Mai thế nào?', en: 'How is Mai’s uncle?', dung: 'rất khoẻ', sai: ['yếu', 'già'] },
        { loai: 'go', hoi: 'Nghe và điền: “Dì tôi ___.”', nghe: 'Dì tôi hát.', en: 'Listen and fill in the missing word.', dung: ['hát'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: gia đình em (ôn tập)',
      muc: 'viết một đoạn ngắn 4–6 câu đơn giới thiệu người trong gia đình: người đó là ai, thế nào, làm gì.',
      mucEn: 'Goal: write 4–6 simple sentences about your family: who they are, how they are, what they are doing.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Đây là gia đình tôi. Đây là ông bà nội tôi. Ông tôi rất khoẻ. Bà tôi yếu. Bố tôi xem ti vi. Tôi học.' },
      tu: ['ông', 'bà', 'bác', 'chú', 'cô', 'cậu', 'dì', 'mợ'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Đây là ', ' tôi.'], ['Cháu chào ', ' ạ.'], ['Đây là ', ' tôi.']], xong: 'Đúng rồi! Em đã giới thiệu và chào người thân.' },
        vua: { huong: 'Viết 3 câu về một người trong gia đình em: người đó là ai, thế nào, làm gì. Ví dụ: “Đây là bà tôi. Bà tôi rất vui. Bà tôi hát.”', en: 'Medium: write 3 sentences about one family member: who, how, and what they are doing.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: câu đầu “Đây là gia đình tôi.”; giới thiệu 2 người, nói họ thế nào hoặc làm gì; câu cuối nói về em “Tôi …”.', en: 'Hard: write 5 sentences. Start with “Đây là gia đình tôi.”, describe 2 people (how they are or what they do), and end with a sentence about yourself.', soCau: 5 }
      },
      tuKiemTra: ['Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Đủ ba ý: ai (Đây là …), thế nào (rất …, … lắm), làm gì.', 'Đủ dấu thanh: bà, chú, cậu, dì, khoẻ, học.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'ôn viết đúng các từ của Bài 1–4, đúng dấu thanh, đúng các chữ đã học (a, ă, â, b, c, ch, d, đ, e, ê) và viết hoa.',
      mucEn: 'Goal: review spelling from Lessons 1–4: tone marks, the letters learned so far, and capital letters.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'cậu', en: 'Listen and write the word.', dung: ['cậu'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'chú', dung: ['chú'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đi học', dung: ['đi học'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'khoẻ', dung: ['khoẻ', 'khỏe'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'ớ', en: 'Listen to the letter name and tap the letter.', dung: 'â', sai: ['ă', 'a'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'đờ', dung: 'đ', sai: ['d', 'b'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'ê', dung: 'ê', sai: ['e', 'â'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng', nghe: 'cháu', en: 'Choose the correct spelling.', dung: 'cháu', sai: ['cáu', 'cháo'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: tr_ (trẻ)', nghe: 'trẻ', en: 'Choose the right tone mark.', dung: 'trẻ', sai: ['tre', 'trẹ'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: b_ (bà nội)', nghe: 'bà', dung: 'bà', sai: ['ba', 'bá'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “đây là anh dũng.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Đây là anh Dũng.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Cháu chào bà ạ.', en: 'Listen and write the sentence.', hoa: true, dung: ['Cháu chào bà ạ.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Bố mẹ tôi khoẻ.', hoa: true, dung: ['Bố mẹ tôi khoẻ.', 'Bố mẹ tôi khỏe.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Chị Liên làm gì đó?', hoa: true, dung: ['Chị Liên làm gì đó?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'ôn và dùng đúng 4 điểm ngữ pháp của Bài 1–4.',
      mucEn: 'Goal: review and use the 4 grammar points from Lessons 1–4.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Đây là + người', 'Đây là bà tôi. Đây là cậu tôi.', ['Giới thiệu người ở gần. Người sở hữu đứng sau: bà tôi, cậu Mai.', '“This is …”. The owner comes after: “bà tôi” = my grandma.']],
          ['Lời chào lễ phép', 'Cháu chào cô ạ. Con chào mẹ ạ. Em chào anh.', ['Xưng (con, cháu, em) + chào + người nghe; thêm “ạ” với người lớn.', 'Your own term + “chào” + the listener; add “ạ” for elders.']],
          ['Ba từ hỏi: ai? · làm gì? · thế nào?', 'Đây là ai? Nam làm gì đó? Cậu Mai thế nào?', ['“ai” hỏi người, “làm gì” hỏi việc, “thế nào” hỏi người đó ra sao. Từ hỏi đứng ở chỗ của câu trả lời.', '“ai” = who, “làm gì” = doing what, “thế nào” = how. The question word sits where the answer goes.']],
          ['rất + từ · từ + lắm', 'Cậu tôi rất khoẻ. Chị Liên vui lắm.', ['“rất” đứng trước, “lắm” đứng sau; không có “là” trước khoẻ, vui.', '“rất” before, “lắm” after; no “là” before adjectives.']]
        ]
      },
      cauHoi: [
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Đây là CẬU TÔI.”', en: 'Make a question for the capitalised part.', dung: 'Đây là ai?', sai: ['Cậu tôi thế nào?', 'Cậu tôi làm gì đó?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Bà tôi YẾU.”', en: 'Make a question for the capitalised part.', dung: 'Bà tôi thế nào?', sai: ['Bà tôi làm gì đó?', 'Đây là ai?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Nam XEM TI VI.”', en: 'Make a question for the capitalised part.', dung: 'Nam làm gì đó?', sai: ['Nam thế nào?', 'Đây là ai?'] },
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Cháu', 'chào', 'cậu', 'ạ.'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Con chào bố ạ.', sai: ['Cháu chào bố ạ.', 'Em chào bố.'] },
        { loai: 'go', hoi: 'Điền từ: “Dì tôi vui ___.”', en: 'Fill in the missing word.', dung: ['lắm'] }
      ]
    }
  ]
};
