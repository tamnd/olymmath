---
tag: Q1V3BNS8K9
kind: problem
type: answer
answer: 2^{n+2}-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171452
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$A z A(0,0), B(n, 0), C(n, n)$ and $D(0, n)$ points define a square. We color the lattice points on the boundary and inside of this square red or green such that for every unit square within the square, exactly two of its vertices are red. How many ways can we do this?
