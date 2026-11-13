---
tag: NVDZDJ9K9Y
kind: problem
type: answer
answer: n(n-2004)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95003
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Xuan Tai Given a positive integer $n$ greater than 2004, fill the numbers $1,2,3, \cdots, n^{2}$ into the squares of an $n \times n$ chessboard (consisting of $n$ rows and $n$ columns) such that each square contains exactly one number. If a square contains a number that is greater than the numbers in at least 2004 squares in its row and at least 2004 squares in its column, then this square is called a "super square". Find the maximum number of "super squares" on the chessboard.
