/* Quyển 2 – Bài 19: Cháu bị làm sao?  (sách trang 124–131)
   Ghi âm của NXB chỉ có phần Từ ngữ (bài tập 1, 3) và Hội thoại 1; các phần khác không có tiếng. */
const A = 'audio/', I = 'img/';

const HT_A = [
  { ai: 'Nam', c: 'Cháu chào bác sĩ ạ! Bác sĩ khám bệnh cho cháu ạ!', am: A + 'a1.mp3' },
  { ai: 'Bác sĩ', c: 'Chào cháu, cháu bị làm sao?', am: A + 'a2.mp3' },
  { ai: 'Nam', c: 'Cháu bị đau bụng.', am: A + 'a3.mp3' },
  { ai: 'Bác sĩ', c: 'Cháu có bị tiêu chảy không?', am: A + 'a4.mp3' },
  { ai: 'Nam', c: 'Dạ có ạ.', am: A + 'a5.mp3' },
  { ai: 'Bác sĩ', c: 'Hôm qua cháu đã ăn gì?', am: A + 'a6.mp3' },
  { ai: 'Nam', c: 'Cháu đã ăn bánh mì, bún chả, kem, bánh ngọt, sữa chua. Cháu cũng uống nước dừa và sữa.', am: A + 'a7.mp3' },
  { ai: 'Bác sĩ', c: 'Cháu không nên ăn nhiều như thế! Bây giờ cháu cần uống thuốc.', am: A + 'a8.mp3' },
  { ai: 'Nam', c: 'Vâng ạ.', am: A + 'a9.mp3' }
];
const HT_B = [
  { ai: 'Hương', c: 'Mẹ ơi, con ốm!', am: A + 'b1.mp3' },
  { ai: 'Mẹ', c: 'Con cảm thấy trong người thế nào?', am: A + 'b2.mp3' },
  { ai: 'Hương', c: 'Con cảm thấy lạnh và đau đầu.', am: A + 'b3.mp3' },
  { ai: 'Mẹ', c: 'Trán con rất nóng. Bây giờ mẹ đo nhiệt độ cho con nhé!', am: A + 'b4.mp3' },
  { ai: 'Hương', c: 'Vâng ạ.', am: A + 'b5.mp3' },
  { ai: 'Mẹ', c: '38 độ. Con bị sốt và cảm lạnh. Bây giờ con cần nghỉ ngơi, uống nước ấm, ăn cháo nóng.', am: A + 'b6.mp3' },
  { ai: 'Hương', c: 'Con xem ti vi được không ạ?', am: A + 'b7.mp3' },
  { ai: 'Mẹ', c: 'Con đang mệt, không nên xem ti vi.', am: A + 'b8.mp3' },
  { ai: 'Hương', c: 'Vâng ạ.', am: A + 'b9.mp3' }
];
const VAI = {
  'Nam': { av: I + 'av-nam.webp' }, 'Bác sĩ': { av: I + 'av-bacsi.webp' },
  'Hương': { av: I + 'av-huong.webp' }, 'Mẹ': { av: I + 'av-me.webp' }
};

/* Từ ngữ 2: hỏi đáp theo hình ở bài tập 1 */
const BENH = [
  ['dau-dau', 'Anh ấy', 'đau đầu'], ['dau-rang', 'Anh ấy', 'đau răng'], ['dau-bung', 'Chị ấy', 'đau bụng'], ['om', 'Bạn ấy', 'ốm (bệnh)'],
  ['tieu-chay', 'Bạn ấy', 'tiêu chảy'], ['sot', 'Bạn ấy', 'sốt'], ['cam-lanh', 'Bạn ấy', 'cảm lạnh'], ['ho', 'Bạn ấy', 'ho']
];

