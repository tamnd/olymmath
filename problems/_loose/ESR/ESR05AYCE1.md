---
tag: ESR05AYCE1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a cube. On each edge of the cube, we write a number, either $1$ or $-1$. For each face of the cube, we multiply the four numbers on the edges of this face, and write the product on this face. Finally, we add all the eighteen numbers that we wrote down on the edges and face of the cube.

What is the smallest possible sum that we can get?
