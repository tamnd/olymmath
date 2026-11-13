---
tag: FY2VQPDK59
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We write positive integers on the edges of a tetrahedron. In one step, we can change the numbers written on the edges in the following way. We select a vertex, and on the three edges starting from it, we write the following: on each edge, the difference of the numbers written on the other two edges starting from the selected vertex, where when writing the difference of $a$ and $b$, we can freely choose between $a-b$ and $b-a$, and on the third edge, the sum of the numbers written on the other two edges starting from the selected vertex. Can it happen that after some steps, 0 is written on every edge?
