/* Quyển 1 – Bài 13 «Cái ghế này có nặng không?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “… thế nào?”, “… có nặng không?” và câu tả đồ vật bằng cao – thấp, to – nhỏ, nặng – nhẹ, dài – ngắn, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand “What is it like?”, “Is it heavy?” and short descriptions with opposite adjectives, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Liên và Nam trong lớp', cau: [
          ['Liên', 'Nam ơi, cái ba lô này có nặng không?'], ['Nam', 'Có. Cái ba lô này rất nặng.'], ['Liên', 'Còn cái hộp bút kia thế nào?'],
          ['Nam', 'Cái hộp bút ấy nhẹ.'], ['Liên', 'Quyển sách này có to không?'], ['Nam', 'Không. Quyển sách này nhỏ.']] },
        { ten: 'Hội thoại B – Mai và Nam xem tranh', cau: [
          ['Mai', 'Cây dừa kia thế nào?'], ['Nam', 'Cây dừa kia cao quá.'], ['Mai', 'Còn cây chuối? Cây chuối cao, phải không?'],
          ['Nam', 'Không phải. Cây chuối thấp.'], ['Mai', 'Cái ghế này dài, phải không?'], ['Nam', 'Phải. Cái ghế này dài. Cái ghế kia ngắn.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Cái ba lô thế nào?', en: 'What is the backpack like?', dung: 'rất nặng', sai: ['nhẹ', 'nhỏ'] },
        { loai: 'chon', hoi: 'Hội thoại A: Cái hộp bút thế nào?', en: 'What is the pencil case like?', dung: 'nhẹ', sai: ['nặng', 'to'] },
        { loai: 'chon', hoi: 'Hội thoại A: Quyển sách có to không?', en: 'Is the book big?', dung: 'Không. Quyển sách nhỏ.', sai: ['Có. Quyển sách to.', 'Không. Quyển sách nặng.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Cây chuối ___.”', nghe: 'Cây chuối thấp.', en: 'Listen and fill in the missing word.', dung: ['thấp'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Nam nói vật nào cao hoặc dài? (chọn 2)', en: 'Which things are tall or long? (choose 2)', dung: ['cây dừa', 'cái ghế này'], sai: ['cây chuối', 'cái ghế kia'] },
        { loai: 'chon', hoi: 'Hội thoại B: Cái ghế kia thế nào?', en: 'What is the other bench like?', dung: 'ngắn', sai: ['dài', 'cao'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp từ thành câu Nam nói', en: 'Put the words in order to make Nam’s sentence.', dung: ['Cây dừa', 'kia', 'cao', 'quá.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: đồ dùng học tập của em',
      muc: 'viết một đoạn ngắn 3–5 câu đơn tả đồ dùng học tập của em (to – nhỏ, nặng – nhẹ, dài – ngắn).',
      mucEn: 'Goal: write 3–5 simple sentences describing your school things (big – small, heavy – light, long – short).',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Đây là cái ba lô của tôi. Cái ba lô này to và nặng. Quyển sách này rất to. Quyển vở này nhỏ. Cái hộp bút của tôi nhẹ.' },
      tu: ['to', 'nhỏ', 'nặng', 'nhẹ', 'dài', 'ngắn'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Cái ba lô này ', '.'], ['Quyển sách này ', '.'], ['Cái hộp bút này ', '.']], xong: 'Đúng rồi! Em đã tả đồ dùng học tập của em.' },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu về 3 đồ dùng học tập của em.', en: 'Medium: write 3 sentences like the model about 3 of your school things.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: dùng “rất” hoặc “quá” ít nhất một lần, và một câu có “và”.', en: 'Hard: write 5 sentences. Use “rất” or “quá” at least once, and “và” once.', soCau: 5 }
      },
      tuKiemTra: ['Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', '“rất” đứng trước từ tả: rất nặng; “quá” đứng sau: nặng quá.', 'Đủ dấu thanh: nặng, nhẹ, nhỏ, ngắn, quyển vở.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ tả và tên đồ dùng của bài, đúng dấu thanh, đúng chữ o – ô – ơ và viết hoa tên riêng.',
      mucEn: 'Goal: spell the describing words and school things with the right tone marks and the letters o, ô, ơ; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nặng', en: 'Listen and write the word.', dung: ['nặng'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nhẹ', dung: ['nhẹ'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'ngắn', dung: ['ngắn'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'thấp', dung: ['thấp'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'cái kéo', dung: ['cái kéo'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'ba lô', dung: ['ba lô'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: nh_ (không to)', nghe: 'nhỏ', en: 'Choose the right tone mark.', dung: 'nhỏ', sai: ['nhọ', 'nho'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: n_ng (không nhẹ)', nghe: 'nặng', dung: 'nặng', sai: ['nắng', 'nàng'] },
        { loai: 'chon', hoi: 'Chọn chữ đúng: quyển v_ (để viết)', nghe: 'vở', en: 'Choose the right vowel: o, ô or ơ.', dung: 'vở', sai: ['vỏ', 'vổ'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'ô', en: 'Listen to the letter name and tap the letter.', dung: 'ô', sai: ['o', 'ơ'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'ơ', dung: 'ơ', sai: ['o', 'ô'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “cô thơ có cái ô tô to.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Cô Thơ có cái ô tô to.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Cái bàn này rất nặng.', en: 'Listen and write the sentence.', hoa: true, dung: ['Cái bàn này rất nặng.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Cái ghế này có nặng không?', hoa: true, dung: ['Cái ghế này có nặng không?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Hỏi: … thế nào?', 'Cái ghế kia thế nào? – Cái ghế kia dài quá.', ['Hỏi người, vật ra sao. Trả lời bằng từ tả: cao, thấp, dài, ngắn…', '“thế nào?” = what is it like? Answer with a describing word.']],
          ['có + từ tả + không?', 'Cái ghế này có nặng không? – Không, cái ghế này không nặng.', ['Câu hỏi có/không. Trước từ tả không dùng “là”: Cái ghế này nặng (không nói “là nặng”).', 'Yes/no question with an adjective. No “là” before adjectives.']],
          ['rất + từ tả / từ tả + quá', 'rất nặng · to quá · dài quá', ['“rất” đứng trước, “quá” đứng sau từ tả; “quá” hay dùng khi nói, có cảm xúc.', '“rất” = very (before); “quá” = so (after), more emotional.']],
          ['Cặp từ trái nghĩa', 'cao – thấp, dài – ngắn, to – nhỏ, nặng – nhẹ', ['Học theo cặp để dễ nhớ và dễ trả lời câu hỏi “…, phải không?”.', 'Learn adjectives in opposite pairs.']]
        ]
      },
      ghiChu: '“quyển” đứng trước sách, vở: quyển sách, quyển vở; “cái” đứng trước đồ vật khác: cái kéo, cái ba lô.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu hỏi', en: 'Put the words in order.', dung: ['Cái ba lô', 'này', 'có', 'nặng', 'không?'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Cái tủ này rất to.', sai: ['Cái tủ này là rất to.', 'Cái tủ này to rất.'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Cái ghế kia DÀI QUÁ.”', en: 'Make a question for the capitalised part.', dung: 'Cái ghế kia thế nào?', sai: ['Cái ghế kia màu gì?', 'Cái ghế kia là gì?'] },
        { loai: 'chon', hoi: 'Trả lời: “Quả nho này có to không?” (quả nho nhỏ)', en: 'Answer the question. (The grape is small.)', dung: 'Không. Quả nho này nhỏ.', sai: ['Có. Quả nho này nhỏ.', 'Không. Quả nho này to.'] },
        { loai: 'go', hoi: 'Điền từ trái nghĩa: “Cây dừa cao, cây chuối ___.”', en: 'Fill in the opposite word.', dung: ['thấp'] }
      ]
    }
  ]
};
