#!/usr/bin/env python3
"""Đóng dấu chìm và giảm độ phân giải ảnh trang sách (img/trang-N.jpg).

  python3 tools/dau_anh.py in.jpg out.jpg      – một ảnh
Dùng trong tools/tao_trang.py --trang / --trang-lai.
"""
import math, sys
from PIL import Image, ImageDraw, ImageFont

CHU = '© NXB ĐHSP TP.HCM · CVCEC – Trường Tiếng Việt Của Em · Chỉ xem, không sao chép'
RONG = 900          # bề rộng ảnh trên trang (px) – đủ đọc trên iPad, không đủ để in đẹp
CHAT_LUONG = 72
FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'


def dong_dau(vao, ra, rong=RONG):
    im = Image.open(vao).convert('RGB')
    if im.width > rong:
        im = im.resize((rong, round(im.height * rong / im.width)), Image.LANCZOS)
    W, H = im.size
    co = max(14, W // 38)
    font = ImageFont.truetype(FONT, co)
    w_chu = font.getbbox(CHU)[2]
    # lớp chữ lớn hơn ảnh để xoay mà vẫn phủ kín
    D = int(math.hypot(W, H)) + w_chu
    lop = Image.new('L', (D, D), 0)
    v = ImageDraw.Draw(lop)
    buoc_x, buoc_y = w_chu + co * 3, co * 7
    for i, y in enumerate(range(0, D, buoc_y)):
        lech = (i % 2) * (buoc_x // 2)
        for x in range(-buoc_x, D, buoc_x):
            v.text((x + lech, y), CHU, font=font, fill=255)
    lop = lop.rotate(28, resample=Image.BICUBIC)
    lop = lop.crop(((D - W) // 2, (D - H) // 2, (D - W) // 2 + W, (D - H) // 2 + H))
    mau = Image.new('RGB', (W, H), (120, 100, 80))
    im = Image.composite(mau, im, lop.point(lambda p: p * 46 // 255))   # khoảng 18% đậm
    im.save(ra, 'JPEG', quality=CHAT_LUONG, optimize=True, progressive=True)


if __name__ == '__main__':
    dong_dau(sys.argv[1], sys.argv[2])
