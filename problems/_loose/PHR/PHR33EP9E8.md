---
tag: PHR33EP9E8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8051
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The cells of a $2015 \times 2015$ board are colored in a checkerboard pattern such that the corner cells are black. A token is placed on one of the black cells, and another black cell is marked. In one move, it is allowed to move the token to an adjacent cell. Is it always possible to traverse all the cells of the board with the token, visiting each cell exactly once, and end the traversal in the marked cell? (Two cells are considered adjacent if they share a side.)
