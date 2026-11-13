---
tag: MCYP8RBSNP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91564
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A chess piece is placed on one corner of a chessboard, which is $n \times n$ squares in size. Two players take turns moving the piece to an adjacent square (a square that shares a common edge with the square the piece is on). The second move can be in any direction, but the piece cannot revisit squares it has already been on. The player who cannot make a move loses.
(a) Prove: if $n$ is even, the player who starts can win; if $n$ is odd, the second player can win.
(b) If the chess piece is initially placed not on a corner but on an adjacent square. Who will win in this case?
