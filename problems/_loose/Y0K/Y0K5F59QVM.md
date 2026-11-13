---
tag: Y0K5F59QVM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88016
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players, $A$ and $B$, play the following game: $A$ and $B$ alternately write one digit each until they write a six-digit number, with no digit being repeated. The first digit must be different from 0. Player $A$ plays first, and the digits are written from left to right. Player $A$ wins if the six-digit number is divisible by 2, 3, or 5, and otherwise, player $B$ wins. Prove that player $A$ has a winning strategy, i.e., can win regardless of how player $B$ plays.
