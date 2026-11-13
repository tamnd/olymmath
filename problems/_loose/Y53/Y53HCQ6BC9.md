---
tag: Y53HCQ6BC9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102352
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a set of points $S$ consisting of $n(n>3)$ points in the plane, where no three points are collinear. Let $k\frac{n}{2}$ be a natural number, and each point in $S$ is connected by line segments to at least $k$ other points in $S$, then among these line segments, there must be 3 that form a triangle.
