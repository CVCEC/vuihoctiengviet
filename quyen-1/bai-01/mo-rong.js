/* Quyển 1 – Bài 1 «Đây là ai?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Đã duyệt 17-11-2026 (bảng duyệt mẫu Q1 Bài 1). Chỉ dùng từ và mẫu câu của Bài 1, thêm lời chào lễ phép.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  // Tệp giọng có sẵn của sách / giọng AI của trường cho câu trùng chữ; câu khác tạm đọc bằng giọng máy (TTV.phat).
  tep: {
    'Chào Mai!': '../bai-03/audio/ht-2.mp3',
    'Đây là mẹ tôi.': '../../am-ai/9d5b6aea8607.mp3',
    'Cháu chào cô ạ.': '../../am-ai/49616bae7250.mp3',
    'Chào cháu.': '../bai-02/audio/p2b.mp3',
    'Đây là ba tôi.': '../../am-ai/9d99752cb652.mp3',
    'Đây là má tôi.': '../../am-ai/67fd42d847d4.mp3',
    'chị': '../../am-ai/bc2bda9d7913.mp3',
    'anh': '../../am-ai/768cb132f57f.mp3',
    'á': 'audio/hc-aw.mp3',
    'ớ': 'audio/hc-aa.mp3',
    'Đây là ai?': '../../am-ai/77d1536aeff8.mp3'
  },
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “Đây là ai?” và câu giới thiệu người trong gia đình, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand “Who is this?” and short introductions of family members, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai đến nhà Nam', cau: [
          ['Nam', 'Chào Mai!'], ['Mai', 'Chào Nam! Đây là ai?'], ['Nam', 'Đây là mẹ tôi.'],
          ['Mai', 'Cháu chào cô ạ.'], ['Mẹ Nam', 'Chào cháu.'], ['Nam', 'Còn đây là chị tôi.']] },
        { ten: 'Hội thoại B – Xem ảnh gia đình Mai', cau: [
          ['Nam', 'Đây là ai, Mai?'], ['Mai', 'Đây là ba tôi.'], ['Nam', 'Còn đây là ai?'],
          ['Mai', 'Đây là má tôi.'], ['Nam', 'Còn đây?'], ['Mai', 'Đây là anh tôi. Còn đây là em tôi.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Mai hỏi gì?', en: 'What does Mai ask?', dung: 'Đây là ai?', sai: ['Đây là gì?', 'Bạn là ai?'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Nam giới thiệu những ai? (chọn 2)', en: 'Who does Nam introduce? (choose 2)', dung: ['mẹ', 'chị'], sai: ['bố', 'em'] },
        { loai: 'chon', hoi: 'Hội thoại A: Mai chào mẹ Nam thế nào?', en: 'How does Mai greet Nam’s mother?', dung: 'Cháu chào cô ạ.', sai: ['Chào Nam!', 'Đây là mẹ tôi.'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp đúng thứ tự Mai giới thiệu', en: 'Put the people in the order Mai introduces them.', dung: ['ba', 'má', 'anh', 'em'] },
        { loai: 'go', hoi: 'Nghe và điền: “Đây là ___ tôi.”', nghe: 'Đây là ba tôi.', en: 'Listen and fill in the missing word.', dung: ['ba'] },
        { loai: 'chon', hoi: 'Mai gọi bố mẹ là gì?', en: 'What does Mai call her parents?', dung: 'ba, má', sai: ['bố, mẹ', 'anh, chị'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: giới thiệu gia đình em',
      muc: 'viết một đoạn ngắn 3–5 câu đơn giới thiệu gia đình.',
      mucEn: 'Goal: write 3–5 simple sentences introducing your family.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Đây là gia đình tôi. Đây là bố tôi. Đây là mẹ tôi. Đây là chị tôi. Tôi là Nam.' },
      tu: ['bố', 'mẹ', 'ba', 'má', 'anh', 'chị', 'em'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Đây là ', ' tôi.'], ['Đây là ', ' tôi.'], ['Đây là ', ' tôi.']] },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu, thay bằng người trong gia đình em.', en: 'Medium: write 3 sentences like the model, about your own family.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: câu đầu “Đây là gia đình tôi.”, câu cuối giới thiệu chính em “Tôi là …”.', en: 'Hard: write 5 sentences. Start with “Đây là gia đình tôi.” and end with “Tôi là …”.', soCau: 5 }
      },
      tuKiemTra: ['Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Tên người viết hoa: Nam, Mai.', 'Đủ dấu thanh: bố, mẹ, má, chị.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ của bài, đúng dấu thanh, đúng chữ a – ă – â và viết hoa tên riêng.',
      mucEn: 'Goal: spell the lesson words with the right tone marks and the letters a, ă, â; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bố', en: 'Listen and write the word.', dung: ['bố'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'mẹ', dung: ['mẹ'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'ba', dung: ['ba'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'má', dung: ['má'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'chị', dung: ['chị'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'anh', dung: ['anh'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: m_ (người sinh ra em)', en: 'Choose the right tone mark.', dung: 'mẹ', sai: ['mé', 'me'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: b_ (bố)', nghe: 'bố', dung: 'bố', sai: ['bỏ', 'bộ'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: ch_ (chị)', nghe: 'chị', dung: 'chị', sai: ['chí', 'chì'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'á', en: 'Listen to the letter name and tap the letter.', dung: 'ă', sai: ['a', 'â'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'ớ', dung: 'â', sai: ['a', 'ă'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “đây là mai.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Đây là Mai.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Đây là mẹ tôi.', en: 'Listen and write the sentence.', hoa: true, dung: ['Đây là mẹ tôi.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Đây là ai?', hoa: true, dung: ['Đây là ai?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Đây là + danh từ', 'Đây là Mai. Đây là mẹ Nam.', ['Giới thiệu người, vật ở gần. “là” đứng trước danh từ.', '“This is …”. “là” links to a noun.']],
          ['Hỏi với “ai”', 'Đây là ai?', ['“ai” = người nào; đặt ở chỗ của câu trả lời. Trả lời: Đây là + người.', '“ai” = who; it stays where the answer goes.']],
          ['Sở hữu: danh từ + người', 'mẹ tôi, mẹ Nam, ba Mai', ['Người sở hữu đứng sau. Với người trong gia đình thường không cần “của”; “mẹ của tôi” cũng đúng, nhấn mạnh hơn.', 'The owner comes after: “mẹ tôi” = my mother.']],
          ['Từ xưng hô theo vùng', 'bố, mẹ (Nam) · ba, má (Mai)', ['Cả hai cách đều đúng; bố, mẹ hay dùng ở miền Bắc, ba, má ở miền Nam.', 'Both are correct; regional usage.']]
        ]
      },
      ghiChu: '“Đây là gì?” (gì = cái gì) chỉ nhắc để so sánh; học kỹ ở Bài 6 “Kia là con gì?”.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Đây', 'là', 'mẹ', 'tôi.'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in đậm: “Đây là CHỊ NAM.”', en: 'Make a question for the capitalised part.', dung: 'Đây là ai?', sai: ['Đây là gì?', 'Chị Nam là ai?'] },
        { loai: 'chon', hoi: 'Viết ngắn lại: “Đây là bố của tôi.”', en: 'Make it shorter.', dung: 'Đây là bố tôi.', sai: ['Đây là tôi bố.', 'Đây bố tôi.'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Đây là anh Mai.', sai: ['Đây là Mai anh.'] }
      ]
    }
  ]
};
