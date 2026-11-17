/* Quyển 2 – Bài 18 «Bạn là người nước nào?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi về quốc tịch, thời gian ở Việt Nam, lí do, và lời mời – đáp về món ăn.',
      mucEn: 'Goal: understand questions about nationality, how long someone has been in Viet Nam and why, and offers of food and drink. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai làm quen với Victor', cau: [
          ['Mai', 'Chào bạn! Tôi là Mai. Còn bạn?'], ['Victor', 'Chào Mai, tôi là Victor.'],
          ['Mai', 'Victor là người nước nào?'], ['Victor', 'Tôi là người Pháp.'],
          ['Mai', 'Bạn đến Việt Nam bao lâu rồi?'], ['Victor', 'Tôi đến Việt Nam 2 năm rồi.'],
          ['Mai', 'Vì sao bạn đến Việt Nam?'], ['Victor', 'Vì mẹ tôi làm việc ở Việt Nam.']] },
        { ten: 'Hội thoại B – Nam mời Emma ăn bún chả', cau: [
          ['Nam', 'Emma, bạn thích món ăn Việt Nam không?'], ['Emma', 'Có, tôi rất thích bún chả và bánh mì.'],
          ['Nam', 'Mời bạn ăn bún chả!'], ['Emma', 'Cảm ơn Nam. Bún chả rất ngon!'],
          ['Nam', 'Mời bạn ăn ớt!'], ['Emma', 'Cảm ơn bạn, nhưng tôi không thích ớt.'],
          ['Nam', 'Vì sao bạn không thích ớt?'], ['Emma', 'Vì ớt rất cay.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Victor là người nước nào?', en: 'Where is Victor from?', dung: 'Victor là người Pháp.', sai: ['Victor là người Mỹ.', 'Victor là người Đức.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Tôi đến Việt Nam ___ năm rồi.”', nghe: 'Tôi đến Việt Nam 2 năm rồi.', en: 'Listen and write the number.', dung: ['2', 'hai'] },
        { loai: 'chon', hoi: 'Hội thoại A: Vì sao Victor đến Việt Nam?', en: 'Why did Victor come to Viet Nam?', dung: 'Vì mẹ Victor làm việc ở Việt Nam.', sai: ['Vì bố Victor làm việc ở Việt Nam.', 'Vì Victor thích đi du lịch.'] },
        { loai: 'xep', hoi: 'Hội thoại A: xếp từ thành câu hỏi của Mai', en: 'Put the words in order to make Mai’s question.', dung: ['Victor', 'là người', 'nước nào?'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Emma thích những món nào? (chọn 2)', en: 'Which foods does Emma like? (choose 2)', dung: ['bún chả', 'bánh mì'], sai: ['ớt', 'nem rán'] },
        { loai: 'chon', hoi: 'Hội thoại B: Vì sao Emma không thích ớt?', en: 'Why doesn’t Emma like chilli?', dung: 'Vì ớt rất cay.', sai: ['Vì ớt rất chua.', 'Vì ớt rất ngọt.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: giới thiệu em và món ăn em thích',
      muc: 'viết một đoạn ngắn 3–5 câu: em là người nước nào, ở Việt Nam (hoặc học tiếng Việt) bao lâu rồi, em thích và không thích món gì, vì sao.',
      mucEn: 'Goal: write 3–5 sentences: your nationality, how long you have been in Viet Nam (or learning Vietnamese), what food you like or dislike and why.',
      mau: { ten: 'Đoạn mẫu (Yuki viết)', chu: 'Tôi là Yuki. Tôi là người Nhật Bản. Tôi đến Việt Nam 1 năm rồi. Tôi rất thích món ăn Việt Nam. Tôi thích ăn bún chả vì bún chả rất ngon. Tôi không thích nước chanh vì nước chanh rất chua.' },
      tu: ['bún chả', 'nem rán', 'bánh mì', 'kem', 'nước dừa', 'sữa'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Tôi rất thích ', '.'], ['Bạn tôi không thích ', '.'], ['Cuối tuần, mẹ tôi mua ', '.']], xong: 'Đúng rồi! Em đã nói về món em thích.' },
        vua: { huong: 'Viết 3 câu: em là người nước nào, em ở Việt Nam hoặc học tiếng Việt bao lâu rồi, em thích món ăn nào.', en: 'Medium: write 3 sentences: your nationality, how long you have been in Viet Nam or learning Vietnamese, a food you like.', soCau: 3 },
        kho: { huong: 'Viết 5 câu theo đoạn mẫu; có ít nhất một câu “… vì …” nói lí do em thích hoặc không thích một món.', en: 'Hard: write 5 sentences like the model; include at least one sentence with “vì” (because).', soCau: 5 }
      },
      tuKiemTra: ['Tên nước viết hoa: Pháp, Nhật Bản, Trung Quốc, Việt Nam.', 'Nói lí do bằng “vì”: Tôi thích kem vì kem rất ngọt.', 'Đủ dấu: người, nước, ngọt, chua, cay, bún chả.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng tên món ăn, đồ uống, đúng vần oang – oac, oanh – oach, đúng dấu thanh và viết hoa tên nước.',
      mucEn: 'Goal: spell food and drink words, the rhymes oang, oac, oanh, oach and the tone marks; capitalise country names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nước chanh', en: 'Listen and write the word.', dung: ['nước chanh'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nước dừa', dung: ['nước dừa'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bún chả', dung: ['bún chả'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bánh mì', dung: ['bánh mì'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: ng_t (vị của kem)', nghe: 'ngọt', en: 'Choose the right tone mark.', dung: 'ngọt', sai: ['ngót', 'ngot'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: người Đ_c', nghe: 'người Đức', dung: 'người Đức', sai: ['người Đực', 'người Đừc'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'áo choàng', en: 'Listen and choose the right spelling.', dung: 'áo choàng', sai: ['áo choàn', 'áo chàng'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'áo khoác', dung: 'áo khoác', sai: ['áo khoát', 'áo khoắc'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'khoanh tay', dung: 'khoanh tay', sai: ['khoan tay', 'khoang tay'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'thu hoạch', dung: 'thu hoạch', sai: ['thu hoạt', 'thu hoặch'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “yuki là người nhật bản.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Yuki là người Nhật Bản.'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “tôi là người trung quốc.”', hoa: true, dung: ['Tôi là người Trung Quốc.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Bạn là người nước nào?', en: 'Listen and write the sentence.', hoa: true, dung: ['Bạn là người nước nào?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Vì nước chanh rất chua.', hoa: true, dung: ['Vì nước chanh rất chua.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['… là người nước nào?', 'Bạn là người nước nào? – Tôi là người Nhật.', ['Hỏi quốc tịch. Trả lời: người + tên nước (viết hoa).', '“Which country are you from?” Answer: người + country.']],
          ['… bao lâu rồi?', 'Bạn đến Việt Nam bao lâu rồi? – Tôi đến Việt Nam 1 năm rồi.', ['Hỏi một việc bắt đầu từ trước đến bây giờ. Trả lời: số + năm/tháng + “rồi”.', 'How long up to now? Answer: time + “rồi”.']],
          ['Vì sao …? – Vì …', 'Vì sao bạn không thích nước chanh? – Vì nước chanh rất chua.', ['Hỏi lí do bằng “vì sao”; câu trả lời bắt đầu bằng “vì”.', '“Why …?” – “Because …”.']],
          ['Mời – đáp lời mời', 'Mời bạn uống sữa! – Cảm ơn bạn, tôi rất thích sữa. / Cảm ơn bạn, nhưng tôi không thích nước chanh.', ['Luôn nói “cảm ơn” trước; khi từ chối thì dùng “nhưng”.', 'Always thank first; use “nhưng” (but) to decline politely.']]
        ]
      },
      ghiChu: '“người Nhật” và “người Nhật Bản” đều đúng; tên nước luôn viết hoa.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu hỏi', en: 'Put the words in order.', dung: ['Vì sao', 'bạn', 'không thích', 'nước chanh?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Yuki là người NHẬT BẢN.”', en: 'Make a question for the capitalised part.', dung: 'Yuki là người nước nào?', sai: ['Yuki là ai?', 'Vì sao Yuki đến Việt Nam?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Tôi đến Việt Nam 1 NĂM rồi.”', dung: 'Bạn đến Việt Nam bao lâu rồi?', sai: ['Bạn đến Việt Nam bao xa?', 'Vì sao bạn đến Việt Nam?'] },
        { loai: 'chon', hoi: 'Bạn mời em uống nước chanh, nhưng em không thích. Câu nào lễ phép nhất?', en: 'Your friend offers lemonade but you don’t like it. Which answer is the most polite?', dung: 'Cảm ơn bạn, nhưng tôi không thích nước chanh.', sai: ['Tôi không thích nước chanh.', 'Không, nước chanh không ngon.'] },
        { loai: 'go', hoi: 'Điền một từ: “Tôi không thích ớt ___ ớt rất cay.”', en: 'Fill in the word for “because”.', dung: ['vì'] }
      ]
    }
  ]
};
