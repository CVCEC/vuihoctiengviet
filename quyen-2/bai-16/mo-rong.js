/* Quyển 2 – Bài 16 «Em đến trường bằng gì?» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu câu hỏi “… bằng gì?”, “… mất bao lâu?” và câu trả lời về phương tiện, thời gian đi đường.',
      mucEn: 'Goal: understand questions about how people travel (“bằng gì?”) and how long it takes (“mất bao lâu?”). Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Nam và Mai nói chuyện đi học', cau: [
          ['Mai', 'Chào Nam! Nam đi học bằng gì?'], ['Nam', 'Tôi đi học bằng xe buýt. Còn Mai?'],
          ['Mai', 'Tôi đi học bằng xe đạp.'], ['Nam', 'Từ nhà Mai đến trường, đi xe đạp mất bao lâu?'],
          ['Mai', 'Mất khoảng 15 phút.'], ['Nam', 'Bố Mai đi làm bằng gì?'], ['Mai', 'Bố tôi đi làm bằng xe máy.']] },
        { ten: 'Hội thoại B – Chị Hoa đi du lịch Huế', cau: [
          ['Nam', 'Chị Hoa ơi, cuối tuần chị đi đâu?'], ['Chị Hoa', 'Chị đi du lịch Huế.'],
          ['Nam', 'Chị đi máy bay hay tàu hoả?'], ['Chị Hoa', 'Chị đi máy bay.'],
          ['Nam', 'Từ Hà Nội đến Huế, đi máy bay mất bao lâu?'], ['Chị Hoa', 'Mất khoảng 1 tiếng.'],
          ['Nam', 'Ở Huế, chị đi chơi bằng gì?'], ['Chị Hoa', 'Chị đi chơi trên sông Hương bằng thuyền.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Mai đi học bằng gì?', en: 'How does Mai go to school?', dung: 'xe đạp', sai: ['xe buýt', 'xe máy'] },
        { loai: 'chon', hoi: 'Hội thoại A: Từ nhà Mai đến trường, đi xe đạp mất bao lâu?', en: 'How long does Mai’s bike ride take?', dung: 'khoảng 15 phút', sai: ['khoảng 5 phút', 'khoảng 1 tiếng'] },
        { loai: 'nhieu', hoi: 'Hội thoại A: những phương tiện nào được nhắc đến? (chọn 3)', en: 'Which means of transport are mentioned? (choose 3)', dung: ['xe buýt', 'xe đạp', 'xe máy'], sai: ['ô tô', 'tàu hoả'] },
        { loai: 'chon', hoi: 'Hội thoại B: Chị Hoa đi Huế bằng gì?', en: 'How does Hoa travel to Huế?', dung: 'máy bay', sai: ['tàu hoả', 'ô tô'] },
        { loai: 'go', hoi: 'Nghe và điền: “Mất ___ 1 tiếng.”', nghe: 'Mất khoảng 1 tiếng.', en: 'Listen and fill in the missing word.', dung: ['khoảng'] },
        { loai: 'xep', hoi: 'Hội thoại B: xếp từ thành câu chị Hoa nói về Huế', en: 'Put the words in order to make Hoa’s sentence.', dung: ['Chị', 'đi chơi', 'trên', 'sông Hương', 'bằng thuyền.'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: em đi học, đi làm, đi chơi bằng gì',
      muc: 'viết một đoạn ngắn 3–5 câu về phương tiện em và gia đình em dùng, và thời gian đi đường.',
      mucEn: 'Goal: write 3–5 sentences about how you and your family travel and how long it takes.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Tôi đi học bằng xe đạp. Từ nhà tôi đến trường, đi xe đạp mất khoảng 15 phút. Bố tôi đi làm bằng ô tô. Mẹ tôi đi bộ. Cuối tuần, gia đình tôi đi chơi bằng xe buýt.' },
      tu: ['xe buýt', 'ô tô', 'xe máy', 'tàu hoả', 'máy bay', 'thuyền'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Mùa hè, gia đình tôi đi du lịch bằng ', '.'], ['Chị tôi thích đi du lịch bằng ', '.'], ['Tôi thích đi ', '.']], xong: 'Đúng rồi! Em đã viết về phương tiện em thích.' },
        vua: { huong: 'Viết 3 câu: em đi học (hoặc đi làm) bằng gì, đi mất bao lâu, cuối tuần em đi chơi bằng gì.', en: 'Medium: write 3 sentences: how you go to school or work, how long it takes, how you go out at the weekend.', soCau: 3 },
        kho: { huong: 'Viết 5 câu theo đoạn mẫu: nói về em và người trong gia đình em; có một câu “Từ … đến …, đi … mất …”.', en: 'Hard: write 5 sentences about you and your family, like the model. Include one sentence “Từ … đến …, đi … mất …”.', soCau: 5 }
      },
      tuKiemTra: ['Dùng “bằng” trước phương tiện: đi học bằng xe đạp; nói “đi bộ”, không nói “bằng bộ”.', 'Nói thời gian: mất khoảng 15 phút, mất 1 tiếng.', 'Đủ dấu: xe đạp, ô tô, tàu hoả, máy bay, đi bộ.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng tên các phương tiện, đúng vần oa – uê, đúng dấu thanh và viết hoa tên riêng.',
      mucEn: 'Goal: spell the transport words, the rhymes oa and uê, the tone marks, and capitalise place names.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'xe đạp', en: 'Listen and write the word.', dung: ['xe đạp'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'xe buýt', dung: ['xe buýt'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'tàu hoả', dung: ['tàu hoả', 'tàu hỏa'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'đi bộ', dung: ['đi bộ'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'du lịch', dung: ['du lịch'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng: kh_ (không mệt)', nghe: 'khoẻ', en: 'Listen and choose the right spelling.', dung: 'khoẻ', sai: ['khoé', 'khoe'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng: kh_ (dùng để mở cửa)', nghe: 'khoá', dung: 'khoá', sai: ['khoà', 'khúa'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng (tên thành phố)', nghe: 'Huế', dung: 'Huế', sai: ['Hoế', 'Huề'] },
        { loai: 'chon', hoi: 'Từ nào có vần oa?', en: 'Which word has the rhyme oa?', dung: 'tàu hoả', sai: ['tàu thuỷ', 'xe buýt'] },
        { loai: 'chon', hoi: 'Từ nào có vần uê?', en: 'Which word has the rhyme uê?', dung: 'xum xuê', sai: ['tròn xoe', 'cái loa'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “khoa đi du lịch ở huế.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Khoa đi du lịch ở Huế.'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “từ hà nội đến đà nẵng, đi tàu hoả mất bao lâu?”', hoa: true, dung: ['Từ Hà Nội đến Đà Nẵng, đi tàu hoả mất bao lâu?', 'Từ Hà Nội đến Đà Nẵng, đi tàu hỏa mất bao lâu?'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Em đi học bằng xe đạp.', en: 'Listen and write the sentence.', hoa: true, dung: ['Em đi học bằng xe đạp.'] },
        { loai: 'go', hoi: 'Nghe và viết câu', nghe: 'Khoa đi chơi trên sông Hương bằng tàu thuỷ.', hoa: true, dung: ['Khoa đi chơi trên sông Hương bằng tàu thuỷ.', 'Khoa đi chơi trên sông Hương bằng tàu thủy.'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['đi + việc + bằng + phương tiện', 'Em đi học bằng xe đạp. Bố em đi làm bằng ô tô.', ['“bằng” đứng trước phương tiện. Hỏi: “… bằng gì?”.', '“bằng” + vehicle = by …. Ask with “bằng gì?”.']],
          ['đi bộ', 'Mẹ em đi bộ.', ['Nói “đi bộ”, không nói “đi bằng bộ”.', 'Say “đi bộ” (to walk), not “đi bằng bộ”.']],
          ['Từ … đến …, đi … mất bao lâu?', 'Từ Hà Nội đến Đà Nẵng, đi tàu hoả mất bao lâu? – Mất khoảng 16 tiếng.', ['Hỏi thời gian đi đường. “khoảng” = gần đúng, không chắc chắn.', 'Ask how long a trip takes. “khoảng” = about.']],
          ['A hay B?', 'Chị đi máy bay hay tàu hoả?', ['Câu hỏi chọn một trong hai; trả lời bằng một phương án: “Chị đi tàu hoả.”', 'Either/or question; answer with one choice.']]
        ]
      },
      ghiChu: '“Ngày mai chị sẽ đi du lịch Đà Nẵng.”: “sẽ” chỉ việc chưa xảy ra (đã học ở các bài trước).',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Bố em', 'đi làm', 'bằng', 'ô tô.'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Chị Mây đi du lịch bằng MÁY BAY.”', en: 'Make a question for the capitalised part.', dung: 'Chị Mây đi du lịch bằng gì?', sai: ['Chị Mây đi du lịch ở đâu?', 'Chị Mây đi du lịch mất bao lâu?'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Từ nhà đến trường, đi xe đạp mất KHOẢNG 30 PHÚT.”', dung: 'Từ nhà đến trường, đi xe đạp mất bao lâu?', sai: ['Từ nhà đến trường, đi bằng gì?', 'Từ nhà đến trường, đi xe đạp hay đi bộ?'] },
        { loai: 'chon', hoi: 'Chọn câu đúng', en: 'Choose the correct sentence.', dung: 'Mẹ em đi bộ.', sai: ['Mẹ em đi bằng bộ.', 'Mẹ em bộ đi.'] },
        { loai: 'go', hoi: 'Điền một từ: “Chị đi máy bay ___ tàu hoả?”', en: 'Fill in the word for “or”.', dung: ['hay'] }
      ]
    }
  ]
};
