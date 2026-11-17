/* Quyển 2 – Bài 05 «Ôn tập và học chữ» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Ôn tổng hợp Quyển 2 Bài 1–4 (họ hàng, tả người, ngôi nhà, việc nhà) và chữ e, ê, l, y, b.
   Dạng bài: assets/js/mo-rong.js. Chưa có tệp ghi âm: câu tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu hội thoại ngắn về họ hàng, tính tình, ngôi nhà và việc nhà, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand short conversations about relatives, personality, the home and housework, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Nam cho Mai xem ảnh gia đình', cau: [
          ['Nam', 'Mai ơi, đây là ảnh gia đình tớ.'], ['Mai', 'Đây là ai?'],
          ['Nam', 'Đây là cô của tớ. Cô tớ là bác sĩ.'], ['Mai', 'Cô cậu thế nào?'],
          ['Nam', 'Cô tớ rất vui vẻ và thân thiện.'], ['Mai', 'Còn đây là em họ của cậu à?'],
          ['Nam', 'Đúng. Em ấy là con của cô tớ. Em ấy rất dễ thương.']] },
        { ten: 'Hội thoại B – Liên giúp mẹ', cau: [
          ['Mẹ', 'Liên ơi, con đang ở đâu?'], ['Liên', 'Con đang ở trong phòng ngủ ạ.'],
          ['Mẹ', 'Con đang làm gì đó?'], ['Liên', 'Con đang quét dọn ạ.'],
          ['Mẹ', 'Con lau bát đĩa giúp mẹ được không?'], ['Liên', 'Vâng, con làm được ạ. Bát đĩa ở trong phòng bếp, phải không mẹ?'],
          ['Mẹ', 'Phải. Mẹ sẽ tưới cây ở vườn.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Cô của Nam làm nghề gì?', en: 'What is the job of Nam’s aunt?', dung: 'bác sĩ', sai: ['giáo viên', 'thợ xây'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Cô của Nam thế nào? (chọn 2)', en: 'What is Nam’s aunt like? (choose 2)', dung: ['vui vẻ', 'thân thiện'], sai: ['nghiêm', 'hiền'] },
        { loai: 'chon', hoi: 'Hội thoại A: Em họ của Nam là con của ai?', en: 'Whose child is Nam’s cousin?', dung: 'cô của Nam', sai: ['dì của Nam', 'bác của Nam'] },
        { loai: 'chon', hoi: 'Hội thoại B: Liên đang ở đâu?', en: 'Where is Liên?', dung: 'ở trong phòng ngủ', sai: ['ở trong phòng bếp', 'ở vườn'] },
        { loai: 'chon', hoi: 'Hội thoại B: Mẹ nhờ Liên làm gì?', en: 'What does the mother ask Liên to do?', dung: 'lau bát đĩa', sai: ['quét dọn', 'tưới cây'] },
        { loai: 'go', hoi: 'Nghe và điền: “Mẹ sẽ ___ ở vườn.”', nghe: 'Mẹ sẽ tưới cây ở vườn.', en: 'Listen and fill in the missing words.', dung: ['tưới cây'] },
        { loai: 'xep', hoi: 'Hội thoại A: xếp lại câu của Nam', en: 'Put the words in order.', dung: ['Em ấy', 'là con', 'của', 'cô tớ.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: gia đình và ngôi nhà của em',
      muc: 'viết một đoạn ngắn 3–5 câu về gia đình và ngôi nhà, dùng các mẫu câu đã học ở Bài 1–4.',
      mucEn: 'Goal: write 3–5 simple sentences about your family and your home, using the patterns from Lessons 1–4.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Gia đình tôi có bốn người: bố, mẹ, chị Liên và tôi. Nhà tôi có 6 phòng. Bố tôi hơi nghiêm. Mẹ tôi rất hiền. Chị Liên chăm nhất nhà. Chủ nhật, tôi cho mèo ăn giúp mẹ.' },
      tu: ['hiền', 'vui vẻ', 'thân thiện', 'chăm chỉ', 'nghiêm'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Bố tôi khá ', '.'], ['Bà tôi rất ', '.'], ['Chú tôi rất ', '.']], xong: 'Đúng rồi! Em đã tả người trong gia đình em.' },
        vua: { huong: 'Viết 3 câu: gia đình em có mấy người, một người thân thế nào, nhà em có mấy phòng.', en: 'Medium: write 3 sentences: how many people in your family, what one person is like, how many rooms your home has.', soCau: 3 },
        kho: { huong: 'Viết 5 câu về gia đình và ngôi nhà: người thân là ai, thế nào, làm nghề gì; trong phòng em thích có gì; em giúp được việc nhà gì.', en: 'Hard: write 5 sentences about your family and home: who, what they are like, their job; what is in your favourite room; how you help at home.', soCau: 5 }
      },
      tuKiemTra: ['Viết hoa đầu câu và tên riêng (Liên, Hà Nội); cuối câu có dấu chấm.', 'Dùng đúng: rất / khá / hơi + từ tả người; đang + việc làm; … giúp + người.', 'Đếm đồ vật có cái, bộ, bức: một cái giường, một bức tranh.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ đã học ở Bài 1–5, đúng dấu thanh, đúng chữ e – ê, l, y, b và viết hoa tên riêng.',
      mucEn: 'Goal: spell words from Lessons 1–5 with the right tone marks and the letters e, ê, l, y, b; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'dưa lê', en: 'Listen and write the word.', dung: ['dưa lê'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bờ đê', dung: ['bờ đê'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bè nứa', dung: ['bè nứa'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'dượng', dung: ['dượng'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nghiêm', dung: ['nghiêm'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tủ lạnh', dung: ['tủ lạnh'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng (em bé)', nghe: 'bé', en: 'Listen and choose the correct word.', dung: 'bé', sai: ['bè', 'bẻ'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng (con bê)', nghe: 'bê', dung: 'bê', sai: ['bế', 'be'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'ê', en: 'Listen to the letter name and tap the letter.', dung: 'ê', sai: ['e'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'lờ', dung: 'l', sai: ['n', 'đ'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'bờ', dung: 'b', sai: ['đ', 'd'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “dì lê đưa bé ly đi bộ.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Dì Lê đưa bé Ly đi bộ.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Dì đỡ bé.', en: 'Listen and write the sentence.', hoa: true, dung: ['Dì đỡ bé.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'ôn và dùng đúng 4 mẫu câu hỏi – trả lời của Bài 1–4.',
      mucEn: 'Goal: review and use the 4 question–answer patterns from Lessons 1–4.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Đây là ai? – … của …', 'Đây là ai? – Đây là ông nội của em.', ['Hỏi và giới thiệu người thân. “của” đứng trước người sở hữu.', 'Who is this? “của” = of / ’s.']],
          ['… thế nào?', 'Bố bạn thế nào? – Bố tớ rất nghiêm.', ['Hỏi tính tình. Trả lời: rất / khá / hơi + từ tả người; “nhất” đứng sau.', 'What is … like? Use rất / khá / hơi before, “nhất” after.']],
          ['Trong … có gì? / … ở đâu?', 'Trong phòng bếp có gì? – Phòng khách ở tầng 1.', ['Hỏi đồ vật trong phòng và chỗ của một nơi.', 'What is in …? / Where is …?']],
          ['… giúp + người + được không?', 'Mẹ đang nấu cơm. Con cho mèo ăn giúp mẹ được không?', ['Nói mình đang làm gì, rồi nhờ giúp lễ phép.', 'Say what you are doing, then ask politely for help.']]
        ]
      },
      cauHoi: [
        { loai: 'chon', hoi: 'Chọn câu hỏi đúng cho câu trả lời: “Bố tớ rất nghiêm.”', en: 'Choose the right question for the answer.', dung: 'Bố bạn thế nào?', sai: ['Bố bạn làm nghề gì?', 'Đây là ai?'] },
        { loai: 'chon', hoi: 'Chọn câu hỏi đúng cho câu trả lời: “Phòng khách ở tầng 1.”', dung: 'Phòng khách ở đâu?', sai: ['Trong phòng khách có gì?', 'Nhà cậu có mấy phòng?'] },
        { loai: 'chon', hoi: 'Chọn câu hỏi đúng cho câu trả lời: “Trong phòng bếp có một cái tủ lạnh.”', dung: 'Trong phòng bếp có gì?', sai: ['Phòng bếp ở đâu?', 'Phòng bếp thế nào?'] },
        { loai: 'xep', hoi: 'Xếp từ thành câu hỏi', en: 'Put the words in order to make a question.', dung: ['Anh', 'tưới nước', 'giúp em', 'được không?'] },
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Bạn Tú', 'vui vẻ', 'nhất.'] },
        { loai: 'go', hoi: 'Điền từ: “Em ấy là con ___ cô tớ.”', en: 'Fill in the missing word.', dung: ['của'] }
      ]
    }
  ]
};
