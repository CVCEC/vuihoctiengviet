/* Quyển 2 – Bài 7 «Bạn thích đi du lịch chứ?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Chưa có tệp ghi âm: câu được tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu người nói thích làm gì, đi đâu (tắm biển, leo núi, bảo tàng, nhà hát…) và câu hỏi “… chứ?”, “… à?”.',
      mucEn: 'Goal: understand what people like to do and where they go (beach, mountains, museum, theatre…) and questions with “chứ?” and “à?”. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai và Nam nói về du lịch', cau: [
          ['Mai', 'Nam ơi, bạn thích đi du lịch chứ?'], ['Nam', 'Tớ thích lắm. Tớ thích leo núi và đi rừng.'],
          ['Mai', 'Bạn thích tắm biển chứ?'], ['Nam', 'Không. Tớ không thích tắm biển. Còn bạn?'],
          ['Mai', 'Tớ thích tắm biển. Tớ đã đi Vũng Tàu.'], ['Nam', 'Vũng Tàu đẹp chứ?'],
          ['Mai', 'Đẹp lắm. Gió biển mát lắm.']] },
        { ten: 'Hội thoại B – Anh Dũng hỏi Liên', cau: [
          ['Dũng', 'Liên ơi, hôm nay em đi bảo tàng à?'], ['Liên', 'Không ạ. Em đi triển lãm. Mẹ em cũng đi.'],
          ['Dũng', 'Bố em cũng đi triển lãm chứ?'], ['Liên', 'Không. Bố em đi nhà hát, xem hát.'],
          ['Dũng', 'Còn ông bà em?'], ['Liên', 'Ông em đi chợ. Bà em đi chùa.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'nhieu', hoi: 'Hội thoại A: Nam thích gì? (chọn 2)', en: 'What does Nam like? (choose 2)', dung: ['leo núi', 'đi rừng'], sai: ['tắm biển', 'cắm trại'] },
        { loai: 'chon', hoi: 'Hội thoại A: Mai đã đi đâu?', en: 'Where has Mai been?', dung: 'Vũng Tàu', sai: ['Hà Nội', 'Cà Mau'] },
        { loai: 'go', hoi: 'Nghe và điền: “Gió biển ___ lắm.”', nghe: 'Gió biển mát lắm.', en: 'Listen and fill in the missing word.', dung: ['mát'] },
        { loai: 'xep', hoi: 'Hội thoại A: xếp lại câu Mai hỏi', en: 'Put Mai’s question back in order.', dung: ['Bạn', 'thích', 'đi du lịch', 'chứ?'] },
        { loai: 'chon', hoi: 'Hội thoại B: Hôm nay Liên đi đâu?', en: 'Where does Liên go today?', dung: 'đi triển lãm', sai: ['đi bảo tàng', 'đi nhà hát'] },
        { loai: 'chon', hoi: 'Hội thoại B: Ai đi nhà hát?', en: 'Who goes to the theatre?', dung: 'bố Liên', sai: ['mẹ Liên', 'ông Liên', 'bà Liên'] },
        { loai: 'chon', hoi: 'Hội thoại B: Bà Liên đi đâu?', en: 'Where does Liên’s grandmother go?', dung: 'đi chùa', sai: ['đi chợ', 'đi nhà thờ'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: em thích đi đâu?',
      muc: 'viết một đoạn ngắn 3–5 câu về nơi em thích đi và việc em thích làm.',
      mucEn: 'Goal: write 3–5 sentences about places you like to go and things you like to do.',
      mau: { ten: 'Đoạn mẫu (Mai viết)', chu: 'Tôi thích đi du lịch. Tôi thích tắm biển và cắm trại. Tôi đã đi Vũng Tàu vào mùa hè. Vũng Tàu có biển xanh, đẹp lắm. Bố mẹ tôi cũng thích tắm biển.' },
      tu: ['leo núi', 'đi rừng', 'tắm biển', 'cắm trại', 'đi bảo tàng', 'đi nhà hát', 'đi triển lãm'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Tôi thích ', ' lắm.'], ['Tôi không thích ', '.'], ['Bố mẹ tôi thích ', '.']], xong: 'Đúng rồi! Em đã nói em thích và không thích làm gì.' },
        vua: { huong: 'Viết 3 câu: em thích làm gì, em không thích làm gì, bố mẹ (hoặc bạn) em thích làm gì.', en: 'Medium: write 3 sentences: what you like, what you don’t like, what your family (or a friend) likes.', soCau: 3 },
        kho: { huong: 'Viết 5 câu về du lịch: em thích làm gì, em thích gì hơn, em đã đi đâu, nơi đó thế nào.', en: 'Hard: write 5 sentences about travel: what you like, what you like more, where you have been, what it is like.', soCau: 5 }
      },
      tuKiemTra: ['Tên nơi chốn viết hoa: Vũng Tàu, Hà Nội.', 'Viết đúng gh, ngh trước e, ê, i: ghế, nghỉ hè.', 'Đủ dấu thanh: tắm biển, cắm trại, bảo tàng, triển lãm.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ của bài, đúng dấu thanh, đúng chữ g – gh – gi, ng – ngh và viết hoa tên riêng.',
      mucEn: 'Goal: spell the lesson words with the right tone marks and the letters g, gh, gi, ng, ngh; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'leo núi', en: 'Listen and write the word.', dung: ['leo núi'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tắm biển', dung: ['tắm biển'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'cắm trại', dung: ['cắm trại'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bảo tàng', dung: ['bảo tàng'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'triển lãm', dung: ['triển lãm'] },
        { loai: 'chon', hoi: 'Chọn cách viết đúng (gh đứng trước e, ê, i)', nghe: 'ghế', en: 'Choose the right spelling: gh is used before e, ê, i.', dung: 'ghế', sai: ['gế'] },
        { loai: 'chon', hoi: 'Chọn cách viết đúng (ngh đứng trước e, ê, i)', nghe: 'nghỉ hè', en: 'Choose the right spelling: ngh is used before e, ê, i.', dung: 'nghỉ hè', sai: ['ngỉ hè', 'nghĩ hè'] },
        { loai: 'chon', hoi: 'Chọn cách viết đúng', nghe: 'ngô', dung: 'ngô', sai: ['nghô'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'gà', en: 'Listen and choose the right word.', dung: 'gà', sai: ['già', 'ghà'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'già', dung: 'già', sai: ['gà', 'dà'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: chu_ (nơi bà Liên đi)', nghe: 'chùa', en: 'Choose the right tone mark.', dung: 'chùa', sai: ['chúa', 'chủa'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “tớ đã đi vũng tàu.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Tớ đã đi Vũng Tàu.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Bạn thích đi du lịch chứ?', en: 'Listen and write the sentence.', hoa: true, dung: ['Bạn thích đi du lịch chứ?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Nghỉ hè, Nga ở nhà bà.', hoa: true, dung: ['Nghỉ hè, Nga ở nhà bà.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['… chứ?', 'Bạn thích đi du lịch chứ?', ['Câu hỏi khi người hỏi nghĩ câu trả lời là “có”. Trả lời: “Đúng. …” hoặc “Không. …”.', 'A question when you expect “yes”: “You like …, don’t you?”']],
          ['… à?', 'Bạn thích tắm biển à? Hôm nay, em đi nhà hát à?', ['Hỏi lại điều mình đoán hoặc vừa biết.', 'Checks something you guess or have just heard: “So you …?”']],
          ['thích … hơn', 'Tớ cũng thích tắm biển. Nhưng tớ thích cắm trại hơn.', ['So sánh hai việc; “hơn” đứng cuối.', '“thích A hơn” = like A more (prefer A).']],
          ['cũng + động từ', 'Tớ cũng thích tắm biển. Bố mẹ em cũng đi nhà hát chứ?', ['“cũng” = giống người khác; đứng trước động từ.', '“cũng” = also / too; it comes before the verb.']]
        ]
      },
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Tớ', 'thích', 'cắm trại', 'hơn.'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Tớ cũng thích tắm biển.', sai: ['Tớ thích cũng tắm biển.', 'Cũng tớ thích tắm biển.'] },
        { loai: 'chon', hoi: 'Trả lời: “Bạn thích leo núi chứ?” (em thích)', en: 'Answer the question: you like it.', dung: 'Đúng. Tớ thích leo núi.', sai: ['Không. Tớ thích leo núi.', 'Đúng. Tớ không thích leo núi.'] },
        { loai: 'go', hoi: 'Điền một từ: “Tớ thích tắm biển, nhưng tớ thích cắm trại ___.”', en: 'Fill in one word.', dung: ['hơn'] },
        { loai: 'chon', hoi: 'Mai vừa nghe Nam nói đi bảo tàng. Mai hỏi lại thế nào?', en: 'Mai has just heard Nam is going to the museum. How does she check?', dung: 'Bạn đi bảo tàng à?', sai: ['Bạn đi bảo tàng hơn?', 'Bạn đi à bảo tàng?'] }
      ]
    }
  ]
};
