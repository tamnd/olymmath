---
tag: SF88BTG0S2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214196
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alex and Bob play a game 2015 x 2015 checkered board by the following rules.Initially the board is empty: the players move in turn, Alex moves first. By a move, a player puts either red or blue token into any unoccopied square. If after a player's move there appears a row of three consecutive tokens of the same color( this row may be vertical,horizontal, or dioganal), then this player wins. If all the cells are occupied by tokens, but no such row appears, then a draw is declared.Determine whether Alex, Bob, or none of them has winning strategy.
