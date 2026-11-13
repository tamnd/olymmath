---
tag: YXRRAC22S4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove the inequality
$$\sum _{k = 1} ^n (x_k - x_{k-1})^2 \geq 4 \sin ^2 \frac{\pi}{2n} \cdot \sum ^n _{k = 0} x_k ^2$$
for any sequence of real numbers $x_0, x_1, ..., x_n$ for which $x_0 = x_n = 0.$
