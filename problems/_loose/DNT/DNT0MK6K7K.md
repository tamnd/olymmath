---
tag: DNT0MK6K7K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=23
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Round 3
---
Let $d_1, d_2, \dots, d_n$ be nonnegative real numbers satisfying $1 \ge d_1 \ge \dots \ge d_n \ge 0$. Prove
$$
\frac{(1 + d_1 + d_2 + \dots + d_n)^2}{n + 1} \ge 2 \cdot \frac{d_1^2 + 2d_2^2 + \dots + n d_n^2}{n}.
$$
