/* Quyển 2 – Bài 13: Các em đừng hái hoa nhé!  (sách trang 83–89)
   Thu âm của NXB: Từ ngữ (bài tập 1, 2) và Hội thoại (bài tập 1). Các phần khác không có tiếng.
   Câu trả lời ở Hội thoại 3 (trừ câu M) và các vòng chơi ở Tiếng Việt vui 2 là gợi ý soạn thêm cho trò chơi. */
const A = 'audio/', I = 'img/';
const DUNG = ['mở cửa sổ', 'trêu con vật', 'chạy qua đường', 'vẽ lên tường', 'hái hoa', 'vứt rác ra đường'];
const dung = i => 'Em đừng ' + DUNG[i] + '!';
const HD2 = [
  { tu: 'mở cửa', k: 'mo-cua' }, { tu: 'đóng cửa', k: 'dong-cua' }, { tu: 'hái hoa', k: 'hai-hoa' },
  { tu: 'bẻ cành', k: 'be-canh' }, { tu: 'nghịch điện', k: 'nghich-dien' }, { tu: 'trêu con vật', k: 'treu-con-vat' }
];

const BAI_HOC = {
  quyen: 2, bai: 13, ten: 'Các em đừng hái hoa nhé!', chuDe: 'Trường lớp', chu: 'anh – ach', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [83],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn1-lenh.mp3',
          danhSo: true, anChu: true,
          the: [
            { hinh: I + 't-cua.webp', tu: 'cửa', am: A + 'tn1-cua.mp3' },
            { hinh: I + 't-cua-so.webp', tu: 'cửa sổ', am: A + 'tn1-cua-so.mp3' },
            { hinh: I + 't-vuon-thu.webp', tu: 'vườn thú', am: A + 'tn1-vuon-thu.mp3' },
            { hinh: I + 't-con-vat.webp', tu: 'con vật', am: A + 'tn1-con-vat.mp3' }
          ]
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn2-lenh.mp3',
          danhSo: true, anChu: true,
          goiY: 'Chạm vào từng hình để nghe. Hình có dấu ✕ là việc không nên làm.',
          the: HD2.map(d => ({ hinh: I + 'h-' + d.k + '.webp', tu: d.tu, am: A + 'tn2-' + d.k + '.mp3' }))
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [84, 85],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – Đoạn A', amLenh: A + 'ht1-lenh.mp3',
          hinh: I + 'ht-a.webp', moTa: 'Cô giáo đưa cả lớp ra thăm vườn trường',
          vai: { 'Cô giáo': { av: I + 'av-co.webp', mau: '#3E9B5F' }, 'Cả lớp': { mau: '#8A5CC2' }, 'Nam': { av: I + 'av-nam.webp', mau: '#3C78C8' }, 'Mai': { av: I + 'av-mai.webp', mau: '#E0577A' } },
          loi: [
            { ai: 'Cô giáo', c: 'Hôm nay, cô đưa các em ra thăm vườn trường. Các em có thích không?', am: A + 'a1.mp3' },
            { ai: 'Cả lớp', c: 'Chúng em thích lắm ạ.', am: A + 'a2.mp3' },
            { ai: 'Cô giáo', c: 'Ra vườn, các em đừng hái hoa nhé!', am: A + 'a3.mp3' },
            { ai: 'Cả lớp', c: 'Vâng ạ.', am: A + 'a4.mp3' },
            { ai: 'Cô giáo', c: 'Vì sao chúng ta không được hái hoa?', am: A + 'a5.mp3' },
            { ai: 'Nam', c: 'Vì trong vườn có tấm biển “KHÔNG HÁI HOA” ạ.', am: A + 'a6.mp3' },
            { ai: 'Mai', c: 'Vì hoa trong vườn là của chung ạ.', am: A + 'a7.mp3' }
          ]
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – Đoạn B', amLenh: A + 'ht1-lenh.mp3',
          hinh: I + 'ht-b.webp', moTa: 'Nam và mẹ đứng trước hàng rào chuồng sư tử',
          vai: { 'Nam': { av: I + 'av-nam.webp', mau: '#3C78C8' }, 'Mẹ': { mau: '#D9822B' } },
          loi: [
            { ai: 'Nam', c: 'Mẹ ơi, vì sao tấm biển này viết là “CẤM VƯỢT QUA HÀNG RÀO”?', am: A + 'b1.mp3' },
            { ai: 'Mẹ', c: 'Vì sư tử là thú dữ, đến gần nó rất nguy hiểm nên phải CẤM.', am: A + 'b2.mp3' },
            { ai: 'Nam', c: 'Nhưng vì sao tấm biển kia không viết là “CẤM HÁI HOA”?', am: A + 'b3.mp3' },
            { ai: 'Mẹ', c: 'Hái hoa là sai nhưng không nguy hiểm nên chỉ cần nhắc nhở nhẹ nhàng: “KHÔNG HÁI HOA”.', am: A + 'b4.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'hoat-dong', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          goiY: 'Em đóng vai cùng bố mẹ hoặc các bạn. Có thể bấm “Đóng vai” ở bài tập 1 để nghe lời của các vai khác.',
          hinh: [I + 'ht-a.webp', I + 'ht-b.webp'],
          noiDung: [
            'Đoạn A: đóng vai cô giáo, cả lớp, Nam và Mai.',
            'Đoạn B: một người đóng vai Nam, một người đóng vai mẹ.',
            'Đổi vai cho nhau, rồi nói lại hai đoạn hội thoại.'
          ],
          ghiAm: 'Ghi âm em đóng vai'
        },
        {
          id: 'ht3', so: 3, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Mẫu: – Em đừng mở cửa sổ! – Thưa cô, vì sao ạ? – Vì trời lạnh lắm. Nhìn tranh, chọn lời khuyên đúng, rồi cùng bố mẹ hỏi đáp “Vì sao?”.',
          cau: [
            { hinh: I + 'th-1.webp', hoi: '1. Không mở cửa sổ.', dung: dung(0), sai: [dung(4), dung(3)] },
            { hinh: I + 'th-2.webp', hoi: '2. Không trêu con vật.', dung: dung(1), sai: [dung(2), dung(5)] },
            { hinh: I + 'th-3.webp', hoi: '3. Không chạy qua đường.', dung: dung(2), sai: [dung(5), dung(0)] },
            { hinh: I + 'th-4.webp', hoi: '4. Không vẽ lên tường.', dung: dung(3), sai: [dung(1), dung(4)] },
            { hinh: I + 'th-5.webp', hoi: '5. Không hái hoa.', dung: dung(4), sai: [dung(0), dung(1)] },
            { hinh: I + 'th-6.webp', hoi: '6. Không vứt rác ra đường.', dung: dung(5), sai: [dung(3), dung(2)] }
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [86, 87],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'danh-van-van', lenh: 'Đánh vần',
          goiY: 'Bấm “Đánh vần” để xem hai chữ ghép thành vần. Chạm vào từng bước và đọc theo.',
          tu: [
            { hinh: I + 'dv-chanh.webp', tu: 'quả chanh', to: 'anh', tieng: 'anh', phan: ['a', 'nh'], thanh: null, doc: 'a – nhờ – anh' },
            { hinh: I + 'dv-sach.webp', tu: 'quyển sách', to: 'ách', tieng: 'ach', phan: ['a', 'ch'], thanh: null, doc: 'a – chờ – ach' }
          ]
        },
        {
          id: 'ld2', so: 2, loai: 'noi', lenh: 'Đọc các từ ngữ sau', tenA: 'Từ ngữ', tenB: 'Hình',
          goiY: 'Em đọc to từng từ ngữ, rồi chạm vào từ và hình đúng để nối.',
          a: [{ c: 'bánh chưng' }, { c: 'viên gạch' }, { c: 'bức tranh' }, { c: 'khách sạn' }, { c: 'khám bệnh' }, { c: 'con ếch' }, { c: 'kính' }, { c: 'diễn kịch' }],
          b: [{ hinh: I + 'w-kinh.webp' }, { hinh: I + 'w-khach-san.webp' }, { hinh: I + 'w-banh-chung.webp' }, { hinh: I + 'w-dien-kich.webp' }, { hinh: I + 'w-con-ech.webp' }, { hinh: I + 'w-buc-tranh.webp' }, { hinh: I + 'w-kham-benh.webp' }, { hinh: I + 'w-vien-gach.webp' }],
          cap: [[0, 2], [1, 7], [2, 5], [3, 1], [4, 6], [5, 4], [6, 0], [7, 3]]
        },
        {
          id: 'ld3', so: 3, loai: 'doc-bai', lenh: 'Đọc bài sau',
          ten: 'Tránh mưa', hinh: I + 'bai-doc.webp', nguon: 'Theo sách Tiếng Việt 1 (NXB Đại học Sư phạm TP.HCM)',
          cau: [
            { c: 'Mưa đổ xuống rất nhanh.' }, { c: 'Các con vật tìm chỗ tránh mưa.' },
            { c: 'Bọ dừa trốn mưa nhờ đám lá dừa.' }, { c: 'Cánh cam trú mưa ở khóm lúa.' }, { c: 'Chim chích nấp trên cành chanh.' },
            { c: 'Kiến nép bên gốc nấm.' }, { c: 'Nấm như một chiếc ô che cho nó.' },
            { c: 'Ếch và ễnh ương không sợ mưa.' }
          ]
        },
        {
          id: 'ld3a', so: 3, loai: 'noi', lenh: 'a) Các con vật tránh mưa ở đâu?', tenA: 'Con vật', tenB: 'Chỗ tránh mưa',
          goiY: 'Đọc lại bài “Tránh mưa”, rồi nối mỗi con vật với chỗ nó tránh mưa.',
          a: [{ c: 'kiến', hinh: I + 'a-kien.webp' }, { c: 'cánh cam', hinh: I + 'a-canh-cam.webp' }, { c: 'bọ dừa', hinh: I + 'a-bo-dua.webp' }, { c: 'chim chích', hinh: I + 'a-chim-chich.webp' }],
          b: [{ hinh: I + 'b-canh-chanh.webp' }, { hinh: I + 'b-la-dua.webp' }, { hinh: I + 'b-lua.webp' }, { hinh: I + 'b-nam.webp' }],
          cap: [[0, 3], [1, 2], [2, 1], [3, 0]]
        },
        {
          id: 'ld3b', so: 3, loai: 'chon-cau', lenh: 'b) Ếch và ễnh ương có tránh mưa không? Vì sao?',
          cau: [
            { hinh: I + 'ech.webp', hoi: 'Ếch và ễnh ương có tránh mưa không? Vì sao?', dung: 'Không. Vì ếch và ễnh ương không sợ mưa.', sai: ['Có. Vì ếch và ễnh ương sợ mưa.', 'Có. Ếch và ễnh ương nép bên gốc nấm.'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [87, 88],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'viet-o-li', lenh: 'Chép lại các từ ngữ sau',
          tu: [
            { c: 'tách trà', hinh: I + 'v-tach-tra.webp' }, { c: 'dòng kênh', hinh: I + 'v-dong-kenh.webp' }, { c: 'bập bênh', hinh: I + 'v-bap-benh.webp' },
            { c: 'chênh lệch', hinh: I + 'v-chenh-lech.webp' }, { c: 'bàn tính', hinh: I + 'v-ban-tinh.webp' }, { c: 'vịnh Hạ Long', hinh: I + 'v-vinh-ha-long.webp' },
            { c: 'chim chích', hinh: I + 'v-chim-chich.webp' }, { c: 'phích nước', hinh: I + 'v-phich-nuoc.webp' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Viết các từ sau',
          tu: [{ c: 'xanh' }, { c: 'sách' }, { c: 'kênh' }, { c: 'chích' }]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [88, 89],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'noi', lenh: 'Gắn chữ (ở bên A) vào biển báo (ở bên B)',
          goiY: 'Mẫu: CẤM VẬT NUÔI – biển có hình con chó. Chạm vào chữ ở bên A, rồi chạm vào biển báo đúng ở bên B.',
          a: [{ c: 'CẤM VẬT NUÔI' }, { c: 'KHÔNG GIẪM LÊN CỎ' }, { c: 'CẤM LỬA' }, { c: 'KHÔNG NÓI TO' }, { c: 'CẤM BƠI' }],
          b: [{ hinh: I + 'bien-1.webp' }, { hinh: I + 'bien-2.webp' }, { hinh: I + 'bien-3.webp' }, { hinh: I + 'bien-4.webp' }, { hinh: I + 'bien-5.webp' }],
          cap: [[0, 2], [1, 3], [2, 0], [3, 4], [4, 1]]
        },
        {
          id: 'tvv2a', so: 2, loai: 'chon-cau', lenh: 'Trò chơi: Đuổi hình bắt chữ – a) Vòng 1: Tìm tiếng có vần đã học',
          goiY: 'Bạn nói một vần (ví dụ: ANH), em tìm thật nhanh tiếng có vần đó (TRANH).',
          cau: [
            { hoi: 'ANH', dung: 'TRANH', sai: ['TRĂNG', 'TRÁCH'] },
            { hoi: 'ACH', dung: 'SÁCH', sai: ['SÁNG', 'SẮC'] },
            { hoi: 'ÊNH', dung: 'KÊNH', sai: ['KÍNH', 'KHÁCH'] },
            { hoi: 'ÊCH', dung: 'LỆCH', sai: ['LỊCH', 'LẠCH'] },
            { hoi: 'INH', dung: 'KÍNH', sai: ['KÊNH', 'TRANH'] },
            { hoi: 'ICH', dung: 'KỊCH', sai: ['KÍNH', 'KHÁCH'] }
          ]
        },
        {
          id: 'tvv2b', so: 2, loai: 'chon-cau', lenh: 'Trò chơi: Đuổi hình bắt chữ – b) Vòng 2: Tìm từ ứng với hình',
          goiY: 'Bạn đưa một hình, em tìm thật nhanh từ ứng với hình (ví dụ: ẾCH).',
          cau: [
            { hinh: I + 'vong2-ech.webp', dung: 'ẾCH', sai: ['KÍNH', 'KÊNH'] },
            { hinh: I + 'w-kinh.webp', dung: 'KÍNH', sai: ['KỊCH', 'SÁCH'] },
            { hinh: I + 'w-banh-chung.webp', dung: 'BÁNH CHƯNG', sai: ['VIÊN GẠCH', 'BỨC TRANH'] },
            { hinh: I + 'w-vien-gach.webp', dung: 'VIÊN GẠCH', sai: ['BÁNH CHƯNG', 'KHÁCH SẠN'] },
            { hinh: I + 'w-buc-tranh.webp', dung: 'BỨC TRANH', sai: ['KHÁCH SẠN', 'DIỄN KỊCH'] },
            { hinh: I + 'v-phich-nuoc.webp', dung: 'PHÍCH NƯỚC', sai: ['TÁCH TRÀ', 'BÀN TÍNH'] }
          ]
        },
        {
          id: 'tvv2c', so: 2, loai: 'dien-chu', lenh: 'Trò chơi: Đuổi hình bắt chữ – c) Vòng 3: Nghe đọc, viết đúng',
          goiY: 'Bố mẹ hoặc bạn đọc từ, em viết đúng tiếng còn thiếu: chạm vào hình, chọn chữ và dấu thanh.',
          tu: [
            { hinh: I + 'v3-qua-chanh.webp', mau: 'quả …', dap: 'quả chanh' },
            { hinh: I + 'v3-quyen-sach.webp', mau: 'quyển …', dap: 'quyển sách' },
            { hinh: I + 'v3-kham-benh.webp', mau: 'khám …', dap: 'khám bệnh' }
          ]
        },
        {
          id: 'tvv3', so: 3, loai: 'hoc-hat', lenh: 'Học hát: Ra vườn hoa (Văn Tấn)',
          baiHat: 'Ra vườn hoa', tacGia: 'Văn Tấn', youtube: 'jWCXD_Qesw0'
        }
      ]
    }
  ]
};
