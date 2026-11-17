/* Quyển 2 – Bài 8 «Anh đã đi vịnh Hạ Long chưa?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Chưa có tệp ghi âm: câu được tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “đã … chưa?”, câu trả lời “… rồi” / “chưa …” và thời gian đã qua (hôm kia, tháng trước, năm ngoái…).',
      mucEn: 'Goal: understand “Have you … yet?”, the answers “… rồi” / “chưa …” and past time words (the day before yesterday, last month, last year…). Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Nam hỏi Mai về Đà Lạt', cau: [
          ['Nam', 'Mai ơi, bạn đã đi Đà Lạt chưa?'], ['Mai', 'Tớ đi rồi.'],
          ['Nam', 'Bạn đi bao giờ?'], ['Mai', 'Tớ đi năm ngoái.'],
          ['Nam', 'Đà Lạt thế nào?'], ['Mai', 'Đà Lạt đẹp lắm, trời mát. Còn bạn đã đi chưa?'],
          ['Nam', 'Tớ chưa đi. Nhưng tớ đã đi vịnh Hạ Long. Tớ đi tháng trước.']] },
        { ten: 'Hội thoại B – Liên hỏi anh Dũng', cau: [
          ['Liên', 'Anh Dũng ơi, anh đã đi xem phim chưa?'], ['Dũng', 'Anh đi rồi. Anh đi hôm kia.'],
          ['Liên', 'Phim thế nào ạ?'], ['Dũng', 'Phim rất thú vị. Còn em?'],
          ['Liên', 'Em chưa đi. Tuần trước, em đi công viên.'], ['Dũng', 'Em đã đi phố cổ chưa?'],
          ['Liên', 'Em đi rồi ạ. Hè phố có phở, có cả cà phê.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Mai đã đi Đà Lạt chưa?', en: 'Has Mai been to Đà Lạt?', dung: 'Mai đi rồi.', sai: ['Mai chưa đi.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Mai đi Đà Lạt bao giờ?', en: 'When did Mai go to Đà Lạt?', dung: 'năm ngoái', sai: ['năm kia', 'tháng trước', 'năm nay'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Đà Lạt thế nào? (chọn 2)', en: 'What is Đà Lạt like? (choose 2)', dung: ['đẹp', 'trời mát'], sai: ['trời nóng', 'trời khô'] },
        { loai: 'chon', hoi: 'Hội thoại A: Nam đã đi đâu?', en: 'Where has Nam been?', dung: 'vịnh Hạ Long', sai: ['Đà Lạt', 'phố cổ'] },
        { loai: 'go', hoi: 'Nghe và điền: “Anh đi ___.”', nghe: 'Anh đi hôm kia.', en: 'Listen and fill in the missing words.', dung: ['hôm kia'] },
        { loai: 'chon', hoi: 'Hội thoại B: Tuần trước, Liên đi đâu?', en: 'Where did Liên go last week?', dung: 'đi công viên', sai: ['đi xem phim', 'đi siêu thị'] },
        { loai: 'xep', hoi: 'Xếp thời gian từ xa nhất đến gần nhất: Mai đi Đà Lạt, Nam đi vịnh Hạ Long, anh Dũng đi xem phim', en: 'Order the times from longest ago to most recent.', dung: ['năm ngoái', 'tháng trước', 'hôm kia'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: nơi em đã đi',
      muc: 'viết một đoạn ngắn 3–6 câu về những nơi em đã đi, đi bao giờ, nơi đó thế nào.',
      mucEn: 'Goal: write 3–6 sentences about places you have been, when you went and what they were like.',
      mau: { ten: 'Đoạn mẫu (anh Dũng viết)', chu: 'Năm ngoái, tôi đã đi vịnh Hạ Long. Vịnh rất đẹp. Du lịch ở đó rất thú vị. Tháng trước, tôi đi Đà Lạt. Đà Lạt mát lắm. Tôi chưa đi Cà Mau.' },
      tu: ['hôm kia', 'tuần trước', 'tháng trước', 'năm kia', 'năm ngoái'],
      muc_: {
        de: { huong: 'Chọn từ chỉ thời gian để điền vào 3 câu.', en: 'Easy: choose a time word for each blank.', khung: [['Tôi đã đi công viên ', '.'], ['Tôi đã đi siêu thị ', '.'], ['Tôi đã đi xem phim ', '.']], xong: 'Đúng rồi! Em đã nói em đi đâu và đi bao giờ.' },
        vua: { huong: 'Viết 3 câu: em đã đi đâu, em đi bao giờ, nơi đó thế nào.', en: 'Medium: write 3 sentences: where you went, when, and what it was like.', soCau: 3 },
        kho: { huong: 'Viết 6 câu: hai nơi em đã đi (đi bao giờ, nơi đó thế nào) và một nơi em chưa đi.', en: 'Hard: write 6 sentences: two places you have been (when, what they were like) and one place you have not been yet.', soCau: 6 }
      },
      tuKiemTra: ['Tên nơi chốn viết hoa: vịnh Hạ Long, Đà Lạt.', 'Việc đã làm: “đã …” hoặc “… rồi”; việc chưa làm: “chưa …”.', 'Đủ dấu thanh: năm ngoái, tháng trước, thú vị.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ chỉ thời gian, đúng dấu thanh, đúng chữ p, ph, t, qu, th và viết hoa tên riêng.',
      mucEn: 'Goal: spell the time words with the right tone marks and the letters p, ph, t, qu, th; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'năm ngoái', en: 'Listen and write the word.', dung: ['năm ngoái'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tuần trước', dung: ['tuần trước'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tháng trước', dung: ['tháng trước'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'siêu thị', dung: ['siêu thị'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'thú vị', dung: ['thú vị'] },
        { loai: 'chon', hoi: 'Chọn cách viết đúng', nghe: 'phở', en: 'Choose the right spelling.', dung: 'phở', sai: ['fở', 'phỡ'] },
        { loai: 'chon', hoi: 'Chọn cách viết đúng', nghe: 'quả', dung: 'quả', sai: ['cuả', 'qả'] },
        { loai: 'chon', hoi: 'Chọn cách viết đúng', nghe: 'thỏ', dung: 'thỏ', sai: ['tỏ', 'thọ'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng', nghe: 'năm ngoái', en: 'Choose the right tone mark.', dung: 'năm ngoái', sai: ['năm ngoài', 'năm ngoại'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'phờ', en: 'Listen to the letter name and tap the letter.', dung: 'ph', sai: ['p', 'th'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'quờ', dung: 'qu', sai: ['c', 'k'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “anh đã đi vịnh hạ long chưa?”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Anh đã đi vịnh Hạ Long chưa?'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Bạn đã đi Đà Lạt chưa?', en: 'Listen and write the sentence.', hoa: true, dung: ['Bạn đã đi Đà Lạt chưa?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Nhà bà ở phố Nhà Thờ.', hoa: true, dung: ['Nhà bà ở phố Nhà Thờ.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['đã + động từ + … chưa?', 'Anh đã đi vịnh Hạ Long chưa?', ['Hỏi một việc đã làm hay chưa làm. “chưa” đứng cuối câu.', '“Have you … (yet)?” “chưa” ends the question.']],
          ['… rồi. / chưa + động từ', 'Anh đi rồi. – Chị chưa đi.', ['Đã làm: “… rồi”. Chưa làm: “chưa + động từ”.', 'Done: “… rồi” (already); not yet: “chưa” + verb.']],
          ['… bao giờ? / … khi nào? (cuối câu)', 'Anh đi bao giờ? – Anh đi năm ngoái.', ['Từ hỏi ở cuối câu: hỏi thời gian của việc đã qua.', 'At the end of the question it asks when something happened in the past.']],
          ['Từ chỉ thời gian đã qua', 'hôm kia, tuần trước, tháng trước, năm kia, năm ngoái', ['Đứng đầu hoặc cuối câu: “Tuần trước, chị ăn ở nhà ông bà chị rồi.”', 'Past time words; at the start or the end of the sentence.']]
        ]
      },
      ghiChu: '“bao giờ” ở đầu câu hỏi việc sắp tới: học ở Bài 9 “Hè này bạn sẽ đi đâu?”.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Bạn', 'đã', 'đi', 'Đà Lạt', 'chưa?'] },
        { loai: 'chon', hoi: 'Trả lời: “Em đã đi công viên chưa?” (em đã đi)', en: 'Answer the question: you have been.', dung: 'Em đi rồi.', sai: ['Em chưa rồi.', 'Em rồi đi.'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Anh đi vịnh Hạ Long NĂM NGOÁI.”', en: 'Make a question for the capitalised part.', dung: 'Anh đi vịnh Hạ Long bao giờ?', sai: ['Anh đi vịnh Hạ Long chưa?', 'Anh đi đâu?'] },
        { loai: 'go', hoi: 'Điền một từ: “Chị ___ đi siêu thị Nhật.” (chị không đi)', en: 'Fill in one word.', dung: ['chưa'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Tuần trước, chị đã ăn món ăn Nhật.', sai: ['Chị đã ăn món ăn Nhật chưa rồi.', 'Chị chưa ăn món ăn Nhật rồi.'] }
      ]
    }
  ]
};
