---
tag: E3QE10AFF1
kind: problem
type: answer
answer: n!\cdot2^{(n-1)^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88158
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number. In how many ways can we fill an $n \times n$ table with the numbers $1, 2, -1, -2$ such that the product of the numbers in each row is equal to -2 and the product of the numbers in each column is also equal to -2?
