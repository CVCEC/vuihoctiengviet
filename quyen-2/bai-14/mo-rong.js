/* Quyển 2 – Bài 14 «Giờ nghỉ, cậu thường làm gì?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu người nói kể việc thường làm lúc rảnh, làm nhiều hay ít, giỏi hay không, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand people talking about free-time activities, how often and how well they do them, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Giờ nghỉ ở trường', cau: [
          ['Liên', 'Giờ nghỉ, em thường làm gì?'], ['Mai', 'Em thường nhảy dây với các bạn nữ.'],
          ['Liên', 'Em nhảy dây giỏi không?'], ['Mai', 'Em nhảy cũng được ạ. Còn chị?'],
          ['Liên', 'Chị hay đá cầu. Chị ít khi chơi trốn tìm.'], ['Mai', 'Chị có đánh cầu lông không?'],
          ['Liên', 'Không. Giờ nghỉ ngắn lắm.']] },
        { ten: 'Hội thoại B – Lúc rảnh ở nhà', cau: [
          ['Dũng', 'Ở nhà, lúc rảnh, em thường làm gì?'], ['Nam', 'Em thường đọc sách hoặc tập vẽ. Còn anh?'],
          ['Dũng', 'Anh hay nghe nhạc và chơi đàn.'], ['Nam', 'Anh đánh đàn có hay không?'],
          ['Dũng', 'Anh đánh đàn khá hay. Nhưng anh hát không hay lắm.'], ['Nam', 'Anh có hay đi bơi không?'],
          ['Dũng', 'Có. Anh bơi rất nhanh. Em có biết bơi không?'], ['Nam', 'Em biết bơi, nhưng em bơi chậm lắm.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Giờ nghỉ, Mai thường làm gì?', en: 'What does Mai usually do at break time?', dung: 'Mai thường nhảy dây.', sai: ['Mai thường đá cầu.', 'Mai thường chơi trốn tìm.'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: Liên kể về những trò chơi nào? (chọn 2)', en: 'Which games does Liên talk about? (choose 2)', dung: ['đá cầu', 'chơi trốn tìm'], sai: ['nhảy dây', 'chơi bịt mắt bắt dê'] },
        { loai: 'chon', hoi: 'Hội thoại A: Vì sao Liên không đánh cầu lông?', en: 'Why doesn’t Liên play badminton?', dung: 'Vì giờ nghỉ ngắn lắm.', sai: ['Vì Liên đánh cầu lông không giỏi.', 'Vì Liên không thích cầu lông.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Em thường đọc sách ___ tập vẽ.”', nghe: 'Em thường đọc sách hoặc tập vẽ.', en: 'Listen and fill in the missing word.', dung: ['hoặc'] },
        { loai: 'chon', hoi: 'Hội thoại B: Dũng hát thế nào?', en: 'How well does Dũng sing?', dung: 'Dũng hát không hay lắm.', sai: ['Dũng hát rất hay.', 'Dũng hát khá hay.'] },
        { loai: 'chon', hoi: 'Hội thoại B: Ai bơi nhanh hơn?', en: 'Who swims faster?', dung: 'Dũng', sai: ['Nam'] },
        { loai: 'go', hoi: 'Nghe và điền: “Em biết bơi, nhưng em bơi ___ lắm.”', nghe: 'Em biết bơi, nhưng em bơi chậm lắm.', en: 'Listen and fill in the missing word.', dung: ['chậm'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: lúc rảnh, em thường làm gì?',
      muc: 'viết một đoạn ngắn 4–6 câu kể việc em thường làm lúc rảnh, làm nhiều hay ít, giỏi hay không.',
      mucEn: 'Goal: write 4–6 sentences about what you do in your free time, how often and how well.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Lúc rảnh, tôi thường đọc sách hoặc tập vẽ. Tôi vẽ khá đẹp. Tôi ít khi nghe nhạc. Tôi chưa bao giờ chơi đàn. Chị Liên đánh đàn rất giỏi.' },
      tu: ['đọc sách', 'nghe nhạc', 'tập vẽ', 'đá cầu', 'nhảy dây', 'đi bơi', 'chơi đàn'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Lúc rảnh, tôi thường ', '.'], ['Tôi ít khi ', '.'], ['Bạn tôi cũng hay ', '.']], xong: 'Đúng rồi! Em đã viết về những việc em làm lúc rảnh.' },
        vua: { huong: 'Viết 3 câu với “thường”, “ít khi”, “chưa bao giờ”.', en: 'Medium: write 3 sentences using “thường” (usually), “ít khi” (rarely), “chưa bao giờ” (never yet).', soCau: 3 },
        kho: { huong: 'Viết 6 câu: lúc rảnh em thường làm gì, ít khi làm gì, chưa bao giờ làm gì; em làm việc đó thế nào (giỏi, hay, nhanh, chậm…). Kể thêm về một người trong gia đình.', en: 'Hard: write 6 sentences: what you usually, rarely and never do in your free time; how well you do it. Add one family member.', soCau: 6 }
      },
      tuKiemTra: ['“thường, hay, ít khi, chưa bao giờ” đứng trước việc làm.', 'Nhận xét đứng sau việc làm: vẽ đẹp, hát hay, bơi nhanh.', 'Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ của bài, đúng dấu thanh, đúng vần ai – ay và viết hoa tên riêng, đầu câu.',
      mucEn: 'Goal: spell the lesson words with the right tone marks and the rhymes ai – ay; capitalise names and sentences.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nhảy dây', en: 'Listen and write the word.', dung: ['nhảy dây'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đá cầu', dung: ['đá cầu'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đánh cầu lông', dung: ['đánh cầu lông'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bàn tay', dung: ['bàn tay'] },
        { loai: 'chon', hoi: 'Nghe tiếng, chọn vần đúng', nghe: 'nai', en: 'Listen to the syllable and choose its rhyme.', dung: 'ai', sai: ['ay', 'ây'] },
        { loai: 'chon', hoi: 'Nghe tiếng, chọn vần đúng', nghe: 'tay', dung: 'ay', sai: ['ai', 'ây'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'máy cày', en: 'Listen and choose the correct spelling.', dung: 'máy cày', sai: ['mái cày', 'máy cài'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'cái chai', dung: 'cái chai', sai: ['cái chay', 'cái chải'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Giờ ___, cậu thường làm gì?”', en: 'Choose the word with the right tone mark.', dung: 'nghỉ', sai: ['nghĩ', 'nghị'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Ở nhà, lúc ___, cậu thường làm gì?”', dung: 'rảnh', sai: ['rãnh', 'ranh'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “giờ nghỉ, nam thường đá cầu.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Giờ nghỉ, Nam thường đá cầu.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Cá bơi dưới suối.', en: 'Listen and write the sentence.', hoa: true, dung: ['Cá bơi dưới suối.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Chim bay trên trời.', hoa: true, dung: ['Chim bay trên trời.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Cậu có hay đi bơi không?', hoa: true, dung: ['Cậu có hay đi bơi không?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['thường, hay, ít khi, chưa bao giờ + việc làm', 'Em thường đá cầu. · Các bạn ít khi chơi cầu lông. · Tớ chưa bao giờ chơi đàn.', ['Nói làm việc gì nhiều hay ít. Các từ này đứng trước việc làm.', 'Frequency words (usually, often, rarely, never yet) go before the verb.']],
          ['Việc làm + nhận xét', 'Chị Liên đánh đàn rất giỏi. · Chị ấy hát không hay lắm. · Tớ vẽ chậm lắm.', ['Nhận xét (giỏi, hay, nhanh, chậm) đứng sau việc làm. “không” đứng trước nhận xét: hát không hay.', 'The describing word comes after the verb; “không” goes before it.']],
          ['Hỏi nhận xét: … (có) + nhận xét + không?', 'Em đá cầu giỏi không? · Chị ấy hát có hay không?', ['Trả lời: Có. … giỏi. / Không. … không giỏi.', 'Answer “Có. …” (yes) or “Không. … không …” (no).']],
          ['hoặc', 'Tớ thường đọc sách hoặc nghe nhạc.', ['Nối hai việc; làm việc này hoặc việc kia.', '“hoặc” = or.']]
        ]
      },
      ghiChu: '“Cậu có hay đi bơi không?” – ở đây “hay” nghĩa là thường; còn “hát hay” nghĩa là hát giỏi, nghe thích.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Giờ nghỉ,', 'em', 'thường', 'làm', 'gì?'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Tớ ít khi đi bơi.', sai: ['Tớ đi bơi ít khi.', 'Ít tớ khi đi bơi.'] },
        { loai: 'chon', hoi: 'Trả lời câu hỏi “Anh của bạn đá cầu giỏi không?” (Em trả lời: Không)', en: 'Answer “No”.', dung: 'Không. Anh tớ đá cầu không giỏi.', sai: ['Không. Anh tớ đá cầu giỏi.', 'Có. Anh tớ đá cầu không giỏi.'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Chị ấy hát KHÔNG HAY LẮM.”', en: 'Make a question for the capitalised part.', dung: 'Chị ấy hát có hay không?', sai: ['Chị ấy hát gì?', 'Chị ấy có hát không?'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Nam bơi ___ lắm.” (Nam bơi không nhanh)', en: 'Choose the right word.', dung: 'chậm', sai: ['nhanh', 'giỏi'] },
        { loai: 'go', hoi: 'Điền từ: “Tớ chưa ___ giờ chơi đàn.”', en: 'Fill in the missing word.', dung: ['bao'] }
      ]
    }
  ]
};
