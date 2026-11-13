---
tag: 162YMHXC5B
kind: problem
type: answer
answer: n\binom{n-4}{4}2^{n-9}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93498
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer greater than 7. $P$ is a convex polygon with $n$ sides. Any $n-3$ non-intersecting diagonals of $P$ divide $P$ into $n-2$ triangles. In the triangulation of $P$, a triangle is called an inner triangle if all its sides are diagonals of $P$. If the triangulation of $P$ has exactly two inner triangles, express the number of triangulations of $P$ in terms of $n$.
