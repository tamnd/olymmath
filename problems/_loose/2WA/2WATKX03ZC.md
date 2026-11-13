---
tag: 2WATKX03ZC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=72122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three people are playing "rock-paper-scissors." In each round, each player randomly shows "rock," "scissors," or "paper." "Rock" beats "scissors," "scissors" beat "paper," and "paper" beats "rock." If exactly two different elements are shown in a round (which means one of them was shown twice), the player(s) who showed the winning element get 1 point each; otherwise, no points are awarded. After several rounds, it turned out that all elements were shown an equal number of times. Prove that at this moment, the total number of points scored by all players is divisible by 3.
