/* Quyển 2 – Bài 17 «Bác cho cháu hỏi, siêu thị ở đâu ạ?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu lời hỏi đường lễ phép, lời chỉ đường (đi thẳng, rẽ, qua cầu) và khoảng cách.',
      mucEn: 'Goal: understand polite questions about the way, simple directions and distances. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Mai hỏi đường đến bưu điện', cau: [
          ['Mai', 'Cháu chào cô ạ. Cô cho cháu hỏi, bưu điện ở đâu ạ?'], ['Người đi đường', 'Bưu điện à? Cháu đi thẳng đường này, đến ngã ba, rẽ trái.'],
          ['Mai', 'Bưu điện cách đây bao xa ạ?'], ['Người đi đường', 'Khoảng 400 mét.'],
          ['Mai', 'Cháu đi bộ được không ạ?'], ['Người đi đường', 'Được, cháu đi bộ mất khoảng 5 phút.'],
          ['Mai', 'Cháu cảm ơn cô ạ.']] },
        { ten: 'Hội thoại B – Nam và mẹ đi nhà sách', cau: [
          ['Nam', 'Mẹ ơi, nhà sách cách nhà mình bao xa ạ?'], ['Mẹ', 'Nhà sách cách nhà mình khoảng 2 ki lô mét.'],
          ['Nam', 'Mẹ và con đi đến nhà sách bằng gì ạ?'], ['Mẹ', 'Nhà sách xa, nên chúng ta đi xe buýt.'],
          ['Nam', 'Đi xe buýt mất bao lâu ạ?'], ['Mẹ', 'Mất khoảng 15 phút. Sau đó, chúng ta đi qua cầu là đến nhà sách.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Mai hỏi đường đến đâu?', en: 'Where does Mai want to go?', dung: 'bưu điện', sai: ['siêu thị', 'nhà sách', 'công viên'] },
        { loai: 'chon', hoi: 'Hội thoại A: Đi đến bưu điện thế nào?', en: 'How do you get to the post office?', dung: 'Đi thẳng đường này, đến ngã ba, rẽ trái.', sai: ['Đi thẳng đường này, đến ngã tư, rẽ phải.', 'Đi sang đường, đi qua cầu.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Khoảng ___ mét.”', nghe: 'Khoảng 400 mét.', en: 'Listen and write the number.', dung: ['400', 'bốn trăm'] },
        { loai: 'chon', hoi: 'Hội thoại A: Mai nói câu nào để cảm ơn?', en: 'Which sentence does Mai use to say thank you?', dung: 'Cháu cảm ơn cô ạ.', sai: ['Cháu chào cô ạ.', 'Cô cho cháu hỏi ạ.'] },
        { loai: 'chon', hoi: 'Hội thoại B: Nhà sách cách nhà Nam bao xa?', en: 'How far is the bookshop from Nam’s house?', dung: 'khoảng 2 ki lô mét', sai: ['khoảng 200 mét', 'khoảng 15 ki lô mét'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp đúng thứ tự đường đi của Nam và mẹ', en: 'Put the steps of the trip in order.', dung: ['đi xe buýt', 'đi qua cầu', 'đến nhà sách'] },
        { loai: 'nhieu', hoi: 'Hai hội thoại nhắc đến những nơi nào? (chọn 2)', en: 'Which places are mentioned in the two dialogues? (choose 2)', dung: ['bưu điện', 'nhà sách'], sai: ['siêu thị', 'công viên'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: đường từ nhà em đến một nơi gần nhà',
      muc: 'viết một đoạn ngắn 3–5 câu nói một nơi gần nhà cách bao xa, đi bằng gì và đi đường nào.',
      mucEn: 'Goal: write 3–5 sentences about a place near your home: how far it is, how you get there and which way you go.',
      mau: { ten: 'Đoạn mẫu (Mai viết)', chu: 'Nhà tôi ở gần công viên. Công viên cách nhà tôi khoảng 500 mét. Tôi thường đi bộ đến công viên. Tôi đi sang đường, sau đó đi qua cầu là đến công viên. Đi bộ mất khoảng 10 phút.' },
      tu: ['siêu thị', 'công viên', 'nhà sách', 'bưu điện', 'bảo tàng', 'trường'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Nhà tôi ở gần ', '.'], ['Tôi thường đi bộ đến ', '.'], ['Từ nhà tôi đến ', ', đi bộ mất khoảng 10 phút.']], xong: 'Đúng rồi! Em đã viết về một nơi gần nhà em.' },
        vua: { huong: 'Viết 3 câu: nơi đó cách nhà em bao xa, em đi bằng gì, em đi thế nào (đi thẳng, rẽ phải, rẽ trái…).', en: 'Medium: write 3 sentences: how far the place is, how you get there, which way you go.', soCau: 3 },
        kho: { huong: 'Viết 5 câu chỉ đường cho một người bạn đến nhà em: bắt đầu từ trường hoặc một nơi bạn biết; có “cách … khoảng …” và “… là đến …”.', en: 'Hard: write 5 sentences giving a friend directions to your home. Use “cách … khoảng …” and “… là đến …”.', soCau: 5 }
      },
      tuKiemTra: ['Nói khoảng cách: … cách … khoảng 500 mét / 2 ki lô mét.', 'Chỉ đường theo thứ tự: đi thẳng, đến ngã tư, rẽ phải; nối các bước bằng dấu phẩy.', 'Đủ dấu: đường, ngã ba, ngã tư, rẽ trái, cầu.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng từ chỉ đường, đúng vần oan – oat, oam – oăm, đúng dấu thanh và viết hoa đầu câu, tên riêng.',
      mucEn: 'Goal: spell the direction words, the rhymes oan, oat, oam, oăm and the tone marks; capitalise sentences and names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đường', en: 'Listen and write the word.', dung: ['đường'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'ngã tư', dung: ['ngã tư'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'rẽ phải', dung: ['rẽ phải'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đi thẳng', dung: ['đi thẳng'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: r_ trái', nghe: 'rẽ trái', en: 'Choose the right tone mark.', dung: 'rẽ trái', sai: ['rẻ trái', 'rè trái'] },
        { loai: 'chon', hoi: 'Chọn dấu thanh đúng: ng_ ba', nghe: 'ngã ba', dung: 'ngã ba', sai: ['ngà ba', 'ngá ba'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'hoa xoan', en: 'Listen and choose the right spelling.', dung: 'hoa xoan', sai: ['hoa xoang', 'hoa xoăn'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'phim hoạt hình', dung: 'phim hoạt hình', sai: ['phim hoặt hình', 'phim hoạc hình'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'mỏ khoằm', dung: 'mỏ khoằm', sai: ['mỏ khoàm', 'mỏ khoằn'] },
        { loai: 'chon', hoi: 'Từ nào có vần oam?', en: 'Which word has the rhyme oam?', dung: 'ngoạm', sai: ['chỗ ngoặt', 'nhoẻn cười'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “huyền và xuân là hai chị em.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Huyền và Xuân là hai chị em.'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “siêu thị cách đây khoảng 1 ki lô mét.”', hoa: true, dung: ['Siêu thị cách đây khoảng 1 ki lô mét.', 'Siêu thị cách đây khoảng một ki lô mét.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Bác cho cháu hỏi, siêu thị ở đâu ạ?', en: 'Listen and write the sentence.', hoa: true, dung: ['Bác cho cháu hỏi, siêu thị ở đâu ạ?'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu phẩy)', nghe: 'Cháu đi thẳng đường này, đến ngã tư, rẽ phải.', hoa: true, dung: ['Cháu đi thẳng đường này, đến ngã tư, rẽ phải.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Hỏi đường lễ phép: … cho cháu hỏi, … ở đâu ạ?', 'Bác cho cháu hỏi, siêu thị ở đâu ạ?', ['Mở đầu bằng “Bác/Cô cho cháu hỏi”, cuối câu thêm “ạ” để lễ phép với người lớn.', 'A polite way to ask an older person the way; “ạ” shows respect.']],
          ['A cách B bao xa? – A cách B khoảng …', 'Công viên cách nhà bao xa ạ? – Công viên cách nhà khoảng 500 mét.', ['Hỏi và nói khoảng cách. “mét”, “ki lô mét” đứng sau số.', 'Ask and say distances: “cách” = (is) away from.']],
          ['Chỉ đường: đi thẳng …, đến …, rẽ …', 'Cháu đi thẳng đường này, đến ngã tư, rẽ phải.', ['Nói các bước theo đúng thứ tự đi, ngăn cách bằng dấu phẩy.', 'Give the steps in order, separated by commas.']],
          ['…, nên … / … là đến …', 'Công viên rất gần nhà, nên chúng ta đi bộ. Đi qua cầu là đến công viên.', ['“nên” nói kết quả; “… là đến …” = làm xong việc này thì tới nơi.', '“nên” = so; “… là đến …” = and then you are there.']]
        ]
      },
      ghiChu: 'Với người lạ lớn tuổi, Nam gọi “bác” và xưng “cháu”; người đi đường cũng gọi Nam là “cháu”.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp thành câu hỏi đường lễ phép', en: 'Put the parts in order.', dung: ['Bác', 'cho cháu hỏi,', 'siêu thị', 'ở đâu ạ?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Công viên cách nhà KHOẢNG 500 MÉT.”', en: 'Make a question for the capitalised part.', dung: 'Công viên cách nhà bao xa?', sai: ['Công viên ở đâu?', 'Đi đến công viên bằng gì?'] },
        { loai: 'chon', hoi: 'Em hỏi đường một cô lớn tuổi. Câu nào lễ phép nhất?', en: 'You ask an older woman the way. Which is the most polite?', dung: 'Cô cho cháu hỏi, bưu điện ở đâu ạ?', sai: ['Bưu điện ở đâu?', 'Cô ơi, bưu điện đâu?'] },
        { loai: 'go', hoi: 'Điền một từ: “Công viên rất gần nhà, ___ chúng ta đi bộ.”', en: 'Fill in the word for “so”.', dung: ['nên'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Siêu thị cách đây khoảng 1 ki lô mét.', sai: ['Siêu thị khoảng cách đây 1 ki lô mét.', 'Siêu thị cách khoảng đây 1 ki lô mét.'] }
      ]
    }
  ]
};
