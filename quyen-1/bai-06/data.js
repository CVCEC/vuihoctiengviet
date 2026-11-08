/* Quyển 1 – Bài 6: Kia là con gì?  (sách trang 25–27)
   Toạ độ điểm chạm tính theo % của hình: [trái, trên, rộng, cao] */
const A = 'audio/';
// 12 thẻ con vật (Từ ngữ 1) – thứ tự như sách và như bản ghi âm
const CON_VAT = [
  ['gà', 'ga'], ['vịt', 'vit'], ['chó', 'cho'], ['mèo', 'meo'], ['trâu', 'trau'], ['bò', 'bo'],
  ['thỏ', 'tho'], ['ngựa', 'ngua'], ['voi', 'voi'], ['hổ', 'ho'], ['sóc', 'soc'], ['sói', 'soi']
];
const AM = {}; CON_VAT.forEach(([tu, f]) => { AM[tu] = A + 'tn-' + f + '.mp3'; });

// Tranh vườn thú (Từ ngữ 2) – 11 con vật đánh số như sách
const VUON_THU = {
  hinh: 'img/so-thu.webp', co: [1100, 821], moTa: 'Vườn thú với 11 con vật được đánh số',
  diem: [
    { tu: 'sóc', am: AM['sóc'], nguoi: [16, 1, 10, 12] },
    { tu: 'bò', am: AM['bò'], nguoi: [2, 20, 24, 30] },
    { tu: 'sói', am: AM['sói'], nguoi: [27, 15, 19, 17] },
    { tu: 'voi', am: AM['voi'], nguoi: [49, 14, 25, 36] },
    { tu: 'hổ', am: AM['hổ'], nguoi: [79, 3, 18, 22] },
    { tu: 'trâu', am: AM['trâu'], nguoi: [77, 34, 21, 31] },
    { tu: 'gà', am: AM['gà'], nguoi: [22, 50, 19, 23] },
    { tu: 'mèo', am: AM['mèo'], nguoi: [49, 52, 10, 21], z: 1 },
    { tu: 'thỏ', am: AM['thỏ'], nguoi: [5, 64, 12, 24] },
    { tu: 'vịt', am: AM['vịt'], nguoi: [33, 72, 16, 23], z: 1 },
    { tu: 'chó', am: AM['chó'], nguoi: [67, 72, 12, 26] }
  ]
};
// Tiếng Việt vui 1: hỏi – đáp trên tranh vườn thú (6 con, có mèo và hổ như mẫu)
const HOI_DAP = Object.assign({}, VUON_THU, { diem: VUON_THU.diem.filter(d => ['mèo', 'hổ', 'voi', 'gà', 'thỏ', 'vịt'].includes(d.tu)) });

