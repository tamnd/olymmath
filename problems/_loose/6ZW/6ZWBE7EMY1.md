---
tag: 6ZWBE7EMY1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164829
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a triangle $A_{1} B_{1} C_{1}$, we construct equilateral triangles $A_{1} B_{1} C^{\prime}, B_{1} C_{1} A^{\prime}, C_{1} A_{1} B^{\prime}$ outward on its sides. The midpoints of the sides of the triangle $A^{\prime} B^{\prime} C^{\prime}$ form the triangle $A_{2} B_{2} C_{2}$. Similarly, we obtain the triangle $A_{n+1} B_{n+1} C_{n+1}$ from the triangle $A_{n} B_{n} C_{n}$ $(n=1,2, \ldots)$.

What can we say about the triangle $A_{n} B_{n} C_{n}$ as $n \rightarrow+\infty$?
