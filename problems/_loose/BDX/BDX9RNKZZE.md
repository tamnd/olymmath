---
tag: BDX9RNKZZE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Divide a line segment of length $3^{n}$ into three equal parts, and call the 1st and 3rd parts "marked". Then divide each marked line segment into three equal parts, and still call the 1st and 3rd parts marked. Continue this process until line segments of length 1 are marked. Call the endpoints of each marked line segment "marked points". Try to prove that for any integer $k\left(1 \leqslant k \leqslant 3^{n}\right)$, there exists a pair of marked points such that the distance between them is $k$.
