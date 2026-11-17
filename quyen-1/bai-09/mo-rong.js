/* Quyển 1 – Bài 9 «Con hổ đang làm gì?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “Con … đang làm gì?”, câu hỏi lại với “à” và câu trả lời lễ phép có “ạ”, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand “What is the … doing?”, checking questions with “à” and polite answers with “ạ”, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Bà đố My', cau: [
          ['Bà', 'My, kia là con gì?'], ['My', 'Kia là con ngựa ạ.'], ['Bà', 'Con ngựa đang làm gì?'],
          ['My', 'Con ngựa đang chạy.'], ['Bà', 'Còn con chó đang chạy à?'], ['My', 'Không ạ. Con chó đang nằm.'],
          ['Bà', 'Con mèo đang ngủ, phải không?'], ['My', 'Phải ạ. Con mèo đang ngủ.']] },
        { ten: 'Hội thoại B – Nam và Mai xem con khỉ', cau: [
          ['Nam', 'Mai, đây là con gì?'], ['Mai', 'Đây là con khỉ.'], ['Nam', 'Con khỉ có mấy mắt?'],
          ['Mai', 'Con khỉ có hai mắt.'], ['Nam', 'Con khỉ đang làm gì?'], ['Mai', 'Con khỉ đang ăn chuối.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Con ngựa đang làm gì?', en: 'What is the horse doing?', dung: 'Con ngựa đang chạy.', sai: ['Con ngựa đang đứng.', 'Con ngựa đang ngủ.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Bà hỏi “Còn con chó đang chạy à?”. My trả lời thế nào?', en: 'How does My answer?', dung: 'Không ạ. Con chó đang nằm.', sai: ['Phải ạ. Con chó đang chạy.', 'Không ạ. Con chó đang ngủ.'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Con vật nào đang nằm hoặc đang ngủ? (chọn 2)', en: 'Which animals are lying down or sleeping? (choose 2)', dung: ['con chó', 'con mèo'], sai: ['con ngựa', 'con voi'] },
        { loai: 'go', hoi: 'Nghe và điền: “Con mèo đang ___.”', nghe: 'Con mèo đang ngủ.', en: 'Listen and fill in the missing word.', dung: ['ngủ'] },
        { loai: 'chon', hoi: 'Hội thoại B: Con khỉ có mấy mắt?', en: 'How many eyes does the monkey have?', dung: 'hai', sai: ['một', 'bốn'] },
        { loai: 'chon', hoi: 'Hội thoại B: Con khỉ đang làm gì?', en: 'What is the monkey doing?', dung: 'Con khỉ đang ăn chuối.', sai: ['Con khỉ đang ngủ.', 'Con khỉ đang chạy.'] },
        { loai: 'xep', hoi: 'Hội thoại A: xếp lại câu bà hỏi', en: 'Put Grandma’s question in order.', dung: ['Con ngựa', 'đang', 'làm gì?'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: con vật đang làm gì?',
      muc: 'viết một đoạn ngắn 3–5 câu đơn về con vật: con gì, có mấy chân (tai, mắt), đang làm gì.',
      mucEn: 'Goal: write 3–5 simple sentences about animals: what they are, how many legs (ears, eyes) they have, what they are doing.',
      mau: { ten: 'Đoạn mẫu (My viết)', chu: 'Đây là con mèo. Con mèo có hai tai và bốn chân. Con mèo đang ngủ. Kia là con chó. Con chó đang chạy.' },
      tu: ['đi', 'chạy', 'đứng', 'nằm', 'ngủ', 'ăn', 'chơi'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Con mèo đang ', '.'], ['Con chó đang ', '.'], ['Con ngựa đang ', '.']], xong: 'Đúng rồi! Em đã nói con vật đang làm gì.' },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu, thay bằng con vật em biết.', en: 'Medium: write 3 sentences like the model, about animals you know.', soCau: 3 },
        kho: { huong: 'Viết 5 câu về hai con vật: đây (kia) là con gì, có mấy chân (tai, mắt), đang làm gì.', en: 'Hard: write 5 sentences about two animals: what they are, how many legs (ears, eyes), what they are doing.', soCau: 5 }
      },
      tuKiemTra: ['Có “đang” trước từ chỉ hoạt động: đang ngủ, đang chạy.', 'Đủ dấu thanh: chạy, đứng, nằm, ngủ, mắt, mũi.', 'Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng từ chỉ hoạt động và bộ phận trên mặt, đúng dấu thanh, đúng chữ l – m (không lẫn l với n) và viết hoa tên riêng.',
      mucEn: 'Goal: spell action words and face words with the right tone marks, use l and m correctly (do not mix l and n), and capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'mặt', en: 'Listen and write the word.', dung: ['mặt'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'mũi', dung: ['mũi'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'miệng', dung: ['miệng'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'răng', dung: ['răng'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'chạy', dung: ['chạy'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'mắt', en: 'Listen and choose the right word.', dung: 'mắt', sai: ['mặt', 'mất'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'nằm', dung: 'nằm', sai: ['lằm', 'nắm'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'làm', dung: 'làm', sai: ['nàm', 'lám'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: ng_', nghe: 'ngủ', en: 'Choose the right tone mark.', dung: 'ngủ', sai: ['ngũ', 'ngụ'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'lờ', en: 'Listen to the letter name and tap the letter.', dung: 'l', sai: ['n', 'm'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “bà đố my, đây là con gì?”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Bà đố My, đây là con gì?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Con hổ đang ngủ.', en: 'Listen and write the sentence.', hoa: true, dung: ['Con hổ đang ngủ.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Con voi đang chạy à?', hoa: true, dung: ['Con voi đang chạy à?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['đang + từ chỉ hoạt động', 'Con hổ đang ngủ. Con voi đang đứng.', ['“đang” cho biết việc xảy ra lúc nói. Hỏi: Con … đang làm gì?', '“đang” = happening now (-ing). Question: … đang làm gì?']],
          ['Hỏi lại với “à”', 'Con voi đang chạy à?', ['Thêm “à” cuối câu khi mình đoán và muốn hỏi lại. Trả lời: Phải ạ. / Không ạ. …', '“à” at the end checks a guess (“… is it?”).']],
          ['Lễ phép với “ạ”', 'Đây là con hổ ạ. · Không ạ. Con voi đang đứng.', ['Nói với người lớn tuổi (ông, bà, cô, chú…), thêm “ạ” cuối câu.', 'Add “ạ” at the end when speaking to older people, to be polite.']],
          ['một cái + tên vật', 'Con voi có một cái vòi.', ['“cái” đứng trước tên đồ vật, bộ phận: cái vòi, cái mũi.', '“cái” is a classifier for things and some body parts.']]
        ]
      },
      ghiChu: '“Đấy là mũi con voi.” – “đấy” nghĩa như “đó”.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu hỏi', en: 'Put the words in order.', dung: ['Con voi', 'đang', 'chạy', 'à?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Con mèo đang NẰM.”', en: 'Make a question for the capitalised part.', dung: 'Con mèo đang làm gì?', sai: ['Con mèo thế nào?', 'Đây là con gì?'] },
        { loai: 'chon', hoi: 'Em trả lời bà. Câu nào lễ phép?', en: 'You answer your grandmother. Which is polite?', dung: 'Không ạ. Con voi đang đứng.', sai: ['Không. Con voi đang đứng.'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Con chó đang ngủ.', sai: ['Con chó ngủ đang.', 'Đang con chó ngủ.'] },
        { loai: 'go', hoi: 'Điền từ: “Con voi có một ___ vòi.”', en: 'Fill in the classifier.', dung: ['cái'] }
      ]
    }
  ]
};
