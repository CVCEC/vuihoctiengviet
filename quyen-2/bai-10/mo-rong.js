/* Quyển 2 – Bài 10 «Ôn tập và học chữ» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước. Ôn tổng hợp Bài 6–9.
   Dạng bài: assets/js/mo-rong.js. Chưa có tệp ghi âm: câu được tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu hội thoại dài hơn có thời tiết, sở thích, việc đã làm (“đã được … bao giờ chưa?”) và việc sẽ làm.',
      mucEn: 'Goal: understand longer conversations about weather, likes, experiences (“Have you ever …?”) and plans. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai và Nam nói về Tết', cau: [
          ['Mai', 'Nam ơi, bao giờ bạn nghỉ Tết?'], ['Nam', 'Tuần sau tớ sẽ nghỉ Tết.'],
          ['Mai', 'Bạn đã được gói bánh chưng bao giờ chưa?'], ['Nam', 'Rồi. Năm ngoái tớ đã được gói bánh chưng rồi.'],
          ['Mai', 'Tết này bạn sẽ làm gì?'], ['Nam', 'Tớ sẽ về quê. Ở quê, tớ sẽ thả diều.'],
          ['Mai', 'Bây giờ ở quê bạn trời thế nào?'], ['Nam', 'Trời lạnh, có gió.']] },
        { ten: 'Hội thoại B – Anh Dũng rủ Liên ra Bờ Hồ', cau: [
          ['Dũng', 'Liên ơi, em đã được xem múa rối nước bao giờ chưa?'], ['Liên', 'Chưa ạ. Em chưa bao giờ được xem múa rối nước.'],
          ['Dũng', 'Chủ nhật anh sẽ đi xem ở Bờ Hồ. Em đi chứ?'], ['Liên', 'Vâng, em thích lắm! Chủ nhật trời có mưa không anh?'],
          ['Dũng', 'Không. Chủ nhật trời nắng, khá ấm.'], ['Liên', 'Em sẽ đạp xe ra Bờ Hồ.'],
          ['Dũng', 'Được. Anh sẽ đi bộ.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Bao giờ Nam nghỉ Tết?', en: 'When does Nam’s Tết holiday start?', dung: 'tuần sau', sai: ['Chủ nhật', 'sang năm'] },
        { loai: 'chon', hoi: 'Hội thoại A: Nam đã được gói bánh chưng bao giờ chưa?', en: 'Has Nam ever wrapped bánh chưng?', dung: 'Rồi. Năm ngoái Nam đã được gói bánh chưng.', sai: ['Chưa. Nam chưa bao giờ được gói bánh chưng.', 'Rồi. Năm kia Nam đã được gói bánh chưng.'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Tết này, Nam sẽ làm gì? (chọn 2)', en: 'What will Nam do this Tết? (choose 2)', dung: ['về quê', 'thả diều'], sai: ['gói bánh chưng', 'xem múa rối nước'] },
        { loai: 'go', hoi: 'Nghe và điền: “Trời lạnh, có ___.”', nghe: 'Trời lạnh, có gió.', en: 'Listen and fill in the missing word.', dung: ['gió'] },
        { loai: 'chon', hoi: 'Hội thoại B: Liên đã được xem múa rối nước bao giờ chưa?', en: 'Has Liên ever seen water puppetry?', dung: 'Chưa.', sai: ['Rồi.'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Chủ nhật thời tiết thế nào? (chọn 2)', en: 'What will the weather be like on Sunday? (choose 2)', dung: ['nắng', 'khá ấm'], sai: ['mưa', 'lạnh'] },
        { loai: 'go', hoi: 'Nghe và điền: “Em sẽ ___ ra Bờ Hồ.”', nghe: 'Em sẽ đạp xe ra Bờ Hồ.', en: 'Listen and fill in the missing words.', dung: ['đạp xe'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: việc em đã làm và sẽ làm',
      muc: 'viết một đoạn ngắn 3–6 câu về việc em đã được làm, chưa được làm và sẽ làm.',
      mucEn: 'Goal: write 3–6 sentences about things you have done, have never done, and will do.',
      mau: { ten: 'Đoạn mẫu (Liên viết)', chu: 'Tuần sau, tôi sẽ nghỉ Tết. Tôi sẽ về quê và gói bánh chưng. Năm ngoái, tôi đã được thả diều ở quê. Tôi chưa bao giờ được xem múa rối nước. Chủ nhật, tôi sẽ đi xem múa rối nước ở Bờ Hồ.' },
      tu: ['gói bánh chưng', 'làm bánh Trung thu', 'thả diều', 'múa sạp', 'xem múa rối nước'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Tôi đã được ', ' rồi.'], ['Tôi chưa bao giờ được ', '.'], ['Chủ nhật, tôi sẽ ', '.']], xong: 'Đúng rồi! Em đã nói việc đã làm, chưa làm và sẽ làm.' },
        vua: { huong: 'Viết 3 câu: một việc em đã được làm, một việc em chưa bao giờ được làm, một việc em sẽ làm.', en: 'Medium: write 3 sentences: something you have done, something you have never done, something you will do.', soCau: 3 },
        kho: { huong: 'Viết 6 câu về ngày nghỉ của em (nghỉ hè hoặc nghỉ Tết): thời tiết, em thích gì, em đã làm gì, em sẽ làm gì.', en: 'Hard: write 6 sentences about your holiday (summer or Tết): the weather, what you like, what you did, what you will do.', soCau: 6 }
      },
      tuKiemTra: ['Có đủ: “đã … rồi”, “chưa …”, “sẽ …”.', 'Viết hoa: Tết, Trung thu, Bờ Hồ, Chủ nhật.', 'Viết đúng vần am, ap: tấm, sạp, đạp, tháp.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng vần am, ap và các vần có m, p cuối; ôn chữ của Bài 6–9 và viết hoa tên riêng.',
      mucEn: 'Goal: spell words with -am, -ap and other -m, -p endings; review the letters of Lessons 6–9; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'cam', en: 'Listen and write the word.', dung: ['cam'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'múa sạp', dung: ['múa sạp'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tập múa', dung: ['tập múa'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'sấm chớp', dung: ['sấm chớp'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bánh chưng', dung: ['bánh chưng'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'thả diều', dung: ['thả diều'] },
        { loai: 'chon', hoi: 'Chọn vần đúng', nghe: 'đạp xe', en: 'Choose the right rhyme.', dung: 'đạp xe', sai: ['đạm xe', 'đạt xe'] },
        { loai: 'chon', hoi: 'Chọn vần đúng', nghe: 'khám', dung: 'khám', sai: ['kháp', 'khán'] },
        { loai: 'chon', hoi: 'Chọn vần đúng', nghe: 'cặp', dung: 'cặp', sai: ['cặm', 'cặt'] },
        { loai: 'chon', hoi: 'Chọn cách viết đúng', nghe: 'kịp giờ', en: 'Choose the right spelling.', dung: 'kịp giờ', sai: ['cịp giờ', 'kịp dờ'] },
        { loai: 'chon', hoi: 'Chọn cách viết đúng', nghe: 'nghỉ Tết', dung: 'nghỉ Tết', sai: ['ngỉ Tết', 'nghĩ Tết'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “giữa hồ có tháp rùa.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Giữa hồ có Tháp Rùa.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Hôm nay trời có sương mù.', en: 'Listen and write the sentence.', hoa: true, dung: ['Hôm nay trời có sương mù.', 'Hôm nay, trời có sương mù.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Bạn đã được gói bánh chưng bao giờ chưa?', hoa: true, dung: ['Bạn đã được gói bánh chưng bao giờ chưa?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'ôn và dùng đúng các điểm ngữ pháp của Bài 6–9, thêm câu hỏi “đã được … bao giờ chưa?”.',
      mucEn: 'Goal: review the grammar of Lessons 6–9 and use “Have you ever …?”.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['đã được … bao giờ chưa?', 'Bạn đã được gói bánh chưng bao giờ chưa?', ['Hỏi một việc đã có lần nào làm chưa. Trả lời: “Rồi. … đã được … rồi.” / “Chưa. … chưa bao giờ được …”.', '“Have you ever …?” Answer “Rồi …” (yes) or “Chưa …” (never).']],
          ['đã – đang – sẽ', 'Năm kia tớ đã được gói bánh chưng. Bố đang làm việc. Tuần sau tớ sẽ nghỉ Tết.', ['đã: việc đã qua; đang: việc lúc nói; sẽ: việc sắp tới.', 'đã = past, đang = now, sẽ = future; before the verb.']],
          ['Bao giờ …? (đầu câu / cuối câu)', 'Bao giờ bạn nghỉ Tết? – Anh đi bao giờ?', ['Đầu câu: hỏi việc sắp tới. Cuối câu: hỏi việc đã qua.', 'At the start: future; at the end: past.']],
          ['… chứ? / … thế nào?', 'Bạn thích tắm biển chứ? – Hôm nay trời thế nào?', ['“chứ?”: người hỏi nghĩ câu trả lời là “có”. “thế nào?”: hỏi ra sao.', '“chứ?” expects “yes”; “thế nào?” = what … like / how.']]
        ]
      },
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Tớ', 'chưa bao giờ', 'được', 'thả diều.'] },
        { loai: 'chon', hoi: 'Trả lời: “Bạn đã được làm bánh Trung thu bao giờ chưa?” (em đã làm năm kia)', en: 'Answer the question: you did it the year before last.', dung: 'Rồi. Năm kia tớ đã được làm bánh Trung thu rồi.', sai: ['Chưa. Năm kia tớ đã được làm bánh Trung thu.', 'Rồi. Tớ chưa bao giờ được làm bánh Trung thu.'] },
        { loai: 'go', hoi: 'Điền “đã”, “đang” hoặc “sẽ”: “Sang năm, tớ ___ lên lớp 2.”', en: 'Fill in “đã”, “đang” or “sẽ”.', dung: ['sẽ'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “CHỦ NHẬT tớ sẽ đi xem phim.”', en: 'Make a question for the capitalised part.', dung: 'Bao giờ bạn đi xem phim?', sai: ['Bạn đi xem phim bao giờ?', 'Bạn đã đi xem phim chưa?'] },
        { loai: 'chon', hoi: 'Em nghĩ bạn thích leo núi. Em hỏi thế nào?', en: 'You think your friend likes climbing. How do you ask?', dung: 'Bạn thích leo núi chứ?', sai: ['Bạn thích leo núi chưa?', 'Bạn thích chứ leo núi?'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Hôm nay trời nóng.', sai: ['Hôm nay có nóng.', 'Hôm nay nóng trời.'] }
      ]
    }
  ]
};
