# Hướng dẫn soạn một bài tương tác

Tài liệu này mô tả cách biến các trang sách *Vui học tiếng Việt* thành một bài học tương tác trong kho này. Mỗi bài là một thư mục `quyen-<q>/bai-<bb>/` (ví dụ `quyen-1/bai-03/`). Hai bài mẫu đã hoàn chỉnh: `quyen-1/bai-01`, `quyen-1/bai-02`. Hãy đọc `data.js` của hai bài này trước khi soạn bài mới.

## 1. Nguồn

| Nguồn | Ở đâu |
|---|---|
| Trang sách (bản scan) | `/mnt/user-data/uploads/QUYỂN_1.pdf`, `QUYỂN_2.pdf` – **trang PDF = trang in trong sách + 2** |
| Trang của từng bài | `tools/tao_trang.py` (biến `DAU`) |
| File thu âm của NXB | `nguon-am-thanh/q<q>/bai-<bb>/*.mp3` (tu-ngu, hoi-thoai, hoc-chu, luyen-doc, tieng-viet-vui, on-tap…) |
| Phiên âm (Whisper) | cùng tên `.json`: các đoạn và từng từ kèm thời điểm (giây) |
| Bài hát | mã QR cạnh "Học hát" → YouTube; giải mã bằng `python3 tools/qr_trang.py <pdf> <trang PDF, cách nhau dấu phẩy>` |

Các bài **ôn tập** (Q1 bài 10, 15, 20; Q2 bài 10, 15, 20) không có file thu âm: dùng lại đoạn âm thanh đã cắt ở các bài trước (sao chép file vào thư mục `audio/` của bài ôn tập). Bài nào không có tiếng cho một câu thì để chữ, **không dùng giọng máy**.

## 2. Các bước

1. **Đọc trang**: `pdftoppm -r 110 -jpeg -f <p> -l <p> <pdf> /tmp/...` rồi xem ảnh. Ghi lại từng phần (Từ ngữ, Hội thoại, Luyện đọc, Luyện viết, Tiếng Việt vui, Học chữ…) và từng bài tập theo đúng số thứ tự, đúng câu lệnh trong sách.
2. **Âm thanh**:
   - Xem phiên âm `.json` để biết nội dung và thứ tự đọc (thứ tự trong file thu âm có thể khác thứ tự trong tranh — luôn theo phiên âm, không đoán theo tranh).
   - Lấy mốc chính xác bằng `ffmpeg -i x.mp3 -af silencedetect=noise=-38dB:d=0.35 -f null -` (các đoạn có tiếng nằm giữa `silence_end` và `silence_start` kế tiếp).
   - Cắt: `ffmpeg -ss <đầu-0.10> -to <cuối+0.15> -i x.mp3 -af "afade=t=in:d=0.03,areverse,afade=t=in:d=0.06,areverse" -ac 1 -ar 24000 -c:a libmp3lame -b:a 64k audio/<ten>.mp3`.
   - Luôn cắt: tên bài (`tn-ten.mp3` – "Bài N. …"), câu lệnh của từng bài tập có ghi âm (`*-lenh.mp3`), từng từ / từng câu.
