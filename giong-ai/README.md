# Giọng đọc AI

Những câu trong sách không có file thu âm của Nhà xuất bản được đọc bằng giọng AI (Google Gemini).
Trên trang bài học, bài tập có giọng AI mang dòng ghi chú «Một số câu trong bài tập này được đọc bằng giọng AI».

- `can-doc.tsv` – mọi câu cần đọc (tạo bằng `node tools/thieu_tieng.js`).
- `../am-ai/<mã>.mp3` – file tiếng; mỗi câu dùng chung cho mọi bài có câu đó.
- `kiem-tra.tsv` – Whisper nghe lại từng câu (điểm giống chữ 0–1).
- `index.html` – trang nghe thử tất cả câu, câu điểm thấp có viền cam.
- `bo.txt` – mã những câu muốn bỏ (đọc sai): mỗi dòng một mã. Xoá file mp3 của mã đó để đọc lại.
- `chay.txt` – cài đặt lần chạy; sửa file này là GitHub chạy lại (`.github/workflows/giong-ai.yml`).
- `trang-thai.md` – kết quả lần chạy gần nhất.

Khoá API để trong GitHub secret `GEMINI_API_KEY`, không bao giờ ghi vào kho mã.
