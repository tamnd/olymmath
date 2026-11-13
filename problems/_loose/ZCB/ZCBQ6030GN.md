---
tag: ZCBQ6030GN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In any rectangular game board with black and white squares, call a row $X$ a mix of rows $Y$ and $Z$ whenever each cell in row $X$ has the same colour as either the cell of the same column in row $Y$ or the cell of the same column in row $Z$. Let a natural number $m \ge 3$ be given. In some rectangular board, black and white squares lie in such a way that all the following conditions hold.
1) Among every three rows of the board, one is a mix of two others.
2) For every two rows of the board, their corresponding cells in at least one column have different colours.
3) For every two rows of the board, their corresponding cells in at least one column have equal colours.
4) It is impossible to add a new row with each cell either black or white to the board in a way leaving both conditions 1) and 2) still in force
Find all possibilities of what can be the number of rows of the board.
