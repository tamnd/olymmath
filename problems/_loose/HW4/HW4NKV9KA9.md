---
tag: HW4NKV9KA9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a square table $n \times n$, two players $A$ and $B$ are playing the following game: At the beginning all cells of the table are empty, and the players alternate playing with coins. Player $A$ has the first move, and in each of the moves a player will put a coin on some of the cells that doesn't contain a coin and is not adjacent to any of the cells that already contains a coin. The player who makes the last move is the winner. Which player has a winning strategy and what is the strategy?

Remark. The cells are adjacent if they share an edge.
