/* Quyển 2 – Bài 18: Bạn là người nước nào?  (sách trang 116–123)
   Ghi âm của NXB chỉ có phần Từ ngữ và Hội thoại 1; các phần khác không có tiếng.
   Ghi âm Từ ngữ 1 đọc "3. Nhật Bản, 4. Nga" (sách in 3. Nga, 4. Nhật Bản) – thẻ giữ số như sách, mỗi thẻ đúng tiếng của nó. */
const A = 'audio/', I = 'img/';

const HT_A = [
  { ai: 'Nam', c: 'Chào Yuki, bạn là người nước nào?', am: A + 'a1.mp3' },
  { ai: 'Yuki', c: 'Chào Nam, tôi là người Nhật.', am: A + 'a2.mp3' },
  { ai: 'Nam', c: 'Bạn đến Việt Nam bao lâu rồi?', am: A + 'a3.mp3' },
  { ai: 'Yuki', c: 'Tôi đến Việt Nam 1 năm rồi.', am: A + 'a4.mp3' },
  { ai: 'Nam', c: 'Vì sao bạn đến Việt Nam?', am: A + 'a5.mp3' },
  { ai: 'Yuki', c: 'Vì bố tôi làm việc ở Việt Nam. Tôi đến Việt Nam cùng với bố mẹ.', am: A + 'a6.mp3' }
];
const HT_B = [
  { ai: 'Nam', c: 'Bạn uống nước chanh nhé?', am: A + 'b1.mp3' },
  { ai: 'Yuki', c: 'Cảm ơn Nam, nhưng tôi không thích nước chanh.', am: A + 'b2.mp3' },
  { ai: 'Nam', c: 'Vì sao bạn không thích nước chanh?', am: A + 'b3.mp3' },
  { ai: 'Yuki', c: 'Vì nước chanh rất chua.', am: A + 'b4.mp3' },
  { ai: 'Nam', c: 'Vậy tôi mời bạn uống nước dừa nhé?', am: A + 'b5.mp3' },
  { ai: 'Yuki', c: 'Ồ, tôi rất thích nước dừa! Nước dừa rất ngọt!', am: A + 'b6.mp3' },
  { ai: 'Nam', c: 'Bạn thích món ăn Việt Nam không?', am: A + 'b7.mp3' },
  { ai: 'Yuki', c: 'Có, tôi thích ăn bún chả, nem rán, bánh mì. Món ăn Việt Nam rất ngon!', am: A + 'b8.mp3' }
];
const VAI = { 'Nam': { av: I + 'av-nam.webp' }, 'Yuki': { av: I + 'av-yuki.webp' } };

/* Hội thoại 4: mời – đáp (✓ thích / ✗ không thích) – mỗi hình hai câu */
const moi = (n, dong, mon, thich, viSao, saiViSao) => [
  { hinh: I + 'ht4-' + n + '.webp', hoi: 'Mời bạn ' + dong + ' ' + mon + '!',
    dung: thich ? 'Cảm ơn bạn, tôi rất thích ' + mon + '.' : 'Cảm ơn bạn, nhưng tôi không thích ' + mon + '.',
    sai: [thich ? 'Cảm ơn bạn, nhưng tôi không thích ' + mon + '.' : 'Cảm ơn bạn, tôi rất thích ' + mon + '.'] },
  { hinh: I + 'ht4-' + n + '.webp', hoi: 'Vì sao bạn ' + (thich ? '' : 'không ') + 'thích ' + mon + '?', dung: viSao, sai: saiViSao }
];

const TU_DOC = [
  ['khoanh bánh', 'khoanh-banh'], ['mới toanh', 'moi-toanh'], ['con hoẵng', 'con-hoang'], ['ngoắc tay', 'ngoac-tay'],
  ['huênh hoang', 'huenh-hoang'], ['vẽ nguệch ngoạc', 'nguech-ngoac'], ['khuỳnh tay', 'khuynh-tay'], ['huých tay', 'huych-tay']
];
const hinhLD = k => ({ hinh: I + 'ld-' + k + '.webp' });
const NUOC = [['Đức', 'duc'], ['Mỹ', 'my'], ['Nhật Bản', 'nhat'], ['Trung Quốc', 'tq'], ['Pháp', 'phap'], ['Nga', 'nga']];

