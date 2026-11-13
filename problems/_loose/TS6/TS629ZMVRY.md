---
tag: TS629ZMVRY
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162016
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In each cell of a $100 \times 100$ table, a number from the interval $[-1,1]$ is written. The sum of all the numbers is 0, the sum of all the numbers in each row in absolute value is at least $c$, and the sum of all the numbers in each column in absolute value is at least $c$. Find the largest possible value of $c$.
