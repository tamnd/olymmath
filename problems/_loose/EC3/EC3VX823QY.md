---
tag: EC3VX823QY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167573
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We want to assemble a regular triangle of side length $n$ without gaps using unit side length, red and blue triangular tiles, such that every red triangle has an even number of its sides touching the sides of blue triangles, and every blue triangle has an odd number of its sides touching the sides of blue triangles.

Show that such an assembly is possible and that the tiles placed at the vertices of the large triangle are of the same color.
