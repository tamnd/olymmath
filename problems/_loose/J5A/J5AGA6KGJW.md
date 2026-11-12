---
tag: J5AGA6KGJW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 South Africa National Olympiad
    url: https://artofproblemsolving.com/community/c6h3620978
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2929
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: za-samo/2025
    source: hf-ai-mo-aops
    label: 2025 South Africa National Olympiad
---
Let $n$ be a positive integer.
We say that an $n \times n$ grid of integers is *good* if

- it contains the integers from $1$ to $n^2$ exactly once each; and
- for each row, the largest number in that row is also the largest number in its column.

How many good $n \times n$ grids are there?
