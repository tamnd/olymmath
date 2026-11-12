---
tag: CHHV2AD2ZG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=35407
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Rook on a chessboard. The chessboard we will use has as many rows as columns, but differs from a regular chessboard in that the arrangement of white and black squares can be arbitrary, provided that each column has at least one white square and at least one column is entirely white. We will say that we have successfully placed rooks (and we have a sufficient supply of them, so there will be no shortage) on the chessboard if we satisfy the following conditions: 1) rooks stand only on white squares, 2) there is at least one rook on the chessboard, 3) rooks do not attack each other (i.e., they are placed so that they cannot attack each other), 4) every white square not occupied by a rook, but under threat horizontally by a rook, is also under threat by some rook vertically.

Prove that it is always possible to place the rooks according to requirements 1), 2), 3), and 4).
