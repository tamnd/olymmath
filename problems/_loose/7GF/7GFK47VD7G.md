---
tag: 7GFK47VD7G
kind: problem
type: answer
answer: +n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A table with $m$ rows and $n$ columns is given. At any move one chooses some empty cells such that any two of them lie in different rows and columns, puts a white piece in any of these cells and then puts a black piece in the cells whose lines and columns contain white pieces. The game is over if it is not possible to make a move. Find the maximum possible number of the white pieces that can be put on the table.
