---
tag: PXX204WXY2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231863
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a chessboard $6 \times 6$, made up of $36$ single squares. We want to place $6$ chess rooks on this board, one rook on each square, so that there are no two rooks on the same row, nor two rooks on the same column. Note that, once the rooks have been placed in this way, we have that, for every square where a rook has not been placed, there is a rook in the same row as it and a rook in the same column as it. We will say that such rooks are in line with this square.

For each of those $30$ houses without rooks, color it green if the two rooks aligned with that same house are the same distance from it, and color it yellow otherwise.

(a) Is it possible to place the rooks so that there are $30$ green squares?
(b) Is it possible to place the rooks so that there are $30$ yellow squares?
(c) Is it possible to place the rooks so that there are $15$ green and $15$ yellow squares?
