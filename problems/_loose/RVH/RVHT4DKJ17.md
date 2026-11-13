---
tag: RVHT4DKJ17
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221524
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Stekel and Prick play a game on an $ m \times n$ board, where $m$ and $n$ are positive are integers. They alternate turns, with Stekel starting. Spine bets on his turn, he always takes a pawn on a square where there is no pawn yet. Prick does his turn the same, but his pawn must always come into a square adjacent to the square that Spike just placed a pawn in on his previous turn. Prick wins like the whole board is full of pawns. Spike wins if Prik can no longer move a pawn on his turn, while there is still at least one empty square on the board. Determine for all pairs $(m, n)$ who has a winning strategy.
