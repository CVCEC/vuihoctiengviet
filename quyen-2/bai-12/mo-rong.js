/* Quyển 2 – Bài 12 «Các em vào lớp nhé!» – phần Mở rộng 15+ (Lộ trình theo khung năng lực, Bậc 2).
   Soạn 17-11-2026 theo khuôn Bài 1 (đã duyệt). Chỉ dùng từ và mẫu câu của bài và các bài trước.
   Dạng bài: assets/js/mo-rong.js. Câu chưa có tệp ghi âm thì tạm đọc bằng giọng máy qua bộ mẫu (TTV.phat). */
const MO_RONG = {
  ten: 'Mở rộng 15+',
  bt: [
    {
      id: 'nghe', loai: 'mr-bai', lenh: '🎧 Luyện nghe hội thoại',
      muc: 'nghe hiểu lời mời, lời đề nghị ở trường và các từ chỉ hướng ra, vào, lên, xuống, khi người nói nói chậm, rõ.',
      mucEn: 'Goal: understand invitations and requests at school, and the direction words ra, vào, lên, xuống, spoken slowly. Listen twice before reading.',
      anChu: true,
      thoai: [
        { ten: 'Hội thoại A – Cả lớp lên thư viện', cau: [
          ['Cô giáo', 'Chào các em!'], ['Cả lớp', 'Chúng em chào cô ạ!'],
          ['Cô giáo', 'Hôm nay, chúng ta sẽ lên thư viện ở tầng 2 đọc sách.'],
          ['Nam', 'Thưa cô, em vào nhà vệ sinh rửa tay được không ạ?'],
          ['Cô giáo', 'Được. Cả lớp chờ bạn Nam một chút nhé!'],
          ['Mai', 'Thưa cô, thư viện có nhiều sách không ạ?'],
          ['Cô giáo', 'Có. Thư viện có nhiều sách hay lắm. Bây giờ, cả lớp lên tầng 2 nào!']] },
        { ten: 'Hội thoại B – Giờ nghỉ ở sân trường', cau: [
          ['Liên', 'Chào các em! Các em có ra sân chơi không?'], ['Mai', 'Có ạ. Nhưng Nam đang ở trên tầng 2.'],
          ['Liên', 'Mai lên gọi Nam đi!'], ['Mai', 'Kìa, Nam đang xuống!'],
          ['Nam', 'Chào chị Liên! Chúng ta ra sân chơi đi!'],
          ['Liên', 'Bây giờ là 9 giờ 45 phút. Chúng ta chơi 10 phút nhé!'],
          ['Nam', 'Vâng ạ. 10 giờ kém 5 phút, chúng ta vào lớp.']] }
      ],
      tenLuyen: 'Nghe rồi trả lời',
      cauHoi: [
        { loai: 'chon', hoi: 'Hội thoại A: Hôm nay cả lớp lên tầng 2 làm gì?', en: 'Why does the class go up to the 2nd floor?', dung: 'Đọc sách ở thư viện.', sai: ['Chơi ở sân.', 'Rửa tay ở nhà vệ sinh.'] },
        { loai: 'chon', hoi: 'Hội thoại A: Nam xin cô đi đâu?', en: 'Where does Nam ask to go?', dung: 'Vào nhà vệ sinh rửa tay.', sai: ['Lên thư viện.', 'Ra sân chơi.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Cả lớp chờ bạn Nam một ___ nhé!”', nghe: 'Cả lớp chờ bạn Nam một chút nhé!', en: 'Listen and fill in the missing word.', dung: ['chút'] },
        { loai: 'chon', hoi: 'Hội thoại B: Lúc đầu, Nam ở đâu?', en: 'Where is Nam at first?', dung: 'Ở trên tầng 2.', sai: ['Ở sân.', 'Ở thư viện.'] },
        { loai: 'go', hoi: 'Nghe và điền: “Kìa, Nam đang ___!”', nghe: 'Kìa, Nam đang xuống!', en: 'Listen and fill in the missing word.', dung: ['xuống'] },
        { loai: 'nhieu', hoi: 'Hội thoại B: Những ai ra sân chơi? (chọn 3)', en: 'Who goes out to play? (choose 3)', dung: ['Liên', 'Mai', 'Nam'], sai: ['cô giáo'] },
        { loai: 'chon', hoi: 'Hội thoại B: Mấy giờ các bạn vào lớp?', en: 'What time do they go back to class?', dung: '10 giờ kém 5 phút', sai: ['9 giờ 45 phút', '10 giờ 5 phút'] }
      ]
    },
    {
      id: 'viet', loai: 'mr-viet', lenh: '✍️ Luyện viết văn xuôi: trường em',
      muc: 'viết một đoạn ngắn 4–5 câu giới thiệu trường, lớp của em.',
      mucEn: 'Goal: write 4–5 sentences about your school and class.',
      mau: { ten: 'Đoạn mẫu (Nam viết)', chu: 'Trường tôi có ba tầng. Lớp tôi ở tầng 2. Thư viện ở tầng 3. Giờ nghỉ, tôi ra sân chơi với các bạn. Tôi thích vào thư viện đọc sách.' },
      tu: ['lớp', 'sân', 'thư viện', 'nhà vệ sinh', 'cầu thang'],
      muc_: {
        de: { huong: 'Chọn từ để điền vào 3 câu.', en: 'Easy: choose a word for each blank.', khung: [['Trường tôi có một ', ' lớn.'], ['Ở tầng 1 có ', '.'], ['Ở tầng 2 cũng có ', '.']], xong: 'Đúng rồi! Em đã viết về trường em.' },
        vua: { huong: 'Viết 3 câu: trường em có mấy tầng, lớp em ở tầng mấy, giờ nghỉ em đi đâu.', en: 'Medium: write 3 sentences: how many floors your school has, which floor your class is on, where you go at break.', soCau: 3 },
        kho: { huong: 'Viết 5 câu giới thiệu trường em: các tầng, lớp, thư viện, sân. Dùng các từ ra, vào, lên, xuống.', en: 'Hard: write 5 sentences about your school (floors, class, library, schoolyard). Use ra, vào, lên, xuống.', soCau: 5 }
      },
      tuKiemTra: ['Dùng đúng ra – vào, lên – xuống.', 'Mỗi câu viết hoa chữ đầu, kết thúc bằng dấu chấm.', 'Đủ dấu thanh: tầng, sân, thư viện, xuống.']
    },
    {
      id: 'chinh-ta', loai: 'mr-bai', lenh: '🔤 Luyện chính tả',
      muc: 'viết đúng các từ của bài, đúng dấu thanh, đúng vần ang – ac và viết hoa tên riêng, đầu câu.',
      mucEn: 'Goal: spell the lesson words with the right tone marks and the rhymes ang – ac; capitalise names and sentences.',
      cauHoi: [
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'thư viện', en: 'Listen and write the word.', dung: ['thư viện'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'cầu thang', dung: ['cầu thang'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'nhà vệ sinh', dung: ['nhà vệ sinh'] },
        { loai: 'go', hoi: 'Nghe và viết từ', nghe: 'xuống', dung: ['xuống'] },
        { loai: 'chon', hoi: 'Nghe tiếng, chọn vần đúng', nghe: 'thang', en: 'Listen to the syllable and choose its rhyme.', dung: 'ang', sai: ['an', 'ac'] },
        { loai: 'chon', hoi: 'Nghe tiếng, chọn vần đúng', nghe: 'bác', dung: 'ac', sai: ['at', 'ang'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'con hạc', en: 'Listen and choose the correct spelling.', dung: 'con hạc', sai: ['con hạt', 'con hàng'] },
        { loai: 'chon', hoi: 'Nghe và chọn từ đúng', nghe: 'nàng tiên', dung: 'nàng tiên', sai: ['nàn tiên', 'nàng tiêng'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Từ ngoài sân, em ___ lớp để học.”', en: 'Choose the word with the right tone mark.', dung: 'vào', sai: ['váo', 'vạo'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Từ trên tầng 2, em ___ tầng 1.”', dung: 'xuống', sai: ['xướng', 'xuông'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “các em vào lớp nào!”', en: 'Rewrite with a capital letter.', hoa: true, dung: ['Các em vào lớp nào!'] },
        { loai: 'go', hoi: 'Viết lại cho đúng: “nam và mai ra sân chơi.”', en: 'Rewrite with capital letters.', hoa: true, dung: ['Nam và Mai ra sân chơi.'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm than)', nghe: 'Chúng ta ra sân chơi đi!', en: 'Listen and write the sentence.', hoa: true, dung: ['Chúng ta ra sân chơi đi!'] },
        { loai: 'go', hoi: 'Nghe và viết câu (chú ý dấu chấm hỏi)', nghe: 'Cậu có vào thư viện không?', hoa: true, dung: ['Cậu có vào thư viện không?'] }
      ]
    },
    {
      id: 'ngu-phap', loai: 'mr-bai', lenh: '📐 Ngữ pháp',
      muc: 'hiểu và dùng đúng 4 điểm ngữ pháp có sẵn trong bài.',
      mucEn: 'Goal: understand and use the 4 grammar points already in this lesson.',
      bang: {
        cot: ['Điểm ngữ pháp', 'Ví dụ trong bài', 'Giải thích'],
        dong: [
          ['Từ chỉ hướng: ra, vào, lên, xuống', 'Từ ngoài sân, em vào lớp. · Từ dưới tầng 1, em lên tầng 2.', ['vào: từ ngoài vào trong; ra: từ trong ra ngoài; lên: từ dưới lên trên; xuống: từ trên xuống dưới.', 'vào = in, ra = out, lên = up, xuống = down.']],
          ['Mời, rủ, đề nghị: … nào! / … nhé! / … đi!', 'Các em vào lớp nào! · Các em nghe cô đọc nhé! · Chúng ta ra sân chơi đi!', ['Từ cuối câu làm lời mời, lời rủ nhẹ nhàng, thân mật. Cuối câu có dấu chấm than.', 'Final words that make a soft invitation or suggestion; end with “!”.']],
          ['hãy + việc làm', 'Các em hãy mở sách ra!', ['Đề nghị, yêu cầu người khác làm một việc.', '“hãy” before a verb = please do …']],
          ['Hỏi có – không: … có … không?', 'Cậu có vào thư viện không? – Không. Tớ lên tầng 2.', ['Trả lời “Có.” hoặc “Không.”, rồi nói thêm.', 'Yes/no question; answer “Có” or “Không” and add more.']]
        ]
      },
      ghiChu: 'Với thầy cô, người lớn, lời đề nghị thêm “ạ”: “Cô chờ em một chút ạ!”.',
      cauHoi: [
        { loai: 'xep', hoi: 'Xếp từ thành câu', en: 'Put the words in order.', dung: ['Các em', 'vào', 'lớp', 'nào!'] },
        { loai: 'chon', hoi: 'Chọn từ đúng: “Từ trong lớp, em ___ sân để chơi.”', en: 'Choose the right direction word.', dung: 'ra', sai: ['vào', 'lên', 'xuống'] },
        { loai: 'go', hoi: 'Điền từ: “Từ dưới tầng 1, em ___ tầng 2.”', en: 'Fill in the direction word.', dung: ['lên'] },
        { loai: 'chon', hoi: 'Giờ nghỉ, em rủ bạn ra sân. Em nói:', en: 'Choose the right way to invite a friend.', dung: 'Chúng ta ra sân chơi đi!', sai: ['Chúng ta ra sân chơi không?', 'Ra sân chơi chúng ta đi!'] },
        { loai: 'chon', hoi: 'Trả lời câu hỏi “Cậu có vào thư viện không?” (Em trả lời: Không)', en: 'Answer “No”.', dung: 'Không. Tớ lên tầng 2.', sai: ['Có. Tớ lên tầng 2.', 'Không. Tớ vào thư viện.'] },
        { loai: 'xep', hoi: 'Xếp từ thành câu (nói với cô giáo)', en: 'Put the words in order (speaking to the teacher).', dung: ['Cô', 'chờ', 'em', 'một chút', 'ạ!'] }
      ]
    }
  ]
};
