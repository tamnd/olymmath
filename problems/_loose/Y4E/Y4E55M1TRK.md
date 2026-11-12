---
tag: Y4E55M1TRK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In all cells of an $n \times n$ chessboard, except one, there are signs "+", and in one cell there is a sign "-"; moreover,
a) $n=4$ and the sign "-" is on the edge of the board, but not in its corner;

b) $n=8$ and the sign "-" is not in the corner of the board.

It is allowed to simultaneously change all signs in one (arbitrarily chosen) column, or in one (arbitrary) row, or in one (arbitrarily selected) "diagonal" row, parallel to the diagonal of the board. (In particular, the sign in any corner cell, which forms a separate "diagonal" row, can be changed.) Prove that it is impossible to get rid of the sign "-" by any number of "permissible" changes of signs, i.e., to arrive at a board where all cells have the sign "+".
