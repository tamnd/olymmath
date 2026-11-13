---
tag: 8QNJTEPYRX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}<\ldots<a_{n}$ be strictly positive integers. Suppose that for every pair of integers $(i, j)$ satisfying $1 \leqslant i<j \leqslant n$, the number $\frac{a_{i}}{a_{j}-a_{i}}$ is an integer.

1) Show that for any integer $m$ satisfying $1 \leqslant m \leqslant n-1, m a_{m+1} \leqslant(m+1) a_{m}$.
2) Show that if $i$ and $j$ are integers satisfying $1 \leqslant i<j \leqslant n$, then $i a_{j} \leqslant j a_{i}$.
