---
tag: GGE1AC40EE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55216
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>1$ be an integer. On an infinite white checkered board, a rook is placed in one of the cells. With each move, it shifts along the board exactly $n$ cells vertically or horizontally, coloring the $n$ cells it passes over in black. After making several such moves, without passing through any cell more than once, the rook returns to the starting cell. The black cells form a closed contour. Prove that the number of white cells inside this contour gives a remainder of 1 when divided by $n$.
