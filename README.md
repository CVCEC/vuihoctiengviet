# Vui học tiếng Việt – bản tương tác

Phiên bản số hoá tương tác của bộ sách **Vui học tiếng Việt** (Quyển 1, 2), do CVCEC – Trường Tiếng Việt Của Em thực hiện với sự đồng ý của Nhà xuất bản Đại học Sư phạm TP. Hồ Chí Minh. Miễn phí cho các gia đình.

Trang web: https://vuihoctiengviet.cvcec.org (kho mã: github.com/CVCEC/vuihoctiengviet)

## Nguồn nội dung
- Sách: *Vui học tiếng Việt* – Nguyễn Minh Thuyết, Nguyễn Khánh Hà và cộng sự, NXB Đại học Sư phạm TP. Hồ Chí Minh; Vietnamese Network – Hội Người Việt Nam tại Fukuoka tổ chức bản thảo.
- File thu âm: thư mục Google Drive của NXB (mã QR trong sách), lưu bản sao trong `nguon-am-thanh/`.
- Bài hát: nhúng video YouTube từ mã QR trong sách; bản quyền thuộc tác giả, người biểu diễn.

## Cấu trúc
```
index.html                 Trang chủ: chọn quyển, danh sách 20 bài
assets/css/site.css        Giao diện chung
assets/js/engine.js        Bộ máy bài học – các dạng bài tập
assets/js/muc-luc.js       Mục lục 2 quyển (san: true = bài đã có)
quyen-1/bai-01/            Một bài học
  index.html               Khung trang (giống nhau giữa các bài)
  data.js                  Toàn bộ nội dung bài: const BAI_HOC = {...}
  img/                     Hình cắt từ sách, trang sách (trang-5.jpg…)
  audio/                   Đoạn âm thanh đã cắt theo từng từ, từng câu
nguon-am-thanh/            File thu âm gốc + danh-sach.tsv
.github/workflows/         Tự tải file thu âm từ Google Drive
```

## Các dạng bài tập (`loai` trong data.js)
| loai | Bài tập trong sách |
|---|---|
| `nghe-hinh` | Nhìn hình, nghe và nhắc lại (+ trò chơi “Ai đây?”) |
| `gioi-thieu` | Đóng vai, giới thiệu (Đây là … tôi.) |
| `hoi-dap` | Đóng vai, hỏi – đáp có chọn câu trả lời |
| `dan-nhan` | Hỏi đáp về ảnh gia đình (dán nhãn, ảnh của em không rời khỏi máy) |
| `hoc-hat` | Học hát (YouTube, chỉ tải khi bấm) |
| `the-chu` | Nghe, nhắc lại tên chữ và tô màu |
| `tim-chu` | Tìm và tô màu các chữ vừa học |

## Thêm một bài mới
1. Sao chép thư mục `quyen-1/bai-01` thành `quyen-1/bai-02`, sửa `data.js`.
2. Thêm file thu âm vào `nguon-am-thanh/danh-sach.tsv`.
3. Đặt `san: true` cho bài đó trong `assets/js/muc-luc.js`.

Không cần tài khoản, không thu thập dữ liệu: tiến độ học lưu trong trình duyệt của từng máy; ghi âm và ảnh chỉ nằm trên máy người dùng.
