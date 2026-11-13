---
tag: 37RPD5E1BT
kind: problem
type: answer
answer: 2n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170487
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An $n \times n$ table is filled with real numbers such that the elements decrease monotonically in every row and every column. We want to decide whether a number $a$ is in the table. For this, we can compare $a$ with any element of the table. How many comparisons are needed to solve the problem for sure?
