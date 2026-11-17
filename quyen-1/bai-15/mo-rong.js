/* Quyển 1 – Bài 15 «Ôn tập» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Ôn tổng hợp Bài 11–14: biết/thích làm gì, hình và màu, cao – thấp, to – nhỏ, nặng – nhẹ, thứ – ngày – tháng.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu hội thoại ngắn kết hợp các mẫu câu của Bài 11–14: thứ, ngày, tháng; biết, thích làm gì; số lượng, màu và đặc điểm của đồ vật, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand short dialogues that mix the patterns of Lessons 11–14 (dates, abilities, colours, sizes), spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Đầu tuần ở lớp', cau: [
          ['Cô giáo', 'Chào các em! Hôm nay là thứ mấy?'], ['Nam', 'Thưa cô, hôm nay là thứ Hai ạ.'],
          ['Cô giáo', 'Hôm nay là ngày bao nhiêu?'], ['Mai', 'Thưa cô, hôm nay là ngày 17 tháng Mười một ạ.'],
          ['Cô giáo', 'Nam có biết vẽ không?'], ['Nam', 'Thưa cô, có ạ. Em thích vẽ lắm.'],
          ['Cô giáo', 'Còn Mai?'], ['Mai', 'Em không biết vẽ ạ. Em biết hát.']] },
        { ten: 'Hội thoại B – Đồ dùng học tập của Vũ', cau: [
          ['Hương', 'Bạn có mấy quyển vở?'], ['Vũ', 'Tôi có hai quyển vở.'], ['Hương', 'Hai quyển vở màu gì?'],
          ['Vũ', 'Một quyển màu trắng, một quyển màu vàng.'], ['Hương', 'Quyển vở màu vàng có to không?'],
          ['Vũ', 'Không. Quyển vở màu vàng nhỏ.'], ['Hương', 'Cái hộp bút này hình chữ nhật, phải không?'],
          ['Vũ', 'Phải. Cái hộp bút ấy hình chữ nhật, màu xanh.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Hôm nay là thứ mấy?', en: 'What day is it today?', dung: 'thứ Hai', sai: ['thứ Ba', 'Chủ nhật'] },
        { loai: 'go', hoi: 'Nghe và điền: “Hôm nay là ngày 17 tháng ___ ạ.”', nghe: 'Thưa cô, hôm nay là ngày 17 tháng Mười một ạ.', en: 'Listen and fill in the month.', dung: ['Mười một', '11'] },
        { loai: 'chon', hoi: 'Hội thoại A: Ai biết vẽ?', en: 'Who can draw?', dung: 'Nam', sai: ['Mai'] },
        { loai: 'chon', hoi: 'Hội thoại A: Mai biết làm gì?', en: 'What can Mai do?', dung: 'Mai biết hát.', sai: ['Mai biết vẽ.', 'Mai biết múa.'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Hai quyển vở của Vũ màu gì? (chọn 2)', en: 'What colours are Vũ’s notebooks? (choose 2)', dung: ['màu trắng', 'màu vàng'], sai: ['màu xanh', 'màu đỏ'] },
        { loai: 'chon', hoi: 'Hội thoại B: Quyển vở màu vàng thế nào?', en: 'What is the yellow notebook like?', dung: 'nhỏ', sai: ['to', 'nặng'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp từ thành câu Vũ nói', en: 'Put the words in order to make Vũ’s sentence.', dung: ['Tôi', 'có', 'hai', 'quyển vở.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: em ở lớp học',
      muc: 'viết một đoạn ngắn 4–5 câu đơn: hôm nay là thứ mấy, em biết và thích làm gì, đồ dùng học tập của em thế nào.',
      mucEn: 'Goal: write 4–5 simple sentences: today’s day, what you can do and like, and your school things.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Hôm nay là thứ Hai, ngày 17 tháng Mười một. Tôi biết vẽ. Tôi thích vẽ lắm. Tôi có hai quyển vở. Quyển vở màu đỏ to, quyển vở màu xanh nhỏ. Cái hộp bút của tôi hình chữ nhật.' },
      tu: ['đọc sách', 'viết', 'hát', 'múa', 'vẽ', 'bơi'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Tôi biết ', '.'], ['Tôi thích ', ' lắm.'], ['Bạn có biết ', ' không?']], xong: 'Đúng rồi! Em đã nói và hỏi về việc biết làm, thích làm.' },
        vua: { huong: 'Viết 3 câu: hôm nay là thứ mấy; em biết làm gì; em có đồ dùng học tập gì.', en: 'Medium: write 3 sentences: today’s day; what you can do; what school things you have.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: thứ – ngày – tháng hôm nay; việc em biết và không biết làm; một đồ dùng học tập với hình, màu và một từ tả (to, nhỏ, nặng, nhẹ…).', en: 'Hard: write 5 sentences: today’s date; what you can and cannot do; one school thing with its shape, colour and size or weight.', soCau: 5 }
      },
      tuKiemTra: ['Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm (câu hỏi: dấu chấm hỏi).', 'Thứ tự: thứ – ngày – tháng; từ tả đứng sau danh từ: quyển vở nhỏ, cái bàn màu xanh.', 'Đủ dấu thanh: thứ, tháng, biết, thích, vở, đỏ, nặng.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'ôn chính tả Bài 11–14: đúng dấu thanh, đúng chữ n – nh, ng – ngh, o – ô – ơ, u – ư và viết hoa tên riêng.',
      mucEn: 'Goal: review spelling from Lessons 11–14: tone marks, n/nh, ng/ngh, o/ô/ơ, u/ư; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'múa', en: 'Listen and write the word.', dung: ['múa'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'hình vuông', dung: ['hình vuông'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'màu đỏ', dung: ['màu đỏ'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nhẹ', dung: ['nhẹ'] },
        { loai: 'chon', hoi: 'Nghe và chọn cách viết đúng (ngh đứng trước i, e, ê)', nghe: 'nghe', en: 'Listen and choose the right spelling.', dung: 'nghe', sai: ['nge'] },
        { loai: 'chon', hoi: 'Nghe và chọn cách viết đúng', nghe: 'ngồi', dung: 'ngồi', sai: ['nghồi'] },
        { loai: 'chon', hoi: 'Nghe và chọn cách viết đúng', nghe: 'nhỏ', dung: 'nhỏ', sai: ['nỏ', 'nhọ'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: ng_n (không dài)', nghe: 'ngắn', en: 'Choose the right tone mark.', dung: 'ngắn', sai: ['ngằn', 'ngẳn'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: thứ S_u', nghe: 'thứ Sáu', dung: 'thứ Sáu', sai: ['thứ Sàu', 'thứ Sạu'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'ơ', en: 'Listen to the letter name and tap the letter.', dung: 'ơ', sai: ['ô', 'o'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'ư', dung: 'ư', sai: ['u', 'ơ'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “hôm nay là sinh nhật mai.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Hôm nay là sinh nhật Mai.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Cậu có biết bơi không?', en: 'Listen and write the sentence.', hoa: true, dung: ['Cậu có biết bơi không?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Cái ghế ấy màu đỏ.', hoa: true, dung: ['Cái ghế ấy màu đỏ.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'ôn và dùng đúng 4 điểm ngữ pháp của Bài 11–14.',
      mucEn: 'Goal: review and use the 4 grammar points of Lessons 11–14.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['có … không? (việc làm / từ tả)', 'Bạn có biết đọc không? Quyển vở màu vàng có to không?', ['Một mẫu hỏi cho cả việc làm và đặc điểm. Trả lời: “Có. …” hoặc “Không. … không …”.', 'One yes/no pattern for verbs and adjectives.']],
          ['Từ để hỏi: gì – mấy – bao nhiêu – thế nào', 'màu gì? thứ mấy? ngày bao nhiêu? thế nào?', ['Từ để hỏi đứng ở chỗ của câu trả lời; thứ tự câu không đổi.', 'Question words stay where the answer goes; word order does not change.']],
          ['…, phải không?', 'Cái hộp bút này hình chữ nhật, phải không?', ['Hỏi để kiểm tra. Trả lời: “Phải.” hoặc “Không (phải).” rồi nói lại cho đúng.', 'A question to check: answer “Phải.” or “Không (phải).”.']],
          ['Danh từ + từ tả / này – kia', 'quyển vở màu vàng, cái bàn nhỏ, cái ghế kia', ['Từ tả (màu, to, nhỏ…) và “này”, “kia” đứng sau danh từ.', 'Describing words and “này/kia” come after the noun.']]
        ]
      },
      ghiChu: 'Xưng hô: bạn bè nói “cậu – tớ” hoặc “bạn – tôi”; với thầy cô nói “Thưa cô…”, xưng “em” và thêm “ạ”.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu hỏi', en: 'Put the words in order.', dung: ['Quyển vở', 'màu vàng', 'có', 'to', 'không?'] },
        { loai: 'chon', hoi: 'Chọn từ để hỏi đúng: “Hôm nay là ngày ___?”', en: 'Choose the right question word.', dung: 'bao nhiêu', sai: ['gì', 'thế nào'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Cái bàn này HÌNH TRÒN.”', en: 'Make a question for the capitalised part.', dung: 'Cái bàn này hình gì?', sai: ['Cái bàn này màu gì?', 'Cái bàn này là cái gì?'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Cái ghế kia màu xanh.', sai: ['Kia cái ghế màu xanh.', 'Cái kia ghế màu xanh.'] },
        { loai: 'chon', hoi: 'Trả lời: “Bạn có biết bơi không?” (em không biết bơi)', en: 'Answer the question. (You cannot swim.)', dung: 'Không. Tôi không biết bơi.', sai: ['Không. Tôi biết không bơi.', 'Có. Tôi không biết bơi.'] },
        { loai: 'go', hoi: 'Điền từ: “Cái bàn này ___ nặng.” (từ đứng trước từ tả, nghĩa là nặng lắm)', en: 'Fill in the word meaning “very”, placed before the adjective.', dung: ['rất'] }
      ]
    }
  ]
};
