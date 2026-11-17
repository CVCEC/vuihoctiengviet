/* Quyển 2 – Bài 02 «Ai chăm nhất nhà?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Chưa có tệp ghi âm: câu tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “… thế nào?”, “Ai … nhất?” và câu tả người trong gia đình, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand “What is … like?”, “Who is the most …?” and short descriptions of family members, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai hỏi Nam về gia đình', cau: [
          ['Mai', 'Nam ơi, bố cậu thế nào?'], ['Nam', 'Bố tớ hơi nghiêm.'], ['Mai', 'Còn mẹ cậu?'],
          ['Nam', 'Mẹ tớ rất hiền. Mẹ tớ khá trẻ.'], ['Mai', 'Ở nhà cậu, ai chăm nhất?'],
          ['Nam', 'Chị Liên chăm nhất. Chị ấy rất chăm chỉ.'], ['Mai', 'Còn cậu?'], ['Nam', 'Tớ rất vui vẻ!']] },
        { ten: 'Hội thoại B – Liên hỏi Mai về ông bà', cau: [
          ['Liên', 'Mai ơi, ở nhà em, ai nhiều tuổi nhất?'], ['Mai', 'Ông nội em nhiều tuổi nhất ạ. Ông 80 (tám mươi) tuổi.'],
          ['Liên', 'Ông em thế nào?'], ['Mai', 'Ông em khá khoẻ.'], ['Liên', 'Còn bà em?'],
          ['Mai', 'Bà em 78 (bảy mươi tám) tuổi. Bà hơi yếu.'], ['Liên', 'Em gái em thế nào?'], ['Mai', 'Em gái em rất dễ thương.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Bố Nam thế nào?', en: 'What is Nam’s father like?', dung: 'Bố Nam hơi nghiêm.', sai: ['Bố Nam rất hiền.', 'Bố Nam rất vui vẻ.'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Mẹ Nam thế nào? (chọn 2)', en: 'What is Nam’s mother like? (choose 2)', dung: ['rất hiền', 'khá trẻ'], sai: ['hơi nghiêm', 'hơi yếu'] },
        { loai: 'chon', hoi: 'Hội thoại A: Ở nhà Nam, ai chăm nhất?', en: 'Who is the most hard-working in Nam’s family?', dung: 'chị Liên', sai: ['Nam', 'mẹ Nam', 'bố Nam'] },
        { loai: 'chon', hoi: 'Hội thoại B: Ở nhà Mai, ai nhiều tuổi nhất?', en: 'Who is the oldest in Mai’s family?', dung: 'ông nội', sai: ['bà nội', 'em gái'] },
        { loai: 'go', hoi: 'Nghe và điền: “Ông em khá ___.”', nghe: 'Ông em khá khoẻ.', en: 'Listen and fill in the missing word.', dung: ['khoẻ', 'khỏe'] },
        { loai: 'go', hoi: 'Nghe và viết số: “Bà em ___ tuổi.”', nghe: 'Bà em 78 tuổi.', en: 'Listen and write the number.', dung: ['78', 'bảy mươi tám'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp lại câu của Mai', en: 'Put the words in order.', dung: ['Em gái em', 'rất', 'dễ thương.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: người trong gia đình em thế nào?',
      muc: 'viết một đoạn ngắn 3–5 câu tả người trong gia đình, dùng “rất, khá, hơi” và “nhất”.',
      mucEn: 'Goal: write 3–5 simple sentences describing your family members with “rất, khá, hơi” and “nhất”.',
      mau: { ten: 'Đoạn mẫu (Mai viết)', chu: 'Gia đình tôi có năm người. Bố tôi hơi nghiêm. Mẹ tôi rất hiền. Em gái tôi rất dễ thương. Ở nhà tôi, mẹ chăm nhất.' },
      tu: ['đẹp', 'xinh', 'dễ thương', 'vui vẻ', 'thân thiện', 'hiền', 'chăm chỉ'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Mẹ tôi rất ', '.'], ['Chị họ tôi khá ', '.'], ['Bạn tôi rất ', '.']], xong: 'Đúng rồi! Em đã tả người trong gia đình và bạn của em.' },
        vua: { huong: 'Viết 3 câu về 3 người trong gia đình em, mỗi câu dùng “rất”, “khá” hoặc “hơi”.', en: 'Medium: write 3 sentences about 3 family members, each with “rất”, “khá” or “hơi”.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: câu đầu “Gia đình tôi có … người.”, rồi tả từng người, câu cuối nói ai chăm nhất.', en: 'Hard: write 5 sentences. Start with “Gia đình tôi có … người.”, describe each person, and end with who is the most hard-working.', soCau: 5 }
      },
      tuKiemTra: ['“rất, khá, hơi” đứng trước từ tả người: rất hiền, hơi nghiêm.', '“nhất” đứng sau: chăm nhất, nhiều tuổi nhất.', 'Đủ dấu thanh: đẹp, dễ thương, chăm chỉ, nghiêm.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ tả người, đúng dấu thanh, đúng chữ o – ô – ơ, d – đ và viết hoa đầu câu.',
      mucEn: 'Goal: spell describing words with the right tone marks and the letters o, ô, ơ, d, đ; capitalise the first word.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đẹp', en: 'Listen and write the word.', dung: ['đẹp'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'hiền', dung: ['hiền'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nghiêm', dung: ['nghiêm'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'dễ thương', dung: ['dễ thương'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'chăm chỉ', dung: ['chăm chỉ'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng (màu đỏ)', nghe: 'đỏ', en: 'Listen and choose the correct word.', dung: 'đỏ', sai: ['đó', 'dỏ'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng (đỡ em bé)', nghe: 'đỡ', dung: 'đỡ', sai: ['đở', 'dỡ'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng (dỗ em bé)', nghe: 'dỗ', dung: 'dỗ', sai: ['đỗ', 'dổ'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng (bãi cỏ)', nghe: 'cỏ', dung: 'cỏ', sai: ['cổ', 'cọ'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'ơ', en: 'Listen to the letter name and tap the letter.', dung: 'ơ', sai: ['o', 'ô'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'đờ', dung: 'đ', sai: ['d'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'dờ', dung: 'd', sai: ['đ'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “ở nhà chị, ai chăm nhất?”', en: 'Rewrite with a capital letter.', hoa: true, dung: ['Ở nhà chị, ai chăm nhất?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Mẹ chị bảo chị chăm nhất.', en: 'Listen and write the sentence.', hoa: true, dung: ['Mẹ chị bảo chị chăm nhất.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['… thế nào?', 'Bố chị thế nào? – Bố chị hơi nghiêm.', ['Hỏi một người ra sao. Trả lời: người + (rất / khá / hơi) + từ tả người. Không dùng “là”.', 'Ask what someone is like. Do not put “là” before a describing word.']],
          ['rất, khá, hơi', 'rất hiền, khá trẻ, hơi nghiêm', ['Đứng trước từ tả người. rất > khá > hơi. “hơi” hay dùng với điều chưa tốt lắm: hơi yếu.', 'Before the describing word: very > quite > a bit.']],
          ['… nhất', 'Ai chăm nhất? – Ông nội em nhiều tuổi nhất.', ['“nhất” đứng sau từ tả người: hơn tất cả.', '“nhất” = the most; it comes after the word.']],
          ['Còn …?', 'Bố chị thế nào? – … – Còn bà chị?', ['Hỏi lại câu hỏi trước về một người khác.', '“And what about …?” – repeats the last question.']]
        ]
      },
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Bà chị', 'rất', 'hiền.'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Mẹ tôi rất hiền.', sai: ['Mẹ tôi là rất hiền.', 'Mẹ tôi hiền rất.'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Bố em HƠI NGHIÊM.”', en: 'Make a question for the capitalised part.', dung: 'Bố em thế nào?', sai: ['Bố em làm nghề gì?', 'Bố em ở đâu?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “CHỊ LIÊN chăm nhất.”', dung: 'Ai chăm nhất?', sai: ['Chị Liên thế nào?', 'Ai là chăm nhất?'] },
        { loai: 'go', hoi: 'Điền từ: “Ông nội em nhiều tuổi ___.”', en: 'Fill in the missing word.', dung: ['nhất'] },
        { loai: 'xep', hoi: 'Xếp từ thành câu hỏi', en: 'Put the words in order to make a question.', dung: ['Ở nhà em,', 'ai', 'nhiều tuổi', 'nhất?'] }
      ]
    }
  ]
};
