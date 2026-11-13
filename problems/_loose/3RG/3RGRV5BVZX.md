---
tag: 3RGRV5BVZX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242947
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 2$ be a positive integer. An $n\times n$ grid of squares has been colored as a chessboard. Let a *move* consist of picking a square from the board and then changing the colors to the opposite for all squares that lie in the same row as the chosen square, as well as for all squares that lie in the same column (the chosen square itself is also changed to the opposite color). Find all values of $n$ for which it is possible to make all squares of the grid be the same color in a finite sequence of moves.
