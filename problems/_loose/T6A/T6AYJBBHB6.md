---
tag: T6AYJBBHB6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=2
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. For each positive integer $k \le n$, let $r_k$ denote the remainder $2^n$ leaves upon division by $k$. Prove that
$$
\sum_{k=1}^{n} r_k > \frac{n}{2} \left( \log_2 \frac{n}{3} - 2 \right).
$$
