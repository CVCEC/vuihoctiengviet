/* Quyển 2 – Bài 04 «Con rửa rau giúp mẹ được không?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Chưa có tệp ghi âm: câu tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “… đang làm gì?”, lời nhờ giúp việc nhà và câu trả lời đồng ý hoặc từ chối, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand “What is … doing?”, requests for help with housework, and yes/no answers, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Chủ nhật ở nhà Nam', cau: [
          ['Mẹ', 'Liên ơi, con đang làm gì đó?'], ['Liên', 'Con đang học ạ.'],
          ['Mẹ', 'Con nhặt rau giúp mẹ được không?'], ['Liên', 'Vâng, con nhặt rau được ạ.'],
          ['Nam', 'Mẹ ơi, con giúp mẹ được không ạ?'], ['Mẹ', 'Được. Con lau bát đĩa giúp mẹ.'],
          ['Nam', 'Dạ, con lau bát đĩa được ạ.'], ['Mẹ', 'Vậy mẹ sẽ nấu cơm.']] },
        { ten: 'Hội thoại B – Mai giúp bà', cau: [
          ['Bà', 'Mai ơi, cháu đang làm gì đó?'], ['Mai', 'Cháu đang tưới cây ạ.'],
          ['Bà', 'Cháu giặt quần áo giúp bà được không?'], ['Mai', 'Cháu không giúp bà được ạ. Cháu không biết giặt quần áo.'],
          ['Bà', 'Thế cháu quét dọn giúp bà được không?'], ['Mai', 'Dạ, cháu quét dọn được ạ.'],
          ['Bà', 'Vậy bà sẽ giặt quần áo.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Lúc mẹ hỏi, Liên đang làm gì?', en: 'What is Liên doing when her mother asks?', dung: 'Liên đang học.', sai: ['Liên đang chơi.', 'Liên đang nấu cơm.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Mẹ nhờ Liên làm gì?', en: 'What does the mother ask Liên to do?', dung: 'nhặt rau', sai: ['rửa rau', 'nấu cơm', 'lau bát đĩa'] },
        { loai: 'chon', hoi: 'Hội thoại A: Nam giúp mẹ làm gì?', en: 'How does Nam help his mother?', dung: 'lau bát đĩa', sai: ['quét dọn', 'cho mèo ăn'] },
        { loai: 'go', hoi: 'Nghe và điền: “Vậy mẹ sẽ ___ cơm.”', nghe: 'Vậy mẹ sẽ nấu cơm.', en: 'Listen and fill in the missing word.', dung: ['nấu'] },
        { loai: 'chon', hoi: 'Hội thoại B: Bà nhờ giặt quần áo. Mai trả lời thế nào?', en: 'Grandma asks Mai to do the laundry. What does Mai say?', dung: 'Cháu không giúp bà được ạ. Cháu không biết giặt quần áo.', sai: ['Dạ, cháu giặt quần áo được ạ.', 'Cháu không biết quét dọn ạ.'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Mai làm những việc gì? (chọn 2)', en: 'Which jobs does Mai do? (choose 2)', dung: ['tưới cây', 'quét dọn'], sai: ['giặt quần áo', 'nấu cơm'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp lại câu của bà', en: 'Put the words in order.', dung: ['Cháu', 'quét dọn', 'giúp bà', 'được không?'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: việc nhà em giúp gia đình',
      muc: 'viết một đoạn ngắn 3–5 câu kể mọi người trong nhà đang làm gì và em giúp được việc gì.',
      mucEn: 'Goal: write 3–5 simple sentences about what your family members are doing and how you help at home.',
      mau: { ten: 'Đoạn mẫu (Liên viết)', chu: 'Hôm nay là Chủ nhật. Mẹ tôi đang nấu cơm. Tôi rửa rau giúp mẹ. Em Nam cho mèo ăn. Bố tôi giặt quần áo.' },
      tu: ['nấu cơm', 'quét dọn', 'giặt quần áo', 'tưới cây', 'rửa rau', 'cho mèo ăn', 'lau bát đĩa'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Tôi ', ' giúp mẹ.'], ['Bố tôi đang ', '.'], ['Tôi ', ' được.']], xong: 'Đúng rồi! Em đã kể việc nhà em giúp gia đình.' },
        vua: { huong: 'Viết 3 câu: ai đang làm gì, em giúp ai việc gì.', en: 'Medium: write 3 sentences: who is doing what, and how you help.', soCau: 3 },
        kho: { huong: 'Viết 5 câu về việc nhà ở nhà em: mỗi người làm gì; em làm được việc gì; có một việc em chưa biết làm (“Tôi không biết …”).', en: 'Hard: write 5 sentences about housework at home: what each person does, what you can do, and one thing you cannot do yet (“Tôi không biết …”).', soCau: 5 }
      },
      tuKiemTra: ['“đang” đứng trước việc làm: Mẹ đang nấu cơm.', '“giúp + người” đứng sau việc làm: rửa rau giúp mẹ.', 'Đủ dấu thanh: nấu, quét, giặt, tưới, rửa.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng tên các việc nhà, đúng dấu thanh, đúng chữ m – n, ư – ưa và viết hoa tên riêng.',
      mucEn: 'Goal: spell housework words with the right tone marks and the letters m, n, ư, ưa; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nấu cơm', en: 'Listen and write the word.', dung: ['nấu cơm'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'rửa rau', dung: ['rửa rau'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tưới cây', dung: ['tưới cây'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'giặt quần áo', dung: ['giặt quần áo'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'quét dọn', dung: ['quét dọn'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'mưa', dung: ['mưa'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng (quả dừa)', nghe: 'dừa', en: 'Listen and choose the correct word.', dung: 'dừa', sai: ['dứa', 'dưa'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng (cây nứa)', nghe: 'nứa', dung: 'nứa', sai: ['nửa', 'nữa'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'nô đùa', dung: 'nô đùa', sai: ['mô đùa', 'nô đua'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'mờ', en: 'Listen to the letter name and tap the letter.', dung: 'm', sai: ['n'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'nờ', dung: 'n', sai: ['m'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'ư', dung: 'ư', sai: ['u', 'ơ'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “cô mơ mua cả mũ.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Cô Mơ mua cả mũ.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Con rửa rau giúp mẹ được không?', en: 'Listen and write the sentence.', hoa: true, dung: ['Con rửa rau giúp mẹ được không?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['đang + việc làm', 'Mẹ đang nấu cơm. – Con đang làm gì đó?', ['“đang” cho biết việc làm xảy ra lúc nói. Hỏi: … đang làm gì?', '“đang” = is doing (right now).']],
          ['… giúp + người + được không?', 'Con rửa rau giúp mẹ được không?', ['Lời nhờ lễ phép. “giúp mẹ” đứng sau việc làm, “được không?” ở cuối câu.', 'A polite request: “Can you … for me?”']],
          ['… được / không … được', 'Vâng, con làm được ạ. – Con không giúp bố được ạ.', ['Đồng ý: (Vâng / Dạ,) … được ạ. Từ chối: không … được, rồi nói thêm: “Con không biết …”.', 'Yes: “… được”. No: “không … được”, then give a reason.']],
          ['sẽ + việc làm', 'Vậy, bố sẽ giặt quần áo.', ['“sẽ” nói việc làm sau lúc nói.', '“sẽ” = will.']]
        ]
      },
      ghiChu: 'Trả lời người lớn: thêm “Vâng” hoặc “Dạ” ở đầu và “ạ” ở cuối câu.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu hỏi', en: 'Put the words in order to make a question.', dung: ['Con', 'tưới cây', 'giúp bố', 'được không?'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Mẹ đang nấu cơm.', sai: ['Mẹ nấu đang cơm.', 'Đang mẹ nấu cơm.'] },
        { loai: 'chon', hoi: 'Mẹ nhờ em rửa rau. Chọn câu trả lời lễ phép', en: 'Your mother asks you to wash the vegetables. Choose the polite answer.', dung: 'Vâng, con làm được ạ.', sai: ['Được.', 'Con làm được.'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Bố đang TƯỚI CÂY.”', en: 'Make a question for the capitalised part.', dung: 'Bố đang làm gì?', sai: ['Bố thế nào?', 'Ai đang tưới cây?'] },
        { loai: 'go', hoi: 'Điền từ: “Con không giúp mẹ ___ ạ. Con không biết nấu cơm.”', en: 'Fill in the missing word.', dung: ['được'] }
      ]
    }
  ]
};
