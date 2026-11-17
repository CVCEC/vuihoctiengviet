/* Quyển 1 – Bài 18 «Cậu thích mặc áo màu gì?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “… màu gì?” và câu nói về quần áo, màu sắc mình thích hoặc không thích, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand “What colour …?” and short sentences about clothes and colours people like or don’t like, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Hương và Mai nói về màu yêu thích', cau: [
          ['Hương', 'Mai ơi, cậu thích mặc áo màu gì?'], ['Mai', 'Tớ thích mặc áo màu vàng hoặc màu cam. Còn cậu?'],
          ['Hương', 'Tớ thích mặc áo màu xanh. Tớ không thích áo màu cam.'], ['Mai', 'Cậu thích đội mũ màu gì?'],
          ['Hương', 'Tớ thích đội mũ màu trắng.'], ['Mai', 'Tớ cũng thích đội mũ màu trắng. Rất đẹp.']] },
        { ten: 'Hội thoại B – Hôm nay Nam mặc gì?', cau: [
          ['Mẹ', 'Nam ơi, hôm nay con mặc áo màu gì?'], ['Nam', 'Con mặc áo màu trắng, quần màu xanh ạ.'],
          ['Mẹ', 'Con đi giày màu gì?'], ['Nam', 'Con đi giày màu đen ạ.'],
          ['Mẹ', 'Con có quàng khăn không?'], ['Nam', 'Có ạ. Con quàng khăn màu đỏ.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Mai thích mặc áo màu gì?', en: 'What colour shirt does Mai like to wear?', dung: 'màu vàng hoặc màu cam', sai: ['màu xanh', 'màu trắng'] },
        { loai: 'chon', hoi: 'Hội thoại A: Hương không thích áo màu gì?', en: 'What colour shirt does Hương not like?', dung: 'màu cam', sai: ['màu xanh', 'màu trắng'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Ai thích đội mũ màu trắng? (chọn 2)', en: 'Who likes wearing a white hat? (choose 2)', dung: ['Hương', 'Mai'], sai: ['Nam', 'Lan'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Hôm nay Nam mặc, đi, quàng gì? (chọn 3)', en: 'What is Nam wearing today? (choose 3)', dung: ['áo màu trắng', 'giày màu đen', 'khăn màu đỏ'], sai: ['quần màu đen', 'mũ màu trắng'] },
        { loai: 'go', hoi: 'Nghe và điền: “Con đi giày màu ___ ạ.”', nghe: 'Con đi giày màu đen ạ.', en: 'Listen and fill in the missing word.', dung: ['đen'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp lại câu của Nam', en: 'Put Nam’s sentence in order.', dung: ['Con', 'quàng khăn', 'màu', 'đỏ.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: quần áo và màu em thích',
      muc: 'viết một đoạn ngắn 3–5 câu đơn nói em thích và không thích mặc quần áo màu gì.',
      mucEn: 'Goal: write 3–5 simple sentences about the clothes and colours you like and don’t like.',
      mau: { ten: 'Đoạn mẫu (Lan viết)', chu: 'Tôi thích màu hồng và màu tím. Tôi thích mặc váy màu hồng hoặc màu tím. Tôi thích đi giày trắng, đội mũ trắng. Tôi không thích giày màu nâu. Hôm nay tôi mặc váy màu tím.' },
      tu: ['trắng', 'đen', 'đỏ', 'vàng', 'xanh', 'tím', 'hồng', 'nâu'],
      muc_: {
        de: { huong: 'Chọn màu để điền vào 3 câu.', en: 'Easy: choose a colour for each blank.', khung: [['Tôi thích mặc áo màu ', '.'], ['Tôi thích đội mũ màu ', '.'], ['Tôi không thích đi giày màu ', '.']], xong: 'Đúng rồi! Em đã nói được màu em thích và không thích.' },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu: em thích mặc, đội, đi gì, màu gì.', en: 'Medium: write 3 sentences like the model about what you like to wear and in what colour.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: có một câu dùng “hoặc”, một câu “Tôi không thích …”, câu cuối nói hôm nay em mặc gì.', en: 'Hard: write 5 sentences. Use “hoặc” once and “Tôi không thích …” once; end with what you are wearing today.', soCau: 5 }
      },
      tuKiemTra: ['Đúng động từ: mặc áo, quần, váy; đội mũ; đi giày, tất; quàng khăn.', 'Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Đủ dấu: màu, trắng, đỏ, váy, giày, mũ.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng tên quần áo và màu sắc, đúng dấu thanh, đúng chữ th – tr và viết hoa tên riêng.',
      mucEn: 'Goal: spell clothes and colour words with the right tone marks and the letters th, tr; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'quần', en: 'Listen and write the word.', dung: ['quần'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'váy', dung: ['váy'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'giày', dung: ['giày', 'giầy'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'khăn', dung: ['khăn'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'màu hồng', dung: ['màu hồng'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'màu trắng', dung: ['màu trắng'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: đội m_', nghe: 'mũ', en: 'Choose the right tone mark.', dung: 'mũ', sai: ['mụ', 'mù'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng (đi giày)', nghe: 'giày', en: 'Choose the correct spelling.', dung: 'giày', sai: ['dày', 'giáy'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'thờ', en: 'Listen to the letter name and tap the letter.', dung: 'th', sai: ['t', 'tr'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'trờ', dung: 'tr', sai: ['ch', 'th'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng (màu …)', nghe: 'trắng', dung: 'trắng', sai: ['chắng', 'thắng'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “lan thích mặc váy màu tím.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Lan thích mặc váy màu tím.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Tôi thích đội mũ màu trắng.', en: 'Listen and write the sentence.', hoa: true, dung: ['Tôi thích đội mũ màu trắng.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Cậu thích mặc áo màu gì?', hoa: true, dung: ['Cậu thích mặc áo màu gì?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Hỏi màu: … màu gì?', 'Cậu thích mặc váy màu gì?', ['“màu gì” hỏi về màu. Trả lời: đồ vật + màu + tên màu.', '“màu gì?” = what colour? Answer: item + màu + colour.']],
          ['thích / không thích + động từ', 'Tớ thích mặc váy màu hồng. Tớ không thích giày màu nâu.', ['“thích” đứng trước việc mình muốn làm; phủ định thì thêm “không” trước “thích”.', '“thích” + verb = like doing; “không thích” = don’t like.']],
          ['Động từ đi với quần áo', 'mặc áo, đội mũ, đi giày, quàng khăn', ['Mỗi đồ dùng một động từ: mặc (áo, quần, váy), đội (mũ), đi (giày, tất), quàng (khăn).', 'Different verbs for wearing: mặc clothes, đội hats, đi shoes/socks, quàng scarves.']],
          ['hoặc: nêu hai lựa chọn', 'màu hồng hoặc màu tím', ['“hoặc” nối hai lựa chọn trong câu kể.', '“hoặc” = or (in statements).']]
        ]
      },
      ghiChu: '“hay” dùng trong câu hỏi (Bài 17: xa hay gần?), “hoặc” dùng trong câu kể. Có thể nói “áo màu trắng” hoặc ngắn hơn “áo trắng”.',
      cauHoi: [
        { loai: 'chon', hoi: 'Chọn từ đúng: “Tớ ___ mũ màu vàng.”', en: 'Choose the right verb.', dung: 'đội', sai: ['mặc', 'đi'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Mai ___ giày màu nâu.”', en: 'Choose the right verb.', dung: 'đi', sai: ['đội', 'quàng'] },
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Tớ', 'không thích', 'áo', 'màu', 'cam.'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Nam thích mặc áo màu TRẮNG.”', en: 'Make a question for the capitalised part.', dung: 'Nam thích mặc áo màu gì?', sai: ['Nam thích mặc gì?', 'Ai thích mặc áo màu trắng?'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Tôi thích mặc áo màu đỏ.', sai: ['Tôi thích màu đỏ áo mặc.', 'Tôi mặc thích áo màu đỏ.'] },
        { loai: 'go', hoi: 'Điền từ (câu kể): “Tớ thích váy màu hồng ___ màu tím.”', en: 'Fill in the word meaning “or” (statement).', dung: ['hoặc'] }
      ]
    }
  ]
};
