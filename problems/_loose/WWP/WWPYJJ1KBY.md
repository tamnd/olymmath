---
tag: WWPYJJ1KBY
kind: problem
type: answer
answer: 2^{99}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14639
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In each row of the $100 \times n$ table, the numbers from 1 to 100 are arranged in some order, with no repetitions within a row (the table has $n$ rows and 100 columns). It is allowed to swap two numbers in a row that differ by 1, provided they are not adjacent. It turns out that it is impossible to obtain two identical rows using such operations. For what largest $n$ is this possible?

(M. Antipov)
