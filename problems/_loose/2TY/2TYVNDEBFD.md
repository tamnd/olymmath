---
tag: 2TYVNDEBFD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6887
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an infinite checkers board, two black checkers are placed on two diagonally adjacent cells. Is it possible to add several black checkers and one white checker to the board so that the white checker can eat all the black checkers (including the two initially placed) in one move?

Recall that a checker eats a diagonally adjacent checker by jumping over it to the next diagonal cell (which must be free); in one move, a checker can eat several checkers in a row, and the eaten checkers are not removed from the board until the move is completed.
