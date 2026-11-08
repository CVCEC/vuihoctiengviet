"""Phiên âm các file thu âm trong nguon-am-thanh/ (chạy trên GitHub Actions).
Mỗi file .mp3 sinh ra một file .json cùng tên: các đoạn và từng từ kèm thời điểm (giây)."""
import json
import pathlib
from faster_whisper import WhisperModel

root = pathlib.Path("nguon-am-thanh")
import os
shard, n = int(os.environ.get("SHARD", 0)), int(os.environ.get("NSHARD", 1))
todo = [p for p in sorted(root.rglob("*.mp3")) if not p.with_suffix(".json").exists()]
todo = [p for i, p in enumerate(todo) if i % n == shard]
print(f"Cần phiên âm: {len(todo)} file")
if todo:
    model = WhisperModel("medium", device="cpu", compute_type="int8")
    for mp3 in todo:
        segs, info = model.transcribe(
            str(mp3), language="vi", word_timestamps=True, vad_filter=False,
            beam_size=5, condition_on_previous_text=False,
            initial_prompt="Vui học tiếng Việt. Từ ngữ. Hội thoại. Học chữ. Luyện đọc. Nhìn hình, nghe và nhắc lại.")
        data = [{"start": round(s.start, 2), "end": round(s.end, 2), "text": s.text.strip(),
                 "words": [{"w": w.word.strip(), "s": round(w.start, 2), "e": round(w.end, 2), "p": round(w.probability, 2)} for w in (s.words or [])]}
                for s in segs]
        mp3.with_suffix(".json").write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
        print(mp3, "→", " | ".join(d["text"] for d in data))

