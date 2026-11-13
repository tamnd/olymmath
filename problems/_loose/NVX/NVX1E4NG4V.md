---
tag: NVX1E4NG4V
kind: problem
type: answer
answer: \frac{n}{4}(n+1+2\sqrt{\frac{(n+1)(2n+1)}{6}})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128740
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n(n>1)$ be a given positive integer, and $x_{1}, x_{2}, \cdots, x_{n}$ be any real numbers, satisfying $\sum_{i=1}^{n} x_{i}^{2}=1$. Find the maximum value of $\sum_{k=1}^{n} k x_{k}^{2}+\sum_{1 \leqslant i<j \leqslant n}(i+j) x_{i} x_{j}$.
