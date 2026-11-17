/* Quyển 2 – Bài 11 «Bây giờ là mấy giờ?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi giờ và giờ làm các việc trong ngày, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand questions about the time and when daily activities happen, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Buổi sáng ở nhà Nam', cau: [
          ['Nam', 'Mẹ ơi, bây giờ là mấy giờ ạ?'], ['Mẹ', 'Bây giờ là 6 giờ 30 phút. Con đã ăn sáng chưa?'],
          ['Nam', 'Dạ, con ăn sáng rồi ạ. Con chào mẹ. Con đi học ạ.'], ['Mẹ', 'Mấy giờ con vào học?'],
          ['Nam', 'Hôm nay, 7 giờ 15 phút chúng con vào học ạ.'], ['Mẹ', 'Con đi xe chứ?'],
          ['Nam', 'Không ạ. Hôm nay con không vội. Con đi bộ.']] },
        { ten: 'Hội thoại B – Một ngày của Mai', cau: [
          ['Nam', 'Ở nhà, cậu thường dậy lúc mấy giờ?'], ['Mai', 'Tớ thường dậy lúc 6 giờ. Tớ tập thể dục 15 phút.'],
          ['Nam', 'Mấy giờ cậu ăn trưa?'], ['Mai', 'Tớ ăn trưa lúc 11 giờ 30 phút.'],
          ['Nam', 'Mấy giờ cậu ăn tối?'], ['Mai', 'Tớ ăn tối lúc 7 giờ kém 15 phút.'],
          ['Nam', 'Mấy giờ cậu đi ngủ?'], ['Mai', 'Tớ đi ngủ lúc 9 giờ rưỡi.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Bây giờ là mấy giờ?', en: 'What time is it now?', dung: '6 giờ 30 phút', sai: ['6 giờ 25 phút', '7 giờ 15 phút'] },
        { loai: 'go', hoi: 'Nghe và điền: “Mấy giờ con ___ học?”', nghe: 'Mấy giờ con vào học?', en: 'Listen and fill in the missing word.', dung: ['vào'] },
        { loai: 'chon', hoi: 'Hội thoại A: Hôm nay Nam đi học thế nào?', en: 'How does Nam go to school today?', dung: 'Nam đi bộ.', sai: ['Nam đi xe.', 'Nam không đi học.'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp các việc của Mai theo đúng thứ tự trong ngày', en: 'Put Mai’s activities in order.', dung: ['dậy', 'tập thể dục', 'ăn trưa', 'ăn tối', 'đi ngủ'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Nam hỏi Mai giờ làm những việc nào? (chọn 4)', en: 'Which activities does Nam ask about? (choose 4)', dung: ['dậy', 'ăn trưa', 'ăn tối', 'đi ngủ'], sai: ['đánh răng', 'ăn sáng'] },
        { loai: 'chon', hoi: 'Hội thoại B: Mai ăn tối lúc mấy giờ?', en: 'What time does Mai have dinner?', dung: '7 giờ kém 15 phút', sai: ['7 giờ 15 phút', '9 giờ 30 phút'] },
        { loai: 'go', hoi: 'Nghe và điền: “Tớ đi ngủ lúc 9 giờ ___.”', nghe: 'Tớ đi ngủ lúc 9 giờ rưỡi.', en: 'Listen and fill in the missing word.', dung: ['rưỡi', '30 phút'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: một ngày của em',
      muc: 'viết một đoạn ngắn 4–6 câu kể em làm gì, lúc mấy giờ trong một ngày.',
      mucEn: 'Goal: write 4–6 sentences about what you do and at what time during a day.',
      mau: { ten: 'Đoạn mẫu (Mai viết)', chu: 'Tôi thường dậy lúc 6 giờ. Tôi đánh răng, rửa mặt và tập thể dục. 6 giờ 30 phút, tôi ăn sáng. 7 giờ kém 15 phút, tôi đi học. Tôi ăn trưa lúc 11 giờ 30 phút. Tôi đi ngủ lúc 9 giờ rưỡi.' },
      tu: ['dậy', 'đánh răng', 'rửa mặt', 'tập thể dục', 'ăn sáng', 'ăn trưa', 'ăn tối', 'đi ngủ'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Tôi thường ', ' ở nhà.'], ['Hôm nay, tôi ', ' sớm.'], ['Bố mẹ tôi cũng ', ' sớm.']], xong: 'Đúng rồi! Em đã viết về một ngày của em.' },
        vua: { huong: 'Viết 3 câu nói em làm việc gì, lúc mấy giờ. Dùng mẫu “Tôi … lúc … giờ.”', en: 'Medium: write 3 sentences: “Tôi … lúc … giờ.” (I … at … o’clock).', soCau: 3 },
        kho: { huong: 'Viết 6 câu kể một ngày của em, từ lúc dậy đến lúc đi ngủ. Dùng “thường”, “lúc … giờ … phút”, “kém”, “rưỡi”.', en: 'Hard: write 6 sentences about your day, from getting up to going to bed. Use “thường”, “lúc … giờ … phút”, “kém”, “rưỡi”.', soCau: 6 }
      },
      tuKiemTra: ['Viết giờ đúng mẫu: 6 giờ 30 phút, 7 giờ kém 15 phút, 9 giờ rưỡi.', 'Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Đủ dấu thanh: dậy, đánh răng, rửa mặt, ăn tối.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ của bài, đúng dấu thanh, đúng vần an – at và cách viết giờ.',
      mucEn: 'Goal: spell the lesson words with the right tone marks, the rhymes an – at, and times of day.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đàn', en: 'Listen and write the word.', dung: ['đàn'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nhà hát', dung: ['nhà hát'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'rửa mặt', dung: ['rửa mặt'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tập thể dục', dung: ['tập thể dục'] },
        { loai: 'chon', hoi: 'Nghe tiếng, chọn vần đúng', nghe: 'hát', en: 'Listen to the syllable and choose its rhyme.', dung: 'at', sai: ['an', 'ap'] },
        { loai: 'chon', hoi: 'Nghe tiếng, chọn vần đúng', nghe: 'bàn', dung: 'an', sai: ['at', 'am'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Tôi ___ lúc 6 giờ.”', nghe: 'dậy', en: 'Choose the word with the right tone mark.', dung: 'dậy', sai: ['dạy', 'dày'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Bây giờ là 9 giờ ___.”', dung: 'rưỡi', sai: ['rưởi', 'rượi'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Bây giờ là 3 giờ ___ 10 phút.”', dung: 'kém', sai: ['kèm', 'kẹm'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “bây giờ là mấy giờ?”', en: 'Rewrite with a capital letter.', hoa: true, dung: ['Bây giờ là mấy giờ?'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “mai và liên đi học.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Mai và Liên đi học.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Tớ dậy lúc 6 giờ.', en: 'Listen and write the sentence.', hoa: true, dung: ['Tớ dậy lúc 6 giờ.', 'Tớ dậy lúc sáu giờ.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Con đã ăn sáng chưa?', hoa: true, dung: ['Con đã ăn sáng chưa?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Hỏi giờ: Bây giờ là mấy giờ?', 'Bây giờ là mấy giờ? – Bây giờ là 6 giờ 25 phút.', ['Trả lời: Bây giờ là + giờ + phút.', 'Asking the time. Answer: “Bây giờ là … giờ … phút.”']],
          ['Nói giờ: kém, rưỡi', '2 giờ 50 phút = 3 giờ kém 10 phút · 9 giờ 30 phút = 9 giờ rưỡi', ['“kém” = còn thiếu mấy phút nữa đến giờ sau; “rưỡi” = 30 phút.', '“kém” = minutes to the next hour; “rưỡi” = half past.']],
          ['Hỏi giờ làm việc: Mấy giờ …? / … lúc mấy giờ?', 'Mấy giờ con vào học? · Chị thường dậy lúc mấy giờ?', ['“Mấy giờ” đứng đầu câu, hoặc “lúc mấy giờ” đứng cuối câu. Trả lời: … lúc + giờ.', 'When does …? “Mấy giờ” at the start or “lúc mấy giờ” at the end.']],
          ['đã … chưa? – … rồi / chưa', 'Con đã ăn sáng chưa? – Dạ, con ăn sáng rồi ạ.', ['Hỏi việc đã làm xong hay chưa. Trả lời: … rồi (xong) hoặc chưa … (chưa xong).', 'Asks if something is done yet. Answer “… rồi” (already) or “chưa …” (not yet).']]
        ]
      },
      ghiChu: 'Với bạn bè: “Cậu dậy lúc mấy giờ?”; với người lớn thêm “ạ”: “Mẹ ơi, bây giờ là mấy giờ ạ?”.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Ở nhà,', 'chị', 'thường', 'dậy', 'lúc', 'mấy giờ?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Tớ ăn trưa lúc 11 GIỜ 30 PHÚT.”', en: 'Make a question for the capitalised part.', dung: 'Cậu ăn trưa lúc mấy giờ?', sai: ['Cậu ăn trưa ở đâu?', 'Bây giờ là mấy giờ?'] },
        { loai: 'chon', hoi: 'Cách nói khác của “2 giờ 50 phút”', en: 'Another way to say 2:50.', dung: '3 giờ kém 10 phút', sai: ['2 giờ kém 10 phút', '3 giờ 10 phút'] },
        { loai: 'chon', hoi: '“9 giờ 30 phút” còn nói là', en: 'Another way to say 9:30.', dung: '9 giờ rưỡi', sai: ['10 giờ rưỡi', '9 giờ kém 30 phút'] },
        { loai: 'chon', hoi: 'Trả lời câu hỏi “Con đã ăn sáng chưa?” (em đã ăn)', en: 'Answer: you have already eaten.', dung: 'Dạ, con ăn sáng rồi ạ.', sai: ['Dạ, con chưa ăn sáng ạ.', 'Dạ, con ăn sáng chưa ạ.'] },
        { loai: 'go', hoi: 'Điền từ: “Chị thường dậy ___ 6 giờ.”', en: 'Fill in the missing word.', dung: ['lúc'] }
      ]
    }
  ]
};
