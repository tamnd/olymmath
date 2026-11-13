---
tag: CGZX25MDD3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=22
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $n \in \mathbb{N}^*$ and $x_0 < x_1 < x_2 < \dots < x_n$ are real numbers, show that
$$
2x_n + \frac{1}{(x_1 - x_0)^2} + \frac{1}{(x_2 - x_1)^2} + \dots + \frac{1}{(x_n - x_{n-1})^2} \ge 3n + 2x_0.
$$
