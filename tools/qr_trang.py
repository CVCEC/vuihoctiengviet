import cv2, subprocess, sys, os
pdf = sys.argv[1]; pages = [int(x) for x in sys.argv[2].split(',')]
det = cv2.QRCodeDetector()
for p in pages:
    import tempfile; base = os.path.join(tempfile.gettempdir(), f'qr-{p}')
    subprocess.run(['pdftoppm', '-r', '300', '-png', '-f', str(p), '-l', str(p), '-singlefile', pdf, base], check=True)
    g = cv2.cvtColor(cv2.imread(base + '.png'), cv2.COLOR_BGR2GRAY); h, w = g.shape
    found = set()
    tiles = [g] + [g[int(h*y0):int(h*y1), int(w*x0):int(w*x1)] for (y0, y1) in [(0, .35), (.3, .7), (.65, 1)] for (x0, x1) in [(0, .55), (.45, 1)]]
    for t in tiles:
        for s in [1.0, 2.0, 0.6]:
            r = cv2.resize(t, None, fx=s, fy=s)
            r = cv2.copyMakeBorder(r, 40, 40, 40, 40, cv2.BORDER_CONSTANT, value=255)
            try: v, _, _ = det.detectAndDecode(r)
            except Exception: v = ''
            if v: found.add(v)
    os.remove(base + '.png')
    print(p, sorted(found), flush=True)
