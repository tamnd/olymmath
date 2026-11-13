---
tag: PG0BGW3MRG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a checkers board (8 x 8), we place the 24 pieces of the game so that they fill the top 3 rows. We can change the position of the pieces according to the following rule: a piece can jump over another to an empty space, either horizontally (to the left or right), vertically (up or down), or diagonally. Can we manage to place all the pieces in the bottom 3 rows?
