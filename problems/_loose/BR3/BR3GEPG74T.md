---
tag: BR3GEPG74T
kind: problem
type: answer
answer: \left(\frac{5}{3}\right)^k - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244308
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k{}$ be a positive integer. For every positive integer $n \leq 3^k$, denote $b_n$ the greatest power of $3$ that divides $C_{3^k}^n$. Compute $\sum_{n=1}^{3^k-1} \frac{1}{b_n}$.
