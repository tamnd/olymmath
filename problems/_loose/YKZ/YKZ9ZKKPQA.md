---
tag: YKZ9ZKKPQA
kind: problem
type: answer
answer: k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $a, b, n, k$, satisfying $2 \leqslant a < b \leqslant n, k \geqslant 2$. In each cell of an $n \times n$ grid, a certain integer is filled. It is known that the sum of all numbers in any $a \times a$ subgrid is a multiple of $k$, and the sum of all numbers in any $b \times b$ subgrid is also a multiple of $k$. Find all $n$ such that the sum of all numbers in this grid is a multiple of $k$.
