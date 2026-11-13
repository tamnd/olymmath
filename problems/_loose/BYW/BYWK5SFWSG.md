---
tag: BYWK5SFWSG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=67175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an $n \times n$ square of cells on an infinite chessboard, $n^{2}$ chips are placed, one chip in each cell. A move is defined as jumping any chip over an adjacent chip along a side, provided that the cell immediately beyond the jumped chip is free. The chip that was jumped over is then removed from the board. Prove that a position in which no further moves are possible will not occur before $\left[\frac{n^{2}}{3}\right]$ moves.
