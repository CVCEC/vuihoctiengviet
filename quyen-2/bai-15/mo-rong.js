/* Quyển 2 – Bài 15 «Ôn tập và học chữ» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước. Ôn tập Bài 11–14.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu hội thoại ngắn có hỏi giờ, việc thường làm, lời khuyên và lời đề nghị (ôn Bài 11–14), khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand short conversations about the time, routines, advice and suggestions (review of Lessons 11–14), spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Sau giờ học', cau: [
          ['Mai', 'Nam ơi, bây giờ là mấy giờ?'], ['Nam', 'Bây giờ là 4 giờ kém 15 phút.'],
          ['Mai', 'Chúng ta lên thư viện đọc sách đi!'], ['Nam', 'Tớ không lên được. 4 giờ tớ đi học bơi.'],
          ['Mai', 'Cậu bơi có giỏi không?'], ['Nam', 'Không. Tớ bơi chậm lắm.'],
          ['Mai', 'Cậu đừng lo! Cậu hãy tập nhiều hơn nhé!'], ['Nam', 'Cảm ơn cậu. Tớ đi nhé!']] },
        { ten: 'Hội thoại B – Buổi tối ở nhà Liên', cau: [
          ['Liên', 'Mẹ ơi, buổi tối mẹ thường làm gì ạ?'], ['Mẹ', 'Buổi tối, mẹ thường xem ti vi. Mẹ ít khi đi chợ.'],
          ['Liên', 'Còn bố ạ?'], ['Mẹ', 'Bố thường đọc sách. Bố không bao giờ đi bơi buổi tối.'],
          ['Liên', 'Con thường dùng máy tính và học bài.'],
          ['Mẹ', 'Con đừng dùng máy tính nhiều quá nhé! Con hãy đi ngủ sớm hơn!'],
          ['Liên', 'Vâng ạ. 9 giờ rưỡi con đi ngủ.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Bây giờ là mấy giờ?', en: 'What time is it now?', dung: '4 giờ kém 15 phút', sai: ['4 giờ 15 phút', '3 giờ 15 phút'] },
        { loai: 'chon', hoi: 'Hội thoại A: Vì sao Nam không lên thư viện?', en: 'Why doesn’t Nam go to the library?', dung: 'Vì 4 giờ Nam đi học bơi.', sai: ['Vì Nam không thích đọc sách.', 'Vì thư viện ở tầng 2.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Cậu hãy tập nhiều ___ nhé!”', nghe: 'Cậu hãy tập nhiều hơn nhé!', en: 'Listen and fill in the missing word.', dung: ['hơn'] },
        { loai: 'chon', hoi: 'Hội thoại B: Buổi tối, mẹ Liên thường làm gì?', en: 'What does Liên’s mother usually do in the evening?', dung: 'Mẹ thường xem ti vi.', sai: ['Mẹ thường đi chợ.', 'Mẹ thường đọc sách.'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Buổi tối, Liên thường làm gì? (chọn 2)', en: 'What does Liên usually do in the evening? (choose 2)', dung: ['dùng máy tính', 'học bài'], sai: ['xem ti vi', 'đi bơi'] },
        { loai: 'chon', hoi: 'Hội thoại B: Mẹ khuyên Liên thế nào?', en: 'What advice does her mother give?', dung: 'Con đừng dùng máy tính nhiều quá nhé!', sai: ['Con hãy dùng máy tính nhiều hơn!', 'Con đừng đi ngủ sớm quá nhé!'] },
        { loai: 'go', hoi: 'Nghe và viết giờ Liên đi ngủ', nghe: '9 giờ rưỡi con đi ngủ.', en: 'Listen and write the time Liên goes to bed.', dung: ['9 giờ rưỡi', '9 giờ 30 phút', 'chín giờ rưỡi'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: buổi tối của em',
      muc: 'viết một đoạn ngắn 4–6 câu kể buổi tối của em: giờ, việc thường làm, ít khi làm, không bao giờ làm.',
      mucEn: 'Goal: write 4–6 sentences about your evening: times, things you usually, rarely and never do.',
      mau: { ten: 'Đoạn mẫu (Liên viết)', chu: 'Buổi tối, tôi ăn tối với gia đình lúc 6 giờ 30 phút. Sau đó, tôi thường học bài. Tôi ít khi xem ti vi. Tôi không bao giờ đá bóng buổi tối. Tôi đi ngủ lúc 9 giờ rưỡi.' },
      tu: ['học bài', 'xem ti vi', 'đọc sách', 'nghe nhạc', 'dùng máy tính', 'vẽ'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Buổi tối, tôi thường ', '.'], ['Tôi ít khi ', '.'], ['Bạn tôi cũng hay ', '.']], xong: 'Đúng rồi! Em đã viết về buổi tối của em.' },
        vua: { huong: 'Viết 3 câu về buổi tối của em: một việc “thường”, một việc “ít khi”, một việc “không bao giờ”.', en: 'Medium: write 3 sentences with “thường” (usually), “ít khi” (rarely), “không bao giờ” (never).', soCau: 3 },
        kho: { huong: 'Viết 6 câu: giờ em ăn tối, giờ em đi ngủ, việc em thường làm, ít khi làm, không bao giờ làm; câu cuối là một lời khuyên cho bạn (“Bạn hãy … hơn!” hoặc “Bạn đừng … quá!”).', en: 'Hard: write 6 sentences: dinner time, bedtime, what you usually, rarely and never do; end with advice for a friend (“Bạn hãy … hơn!” or “Bạn đừng … quá!”).', soCau: 6 }
      },
      tuKiemTra: ['Giờ viết đúng mẫu: lúc 6 giờ 30 phút, lúc 9 giờ rưỡi.', '“thường, ít khi, không bao giờ” đứng trước việc làm.', 'Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm (lời khuyên dùng dấu chấm than).']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng vần ao – au của bài, ôn các vần an, at, ang, ac, anh, ach, ai, ay, đúng dấu thanh và viết hoa đầu câu.',
      mucEn: 'Goal: spell the rhymes ao – au, review earlier rhymes, use the right tone marks and capitalise sentences.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'ngôi sao', en: 'Listen and write the word.', dung: ['ngôi sao'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'cây cau', dung: ['cây cau'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'quả táo', dung: ['quả táo'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'hạt gạo', dung: ['hạt gạo'] },
        { loai: 'chon', hoi: 'Nghe tiếng, chọn vần đúng', nghe: 'sao', en: 'Listen to the syllable and choose its rhyme.', dung: 'ao', sai: ['au', 'ai'] },
        { loai: 'chon', hoi: 'Nghe tiếng, chọn vần đúng', nghe: 'cau', dung: 'au', sai: ['ao', 'ay'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'quyển sách', en: 'Listen and choose the correct spelling.', dung: 'quyển sách', sai: ['quyển sác', 'quyển sát'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'bàn tay', dung: 'bàn tay', sai: ['bàn tai', 'bàng tay'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Mẹ bảo: Nhổ ___ củ, con yêu nhé!”', en: 'Choose the word with the right tone mark.', dung: 'sáu', sai: ['sau', 'sâu'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Củ cà rốt nằm ___ dưới đất.”', dung: 'sâu', sai: ['sau', 'sáu'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “bạn hãy đọc to hơn!”', en: 'Rewrite with a capital letter.', hoa: true, dung: ['Bạn hãy đọc to hơn!'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Bây giờ là mấy giờ?', en: 'Listen and write the sentence.', hoa: true, dung: ['Bây giờ là mấy giờ?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Buổi tối, Nam thường học bài.', hoa: true, dung: ['Buổi tối, Nam thường học bài.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'ôn và dùng đúng 4 điểm ngữ pháp của Bài 11–14.',
      mucEn: 'Goal: review and use 4 grammar points from Lessons 11–14.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Hỏi và nói giờ', 'Bây giờ là mấy giờ? – Bây giờ là 3 giờ kém 10 phút.', ['Trả lời: Bây giờ là + giờ (+ phút / kém … phút / rưỡi).', 'Asking and telling the time.']],
          ['thường, ít khi, không bao giờ + việc làm', 'Buổi tối, Nam thường học bài / ít khi vẽ / không bao giờ đá bóng.', ['Nói làm việc gì nhiều hay ít. Các từ này đứng trước việc làm.', 'Frequency words go before the verb.']],
          ['Lời khuyên: hãy … hơn! / đừng … quá!', 'Bạn hãy đọc nhỏ hơn! · Bạn đừng đọc to quá!', ['“hãy … hơn” = làm thêm; “đừng … quá” = bớt lại. Với người lớn thêm “ạ”: “… giúp em với ạ!”.', '“hãy … hơn” = do more …; “đừng … quá” = not too …; add “ạ” for elders.']],
          ['đang + việc làm; … có + nhận xét + không?', 'Bạn ấy đang vẽ. – Bạn ấy vẽ có đẹp không? – Có. Bạn ấy vẽ đẹp.', ['“đang” = việc làm lúc nói. Hỏi nhận xét: … có + đẹp/giỏi/hay + không?', '“đang” = -ing now; ask “… có + adjective + không?”.']]
        ]
      },
      ghiChu: 'Lễ phép với thầy cô: “Thưa cô, cô nhắc lại từ này giúp em với ạ!”.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Buổi tối,', 'Nam', 'thường', 'học bài.'] },
        { loai: 'chon', hoi: 'Bạn nói quá nhanh. Em nói:', en: 'Your friend speaks too fast. What do you say?', dung: 'Bạn hãy nói chậm hơn!', sai: ['Bạn hãy nói nhanh hơn!', 'Bạn đừng nói chậm quá!'] },
        { loai: 'chon', hoi: 'Em muốn cô giáo đọc lại câu này. Em nói:', en: 'You want the teacher to read the sentence again. Choose the polite way.', dung: 'Thưa cô, cô đọc lại câu này giúp em với ạ!', sai: ['Cô đọc lại câu này đi!', 'Thưa cô, cô đừng đọc lại câu này ạ!'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Bạn ấy vẽ ĐẸP.”', en: 'Make a question for the capitalised part.', dung: 'Bạn ấy vẽ có đẹp không?', sai: ['Bạn ấy đang làm gì?', 'Bạn ấy vẽ lúc mấy giờ?'] },
        { loai: 'go', hoi: 'Điền từ: “Bạn đừng ăn nhiều kẹo ___!”', en: 'Fill in the missing word.', dung: ['quá'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Tớ không bao giờ đá bóng buổi tối.', sai: ['Tớ đá bóng không bao giờ buổi tối.', 'Không tớ bao giờ đá bóng buổi tối.'] }
      ]
    }
  ]
};
