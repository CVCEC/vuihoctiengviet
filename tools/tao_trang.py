"""Tạo index.html cho mọi bài (quyen-*/bai-*/) từ một khuôn chung.

- Lấy tên bài và chữ học từ assets/js/muc-luc.js
- Gắn tất cả dạng bài bổ sung trong assets/js/dang/*.js
- Chạy: python3 tools/tao_trang.py            (mọi bài đang có data.js)
        python3 tools/tao_trang.py --trang     (xuất thêm ảnh trang sách img/trang-N.jpg, cần pdftoppm + file PDF + Pillow)
        python3 tools/tao_trang.py --trang-lai (xuất lại mọi ảnh trang; ảnh luôn có dấu chìm – tools/dau_anh.py)
"""
import html
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
PDF = {1: '/mnt/user-data/uploads/QUYỂN_1.pdf', 2: '/mnt/user-data/uploads/QUYỂN_2.pdf'}
# trang bắt đầu (số trang in trong sách) của 20 bài, trang kết thúc của bài cuối
DAU = {1: [5, 8, 13, 18, 22, 25, 28, 32, 36, 40, 44, 48, 53, 58, 62, 65, 70, 76, 82, 87, 91],
       2: [5, 10, 16, 22, 28, 33, 40, 47, 54, 61, 68, 75, 83, 90, 96, 101, 108, 116, 124, 132, 143]}
LECH = 2  # trang PDF = trang sách + 2
TAC_GIA = {
    1: 'Nguyễn Minh Thuyết, Nguyễn Khánh Hà (đồng chủ biên), Hoàng Hoà Bình, Phùng Thị Thanh Lâm',
    2: 'Nguyễn Minh Thuyết (chủ biên), Nguyễn Khánh Hà, Trịnh Cẩm Lan, Hoàng Anh Thi',
}


def muc_luc():
    src = (ROOT / 'assets/js/muc-luc.js').read_text(encoding='utf-8')
    out = {}
    for q, block in re.findall(r"quyen: (\d), ten:.*?chuong: \[(.*?)\n    \]\n  \}", src, re.S):
        for so, ten, rest in re.findall(r"\{ so: (\d+), ten: '([^']*)'(.*?)\}", block):
            chu = re.search(r"chu: '([^']*)'", rest)
            out[(int(q), int(so))] = (ten, chu.group(1) if chu else '')
    return out


def trang_bai(q, b):
    return list(range(DAU[q][b - 1], DAU[q][b]))


KHUON = '''<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Bài {b}: {ten} – Vui học tiếng Việt {q}</title>
<meta name="description" content="Vui học tiếng Việt – Quyển {q}, Bài {b} «{ten}» – bài học tương tác: nghe, nói, đóng vai{chu_mo_ta}.">
<meta name="theme-color" content="#F4F0EA">
<meta name="robots" content="noimageindex, noai, noimageai">
<meta name="googlebot" content="noimageindex">
<link rel="icon" href="../../assets/img/icon.svg" type="image/svg+xml">
<link rel="preload" href="../../assets/fonts/andika-vietnamese-700-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="../../assets/css/site.css">
</head>
<body>
<header class="top">
  <div class="wrap">
    <a class="brand" href="https://truongtiengvietcuaem.cvcec.org/" aria-label="Trường Tiếng Việt Của Em – trang chủ"><b>Trường Tiếng Việt</b><span>Của Em</span></a>
    <nav class="crumb">
      <a class="pill" href="../../#quyen-{q}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg><span class="hide-s">Vui học tiếng Việt ·</span>&nbsp;Quyển {q}</a>
    </nav>
  </div>
</header>
<main class="wrap" id="app"></main>
<footer class="foot">
  <div class="wrap">
    <p>Nội dung: <b>Vui học tiếng Việt – Quyển {q}</b> · {tac_gia} · Nhà xuất bản Đại học Sư phạm TP. Hồ Chí Minh.</p>
    <p>Bản số hoá tương tác: CVCEC – Trường Tiếng Việt Của Em, với sự đồng ý của Nhà xuất bản. Sử dụng miễn phí cho mục đích học tập.</p>
    <p class="cp">Bài hát được nhúng từ YouTube và thuộc bản quyền của tác giả, người biểu diễn.</p>
    <p class="dk"><a href="../../#dieu-khoan">Lưu ý về sử dụng tài liệu · Terms of use</a></p>
  </div>
</footer>
<script src="../../assets/js/bao-ve.js"></script>
<script src="../../assets/js/muc-luc.js"></script>
<script src="../../assets/js/khoa.js"></script>
{plugins}
<script src="data.js"></script>{giong_ai}
<script src="../../assets/js/engine.js"></script>
</body>
</html>
'''


def main():
    ml = muc_luc()
    plugins = '\n'.join(f'<script src="../../assets/js/dang/{p.name}"></script>'
                        for p in sorted((ROOT / 'assets/js/dang').glob('*.js')))
    lam_lai = '--trang-lai' in sys.argv          # xuất lại mọi ảnh trang (vd. khi đổi dấu chìm)
    xuat_trang = '--trang' in sys.argv or lam_lai
    if xuat_trang:
        sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
        from dau_anh import dong_dau
    for data in sorted(ROOT.glob('quyen-*/bai-*/data.js')):
        d = data.parent
        q = int(d.parent.name.split('-')[1]); b = int(d.name.split('-')[1])
        ten, chu = ml.get((q, b), ('', ''))
        rieng = '\n<script src="dang-rieng.js"></script>' if (d / 'dang-rieng.js').exists() else ''
        giong_ai = ('\n<script src="am-ai.js"></script>\n<script src="../../assets/js/giong-ai.js"></script>'
                    if (d / 'am-ai.js').exists() else '')
        page = KHUON.format(q=q, b=b, ten=html.escape(ten), tac_gia=TAC_GIA[q], plugins=plugins + rieng, giong_ai=giong_ai,
                            chu_mo_ta=(', học chữ ' + html.escape(chu)) if chu and '–' not in chu else '')
        (d / 'index.html').write_text(page, encoding='utf-8')
        if xuat_trang:
            (d / 'img').mkdir(exist_ok=True)
            for t in trang_bai(q, b):
                out = d / 'img' / f'trang-{t}'
                if lam_lai or not out.with_suffix('.jpg').exists():
                    tam = d / 'img' / f'.tam-{t}'
                    subprocess.run(['pdftoppm', '-r', '170', '-jpeg', '-jpegopt', 'quality=92', '-f', str(t + LECH), '-l', str(t + LECH),
                                    '-singlefile', PDF[q], str(tam)], check=True)
                    dong_dau(tam.with_suffix('.jpg'), out.with_suffix('.jpg'))   # dấu chìm + giảm độ phân giải
                    tam.with_suffix('.jpg').unlink()
        print('ok', d.relative_to(ROOT), ten)


if __name__ == '__main__':
    main()
