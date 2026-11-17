/* Quyển 1 – Bài 16 «Cô ấy làm nghề gì?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi về nghề nghiệp “… làm nghề gì?”, “… có phải là … không?” và câu trả lời có “không phải là”, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand questions about jobs (“What does … do?”, “Is … a …?”) and answers with “không phải là”, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Nam hỏi Hương về gia đình', cau: [
          ['Nam', 'Hương ơi, bố cậu làm nghề gì?'], ['Hương', 'Bố tớ là kĩ sư.'], ['Nam', 'Mẹ cậu có phải là kĩ sư không?'],
          ['Hương', 'Không, mẹ tớ không phải là kĩ sư. Mẹ tớ là thợ may.'], ['Nam', 'Còn anh cậu? Anh ấy làm nghề gì?'],
          ['Hương', 'Anh tớ là cảnh sát.']] },
        { ten: 'Hội thoại B – Mai gặp cô Hoa', cau: [
          ['Mai', 'Cháu chào cô ạ.'], ['Cô Hoa', 'Chào cháu. Cháu là học sinh, phải không?'], ['Mai', 'Phải ạ. Cô có phải là bác sĩ không ạ?'],
          ['Cô Hoa', 'Không, cô không phải là bác sĩ. Cô là giáo viên.'], ['Mai', 'Còn chú ấy làm nghề gì ạ?'],
          ['Cô Hoa', 'Chú ấy là thợ xây.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Bố Hương làm nghề gì?', en: 'What does Hương’s father do?', dung: 'Bố Hương là kĩ sư.', sai: ['Bố Hương là thợ may.', 'Bố Hương là cảnh sát.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Mẹ Hương có phải là kĩ sư không?', en: 'Is Hương’s mother an engineer?', dung: 'Không, mẹ Hương là thợ may.', sai: ['Đúng, mẹ Hương là kĩ sư.', 'Không, mẹ Hương là giáo viên.'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Những nghề nào có trong hội thoại? (chọn 3)', en: 'Which jobs are in the conversation? (choose 3)', dung: ['kĩ sư', 'thợ may', 'cảnh sát'], sai: ['bác sĩ', 'thợ xây'] },
        { loai: 'chon', hoi: 'Hội thoại B: Cô Hoa làm nghề gì?', en: 'What does Ms Hoa do?', dung: 'giáo viên', sai: ['bác sĩ', 'học sinh'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp lại câu Mai hỏi cô Hoa', en: 'Put Mai’s question in order.', dung: ['Cô', 'có phải là', 'bác sĩ', 'không ạ?'] },
        { loai: 'go', hoi: 'Nghe và điền: “Chú ấy là thợ ___.”', nghe: 'Chú ấy là thợ xây.', en: 'Listen and fill in the missing word.', dung: ['xây'] },
        { loai: 'chon', hoi: 'Hội thoại B: Mai chào cô Hoa thế nào?', en: 'How does Mai greet Ms Hoa?', dung: 'Cháu chào cô ạ.', sai: ['Chào cháu.', 'Chào cô!'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: nghề của người trong gia đình em',
      muc: 'viết một đoạn ngắn 3–5 câu đơn nói về nghề của người trong gia đình, có câu “không phải là”.',
      mucEn: 'Goal: write 3–5 simple sentences about the jobs of your family members, including one “không phải là” sentence.',
      mau: { ten: 'Đoạn mẫu (Hương viết)', chu: 'Đây là gia đình tôi. Bố tôi là kĩ sư. Mẹ tôi là thợ may. Mẹ tôi không phải là giáo viên. Anh tôi là cảnh sát.' },
      tu: ['bác sĩ', 'giáo viên', 'kĩ sư', 'thợ may', 'thợ xây', 'cảnh sát', 'người bán hàng'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Bố tôi là ', '.'], ['Mẹ tôi là ', '.'], ['Anh tôi là ', '.']], xong: 'Đúng rồi! Em đã nói được nghề của người trong gia đình em.' },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu: mỗi câu nói nghề của một người trong gia đình em.', en: 'Medium: write 3 sentences like the model, each about the job of one family member.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: câu đầu “Đây là gia đình tôi.”, có ít nhất một câu “… không phải là …”, câu cuối nói nghề của chính em.', en: 'Hard: write 5 sentences. Start with “Đây là gia đình tôi.”, use “không phải là” at least once, and end with your own job.', soCau: 5 }
      },
      tuKiemTra: ['Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Câu phủ định đủ ba chữ: “không phải là”.', 'Đủ dấu thanh: bác sĩ, kĩ sư, thợ may, cảnh sát.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng tên các nghề, đúng dấu thanh, đúng chữ p – qu và viết hoa tên riêng.',
      mucEn: 'Goal: spell the job words with the right tone marks and the letters p, qu; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bác sĩ', en: 'Listen and write the word.', dung: ['bác sĩ'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'giáo viên', dung: ['giáo viên'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'kĩ sư', dung: ['kĩ sư', 'kỹ sư'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'thợ may', dung: ['thợ may'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'cảnh sát', dung: ['cảnh sát'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'người bán hàng', dung: ['người bán hàng'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: th_ (thợ may)', nghe: 'thợ', en: 'Choose the right tone mark.', dung: 'thợ', sai: ['thơ', 'thờ'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'pờ', en: 'Listen to the letter name and tap the letter.', dung: 'p', sai: ['b', 'qu'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'quờ', dung: 'qu', sai: ['p', 'c'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng (quả cam)', nghe: 'quả', en: 'Choose the correct spelling.', dung: 'quả', sai: ['cuả', 'qả'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “cô hoa là giáo viên.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Cô Hoa là giáo viên.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Bố tôi không phải là bác sĩ.', en: 'Listen and write the sentence.', hoa: true, dung: ['Bố tôi không phải là bác sĩ.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Ông ấy làm nghề gì?', hoa: true, dung: ['Ông ấy làm nghề gì?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Hỏi nghề: … làm nghề gì?', 'Ông cậu làm nghề gì? – Ông tớ là giáo viên.', ['Hỏi nghề của một người. Trả lời: người + là + nghề.', 'Asks about someone’s job. Answer: person + là + job.']],
          ['Hỏi có/không: … có phải là … không?', 'Bà cậu có phải là giáo viên không?', ['Hỏi để xác nhận. Trả lời: “Đúng, …” hoặc “Không, …”.', 'Yes/no question “Is … a …?”. Answer “Đúng, …” or “Không, …”.']],
          ['Phủ định: không phải là', 'Bố tớ không phải là giáo viên.', ['Đặt “không phải” ngay trước “là”.', 'Put “không phải” before “là” to say “is not”.']],
          ['Ngôi thứ ba: cô ấy, ông ấy, các anh ấy', 'Cô ấy không phải là học sinh. Các anh ấy là kĩ sư.', ['Thêm “ấy” sau từ xưng hô để chỉ người đang nói tới; thêm “các” khi nói nhiều người.', '“ấy” after a kinship word = he/she; “các” makes it plural.']]
        ]
      },
      ghiChu: '“cũng” = cũng như vậy: “Bà tớ cũng là giáo viên.” “cũng” đứng trước “là”.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Bố', 'tớ', 'không phải', 'là', 'bác sĩ.'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Chú Tiến là KĨ SƯ.”', en: 'Make a question for the capitalised part.', dung: 'Chú Tiến làm nghề gì?', sai: ['Chú Tiến là ai?', 'Chú Tiến thế nào?'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Cô ấy không phải là học sinh.', sai: ['Cô ấy là không phải học sinh.', 'Cô ấy không là phải học sinh.'] },
        { loai: 'chon', hoi: 'Ông Minh là bác sĩ. Trả lời câu hỏi: “Ông ấy có phải là kĩ sư không?”', en: 'Mr Minh is a doctor. Answer the question.', dung: 'Không, ông ấy không phải là kĩ sư. Ông ấy là bác sĩ.', sai: ['Đúng, ông ấy là kĩ sư.', 'Không, ông ấy là kĩ sư.'] },
        { loai: 'go', hoi: 'Điền từ: “Ông tớ là giáo viên. Bà tớ ___ là giáo viên.”', en: 'Fill in the word meaning “also”.', dung: ['cũng'] }
      ]
    }
  ]
};