/* Hội thoại 3: "– Tớ bị … – Cậu cần …" (giữ nhãn dưới hình như sách) */
const ht3 = (n, benh, can) => ({
  hinh: I + 'ht3-' + n + '.webp', hoi: 'Chọn hội thoại đúng với hình:',
  dung: '– Tớ bị ' + benh + '. – Cậu cần ' + can + '.',
  sai: ['– Tớ cần ' + benh + '. – Cậu bị ' + can + '.', '– Tớ bị ' + can + '. – Cậu cần ' + benh + '.']
});
/* Hội thoại 4: bệnh nhân – bác sĩ, mỗi hình hai câu */
const ht4 = (n, benh, nen, hoiKhong, khong, am) => [
  { hinh: I + 'ht4-' + n + '.webp', hoi: { c: 'Bệnh nhân: Cháu bị ' + benh + '.', am }, dung: 'Cháu nên ' + nen + '.', sai: ['Cháu không nên ' + nen + '.', 'Cháu nên ' + khong + '.'] },
  { hinh: I + 'ht4-' + n + '.webp', hoi: 'Bệnh nhân: ' + hoiKhong, dung: 'Cháu không nên ' + khong + '.', sai: ['Cháu nên ' + khong + '.'] }
];

const TU_DOC = [
  ['khoai tây', 'khoai-tay'], ['điện thoại', 'dien-thoai'], ['quả xoài', 'qua-xoai'], ['ngoái lại', 'ngoai-lai'],
  ['vẽ hí hoáy', 'hi-hoay'], ['lốc xoáy', 'loc-xoay'], ['khuấy bột', 'khuay-bot'], ['đuôi ngoe nguẩy', 'ngoe-nguay']
];
const hinhLD = k => ({ hinh: I + 'ld-' + k + '.webp' });
/* Đọc các từ ngữ: nối từ ngữ với hình, mỗi lần 4 từ; tron = thứ tự hình ở cột B */
const nhomDoc = (id, tu, lenh, tron) => {
  const ds = TU_DOC.slice(tu, tu + 4);
  return { id, so: 2, loai: 'noi', lenh, goiY: 'Em đọc to từng từ ngữ, rồi nối từ ngữ với hình đúng.', tenA: 'Từ ngữ', tenB: 'Hình',
    a: ds.map(([c]) => ({ c })), b: tron.map(k => hinhLD(ds[k][1])), cap: ds.map((_, k) => [k, tron.indexOf(k)]) };
};

