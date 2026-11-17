/* Quyển 2 – Bài 20 «Ôn tập» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Ôn tổng hợp Bài 16–19 (phương tiện, hỏi đường, quốc tịch – món ăn, sức khoẻ). Dạng bài: assets/js/mo-rong.js; câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu hội thoại kết hợp nhiều mẫu câu của Bài 16–19: hỏi đường, khoảng cách, phương tiện, thời gian, quốc tịch, sức khoẻ.',
      mucEn: 'Goal: understand dialogues that mix the patterns of Lessons 16–19: directions, distance, transport, time, nationality and health. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Emma hỏi đường đến bảo tàng', cau: [
          ['Emma', 'Chào bạn! Bạn cho tôi hỏi, bảo tàng ở đâu?'], ['Nam', 'Bạn đi thẳng đường này, đến ngã tư, rẽ trái.'],
          ['Emma', 'Bảo tàng cách đây bao xa?'], ['Nam', 'Khoảng 2 ki lô mét. Bạn nên đi xe buýt.'],
          ['Emma', 'Đi xe buýt mất bao lâu?'], ['Nam', 'Mất khoảng 10 phút. Bạn là người nước nào?'],
          ['Emma', 'Tôi là người Đức. Cảm ơn bạn!']] },
        { ten: 'Hội thoại B – Yuki bị ốm', cau: [
          ['Nam', 'Yuki ơi, bạn bị làm sao?'], ['Yuki', 'Tôi bị đau bụng và đau đầu.'],
          ['Nam', 'Hôm qua bạn đã ăn gì?'], ['Yuki', 'Tôi đã ăn nhiều kem và uống nước chanh.'],
          ['Nam', 'Bạn nên uống thuốc và nghỉ ngơi. Bạn không nên ăn kem.'], ['Yuki', 'Cảm ơn Nam. Tôi sẽ uống nước ấm.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Emma hỏi đường đến đâu?', en: 'Where does Emma want to go?', dung: 'bảo tàng', sai: ['bưu điện', 'siêu thị'] },
        { loai: 'chon', hoi: 'Hội thoại A: Đi đến đó thế nào?', en: 'Which way should Emma go?', dung: 'Đi thẳng đường này, đến ngã tư, rẽ trái.', sai: ['Đi thẳng đường này, đến ngã tư, rẽ phải.', 'Đi thẳng đường này, đến ngã ba, rẽ trái.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Nam khuyên Emma đi bằng gì?', en: 'How does Nam suggest Emma travel?', dung: 'xe buýt', sai: ['xe đạp', 'ô tô'] },
        { loai: 'go', hoi: 'Nghe và điền: “Mất khoảng ___ phút.”', nghe: 'Mất khoảng 10 phút.', en: 'Listen and write the number.', dung: ['10', 'mười'] },
        { loai: 'chon', hoi: 'Hội thoại A: Emma là người nước nào?', en: 'Where is Emma from?', dung: 'Emma là người Đức.', sai: ['Emma là người Pháp.', 'Emma là người Mỹ.'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Yuki bị làm sao? (chọn 2)', en: 'What is wrong with Yuki? (choose 2)', dung: ['đau bụng', 'đau đầu'], sai: ['ho', 'sốt'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp từ thành lời khuyên của Nam', en: 'Put the words in order to make Nam’s advice.', dung: ['Bạn', 'nên', 'uống thuốc', 'và nghỉ ngơi.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: em và nơi em sống',
      muc: 'viết một đoạn 3–6 câu giới thiệu em, cách em đi lại, một nơi gần nhà và món ăn em thích.',
      mucEn: 'Goal: write 3–6 sentences about yourself, how you travel, a place near your home and a food you like.',
      mau: { ten: 'Đoạn mẫu (Victor viết)', chu: 'Tôi là Victor, tôi là người Pháp. Tôi đến Việt Nam 2 năm rồi. Tôi đi học bằng xe buýt, mất khoảng 20 phút. Siêu thị cách nhà tôi khoảng 300 mét, nên tôi thường đi bộ. Tôi thích ăn bún chả vì bún chả rất ngon.' },
      tu: ['siêu thị', 'công viên', 'nhà sách', 'bưu điện', 'bảo tàng', 'trường'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Nhà tôi cách ', ' khoảng 500 mét.'], ['Cuối tuần, tôi thường đi bộ đến ', '.'], ['Từ nhà tôi đến ', ', đi xe đạp mất khoảng 10 phút.']], xong: 'Đúng rồi! Em đã viết về nơi em sống.' },
        vua: { huong: 'Viết 3 câu: em là người nước nào, em đi học (hoặc đi làm) bằng gì, đi mất bao lâu.', en: 'Medium: write 3 sentences: your nationality, how you go to school or work, how long it takes.', soCau: 3 },
        kho: { huong: 'Viết 6 câu theo đoạn mẫu: thêm một nơi gần nhà (cách bao xa, đi thế nào), một món em thích hoặc không thích (vì sao) và một việc em nên làm để khoẻ.', en: 'Hard: write 6 sentences like the model: add a place near your home, a food you like or dislike (and why), and one thing you should do to stay healthy.', soCau: 6 }
      },
      tuKiemTra: ['Tên người, tên nước, tên thành phố viết hoa: Victor, Pháp, Hà Nội.', 'Dùng đúng: bằng (phương tiện), cách … bao xa, mất bao lâu, vì, nên / không nên.', 'Mỗi câu một ý, viết hoa chữ đầu, kết thúc bằng dấu chấm.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'ôn chính tả các vần của Bài 16–19 (oa, oe, uê, uy, oan, oăn, oăm, oac, oanh, oach, oai, oay), dấu thanh và viết hoa.',
      mucEn: 'Goal: review the rhymes of Lessons 16–19, tone marks and capital letters.',
      cauHoi: [
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng: kh_ (không mệt)', nghe: 'khoẻ', en: 'Listen and choose the right spelling.', dung: 'khoẻ', sai: ['khoẽ', 'khoé'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'tàu thuỷ', dung: 'tàu thuỷ', sai: ['tàu thuỹ', 'tàu thủi'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tóc xoăn', en: 'Listen and write the word.', dung: ['tóc xoăn'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'áo khoác', dung: ['áo khoác'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'quả xoài', dung: ['quả xoài'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'khoanh tay', dung: ['khoanh tay'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'điện thoại', dung: ['điện thoại'] },
        { loai: 'chon', hoi: 'Từ nào có vần oăm?', en: 'Which word has the rhyme oăm?', dung: 'mỏ khoằm', sai: ['ngoạm', 'tóc xoăn'] },
        { loai: 'chon', hoi: 'Từ nào có vần oach?', en: 'Which word has the rhyme oach?', dung: 'thu hoạch', sai: ['áo khoác', 'khoanh tay'] },
        { loai: 'chon', hoi: 'Từ nào có vần uê?', en: 'Which word has the rhyme uê?', dung: 'xum xuê', sai: ['tròn xoe', 'luỹ tre'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “emma là người đức.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Emma là người Đức.'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “từ hà nội đến tokyo, đi máy bay mất 5 tiếng.”', hoa: true, dung: ['Từ Hà Nội đến Tokyo, đi máy bay mất 5 tiếng.', 'Từ Hà Nội đến Tokyo, đi máy bay mất năm tiếng.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu phẩy, dấu chấm hỏi)', nghe: 'Bạn cho tôi hỏi, siêu thị ở đâu?', en: 'Listen and write the sentence.', hoa: true, dung: ['Bạn cho tôi hỏi, siêu thị ở đâu?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Cháu không nên ăn nhiều.', hoa: true, dung: ['Cháu không nên ăn nhiều.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'ôn và phân biệt các mẫu câu hỏi – đáp của Bài 16–19.',
      mucEn: 'Goal: review and tell apart the question patterns of Lessons 16–19.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['bằng gì? · mất bao lâu? · bao xa?', 'Đi bằng gì? – Bằng xe buýt. Mất bao lâu? – Mất 10 phút. Cách đây bao xa? – Khoảng 2 ki lô mét.', ['Ba câu hỏi khác nhau: hỏi phương tiện, hỏi thời gian, hỏi khoảng cách.', 'Three different questions: transport, time, distance.']],
          ['… là người nước nào? · … bao lâu rồi?', 'Victor là người nước nào? – Victor là người Pháp. Bạn đến Việt Nam bao lâu rồi?', ['Hỏi quốc tịch và thời gian từ trước đến bây giờ.', 'Ask about nationality and “how long (up to now)”.']],
          ['Vì sao …? – Vì …', 'Vì sao bạn không thích nước chanh? – Vì nước chanh rất chua.', ['Hỏi và nói lí do.', 'Ask and give a reason.']],
          ['bị · đã · nên / không nên', 'Cháu bị đau bụng. Hôm qua cháu đã ăn gì? Cháu không nên ăn nhiều.', ['“bị” + bệnh; “đã” = việc đã xảy ra; “nên / không nên” để khuyên.', '“bị” + illness; “đã” = past; “nên / không nên” = should / should not.']]
        ]
      },
      ghiChu: 'Lễ phép: với người lớn nói “Bác/Cô cho cháu hỏi, … ở đâu ạ?”; với bạn nói “Bạn cho tôi hỏi, … ở đâu?”.',
      cauHoi: [
        { loai: 'chon', hoi: 'Chọn từ để hỏi: “Từ nhà đến trường, đi xe đạp mất ___?”', en: 'Choose the right question words.', dung: 'bao lâu', sai: ['bao xa', 'bằng gì'] },
        { loai: 'chon', hoi: 'Chọn từ để hỏi: “Bưu điện cách đây ___?”', dung: 'bao xa', sai: ['bao lâu', 'bằng gì'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Emma là người ĐỨC.”', en: 'Make a question for the capitalised part.', dung: 'Emma là người nước nào?', sai: ['Emma là ai?', 'Vì sao Emma đến Việt Nam?'] },
        { loai: 'xep', hoi: 'Xếp thành câu', en: 'Put the parts in order.', dung: ['Tôi không thích', 'nước chanh', 'vì', 'nước chanh rất chua.'] },
        { loai: 'go', hoi: 'Điền một từ: “Bạn bị đau bụng, bạn không ___ ăn nhiều kem.”', en: 'Fill in the word for “should”.', dung: ['nên'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Mẹ em đi làm bằng xe máy.', sai: ['Mẹ em đi làm bằng bộ.', 'Mẹ em bằng xe máy đi làm.'] }
      ]
    }
  ]
};
