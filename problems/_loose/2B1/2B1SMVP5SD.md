---
tag: 2B1SMVP5SD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261503
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $ 7 \times 7$ grid of unit-length squares is given. Twenty-four $1 \times 2$ dominoes are placed in the grid, each covering two whole squares and in total leaving one empty space. It is allowed to take a domino adjacent to the empty square and slide it lengthwise to fill the whole square, leaving a new one empty and resulting in a different configuration of dominoes. Given an initial configuration of dominoes for which the maximum possible number of distinct configurations can be reached through any number of slides, compute the maximum number of distinct configurations.
