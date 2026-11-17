/* Quyển 1 – Bài 11 «Em có biết vẽ không?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “… có biết … không?”, “… đang làm gì?” và câu trả lời về việc biết làm, thích làm, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand “Can you …?”, “What is … doing?” and short answers about abilities and likes, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Nam vẽ trong lớp', cau: [
          ['Mai', 'Chào Nam! Cậu đang làm gì đó?'], ['Nam', 'Chào Mai! Tớ đang vẽ.'], ['Mai', 'Cậu có thích vẽ không?'],
          ['Nam', 'Có. Tớ thích vẽ lắm. Cậu có biết vẽ không?'], ['Mai', 'Không. Tớ không biết vẽ. Tớ biết hát.'],
          ['Nam', 'Cậu có thích múa không?'], ['Mai', 'Có. Tớ thích hát và múa.']] },
        { ten: 'Hội thoại B – Anh Dũng và chị Liên', cau: [
          ['Mai', 'Anh Dũng có biết bơi không?'], ['Nam', 'Có. Anh Dũng biết bơi.'], ['Mai', 'Anh Dũng đang làm gì?'],
          ['Nam', 'Anh Dũng đang bơi.'], ['Mai', 'Còn chị Liên? Chị Liên có biết bơi không?'],
          ['Nam', 'Không. Chị Liên không biết bơi. Chị Liên thích đọc sách.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Nam đang làm gì?', en: 'What is Nam doing?', dung: 'Nam đang vẽ.', sai: ['Nam đang hát.', 'Nam đang bơi.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Mai có biết vẽ không?', en: 'Can Mai draw?', dung: 'Không. Mai không biết vẽ.', sai: ['Có. Mai biết vẽ.', 'Không. Mai không biết hát.'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Mai thích làm gì? (chọn 2)', en: 'What does Mai like doing? (choose 2)', dung: ['hát', 'múa'], sai: ['vẽ', 'bơi'] },
        { loai: 'chon', hoi: 'Hội thoại B: Ai biết bơi?', en: 'Who can swim?', dung: 'anh Dũng', sai: ['chị Liên'] },
        { loai: 'chon', hoi: 'Hội thoại B: Anh Dũng đang làm gì?', en: 'What is Dũng doing?', dung: 'Anh Dũng đang bơi.', sai: ['Anh Dũng đang đọc sách.', 'Anh Dũng đang vẽ.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Chị Liên thích ___ sách.”', nghe: 'Chị Liên thích đọc sách.', en: 'Listen and fill in the missing word.', dung: ['đọc'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp từ thành câu hỏi của Mai', en: 'Put the words in order to make Mai’s question.', dung: ['Anh Dũng', 'có', 'biết', 'bơi', 'không?'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: em biết làm gì, thích làm gì',
      muc: 'viết một đoạn ngắn 3–5 câu đơn nói về việc em biết làm, không biết làm và thích làm.',
      mucEn: 'Goal: write 3–5 simple sentences about what you can do, cannot do and like doing.',
      mau: { ten: 'Đoạn mẫu (Mai viết)', chu: 'Tôi là Mai. Tôi biết hát. Tôi cũng biết múa. Tôi không biết vẽ, cũng không biết bơi. Tôi thích đọc sách lắm.' },
      tu: ['đọc', 'viết', 'hát', 'múa', 'vẽ', 'bơi', 'đọc sách'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Tôi biết ', '.'], ['Tôi không biết ', '.'], ['Tôi thích ', ' lắm.']], xong: 'Đúng rồi! Em đã nói về việc em biết làm và thích làm.' },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu: em biết làm gì, không biết làm gì, thích làm gì.', en: 'Medium: write 3 sentences like the model: what you can do, cannot do and like doing.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: câu đầu “Tôi là …”; có câu với “biết”, “không biết”, “thích” và “cũng”.', en: 'Hard: write 5 sentences. Start with “Tôi là …” and use “biết”, “không biết”, “thích” and “cũng”.', soCau: 5 }
      },
      tuKiemTra: ['Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', '“không” đứng trước “biết”, “thích”: Tôi không biết bơi.', 'Đủ dấu thanh: biết, thích, múa, vẽ, đọc.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ chỉ việc làm của bài, đúng dấu thanh, đúng chữ n – nh và viết hoa tên riêng.',
      mucEn: 'Goal: spell the action words with the right tone marks and the letters n, nh; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đọc', en: 'Listen and write the word.', dung: ['đọc'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'viết', dung: ['viết'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'múa', dung: ['múa'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bơi', dung: ['bơi'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'biết', dung: ['biết'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: v_ (vẽ tranh)', nghe: 'vẽ', en: 'Choose the right tone mark.', dung: 'vẽ', sai: ['vẻ', 'vé'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: m_a (múa)', nghe: 'múa', dung: 'múa', sai: ['mùa', 'mua'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: h_t (hát)', nghe: 'hát', dung: 'hát', sai: ['hạt', 'hắt'] },
        { loai: 'chon', hoi: 'Nghe và chọn cách viết đúng', nghe: 'nhanh', en: 'Listen and choose the right spelling.', dung: 'nhanh', sai: ['nanh'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'nờ', en: 'Listen to the letter name and tap the letter.', dung: 'n', sai: ['nh', 'm'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'nhờ', dung: 'nh', sai: ['n', 'ng'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “chị nhung bơi rất nhanh.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Chị Nhung bơi rất nhanh.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Tớ biết hát.', en: 'Listen and write the sentence.', hoa: true, dung: ['Tớ biết hát.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Cậu có biết vẽ không?', hoa: true, dung: ['Cậu có biết vẽ không?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['có + động từ + không?', 'Cậu có biết vẽ không?', ['Câu hỏi có/không: “có … không” đặt quanh việc làm. Trả lời “Có.” hoặc “Không.”.', 'Yes/no question: “có” + verb + “không?”.']],
          ['Phủ định: không + động từ', 'Tớ không biết vẽ, cũng không biết bơi.', ['“không” đứng trước động từ. “cũng” = giống như câu trước.', 'Put “không” before the verb. “cũng” = also / either.']],
          ['biết / thích + việc làm', 'Tớ biết hát. Tớ thích đọc sách và hát.', ['“biết” = làm được; “thích” = vui khi làm. “lắm” đứng cuối để nhấn mạnh: thích vẽ lắm.', '“biết” = can (know how to); “thích” = like. “lắm” at the end = a lot.']],
          ['đang + động từ', 'Chị Liên đang hát. Anh Dũng đang bơi.', ['Việc đang xảy ra lúc nói. Hỏi: “… đang làm gì?”.', '“đang” = happening now. Ask: “… đang làm gì?”.']]
        ]
      },
      ghiChu: '“cậu – tớ” là cách xưng hô giữa bạn bè cùng tuổi; với người lớn tuổi hơn, dùng “cô”, “anh”, “chị”… và thêm “ạ”.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu hỏi', en: 'Put the words in order.', dung: ['Cậu', 'có', 'thích', 'bơi', 'không?'] },
        { loai: 'chon', hoi: 'Chọn câu trả lời đúng cho: “Cậu có biết vẽ không?”', en: 'Choose the correct answer.', dung: 'Không. Tớ không biết vẽ.', sai: ['Không. Tớ biết không vẽ.', 'Không. Tớ không vẽ biết.'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho câu trả lời: “Có. Tớ thích múa.”', en: 'Which question gets this answer?', dung: 'Cậu có thích múa không?', sai: ['Cậu có biết múa không?', 'Cậu thích múa có không?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Tớ biết HÁT.”', en: 'Make a question for the capitalised part.', dung: 'Cậu biết làm gì?', sai: ['Cậu đang làm gì?', 'Cậu là ai?'] },
        { loai: 'go', hoi: 'Điền từ: “Anh Dũng ___ bơi.” (việc xảy ra bây giờ)', en: 'Fill in the word for an action happening now.', dung: ['đang'] }
      ]
    }
  ]
};
