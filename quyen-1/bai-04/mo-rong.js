/* Quyển 1 – Bài 4 «Bố mẹ em thế nào?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “… thế nào?” và câu trả lời ngắn về người trong gia đình (già, trẻ, khoẻ, yếu, vui, buồn), khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand “How is …?” and short answers about family members, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai hỏi thăm gia đình Nam', cau: [
          ['Mai', 'Chào Nam!'], ['Nam', 'Chào Mai!'], ['Mai', 'Bố mẹ Nam thế nào?'], ['Nam', 'Cảm ơn Mai. Bố mẹ tôi khoẻ.'],
          ['Mai', 'Ông bà Nam thế nào?'], ['Nam', 'Bà tôi rất khoẻ. Ông tôi yếu.'], ['Mai', 'Còn chị Liên thế nào?'], ['Nam', 'Chị Liên vui lắm.']] },
        { ten: 'Hội thoại B – Xem ảnh gia đình Mai', cau: [
          ['Nam', 'Đây là ai, Mai?'], ['Mai', 'Đây là ba tôi. Ba tôi trẻ lắm.'], ['Nam', 'Còn đây là ai?'],
          ['Mai', 'Đây là má tôi. Má tôi rất vui.'], ['Nam', 'Còn đây?'], ['Mai', 'Đây là anh Dũng. Anh ấy khoẻ lắm.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Mai hỏi Nam về ai trước?', en: 'Who does Mai ask about first?', dung: 'bố mẹ Nam', sai: ['ông bà Nam', 'chị Liên'] },
        { loai: 'chon', hoi: 'Hội thoại A: Mai hỏi “Bố mẹ Nam thế nào?”. Nam nói gì đầu tiên?', en: 'What does Nam say first after Mai’s question?', dung: 'Cảm ơn Mai.', sai: ['Chào Mai!', 'Bố mẹ tôi yếu.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Ông Nam thế nào?', en: 'How is Nam’s grandfather?', dung: 'yếu', sai: ['rất khoẻ', 'vui lắm'] },
        { loai: 'go', hoi: 'Nghe và điền: “Bà tôi rất ___.”', nghe: 'Bà tôi rất khoẻ.', en: 'Listen and fill in the missing word.', dung: ['khoẻ', 'khỏe'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp đúng thứ tự Mai giới thiệu', en: 'Put the people in the order Mai introduces them.', dung: ['ba', 'má', 'anh Dũng'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Mai dùng những từ nào để nói về ba, má, anh Dũng? (chọn 3)', en: 'Which words does Mai use about her family? (choose 3)', dung: ['trẻ', 'vui', 'khoẻ'], sai: ['già', 'buồn'] },
        { loai: 'chon', hoi: 'Hội thoại B: Ai trẻ lắm?', en: 'Who is very young?', dung: 'ba Mai', sai: ['má Mai', 'anh Dũng'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: người trong gia đình em thế nào?',
      muc: 'viết một đoạn ngắn 3–5 câu đơn nói người trong gia đình thế nào, dùng “rất” và “lắm”.',
      mucEn: 'Goal: write 3–5 simple sentences describing your family members, using “rất” and “lắm”.',
      mau: { ten: 'Đoạn mẫu (Mai viết)', chu: 'Đây là gia đình tôi. Ba tôi rất trẻ. Má tôi vui lắm. Bà tôi già. Anh Dũng khoẻ lắm.' },
      tu: ['già', 'trẻ', 'khoẻ', 'yếu', 'vui', 'buồn'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Bố tôi rất ', '.'], ['Mẹ tôi ', ' lắm.'], ['Ông tôi rất ', '.']], xong: 'Đúng rồi! Em đã nói người trong gia đình em thế nào.' },
        vua: { huong: 'Viết 3 câu, mỗi câu nói một người trong gia đình em thế nào, dùng “rất” hoặc “lắm”.', en: 'Medium: write 3 sentences, each describing one family member with “rất” or “lắm”.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: câu đầu “Đây là gia đình tôi.”, sau đó nói 4 người thế nào. Dùng cả “rất” và “lắm”.', en: 'Hard: write 5 sentences. Start with “Đây là gia đình tôi.”, then describe 4 people. Use both “rất” and “lắm”.', soCau: 5 }
      },
      tuKiemTra: ['Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', '“rất” đứng trước từ, “lắm” đứng sau từ: rất vui, vui lắm.', 'Đủ dấu thanh: già, trẻ, khoẻ, yếu, buồn.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ của bài, đúng dấu thanh, đúng chữ e – ê và viết hoa tên riêng.',
      mucEn: 'Goal: spell the lesson words with the right tone marks and the letters e, ê; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'già', en: 'Listen and write the word.', dung: ['già'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'trẻ', dung: ['trẻ'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'khoẻ', dung: ['khoẻ', 'khỏe'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'yếu', dung: ['yếu'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'buồn', dung: ['buồn'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'vui', dung: ['vui'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: tr_ (trẻ)', nghe: 'trẻ', en: 'Choose the right tone mark.', dung: 'trẻ', sai: ['tré', 'trẽ'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: y_u (yếu)', nghe: 'yếu', dung: 'yếu', sai: ['yêu', 'yểu'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'e', en: 'Listen to the letter name and tap the letter.', dung: 'e', sai: ['ê', 'a'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'ê', dung: 'ê', sai: ['e', 'â'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng (e hay ê?)', nghe: 'quả khế', en: 'e or ê? Choose the correct spelling.', dung: 'quả khế', sai: ['quả khé'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “chị liên vui lắm.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Chị Liên vui lắm.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Bà em khoẻ lắm.', en: 'Listen and write the sentence.', hoa: true, dung: ['Bà em khoẻ lắm.', 'Bà em khỏe lắm.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Bố mẹ em thế nào?', hoa: true, dung: ['Bố mẹ em thế nào?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Hỏi: … thế nào?', 'Bố mẹ em thế nào? Chị Liên thế nào?', ['Hỏi người đó ra sao (khoẻ, vui…). “thế nào” đứng cuối câu.', '“How is …?” “thế nào” goes at the end.']],
          ['Người + từ chỉ đặc điểm (không có “là”)', 'Bố mẹ em khoẻ. Bà em yếu.', ['Trước khoẻ, yếu, vui, già… không dùng “là”. Nói “Bà em yếu.”, không nói “Bà em là yếu.”', 'No “là” before words like khoẻ, vui: “Bà em yếu.” = My grandma is weak.']],
          ['rất + từ · từ + lắm', 'Ông em rất khoẻ. Vui lắm.', ['Cả hai làm nghĩa mạnh hơn. “rất” đứng trước, “lắm” đứng sau. Không dùng cả hai trong một câu.', 'Both mean “very”: “rất” goes before, “lắm” after. Use only one.']],
          ['Cảm ơn + người', 'Cảm ơn anh. Bố mẹ em khoẻ ạ.', ['Khi được hỏi thăm gia đình, cảm ơn người hỏi rồi mới trả lời.', 'Thank the person who asks about your family, then answer.']]
        ]
      },
      ghiChu: '“khoẻ” và “khỏe” đều gặp; sách viết “khoẻ”.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Ông', 'em', 'rất', 'khoẻ.'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Chị Liên VUI LẮM.”', en: 'Make a question for the capitalised part.', dung: 'Chị Liên thế nào?', sai: ['Chị Liên làm gì đó?', 'Chị Liên là ai?'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Bà tôi yếu.', sai: ['Bà tôi là yếu.'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Mẹ tôi vui lắm.', sai: ['Mẹ tôi lắm vui.', 'Mẹ tôi vui rất.'] },
        { loai: 'go', hoi: 'Điền từ ngược nghĩa: già – ___', en: 'Write the opposite word.', dung: ['trẻ'] },
        { loai: 'go', hoi: 'Điền từ ngược nghĩa: khoẻ – ___', en: 'Write the opposite word.', dung: ['yếu'] }
      ]
    }
  ]
};
