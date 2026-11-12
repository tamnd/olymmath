---
tag: Q5J87YEYEX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25431
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will call a triangle "large" if the lengths of all its sides are greater than 1. Given an equilateral triangle $ABC$ with a side length of 5. Prove that:

a) from triangle $ABC$, 100 "large" triangles can be cut out;

b) triangle $ABC$ can be completely cut into no fewer than 100 "large" triangles.

c)* triangle $ABC$ can be cut into no fewer than 100 "large" triangles, while satisfying the following condition: any two "large" triangles either do not intersect, or have exactly one common vertex, or one side of one is a side of the other. (Such a cutting is called a triangulation.)

d)* solve problems b) and c) for an equilateral triangle with a side length of 3.