const BAI_HOC = {
  quyen: 1, bai: 6, ten: 'Kia là con gì?', chuDe: 'Thiên nhiên', chu: 'g, gh, gi', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'tu-ngu', ten: 'Từ ngữ', mau: 'tn', trang: [25],
      bt: [
        {
          id: 'tn1', so: 1, loai: 'the-hinh', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'tn-lenh.mp3',
          danhSo: true, anChu: true, khen: 'Giỏi quá! Em đã biết tên 12 con vật.',
          the: CON_VAT.map(([tu, f]) => ({ hinh: 'img/the-' + f + '.webp', tu, am: AM[tu] }))
        },
        {
          id: 'tn2', so: 2, loai: 'chon-cau', lenh: 'Chỉ vào hình, đố tên con vật',
          goiY: 'Nhìn con vật có số trong tranh vườn thú. Đây là con gì? Chọn tên đúng.',
          khen: 'Giỏi quá! Em đã gọi đúng tên các con vật trong vườn thú.',
          cau: [
            ['1-soc', 'sóc', ['sói', 'chó']], ['2-bo', 'bò', ['trâu', 'ngựa']], ['3-soi', 'sói', ['chó', 'sóc']],
            ['4-voi', 'voi', ['bò', 'trâu']], ['5-ho', 'hổ', ['mèo', 'sói']], ['6-trau', 'trâu', ['bò', 'voi']],
            ['7-ga', 'gà', ['vịt', 'chó']], ['8-meo', 'mèo', ['hổ', 'thỏ']], ['9-tho', 'thỏ', ['mèo', 'sóc']],
            ['10-vit', 'vịt', ['gà', 'ngựa']], ['11-cho', 'chó', ['mèo', 'sói']]
          ].map(([f, dung, sai]) => ({ hinh: 'img/do-' + f + '.webp', hoi: { c: 'Đây là con gì?', am: A + 'ht-1.mp3' }, dung, sai, amDung: AM[dung] }))
        }
      ]
    },
    {
      id: 'hoi-thoai', ten: 'Hội thoại', mau: 'ht', trang: [26],
      bt: [
        {
          id: 'ht1', so: 1, loai: 'loi-thoai', lenh: 'Nhìn hình, nghe và nhắc lại', amLenh: A + 'ht-lenh.mp3',
          hinh: 'img/ht-tranh.webp', moTa: 'Dũng, Mai và Nam ở vườn thú: con voi trong chuồng, đàn vịt dưới ao',
          vai: { 'Dũng': { mau: '#3E9B5F' }, 'Mai': { mau: '#E0577A' }, 'Nam': { mau: '#3C78C8' } },
          loi: [
            { ai: 'Dũng', c: 'Đây là con gì?', am: A + 'ht-1.mp3' },
            { ai: 'Mai', c: 'Đây là con vịt.', am: A + 'ht-2.mp3' },
            { ai: 'Dũng', c: 'Kia là con gì?', am: A + 'ht-3.mp3' },
            { ai: 'Nam', c: 'Kia là con voi.', am: A + 'ht-4.mp3' },
            { ai: 'Dũng', c: 'Con voi đang làm gì?', am: A + 'ht-5.mp3' },
            { ai: 'Mai', c: 'Con voi đang ăn.', am: A + 'ht-6.mp3' },
            { ai: 'Dũng', c: 'Con voi thế nào?', am: A + 'ht-7.mp3' },
            { ai: 'Nam', c: 'Con voi rất khoẻ.', am: A + 'ht-8.mp3' }
          ]
        },
        {
          id: 'ht2', so: 2, loai: 'loi-thoai', lenh: 'Đóng vai, nhắc lại hội thoại trên',
          goiY: 'Chọn “Đóng vai”, rồi chọn Dũng, Mai hoặc Nam. Đến lượt em, em nói to lời của bạn ấy.',
          vai: { 'Dũng': { mau: '#3E9B5F' }, 'Mai': { mau: '#E0577A' }, 'Nam': { mau: '#3C78C8' } },
          loi: [
            { ai: 'Dũng', c: 'Đây là con gì?', am: A + 'ht-1.mp3' },
            { ai: 'Mai', c: 'Đây là con vịt.', am: A + 'ht-2.mp3' },
            { ai: 'Dũng', c: 'Kia là con gì?', am: A + 'ht-3.mp3' },
            { ai: 'Nam', c: 'Kia là con voi.', am: A + 'ht-4.mp3' },
            { ai: 'Dũng', c: 'Con voi đang làm gì?', am: A + 'ht-5.mp3' },
            { ai: 'Mai', c: 'Con voi đang ăn.', am: A + 'ht-6.mp3' },
            { ai: 'Dũng', c: 'Con voi thế nào?', am: A + 'ht-7.mp3' },
            { ai: 'Nam', c: 'Con voi rất khoẻ.', am: A + 'ht-8.mp3' }
          ]
        }
      ]
    },
    {
      id: 'tieng-viet-vui', ten: 'Tiếng Việt vui', mau: 'tvv', trang: [27],
      bt: [
        {
          id: 'tvv1', so: 1, loai: 'hoi-dap', lenh: 'Chỉ vào hình, hỏi đáp',
          goiY: 'Bạn chỉ vào một con vật và hỏi. Em chọn câu trả lời đúng.',
          nguon: HOI_DAP, mauCau: 'Đây là con {tu}.',
          hoi: { c: 'Đây là con gì?', am: A + 'ht-1.mp3', av: 'img/tvv-hoi.webp' },
          dap: { ten: 'bạn trả lời', av: 'img/tvv-dap.webp' },
          mau: [
            [{ c: 'Đây là con gì?', am: A + 'ht-1.mp3' }, { c: 'Đây là con mèo.', am: null }],
            [{ c: 'Kia là con gì?', am: A + 'ht-3.mp3' }, { c: 'Kia là con hổ.', am: null }],
            [{ c: 'Con hổ thế nào?', am: null }, { c: 'Con hổ khoẻ lắm.', am: null }]
          ],
          amCau: { 'Đây là con vịt.': A + 'ht-2.mp3' }
        },
        {
          id: 'tvv2', so: 2, loai: 'hoc-hat', lenh: 'Học hát: Một con vịt (Kim Duyên)',
          baiHat: 'Một con vịt', tacGia: 'Kim Duyên', youtube: 'X4RcUejsAHE'
        }
      ]
    },
    {
      id: 'hoc-chu', ten: 'Học chữ', mau: 'hc', trang: [27],
      bt: [
        {
          id: 'hc1', so: 1, loai: 'the-chu', lenh: 'Nghe, nhắc lại tên chữ và tô màu', amLenh: A + 'hc-lenh.mp3',
          chu: [
            { hoa: 'G', thuong: 'g', am: A + 'hc-g.mp3' },
            { hoa: 'Gh', thuong: 'gh', am: A + 'hc-gh.mp3' },
            { hoa: 'Gi', thuong: 'gi', am: A + 'hc-gi.mp3' }
          ]
        },
        {
          id: 'hc2', so: 2, loai: 'tim-chu', lenh: 'Tìm và tô màu các chữ vừa học',
          dich: ['g', 'gh', 'gi'],
          cau: ['Gà mẹ rất yêu gà con.', 'Con voi già mà khoẻ ghê.']
        }
      ]
    }
  ]
};
