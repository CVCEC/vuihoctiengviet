/* Quyển 2 – Bài 01 «Đây là em họ của em à?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Chưa có tệp ghi âm: câu tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi về họ hàng, nghề nghiệp, nơi làm việc và nơi sống, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand questions about relatives, their jobs, workplaces and where they live, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai xem ảnh gia đình Nam', cau: [
          ['Mai', 'Nam ơi, đây là ai?'], ['Nam', 'Đây là bác trai của tớ.'], ['Mai', 'Bác cậu làm nghề gì?'],
          ['Nam', 'Bác tớ là bác sĩ. Bác làm việc ở bệnh viện.'], ['Mai', 'Còn đây là chị họ của cậu à?'],
          ['Nam', 'Đúng. Chị ấy là con của bác tớ.'], ['Mai', 'Chị ấy làm nghề gì?'],
          ['Nam', 'Chị ấy là giáo viên. Chị ấy làm việc ở trường.']] },
        { ten: 'Hội thoại B – Dũng hỏi Nam về ông bà ngoại', cau: [
          ['Dũng', 'Nam ơi, đây là ông bà nội của em à?'], ['Nam', 'Không phải ạ. Đây là ông bà ngoại của em.'],
          ['Dũng', 'Ông bà ngoại của em sống ở đâu?'], ['Nam', 'Ông bà ngoại em sống ở Hà Nội.'],
          ['Dũng', 'Còn đây là ai?'], ['Nam', 'Đây là dì và dượng của em. Dì em bán hàng.'],
          ['Dũng', 'Dượng em làm nghề gì?'], ['Nam', 'Dượng em là thợ xây. Dượng làm việc ở công trường.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Bác trai của Nam làm nghề gì?', en: 'What is the job of Nam’s uncle?', dung: 'Bác ấy là bác sĩ.', sai: ['Bác ấy là giáo viên.', 'Bác ấy là thợ xây.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Chị họ của Nam làm việc ở đâu?', en: 'Where does Nam’s cousin work?', dung: 'ở trường', sai: ['ở bệnh viện', 'ở cửa hàng'] },
        { loai: 'chon', hoi: 'Hội thoại B: Dũng hỏi “Đây là ông bà nội của em à?”. Nam trả lời thế nào?', en: 'How does Nam answer Dũng’s question?', dung: 'Không phải ạ. Đây là ông bà ngoại của em.', sai: ['Vâng. Đây là ông bà nội của em.', 'Đây là dì và dượng của em.'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Nam giới thiệu những ai? (chọn 3)', en: 'Who does Nam introduce? (choose 3)', dung: ['ông bà ngoại', 'dì', 'dượng'], sai: ['bác gái', 'em họ'] },
        { loai: 'go', hoi: 'Nghe và điền: “Ông bà ngoại em sống ở ___.”', nghe: 'Ông bà ngoại em sống ở Hà Nội.', en: 'Listen and fill in the missing words.', dung: ['Hà Nội'] },
        { loai: 'chon', hoi: 'Hội thoại B: Dượng của Nam làm việc ở đâu?', en: 'Where does Nam’s uncle (aunt’s husband) work?', dung: 'ở công trường', sai: ['ở cửa hàng', 'ở trường'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp lại câu của Nam', en: 'Put the words in order.', dung: ['Dượng em', 'là', 'thợ xây.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: giới thiệu một người họ hàng của em',
      muc: 'viết một đoạn ngắn 3–5 câu giới thiệu một người họ hàng: người đó là ai, làm nghề gì, làm việc ở đâu, sống ở đâu.',
      mucEn: 'Goal: write 3–5 sentences about a relative: who they are, their job, where they work and live.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Đây là bác trai của tôi. Bác tôi là bác sĩ. Bác làm việc ở bệnh viện. Bác sống ở Hà Nội. Chị họ của tôi là con của bác.' },
      tu: ['ông nội', 'bà ngoại', 'bác trai', 'bác gái', 'dì', 'dượng', 'anh họ', 'chị họ'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Đây là ', ' của tôi.'], ['Còn đây là ', ' của tôi.'], ['Đây là ảnh ', ' của tôi.']], xong: 'Đúng rồi! Em đã giới thiệu họ hàng của em.' },
        vua: { huong: 'Viết 3 câu về một người họ hàng: người đó là ai, làm nghề gì, làm việc ở đâu.', en: 'Medium: write 3 sentences: who, what job, where they work.', soCau: 3 },
        kho: { huong: 'Viết 5 câu theo đoạn mẫu: thêm người đó sống ở đâu, và một câu “… là con của …”.', en: 'Hard: write 5 sentences like the model. Add where they live and one sentence “… là con của …”.', soCau: 5 }
      },
      tuKiemTra: ['Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Tên riêng viết hoa: Nam, Hà Nội.', 'Đủ dấu thanh: bác sĩ, dượng, họ, ngoại.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ chỉ họ hàng và nghề nghiệp, đúng dấu thanh, đúng chữ a – ă – â – c và viết hoa tên riêng.',
      mucEn: 'Goal: spell family and job words with the right tone marks and the letters a, ă, â, c; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bác', en: 'Listen and write the word.', dung: ['bác'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'dượng', dung: ['dượng'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'em họ', dung: ['em họ'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bà ngoại', dung: ['bà ngoại'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'giáo viên', dung: ['giáo viên'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'cửa hàng', dung: ['cửa hàng'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: c_ (con cá)', nghe: 'cá', en: 'Choose the right tone mark.', dung: 'cá', sai: ['cà', 'cả'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: c_ (quả cà tím)', nghe: 'cà', dung: 'cà', sai: ['cá', 'ca'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng (chồng của dì)', nghe: 'dượng', en: 'Choose the correct spelling.', dung: 'dượng', sai: ['dương', 'đượng'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'cờ', en: 'Listen to the letter name and tap the letter.', dung: 'c', sai: ['ch', 'k'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'á', dung: 'ă', sai: ['a', 'â'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'ớ', dung: 'â', sai: ['a', 'ă'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “hai bác ở hà nội.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Hai bác ở Hà Nội.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Đây là em họ của em à?', en: 'Listen and write the sentence.', hoa: true, dung: ['Đây là em họ của em à?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Danh từ + của + người', 'hai bác của chị, em họ của em', ['“của” nối người, vật với người sở hữu. Với người thân có thể bỏ “của”: “bác tôi”.', '“của” = of / ’s. With family words it can be dropped.']],
          ['Câu hỏi với “à?”', 'Đây là em họ của em à?', ['Thêm “à” cuối câu để hỏi lại điều mình nghĩ là đúng. Trả lời: Vâng. / Không phải.', 'Add “à” at the end to check something you think is true.']],
          ['… làm nghề gì?', 'Hai bác của chị làm nghề gì? – Bác trai là giáo viên.', ['Hỏi nghề. Trả lời: người + là + nghề.', 'Ask about a job. Answer: person + “là” + job.']],
          ['… ở đâu?', 'Bác gái làm việc ở đâu? – Bác gái làm việc ở cửa hàng.', ['“ở đâu” đứng cuối câu hỏi; khi trả lời, thay “đâu” bằng nơi chốn.', '“ở đâu” = where; in the answer, replace “đâu” with the place.']]
        ]
      },
      ghiChu: 'Khi trả lời người lớn, nhớ thêm “ạ”: “Không phải ạ.”, “Vâng ạ.”',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Bác gái', 'làm việc', 'ở', 'cửa hàng.'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Bác trai là GIÁO VIÊN.”', en: 'Make a question for the capitalised part.', dung: 'Bác trai làm nghề gì?', sai: ['Bác trai làm việc ở đâu?', 'Bác trai là ai?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Hai bác sống Ở HÀ NỘI.”', dung: 'Hai bác sống ở đâu?', sai: ['Hai bác làm nghề gì?', 'Hai bác là ai?'] },
        { loai: 'chon', hoi: 'Em nghĩ đây là chị họ của bạn. Em hỏi lại thế nào?', en: 'You think this is your friend’s cousin. How do you check?', dung: 'Đây là chị họ của bạn à?', sai: ['Đây à là chị họ của bạn?', 'Đây là chị họ à của bạn?'] },
        { loai: 'go', hoi: 'Điền từ: “Em ấy là con ___ dì và dượng em.”', en: 'Fill in the missing word.', dung: ['của'] },
        { loai: 'xep', hoi: 'Xếp từ thành câu hỏi', en: 'Put the words in order to make a question.', dung: ['Hai bác', 'của chị', 'làm nghề gì?'] }
      ]
    }
  ]
};
