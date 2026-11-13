---
tag: JGYZYP61EK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Stekel and Prik are playing a game on an $m \times n$ board, where $m$ and $n$ are positive integers. They take turns, with Stekel starting. Stekel always places a pawn on a square that does not yet have a pawn in his turn. Prik does the same in his turn, but his pawn must always be placed in a square that shares a side with the square where Stekel placed a pawn in his previous turn. Prik wins if the entire board is filled with pawns. Stekel wins if Prik cannot place a pawn in his turn, even though there is still at least one empty square on the board. Determine for all pairs $(m, n)$ who has a winning strategy.
