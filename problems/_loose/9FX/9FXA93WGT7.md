---
tag: 9FXA93WGT7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
Let $n \ge 2$ be a positive integer and let $S = \{1, 2, \dots, n\}$.

For $k = 1, 2, \dots, n-1$, we call two $k$-element subsets of $S$ neighbours, if they have $k-1$ elements in common (i.e. differ by exactly one element). Let $f(n,k)$ be the size of the largest possible collection of $k$-element subsets of $S$, in which no two subsets are neighbours. Prove that $f(n,k) \le \binom{n-1}{k-1}$.
