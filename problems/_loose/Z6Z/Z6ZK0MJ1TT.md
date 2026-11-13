---
tag: Z6ZK0MJ1TT
kind: problem
type: answer
answer: (mn + 1)(m + 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223574
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each field of the table $(mn + 1) \times (mn + 1)$ contains a real number from the interval $[0, 1]$. The sum the numbers in each square section of the table with dimensions $n x n$ is equal to $n$. Determine how big it can be sum of all numbers in the table.
