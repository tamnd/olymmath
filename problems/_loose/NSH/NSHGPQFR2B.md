---
tag: NSHGPQFR2B
kind: problem
type: answer
answer: (5,9)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154468
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=185
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines Philippines Mathematical Olympiad
---
Let $(0,0),(10,0),(10,8)$, and $(0,8)$ be the vertices of a rectangle on the Cartesian plane. Two lines with slopes -3 and 3 pass through the rectangle and divide the rectangle into three regions with the same area. If the lines intersect above the rectangle, find the coordinates of their point of intersection.
