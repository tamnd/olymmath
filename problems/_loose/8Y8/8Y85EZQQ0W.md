---
tag: 8Y85EZQQ0W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irish
---
Suppose $p \ge 1$ and $a$, $b$, $c$ are the side lengths of a triangle. Prove that
$$
2(a^p + b^p + c^p) < (a+b+c)(a^{p-1} + b^{p-1} + c^{p-1}) \le 3(a^p + b^p + c^p).
$$
