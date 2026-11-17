/* Quyển 2 – Bài 03 «Trong phòng khách có gì?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Chưa có tệp ghi âm: câu tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi về các phòng trong nhà và đồ vật trong mỗi phòng, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand questions about the rooms of a house and the things in each room, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai hỏi về nhà Nam', cau: [
          ['Mai', 'Nhà cậu có mấy phòng?'], ['Nam', 'Nhà tớ có 6 phòng.'], ['Mai', 'Đó là những phòng nào?'],
          ['Nam', 'Đó là phòng khách, phòng bếp, phòng ăn, hai phòng ngủ và một phòng tắm.'],
          ['Mai', 'Trong phòng khách có gì?'], ['Nam', 'Trong phòng khách có một bộ bàn ghế và một cái ti vi.'],
          ['Mai', 'Trong phòng khách có tranh, phải không?'],
          ['Nam', 'Không, trong phòng khách không có tranh. Bức tranh ở trong phòng ngủ của tớ.']] },
        { ten: 'Hội thoại B – Mai hỏi về nhà chị Liên', cau: [
          ['Mai', 'Chị Liên ơi, nhà chị có phòng làm việc không ạ?'], ['Liên', 'Có. Nhà chị có một phòng làm việc.'],
          ['Mai', 'Trong phòng làm việc có gì ạ?'], ['Liên', 'Trong phòng làm việc có một cái bàn, một cái ghế và một cái máy tính.'],
          ['Mai', 'Nhà chị có vườn, phải không ạ?'], ['Liên', 'Phải. Trong vườn có cây đu đủ.'],
          ['Mai', 'Trong phòng ăn có tủ lạnh không ạ?'], ['Liên', 'Không. Tủ lạnh ở trong phòng bếp.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Nhà Nam có mấy phòng?', en: 'How many rooms are in Nam’s house?', dung: '6 phòng', sai: ['8 phòng', '3 phòng'] },
        { loai: 'go', hoi: 'Nghe và điền: “Nhà tớ có ___ phòng ngủ.”', nghe: 'Nhà tớ có hai phòng ngủ.', en: 'Listen and fill in the missing word.', dung: ['hai', '2'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Trong phòng khách nhà Nam có gì? (chọn 2)', en: 'What is in Nam’s living room? (choose 2)', dung: ['bộ bàn ghế', 'ti vi'], sai: ['tranh', 'tủ lạnh'] },
        { loai: 'chon', hoi: 'Hội thoại A: Bức tranh ở đâu?', en: 'Where is the painting?', dung: 'ở trong phòng ngủ của Nam', sai: ['ở trong phòng khách', 'ở trong phòng ăn'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Trong phòng làm việc nhà Liên có gì? (chọn 3)', en: 'What is in Liên’s study? (choose 3)', dung: ['bàn', 'ghế', 'máy tính'], sai: ['giường', 'ti vi'] },
        { loai: 'chon', hoi: 'Hội thoại B: Trong vườn nhà Liên có gì?', en: 'What is in Liên’s garden?', dung: 'cây đu đủ', sai: ['cây cam', 'tủ lạnh'] },
        { loai: 'chon', hoi: 'Hội thoại B: Tủ lạnh ở đâu?', en: 'Where is the fridge?', dung: 'ở trong phòng bếp', sai: ['ở trong phòng ăn', 'ở trong phòng khách'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: nhà của em',
      muc: 'viết một đoạn ngắn 3–5 câu kể nhà em có mấy phòng và trong mỗi phòng có gì.',
      mucEn: 'Goal: write 3–5 simple sentences about how many rooms your home has and what is in them.',
      mau: { ten: 'Đoạn mẫu (Mai viết)', chu: 'Nhà tôi có 8 phòng. Phòng khách rất đẹp. Trong phòng khách có một bộ bàn ghế, một cái ti vi và một bức tranh lớn. Trong phòng ngủ của tôi có một cái giường và một cái tủ quần áo. Tôi thích phòng ngủ của tôi.' },
      tu: ['phòng khách', 'phòng bếp', 'phòng ăn', 'phòng làm việc', 'phòng ngủ', 'phòng tắm'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Nhà tôi có ', '.'], ['Đây là ', ' nhà tôi.'], ['Mẹ tôi đang ở trong ', '.']], xong: 'Đúng rồi! Em đã kể về các phòng trong nhà em.' },
        vua: { huong: 'Viết 3 câu: nhà em có mấy phòng, và trong hai phòng có gì.', en: 'Medium: write 3 sentences: how many rooms, and what is in two of them.', soCau: 3 },
        kho: { huong: 'Viết 5 câu: nhà em có mấy phòng; đó là những phòng nào; trong phòng khách và phòng ngủ có gì; em thích phòng nào.', en: 'Hard: write 5 sentences: how many rooms, which rooms, what is in the living room and bedroom, which room you like.', soCau: 5 }
      },
      tuKiemTra: ['Đếm đồ vật có cái, bộ, bức: một cái giường, một bộ bàn ghế, một bức tranh.', 'Kể nhiều đồ vật: dùng dấu phẩy, và “và” trước đồ vật cuối.', 'Đủ dấu thanh: phòng, giường, tủ lạnh, bức tranh.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng tên phòng và đồ vật trong nhà, đúng dấu thanh, đúng vần i – ia – u – ua và viết hoa đầu câu.',
      mucEn: 'Goal: spell rooms and household things with the right tone marks and the rhymes i, ia, u, ua; capitalise the first word.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'giường', en: 'Listen and write the word.', dung: ['giường'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tủ lạnh', dung: ['tủ lạnh'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'phòng tắm', dung: ['phòng tắm'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bức tranh', dung: ['bức tranh'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đũa', dung: ['đũa'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đĩa', dung: ['đĩa'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng (con cua)', nghe: 'cua', en: 'Listen and choose the correct word.', dung: 'cua', sai: ['của', 'cưa'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng (cái đĩa)', nghe: 'đĩa', dung: 'đĩa', sai: ['đía', 'đìa'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng (đôi đũa)', nghe: 'đũa', dung: 'đũa', sai: ['đủa', 'đùa'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng (quả đu đủ)', nghe: 'đu đủ', dung: 'đu đủ', sai: ['đua đủa', 'đu đù'] },
        { loai: 'chon', hoi: 'Chọn từ có vần “ia”', en: 'Choose the word with the rhyme “ia”.', dung: 'đĩa', sai: ['đũa', 'dì'] },
        { loai: 'chon', hoi: 'Chọn từ có vần “ua”', en: 'Choose the word with the rhyme “ua”.', dung: 'cua đá', sai: ['đu đủ', 'dù đỏ'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “dì có đu đủ.”', en: 'Rewrite with a capital letter.', hoa: true, dung: ['Dì có đu đủ.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Trong phòng khách có gì?', en: 'Listen and write the sentence.', hoa: true, dung: ['Trong phòng khách có gì?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Trong + nơi + có gì?', 'Trong phòng khách có gì?', ['Hỏi đồ vật ở một nơi. Trả lời: Trong … có + đồ vật.', 'What is in …? Answer with “có” + things.']],
          ['Số + cái / bộ / bức + đồ vật', 'một cái ti vi, một bộ bàn ghế, một bức tranh', ['Khi đếm đồ vật, thêm từ chỉ loại: cái (một đồ vật), bộ (nhiều đồ vật đi cùng nhau), bức (tranh).', 'Put a classifier between the number and the noun.']],
          ['Kể: A, B và C', 'một cái bếp, một cái tủ bếp và một cái tủ lạnh', ['Dấu phẩy giữa các đồ vật, “và” trước đồ vật cuối.', 'Commas between items, “và” before the last one.']],
          ['… phải không? / không có', 'Trong phòng ăn có bếp, phải không? – Phải. / Không, … không có …', ['Hỏi để biết điều mình nghĩ có đúng không. Trả lời không: không + có.', 'A check question. Negative answer: “không có”.']]
        ]
      },
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu hỏi', en: 'Put the words in order to make a question.', dung: ['Trong', 'phòng ngủ', 'có', 'gì?'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “một ___ tranh”', en: 'Choose the right classifier.', dung: 'bức', sai: ['bộ', 'cái'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “một ___ bàn ghế”', dung: 'bộ', sai: ['bức', 'con'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Trong phòng ngủ có MỘT CÁI GIƯỜNG.”', en: 'Make a question for the capitalised part.', dung: 'Trong phòng ngủ có gì?', sai: ['Phòng ngủ ở đâu?', 'Trong phòng ngủ có ai?'] },
        { loai: 'chon', hoi: 'Trả lời đúng: “Trong phòng khách có tủ lạnh, phải không?”', en: 'Choose the correct answer.', dung: 'Không, trong phòng khách không có tủ lạnh.', sai: ['Không, trong phòng khách có không tủ lạnh.', 'Phải, trong phòng khách không có tủ lạnh.'] },
        { loai: 'go', hoi: 'Điền từ: “Nhà em có ___ phòng?”', en: 'Fill in the question word.', dung: ['mấy'] }
      ]
    }
  ]
};
