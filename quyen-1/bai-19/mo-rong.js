/* Quyển 1 – Bài 19 «Xe nào nhanh hơn?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi so sánh “… nào … hơn?”, “A hay B … hơn?” và câu so sánh “A … hơn B”, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand comparison questions (“Which … is …er?”, “A or B, which is …er?”) and answers “A … hơn B”, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Nam và Mai nói về xe', cau: [
          ['Nam', 'Mai ơi, xe máy và xe đạp, xe nào nhanh hơn?'], ['Mai', 'Xe máy nhanh hơn xe đạp.'],
          ['Nam', 'Xe máy hay xe đạp đắt hơn?'], ['Mai', 'Xe máy đắt hơn. Xe đạp rẻ hơn xe máy.'],
          ['Nam', 'Cậu thích xe máy à?'], ['Mai', 'Không, tớ thích xe đạp. Xe đạp nhỏ và nhẹ.']] },
        { ten: 'Hội thoại B – Sơn hỏi bố về mê trô', cau: [
          ['Sơn', 'Bố ơi, xe buýt hay mê trô mới hơn?'], ['Bố', 'Mê trô mới hơn xe buýt.'],
          ['Sơn', 'Mê trô có nhanh hơn xe buýt không ạ?'], ['Bố', 'Có. Mê trô nhanh hơn xe buýt.'],
          ['Sơn', 'Con thích mê trô ạ.'], ['Bố', 'Bố cũng thích mê trô. Mê trô nhanh lắm.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Xe nào nhanh hơn?', en: 'Which vehicle is faster?', dung: 'Xe máy nhanh hơn xe đạp.', sai: ['Xe đạp nhanh hơn xe máy.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Xe nào rẻ hơn?', en: 'Which vehicle is cheaper?', dung: 'xe đạp', sai: ['xe máy', 'ô tô'] },
        { loai: 'chon', hoi: 'Hội thoại A: Mai thích xe gì?', en: 'Which vehicle does Mai like?', dung: 'xe đạp', sai: ['xe máy', 'xe buýt'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Mai nói xe đạp thế nào? (chọn 2)', en: 'How does Mai describe the bicycle? (choose 2)', dung: ['nhỏ', 'nhẹ'], sai: ['nhanh', 'đắt'] },
        { loai: 'chon', hoi: 'Hội thoại B: Cái nào mới hơn?', en: 'Which one is newer?', dung: 'Mê trô mới hơn xe buýt.', sai: ['Xe buýt mới hơn mê trô.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Mê trô nhanh ___ xe buýt.”', nghe: 'Mê trô nhanh hơn xe buýt.', en: 'Listen and fill in the missing word.', dung: ['hơn'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp lại câu hỏi của Sơn', en: 'Put Sơn’s question in order.', dung: ['Mê trô', 'có', 'nhanh hơn', 'xe buýt', 'không ạ?'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: so sánh hai loại xe em biết',
      muc: 'viết một đoạn ngắn 3–5 câu so sánh hai loại xe (nhanh, chậm, to, nhỏ, đắt, rẻ…) và nói em thích xe nào.',
      mucEn: 'Goal: write 3–5 simple sentences comparing two vehicles (fast, slow, big, small, expensive, cheap…) and say which one you like.',
      mau: { ten: 'Đoạn mẫu (Sơn viết)', chu: 'Tôi thích ô tô màu đỏ. Ô tô màu đỏ đẹp hơn ô tô màu vàng. Ô tô màu vàng to hơn ô tô màu đỏ. Nhưng ô tô màu đỏ rẻ hơn ô tô màu vàng. Tôi muốn mua ô tô màu đỏ.' },
      tu: ['nhanh', 'chậm', 'to', 'nhỏ', 'mới', 'cũ', 'đắt', 'rẻ'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu so sánh.', en: 'Easy: choose a word for each comparison.', khung: [['Ô tô màu đỏ ', ' hơn ô tô màu vàng.'], ['Xe đạp màu xanh ', ' hơn xe đạp màu đen.'], ['Thuyền của tớ ', ' hơn thuyền của cậu.']], xong: 'Đúng rồi! Em đã đặt được câu so sánh.' },
        vua: { huong: 'Viết 3 câu so sánh hai loại xe em biết, theo mẫu “A … hơn B.”.', en: 'Medium: write 3 sentences comparing two vehicles you know, like “A … hơn B.”.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: so sánh hai loại xe, có một câu bắt đầu bằng “Nhưng …”, câu cuối nói em thích xe nào.', en: 'Hard: write 5 sentences comparing two vehicles. Start one sentence with “Nhưng …” and end with the one you like.', soCau: 5 }
      },
      tuKiemTra: ['Câu so sánh đúng thứ tự: A + tính từ + hơn + B.', 'Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Đủ dấu: ô tô, xe đạp, xe máy, tàu hoả, đắt, rẻ.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng tên các loại xe, tàu, thuyền, đúng dấu thanh, đúng chữ s – x – v và viết hoa tên riêng.',
      mucEn: 'Goal: spell vehicle words with the right tone marks and the letters s, x, v; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'xe đạp', en: 'Listen and write the word.', dung: ['xe đạp'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'xe máy', dung: ['xe máy'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'xe buýt', dung: ['xe buýt'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tàu hoả', dung: ['tàu hoả', 'tàu hỏa'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tàu thuỷ', dung: ['tàu thuỷ', 'tàu thủy'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'thuyền', dung: ['thuyền'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: r_ (không đắt)', nghe: 'rẻ', en: 'Choose the right tone mark.', dung: 'rẻ', sai: ['rẽ', 'ré'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: n_ng (không nhẹ)', nghe: 'nặng', dung: 'nặng', sai: ['nắng', 'nằng'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'sờ', en: 'Listen to the letter name and tap the letter.', dung: 's', sai: ['x', 'v'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'xờ', dung: 'x', sai: ['s', 'v'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'vờ', dung: 'v', sai: ['b', 'd'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “sơn thích ô tô màu xanh.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Sơn thích ô tô màu xanh.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Xe máy nhanh hơn xe đạp.', en: 'Listen and write the sentence.', hoa: true, dung: ['Xe máy nhanh hơn xe đạp.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Xe nào nhanh hơn?', hoa: true, dung: ['Xe nào nhanh hơn?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['So sánh hơn: A + tính từ + hơn + B', 'Xe máy nhanh hơn xe đạp.', ['“hơn” đứng sau tính từ, trước người hoặc vật được so sánh.', 'Comparative: A + adjective + hơn + B = A is …er than B.']],
          ['Hỏi so sánh: A hay B + tính từ + hơn?', 'Ô tô màu vàng hay ô tô màu đỏ đẹp hơn?', ['Nêu hai lựa chọn với “hay”, tính từ và “hơn” ở cuối câu.', '“A or B, which is …er?”']],
          ['Hỏi: … nào + tính từ + hơn?', 'Xe máy và xe đạp, xe nào nhanh hơn?', ['“nào” đứng sau danh từ để hỏi chọn một trong hai.', '“xe nào” = which vehicle.']],
          ['Từ trái nghĩa', 'nhanh – chậm, to – nhỏ, đắt – rẻ', ['Đổi chỗ A và B thì dùng từ trái nghĩa: Xe đạp chậm hơn xe máy.', 'Swap A and B and use the opposite word.']]
        ]
      },
      ghiChu: '“nhưng” nối hai ý ngược nhau: “Ô tô màu vàng to hơn. Nhưng ô tô màu đỏ rẻ hơn.”',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Xe buýt', 'to', 'hơn', 'ô tô con.'] },
        { loai: 'chon', hoi: 'Nói cách khác: “Xe máy đắt hơn xe đạp.”', en: 'Say it another way.', dung: 'Xe đạp rẻ hơn xe máy.', sai: ['Xe đạp đắt hơn xe máy.', 'Xe máy rẻ hơn xe đạp.'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Tàu thuỷ nặng hơn thuyền.', sai: ['Tàu thuỷ hơn nặng thuyền.', 'Tàu thuỷ nặng thuyền hơn.'] },
        { loai: 'chon', hoi: 'Chọn câu hỏi cho câu trả lời: “Mê trô mới hơn tàu hoả.”', en: 'Choose the question for this answer.', dung: 'Mê trô và tàu hoả, tàu nào mới hơn?', sai: ['Mê trô có mới không?', 'Mê trô ở đâu?'] },
        { loai: 'go', hoi: 'Điền từ trái nghĩa: “Xe máy nhanh hơn xe đạp. Xe đạp ___ hơn xe máy.”', en: 'Fill in the opposite word.', dung: ['chậm'] }
      ]
    }
  ]
};
