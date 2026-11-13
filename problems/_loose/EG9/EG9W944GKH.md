---
tag: EG9W944GKH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=68106
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a sheet of grid paper measuring $n \times n$ cells, black and white cubes are placed, with each cube occupying exactly one cell. The first layer of cubes is placed arbitrarily, and then it is remembered that each black cube must border an even number of white cubes, and each white cube must border an odd number of black cubes. The cubes in the second layer are placed so that this condition is met for all cubes in the first layer. If this condition is already met for all cubes in the second layer, no more cubes are placed; if not, a third layer is placed so that the condition is met for all cubes in the second layer, and so on. Does there exist an arrangement of the first layer of cubes such that this process never ends?
