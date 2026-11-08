/* Quyển 2 – Bài 10: Ôn tập và học chữ  (sách trang 61–67)
   Bài này không có file thu âm riêng. Âm thanh lấy lại từ file thu âm gốc của các bài trước trong Quyển 2:
   tn-ten   ← Bài 5 (am-thanh.mp3) "Ôn tập và học chữ"
   w-*      ← Bài 6, Bài 7 (tu-ngu.mp3) từng từ chỉ thời tiết, hoạt động
   s-troi-nong ← Bài 6 (hoi-thoai.mp3) "Hôm nay trời nóng."
   s-di-du-lich ← Bài 7 (tu-ngu.mp3) "Bạn thích đi du lịch chứ?" */
const A = 'audio/', H = 'img/';
const XAM = ['a', 'o', 'ô', 'ơ', 'u', 'ư', 'ua', 'ưa'];
const HOI_EM = 'Em hỏi bạn thế nào?';
const tt = (n, dung, sai, am) => ({ hinh: H + 'o1-' + n + '.webp', hoi: 'Hôm nay trời thế nào?', dung, sai, amDung: am ? A + am + '.mp3' : null });
const hd = (n, dung, sai, am) => ({ hinh: H + 'o2-' + n + '.webp', hoi: HOI_EM, dung, sai, amDung: am ? A + am + '.mp3' : null });
const DA = ['gói bánh chưng', 'làm bánh Trung thu', 'thả diều', 'múa sạp', 'xem múa rối nước'].map(x => 'Bạn đã được ' + x + ' bao giờ chưa?');
const da = (n, a, b) => ({ hinh: H + 'o3-' + n + '.webp', hoi: HOI_EM, dung: DA[n - 1], sai: [DA[a - 1], DA[b - 1]] });
const bg = (n, hoi, dung, sai) => ({ hinh: H + 'o4-' + n + '.webp', hoi, dung, sai });

