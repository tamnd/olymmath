---
tag: NFCYHVD7AX
kind: problem
type: answer
answer: '|S| \leq n + m - 1'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247308
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ m,n$ be two natural nonzero numbers and sets $ A = \{ 1,2,...,n\}, B = \{1,2,...,m\}$. We say that subset $ S$ of Cartesian product $ A \times B$ has property $ (j)$ if $ (a - x)(b - y)\le 0$ for each pairs $ (a,b),(x,y) \in S$. Prove that every set $ S$ with propery $ (j)$ has at most $ m + n - 1$ elements.
