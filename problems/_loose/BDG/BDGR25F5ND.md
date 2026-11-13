---
tag: BDGR25F5ND
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a grid 11x11 with 121 cells. Four of them are colored in black, the rest are white. We have to cut a completely white rectangle (it could be a square and the rectangle must have its sides parralel to the lines of the grid), so that this rectangle has maximal possible area. What largest area of this rectangle we can guarantee?
(We can cut this rectangle for every placement of the black squares)
