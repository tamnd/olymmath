---
tag: 9VG2SJN51S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55085
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the segment $[0,1]$. In one move, it is allowed to split any of the existing segments by a point into two new segments and write the product of the lengths of these two new segments on the board.

Prove that at no point will the sum of the numbers on the board exceed $1 / 2$.
