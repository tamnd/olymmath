---
tag: N9M2DCJ1YR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26033
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
With a convex quadrilateral $A B C D$, the following operation is performed: one of the given vertices is replaced by a point symmetric to this vertex with respect to the perpendicular bisector of the diagonal (of which it is not an endpoint), denoting the new point by the same letter. This operation is sequentially applied to the vertices $A, B$, $C, D, A, B, \ldots$ - a total of $n$ times. We call a quadrilateral admissible if its sides are pairwise distinct and it remains convex after any number of operations. Does there exist:

a) an admissible quadrilateral that becomes equal to the original after $n<5$ operations;

b) a number $n_{0}$ such that any admissible quadrilateral becomes equal to the original after $n=n_{0}$ operations?
