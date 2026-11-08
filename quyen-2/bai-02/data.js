/* Quyển 2 – Bài 2: Ai chăm nhất nhà?  (sách trang 10–15) */
const A = 'audio/';
const TU = [
  { k: 'dep', tu: 'đẹp' }, { k: 'xinh', tu: 'xinh' }, { k: 'de-thuong', tu: 'dễ thương' }, { k: 'vui-ve', tu: 'vui vẻ' },
  { k: 'than-thien', tu: 'thân thiện' }, { k: 'hien', tu: 'hiền' }, { k: 'nghiem', tu: 'nghiêm' }, { k: 'cham-chi', tu: 'chăm chỉ' }
];
// Từ ngữ 2: hỏi đáp về người trong từng hình ở bài tập 1 (mẫu: Mẹ em – đẹp)
const AI = { dep: 'Mẹ em', xinh: 'Em gái em', 'de-thuong': 'Em họ em', 'vui-ve': 'Anh trai em', 'than-thien': 'Chú em', hien: 'Bà em', nghiem: 'Bố em', 'cham-chi': 'Chị gái em' };
const SAI = { dep: ['nghiêm', 'chăm chỉ'], xinh: ['nghiêm', 'hiền'], 'de-thuong': ['nghiêm', 'thân thiện'], 'vui-ve': ['nghiêm', 'hiền'], 'than-thien': ['xinh', 'dễ thương'], hien: ['vui vẻ', 'xinh'], nghiem: ['xinh', 'dễ thương'], 'cham-chi': ['nghiêm', 'đẹp'] };

