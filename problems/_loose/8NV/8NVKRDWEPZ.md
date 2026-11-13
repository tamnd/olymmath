---
tag: 8NVKRDWEPZ
kind: problem
type: answer
answer: n(n-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122078
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fill all integers from 1 to $n^{2}$ into an $n \times n$ square grid according to the following rules: 1 can be placed in any cell, the row of 2 should have the same column index as the column of 1, the row of 3 should have the same column index as the column of 2, and so on. What is the difference between the sum of all numbers in the row where 1 is located and the sum of all numbers in the column where $n^{2}$ is located?
