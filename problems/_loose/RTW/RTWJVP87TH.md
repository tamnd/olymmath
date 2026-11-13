---
tag: RTWJVP87TH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220732
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The perfect square game is played as follows: player 1 says a positive integer, then player 2 says a strictly smaller positive integer, and so on. The game ends when someone says 1; that player wins if and only if the sum of all numbers said is a perfect square. What is the sum of all $n$ such that, if player 1 starts by saying $n$, player 1 has a winning strategy? A winning strategy for player 1 is a rule player 1 can follow to win, regardless of what player 2 does. If player 1 wins, player 2 must lose, and vice versa. Both players play optimally.

*Proposed by Jacob Stavrianos*
