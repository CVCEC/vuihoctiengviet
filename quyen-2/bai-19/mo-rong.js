/* Quyển 2 – Bài 19 «Cháu bị làm sao?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “… bị làm sao?”, tên các bệnh thường gặp và lời khuyên “nên / không nên / cần”.',
      mucEn: 'Goal: understand “What’s wrong?”, common illnesses and simple advice (should / should not / need to). Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai đi khám bệnh', cau: [
          ['Mai', 'Cháu chào bác sĩ ạ.'], ['Bác sĩ', 'Chào cháu. Cháu bị làm sao?'],
          ['Mai', 'Cháu bị đau răng.'], ['Bác sĩ', 'Hôm qua cháu đã ăn gì?'],
          ['Mai', 'Cháu đã ăn kem và bánh ngọt.'], ['Bác sĩ', 'Bây giờ bác chữa răng cho cháu. Cháu không nên ăn nhiều bánh ngọt.'],
          ['Mai', 'Vâng ạ. Cháu cảm ơn bác sĩ ạ.']] },
        { ten: 'Hội thoại B – Nam bị ho', cau: [
          ['Mẹ', 'Nam ơi, con cảm thấy trong người thế nào?'], ['Nam', 'Con bị ho và đau đầu ạ.'],
          ['Mẹ', 'Con có bị sốt không?'], ['Nam', 'Dạ không ạ.'],
          ['Mẹ', 'Con cần uống thuốc và nghỉ ngơi. Con không nên nói nhiều.'], ['Nam', 'Con uống nước lạnh được không ạ?'],
          ['Mẹ', 'Không, con nên uống nước ấm.'], ['Nam', 'Vâng ạ.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Mai bị làm sao?', en: 'What is wrong with Mai?', dung: 'Mai bị đau răng.', sai: ['Mai bị đau bụng.', 'Mai bị ho.'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Hôm qua Mai đã ăn gì? (chọn 2)', en: 'What did Mai eat yesterday? (choose 2)', dung: ['kem', 'bánh ngọt'], sai: ['bún chả', 'bánh mì'] },
        { loai: 'chon', hoi: 'Hội thoại A: Bác sĩ khuyên Mai thế nào?', en: 'What does the doctor advise?', dung: 'Cháu không nên ăn nhiều bánh ngọt.', sai: ['Cháu nên ăn nhiều bánh ngọt.', 'Cháu không nên uống thuốc.'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Nam bị làm sao? (chọn 2)', en: 'What is wrong with Nam? (choose 2)', dung: ['ho', 'đau đầu'], sai: ['sốt', 'đau bụng'] },
        { loai: 'go', hoi: 'Nghe và điền: “Con ___ uống thuốc và nghỉ ngơi.”', nghe: 'Con cần uống thuốc và nghỉ ngơi.', en: 'Listen and fill in the missing word.', dung: ['cần'] },
        { loai: 'chon', hoi: 'Hội thoại B: Mẹ khuyên Nam uống gì?', en: 'What does Mum tell Nam to drink?', dung: 'nước ấm', sai: ['nước lạnh', 'nước chanh'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp từ thành lời khuyên của mẹ', en: 'Put the words in order to make Mum’s advice.', dung: ['Con', 'không nên', 'nói nhiều.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: kể một lần em bị ốm',
      muc: 'viết một đoạn ngắn 3–5 câu kể em bị làm sao, em cảm thấy thế nào và em đã làm gì.',
      mucEn: 'Goal: write 3–5 sentences about a time you were ill: what was wrong, how you felt and what you did.',
      mau: { ten: 'Đoạn mẫu (Hương viết)', chu: 'Hôm qua tôi bị ốm. Tôi cảm thấy lạnh và đau đầu. Mẹ đo nhiệt độ cho tôi. Tôi bị sốt và cảm lạnh. Tôi uống thuốc, uống nước ấm và ăn cháo nóng. Tôi không xem ti vi, tôi nghỉ ngơi.' },
      tu: ['đau đầu', 'đau bụng', 'đau răng', 'sốt', 'ho', 'cảm lạnh'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Hôm qua tôi bị ', '.'], ['Bạn tôi bị ', '.'], ['Tôi bị ', ', nên tôi đi khám bệnh.']], xong: 'Đúng rồi! Em đã nói em bị làm sao.' },
        vua: { huong: 'Viết 3 câu: em bị làm sao, em cảm thấy thế nào, em cần làm gì.', en: 'Medium: write 3 sentences: what was wrong, how you felt, what you needed to do.', soCau: 3 },
        kho: { huong: 'Viết 5 câu theo đoạn mẫu; có một câu với “nên” và một câu với “không nên”.', en: 'Hard: write 5 sentences like the model; include one sentence with “nên” and one with “không nên”.', soCau: 5 }
      },
      tuKiemTra: ['Dùng “bị” trước bệnh: bị ho, bị sốt, bị đau đầu.', 'Khuyên bằng “nên / không nên / cần”: Tôi cần nghỉ ngơi.', 'Đủ dấu: ốm, sốt, đau bụng, nghỉ ngơi, uống thuốc.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng từ chỉ bệnh và việc chữa bệnh, đúng vần oai – oay, đúng dấu thanh và viết hoa đầu câu, tên riêng.',
      mucEn: 'Goal: spell words about illness and care, the rhymes oai and oay and the tone marks; capitalise sentences and names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đau bụng', en: 'Listen and write the word.', dung: ['đau bụng'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'uống thuốc', dung: ['uống thuốc'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nghỉ ngơi', dung: ['nghỉ ngơi'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'khám bệnh', dung: ['khám bệnh'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nhiệt độ', dung: ['nhiệt độ'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: _m (bệnh)', nghe: 'ốm', en: 'Choose the right tone mark.', dung: 'ốm', sai: ['ồm', 'ổm'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: s_t (trán rất nóng)', nghe: 'sốt', dung: 'sốt', sai: ['sột', 'sồt'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'khoai lang', en: 'Listen and choose the right spelling.', dung: 'khoai lang', sai: ['khoay lang', 'khai lang'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'ghế xoay', dung: 'ghế xoay', sai: ['ghế xoai', 'ghế xay'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'điện thoại', dung: 'điện thoại', sai: ['điện thoạy', 'điện thại'] },
        { loai: 'chon', hoi: 'Từ nào có vần oay?', en: 'Which word has the rhyme oay?', dung: 'lốc xoáy', sai: ['quả xoài', 'khoai tây'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “hương bị sốt và cảm lạnh.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Hương bị sốt và cảm lạnh.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Cháu bị làm sao?', en: 'Listen and write the sentence.', hoa: true, dung: ['Cháu bị làm sao?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Con cảm thấy lạnh và đau đầu.', hoa: true, dung: ['Con cảm thấy lạnh và đau đầu.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['bị + bệnh', 'Cháu bị đau bụng. Con bị sốt và cảm lạnh.', ['“bị” đứng trước điều không tốt xảy ra với mình. Hỏi: “… bị làm sao?”.', '“bị” + illness. Ask: “bị làm sao?” (What’s wrong?).']],
          ['nên / không nên / cần + việc', 'Cháu nên nghỉ ngơi. Con không nên xem ti vi. Cháu cần uống thuốc.', ['Dùng để khuyên. “cần” mạnh hơn “nên”.', 'Advice: should / should not / need to.']],
          ['đã + việc', 'Hôm qua cháu đã ăn gì? – Cháu đã ăn bánh mì, bún chả…', ['“đã” chỉ việc đã xảy ra; thường đi với “hôm qua”.', '“đã” marks a past action.']],
          ['… được không?', 'Con xem ti vi được không ạ?', ['Xin phép làm một việc; thêm “ạ” khi nói với người lớn.', 'Asking for permission: “Can I …?”.']]
        ]
      },
      ghiChu: '“ốm” và “bệnh” cùng nghĩa: “ốm” hay dùng ở miền Bắc, “bệnh” ở miền Nam.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu hỏi', en: 'Put the words in order.', dung: ['Hôm qua', 'cháu', 'đã ăn', 'gì?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Cháu bị ĐAU RĂNG.”', en: 'Make a question for the capitalised part.', dung: 'Cháu bị làm sao?', sai: ['Cháu làm gì?', 'Cháu đã ăn gì?'] },
        { loai: 'chon', hoi: 'Bạn em bị cảm lạnh. Chọn lời khuyên đúng.', en: 'Your friend has a cold. Choose the right advice.', dung: 'Bạn không nên uống nước lạnh.', sai: ['Bạn nên uống nước lạnh.', 'Bạn không nên ăn cháo nóng.'] },
        { loai: 'go', hoi: 'Điền một từ: “Hôm qua cháu ___ ăn kem và bánh ngọt.”', en: 'Fill in the word that marks the past.', dung: ['đã'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Con xem ti vi được không ạ?', sai: ['Được không con xem ti vi ạ?', 'Con được không xem ti vi ạ?'] }
      ]
    }
  ]
};
