---
tag: XEC5WFD0ND
kind: problem
type: answer
answer: C = 1 if n is even; C = (n−1)/(n+1) if n is odd
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Let $n \ge 3$ be any natural number. A real number is written into every vertex of a regular $n$-gon in such a way that numbers in any two neighbouring vertices differ by at most $1$. Find the least non-negative real number $C$ such that, regardless of the choice of the numbers in the vertices, there exist two neighbouring vertices in which numbers differ by at most $C$.
