---
tag: HZ6NJY4QRA
kind: problem
type: answer
answer: One example is 175. There are infinitely many special numbers.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Call a number *interesting* if it can be represented as the sum of squares of three distinct non-negative integers. For example, the number $5$ is interesting, because $5 = 0^2 + 1^2 + 2^2$. Call a number *special* if it is not interesting, but can be represented as the product of two distinct interesting numbers.

a. Find one special number.

b. Prove that there are infinitely many special numbers.
