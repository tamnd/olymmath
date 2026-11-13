---
tag: A2A2S58RER
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=81
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
設實數 $a_1, a_2, \dots, a_n$ ($n \ge 2$) 滿足 $-1 < a_1, a_2, \dots, a_n < 1$, 且 $\sum_{k=1}^n a_k^2 \ge 1$。
試證：
$$
\sum_{i<j} \left( \frac{1}{1-a_i^2} + \frac{1}{1-a_j^2} - \frac{1}{1-a_i a_j} \right) \ge \frac{n^2}{2}
$$
