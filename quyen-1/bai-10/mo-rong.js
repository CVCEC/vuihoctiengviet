/* Quyển 1 – Bài 10 «Ôn tập» (ôn Bài 6–9) – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu hội thoại ngắn dùng nhiều mẫu câu của Bài 6–9: “… là con (cây, quả) gì?”, “… đang làm gì?”, “… có mấy …?”, “…, phải không?”, “… à?”.',
      mucEn: 'Goal: understand short dialogues mixing the patterns of Lessons 6–9 (what, doing what, how many, right?), spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai, Nam và Dũng ở vườn thú', cau: [
          ['Mai', 'Kia là con gì?'], ['Nam', 'Kia là con hổ.'], ['Mai', 'Con hổ đang làm gì?'],
          ['Nam', 'Con hổ đang nằm.'], ['Dũng', 'Con hổ có mấy chân?'], ['Mai', 'Con hổ có bốn chân.'],
          ['Dũng', 'Kia là con sói, phải không?'], ['Nam', 'Không phải. Đó là con chó.']] },
        { ten: 'Hội thoại B – My đến chơi với bà', cau: [
          ['My', 'Cháu chào bà ạ.'], ['Bà', 'Chào cháu. Đây là quả gì?'], ['My', 'Đây là quả bưởi ạ.'],
          ['Bà', 'Cây bưởi có mấy quả?'], ['My', 'Cây bưởi có sáu quả ạ.'], ['Bà', 'Còn kia là cây cam à?'],
          ['My', 'Không ạ. Đó là cây táo.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Con hổ đang làm gì?', en: 'What is the tiger doing?', dung: 'Con hổ đang nằm.', sai: ['Con hổ đang ngủ.', 'Con hổ đang chạy.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Con hổ có mấy chân?', en: 'How many legs does the tiger have?', dung: 'bốn', sai: ['hai', 'sáu'] },
        { loai: 'chon', hoi: 'Hội thoại A: Dũng hỏi “Kia là con sói, phải không?”. Nam trả lời thế nào?', en: 'How does Nam answer?', dung: 'Không phải. Đó là con chó.', sai: ['Phải. Đó là con sói.', 'Không phải. Đó là con sói.'] },
        { loai: 'go', hoi: 'Nghe và điền số (viết bằng chữ): “Cây bưởi có ___ quả.”', nghe: 'Cây bưởi có sáu quả.', en: 'Listen and write the number.', dung: ['sáu', '6'] },
        { loai: 'chon', hoi: 'Hội thoại B: Kia là cây gì?', en: 'What tree is that?', dung: 'cây táo', sai: ['cây cam', 'cây bưởi'] },
        { loai: 'chon', hoi: 'Hội thoại B: My nói với bà thế nào cho lễ phép?', en: 'How does My speak politely to Grandma?', dung: 'Đây là quả bưởi ạ.', sai: ['Đây là quả bưởi.', 'Đây là quả gì?'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp lại câu bà hỏi', en: 'Put Grandma’s question in order.', dung: ['Cây bưởi', 'có', 'mấy', 'quả?'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: cây và con vật em biết',
      muc: 'viết một đoạn ngắn 3–5 câu đơn về cây và con vật, dùng ít nhất 3 mẫu câu của Bài 6–9.',
      mucEn: 'Goal: write 3–5 simple sentences about trees and animals, using at least 3 patterns from Lessons 6–9.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Đây là cây mít. Cây mít có năm quả. Kia là con gà. Con gà có hai chân. Con gà đang chạy.' },
      tu: ['gà', 'vịt', 'chó', 'mèo', 'khỉ', 'ngựa', 'trâu'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Kia là con ', '.'], ['Con ', ' đang ăn.'], ['Con ', ' có hai mắt.']], xong: 'Đúng rồi! Em đã viết câu về con vật.' },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu, thay bằng cây và con vật em biết.', en: 'Medium: write 3 sentences like the model, about trees and animals you know.', soCau: 3 },
        kho: { huong: 'Viết 5 câu, dùng ít nhất 3 mẫu: “Đây (Kia) là …”, “… có + số + …”, “… đang …”, “… rất …”.', en: 'Hard: write 5 sentences using at least 3 patterns: “Đây (Kia) là …”, “… có + number + …”, “… đang …”, “… rất …”.', soCau: 5 }
      },
      tuKiemTra: ['Có “con”, “cây”, “quả” trước tên: con gà, cây mít, quả cam.', 'Số đứng trước tên vật; “đang” đứng trước từ chỉ hoạt động.', 'Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm; đủ dấu thanh.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'ôn chính tả Bài 6–9: đúng dấu thanh, đúng các chữ g – gh – gi, h – i – y, k – kh, l – m và viết hoa.',
      mucEn: 'Goal: review the spelling of Lessons 6–9: tone marks, g/gh/gi, h/i/y, k/kh, l/m, and capital letters.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'ngựa', en: 'Listen and write the word.', dung: ['ngựa'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'khế', dung: ['khế'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bưởi', dung: ['bưởi'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'miệng', dung: ['miệng'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đuôi', dung: ['đuôi'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng: con _à', nghe: 'gà', en: 'Choose the correct spelling.', dung: 'gà', sai: ['ghà'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng: câ_ (cây táo)', dung: 'cây', sai: ['câi'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng: “_ia là con khỉ.”', dung: 'Kia', sai: ['Cia'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'nằm', en: 'Listen and choose the right word.', dung: 'nằm', sai: ['lằm', 'nắm'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: d_a (cây dừa)', nghe: 'dừa', en: 'Choose the right tone mark.', dung: 'dừa', sai: ['dứa', 'dựa'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: ch_n (9)', nghe: 'chín', dung: 'chín', sai: ['chìn', 'chin'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “my có tám bông hoa.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['My có tám bông hoa.', 'My có 8 bông hoa.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Kia là cây cam, phải không?', en: 'Listen and write the sentence.', hoa: true, dung: ['Kia là cây cam, phải không?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Con khỉ đang chơi.', hoa: true, dung: ['Con khỉ đang chơi.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'ôn và dùng đúng 4 điểm ngữ pháp của Bài 6–9.',
      mucEn: 'Goal: review and use the 4 grammar points of Lessons 6–9.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Đây (Kia) là con / cây / quả + gì?', 'Kia là con gì? – Kia là con voi.', ['“gì” đứng ở chỗ của câu trả lời. Trước tên: con (con vật), cây (cây), quả (quả).', '“gì” = what; it stays where the answer goes. Use con / cây / quả before the name.']],
          ['…, phải không? · … à?', 'Đây là quả táo, phải không? · Con voi đang chạy à?', ['Hỏi lại cho chắc. Trả lời: Phải. / Không phải. … (với người lớn: Phải ạ. / Không ạ.)', 'Checking questions. Answer “Phải.” or “Không phải.”, adding “ạ” for older people.']],
          ['có + số + tên vật · mấy', 'Cây cam có mấy quả? – Cây cam có 8 quả.', ['Số đứng trước tên vật; “mấy” hỏi số nhỏ, đứng ở chỗ của số.', 'Number before the noun; “mấy” = how many (small numbers).']],
          ['đang + từ chỉ hoạt động', 'Con mèo đang làm gì? – Con mèo đang ngủ.', ['“đang” cho biết việc xảy ra lúc nói.', '“đang” = happening now (-ing).']]
        ]
      },
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu hỏi', en: 'Put the words in order.', dung: ['Con ngựa', 'đang', 'làm gì?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Cây dừa có SÁU quả.”', en: 'Make a question for the capitalised part.', dung: 'Cây dừa có mấy quả?', sai: ['Cây dừa đang làm gì?', 'Đây là cây gì?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Kia là CÂY KHẾ.”', dung: 'Kia là cây gì?', sai: ['Kia là ai?', 'Cây khế có mấy quả?'] },
        { loai: 'chon', hoi: 'Hỏi: “Con gà đang ngủ, phải không?” (Con gà đang ăn.) Chọn câu trả lời đúng.', en: 'The hen is eating. Choose the right answer.', dung: 'Không phải. Con gà đang ăn.', sai: ['Phải. Con gà đang ngủ.', 'Không phải. Con gà đang ngủ.'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Mai có sáu ___ hoa.”', en: 'Choose the right counting word.', dung: 'bông', sai: ['con', 'quả'] },
        { loai: 'go', hoi: 'Điền từ: “Con voi ___ ăn.” (việc xảy ra lúc nói)', en: 'Fill in the word for “happening now”.', dung: ['đang'] }
      ]
    }
  ]
};
