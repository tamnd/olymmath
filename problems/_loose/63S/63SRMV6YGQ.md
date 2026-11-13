---
tag: 63SRMV6YGQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=53
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f : [0, 1] \to \mathbb{R}$ be a continuous function and $n \ge 3$ be an integer. Show that one can find $n$ numbers $a_1, a_2, \dots, a_n$ in the interval $[0, 1]$, in arithmetic progression, such that
$$
\int_{0}^{1} f(x) dx = \frac{1}{n} \sum_{k=1}^{n} f(a_k).
$$
