/* Quyển 2 – Bài 15: Ôn tập và học chữ  (sách trang 96–100)
   Bài ôn tập không có file thu âm riêng. Dùng lại tiếng đã thu của NXB:
   tên bài "Ôn tập và học chữ" (Quyển 2 Bài 5), "Bây giờ là mấy giờ?" và các giờ trên đồng hồ (Quyển 2 Bài 11, Từ ngữ).
   Ôn tập 2–5: câu mẫu (M) như sách; các câu lựa chọn khác là gợi ý soạn thêm cho trò chơi. */
const A = 'audio/', I = 'img/';
const HOI_GIO = { c: 'Bây giờ là mấy giờ?', am: A + 'hoi-gio.mp3' };
const toi = (ai, v) => [ // v = [thường làm, ít khi làm, không bao giờ]
  'Buổi tối, ' + ai + ' thường ' + v[0] + ' / ít khi ' + v[1] + ' / không bao giờ ' + v[2] + '.',
  'Buổi tối, ' + ai + ' thường ' + v[1] + ' / ít khi ' + v[2] + ' / không bao giờ ' + v[0] + '.',
  'Buổi tối, ' + ai + ' thường ' + v[2] + ' / ít khi ' + v[0] + ' / không bao giờ ' + v[1] + '.'
];
const TOI = [
  ['Nam', 'nam', ['học bài', 'vẽ', 'đá bóng']],
  ['bố của Nam', 'bo', ['đọc sách', 'đi xem hát', 'đi bơi']],
  ['mẹ của Nam', 'me', ['xem ti vi', 'đi xem hát', 'đi chợ']],
  ['Liên', 'lien', ['dùng máy tính', 'hát', 'đi công viên']]
];
const KHUYEN = ['Cậu đi học bơi đi!', 'Cậu học tiếng Việt với tớ nhé!', 'Thưa cô, cô nhắc lại từ này giúp em với ạ!', 'Bố mẹ ơi, bố mẹ cho con đi chơi với bạn nhé!'];
const BAN = (viec, ok) => (ok ? 'Có. Bạn ấy ' : 'Không. Bạn ấy ') + viec + '.';

