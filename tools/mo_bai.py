"""Bật một bài trong mục lục (san: true). Dùng: python3 tools/mo_bai.py 1:3 1:4 2:1 ..."""
import pathlib, re, sys
p = pathlib.Path(__file__).resolve().parent.parent / 'assets/js/muc-luc.js'
s = p.read_text(encoding='utf-8')
for arg in sys.argv[1:]:
    q, b = (int(x) for x in arg.split(':'))
    # khối của quyển q
    start = s.index(f'quyen: {q}, ten:')
    end = s.find('quyen: ', start + 10); end = len(s) if end < 0 else end
    block = s[start:end]
    m = re.search(r"\{ so: %d, ten: '[^']*'[^}]*\}" % b, block)
    if not m: print('không thấy', arg); continue
    item = m.group(0)
    if 'san: true' in item: print('đã mở', arg); continue
    new = item[:-1].rstrip() + ', san: true }'
    block = block.replace(item, new, 1)
    s = s[:start] + block + s[end:]
    print('mở', arg, new)
p.write_text(s, encoding='utf-8')
