"""Đặt tên chuẩn cho file thu âm tải từ thư mục Drive: 'Bai03-Tu ngu.mp3' → tu-ngu.mp3"""
import pathlib, shutil, sys, unicodedata, re
src, dst = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
dst.mkdir(parents=True, exist_ok=True)
def slug(s):
    s = unicodedata.normalize('NFD', s.lower()).replace('đ', 'd')
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^a-z0-9]+', ' ', s).strip()
KEYS = [('tu ngu', 'tu-ngu'), ('tungu', 'tu-ngu'), ('hoi thoai', 'hoi-thoai'), ('hoithoai', 'hoi-thoai'),
        ('hoc chu', 'hoc-chu'), ('hocchu', 'hoc-chu'), ('luyen doc', 'luyen-doc'), ('luyendoc', 'luyen-doc'),
        ('luyen viet', 'luyen-viet'), ('luyenviet', 'luyen-viet'), ('tieng viet vui', 'tieng-viet-vui'), ('on tap', 'on-tap'), ('ontap', 'on-tap')]
for f in sorted(src.rglob('*')):
    if not f.is_file() or f.suffix.lower() not in ('.mp3', '.m4a', '.wav'): continue
    s = slug(f.stem); name = next((v for k, v in KEYS if k in s), None)
    if not name: name = re.sub(r'^bai ?\d+ ?', '', s).replace(' ', '-') or 'am-thanh'
    out = dst / (name + f.suffix.lower()); n = 2
    while out.exists(): out = dst / f'{name}-{n}{f.suffix.lower()}'; n += 1
    shutil.copy2(f, out); print(f.name, '→', out)
