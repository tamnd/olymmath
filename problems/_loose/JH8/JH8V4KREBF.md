---
tag: JH8V4KREBF
kind: problem
type: answer
answer: n = 14
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251623
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ a_1, a_2,\ldots ,a_8$ be $8$ distinct points on the circumference of a circle such that no three chords, each joining a pair of the points, are concurrent. Every $4$ of the $8$ points form a quadrilateral which is called a *quad*. If two chords, each joining a pair of the $8$ points, intersect, the point of intersection is called a *bullet*. Suppose some of the bullets are coloured red. For each pair $(i j)$, with $ 1 \le i < j \le 8$, let $r(i,j)$ be the number of quads, each containing $ a_i, a_j$ as vertices, whose diagonals intersect at a red bullet. Determine the smallest positive integer $n$ such that it is possible to colour $n$ of the bullets red so that $r(i,j)$ is a constant for all pairs $(i,j)$.
