/* Quyển 1 – Bài 7 «Kia là cây cam, phải không?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “…, phải không?”, “Đây là quả gì?” và câu trả lời “Phải. …” / “Không phải. …”, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand “…, right?” questions, “What fruit is this?” and the answers “Yes …” / “No …”, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai đến chơi nhà Nam', cau: [
          ['Mai', 'Kia là cây bưởi, phải không?'], ['Nam', 'Không phải. Đó là cây cam.'], ['Mai', 'Còn đây là cây gì?'],
          ['Nam', 'Đây là cây khế.'], ['Mai', 'Đây là quả khế, phải không?'], ['Nam', 'Phải. Đây là quả khế.']] },
        { ten: 'Hội thoại B – Dũng và chị Liên đi chợ', cau: [
          ['Dũng', 'Chị Liên, đây là quả gì?'], ['Chị Liên', 'Đây là quả na.'], ['Dũng', 'Kia là quả dừa, phải không?'],
          ['Chị Liên', 'Không phải. Đó là quả dứa.'], ['Dũng', 'Còn kia là quả mít, phải không?'], ['Chị Liên', 'Phải. Đó là quả mít.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Kia là cây gì?', en: 'What tree is that?', dung: 'cây cam', sai: ['cây bưởi', 'cây khế'] },
        { loai: 'chon', hoi: 'Hội thoại A: Mai hỏi “Đây là quả khế, phải không?”. Nam trả lời thế nào?', en: 'How does Nam answer?', dung: 'Phải. Đây là quả khế.', sai: ['Không phải. Đây là quả khế.', 'Không phải. Đó là cây cam.'] },
        { loai: 'xep', hoi: 'Hội thoại A: xếp lại câu Mai hỏi đầu tiên', en: 'Put Mai’s first question in order.', dung: ['Kia', 'là', 'cây bưởi,', 'phải không?'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Chị Liên nói đó là những quả gì? (chọn 3)', en: 'Which fruits does Liên name? (choose 3)', dung: ['na', 'dứa', 'mít'], sai: ['dừa', 'táo'] },
        { loai: 'chon', hoi: 'Hội thoại B: Dũng hỏi “Kia là quả dừa, phải không?”. Chị Liên trả lời thế nào?', en: 'How does Liên answer?', dung: 'Không phải. Đó là quả dứa.', sai: ['Phải. Đó là quả dừa.', 'Không phải. Đó là quả dừa.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Đó là quả ___.”', nghe: 'Đó là quả dứa.', en: 'Listen and fill in the missing word (mind the tone mark).', dung: ['dứa'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: cây và quả em biết',
      muc: 'viết một đoạn ngắn 3–5 câu đơn về cây và quả, có một câu hỏi “…, phải không?” và câu trả lời.',
      mucEn: 'Goal: write 3–5 simple sentences about trees and fruit, including one “…, phải không?” question and its answer.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Đây là cây cam. Đây là quả cam. Kia là cây mít. Kia là cây dừa, phải không? Phải. Đó là cây dừa.' },
      tu: ['cam', 'na', 'bưởi', 'táo', 'chuối', 'mít', 'khế', 'dừa'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Đây là cây ', '.'], ['Kia là quả ', '.'], ['Đó là cây ', ', phải không?']], xong: 'Đúng rồi! Em đã gọi tên cây và quả.' },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu, thay bằng cây và quả em biết.', en: 'Medium: write 3 sentences like the model, about trees and fruit you know.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: có một câu hỏi “…, phải không?” và câu trả lời “Phải. …” hoặc “Không phải. …”.', en: 'Hard: write 5 sentences, including a “…, phải không?” question and a “Phải. …” or “Không phải. …” answer.', soCau: 5 }
      },
      tuKiemTra: ['Câu hỏi có dấu phẩy trước “phải không” và dấu chấm hỏi ở cuối.', 'Sau “Phải” và “Không phải” có dấu chấm.', 'Đủ dấu thanh: bưởi, táo, chuối, dứa, dừa, mít, khế.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng tên cây, quả, đúng dấu thanh, đúng chữ h – i – y và viết hoa đầu câu.',
      mucEn: 'Goal: spell the names of trees and fruit with the right tone marks, use h, i, y correctly, and capitalise the first word.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bưởi', en: 'Listen and write the word.', dung: ['bưởi'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'chuối', dung: ['chuối'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'khế', dung: ['khế'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'mít', dung: ['mít'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'hoa', dung: ['hoa'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: d_a', nghe: 'dừa', en: 'Choose the right tone mark.', dung: 'dừa', sai: ['dứa', 'dửa'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: d_a', nghe: 'dứa', dung: 'dứa', sai: ['dừa', 'dựa'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: t_o', nghe: 'táo', dung: 'táo', sai: ['tạo', 'tảo'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng: câ_ (cây cam)', en: 'Choose the correct spelling.', dung: 'cây', sai: ['câi'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng: “Em _êu hoa hồng.”', en: 'At the start of a word, “iê” is written “yê”.', dung: 'yêu', sai: ['iêu'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'hờ', en: 'Listen to the letter name and tap the letter.', dung: 'h', sai: ['k', 'l'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “kia là cây cam, phải không?”', en: 'Rewrite with a capital letter.', hoa: true, dung: ['Kia là cây cam, phải không?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Phải. Đó là cây cam.', en: 'Listen and write the sentences.', hoa: true, dung: ['Phải. Đó là cây cam.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Đây là quả gì?', hoa: true, dung: ['Đây là quả gì?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['…, phải không?', 'Kia là cây cam, phải không?', ['Thêm “, phải không?” vào cuối câu để hỏi lại cho chắc.', 'Add “, phải không?” at the end to check something (“…, right?”).']],
          ['Phải. / Không phải.', 'Phải. Đó là cây cam. · Không phải. Đó là con trâu.', ['Đúng thì trả lời “Phải.”; sai thì trả lời “Không phải.”, rồi nói lại cho đúng.', '“Phải.” = yes. “Không phải.” = no, then say the right thing.']],
          ['đây – kia – đó', 'Kia là cây cam, phải không? – Phải. Đó là cây cam.', ['Người trả lời dùng “đó” để chỉ lại vật người hỏi vừa nói tới.', '“đó” = that (the thing just mentioned).']],
          ['cây / quả / con + tên', 'cây cam, quả khế, con khỉ', ['“cây” đứng trước tên cây, “quả” trước tên quả, “con” trước tên con vật.', 'Classifiers: “cây” for plants, “quả” for fruit, “con” for animals.']]
        ]
      },
      ghiChu: '“quả” hay dùng ở miền Bắc; miền Nam hay nói “trái”: quả cam = trái cam.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Kia', 'là', 'con khỉ,', 'phải không?'] },
        { loai: 'chon', hoi: 'Hỏi: “Đây là quả táo, phải không?” (Trong hình là quả cam.) Chọn câu trả lời đúng.', en: 'The picture shows an orange. Choose the right answer.', dung: 'Không phải. Đây là quả cam.', sai: ['Phải. Đây là quả cam.', 'Không phải. Đây là quả táo.'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Đây là cây chuối, phải không?', sai: ['Đây là cây chuối, không phải?', 'Phải không đây là cây chuối?'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Đây là ___ vịt.”', en: 'Choose the right classifier.', dung: 'con', sai: ['cây', 'quả'] },
        { loai: 'go', hoi: 'Điền từ: “Kia là cây mít, ___ không?”', en: 'Fill in the missing word.', dung: ['phải'] }
      ]
    }
  ]
};
