---
tag: AFHXNR6JV5
kind: problem
type: answer
answer: (2;3),(3;2),(2;5),(5;2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182807
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all pairs $(p ; q)$ of prime numbers $p$ and $q$ that satisfy the following conditions:

1. Their sum $P$ is also a prime number.
2. The product of the three prime numbers $p ; q ; P$ is divisible by 10.
