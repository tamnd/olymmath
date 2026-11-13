---
tag: H3HTMV6SVX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=13
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prickle and Sting are playing a game on an $m \times n$-board, where $m$ and $n$ are positive integers. They alternatingly take turns, and Prickle goes first. Prickle must, during his turn, place a pawn on a square which doesn't contain a pawn yet. Sting must, during his turn, also place a pawn on a square which doesn't contain a pawn yet, but additionally, his pawn must be placed in a square that is adjacent to the square in which Prickle placed his pawn the previous turn.

Sting wins once the entire board is completely filled with pawns. Prickle wins if Sting cannot place a pawn in his turn, while there is at least one empty square on the board.

Determine for all pairs $(m, n)$ of positive integers which of Prickle and Sting has a winning strategy.
