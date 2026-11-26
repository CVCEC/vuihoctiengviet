# Vui học nâng cao (Bậc 3–5) · CVCEC biên soạn

Phần thứ ba của Lộ trình 15+, cạnh Vui học tiếng Việt Quyển 1–2 và Về Nhà Em (CVCEC đồng ý 26-11-2026). **Không lấy bài của các góc Làng học tập.** Bốn mạch: Nghe · Ngữ pháp trong ngữ cảnh · Viết văn · Viết thơ, vè – cùng đọc hiểu. Sách "Vui học tiếng Việt" chỉ có Quyển 1–2 (Bậc 1–2), nên mọi bài ở đây **do CVCEC tự viết**, không chép sách hay trang khác. Ghi "tham chiếu" Khung năng lực tiếng Việt dùng cho người nước ngoài (TT 17/2015/TT-BGDĐT); không gọi là chứng chỉ hay "đạt chuẩn".

**Trạng thái (26-11-2026): bài mẫu `bai-01` "Tết ở nhà em" đã làm lại theo khuôn được duyệt, chờ CVCEC duyệt nội dung** (CLAUDE.md: soạn mẫu, duyệt rồi mới làm tiếp). Bài mẫu chưa gắn vào mục lục và tab Lộ trình.

## Cách làm một bài
- Trang: `trung-cap/bai-NN/index.html` khai báo `const BAI_HOC = {…}` rồi gọi `TC.chay(BAI_HOC)`. Bộ máy dùng chung: `trung-cap/tc.js`, `trung-cap/tc.css` (xem chú thích đầu `tc.js` cho các loại phần).
- Khuôn mỗi bài (theo tài liệu tập huấn giáo viên của trường, 11-2026): Khởi động (câu hỏi gợi mở, giác quan) → Nghe (ẩn chữ, nghe trước) → Từ ngữ (từ cần hiểu / từ cần dùng được) → Đọc hiểu (câu hỏi 4 mức: Nhận biết, Giải thích, Hình thức, Vận dụng) → Ngữ pháp trong ngữ cảnh → Viết (có bài mẫu, thang 0–3 cho Nội dung, Chi tiết – trình tự, Diễn đạt) → Viết thơ, vè (máy đếm tiếng, so vần) → Kết nối đời sống (có nhiệm vụ nối với Về Nhà Em).
- Mọi văn bản đọc, hội thoại, bài mẫu do CVCEC tự viết; không chép slide hay văn bản có tác giả trong tài liệu tập huấn.
- Mã bài gửi lên cổng: `tc-bNN` (Bậc 3–4), `cc-bNN` (Bậc 5). Khi được duyệt, thêm nhãn vào `TTV_LO_TRINH.nhanBai.vuihoc` (mau-chung) và tên dễ đọc vào `TEN_LUAT` của `lo-trinh/index.html` (cổng).
- Sao lưu trên máy: khoá mới `vhtv:tc:<mã bài>`. Bài viết không được lưu.
- Âm thanh: `TTV.phat({ tep, chu })`; tệp đặt ở `bai-NN/audio/`. Khi bài được duyệt, thêm câu vào danh sách của robot giọng đọc AI (giọng Kore).
- Lời hướng dẫn tiếng Anh giảm dần: Bậc 3 chỉ có nút EN ở phần Từ ngữ; Bậc 4–5 không có tiếng Anh.

## Khung bài đề xuất (28 bài)

| Mã | Bậc | Chủ điểm | Tên bài | Trọng tâm |
|---|---|---|---|---|
| tc-b01 | 3 | le-tet | **Tết ở nhà em** (bài mẫu) | Kể theo trình tự · đoạn văn 3 phần |
| tc-b02 | 3 | le-tet | Trung thu và Rằm tháng Giêng | Đọc hiểu phong tục · so sánh hai lễ |
| tc-b03 | 3 | truyen-ke | Kể lại một truyện cổ tích | Thì quá khứ: đã, từng, rồi · lời dẫn |
| tc-b04 | 3 | que-huong | Chuyến về quê | Kể chuyến đi · trạng ngữ nơi chốn |
| tc-b05 | 3 | que-huong | Đi lại ở Việt Nam | Hỏi đường, đặt vé, đặt phòng |
| tc-b06 | 3 | que-huong | Ở chợ, nhà hàng, hiệu thuốc | Hội thoại tốc độ bình thường · mặc cả |
| tc-b07 | 3 | ca-dao-tuc-ngu | Ca dao, tục ngữ về gia đình | Nghĩa đen, nghĩa bóng |
| tc-b08 | 3 | ca-dao-tuc-ngu | Thành ngữ trong đời sống | Dùng thành ngữ trong câu |
| tc-b09 | 3 | dao-duc | Theo em thì sao? | Nêu ý kiến và lý do: vì… nên…, theo em |
| tc-b10 | 3 | – | Viết thư cho ông bà | Thư thân mật · kể việc đã qua |
| tc-b11 | 3 | tho-ca | Đọc thơ, hiểu thơ | Đọc diễn cảm · nói cảm nghĩ |
| tc-b12 | 3 | – | Ôn tập Bậc 3 | Bài tham chiếu 4 kỹ năng |
| tc-b13 | 4 | xa-hoi | Môi trường quanh ta | Nghe bản tin ngắn · nhận ra ý kiến |
| tc-b14 | 4 | xa-hoi | Công nghệ và mạng xã hội | Đọc bài báo · lợi và hại |
| tc-b15 | 4 | xa-hoi | Sống giữa hai nền văn hoá | Kể trải nghiệm · so sánh văn hoá |
| tc-b16 | 4 | lap-luan | Chọn cái nào? | Tuy… nhưng…, so với…, ưu – nhược |
| tc-b17 | 4 | lap-luan | Thuyết trình ngắn | Mở – thân – kết bài nói · trả lời câu hỏi |
| tc-b18 | 4 | xa-hoi | Từ Hán-Việt quanh ta | Yếu tố Hán-Việt thường gặp · hàm ý |
| tc-b19 | 4 | lap-luan | Viết bài nêu quan điểm | Luận điểm, dẫn chứng, kết luận |
| tc-b20 | 4 | – | Ôn tập Bậc 4 | Bài tham chiếu 4 kỹ năng |
| cc-b01 | 5 | van-hoc | Đọc truyện ngắn Việt Nam | Nhân vật, chi tiết, hàm ý (văn bản CVCEC viết hoặc tác phẩm đã hết hạn bản quyền) |
| cc-b02 | 5 | van-hoc | Thơ Việt qua các thời kỳ | Thể thơ lục bát, thơ mới · biện pháp tu từ |
| cc-b03 | 5 | lich-su | Những mốc lịch sử Việt Nam | Đọc văn bản dài · tóm tắt |
| cc-b04 | 5 | lich-su | Di sản văn hoá | Thuyết minh · từ Hán-Việt chuyên đề |
| cc-b05 | 5 | cong-viec | Tiếng Việt nơi công sở | Thư, email trang trọng · kính ngữ |
| cc-b06 | 5 | cong-viec | Phỏng vấn và họp bàn | Nói trôi chảy · đồng ý, phản bác lịch sự |
| cc-b07 | 5 | xa-hoi | Bàn luận một vấn đề xã hội | Bài nghị luận · lập luận nhiều chiều |
| cc-b08 | 5 | – | Ôn tập Bậc 5 | Bài tham chiếu 4 kỹ năng |
