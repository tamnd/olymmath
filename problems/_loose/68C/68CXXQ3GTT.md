---
tag: 68CXXQ3GTT
kind: problem
type: answer
answer: n \geq 5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253693
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, consider a square cake which is divided into $n \times n$ pieces with at most one strawberry on each piece. We say that such a cake is *delicious* if both diagonals are fully occupied, and each row and each column has an odd number of strawberries.
Find all positive integers $n$ such that there is an $n \times n$ delicious cake with exactly $\left\lceil\frac{n^2}{2}\right\rceil$ strawberries on it.
