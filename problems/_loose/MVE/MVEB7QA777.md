---
tag: MVEB7QA777
kind: problem
type: answer
answer: n(+1)(n+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91308
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m, n$ be natural numbers. Consider a square grid of $(2 m+1) \times$ $(2 n+1)$ points in the plane. A set of rectangles is called good if the following holds:

(a) For each of the rectangles, the four corner points lie on grid points and the sides are parallel to the grid lines.

(b) No two of the rectangles have a common corner point.

Determine the largest possible value of the sum of the areas of all rectangles in a good set.
