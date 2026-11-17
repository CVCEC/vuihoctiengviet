/* Quyển 1 – Bài 14 «Hôm nay là thứ mấy?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Không hỏi ngày sinh của người học (quy tắc dữ liệu của trường): bài viết chỉ nói về hôm nay và ngày, mùa em thích.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi về thứ, ngày, tháng, tuổi và câu trả lời lễ phép “Thưa cô, … ạ.”, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand questions about the day, date, month and age, and polite answers to a teacher, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Đầu giờ học', cau: [
          ['Cô giáo', 'Chào các em!'], ['Nam', 'Chúng em chào cô ạ!'], ['Cô giáo', 'Hôm nay là thứ mấy, Vũ?'],
          ['Vũ', 'Thưa cô, hôm nay là thứ Sáu ạ.'], ['Cô giáo', 'Hôm nay là ngày bao nhiêu?'], ['Hương', 'Thưa cô, hôm nay là ngày 15 ạ.'],
          ['Cô giáo', 'Tháng này là tháng mấy?'], ['Lê', 'Thưa cô, tháng này là tháng Mười ạ.']] },
        { ten: 'Hội thoại B – Sinh nhật Nam', cau: [
          ['Mai', 'Nam ơi, sinh nhật cậu là ngày nào?'], ['Nam', 'Sinh nhật tớ là ngày 20 tháng Mười một.'], ['Mai', 'Năm nay cậu mấy tuổi?'],
          ['Nam', 'Tớ 7 tuổi.'], ['Mai', 'Tháng Mười một là mùa đông, phải không?'], ['Nam', 'Phải. Tớ thích mùa đông lắm.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Hôm nay là thứ mấy?', en: 'What day is it today?', dung: 'thứ Sáu', sai: ['thứ Năm', 'thứ Bảy'] },
        { loai: 'go', hoi: 'Nghe và điền số: “Thưa cô, hôm nay là ngày ___ ạ.”', nghe: 'Thưa cô, hôm nay là ngày 15 ạ.', en: 'Listen and write the date.', dung: ['15', 'mười lăm'] },
        { loai: 'chon', hoi: 'Hội thoại A: Tháng này là tháng mấy?', en: 'What month is it?', dung: 'tháng Mười', sai: ['tháng Mười một', 'tháng Mười hai'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Các bạn dùng những từ nào để trả lời cô lễ phép? (chọn 2)', en: 'Which words make the answers polite? (choose 2)', dung: ['Thưa cô', 'ạ'], sai: ['cậu', 'tớ'] },
        { loai: 'chon', hoi: 'Hội thoại B: Sinh nhật Nam là ngày nào?', en: 'When is Nam’s birthday?', dung: 'ngày 20 tháng Mười một', sai: ['ngày 20 tháng Mười', 'ngày 22 tháng Mười một'] },
        { loai: 'go', hoi: 'Nghe và điền số: “Tớ ___ tuổi.”', nghe: 'Tớ 7 tuổi.', en: 'Listen and write the number.', dung: ['7', 'bảy'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp từ thành câu hỏi của Mai', en: 'Put the words in order to make Mai’s question.', dung: ['Năm nay', 'cậu', 'mấy', 'tuổi?'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: hôm nay của em',
      muc: 'viết một đoạn ngắn 3–5 câu đơn nói hôm nay là thứ mấy, ngày bao nhiêu, tháng mấy, mùa gì và ngày em thích.',
      mucEn: 'Goal: write 3–5 simple sentences about today’s day, date, month and season, and the day you like.',
      mau: { ten: 'Đoạn mẫu (Mai viết)', chu: 'Hôm nay là thứ Ba. Hôm nay là ngày 22. Tháng này là tháng Tư. Hôm nay là sinh nhật tôi. Năm nay tôi 6 tuổi.' },
      tu: ['thứ Hai', 'thứ Ba', 'thứ Tư', 'thứ Năm', 'thứ Sáu', 'thứ Bảy', 'Chủ nhật'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a day for each blank.', khung: [['Hôm nay là ', '.'], ['Tôi thích ', ' lắm.'], ['Tôi không thích ', '.']], xong: 'Đúng rồi! Em đã nói về các ngày trong tuần.' },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu: hôm nay là thứ mấy, ngày bao nhiêu, tháng mấy.', en: 'Medium: write 3 sentences like the model: today’s day, date and month.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: thứ, ngày, tháng hôm nay; bây giờ là mùa gì; em thích ngày nào trong tuần.', en: 'Hard: write 5 sentences: today’s day, date and month; the season now; your favourite day of the week.', soCau: 5 }
      },
      tuKiemTra: ['Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Viết tên thứ, tháng như trong sách: thứ Ba, tháng Tư, Chủ nhật.', 'Đủ dấu thanh: thứ, tháng, Bảy, Sáu, Chủ nhật, tuổi.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ về thứ, ngày, tháng, đúng dấu thanh, đúng chữ u – ư và viết hoa tên riêng.',
      mucEn: 'Goal: spell words for days, dates and months with the right tone marks and the letters u, ư; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'thứ', en: 'Listen and write the word.', dung: ['thứ'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tháng', dung: ['tháng'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'ngày', dung: ['ngày'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tuổi', dung: ['tuổi'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'sinh nhật', dung: ['sinh nhật'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: th_ (thứ Hai)', nghe: 'thứ', en: 'Choose the right tone mark.', dung: 'thứ', sai: ['thừ', 'thử'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: thứ B_y', nghe: 'thứ Bảy', dung: 'thứ Bảy', sai: ['thứ Bày', 'thứ Báy'] },
        { loai: 'chon', hoi: 'Nghe và chọn chữ đúng (u hay ư)', nghe: 'thứ Tư', en: 'Listen and choose u or ư.', dung: 'thứ Tư', sai: ['thứ Tu', 'thứ Từ'] },
        { loai: 'chon', hoi: 'Nghe và chọn chữ đúng (u hay ư)', nghe: 'mùa thu', dung: 'mùa thu', sai: ['mừa thu', 'mùa thư'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'u', en: 'Listen to the letter name and tap the letter.', dung: 'u', sai: ['ư', 'ô'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'ư', dung: 'ư', sai: ['u', 'ơ'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “chú tùng là một kĩ sư.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Chú Tùng là một kĩ sư.', 'Chú Tùng là một kỹ sư.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Hôm nay là thứ mấy?', en: 'Listen and write the sentence.', hoa: true, dung: ['Hôm nay là thứ mấy?'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Năm nay em mấy tuổi?', hoa: true, dung: ['Năm nay em mấy tuổi?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Hỏi: thứ mấy? / tháng mấy?', 'Hôm nay là thứ mấy? Tháng này là tháng mấy?', ['“mấy” hỏi về số, đứng ở chỗ của câu trả lời: thứ mấy → thứ Ba.', '“mấy” asks for a number; it stays where the answer goes.']],
          ['Hỏi: ngày bao nhiêu?', 'Hôm nay là ngày bao nhiêu? – Hôm nay là ngày 22.', ['Hỏi ngày trong tháng (từ 1 tới 31) thường dùng “bao nhiêu”.', 'Use “bao nhiêu” to ask the date (1–31).']],
          ['Hỏi tuổi: … mấy tuổi?', 'Mai mấy tuổi? – Tớ 6 tuổi.', ['Trả lời: số + tuổi; không dùng “là”.', 'Answer with number + “tuổi”; no “là”.']],
          ['Lễ phép: Thưa cô, … ạ.', 'Thưa cô, hôm nay là thứ Ba ạ.', ['Trả lời thầy cô, người lớn: mở đầu “Thưa cô (thầy)”, cuối câu thêm “ạ”.', 'Polite to teachers and elders: start with “Thưa cô”, end with “ạ”.']]
        ]
      },
      ghiChu: 'Nói ngày tháng theo thứ tự: thứ – ngày – tháng. Ví dụ: “Hôm nay là thứ Ba, ngày 22 tháng Tư.”',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu hỏi', en: 'Put the words in order.', dung: ['Hôm nay', 'là', 'ngày', 'bao nhiêu?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Tháng này là THÁNG TƯ.”', en: 'Make a question for the capitalised part.', dung: 'Tháng này là tháng mấy?', sai: ['Hôm nay là thứ mấy?', 'Hôm nay là ngày bao nhiêu?'] },
        { loai: 'chon', hoi: 'Chọn câu trả lời lễ phép với cô giáo', en: 'Choose the polite answer to the teacher.', dung: 'Thưa cô, hôm nay là thứ Năm ạ.', sai: ['Hôm nay là thứ Năm, cậu.', 'Tớ nói: hôm nay là thứ Năm.'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Năm nay em 7 tuổi.', sai: ['Năm nay em là 7 tuổi.', 'Năm nay em tuổi 7.'] },
        { loai: 'go', hoi: 'Điền từ để hỏi: “Hôm nay là thứ ___?”', en: 'Fill in the question word.', dung: ['mấy'] }
      ]
    }
  ]
};
