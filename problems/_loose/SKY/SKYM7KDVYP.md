---
tag: SKYM7KDVYP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187210
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of polygons is derived as follows. The first polygon is a regular hexagon of area 1. Thereafter each polygon is derived from its predecessor by joining to adjacent edge midpoints and cutting off the corner. Show that all the polygons have area greater than $1 / 3$.
