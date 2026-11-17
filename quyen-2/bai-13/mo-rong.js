/* Quyển 2 – Bài 13 «Các em đừng hái hoa nhé!» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu lời khuyên “đừng …”, câu hỏi “Vì sao?” và câu trả lời “Vì …”, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand advice with “đừng …” (don’t …), “Vì sao?” (why?) and “Vì …” (because …), spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Trong lớp học', cau: [
          ['Cô giáo', 'Hôm nay trời lạnh lắm. Nam ơi, em đóng cửa sổ giúp cô được không?'], ['Nam', 'Vâng ạ.'],
          ['Cô giáo', 'Các em đừng mở cửa sổ nhé!'], ['Mai', 'Thưa cô, vì sao ạ?'],
          ['Cô giáo', 'Vì trời lạnh lắm. Các em cũng đừng nghịch điện nhé!'],
          ['Nam', 'Thưa cô, vì sao chúng em không được nghịch điện ạ?'],
          ['Cô giáo', 'Vì nghịch điện rất nguy hiểm.']] },
        { ten: 'Hội thoại B – Ở vườn thú', cau: [
          ['Mai', 'Ba ơi, con hái hoa này được không ạ?'], ['Ba', 'Con đừng hái hoa! Tấm biển kia viết là “KHÔNG HÁI HOA”.'],
          ['Mai', 'Vì sao không được hái hoa ạ?'], ['Ba', 'Vì hoa trong vườn thú là của chung.'],
          ['Mai', 'Kia là con sư tử. Con trêu nó được không ạ?'],
          ['Ba', 'Không được. Con đừng trêu con vật! Sư tử là thú dữ, rất nguy hiểm.'],
          ['Mai', 'Vâng ạ. Con đứng xa hàng rào.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Cô nhờ Nam làm gì?', en: 'What does the teacher ask Nam to do?', dung: 'Đóng cửa sổ.', sai: ['Mở cửa sổ.', 'Mở cửa.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Vì sao các em đừng mở cửa sổ?', en: 'Why shouldn’t they open the window?', dung: 'Vì trời lạnh lắm.', sai: ['Vì trời nóng lắm.', 'Vì nghịch điện rất nguy hiểm.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Vì nghịch điện rất ___.”', nghe: 'Vì nghịch điện rất nguy hiểm.', en: 'Listen and fill in the missing word.', dung: ['nguy hiểm'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Ba khuyên Mai đừng làm những việc gì? (chọn 2)', en: 'What does Mai’s father tell her not to do? (choose 2)', dung: ['hái hoa', 'trêu con vật'], sai: ['bẻ cành', 'mở cửa'] },
        { loai: 'chon', hoi: 'Hội thoại B: Tấm biển viết gì?', en: 'What does the sign say?', dung: '“KHÔNG HÁI HOA”', sai: ['“CẤM HÁI HOA”', '“CẤM VƯỢT QUA HÀNG RÀO”'] },
        { loai: 'chon', hoi: 'Hội thoại B: Vì sao không được hái hoa trong vườn thú?', en: 'Why can’t you pick flowers in the zoo?', dung: 'Vì hoa trong vườn thú là của chung.', sai: ['Vì sư tử là thú dữ.', 'Vì hoa không đẹp.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Con đừng ___ con vật!”', nghe: 'Con đừng trêu con vật!', en: 'Listen and fill in the missing word.', dung: ['trêu'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: những việc em không làm',
      muc: 'viết một đoạn ngắn 4–6 câu về những việc em không làm, và nói vì sao.',
      mucEn: 'Goal: write 4–6 sentences about things you do not do, and say why.',
      mau: { ten: 'Đoạn mẫu (Mai viết)', chu: 'Ở trường, tôi không vẽ lên tường. Ra vườn, tôi không hái hoa, không bẻ cành. Vì hoa trong vườn là của chung. Ở nhà, tôi không nghịch điện. Vì nghịch điện rất nguy hiểm.' },
      tu: ['hái hoa', 'bẻ cành', 'vẽ lên tường', 'nghịch điện', 'trêu con vật', 'vứt rác ra đường'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Tôi không ', '.'], ['Các bạn đừng ', ' nhé!'], ['Vì sao chúng ta không được ', '?']], xong: 'Đúng rồi! Em đã viết về những việc không nên làm.' },
        vua: { huong: 'Viết 3 câu: “Tôi không …”, rồi nói vì sao: “Vì …”.', en: 'Medium: write 3 sentences: “Tôi không …” (I don’t …) and “Vì …” (because …).', soCau: 3 },
        kho: { huong: 'Viết 6 câu về những việc em không làm ở trường, ở nhà, ở vườn thú. Mỗi việc nói thêm vì sao (“Vì …”).', en: 'Hard: write 6 sentences about things you don’t do at school, at home and at the zoo. Give a reason for each (“Vì …”).', soCau: 6 }
      },
      tuKiemTra: ['Câu khuyên dùng “đừng”, cuối câu có dấu chấm than (!).', 'Câu “Vì …” nói lí do, viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Đủ dấu thanh: hái, bẻ cành, nghịch điện, trêu.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ của bài, đúng dấu thanh, đúng vần anh – ach và viết hoa tên riêng, đầu câu.',
      mucEn: 'Goal: spell the lesson words with the right tone marks and the rhymes anh – ach; capitalise names and sentences.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'cửa sổ', en: 'Listen and write the word.', dung: ['cửa sổ'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'bẻ cành', dung: ['bẻ cành'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nghịch điện', dung: ['nghịch điện'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'vườn thú', dung: ['vườn thú'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'quyển sách', dung: ['quyển sách'] },
        { loai: 'chon', hoi: 'Nghe tiếng, chọn vần đúng', nghe: 'chanh', en: 'Listen to the syllable and choose its rhyme.', dung: 'anh', sai: ['ach', 'ang'] },
        { loai: 'chon', hoi: 'Nghe tiếng, chọn vần đúng', nghe: 'sách', dung: 'ach', sai: ['anh', 'ac'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'bánh chưng', en: 'Listen and choose the correct spelling.', dung: 'bánh chưng', sai: ['bán chưng', 'bánh chưn'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Em đừng ___ hoa!”', en: 'Choose the word with the right tone mark.', dung: 'hái', sai: ['hài', 'hai'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Em đừng mở ___ sổ!”', dung: 'cửa', sai: ['của', 'cữa'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “các em đừng hái hoa nhé!”', en: 'Rewrite with a capital letter.', hoa: true, dung: ['Các em đừng hái hoa nhé!'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “vịnh hạ long rất đẹp.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Vịnh Hạ Long rất đẹp.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Thưa cô, vì sao ạ?', en: 'Listen and write the sentence.', hoa: true, dung: ['Thưa cô, vì sao ạ?'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm than)', nghe: 'Em đừng vẽ lên tường!', hoa: true, dung: ['Em đừng vẽ lên tường!'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['đừng + việc làm (+ nhé)', 'Ra vườn, các em đừng hái hoa nhé! · Em đừng mở cửa sổ!', ['Khuyên, nhắc người khác không làm việc gì. Thêm “nhé” cho nhẹ nhàng. Cuối câu có dấu chấm than.', '“đừng” + verb = don’t …; “nhé” makes it softer.']],
          ['Hỏi lí do: Vì sao …? – Vì …', 'Vì sao chúng ta không được hái hoa? – Vì hoa trong vườn là của chung ạ.', ['“Vì sao” hỏi lí do; câu trả lời bắt đầu bằng “Vì”.', '“Vì sao?” = why?; answer with “Vì …” = because …']],
          ['CẤM … / KHÔNG … (biển báo)', 'CẤM VƯỢT QUA HÀNG RÀO · KHÔNG HÁI HOA', ['“CẤM” rất mạnh, dùng khi nguy hiểm; “KHÔNG” nhẹ hơn, để nhắc nhở.', '“CẤM” = strictly forbidden (danger); “KHÔNG” = a gentle “no …”.']],
          ['… nên … (lí do → kết quả)', 'Sư tử là thú dữ, đến gần nó rất nguy hiểm nên phải cấm.', ['Phần trước “nên” là lí do, phần sau “nên” là kết quả.', '“nên” = so / therefore.']]
        ]
      },
      ghiChu: 'Với thầy cô, người lớn, hỏi lễ phép: “Thưa cô, vì sao ạ?”.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Các em', 'đừng', 'hái', 'hoa', 'nhé!'] },
        { loai: 'chon', hoi: 'Chọn câu khuyên đúng', en: 'Choose the correct sentence.', dung: 'Em đừng trêu con vật!', sai: ['Em trêu đừng con vật!', 'Đừng em trêu con vật!'] },
        { loai: 'chon', hoi: 'Đặt câu hỏi cho phần in hoa: “Chúng ta không hái hoa VÌ HOA LÀ CỦA CHUNG.”', en: 'Make a question for the capitalised part.', dung: 'Vì sao chúng ta không hái hoa?', sai: ['Chúng ta không hái hoa ở đâu?', 'Chúng ta có hái hoa không?'] },
        { loai: 'chon', hoi: '– Em đừng nghịch điện! – Vì sao ạ? – …', en: 'Choose the right reason.', dung: 'Vì nghịch điện rất nguy hiểm.', sai: ['Vì hoa là của chung.', 'Vì trời lạnh lắm.'] },
        { loai: 'chon', hoi: 'Ở chuồng sư tử, tấm biển viết thế nào?', en: 'Which sign is at the lion enclosure?', dung: 'CẤM VƯỢT QUA HÀNG RÀO', sai: ['KHÔNG HÁI HOA', 'KHÔNG NÓI TO'] },
        { loai: 'go', hoi: 'Điền từ: “Trời lạnh lắm ___ em đừng mở cửa sổ.”', en: 'Fill in the missing word (so).', dung: ['nên'] }
      ]
    }
  ]
};
