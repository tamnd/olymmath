---
tag: XD2EX42FER
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186179
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Investigate whether, for every entry of the natural numbers $1,2, \ldots, n^{2}$ into a chessboard-like $n \times n$-field square, there must be two adjacent fields in which the numbers have a difference of at least $k$!

Hints:

1. The mentioned entries should satisfy the conditions that each field receives exactly one number and that each number is used exactly once.
2. Two fields shall be called adjacent if and only if they share a side segment.
