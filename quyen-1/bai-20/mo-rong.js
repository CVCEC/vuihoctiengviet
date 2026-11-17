/* Quyển 1 – Bài 20 «Ôn tập» (ôn Bài 16–19) – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu hội thoại ngắn kết hợp các mẫu câu của Bài 16–19: hỏi nghề, hỏi nơi chốn, nói màu quần áo yêu thích và so sánh, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand short conversations that combine Lessons 16–19: jobs, places, favourite clothes and colours, and comparisons, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Hương hỏi Nam về chú Tiến và chú Linh', cau: [
          ['Hương', 'Nam ơi, chú Tiến làm nghề gì?'], ['Nam', 'Chú Tiến là kĩ sư.'],
          ['Hương', 'Hôm nay chú ấy ở đâu?'], ['Nam', 'Chú ấy ở công trường, bên cạnh trường tớ.'],
          ['Hương', 'Công trường xa hay gần nhà cậu?'], ['Nam', 'Gần nhà tớ. Chú Tiến đi xe máy.'],
          ['Hương', 'Chú Linh có phải là kĩ sư không?'], ['Nam', 'Không, chú Linh không phải là kĩ sư. Chú ấy là cảnh sát.']] },
        { ten: 'Hội thoại B – Mai và Lan ở cửa hàng', cau: [
          ['Mai', 'Lan ơi, cậu thích váy màu gì?'], ['Lan', 'Tớ thích váy màu hồng hoặc màu tím.'],
          ['Mai', 'Váy màu hồng hay váy màu tím đắt hơn?'], ['Lan', 'Váy màu tím đắt hơn váy màu hồng.'],
          ['Mai', 'Váy màu hồng có đẹp không?'], ['Lan', 'Có. Tớ muốn mua váy màu hồng.'],
          ['Mai', 'Mũ trắng kia ở trên tủ. Cậu có thích không?'], ['Lan', 'Có. Tớ thích đội mũ trắng.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Chú Tiến làm nghề gì?', en: 'What does uncle Tiến do?', dung: 'kĩ sư', sai: ['cảnh sát', 'bác sĩ'] },
        { loai: 'chon', hoi: 'Hội thoại A: Hôm nay chú Tiến ở đâu?', en: 'Where is uncle Tiến today?', dung: 'Ở công trường, bên cạnh trường Nam.', sai: ['Ở bệnh viện, bên cạnh trường Nam.', 'Ở công trường, đối diện trường Nam.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Chú Linh có phải là kĩ sư không?', en: 'Is uncle Linh an engineer?', dung: 'Không, chú Linh là cảnh sát.', sai: ['Đúng, chú Linh là kĩ sư.', 'Không, chú Linh là bác sĩ.'] },
        { loai: 'xep', hoi: 'Hội thoại A: xếp lại câu trả lời của Nam', en: 'Put Nam’s answer in order.', dung: ['Chú ấy', 'ở', 'công trường,', 'bên cạnh', 'trường tớ.'] },
        { loai: 'chon', hoi: 'Hội thoại B: Váy nào rẻ hơn?', en: 'Which dress is cheaper?', dung: 'Váy màu hồng rẻ hơn váy màu tím.', sai: ['Váy màu tím rẻ hơn váy màu hồng.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Mũ trắng kia ở ___ tủ.”', nghe: 'Mũ trắng kia ở trên tủ.', en: 'Listen and fill in the missing word.', dung: ['trên'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Lan nói gì? (chọn 2)', en: 'What does Lan say? (choose 2)', dung: ['Tớ muốn mua váy màu hồng.', 'Tớ thích đội mũ trắng.'], sai: ['Tớ thích váy màu nâu.', 'Váy màu hồng đắt hơn.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: giới thiệu một người em quen',
      muc: 'viết một đoạn ngắn 3–5 câu đơn giới thiệu một người em quen: nghề, nơi người đó ở, quần áo người đó thích, có một câu so sánh.',
      mucEn: 'Goal: write 3–5 simple sentences about someone you know: their job, where they are, the clothes they like, and one comparison.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Đây là chú Tiến. Chú Tiến là kĩ sư. Chú ấy ở công trường, gần nhà tôi. Chú ấy thích mặc áo màu xanh, đội mũ màu trắng. Chú ấy đi xe máy. Xe máy nhanh hơn xe đạp.' },
      tu: ['bác sĩ', 'giáo viên', 'kĩ sư', 'thợ may', 'thợ xây', 'cảnh sát', 'người bán hàng'],
      muc_: {
        de: { huong: 'Chọn nghề để điền vào 3 câu.', en: 'Easy: choose a job for each blank.', khung: [['Bố tôi là ', '.'], ['Chú tôi là ', '.'], ['Bạn tôi là ', '.']], xong: 'Đúng rồi! Em đã nói được nghề của người em quen.' },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu: người đó là ai, làm nghề gì, ở đâu.', en: 'Medium: write 3 sentences like the model: who the person is, their job, and where they are.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: người đó là ai, làm nghề gì, ở đâu, thích mặc gì, và một câu so sánh “… hơn …”.', en: 'Hard: write 5 sentences: who, job, where, favourite clothes, and one comparison with “hơn”.', soCau: 5 }
      },
      tuKiemTra: ['Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Tên người, tên trường, tên đường viết hoa.', 'Câu so sánh đúng thứ tự: A + tính từ + hơn + B.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'ôn chính tả Bài 16–19: từ chỉ nghề, nơi chốn, quần áo, xe cộ; dấu thanh; các chữ p, qu, r, t, th, tr, s, x, v; viết hoa tên riêng.',
      mucEn: 'Goal: review spelling from Lessons 16–19: jobs, places, clothes, vehicles, tone marks, the letters p, qu, r, t, th, tr, s, x, v, and capital letters.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'thợ may', en: 'Listen and write the word.', dung: ['thợ may'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'cảnh sát', dung: ['cảnh sát'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'công trường', dung: ['công trường'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đối diện', dung: ['đối diện'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'quàng khăn', dung: ['quàng khăn'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tàu thuỷ', dung: ['tàu thuỷ', 'tàu thủy'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: đ_t (không rẻ)', nghe: 'đắt', en: 'Choose the right tone mark.', dung: 'đắt', sai: ['đặt', 'đất'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: nh_ (không nặng)', nghe: 'nhẹ', dung: 'nhẹ', sai: ['nhé', 'nhè'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'trờ', en: 'Listen to the letter name and tap the letter.', dung: 'tr', sai: ['ch', 'th'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'xờ', dung: 'x', sai: ['s', 'v'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'quờ', dung: 'qu', sai: ['p', 'c'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “mai học ở trường ngôi sao.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Mai học ở Trường Ngôi Sao.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Cô ấy làm nghề gì?', en: 'Listen and write the sentence.', hoa: true, dung: ['Cô ấy làm nghề gì?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Tàu thuỷ nặng hơn thuyền.', hoa: true, dung: ['Tàu thuỷ nặng hơn thuyền.', 'Tàu thủy nặng hơn thuyền.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'ôn và dùng đúng 4 điểm ngữ pháp của Bài 16–19.',
      mucEn: 'Goal: review and use the 4 grammar points of Lessons 16–19.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Hỏi nghề: … làm nghề gì? / … có phải là … không?', 'Cô ấy làm nghề gì? – Cô ấy là giáo viên.', ['Trả lời: người + là + nghề. Phủ định: “không phải là”.', 'Answer: person + là + job. Negative: “không phải là”.']],
          ['Hỏi nơi chốn: … ở đâu?', 'Người bán hàng ở đâu? – Người bán hàng ở trong cửa hàng.', ['Trả lời: … ở + từ chỉ vị trí + nơi chốn.', 'Answer: … ở + position word + place.']],
          ['Hỏi màu: … thích + mặc/đội/đi … màu gì?', 'Bạn thích mặc áo màu gì? – Tôi thích mặc áo màu vàng.', ['Mặc áo, quần, váy; đội mũ; đi giày, tất; quàng khăn.', 'Use the right verb for each item of clothing.']],
          ['So sánh: A + tính từ + hơn + B; … nào … hơn?', 'Xe máy và xe đạp, xe nào nhanh hơn? – Xe máy nhanh hơn xe đạp.', ['“hơn” đứng sau tính từ, trước vật được so sánh.', 'Comparative: A + adjective + hơn + B.']]
        ]
      },
      ghiChu: 'Ba cách nói lựa chọn: “hay” trong câu hỏi (xa hay gần?), “hoặc” trong câu kể (màu hồng hoặc màu tím), “nào” để hỏi chọn một (xe nào?).',
      cauHoi: [
        { loai: 'chon', hoi: 'Câu “Cô Hằng là cảnh sát.” trả lời câu hỏi nào?', en: 'Which question does this sentence answer?', dung: 'Cô Hằng làm nghề gì?', sai: ['Cô Hằng ở đâu?', 'Cô Hằng thích mặc áo màu gì?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Con mèo ở TRƯỚC CỬA.”', en: 'Make a question for the capitalised part.', dung: 'Con mèo ở đâu?', sai: ['Con mèo đang làm gì?', 'Con mèo thế nào?'] },
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Tôi', 'thích', 'đội', 'mũ', 'màu', 'vàng.'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Xe buýt to hơn ô tô con.', sai: ['Xe buýt hơn to ô tô con.', 'Xe buýt to ô tô con hơn.'] },
        { loai: 'go', hoi: 'Điền từ: “Bà ấy ___ phải là thợ may.”', en: 'Fill in the missing word (negative).', dung: ['không'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Bố tôi ___ giày màu đen.”', en: 'Choose the right verb.', dung: 'đi', sai: ['đội', 'mặc'] }
      ]
    }
  ]
};