const BAI_HOC = {
  quyen: 2, bai: 19, ten: 'Cháu bị làm sao?', chuDe: 'Cộng đồng', chu: 'oai – oay', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [124],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh.mp3', danhSo: true,
          the: [
            { hinh: I + 'tn-dau-dau.webp', tu: 'đau đầu', am: A + 'tn-dau-dau.mp3' },
            { hinh: I + 'tn-dau-rang.webp', tu: 'đau răng', am: A + 'tn-dau-rang.mp3' },
            { hinh: I + 'tn-dau-bung.webp', tu: 'đau bụng', am: A + 'tn-dau-bung.mp3' },
            { hinh: I + 'tn-om.webp', tu: 'ốm (bệnh)', am: A + 'tn-om.mp3' },
            { hinh: I + 'tn-tieu-chay.webp', tu: 'tiêu chảy', am: A + 'tn-tieu-chay.mp3' },
            { hinh: I + 'tn-sot.webp', tu: 'sốt', am: A + 'tn-sot.mp3' },
            { hinh: I + 'tn-cam-lanh.webp', tu: 'cảm lạnh', am: A + 'tn-cam-lanh.mp3' },
            { hinh: I + 'tn-ho.webp', tu: 'ho', am: A + 'tn-ho.mp3' }
          ]
        },
        {
          id: 'tn2', so: 2, loai: 'chon-mau', lenh: 'Nhìn hình ở bài tập 1, hỏi đáp theo mẫu',
          mau: { cau: [{ c: 'Bạn ấy (Anh ấy / Chị ấy) bị làm sao?' }, { c: 'Bạn ấy (Anh ấy / Chị ấy) bị đau bụng.' }] },
          goiY: 'Nhìn hình, chọn câu trả lời đúng rồi hỏi đáp với bạn.',
          cau: BENH.map(([k, ai, benh], i) => {
            const b = benh.replace(' (bệnh)', '');
            return { hinh: I + 'tn-' + k + '.webp', hoi: ai + ' bị làm sao?', dung: ai + ' bị ' + b + '.',
              sai: [BENH[(i + 3) % 8][2], BENH[(i + 6) % 8][2]].map(x => ai + ' bị ' + x.replace(' (bệnh)', '') + '.') };
          })
        },
        {
          id: 'tn3', so: 3, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn3-lenh.mp3', danhSo: true,
          the: [
            { hinh: I + 'tn-kham-benh.webp', tu: 'khám bệnh', am: A + 'tn-kham-benh.mp3' },
            { hinh: I + 'tn-do-nhiet.webp', tu: 'đo nhiệt độ', am: A + 'tn-do-nhiet.mp3' },
            { hinh: I + 'tn-uong-thuoc.webp', tu: 'uống thuốc', am: A + 'tn-uong-thuoc.mp3' },
            { hinh: I + 'tn-chua-rang.webp', tu: 'chữa răng', am: A + 'tn-chua-rang.mp3' },
            { hinh: I + 'tn-nghi-ngoi.webp', tu: 'nghỉ ngơi', am: A + 'tn-nghi-ngoi.mp3' }
          ]
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [125, 126, 127, 128],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – A', amLenh: A + 'ht-lenh.mp3',
          hinh: I + 'ht-a.webp', moTa: 'Bác sĩ khám bệnh cho Nam', vai: VAI, loi: HT_A
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – B', amLenh: A + 'ht-lenh.mp3',
          hinh: I + 'ht-b.webp', moTa: 'Mẹ đo nhiệt độ cho Hương', vai: VAI, loi: HT_B
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          goiY: 'Bấm “Đóng vai”, chọn một vai (Nam, bác sĩ, Hương hoặc mẹ). Đến lượt em, em nói thật to.',
          vai: VAI, loi: HT_A.concat(HT_B)
        },
        {
          id: 'ht3', so: 3, loai: 'chon-mau', lenh: 'Nhìn hình, đặt hội thoại theo mẫu',
          mau: { cau: [{ c: 'Tớ bị ốm (bệnh).' }, { c: 'Cậu cần nghỉ ngơi.' }] },
          goiY: 'Hình 1 là mẫu. Đọc chữ dưới hình, chọn hội thoại đúng rồi nói to với bạn.',
          cau: [
            ht3(1, 'ốm (bệnh)', 'nghỉ ngơi'),
            ht3(2, 'đau bụng', 'khám bệnh'),
            ht3(3, 'tiêu chảy', 'uống thuốc'),
            ht3(4, 'đau răng', 'chữa răng'),
            ht3(5, 'sốt', 'đo nhiệt độ'),
            ht3(6, 'cảm lạnh', 'uống nước ấm')
          ]
        },
        {
          id: 'ht4', so: 4, loai: 'chon-mau', lenh: 'Nhìn hình, đóng vai bác sĩ – bệnh nhân, hỏi đáp theo mẫu',
          mau: { cau: [{ c: 'Cháu bị đau đầu.' }, { c: 'Cháu nên nghỉ ngơi.' }, { c: 'Cháu xem ti vi được không?' }, { c: 'Cháu không nên xem ti vi.' }] },
          goiY: 'Hình 1 là mẫu. Em là bác sĩ: chọn câu trả lời đúng.',
          cau: [].concat(
            ht4(1, 'đau đầu', 'nghỉ ngơi', 'Cháu xem ti vi được không?', 'xem ti vi'),
            ht4(2, 'cảm lạnh', 'ăn cháo nóng', 'Cháu uống nước lạnh được không?', 'uống nước lạnh'),
            ht4(3, 'đau bụng', 'uống thuốc', 'Cháu ăn nhiều được không?', 'ăn nhiều', A + 'a3.mp3'),
            ht4(4, 'đau răng', 'chữa răng', 'Cháu ăn nhiều được không?', 'ăn nhiều'),
            ht4(5, 'ho', 'uống thuốc', 'Cháu nói nhiều được không?', 'nói nhiều')
          )
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [129, 130],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'ghep-van', lenh: 'Đánh vần',
          tu: [
            { hinh: I + 'ld-khoai-lang.webp', tu: 'khoai lang', van: 'oai', phan: ['o', 'a', 'i'], doc: 'o – a – i – oai' },
            { hinh: I + 'ld-ghe-xoay.webp', tu: 'ghế xoay', van: 'oay', phan: ['o', 'a', 'y'], doc: 'o – a – y – oay' }
          ]
        },
        nhomDoc('ld2a', 0, 'Đọc các từ ngữ sau (1–4)', [3, 1, 0, 2]),
        nhomDoc('ld2b', 4, 'Đọc các từ ngữ sau (5–8)', [2, 0, 3, 1]),
        {
          id: 'ld3', so: 3, loai: 'doc-bai', lenh: 'Đọc bài sau',
          ten: 'Thám tử mèo', hinh: I + 'ld-bai.webp', nguon: 'Theo sách 365 chuyện kể mỗi ngày',
          cau: [
            { c: 'Mèo muốn làm thám tử.' },
            { c: 'Nhưng đội thám tử chỉ tuyển chó.' },
            { c: 'Thấy mèo, họ nguây nguẩy bỏ đi.' },
            { c: 'Mèo loay hoay nghĩ kế.' },
            { c: 'Nó hoá trang thành chó và trúng tuyển.' },
            { c: 'Vào đội, mèo khám phá ra một vụ trộm lớn.' },
            { c: 'Cả đội rất vui mừng.' },
            { c: 'Đúng lúc được nhà vua trao huân chương, mèo khoái chí, liền kêu “Meo!”.' },
            { c: 'Nhưng vì có tài, mèo vẫn được giữ lại.' },
            { c: 'Mèo còn lên chức đội trưởng.' }
          ],
          hoi: [
            { hoi: 'a) Vì sao đội thám tử nguây nguẩy bỏ đi?', dung: 'Vì đội thám tử chỉ tuyển chó.', sai: ['Vì mèo đến muộn.', 'Vì mèo không biết chạy.'] },
            { hoi: 'b) Vì sao mèo vẫn trúng tuyển?', dung: 'Vì mèo hoá trang thành chó.', sai: ['Vì mèo kêu “Meo!”.', 'Vì mèo chạy rất nhanh.'] },
            { hoi: 'c) Vào đội, mèo đã làm được việc gì?', dung: 'Mèo khám phá ra một vụ trộm lớn.', sai: ['Mèo bắt được một con chuột.', 'Mèo trèo lên một cây cao.'] },
            { hoi: 'd) Vì sao mèo được lên chức đội trưởng?', dung: 'Vì mèo có tài.', sai: ['Vì mèo hoá trang thành chó.', 'Vì mèo kêu “Meo!”.'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [130],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'dien-chu', lenh: 'Điền vần và dấu thanh còn thiếu',
          goiY: 'Chạm vào từng hình, rồi chọn chữ và dấu thanh để điền vần còn thiếu.',
          tu: [
            { hinh: I + 'ld-ngoai-lai.webp', mau: 'ng… lại', dap: 'ngoái lại' },
            { hinh: I + 'ld-qua-xoai.webp', mau: 'quả x…', dap: 'quả xoài' },
            { hinh: I + 'ld-loc-xoay.webp', mau: 'lốc x…', dap: 'lốc xoáy' },
            { hinh: I + 'ld-ngoe-nguay.webp', mau: 'đuôi ngoe ng…', dap: 'đuôi ngoe nguẩy' },
            { hinh: I + 'ld-khoai-tay.webp', mau: 'kh… tây', dap: 'khoai tây' },
            { hinh: I + 'ld-ghe-xoay.webp', mau: 'ghế x…', dap: 'ghế xoay' },
            { hinh: I + 'ld-khuay-bot.webp', mau: 'kh… bột', dap: 'khuấy bột' },
            { hinh: I + 'ld-dien-thoai.webp', mau: 'điện th…', dap: 'điện thoại' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Chép lại các câu sau',
          goiY: 'Em tô theo chữ mờ trên ô li bằng ngón tay hoặc bút. Viết xong câu thứ nhất, bấm “Từ tiếp” để chép câu thứ hai.',
          tu: [{ c: 'Huy hí hoáy vẽ.' }, { c: 'Em vẽ con mèo đang nằm xoài trên chiếc ghế xoay.' }]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [131],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'chon-cau', lenh: 'Trò chơi: Bạn bị làm sao?',
          goiY: 'Mẫu: Học sinh 1: Dùng động tác để miêu tả bệnh. Học sinh 2: Quan sát động tác của học sinh 1, hỏi: – Bạn bị đau răng, phải không? Học sinh 1 đáp: – Đúng, tôi bị đau răng. / – Không, tôi bị đau đầu. Trên máy: em là bạn trong hình, chọn câu đáp đúng.',
          cau: [
            { hinh: I + 'tn-dau-dau.webp', hoi: 'Bạn bị đau răng, phải không?', dung: 'Không, tôi bị đau đầu.', sai: ['Đúng, tôi bị đau răng.', 'Không, tôi bị ho.'] },
            { hinh: I + 'tn-dau-rang.webp', hoi: 'Bạn bị đau răng, phải không?', dung: 'Đúng, tôi bị đau răng.', sai: ['Không, tôi bị sốt.', 'Không, tôi bị đau đầu.'] },
            { hinh: I + 'tn-tieu-chay.webp', hoi: 'Bạn bị tiêu chảy, phải không?', dung: 'Đúng, tôi bị tiêu chảy.', sai: ['Không, tôi bị đau răng.', 'Không, tôi bị cảm lạnh.'] },
            { hinh: I + 'tn-sot.webp', hoi: 'Bạn bị ho, phải không?', dung: 'Không, tôi bị sốt.', sai: ['Đúng, tôi bị ho.', 'Không, tôi bị đau răng.'] },
            { hinh: I + 'tn-cam-lanh.webp', hoi: 'Bạn bị cảm lạnh, phải không?', dung: 'Đúng, tôi bị cảm lạnh.', sai: ['Không, tôi bị đau bụng.', 'Không, tôi bị đau răng.'] },
            { hinh: I + 'tn-ho.webp', hoi: 'Bạn bị đau răng, phải không?', dung: 'Không, tôi bị ho.', sai: ['Đúng, tôi bị đau răng.', 'Không, tôi bị đau đầu.'] }
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'chon-mau', lenh: 'Nhìn hình, hỏi đáp với bạn theo mẫu',
          mau: { cau: [{ c: 'Vì sao bạn cần khám bệnh?' }, { c: 'Vì tôi bị ốm.' }] },
          goiY: 'Nhìn hình, chọn câu trả lời hợp lí rồi hỏi đáp với bạn.',
          cau: [
            { hinh: I + 'tn-kham-benh.webp', hoi: 'Vì sao bạn cần khám bệnh?', dung: 'Vì tôi bị ốm.', sai: ['Vì tôi rất khoẻ.', 'Vì tôi thích xem ti vi.'] },
            { hinh: I + 'tn-do-nhiet.webp', hoi: 'Vì sao bạn cần đo nhiệt độ?', dung: 'Vì tôi bị sốt.', sai: ['Vì tôi rất khoẻ.', 'Vì tôi thích ăn kem.'] },
            { hinh: I + 'tn-uong-thuoc.webp', hoi: 'Vì sao bạn cần uống thuốc?', dung: 'Vì tôi bị ho.', sai: ['Vì tôi rất khoẻ.', 'Vì tôi thích uống nước dừa.'] },
            { hinh: I + 'tn-chua-rang.webp', hoi: 'Vì sao bạn cần chữa răng?', dung: 'Vì tôi bị đau răng.', sai: ['Vì tôi bị đau đầu.', 'Vì tôi rất khoẻ.'] },
            { hinh: I + 'tn-nghi-ngoi.webp', hoi: 'Vì sao bạn cần nghỉ ngơi?', dung: 'Vì tôi bị cảm lạnh.', sai: ['Vì tôi rất khoẻ.', 'Vì tôi muốn đi chơi.'] },
            { hinh: I + 'w-chao.webp', hoi: 'Vì sao bạn cần ăn cháo nóng?', dung: 'Vì tôi bị cảm lạnh.', sai: ['Vì tôi bị đau răng.', 'Vì tôi rất khoẻ.'] }
          ]
        },
        {
          id: 'tvv3', so: 3, loai: 'hoc-hat', lenh: 'Học hát: Bé khoẻ bé ngoan (Nguyễn Văn Hiên)',
          baiHat: 'Bé khoẻ bé ngoan', tacGia: 'Nguyễn Văn Hiên', youtube: 'nPWvHQD7t_c'
        }
      ]
    }
  ]
};
