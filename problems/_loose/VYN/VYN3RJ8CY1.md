---
tag: VYN3RJ8CY1
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90002
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The fields of a board with 25 rows and 125 columns are alternately colored black and white (like the fields on a chessboard), and knight figures are placed on it, which attack according to special rules. A knight on a white field attacks all white fields in the same row and all black fields in the same column, while a knight on a black field attacks all black fields in the same row and all white fields in the same column (even if there is another figure in between). Determine the maximum number of knights that can be placed on the board so that they do not attack each other.