const BAI_HOC = {
  quyen: 2, bai: 18, ten: 'Bạn là người nước nào?', chuDe: 'Cộng đồng', chu: 'oang – oac, oanh – oach', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [116, 117],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh.mp3', danhSo: true, anChu: true,
          the: [
            { hinh: I + 'tn-duc.webp', tu: 'Đức', am: A + 'tn-duc.mp3' },
            { hinh: I + 'tn-my.webp', tu: 'Mỹ', am: A + 'tn-my.mp3' },
            { hinh: I + 'tn-nga.webp', tu: 'Nga', am: A + 'tn-nga.mp3' },
            { hinh: I + 'tn-nhat.webp', tu: 'Nhật Bản', am: A + 'tn-nhat.mp3' },
            { hinh: I + 'tn-phap.webp', tu: 'Pháp', am: A + 'tn-phap.mp3' },
            { hinh: I + 'tn-tq.webp', tu: 'Trung Quốc', am: A + 'tn-tq.mp3' }
          ]
        },
        {
          id: 'tn2', so: 2, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn2-lenh.mp3', danhSo: true,
          the: [
            { hinh: I + 'tn-bun-cha.webp', tu: 'bún chả', am: A + 'tn-bun-cha.mp3' },
            { hinh: I + 'tn-nem.webp', tu: 'nem rán', am: A + 'tn-nem.mp3' },
            { hinh: I + 'tn-banh-mi.webp', tu: 'bánh mì', am: A + 'tn-banh-mi.mp3' },
            { hinh: I + 'tn-chanh.webp', tu: 'nước chanh', am: A + 'tn-chanh.mp3' },
            { hinh: I + 'tn-dua.webp', tu: 'nước dừa', am: A + 'tn-dua.mp3' },
            { hinh: I + 'tn-kem.webp', tu: 'kem', am: A + 'tn-kem.mp3' },
            { hinh: I + 'tn-sua.webp', tu: 'sữa', am: A + 'tn-sua.mp3' },
            { hinh: I + 'tn-ot.webp', tu: 'ớt', am: A + 'tn-ot.mp3' }
          ]
        },
        {
          id: 'tn3', so: 3, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn3-lenh.mp3', danhSo: true,
          the: [
            { hinh: I + 'tn-chua.webp', tu: 'chua', am: A + 'tn-chua.mp3' },
            { hinh: I + 'tn-ngot.webp', tu: 'ngọt', am: A + 'tn-ngot.mp3' },
            { hinh: I + 'tn-cay.webp', tu: 'cay', am: A + 'tn-cay.mp3' },
            { hinh: I + 'tn-ngon.webp', tu: 'ngon', am: A + 'tn-ngon.mp3' },
            { hinh: I + 'tn-do.webp', tu: 'dở / không ngon', am: A + 'tn-do.mp3' }
          ]
        },
        {
          id: 'tn4', so: 4, loai: 'chon-cau', lenh: 'Nhìn hình ở bài tập 3, hỏi đáp theo mẫu',
          goiY: 'Mẫu: – Món ăn này thế nào? – Món ăn này ngon. Nhìn nét mặt bạn nhỏ, chọn câu trả lời đúng.',
          cau: [
            { hinh: I + 'tn-chua.webp', hoi: 'Món ăn này thế nào?', dung: 'Món ăn này chua.', sai: ['Món ăn này ngọt.', 'Món ăn này cay.'] },
            { hinh: I + 'tn-ngot.webp', hoi: 'Món ăn này thế nào?', dung: 'Món ăn này ngọt.', sai: ['Món ăn này chua.', 'Món ăn này cay.'] },
            { hinh: I + 'tn-cay.webp', hoi: 'Món ăn này thế nào?', dung: 'Món ăn này cay.', sai: ['Món ăn này ngọt.', 'Món ăn này chua.'] },
            { hinh: I + 'tn-ngon.webp', hoi: 'Món ăn này thế nào?', dung: 'Món ăn này ngon.', sai: ['Món ăn này không ngon.', 'Món ăn này cay.'] },
            { hinh: I + 'tn-do.webp', hoi: 'Món ăn này thế nào?', dung: 'Món ăn này dở.', sai: ['Món ăn này ngon.', 'Món ăn này ngọt.'] }
          ]
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [117, 118, 119],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – A', amLenh: A + 'ht-lenh.mp3',
          hinh: I + 'ht-a.webp', moTa: 'Yuki (cờ Nhật Bản) nói chuyện với Nam (cờ Việt Nam)', vai: VAI, loi: HT_A
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – B', amLenh: A + 'ht-lenh.mp3',
          hinh: I + 'ht-b.webp', moTa: 'Yuki và Nam nói về bún chả, nem rán, bánh mì', vai: VAI, loi: HT_B
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          goiY: 'Bấm “Đóng vai”, chọn vai Nam hoặc Yuki. Đến lượt em, em nói thật to.',
          vai: VAI, loi: HT_A.concat(HT_B)
        },
        {
          id: 'ht3', so: 3, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Câu 1 là mẫu. Nhìn lá cờ, chọn câu trả lời đúng rồi nói to cả câu.',
          cau: [
            { hinh: I + 'ht3-1.webp', hoi: 'Victor là người nước nào?', dung: 'Bạn ấy là người Pháp.', sai: ['Bạn ấy là người Nga.', 'Bạn ấy là người Mỹ.'] },
            { hinh: I + 'ht3-2.webp', hoi: 'Yuto là người nước nào?', dung: 'Bạn ấy là người Nhật Bản.', sai: ['Bạn ấy là người Trung Quốc.', 'Bạn ấy là người Pháp.'] },
            { hinh: I + 'ht3-3.webp', hoi: 'Leo là người nước nào?', dung: 'Bạn ấy là người Mỹ.', sai: ['Bạn ấy là người Đức.', 'Bạn ấy là người Nga.'] },
            { hinh: I + 'ht3-4.webp', hoi: 'Emma là người nước nào?', dung: 'Bạn ấy là người Đức.', sai: ['Bạn ấy là người Pháp.', 'Bạn ấy là người Mỹ.'] },
            { hinh: I + 'ht3-5.webp', hoi: 'Misa là người nước nào?', dung: 'Bạn ấy là người Nga.', sai: ['Bạn ấy là người Đức.', 'Bạn ấy là người Nhật Bản.'] },
            { hinh: I + 'ht3-6.webp', hoi: 'Lý Long là người nước nào?', dung: 'Bạn ấy là người Trung Quốc.', sai: ['Bạn ấy là người Nhật Bản.', 'Bạn ấy là người Việt Nam.'] }
          ]
        },
        {
          id: 'ht4', so: 4, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Hình 1 là mẫu: – Mời bạn uống sữa! – Cảm ơn bạn, tôi rất thích sữa. – Vì sao bạn thích sữa? – Vì sữa rất ngon. Dấu ✓: bạn thích, dấu ✗: bạn không thích.',
          cau: [].concat(
            moi(1, 'uống', 'sữa', true, 'Vì sữa rất ngon.', ['Vì sữa rất cay.', 'Vì sữa rất chua.']),
            moi(2, 'uống', 'nước chanh', false, 'Vì nước chanh rất chua.', ['Vì nước chanh rất ngon.', 'Vì nước chanh rất ngọt.']),
            moi(3, 'uống', 'nước dừa', true, 'Vì nước dừa rất ngọt.', ['Vì nước dừa rất cay.', 'Vì nước dừa không ngon.']),
            moi(4, 'ăn', 'kem', true, 'Vì kem rất ngọt.', ['Vì kem rất cay.', 'Vì kem không ngon.']),
            moi(5, 'ăn', 'ớt', false, 'Vì ớt rất cay.', ['Vì ớt rất ngọt.', 'Vì ớt rất ngon.']),
            moi(6, 'ăn', 'bánh mì', false, 'Vì bánh mì không ngon.', ['Vì bánh mì rất ngon.', 'Vì tôi rất thích bánh mì.']),
            moi(7, 'ăn', 'bún chả', true, 'Vì bún chả rất ngon.', ['Vì bún chả không ngon.', 'Vì bún chả rất chua.'])
          )
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [120, 121],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'ghep-van', lenh: 'Đánh vần',
          tu: [
            { hinh: I + 'ld-ao-choang.webp', tu: 'áo choàng', van: 'oang', phan: ['o', 'a', 'ng'], doc: 'o – a – ngờ – oang' },
            { hinh: I + 'ld-ao-khoac.webp', tu: 'áo khoác', van: 'oac', phan: ['o', 'a', 'c'], doc: 'o – a – cờ – oac' },
            { hinh: I + 'ld-khoanh-tay.webp', tu: 'khoanh tay', van: 'oanh', phan: ['o', 'a', 'nh'], doc: 'o – a – nhờ – oanh' },
            { hinh: I + 'ld-thu-hoach.webp', tu: 'thu hoạch', van: 'oach', phan: ['o', 'a', 'ch'], doc: 'o – a – chờ – oach' }
          ]
        },
        {
          id: 'ld2', so: 2, loai: 'chon-cau', lenh: 'Đọc các từ ngữ sau',
          goiY: 'Em đọc to từ ngữ, rồi chạm vào hình đúng.',
          cau: TU_DOC.map(([tu, k], i) => ({ hoi: tu, dung: hinhLD(k), sai: [hinhLD(TU_DOC[(i + 3) % 8][1]), hinhLD(TU_DOC[(i + 5) % 8][1])] }))
        },
        {
          id: 'ld3', so: 3, loai: 'doc-bai', lenh: 'Đọc bài sau',
          ten: 'Hà mã bay', hinh: I + 'ld-bai.webp', nguon: 'Theo sách 365 chuyện kể mỗi ngày',
          cau: [
            { c: 'Hà mã muốn bay.' },
            { c: 'Chú chọn một bãi rộng, khuỳnh chân lấy đà.' },
            { c: 'Nhưng luýnh quýnh mãi, chú vẫn không bay được.' },
            { c: 'Chú nghĩ: “Mình nặng quá!”.' },
            { c: 'Để giảm cân, sáng sáng, chú chạy huỳnh huỵch.' },
            { c: 'Sau một tháng, chú leo lên mỏm đá, nhảy vọt lên, nhưng lại ngã oạch xuống đất.' },
            { c: 'May quá, bố chú ghi tên chú vào lớp nhảy dù.' },
            { c: 'Khoảng một tuần, hà mã đã bay được lên bầu trời.' }
          ],
          hoi: [
            { hoi: 'a) Hà mã chuẩn bị bay như thế nào?', dung: 'Hà mã chọn một bãi rộng, khuỳnh chân lấy đà.', sai: ['Hà mã leo lên một cây cao.', 'Hà mã nằm ngủ trên mỏm đá.'] },
            { hoi: 'b) Vì sao hà mã tập chạy?', dung: 'Vì hà mã muốn giảm cân.', sai: ['Vì hà mã muốn đi học.', 'Vì hà mã thích ngã.'] },
            { hoi: 'c) Sau một tháng tập chạy, hà mã có bay được không?', dung: 'Không, hà mã lại ngã oạch xuống đất.', sai: ['Có, hà mã bay được lên bầu trời.'] },
            { hoi: 'd) Vì sao hà mã đã bay được lên bầu trời?', dung: 'Vì bố ghi tên hà mã vào lớp nhảy dù.', sai: ['Vì hà mã chạy rất nhanh.', 'Vì hà mã leo lên mỏm đá.'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [121, 122],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'viet-o-li', lenh: 'Chép lại các từ ngữ sau',
          tu: [
            { c: 'ngã huỵch', hinh: I + 'lv-nga-huych.webp' },
            { c: 'đèn huỳnh quang', hinh: I + 'lv-den-huynh-quang.webp' },
            { c: 'khoanh bánh', hinh: I + 'lv-khoanh-banh.webp' },
            { c: 'chim oanh', hinh: I + 'lv-chim-oanh.webp' },
            { c: 'dấu ngoặc đơn', hinh: I + 'lv-ngoac-don.webp' },
            { c: 'quạ khoang', hinh: I + 'lv-qua-khoang.webp' },
            { c: 'xoạc chân', hinh: I + 'lv-xoac-chan.webp' },
            { c: 'khoác ba lô', hinh: I + 'lv-khoac-balo.webp' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Chép lại câu sau',
          goiY: 'Em tô theo chữ mờ trên ô li bằng ngón tay hoặc bút, chép lại cả câu. Viết xong bấm “Xong”.',
          tu: [{ c: 'Nhờ được học lớp nhảy dù, khoảng một tuần, hà mã đã bay được lên bầu trời.' }]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [122, 123],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'chon-cau', lenh: 'Trò chơi: Bạn là người nước nào?',
          goiY: 'Mẫu: Học sinh 1 (chỉ vào hình cờ, hỏi): – Bạn là người nước nào? Học sinh 2: – Tôi là người Nhật Bản. Đi theo đường trong sách: từ mũi tên đến dấu ✓.',
          cau: NUOC.map(([ten, k], i) => ({
            hinh: I + 'tn-' + k + '.webp', hoi: 'Bạn là người nước nào?', dung: 'Tôi là người ' + ten + '.',
            sai: [NUOC[(i + 2) % 6][0], NUOC[(i + 4) % 6][0]].map(t => 'Tôi là người ' + t + '.')
          }))
        },
        {
          id: 'tvv2', so: 2, loai: 'vong-quay-hinh', lenh: 'Xoay vòng quay, hỏi đáp với bạn theo mẫu', can: 5,
          mau: ['A: – Mời bạn ăn kem!', 'B: – Cảm ơn bạn, tôi rất thích kem. / Cảm ơn bạn, nhưng tôi không thích kem.', 'A: – Vì sao bạn thích kem? / Vì sao bạn không thích kem?', 'B: – Vì …'],
          goiY: 'Bấm “Quay”. Vòng quay dừng ở món nào, em và bạn hỏi đáp về món đó theo mẫu.',
          ghiAm: 'Ghi âm em và bạn hỏi đáp',
          muc: [
            { hinh: I + 'tn-ot.webp', c: 'ớt', cau: 'Mời bạn ăn ớt!' },
            { hinh: I + 'tn-kem.webp', c: 'kem', cau: 'Mời bạn ăn kem!' },
            { hinh: I + 'tn-dua.webp', c: 'nước dừa', cau: 'Mời bạn uống nước dừa!' },
            { hinh: I + 'tn-sua.webp', c: 'sữa', cau: 'Mời bạn uống sữa!' },
            { hinh: I + 'tn-chanh.webp', c: 'nước chanh', cau: 'Mời bạn uống nước chanh!' },
            { hinh: I + 'tn-nem.webp', c: 'nem rán', cau: 'Mời bạn ăn nem rán!' },
            { hinh: I + 'tn-bun-cha.webp', c: 'bún chả', cau: 'Mời bạn ăn bún chả!' },
            { hinh: I + 'tn-banh-mi.webp', c: 'bánh mì', cau: 'Mời bạn ăn bánh mì!' }
          ]
        },
        {
          id: 'tvv3', so: 3, loai: 'hoc-hat', lenh: 'Học hát: Trái Đất này là của chúng mình (Trương Quang Lục – Định Hải)',
          baiHat: 'Trái Đất này là của chúng mình', tacGia: 'Trương Quang Lục – Định Hải', youtube: 'Nlqm8qXOwCM'
        }
      ]
    }
  ]
};
