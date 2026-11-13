---
tag: 9VTSJZJGZD
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223618
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An integer $n\ge1$ is *good * if the following property is satisfied:
If a positive integer is divisible by each of the nine numbers $n + 1, n + 2, ..., n + 9$, this is also divisible by $n + 10$.
How many good integers are $n\ge 1$?
