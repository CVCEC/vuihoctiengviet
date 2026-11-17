/* Quyển 2 – Bài 9 «Hè này bạn sẽ đi đâu?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Chưa có tệp ghi âm: câu được tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu kế hoạch sắp tới (“sẽ”), câu hỏi “Bao giờ …?” và thời gian: lúc nãy, bây giờ, lát nữa, tuần sau, tháng sau.',
      mucEn: 'Goal: understand plans (“sẽ”), the question “Bao giờ …?” (when) and time words: a while ago, now, in a moment, next week, next month. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Liên gọi điện cho mẹ', cau: [
          ['Liên', 'Mẹ ơi! Bao giờ mẹ về ạ?'], ['Mẹ', 'Bây giờ mẹ đang ở siêu thị. Lát nữa mẹ về.'],
          ['Liên', 'Con muốn mua vở. Mẹ mua giúp con được không ạ?'], ['Mẹ', 'Được. Con muốn mua ngay à?'],
          ['Liên', 'Vâng. Ngày mai, con sẽ đi học vẽ.'], ['Mẹ', 'Lúc nãy bố đi chợ, con không nhờ bố à?'],
          ['Liên', 'Lúc nãy con không nhớ ạ.'], ['Mẹ', 'Được, lát nữa mẹ sẽ mua.']] },
        { ten: 'Hội thoại B – Mai và Nam nói về nghỉ hè', cau: [
          ['Mai', 'Nam ơi, khi nào bạn nghỉ hè?'], ['Nam', 'Ngày mai. Còn bạn?'],
          ['Mai', 'Tớ nghỉ tháng sau. Hè này, bạn sẽ đi đâu?'], ['Nam', 'Nhà tớ sẽ về quê và đi tắm biển.'],
          ['Mai', 'Bao giờ bạn đi?'], ['Nam', 'Tuần sau nhà tớ sẽ đi. Còn bạn sẽ đi đâu?'],
          ['Mai', 'Tớ sẽ đi Sa Pa. Tớ sẽ leo núi, cắm trại.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Bây giờ mẹ Liên ở đâu?', en: 'Where is Liên’s mother now?', dung: 'ở siêu thị', sai: ['ở nhà', 'ở chợ'] },
        { loai: 'chon', hoi: 'Hội thoại A: Liên muốn mua gì?', en: 'What does Liên want to buy?', dung: 'vở', sai: ['bút màu', 'ghế'] },
        { loai: 'chon', hoi: 'Hội thoại A: Ngày mai, Liên sẽ làm gì?', en: 'What will Liên do tomorrow?', dung: 'đi học vẽ', sai: ['đi chợ', 'về quê'] },
        { loai: 'go', hoi: 'Nghe và điền: “Được, ___ mẹ sẽ mua.”', nghe: 'Được, lát nữa mẹ sẽ mua.', en: 'Listen and fill in the missing words.', dung: ['lát nữa'] },
        { loai: 'chon', hoi: 'Hội thoại B: Bao giờ Nam nghỉ hè?', en: 'When does Nam’s summer holiday start?', dung: 'ngày mai', sai: ['tuần sau', 'tháng sau'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Hè này, nhà Nam sẽ làm gì? (chọn 2)', en: 'What will Nam’s family do this summer? (choose 2)', dung: ['về quê', 'đi tắm biển'], sai: ['leo núi', 'cắm trại'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp lại câu Mai hỏi', en: 'Put Mai’s question back in order.', dung: ['Hè này,', 'bạn', 'sẽ', 'đi đâu?'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: kế hoạch nghỉ hè của em',
      muc: 'viết một đoạn ngắn 3–6 câu về kế hoạch nghỉ hè: bao giờ, đi đâu, sẽ làm gì.',
      mucEn: 'Goal: write 3–6 sentences about your summer holiday plans: when, where, and what you will do.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Ngày mai, tôi sẽ nghỉ hè. Hè này, nhà tôi sẽ về quê. Cả nhà sẽ đi ô tô vì quê tôi ở xa. Ở quê, tôi sẽ đi tắm biển. Tuần sau, tôi sẽ đi rừng và cắm trại.' },
      tu: ['đi tắm biển', 'về quê', 'leo núi', 'cắm trại', 'đi xem phim', 'đi bảo tàng'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Tuần sau, tôi sẽ ', '.'], ['Tháng sau, tôi sẽ ', '.'], ['Hè này, tôi sẽ ', '.']], xong: 'Đúng rồi! Em đã nói kế hoạch của em.' },
        vua: { huong: 'Viết 3 câu về kế hoạch nghỉ hè: em sẽ làm gì, ở đâu, bao giờ.', en: 'Medium: write 3 sentences about your summer plans: what, where, when.', soCau: 3 },
        kho: { huong: 'Viết 6 câu: bao giờ em nghỉ hè, em sẽ đi đâu, đi bao giờ, sẽ làm gì; có một câu với “vì”.', en: 'Hard: write 6 sentences: when your holiday starts, where and when you will go, what you will do; use “vì” (because) once.', soCau: 6 }
      },
      tuKiemTra: ['Việc sắp làm có “sẽ”: Tôi sẽ về quê.', 'Thời gian ở đầu câu có dấu phẩy: Tuần sau, …', 'Tên nơi chốn viết hoa: Sa Pa, Cà Mau.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ chỉ thời gian, đúng dấu thanh, đúng chữ r, tr, v, s, x và viết hoa tên riêng.',
      mucEn: 'Goal: spell the time words with the right tone marks and the letters r, tr, v, s, x; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tuần sau', en: 'Listen and write the word.', dung: ['tuần sau'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tháng sau', dung: ['tháng sau'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'lát nữa', dung: ['lát nữa'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bây giờ', dung: ['bây giờ'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'về quê', dung: ['về quê'] },
        { loai: 'chon', hoi: 'Chọn cách viết đúng', nghe: 'sẽ', en: 'Choose the right spelling.', dung: 'sẽ', sai: ['xẽ', 'sẻ'] },
        { loai: 'chon', hoi: 'Chọn cách viết đúng', nghe: 'xe', dung: 'xe', sai: ['se', 'xè'] },
        { loai: 'chon', hoi: 'Chọn cách viết đúng', nghe: 'tre', dung: 'tre', sai: ['che', 'trè'] },
        { loai: 'chon', hoi: 'Chọn cách viết đúng', nghe: 'rổ', dung: 'rổ', sai: ['dổ', 'rỗ'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng', nghe: 'vở', en: 'Choose the right tone mark.', dung: 'vở', sai: ['vỡ', 'vơ'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'trờ', en: 'Listen to the letter name and tap the letter.', dung: 'tr', sai: ['ch', 'r'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “hè này, nhà em sẽ đi sa pa.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Hè này, nhà em sẽ đi Sa Pa.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Bao giờ bố về ạ?', en: 'Listen and write the sentence.', hoa: true, dung: ['Bao giờ bố về ạ?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Nghỉ hè, cả nhà Vũ về quê.', hoa: true, dung: ['Nghỉ hè, cả nhà Vũ về quê.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['sẽ + động từ', 'Hè này, anh sẽ đi đâu? – Anh sẽ về quê.', ['Việc sắp làm, việc trong tương lai.', 'Future: “sẽ” comes before the verb.']],
          ['đang + động từ', 'Bây giờ bố đang làm việc.', ['Việc đang làm lúc nói.', 'Happening now: “đang” + verb.']],
          ['Bao giờ / Khi nào … ? (đầu câu)', 'Bao giờ bố về? Khi nào anh nghỉ hè?', ['Ở đầu câu: hỏi việc sắp tới. Ở cuối câu: hỏi việc đã qua (Bài 8: Anh đi bao giờ?).', 'At the start: asks about the future; at the end: about the past.']],
          ['Từ chỉ thời gian', 'lúc nãy – bây giờ – lát nữa; ngày kia, tuần sau, tháng sau, năm sau', ['lúc nãy: đã qua; bây giờ: lúc nói; lát nữa, tuần sau…: sắp tới, thường đi với “sẽ”.', 'a while ago – now – in a moment; future time words usually go with “sẽ”.']]
        ]
      },
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Tuần sau,', 'tớ', 'sẽ', 'đi', 'Sa Pa.'] },
        { loai: 'chon', hoi: 'Chọn câu hỏi về việc sắp tới', en: 'Choose the question about the future.', dung: 'Bao giờ bạn đi Sa Pa?', sai: ['Bạn đi Sa Pa bao giờ?', 'Bạn đã đi Sa Pa chưa?'] },
        { loai: 'go', hoi: 'Điền “đã”, “đang” hoặc “sẽ”: “Ngày mai, con ___ đi học vẽ.”', en: 'Fill in “đã”, “đang” or “sẽ”.', dung: ['sẽ'] },
        { loai: 'go', hoi: 'Điền “đã”, “đang” hoặc “sẽ”: “Bây giờ bố ___ làm việc.”', dung: ['đang'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Lát nữa, bố sẽ mua.', sai: ['Lúc nãy, bố sẽ mua.', 'Lát nữa, bố đã mua rồi.'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Hè này, anh sẽ đi SA PA.”', en: 'Make a question for the capitalised part.', dung: 'Hè này, anh sẽ đi đâu?', sai: ['Hè này, anh sẽ đi bao giờ?', 'Bao giờ anh sẽ đi Sa Pa?'] }
      ]
    }
  ]
};
