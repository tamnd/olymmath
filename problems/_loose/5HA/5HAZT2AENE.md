---
tag: 5HAZT2AENE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The board is an empty $2018 \times 2018$ table. Players A and B alternately, starting with player A, choose one column on the board (which must not be completely filled) and write one digit from 0 to 9 in the first empty cell (viewed from top to bottom). However, the digit 0 must not be written in the cells of the first row and the first column. After $2018^{2}$ moves, the digits in each row form a 2018-digit number, and the digits in each column form a 2018-digit number. Player A wins if at least two of these 4036 numbers are prime, and player B wins otherwise. Which player has a winning strategy?