3. **Hình**: render trang 400 dpi (`pdftoppm -r 400 -png`), cắt bằng PIL (toạ độ đo ở ảnh 110 dpi × 400/110). Lưu `.webp`: tranh lớn ≤ 1100 px (quality 82), chân dung/thẻ ≤ 320 px (quality 85). Người chỉ tay đứng một mình: tách nền trong suốt bằng `python3 tools/cat_nen.py vao.png ra.webp`. Không để chữ của sách dính vào hình nếu bài tập là đoán/chọn từ.
4. **Điểm chạm** trên tranh: phủ lưới phần trăm lên hình (vẽ đường mỗi 10%), đọc toạ độ `[trái, trên, rộng, cao]` theo %. `nhan` = bong bóng chữ trong tranh (nếu có), `nguoi` = vùng người/vật. Vùng chồng nhau thì vùng nhỏ hơn đặt `z` cao hơn.
5. **Viết `data.js`**: `const BAI_HOC = { quyen, bai, ten, chuDe, chu, amTen, phan: [...] }`. Mỗi phần: `{ id, ten, mau, trang:[số trang in], bt:[...] }`. Mã màu phần: `tn` Từ ngữ, `ht` Hội thoại, `tvv` Tiếng Việt vui, `hc` Học chữ, `ld` Luyện đọc, `lv` Luyện viết. Mỗi bài tập có `id` duy nhất trong bài, `so` (số trong sách), `lenh` (đúng câu lệnh sách), `loai`, `amLenh` nếu có.
6. **Trang**: chạy `python3 tools/tao_trang.py --trang` (tạo `index.html` và ảnh `img/trang-N.jpg`). Dạng bài chỉ dùng riêng cho một bài: viết vào `quyen-x/bai-yy/dang-rieng.js` (cùng cách đăng ký như `assets/js/dang/*.js`) – công cụ sẽ tự gắn.
7. **Kiểm tra**: chạy máy chủ thử (`python3 -m http.server <cổng>` ở gốc kho), dùng Playwright mở bài ở 820×1180 và 390×844, làm hết mọi bài tập tới khi đủ sao, không có lỗi trang, không có tệp 404; chụp màn hình và nhìn lại. Đặt `localStorage['vhtv:mo'] = '{"tatCa":1}'` để không bị khoá bài khi thử.

## 3. Chọn dạng bài

| Bài tập trong sách | `loai` |
|---|---|
| Nhìn hình (một tranh lớn), nghe và nhắc lại | `nghe-hinh` |
| Nghe, chỉ vào hình (nhiều hình nhỏ đánh số) | `the-hinh` |
| Đóng vai giới thiệu / chỉ vào hình nói câu theo mẫu | `gioi-thieu` (`mauCau`, `traLoi`) |
| Đóng vai hỏi – đáp theo mẫu, có chọn câu | `hoi-dap` (`mauCau`, `mauSai`) hoặc `chon-cau` |
| Hội thoại dạng tranh có bong bóng | `tranh-thoai` |
| Hội thoại dạng lời thoại (Mai: …, Nam: …) | `loi-thoai` |
| Chỉ hình nói đúng / chọn từ xưng hô | `xung-ho` |
| Trò chơi Ai đúng ai nhanh | `ai-nhanh` hoặc `chon-cau` |
| Hỏi đáp theo tranh, đếm, đoán, chọn đúng/sai | `chon-cau` |
| Học hát | `hoc-hat` |
| Nghe, nhắc lại tên chữ và tô màu | `the-chu` |
| Tìm và tô màu các chữ vừa học | `tim-chu` |
| Tô màu tranh | `to-mau-tranh` |
| Mê cung, vẽ đường, nối bằng bút | `ve-tren-hinh` |
| Vòng quay chữ, bốc thăm | `vong-quay` |
| Nghe và nhắc lại (Luyện đọc), đánh vần | `the-chu`, `danh-van` |
| Đọc các từ / đọc và nối từ với hình | `the-hinh`, `noi` |
| Tô màu theo thanh | `to-thanh` |
| Đọc câu, đọc bài | `doc-bai` |
| Ghép vần và tô màu tiếng đã biết | `bang-ghep` |
| Viết chữ và dấu thanh còn thiếu / điền chữ | `dien-chu` |
| Viết các từ, chép câu (ô li) | `viet-o-li` |
| Sắp xếp câu theo thứ tự | `sap-xep` |
| Hoạt động làm ở lớp / ở nhà (gấp thuyền, trò chơi nhóm…) | `hoat-dong` |

Chi tiết dữ liệu từng dạng: xem chú thích đầu mỗi tệp trong `assets/js/dang/` và các bài mẫu.

## 4. Nguyên tắc

- Chữ trong `data.js` chép **đúng như sách**, dạng Unicode NFC, giữ dấu câu.
- Không có nhân vật linh vật; dùng chính các nhân vật trong sách.
- Ảnh gia đình, ghi âm của học sinh chỉ ở trên máy, không gửi đi đâu.
- Từ địa phương (ba/má, bắp/ngô…) giữ như sách.
- Không sửa các tệp dùng chung (`assets/js/engine.js`, `assets/css/site.css`, `assets/js/muc-luc.js`) khi soạn một bài; bài xong thì người phụ trách bật `san: true` trong mục lục.
