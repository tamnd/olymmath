---
tag: EKF17KTQZ6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85391
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For real numbers $a_{1}, a_{2}, \ldots, a_{n}$, all distinct, we compute the $\frac{n(n-1)}{2}$ sums $a_{i}+a_{j}$ with $1 \leq i<j \leq n$ and then sort these in ascending order. Determine all integers $n \geq 3$ for which there exist $a_{1}, a_{2}, \ldots, a_{n}$ such that this sequence of $\frac{n(n-1)}{2}$ sums forms an arithmetic progression (i.e., the difference between consecutive terms is always the same).
