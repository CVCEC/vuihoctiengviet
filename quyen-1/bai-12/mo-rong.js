/* Quyển 1 – Bài 12 «Hình này là hình gì?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “… hình gì?”, “… màu gì?”, “…, phải không?” và câu trả lời về hình, màu của đồ vật, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand questions about the shape and colour of things, and “…, right?” questions, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai và My xem bàn ghế', cau: [
          ['Mai', 'My ơi, cái bàn kia hình gì?'], ['My', 'Cái bàn ấy hình chữ nhật.'], ['Mai', 'Cái bàn ấy màu gì?'],
          ['My', 'Cái bàn ấy màu trắng.'], ['Mai', 'Cái ghế này màu đen, phải không?'], ['My', 'Không. Cái ghế này màu tím.'],
          ['Mai', 'Cái ghế này hình vuông, phải không?'], ['My', 'Phải. Cái ghế này hình vuông.']] },
        { ten: 'Hội thoại B – Nam xem tranh của Mai', cau: [
          ['Nam', 'Mai ơi, hình này là hình gì?'], ['Mai', 'Hình này là hình tam giác.'], ['Nam', 'Hình tam giác màu gì?'],
          ['Mai', 'Hình tam giác màu đỏ.'], ['Nam', 'Còn hình này? Hình này là hình tròn, phải không?'], ['Mai', 'Phải. Hình tròn màu vàng.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Cái bàn hình gì?', en: 'What shape is the table?', dung: 'hình chữ nhật', sai: ['hình vuông', 'hình tròn'] },
        { loai: 'chon', hoi: 'Hội thoại A: Cái bàn màu gì?', en: 'What colour is the table?', dung: 'màu trắng', sai: ['màu tím', 'màu đen'] },
        { loai: 'chon', hoi: 'Hội thoại A: Cái ghế màu gì?', en: 'What colour is the chair?', dung: 'màu tím', sai: ['màu đen', 'màu trắng'] },
        { loai: 'go', hoi: 'Nghe và điền: “Cái ghế này hình ___, phải không?”', nghe: 'Cái ghế này hình vuông, phải không?', en: 'Listen and fill in the missing word.', dung: ['vuông'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Mai vẽ những hình nào? (chọn 2)', en: 'Which shapes did Mai draw? (choose 2)', dung: ['hình tam giác', 'hình tròn'], sai: ['hình vuông', 'hình chữ nhật'] },
        { loai: 'chon', hoi: 'Hội thoại B: Hình tròn màu gì?', en: 'What colour is the circle?', dung: 'màu vàng', sai: ['màu đỏ', 'màu xanh'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp từ thành câu Mai nói', en: 'Put the words in order to make Mai’s sentence.', dung: ['Hình', 'tam giác', 'màu', 'đỏ.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: đồ vật quanh em',
      muc: 'viết một đoạn ngắn 3–5 câu đơn tả hình và màu của đồ vật quanh em.',
      mucEn: 'Goal: write 3–5 simple sentences about the shape and colour of things around you.',
      mau: { ten: 'Đoạn mẫu (My viết)', chu: 'Tôi là My. Cái bàn này hình tròn. Cái bàn này màu xanh. Cái ghế kia hình vuông. Cái ghế ấy màu đỏ. Cái tủ này hình chữ nhật, màu vàng.' },
      tu: ['màu trắng', 'màu vàng', 'màu đỏ', 'màu tím', 'màu xanh', 'màu đen'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a colour for each blank.', khung: [['Cái bàn này ', '.'], ['Cái ghế kia ', '.'], ['Cái tủ ấy ', '.']], xong: 'Đúng rồi! Em đã nói màu của đồ vật.' },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu về 3 đồ vật quanh em: hình gì hoặc màu gì.', en: 'Medium: write 3 sentences like the model about 3 things around you: shape or colour.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: nói cả hình và màu của đồ vật; dùng “này” và “kia”.', en: 'Hard: write 5 sentences with both shape and colour; use “này” and “kia”.', soCau: 5 }
      },
      tuKiemTra: ['Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Thứ tự: cái + đồ vật + này/kia + hình/màu: “Cái ghế kia màu đỏ.”', 'Đủ dấu thanh: ghế, tủ, đỏ, tím, chữ nhật.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng tên hình, tên màu, đúng dấu thanh, đúng chữ ng – ngh và viết hoa tên riêng.',
      mucEn: 'Goal: spell shapes and colours with the right tone marks and the letters ng, ngh; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'hình tròn', en: 'Listen and write the word.', dung: ['hình tròn'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'hình vuông', dung: ['hình vuông'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tam giác', dung: ['tam giác'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'chữ nhật', dung: ['chữ nhật'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'màu trắng', dung: ['màu trắng'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: màu đ_ (đỏ)', nghe: 'đỏ', en: 'Choose the right tone mark.', dung: 'đỏ', sai: ['đó', 'đọ'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: cái gh_ (ghế)', nghe: 'ghế', dung: 'ghế', sai: ['ghề', 'ghể'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: cái t_ (tủ)', nghe: 'tủ', dung: 'tủ', sai: ['tú', 'tụ'] },
        { loai: 'chon', hoi: 'Nghe và chọn cách viết đúng (ngh đứng trước i, e, ê)', nghe: 'nghe', en: 'Listen and choose the right spelling: “ngh” before i, e, ê.', dung: 'nghe', sai: ['nge'] },
        { loai: 'chon', hoi: 'Nghe và chọn cách viết đúng', nghe: 'nghỉ', dung: 'nghỉ', sai: ['ngỉ'] },
        { loai: 'chon', hoi: 'Nghe và chọn cách viết đúng', nghe: 'ngồi', dung: 'ngồi', sai: ['nghồi'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “bé nga ngồi nghe mẹ hát.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Bé Nga ngồi nghe mẹ hát.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Cái bàn này màu xanh.', en: 'Listen and write the sentence.', hoa: true, dung: ['Cái bàn này màu xanh.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Hình này là hình gì?', hoa: true, dung: ['Hình này là hình gì?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Hỏi: … hình gì? / … màu gì?', 'Hình này là hình gì? Cái bàn này màu gì?', ['“gì” đứng ở chỗ của câu trả lời: hình gì → hình tròn; màu gì → màu xanh.', '“gì” = what; it stays where the answer goes.']],
          ['này – kia – ấy', 'cái bàn này, cái ghế kia, cái ghế ấy', ['Đứng sau danh từ. “này”: ở gần; “kia”: ở xa; “ấy”: vật vừa nói tới.', 'They follow the noun: “này” = this, “kia” = that (over there), “ấy” = that one (just mentioned).']],
          ['Tả hình, màu không cần “là”', 'Cái bàn này hình tròn. Cái ghế ấy màu đỏ.', ['Nói vật có hình, màu gì: không cần “là”. Gọi tên một hình thì dùng “là”: Hình này là hình vuông.', 'No “là” when describing shape or colour; use “là” when naming the shape.']],
          ['…, phải không? – Phải. / Không.', 'Cái ghế ấy màu tím, phải không? – Không. Cái ghế ấy màu đỏ.', ['Hỏi để kiểm tra. Đúng thì “Phải.”; sai thì “Không.” rồi nói lại cho đúng.', 'A question to check: answer “Phải.” (yes) or “Không.” (no) and correct it.']]
        ]
      },
      ghiChu: '“cái” đứng trước tên đồ vật: cái bàn, cái ghế, cái tủ (như “con” đứng trước tên con vật ở Bài 6).',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Cái tủ', 'này', 'màu', 'vàng.'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Cái bàn này MÀU XANH.”', en: 'Make a question for the capitalised part.', dung: 'Cái bàn này màu gì?', sai: ['Cái bàn này hình gì?', 'Cái bàn này là gì?'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Cái ghế kia màu đỏ.', sai: ['Kia cái ghế màu đỏ.', 'Cái kia ghế màu đỏ.'] },
        { loai: 'chon', hoi: 'Trả lời: “Cái tủ này hình vuông, phải không?” (cái tủ hình chữ nhật)', en: 'Answer the question. (The wardrobe is a rectangle.)', dung: 'Không. Cái tủ này hình chữ nhật.', sai: ['Phải. Cái tủ này hình chữ nhật.', 'Phải. Cái tủ này hình vuông.'] },
        { loai: 'go', hoi: 'Điền từ để hỏi: “Hình này là hình ___?”', en: 'Fill in the question word.', dung: ['gì'] }
      ]
    }
  ]
};
