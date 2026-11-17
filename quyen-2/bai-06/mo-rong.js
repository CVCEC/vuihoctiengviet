/* Quyển 2 – Bài 6 «Hôm nay thời tiết thế nào?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Chưa có tệp ghi âm: câu được tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi và câu trả lời về thời tiết (nắng, mưa, nóng, lạnh, độ) ở hôm qua, hôm nay, ngày mai.',
      mucEn: 'Goal: understand questions and answers about the weather (sun, rain, hot, cold, degrees) for yesterday, today and tomorrow. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai hỏi chị Liên về thời tiết', cau: [
          ['Mai', 'Chị Liên ơi, bây giờ trời thế nào ạ?'], ['Liên', 'Bây giờ trời nắng, khá nóng.'],
          ['Mai', 'Bao nhiêu độ ạ?'], ['Liên', '32 độ.'],
          ['Mai', 'Hôm qua có nắng không ạ?'], ['Liên', 'Không. Hôm qua có mưa, trời mát.'],
          ['Mai', 'Còn ngày mai thế nào ạ?'], ['Liên', 'Ngày mai trời nhiều mây, có gió nhẹ.']] },
        { ten: 'Hội thoại B – Nam gọi điện cho anh Dũng', cau: [
          ['Nam', 'Anh Dũng ơi, tháng này thời tiết Cà Mau thế nào?'], ['Dũng', 'Tháng này, Cà Mau nóng và khô lắm.'],
          ['Nam', 'Có mưa không anh?'], ['Dũng', 'Không. Còn Hà Nội thế nào?'],
          ['Nam', 'Hà Nội lạnh và ẩm, có sương mù.'], ['Dũng', 'Bao nhiêu độ?'], ['Nam', 'Hôm nay 14 độ ạ.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Bây giờ trời thế nào?', en: 'What is the weather like now?', dung: 'Trời nắng, khá nóng.', sai: ['Trời mưa, mát.', 'Trời nhiều mây.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Hôm qua trời thế nào?', en: 'What was the weather like yesterday?', dung: 'Có mưa, trời mát.', sai: ['Trời nắng, nóng.', 'Có bão.'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Ngày mai thời tiết thế nào? (chọn 2)', en: 'What will the weather be like tomorrow? (choose 2)', dung: ['nhiều mây', 'có gió nhẹ'], sai: ['có mưa', 'có bão'] },
        { loai: 'xep', hoi: 'Hội thoại A: xếp đúng thứ tự Mai hỏi', en: 'Put the times in the order Mai asks about them.', dung: ['bây giờ', 'hôm qua', 'ngày mai'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Tháng này, thời tiết Cà Mau thế nào? (chọn 2)', en: 'What is the weather like in Cà Mau this month? (choose 2)', dung: ['nóng', 'khô'], sai: ['lạnh', 'ẩm'] },
        { loai: 'chon', hoi: 'Hội thoại B: Hôm nay Hà Nội bao nhiêu độ?', en: 'How many degrees is it in Hà Nội today?', dung: '14 độ', sai: ['10 độ', '16 độ', '32 độ'] },
        { loai: 'go', hoi: 'Nghe và điền: “Hà Nội lạnh và ___, có sương mù.”', nghe: 'Hà Nội lạnh và ẩm, có sương mù.', en: 'Listen and fill in the missing word.', dung: ['ẩm'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: thời tiết nơi em sống',
      muc: 'viết một đoạn ngắn 3–6 câu về thời tiết nơi em sống: hôm qua, hôm nay, ngày mai.',
      mucEn: 'Goal: write 3–6 sentences about the weather where you live: yesterday, today and tomorrow.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Tôi sống ở Hà Nội. Tháng này, Hà Nội lạnh và ẩm. Hôm nay trời lạnh, 16 độ. Hôm qua có mưa. Ngày mai trời nhiều mây.' },
      tu: ['nắng', 'mưa', 'nóng', 'lạnh', 'ấm', 'mát', 'ẩm', 'khô'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Hôm qua trời ', '.'], ['Hôm nay trời ', '.'], ['Ngày mai trời ', '.']], xong: 'Đúng rồi! Em đã nói về thời tiết ba ngày.' },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu về thời tiết nơi em sống: hôm qua, hôm nay, ngày mai.', en: 'Medium: write 3 sentences like the model about the weather where you live.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: câu đầu “Tôi sống ở …”, có một câu nói nhiệt độ (… độ), có hôm qua, hôm nay và ngày mai.', en: 'Hard: write 5 sentences. Start with “Tôi sống ở …”, give the temperature once, and talk about yesterday, today and tomorrow.', soCau: 5 }
      },
      tuKiemTra: ['Tên nơi chốn viết hoa: Hà Nội, Cà Mau.', 'Nhiệt độ có chữ “độ”: 25 độ.', 'Đủ dấu thanh: nắng, nóng, lạnh, ấm, ẩm, mát.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ chỉ thời tiết, đúng dấu thanh, đúng chữ h, ch, nh, k, kh và viết hoa tên riêng.',
      mucEn: 'Goal: spell the weather words with the right tone marks and the letters h, ch, nh, k, kh; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nắng', en: 'Listen and write the word.', dung: ['nắng'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'lạnh', dung: ['lạnh'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'gió', dung: ['gió'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'sương mù', dung: ['sương mù'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'khô', dung: ['khô'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'ấm', en: 'Listen and choose the right word.', dung: 'ấm', sai: ['ẩm', 'âm'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'ẩm', dung: 'ẩm', sai: ['ấm', 'ầm'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: ba_ (gió rất to)', nghe: 'bão', en: 'Choose the right tone mark.', dung: 'bão', sai: ['bảo', 'báo'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'khờ', en: 'Listen to the letter name and tap the letter.', dung: 'kh', sai: ['k', 'h'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'nhờ', dung: 'nh', sai: ['n', 'ch'] },
        { loai: 'chon', hoi: 'Chọn cách viết đúng (k đứng trước e, ê, i)', nghe: 'kẻ', en: 'Choose the right spelling: k is used before e, ê, i.', dung: 'kẻ', sai: ['cẻ'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “hôm nay, hà nội có sương mù.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Hôm nay, Hà Nội có sương mù.', 'Hôm nay Hà Nội có sương mù.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Hôm qua có mưa, trời mát.', en: 'Listen and write the sentence.', hoa: true, dung: ['Hôm qua có mưa, trời mát.', 'Hôm qua có mưa. Trời mát.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Ngày mai có mưa không ạ?', hoa: true, dung: ['Ngày mai có mưa không ạ?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['… thế nào?', 'Hôm nay thời tiết thế nào? – Hôm nay trời nóng.', ['“thế nào” hỏi người, vật, thời tiết ra sao; đứng cuối câu.', '“thế nào” = how / what … like; it ends the question.']],
          ['trời + tính từ / có + danh từ', 'Trời nóng. Trời nhiều mây. Có mưa. Có gió nhẹ.', ['Nóng, lạnh, ấm, mát…: “trời + từ”. Mưa, gió, bão, tuyết, sương mù: hay dùng “có”.', '“trời” + adjective (trời nóng); “có” + noun for rain, wind, snow (có mưa).']],
          ['… có … không?', 'Hôm qua có nóng không? – Không. Hôm qua có mưa.', ['Câu hỏi có/không. Trả lời “Có.” hoặc “Không.”, rồi nói thêm.', 'Yes/no question. Answer “Có.” or “Không.” and add more.']],
          ['Thời gian ở đầu câu; “cũng”', 'Hôm nay, trời khá ấm. Ngày mai trời cũng ấm.', ['hôm qua, hôm nay, ngày mai thường đứng đầu câu. “cũng” = giống như vậy, đứng trước từ chỉ thời tiết.', 'Time words usually start the sentence. “cũng” = also, before the weather word.']]
        ]
      },
      ghiChu: 'Mức độ: hơi lạnh – khá lạnh – rất lạnh – lạnh lắm (“lắm” đứng sau).',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Hôm nay', 'thời tiết', 'thế', 'nào?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Hôm nay trời LẠNH.”', en: 'Make a question for the capitalised part.', dung: 'Hôm nay trời thế nào?', sai: ['Hôm nay trời là gì?', 'Hôm nay trời ai?'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Ngày mai có mưa không?', sai: ['Ngày mai mưa có không?', 'Có ngày mai mưa không?'] },
        { loai: 'go', hoi: 'Điền “có” hoặc “trời”: “Hôm nay ___ bão.”', en: 'Fill in “có” or “trời”.', dung: ['có'] },
        { loai: 'chon', hoi: 'Trả lời: “Hôm qua có nóng không?” (hôm qua trời mát)', en: 'Answer the question: yesterday was cool.', dung: 'Không. Hôm qua trời mát.', sai: ['Có. Hôm qua trời mát.', 'Không. Hôm qua trời nóng.'] },
        { loai: 'xep', hoi: 'Xếp từ thành câu', dung: ['Ngày mai', 'trời', 'cũng', 'ấm.'] }
      ]
    }
  ]
};
