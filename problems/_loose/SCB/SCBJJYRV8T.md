---
tag: SCBJJYRV8T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=424
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbb{N}$, $n \ge 2$, and let $a_1, a_2, \dots, a_n$ be real numbers. Denote
$$
S = \sum_{1 \le i < j \le n} |a_j - a_i| \text{and} d = \max\{|a_j - a_i| \mid 1 \le i, j \le n\}.
$$

Prove that
$$
(n-1)d \le S \le \frac{n^2 d}{4}
$$
