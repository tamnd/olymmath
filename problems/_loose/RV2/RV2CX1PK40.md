---
tag: RV2CX1PK40
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A piece representing a king is placed on a square of a $6 \times 6$ chessboard. This piece can move by jumping in horizontal or vertical directions, and the length of each jump alternates between 1 square and 2 squares (the distance between adjacent squares is considered 1, and the first jump is 1 square), and squares that have been jumped to cannot be jumped to again. Question: Is it possible to find an initial square such that the piece, starting from this square, can jump to every square exactly once in 35 jumps?