const BAI_HOC = {
  quyen: 2, bai: 15, ten: 'Ôn tập và học chữ', chuDe: 'Trường lớp', chu: 'ao – au', amTen: A + 'tn-ten.mp3',
  phan: [
    {
      id: 'on-tap', ten: 'Ôn tập', mau: 'ht', trang: [96, 97, 98],
      bt: [
        {
          id: 'on1', so: 1, loai: 'chon-cau', lenh: 'Xoay kim đồng hồ, thực hành hỏi đáp với bạn',
          goiY: 'Câu hỏi: – Bây giờ là mấy giờ? – Bạn đang làm gì ở lớp học? – Vào ngày nghỉ, giờ này, bạn thường làm gì? Xoay kim đồng hồ và hỏi đáp với bạn. Trên máy: nghe câu hỏi, nhìn đồng hồ, chọn câu trả lời đúng.',
          cau: [
            { hinh: I + 'dh-3h.webp', hoi: HOI_GIO, dung: 'Bây giờ là 3 giờ.', sai: ['Bây giờ là 12 giờ 15 phút.', 'Bây giờ là 9 giờ.'] },
            { hinh: I + 'dh-2h.webp', hoi: HOI_GIO, dung: 'Bây giờ là 2 giờ.', sai: ['Bây giờ là 12 giờ 10 phút.', 'Bây giờ là 3 giờ.'], amDung: A + 'gio-2.mp3' },
            { hinh: I + 'dh-715.webp', hoi: HOI_GIO, dung: 'Bây giờ là 7 giờ 15 phút.', sai: ['Bây giờ là 3 giờ 35 phút.', 'Bây giờ là 7 giờ 30 phút.'], amDung: A + 'gio-715.mp3' },
            { hinh: I + 'dh-530.webp', hoi: HOI_GIO, dung: 'Bây giờ là 5 giờ 30 phút.', sai: ['Bây giờ là 6 giờ 25 phút.', 'Bây giờ là 12 giờ 30 phút.'] },
            { hinh: I + 'dh-250.webp', hoi: HOI_GIO, dung: 'Bây giờ là 3 giờ kém 10 phút.', sai: ['Bây giờ là 10 giờ 15 phút.', 'Bây giờ là 3 giờ 10 phút.'], amDung: A + 'gio-250.mp3' },
            { hinh: I + 'dh-930.webp', hoi: HOI_GIO, dung: 'Bây giờ là 9 giờ 30 phút.', sai: ['Bây giờ là 6 giờ 45 phút.', 'Bây giờ là 12 giờ 30 phút.'], amDung: A + 'gio-930.mp3' }
          ]
        },
        {
          id: 'on2', so: 2, loai: 'chon-cau', lenh: 'Buổi tối, mọi người làm gì?',
          goiY: 'Mẫu: Buổi tối, Nam thường học bài / ít khi vẽ / không bao giờ đá bóng. Nhìn bảng (Thường làm – Ít khi làm – Không bao giờ), chọn câu đúng.',
          cau: TOI.map(([ai, k, v]) => {
            const c = toi(ai, v);
            return { hinh: I + 'bt-' + k + '.webp', hoi: 'Buổi tối, ' + ai + ' làm gì?', dung: c[0], sai: [c[1], c[2]] };
          })
        },
        {
          id: 'on3', so: 3, loai: 'chon-cau', lenh: 'Nói lời khuyên, lời đề nghị của em trong các trường hợp sau',
          goiY: 'Đọc từng trường hợp, chọn lời khuyên, lời đề nghị phù hợp, rồi nói to.',
          cau: [
            { hoi: 'a) Bạn em chưa biết bơi.', dung: KHUYEN[0], sai: [KHUYEN[1], KHUYEN[3]] },
            { hoi: 'b) Bạn em chưa biết tiếng Việt.', dung: KHUYEN[1], sai: [KHUYEN[0], KHUYEN[2]] },
            { hoi: 'c) Em muốn cô giáo nhắc lại một từ.', dung: KHUYEN[2], sai: [KHUYEN[3], KHUYEN[1]] },
            { hoi: 'd) Em muốn bố mẹ cho đi chơi với bạn.', dung: KHUYEN[3], sai: [KHUYEN[2], KHUYEN[0]] }
          ]
        },
        {
          id: 'on4', so: 4, loai: 'chon-cau', lenh: 'Đóng vai, nói với bạn lời khuyên phù hợp theo mẫu',
          goiY: 'Mẫu: Bạn đọc quá to. → Bạn hãy đọc nhỏ hơn! / Bạn đừng đọc to quá! Chọn lời khuyên phù hợp, rồi đóng vai nói với bạn.',
          cau: [
            { hoi: 'a) Bạn đọc quá nhỏ.', dung: 'Bạn hãy đọc to hơn!', sai: ['Bạn hãy đọc nhỏ hơn!', 'Bạn đừng đọc to quá!'] },
            { hoi: 'b) Bạn đi quá nhanh.', dung: 'Bạn hãy đi chậm hơn!', sai: ['Bạn hãy đi nhanh hơn!', 'Bạn đừng đi chậm quá!'] },
            { hoi: 'c) Bạn đi quá chậm.', dung: 'Bạn đừng đi chậm quá!', sai: ['Bạn hãy đi chậm hơn!', 'Bạn đừng đi nhanh quá!'] },
            { hoi: 'd) Bạn ăn quá nhiều kẹo.', dung: 'Bạn đừng ăn nhiều kẹo quá!', sai: ['Bạn hãy ăn nhiều kẹo hơn!', 'Bạn đừng ăn ít kẹo quá!'] }
          ]
        },
        {
          id: 'on5', so: 5, loai: 'chon-cau', lenh: 'Nhìn hình, hỏi đáp theo mẫu',
          goiY: 'Mẫu: – Bạn ấy đang làm gì? – Bạn ấy đang học bài. – Bạn ấy học có giỏi không? – Có (Không). Bạn ấy học giỏi (không giỏi). Chọn câu trả lời đúng, rồi hỏi đáp cùng bố mẹ.',
          cau: [
            { hinh: I + 'h5-1.webp', hoi: '1. Bạn ấy đang làm gì?', dung: 'Bạn ấy đang học bài.', sai: ['Bạn ấy đang vẽ.', 'Bạn ấy đang đá bóng.'] },
            { hinh: I + 'h5-1.webp', hoi: 'Bạn ấy học có giỏi không? (Em trả lời: Có)', dung: BAN('học giỏi', 1), sai: [BAN('học không giỏi', 1), BAN('học giỏi', 0)] },
            { hinh: I + 'h5-2.webp', hoi: '2. Bạn ấy đang làm gì?', dung: 'Bạn ấy đang vẽ.', sai: ['Bạn ấy đang hát.', 'Bạn ấy đang học bài.'] },
            { hinh: I + 'h5-2.webp', hoi: 'Bạn ấy vẽ có đẹp không? (Em trả lời: Có)', dung: BAN('vẽ đẹp', 1), sai: [BAN('vẽ không đẹp', 1), BAN('vẽ đẹp', 0)] },
            { hinh: I + 'h5-3.webp', hoi: '3. Bạn ấy đang làm gì?', dung: 'Bạn ấy đang hát.', sai: ['Bạn ấy đang bơi.', 'Bạn ấy đang vẽ.'] },
            { hinh: I + 'h5-3.webp', hoi: 'Bạn ấy hát có hay không? (Em trả lời: Có)', dung: BAN('hát hay', 1), sai: [BAN('hát không hay', 1), BAN('hát hay', 0)] },
            { hinh: I + 'h5-4.webp', hoi: '4. Bạn ấy đang làm gì?', dung: 'Bạn ấy đang bơi.', sai: ['Bạn ấy đang đá bóng.', 'Bạn ấy đang hát.'] },
            { hinh: I + 'h5-4.webp', hoi: 'Bạn ấy bơi có nhanh không? (Em trả lời: Không)', dung: BAN('bơi không nhanh', 0), sai: [BAN('bơi nhanh', 0), BAN('bơi không nhanh', 1)] },
            { hinh: I + 'h5-5.webp', hoi: '5. Bạn ấy đang làm gì?', dung: 'Bạn ấy đang đá bóng.', sai: ['Bạn ấy đang bơi.', 'Bạn ấy đang học bài.'] },
            { hinh: I + 'h5-5.webp', hoi: 'Bạn ấy đá bóng có giỏi không? (Em trả lời: Có)', dung: BAN('đá bóng giỏi', 1), sai: [BAN('đá bóng không giỏi', 1), BAN('đá bóng giỏi', 0)] }
          ]
        }
      ]
    },
    {
      id: 'luyen-doc', ten: 'Luyện đọc', mau: 'ld', trang: [98, 99],
      bt: [
        {
          id: 'ld1', so: 1, loai: 'danh-van-van', lenh: 'Đánh vần',
          goiY: 'Bấm “Đánh vần” để xem hai chữ ghép thành vần. Chạm vào từng bước và đọc theo.',
          tu: [
            { hinh: I + 'dv-sao.webp', tu: 'ngôi sao', to: 'ao', tieng: 'ao', phan: ['a', 'o'], thanh: null, doc: 'a – o – ao' },
            { hinh: I + 'dv-cau.webp', tu: 'cây cau', to: 'au', tieng: 'au', phan: ['a', 'u'], thanh: null, doc: 'a – u – au' }
          ]
        },
        {
          id: 'ld2a', so: 2, loai: 'noi', lenh: 'Đọc các từ ngữ sau – từ 1 đến 6', tenA: 'Từ ngữ', tenB: 'Hình',
          goiY: 'Em đọc to từng từ ngữ, rồi chạm vào từ và hình đúng để nối.',
          a: [{ c: 'hạt gạo' }, { c: 'quả táo' }, { c: 'tàu' }, { c: 'cây cầu' }, { c: 'con mèo' }, { c: 'cái kéo' }],
          b: [{ hinh: I + 'w-cay-cau.webp' }, { hinh: I + 'w-cai-keo.webp' }, { hinh: I + 'w-hat-gao.webp' }, { hinh: I + 'w-con-meo.webp' }, { hinh: I + 'w-tau.webp' }, { hinh: I + 'w-qua-tao.webp' }],
          cap: [[0, 2], [1, 5], [2, 4], [3, 0], [4, 3], [5, 1]]
        },
        {
          id: 'ld2b', so: 2, loai: 'noi', lenh: 'Đọc các từ ngữ sau – từ 7 đến 12', tenA: 'Từ ngữ', tenB: 'Hình',
          goiY: 'Em đọc to từng từ ngữ, rồi chạm vào từ và hình đúng để nối.',
          a: [{ c: 'lều vải' }, { c: 'cái rìu' }, { c: 'diều sáo' }, { c: 'yêu quý' }, { c: 'con cừu' }, { c: 'con hươu' }],
          b: [{ hinh: I + 'w-con-cuu.webp' }, { hinh: I + 'w-dieu-sao.webp' }, { hinh: I + 'w-con-huou.webp' }, { hinh: I + 'w-leu-vai.webp' }, { hinh: I + 'w-yeu-quy.webp' }, { hinh: I + 'w-cai-riu.webp' }],
          cap: [[0, 3], [1, 5], [2, 1], [3, 4], [4, 0], [5, 2]]
        },
        {
          id: 'ld3', so: 3, loai: 'doc-bai', lenh: 'Đọc bài sau',
          ten: 'Sáu củ cà rốt', hinh: I + 'bai-doc.webp', nguon: 'Theo sách 365 chuyện kể mỗi ngày',
          cau: [
            { c: 'Mẹ sai thỏ nâu ra vườn rau nhổ cà rốt.' }, { c: 'Mẹ bảo: “Nhổ sáu củ, con yêu nhé!”.' },
            { c: 'Củ cà rốt nằm sâu dưới đất, nhưng nhổ không khó.' }, { c: 'Hấp! Hấp!' },
            { c: 'Một lát sau, thỏ nâu đã nhổ được rất nhiều cà rốt.' }, { c: 'Nó chạy vào bếp đưa cho mẹ.' },
            { c: 'Thỏ mẹ ngạc nhiên: “Sao con nhổ nhiều thế?”.' }, { c: 'Thỏ nâu gãi đầu: “Hì! Vì con chưa biết đếm ạ.”.' }
          ],
          hoi: [
            { hoi: 'a) Mẹ bảo thỏ nâu nhổ mấy củ cà rốt?', dung: 'Mẹ bảo thỏ nâu nhổ sáu củ cà rốt.', sai: ['Mẹ bảo thỏ nâu nhổ ba củ cà rốt.', 'Mẹ bảo thỏ nâu nhổ thật nhiều cà rốt.'] },
            { hoi: 'b) Vì sao thỏ mẹ ngạc nhiên?', dung: 'Vì thỏ nâu nhổ được rất nhiều cà rốt.', sai: ['Vì thỏ nâu không nhổ được củ nào.', 'Vì củ cà rốt nằm sâu dưới đất.'] },
            { hoi: 'c) Vì sao thỏ nâu nhổ nhiều cà rốt như vậy?', dung: 'Vì thỏ nâu chưa biết đếm.', sai: ['Vì thỏ nâu rất thích ăn cà rốt.', 'Vì mẹ bảo nhổ thật nhiều.'] }
          ]
        }
      ]
    },
    {
      id: 'luyen-viet', ten: 'Luyện viết', mau: 'lv', trang: [100],
      bt: [
        {
          id: 'lv1', so: 1, loai: 'viet-o-li', lenh: 'Chép bài thơ sau',
          goiY: 'Bài thơ “Ngủ rồi” (Phạm Hổ). Em tô theo chữ mờ từng dòng thơ. Viết xong bấm “Từ tiếp”.',
          tu: [{ c: 'Ngủ rồi' }, { c: 'Mẹ gà hỏi con:' }, { c: '– Ngủ chưa đấy hả?' }, { c: 'Cả đàn nhao nhao:' }, { c: '– Ngủ rồi đấy ạ.' }]
        },
        {
          id: 'lv2', so: 2, loai: 'bang-van', lenh: 'Ghép vần và tìm những từ có vần đó',
          hang: ['a', 'ă', 'â', 'i', 'e', 'ê', 'iê', 'yê', 'u', 'ư', 'o', 'ô', 'uô', 'ươ'],
          cot: ['m', 'p', 'n', 't', 'ng', 'c', 'nh', 'ch', 'i', 'y', 'o', 'u'],
          co: {
            'a': ['m', 'p', 'n', 't', 'ng', 'c', 'nh', 'ch', 'i', 'y', 'o', 'u'],
            'ă': ['m', 'p', 'n', 't', 'ng', 'c'],
            'â': ['m', 'p', 'n', 't', 'ng', 'c', 'y', 'u'],
            'i': ['m', 'p', 'n', 't', 'nh', 'ch', 'u'],
            'e': ['m', 'p', 'n', 't', 'ng', 'c', 'o'],
            'ê': ['m', 'p', 'n', 't', 'nh', 'ch', 'u'],
            'iê': ['m', 'p', 'n', 't', 'ng', 'c', 'u'],
            'yê': ['m', 'n', 't', 'ng', 'u'],
            'u': ['m', 'p', 'n', 't', 'ng', 'c', 'i'],
            'ư': ['t', 'ng', 'c', 'i', 'u'],
            'o': ['m', 'p', 'n', 't', 'ng', 'c', 'i'],
            'ô': ['m', 'p', 'n', 't', 'ng', 'c', 'i'],
            'uô': ['m', 'n', 't', 'ng', 'c', 'i'],
            'ươ': ['m', 'p', 'n', 't', 'ng', 'c', 'i', 'u']
          },
          viDu: {
            'a:nh': 'xanh', 'ă:m': 'chăm', 'â:y': 'cây', 'i:ch': 'kịch', 'e:ng': 'xẻng', 'e:o': 'mèo', 'ê:n': 'nến',
            'iê:p': 'tiếp', 'yê:u': 'yêu', 'o:c': 'tóc', 'ô:t': 'tốt', 'uô:i': 'chuối', 'ươ:p': 'mướp'
          },
          tu: [
            { c: 'đàn', o: 'a:n' }, { c: 'hát', o: 'a:t' }, { c: 'bác', o: 'a:c' }, { c: 'sách', o: 'a:ch' }, { c: 'nai', o: 'a:i' },
            { c: 'tay', o: 'a:y' }, { c: 'sao', o: 'a:o' }, { c: 'cau', o: 'a:u' }, { c: 'nắng', o: 'ă:ng' }, { c: 'kính', o: 'i:nh' },
            { c: 'súng', o: 'u:ng' }, { c: 'voi', o: 'o:i' }, { c: 'đuốc', o: 'uô:c' }, { c: 'gương', o: 'ươ:ng' }
          ]
        }
      ]
    }
  ]
};