const BAI_HOC = {
  quyen: 2, bai: 10, ten: 'Ôn tập và học chữ', chuDe: 'Thiên nhiên', chu: 'am – ap', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'on-tap', ten: 'Ôn tập', mau: 'ht', trang: [61, 62, 63],
      bt: [
        {
          id: 'on1', so: 1, loai: 'chon-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Nhìn từng hình, chọn câu trả lời đúng. Rồi em hỏi đáp với bố mẹ theo mẫu.',
          mau: { cau: [{ c: 'Hôm nay trời thế nào?' }, { c: 'Hôm nay trời nắng.' }] },
          cau: [
            tt(1, 'Hôm nay trời nắng.', ['Hôm nay trời mưa.', 'Hôm nay trời có tuyết.'], 'w-nang'),
            tt(2, 'Hôm nay trời mưa.', ['Hôm nay trời nắng.', 'Hôm nay trời có sương mù.'], 'w-mua'),
            tt(3, 'Hôm nay trời có tuyết.', ['Hôm nay trời nóng.', 'Hôm nay trời mưa.'], 'w-tuyet'),
            tt(4, 'Hôm nay trời nóng.', ['Hôm nay trời có tuyết.', 'Hôm nay trời có sương mù.'], 's-troi-nong'),
            tt(5, 'Hôm nay trời có sương mù.', ['Hôm nay trời nắng.', 'Hôm nay trời nóng.'], 'w-suong-mu')
          ]
        },
        {
          id: 'on2', so: 2, loai: 'chon-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Nhìn từng hình, chọn câu hỏi đúng với hình. Rồi em hỏi đáp với bố mẹ theo mẫu.',
          mau: { cau: [{ c: 'Bạn thích tắm biển chứ?' }, { c: 'Có. Tớ rất thích. / Không. Tớ không thích.' }] },
          cau: [
            hd(1, 'Bạn thích tắm biển chứ?', ['Bạn thích leo núi chứ?', 'Bạn thích cắm trại chứ?'], 'w-tam-bien'),
            hd(2, 'Bạn thích đi rừng chứ?', ['Bạn thích tắm biển chứ?', 'Bạn thích đi du lịch chứ?'], 'w-di-rung'),
            hd(3, 'Bạn thích leo núi chứ?', ['Bạn thích cắm trại chứ?', 'Bạn thích tắm biển chứ?'], 'w-leo-nui'),
            hd(4, 'Bạn thích cắm trại chứ?', ['Bạn thích đi rừng chứ?', 'Bạn thích leo núi chứ?'], 'w-cam-trai'),
            hd(5, 'Bạn thích đi du lịch chứ?', ['Bạn thích đi rừng chứ?', 'Bạn thích cắm trại chứ?'], 's-di-du-lich')
          ]
        },
        {
          id: 'on3', so: 3, loai: 'chon-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Đọc chữ dưới hình, chọn câu hỏi đúng. Rồi em hỏi đáp với bố mẹ theo mẫu.',
          mau: { cau: [
            { c: 'Bạn đã được gói bánh chưng bao giờ chưa?' },
            { c: 'Rồi. Năm kia tớ đã được gói bánh chưng rồi. / Chưa. Tớ chưa bao giờ được gói bánh chưng.' }
          ] },
          cau: [da(1, 2, 3), da(2, 1, 4), da(3, 5, 2), da(4, 3, 5), da(5, 4, 1)]
        },
        {
          id: 'on4', so: 4, loai: 'chon-mau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Đọc chữ dưới hình để biết khi nào, rồi chọn câu trả lời đúng. Sau đó em hỏi đáp với bố mẹ theo mẫu.',
          mau: { cau: [{ c: 'Bao giờ bạn nghỉ Tết?' }, { c: 'Tuần sau tớ sẽ nghỉ Tết.' }] },
          cau: [
            bg(1, 'Bao giờ bạn nghỉ Tết?', 'Tuần sau tớ sẽ nghỉ Tết.', ['Chủ nhật tớ sẽ nghỉ Tết.', 'Sang năm tớ sẽ nghỉ Tết.']),
            bg(2, 'Bao giờ bạn đi biển?', 'Hè này tớ sẽ đi biển.', ['Thứ Hai tớ sẽ đi biển.', 'Tuần sau tớ sẽ đi biển.']),
            bg(3, 'Bao giờ bạn lên lớp 2?', 'Sang năm tớ sẽ lên lớp 2.', ['Chủ nhật tớ sẽ lên lớp 2.', 'Tuần sau tớ sẽ lên lớp 2.']),
            bg(4, 'Bao giờ bạn đi xem phim?', 'Chủ nhật tớ sẽ đi xem phim.', ['Sang năm tớ sẽ đi xem phim.', 'Thứ Hai tớ sẽ đi xem phim.']),
            bg(5, 'Bao giờ bạn đi xem triển lãm?', 'Thứ Hai tớ sẽ đi xem triển lãm.', ['Chủ nhật tớ sẽ đi xem triển lãm.', 'Hè này tớ sẽ đi xem triển lãm.'])
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [64, 65],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'danh-van', lenh: 'Đánh vần',
          goiY: 'Bấm “Đánh vần” để xem chữ ghép thành vần. Chạm vào từng bước để đọc theo.',
          tu: [
            { hinh: H + 'dv-cam.webp', tieng: 'am', phan: ['a', 'm'], thanh: null, doc: 'a – mờ – am' },
            { hinh: H + 'dv-thap-rua.webp', tieng: 'ap', phan: ['a', 'p'], thanh: null, doc: 'a – pờ – ap' }
          ]
        },
        {
          id: 'ld2a', so: 2, loai: 'noi', lenh: 'Đọc các từ ngữ sau (1–5)', tenA: 'Từ ngữ', tenB: 'Hình',
          goiY: 'Em đọc to từng từ ngữ, rồi nối từ ngữ với hình đúng.',
          a: [{ c: 'khám' }, { c: 'múa sạp' }, { c: 'chăm' }, { c: 'cặp' }, { c: 'cô Tấm' }],
          b: [{ hinh: H + 'w-cap.webp' }, { hinh: H + 'w-kham.webp' }, { hinh: H + 'w-co-tam.webp' }, { hinh: H + 'w-cham.webp' }, { hinh: H + 'w-mua-sap.webp' }],
          cap: [[0, 1], [1, 4], [2, 3], [3, 0], [4, 2]]
        },
        {
          id: 'ld2b', so: 2, loai: 'noi', lenh: 'Đọc các từ ngữ sau (6–10)', tenA: 'Từ ngữ', tenB: 'Hình',
          goiY: 'Em đọc to từng từ ngữ, rồi nối từ ngữ với hình đúng.',
          a: [{ c: 'tập múa' }, { c: 'kem' }, { c: 'dép' }, { c: 'đêm' }, { c: 'bếp lửa' }],
          b: [{ hinh: H + 'w-dem.webp' }, { hinh: H + 'w-tap-mua.webp' }, { hinh: H + 'w-bep-lua.webp' }, { hinh: H + 'w-kem.webp' }, { hinh: H + 'w-dep.webp' }],
          cap: [[0, 1], [1, 3], [2, 4], [3, 0], [4, 2]]
        },
        {
          id: 'ld2c', so: 2, loai: 'noi', lenh: 'Đọc các từ ngữ sau (11–15)', tenA: 'Từ ngữ', tenB: 'Hình',
          goiY: 'Em đọc to từng từ ngữ, rồi nối từ ngữ với hình đúng.',
          a: [{ c: 'chim' }, { c: 'kịp giờ' }, { c: 'kim tiêm' }, { c: 'tấm thiếp' }, { c: 'yếm' }],
          b: [{ hinh: H + 'w-kim-tiem.webp' }, { hinh: H + 'w-yem.webp' }, { hinh: H + 'w-chim.webp' }, { hinh: H + 'w-tam-thiep.webp' }, { hinh: H + 'w-kip-gio.webp' }],
          cap: [[0, 2], [1, 4], [2, 0], [3, 3], [4, 1]]
        },
        {
          id: 'ld3a', so: 3, loai: 'doc-bai', lenh: 'Đọc bài sau',
          ten: 'Bờ Hồ', hinh: H + 'bo-ho.webp',
          cau: [
            { c: 'Bố đi làm.' }, { c: 'Mẹ cho bé ra Bờ Hồ.' }, { c: 'Mẹ đi bộ.' }, { c: 'Bé đạp xe.' },
            { c: 'Mẹ chỉ cho bé: Giữa hồ có Tháp Rùa.' }
          ]
        },
        {
          id: 'ld3b', so: 3, loai: 'noi', lenh: 'Nối đúng',
          goiY: 'Đọc bài “Bờ Hồ”, rồi nối ô ở cột A với ô ở cột B.',
          a: [{ c: 'Bố' }, { c: 'Bé' }, { c: 'Giữa hồ' }, { c: 'Mẹ' }],
          b: [{ c: 'đi bộ.' }, { c: 'có Tháp Rùa.' }, { c: 'đi làm.' }, { c: 'đạp xe.' }],
          cap: [[0, 2], [1, 3], [2, 1], [3, 0]]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [66, 67],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'viet-o-li', lenh: 'Chép lại các từ ngữ sau',
          tu: [
            { c: 'đom đóm', hinh: H + 'v-dom-dom.webp' }, { c: 'họp tổ', hinh: H + 'v-hop-to.webp' }, { c: 'cốm', hinh: H + 'v-com.webp' },
            { c: 'hộp sữa', hinh: H + 'v-hop-sua.webp' }, { c: 'cơm', hinh: H + 'v-com2.webp' }, { c: 'sấm chớp', hinh: H + 'v-sam-chop.webp' },
            { c: 'chùm nho', hinh: H + 'v-chum-nho.webp' }, { c: 'súp lơ', hinh: H + 'v-sup-lo.webp' }, { c: 'buồm', hinh: H + 'v-buom.webp' },
            { c: 'gươm', hinh: H + 'v-guom.webp' }, { c: 'quả mướp', hinh: H + 'v-qua-muop.webp' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Viết các từ sau',
          tu: [{ c: 'cam' }, { c: 'hộp' }, { c: 'buồm' }]
        },
        {
          id: 'lv3', so: 3, loai: 'bang-ghep-xam', lenh: 'Ghép vần và viết từ có vần đó',
          goiY: 'Chạm vào một ô để ghép âm với vần. Mỗi hàng có một từ em đã học ở Bài 6 – Bài 9. Em tìm và tô màu từ đó, rồi viết từ vào vở. Ô xám: không ghép được.',
          hang: ['h', 'k', 'kh', 'ch', 'nh', 'g', 'gh', 'gi', 'ng', 'ngh', 'p', 'ph', 'qu', 't', 'th', 'r', 'tr', 'v', 'x', 's'],
          cot: ['a', 'e', 'ê', 'i', 'ia', 'o', 'ô', 'ơ', 'u', 'ư', 'ua', 'ưa'],
          viDu: ['chị', 'gà', 'gió', 'ngủ', 'phố'],
          biet: ['hổ', 'kẻ', 'khế', 'chó', 'nhà', 'gỗ', 'ghế', 'già', 'ngô', 'nghé', 'pi', 'phở', 'quả', 'tổ', 'thỏ', 'rổ', 'tre', 'vở', 'xe', 'sẻ'],
          xam: { k: XAM, gh: XAM, ngh: XAM }
        }
      ]
    }
  ]
};
