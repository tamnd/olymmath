---
tag: KGNR7MZ211
kind: problem
type: answer
answer: (m, n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260482
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of positive integers (m, n) for which it is possible to
paint each unit square of an m*n chessboard either black or white
in such way that, for any unit square of the board, the number
of unit squares which are painted the same color as that square
and which have at least one common vertex with it (including the
square itself) is even.
