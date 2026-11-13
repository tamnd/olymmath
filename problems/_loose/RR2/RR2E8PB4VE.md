---
tag: RR2E8PB4VE
kind: problem
type: answer
answer: n = 4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241853
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integers $n$ greater than or equal to $4$ that satisfy the following conditions:

- Take an arbitrary convex $n$-gon $P$ on the coordinate plane whose vertices are lattice points (points whose coordinates are both integers). There are a total of $n$ triangles that share two sides with $P$. Let $S_1, S_2, \ldots, S_n$ be their areas, and let $S$ be the area of $P$. Then, the greatest common divisor of $2S_1, 2S_2, \ldots, 2S_n$ divides the integer $2S$.
