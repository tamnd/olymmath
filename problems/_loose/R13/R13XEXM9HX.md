---
tag: R13XEXM9HX
kind: problem
type: answer
answer: n\cdot2^{n-3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9955
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's call a snake in a convex $n$-gon an open, non-self-intersecting broken line with $n-1$ segments, the set of vertices of which coincides with the set of all vertices of the $n$-gon. Find the number of different snakes in an $n$-gon. (Snakes are equal if they coincide as geometric loci of points. For example, the number of snakes in a triangle is 3)