const BAI_HOC = {
  quyen: 2, bai: 2, ten: 'Ai chăm nhất nhà?', chuDe: 'Gia đình', chu: 'o, ô, ơ, d, đ', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [10],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh.mp3',
          danhSo: true, anChu: true,
          the: TU.map(t => ({ hinh: 'img/tn-' + t.k + '.webp', tu: t.tu, am: A + 'tn-' + t.k + '.mp3' }))
        },
        {
          id: 'tn2', so: 2, loai: 'chon-cau', lenh: 'Nhìn hình ở bài tập 1, hỏi đáp theo mẫu',
          goiY: 'Mẫu: – Mẹ em thế nào? – Mẹ em rất đẹp. Bạn hỏi về người trong hình, em chọn câu trả lời đúng rồi nói to.',
          cau: TU.map(t => ({
            hinh: 'img/the-' + t.k + '.webp', hoi: AI[t.k] + ' thế nào?',
            dung: AI[t.k] + ' rất ' + t.tu + '.', sai: SAI[t.k].map(w => AI[t.k] + ' rất ' + w + '.')
          }))
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [11, 12],
      bt: [
        {
          id: 'ht1a', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – A', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-a.webp', moTa: 'Gia đình Liên đi dã ngoại cùng Mai',
          vai: { 'Mai': { av: 'img/av-mai.webp' }, 'Liên': { av: 'img/av-lien.webp' } },
          loi: [
            { ai: 'Mai', c: 'Kia là mẹ chị phải không? Mẹ chị trẻ nhỉ!', am: A + 'ht-a1.mp3' },
            { ai: 'Liên', c: 'Đúng, mẹ chị khá trẻ.', am: A + 'ht-a2.mp3' },
            { ai: 'Mai', c: 'Bố chị thế nào?', am: A + 'ht-a3.mp3' },
            { ai: 'Liên', c: 'Bố chị hơi nghiêm.', am: A + 'ht-a4.mp3' },
            { ai: 'Mai', c: 'Còn bà chị?', am: A + 'ht-a5.mp3' },
            { ai: 'Liên', c: 'Ôi, bà chị rất hiền!', am: A + 'ht-a6.mp3' },
            { ai: 'Mai', c: 'Ở nhà chị, ai chăm nhất?', am: A + 'ht-a7.mp3' },
            { ai: 'Liên', c: 'Mẹ chị bảo chị chăm nhất.', am: A + 'ht-a8.mp3' }
          ]
        },
        {
          id: 'ht1b', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại – B', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-b.webp', moTa: 'Dũng và Nam nói chuyện về ông bà của Nam',
          vai: { 'Dũng': { av: 'img/av-dung.webp' }, 'Nam': { av: 'img/av-nam.webp' } },
          loi: [
            { ai: 'Dũng', c: 'Ở nhà em, ai nhiều tuổi nhất?', am: A + 'ht-b1.mp3' },
            { ai: 'Nam', c: 'Ông nội em nhiều tuổi nhất. Ông 81 (tám mươi mốt) tuổi.', am: A + 'ht-b2.mp3' },
            { ai: 'Dũng', c: 'Ông em thế nào?', am: A + 'ht-b3.mp3' },
            { ai: 'Nam', c: 'Ông em hơi yếu.', am: A + 'ht-b4.mp3' },
            { ai: 'Dũng', c: 'Còn bà em?', am: A + 'ht-b5.mp3' },
            { ai: 'Nam', c: 'Bà em 75 (bảy mươi lăm) tuổi. Bà em khá khoẻ.', am: A + 'ht-b6.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'hoat-dong', lenh: 'Đóng vai, nhắc lại hai đoạn hội thoại trên',
          hinh: ['img/ht-a.webp', 'img/ht-b.webp'],
          noiDung: [
            'Em và bạn (hoặc bố mẹ) đóng vai Mai và Liên, nhắc lại đoạn hội thoại A.',
            'Đổi vai cho nhau, nói lại đoạn A.',
            'Đóng vai Dũng và Nam, nhắc lại đoạn hội thoại B.',
            'Đổi vai cho nhau, nói lại đoạn B.'
          ],
          ghiAm: 'Ghi âm em đóng vai'
        },
        {
          id: 'ht3', so: 3, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Hình 1 là mẫu. Bạn hỏi, em chọn câu trả lời đúng rồi nói to.',
          cau: [
            { hinh: 'img/m1.webp', hoi: 'Bạn Liên thế nào?', dung: 'Bạn Liên hơi gầy (ốm).', sai: ['Bạn Liên khá cao.', 'Bạn Liên hơi nghiêm.'] },
            { hinh: 'img/m1.webp', hoi: 'Còn bạn Hùng?', dung: 'Bạn Hùng khá cao.', sai: ['Bạn Hùng hơi gầy (ốm).', 'Bạn Hùng hơi yếu.'] },
            { hinh: 'img/m1.webp', hoi: 'Lớp mình ai cao nhất?', dung: 'Lớp mình Hùng cao nhất.', sai: ['Lớp mình Liên cao nhất.'] },
            { hinh: 'img/m2.webp', hoi: 'Em Linh thế nào?', dung: 'Em Linh rất xinh.', sai: ['Em Linh rất nghiêm.', 'Em Linh rất chăm chỉ.'] },
            { hinh: 'img/m2.webp', hoi: 'Còn em Hà?', dung: 'Em Hà rất dễ thương.', sai: ['Em Hà rất nghiêm.', 'Em Hà rất thân thiện.'] },
            { hinh: 'img/m3.webp', hoi: 'Bà bạn thế nào?', dung: 'Bà tớ rất hiền.', sai: ['Bà tớ rất nghiêm.', 'Bà tớ rất xinh.'] },
            { hinh: 'img/m3.webp', hoi: 'Còn bố bạn?', dung: 'Bố tớ rất nghiêm.', sai: ['Bố tớ rất hiền.', 'Bố tớ rất dễ thương.'] },
            { hinh: 'img/m4.webp', hoi: 'Chị Tâm thế nào?', dung: 'Chị Tâm rất chăm chỉ.', sai: ['Chị Tâm rất nghiêm.', 'Chị Tâm rất thân thiện.'] },
            { hinh: 'img/m4.webp', hoi: 'Còn chú Thanh?', dung: 'Chú Thanh rất thân thiện.', sai: ['Chú Thanh rất chăm chỉ.', 'Chú Thanh rất xinh.'] },
            { hinh: 'img/m5.webp', hoi: 'Cô Na thế nào?', dung: 'Cô Na rất đẹp.', sai: ['Cô Na rất hiền.', 'Cô Na rất nghiêm.'] },
            { hinh: 'img/m5.webp', hoi: 'Còn cô My?', dung: 'Cô My rất hiền.', sai: ['Cô My rất đẹp.', 'Cô My rất vui vẻ.'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [13, 14],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'the-chu', lenh: 'Nghe và nhắc lại', amLenh: A + 'ld-lenh.mp3',
          chu: [
            { hoa: 'O', thuong: 'o', am: A + 'ld-o.mp3' },
            { hoa: 'Ô', thuong: 'ô', am: A + 'ld-oo.mp3' },
            { hoa: 'Ơ', thuong: 'ơ', am: A + 'ld-ow.mp3' },
            { hoa: 'D', thuong: 'd', am: A + 'ld-d.mp3' },
            { hoa: 'Đ', thuong: 'đ', am: A + 'ld-dd.mp3' }
          ]
        },
        {
          id: 'ld2', so: 2, loai: 'danh-van', lenh: 'Đánh vần',
          tu: [
            { hinh: 'img/do.webp', tieng: 'đỏ', phan: ['đ', 'o'], thanh: 'hỏi', doc: 'đờ – o – đo – hỏi – đỏ' },
            { hinh: 'img/doo.webp', tieng: 'dỗ', phan: ['d', 'ô'], thanh: 'ngã', doc: 'dờ – ô – dô – ngã – dỗ' }
          ]
        },
        {
          id: 'ld3', so: 3, loai: 'noi', lenh: 'Đọc và nối từ với hình', tenA: 'Từ', tenB: 'Hình',
          goiY: 'Em đọc to từng từ, rồi chạm vào từ và hình đúng để nối.',
          a: [{ c: 'đỗ' }, { c: 'đỏ' }, { c: 'đỡ' }, { c: 'độ' }],
          b: [{ hinh: 'img/do-gia.webp' }, { hinh: 'img/do.webp' }, { hinh: 'img/nhiet-ke.webp' }, { hinh: 'img/dau-do.webp' }],
          cap: [[0, 3], [1, 1], [2, 0], [3, 2]]
        },
        {
          id: 'ld4', so: 4, loai: 'to-thanh', lenh: 'Tô màu',
          mau: { 'hỏi': '#EE7FB0', 'ngã': '#4A92E0', 'nặng': '#5EA36A' },
          tieng: ['đỏ', 'đỗ', 'cổ', 'cỏ', 'dỗ', 'độ', 'cọ', 'đỡ']
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [14],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'dien-chu', lenh: 'Viết chữ và dấu thanh còn thiếu', them: 'dôơ',
          tu: [
            { hinh: 'img/nhiet-ke.webp', mau: '…ộ', dap: 'độ' },
            { hinh: 'img/do-gia.webp', mau: '…ỡ', dap: 'đỡ' },
            { hinh: 'img/do.webp', mau: 'đ…', dap: 'đỏ' }
          ]
        },
        {
          id: 'lv2', so: 2, loai: 'viet-o-li', lenh: 'Viết các từ em mới học',
          tu: [{ c: 'đỏ', hinh: 'img/do.webp' }, { c: 'độ', hinh: 'img/nhiet-ke.webp' }, { c: 'đỡ', hinh: 'img/do-gia.webp' }]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [15],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'hoat-dong', lenh: 'Trò chơi: Người mẫu nhí',
          goiY: 'Ở nhà: em làm “người mẫu” đi một vòng, bố mẹ giơ thẻ từ bình chọn – rồi đổi vai.',
          hinh: 'img/tvv-nguoi-mau.webp',
          noiDung: [
            'Chia lớp thành 3 – 4 nhóm. Mỗi nhóm cử một “người mẫu” đi một vòng trước lớp.',
            'Học sinh trong lớp giơ thẻ từ (“đẹp”, “thân thiện”, “dễ thương”,…) bình chọn.'
          ]
        },
        {
          id: 'tvv2', so: 2, loai: 'dem-so', lenh: 'Trò chơi: Chạy tiếp sức – đếm số',
          vong: [
            {
              ten: 'Vòng 1', bang: true,
              luat: 'Ba đội thi, mỗi đội dự thi đếm 2 hàng ngang. Đội nhanh nhất, đúng nhất được 3 điểm; đội thứ hai 2 điểm; đội thứ ba 1 điểm.',
              hang: [
                [41, 42, 0, 44, 0, 0, 47, 48, 0, 50],
                [51, 52, 0, 54, 55, 0, 57, 58, 0, 60],
                [0, 62, 63, 0, 65, 66, 0, 68, 69, 0],
                [71, 72, 0, 74, 75, 76, 0, 78, 0, 80],
                [81, 82, 0, 84, 85, 0, 87, 0, 89, 90],
                [91, 92, 93, 0, 95, 0, 97, 0, 0, 100]
              ]
            },
            {
              ten: 'Vòng 2',
              luat: 'Mỗi đội đếm 1 hàng ngang. Đếm đúng mỗi số được tính 1 điểm.',
              hang: [
                { nhan: 'a)', so: [30, 31, 32, 0, 34, 0, 0, 37, 0] },
                { nhan: 'b)', so: [51, 53, 0, 57, 0, 0, 63, 65, 0] },
                { nhan: 'c)', so: [82, 84, 86, 0, 0, 92, 0, 96, 0] }
              ]
            }
          ],
          ket: 'Sau hai vòng, đội nào nhiều điểm hơn thì thắng cuộc.'
        }
      ]
    }
  ]
};
