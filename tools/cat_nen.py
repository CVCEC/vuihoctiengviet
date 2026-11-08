"""Tách nền trắng/nhạt quanh một nhân vật đã cắt từ trang sách → ảnh .webp nền trong suốt.

Dùng:  python3 tools/cat_nen.py vao.png ra.webp [rong_toi_da=360] [do_lech=26]
Nền được lan từ mép ảnh: điểm ảnh gần màu mép (hoặc rất sáng) bị xoá. Nhân vật mặc áo trắng sát mép
có thể bị ăn mất – khi đó cắt rộng hơn hoặc giữ nền (dùng ảnh gốc).
"""
import sys
from collections import deque

import numpy as np
from PIL import Image, ImageFilter


def cat(src, dst, maxw=360, tol=26):
    im = Image.open(src).convert('RGB')
    a = np.array(im).astype(int)
    H, W, _ = a.shape
    border = np.concatenate([a[0], a[-1], a[:, 0], a[:, -1]])
    ref = np.median(border, axis=0)
    ok = (np.abs(a - ref).max(axis=2) < tol) | (a.min(axis=2) > 236)
    seen = np.zeros((H, W), bool)
    q = deque([(0, x) for x in range(W)] + [(H - 1, x) for x in range(W)] + [(y, 0) for y in range(H)] + [(y, W - 1) for y in range(H)])
    while q:
        y, x = q.popleft()
        if seen[y, x] or not ok[y, x]:
            continue
        seen[y, x] = True
        for yy, xx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
            if 0 <= yy < H and 0 <= xx < W and not seen[yy, xx]:
                q.append((yy, xx))
    alpha = Image.fromarray(np.where(seen, 0, 255).astype(np.uint8)).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1))
    out = im.convert('RGBA')
    out.putalpha(alpha)
    out = out.crop(out.getbbox())
    if out.width > maxw:
        out = out.resize((maxw, round(out.height * maxw / out.width)), Image.LANCZOS)
    out.save(dst, quality=85)
    print(dst, out.size)


if __name__ == '__main__':
    cat(sys.argv[1], sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 360, int(sys.argv[4]) if len(sys.argv) > 4 else 26)
