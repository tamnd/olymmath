---
tag: 6WGBQVQV1P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162441
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n^{2}$ distinct integers be given, each placed on a square of $n \times n$ chessboard $(n \geq 2)$.

Show that it is possible to select $n$ numbers, one from each row and column, so that if the number selected from any row is greater than another number in this row, then this last number is less than the number selected from its column.
