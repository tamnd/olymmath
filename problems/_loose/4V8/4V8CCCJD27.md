---
tag: 4V8CCCJD27
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112095
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an infinitely expandable chessboard, a game proceeds according to the following rules: first, $n^{2}$ pieces are placed in an $n \times n$ square grid of connected small squares, with one piece in each small square. Each step of the game involves moving one piece horizontally or vertically over an adjacent square that contains a piece, into another square, provided that square is empty; otherwise, it is not allowed, and the piece that was jumped over is then removed. Find all values of $n$ such that the game can end with only one piece remaining on the board.
