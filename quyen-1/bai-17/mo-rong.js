/* Quyển 1 – Bài 17 «Trường em ở đâu?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 1).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “… ở đâu?” và câu trả lời có từ chỉ vị trí (trên, dưới, trong, bên cạnh, đối diện…), khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand “Where is …?” and answers with position words (on, under, in, next to, opposite…), spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Hương hỏi Mai về trường', cau: [
          ['Hương', 'Mai ơi, cậu học ở đâu?'], ['Mai', 'Tớ học ở Trường Ngôi Sao.'], ['Hương', 'Trường Ngôi Sao ở đâu?'],
          ['Mai', 'Trường ở trên đường Thanh Niên, bên cạnh Bệnh viện Mắt.'], ['Hương', 'Trường cậu xa hay gần nhà cậu?'],
          ['Mai', 'Trường tớ xa nhà tớ. Còn trường cậu?'], ['Hương', 'Trường tớ gần nhà tớ. Trường tớ đối diện cửa hàng.']] },
        { ten: 'Hội thoại B – Mẹ hỏi Nam đồ vật ở đâu', cau: [
          ['Mẹ', 'Nam ơi, con mèo ở đâu?'], ['Nam', 'Con mèo ở dưới cái bàn ạ.'], ['Mẹ', 'Quả bóng ở đâu?'],
          ['Nam', 'Quả bóng ở trong hộp ạ.'], ['Mẹ', 'Quyển sách ở đâu?'], ['Nam', 'Quyển sách ở trên cái bàn ạ.'],
          ['Mẹ', 'Đồng hồ ở trên tường, phải không?'], ['Nam', 'Phải ạ.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Mai học ở đâu?', en: 'Where does Mai study?', dung: 'Mai học ở Trường Ngôi Sao.', sai: ['Mai học ở Bệnh viện Mắt.', 'Mai học ở cửa hàng.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Trường Ngôi Sao ở đâu?', en: 'Where is Ngôi Sao School?', dung: 'Bên cạnh Bệnh viện Mắt.', sai: ['Đối diện Bệnh viện Mắt.', 'Trong Bệnh viện Mắt.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Trường Mai xa hay gần nhà Mai?', en: 'Is Mai’s school far from or near her home?', dung: 'Trường Mai xa nhà Mai.', sai: ['Trường Mai gần nhà Mai.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Trường tớ ___ cửa hàng.”', nghe: 'Trường tớ đối diện cửa hàng.', en: 'Listen and fill in the missing word.', dung: ['đối diện'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Mẹ hỏi về những đồ vật nào? (chọn 4)', en: 'Which things does Mum ask about? (choose 4)', dung: ['con mèo', 'quả bóng', 'quyển sách', 'đồng hồ'], sai: ['cái đèn', 'lọ hoa'] },
        { loai: 'chon', hoi: 'Hội thoại B: Con mèo ở đâu?', en: 'Where is the cat?', dung: 'dưới cái bàn', sai: ['trên cái bàn', 'bên cạnh cái ghế'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp lại câu trả lời của Nam', en: 'Put Nam’s answer in order.', dung: ['Quả bóng', 'ở', 'trong', 'hộp ạ.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: nơi em học tiếng Việt',
      muc: 'viết một đoạn ngắn 3–5 câu đơn nói nơi em học ở đâu, gần hay xa nhà em.',
      mucEn: 'Goal: write 3–5 simple sentences about where you study and whether it is near or far from your home.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Tôi học ở Trường Ngôi Sao. Trường tôi ở trên đường Thanh Niên. Trường tôi bên cạnh Bệnh viện Mắt. Cửa hàng ở đối diện trường tôi. Trường tôi gần nhà tôi.' },
      tu: ['trong', 'ngoài', 'trên', 'dưới', 'trước', 'sau', 'bên cạnh', 'đối diện'],
      muc_: {
        de: { huong: 'Chọn từ chỉ vị trí để điền vào 3 câu.', en: 'Easy: choose a position word for each blank.', khung: [['Con mèo ở ', ' hộp.'], ['Quả bóng ở ', ' hộp.'], ['Quyển sách ở ', ' hộp.']], xong: 'Đúng rồi! Em đã nói được đồ vật ở đâu.' },
        vua: { huong: 'Viết 3 câu theo đoạn mẫu: em học ở đâu, nơi đó ở đâu, xa hay gần nhà em.', en: 'Medium: write 3 sentences like the model: where you study, where it is, and whether it is far or near your home.', soCau: 3 },
        kho: { huong: 'Viết 5 câu về nơi em học, dùng ít nhất hai từ chỉ vị trí (bên cạnh, đối diện, trước, sau…).', en: 'Hard: write 5 sentences about where you study, using at least two position words.', soCau: 5 }
      },
      tuKiemTra: ['Tên trường, tên đường viết hoa: Trường Ngôi Sao, đường Thanh Niên.', 'Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Đủ dấu: ở, gần, bên cạnh, đối diện.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ chỉ nơi chốn và vị trí, đúng dấu thanh, đúng chữ r – t và viết hoa tên riêng.',
      mucEn: 'Goal: spell place and position words with the right tone marks and the letters r, t; capitalise names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bệnh viện', en: 'Listen and write the word.', dung: ['bệnh viện'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'cửa hàng', dung: ['cửa hàng'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'công trường', dung: ['công trường'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'trường học', dung: ['trường học'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đối diện', dung: ['đối diện'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bên cạnh', dung: ['bên cạnh'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: c_a hàng', nghe: 'cửa', en: 'Choose the right tone mark.', dung: 'cửa', sai: ['cưa', 'cứa'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'rờ', en: 'Listen to the letter name and tap the letter.', dung: 'r', sai: ['d', 'gi'] },
        { loai: 'chon', hoi: 'Nghe tên chữ, chạm đúng chữ', nghe: 'tờ', dung: 't', sai: ['th', 'đ'] },
        { loai: 'chon', hoi: 'Chọn từ viết đúng (rửa bát)', nghe: 'rửa bát', en: 'Choose the correct spelling.', dung: 'rửa bát', sai: ['dửa bát', 'rữa bát'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “trường em ở trên đường thanh niên.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Trường em ở trên đường Thanh Niên.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Bệnh viện ở đâu?', en: 'Listen and write the sentence.', hoa: true, dung: ['Bệnh viện ở đâu?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Trường tôi gần nhà tôi.', hoa: true, dung: ['Trường tôi gần nhà tôi.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Hỏi nơi chốn: … ở đâu?', 'Trường em ở đâu? – Trường em ở trên đường Thanh Niên.', ['“ở đâu” hỏi về nơi chốn. Trả lời: … ở + nơi chốn.', '“ở đâu?” = where? Answer: … ở + place.']],
          ['ở + từ chỉ vị trí + danh từ', 'Con mèo ở trên hộp. Trường em bên cạnh Bệnh viện Mắt.', ['Từ chỉ vị trí đứng trước danh từ: trong, ngoài, trên, dưới, trước, sau, bên cạnh, đối diện.', 'Position words come before the noun.']],
          ['Hỏi lựa chọn: … xa hay gần …?', 'Trường em xa hay gần nhà em?', ['“hay” nối hai lựa chọn trong câu hỏi; trả lời bằng một lựa chọn.', '“hay” = or (in questions); answer with one choice.']],
          ['Hỏi xác nhận: …, phải không?', 'Trường em đối diện Bệnh viện Mắt, phải không?', ['Đặt “phải không?” ở cuối câu để hỏi lại. Trả lời: “Phải.” hoặc “Không phải, …”.', 'Tag question “…, right?”. Answer “Phải.” or “Không phải, …”.']]
        ]
      },
      ghiChu: 'Trước từ chỉ vị trí có thể có hoặc không có “ở”: “Trường em ở bên cạnh bệnh viện.” = “Trường em bên cạnh bệnh viện.”',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Trường', 'em', 'ở', 'đâu?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Bác sĩ ở BỆNH VIỆN.”', en: 'Make a question for the capitalised part.', dung: 'Bác sĩ ở đâu?', sai: ['Bác sĩ làm nghề gì?', 'Bác sĩ là ai?'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Quả bóng ở dưới cái bàn.', sai: ['Quả bóng ở cái bàn dưới.', 'Quả bóng dưới ở cái bàn.'] },
        { loai: 'chon', hoi: 'Trường Nam bên cạnh Bệnh viện Mắt. Trả lời: “Trường Nam đối diện Bệnh viện Mắt, phải không?”', en: 'Nam’s school is next to the eye hospital. Answer the question.', dung: 'Không phải, trường Nam bên cạnh Bệnh viện Mắt.', sai: ['Phải, trường Nam đối diện Bệnh viện Mắt.'] },
        { loai: 'go', hoi: 'Điền từ: “Trường em xa ___ gần nhà em?”', en: 'Fill in the word meaning “or”.', dung: ['hay'] }
      ]
    }
  ]
};
