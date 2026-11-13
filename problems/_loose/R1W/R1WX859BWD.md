---
tag: R1WX859BWD
kind: problem
type: answer
answer: 6^{(n-2)^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. In how many ways can an $n \times n$ table be filled with integers from $0$ to $5$ such that
a) the sum of each row is divisible by $2$ and the sum of each column is divisible by $3$
b) the sum of each row is divisible by $2$, the sum of each column is divisible by $3$ and the sum of each of the two diagonals is divisible by $6$?
