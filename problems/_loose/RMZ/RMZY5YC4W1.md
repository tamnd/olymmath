---
tag: RMZY5YC4W1
kind: problem
type: answer
answer: (4,9,3)(8,15,4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78118
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the integers $m \geqslant 2, n \geqslant 2$ and $k \geqslant 3$ having the following property: $m$ and $n$ each have $k$ positive divisors and, if we denote $d_{1}<\ldots<d_{k}$ the positive divisors of $m$ (with $d_{1}=1$ and $d_{k}=m$) and $d_{1}^{\prime}<\ldots<d_{k}^{\prime}$ the positive divisors of $n$ (with $d_{1}^{\prime}=1$ and $d_{k}^{\prime}=n$), then $d_{i}^{\prime}=d_{i}+1$ for every integer $i$ such that $2 \leqslant i \leqslant k-1$.
