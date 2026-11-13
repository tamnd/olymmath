---
tag: KG6GB3TFXN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the plane, we have a triangle $ABC$ and a circular disk which can cover the triangle such that none of its vertices lie on the circumference. Using only this circular disk, construct the vertex $D$ of the parallelogram $ABCD$. (In other words: we have a segment of length $R$, which is larger than the radius of the circumcircle of triangle $ABC$. Our construction can only consist of steps where, given two points in the plane (either given or determined in previous steps), we draw a circle of radius $R$ passing through them. The intersection points of the drawn circles are considered determined.)
