---
tag: PD5FG2BDTJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243567
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An equilateral triangle $ABC$ has sides of length $n$, a positive integer. Divide the triangle into equilateral triangles of length $ 1$, drawing parallel lines (at distance $ 1$) to all sides of the triangle. A path is a continuous path, starting at the triangle with vertex $A$ and always crossing from one small triangle to another on the side that both triangles share, in such a way that it never passes through a small triangle twice. Find the maximum number of triangles that can be visited.
