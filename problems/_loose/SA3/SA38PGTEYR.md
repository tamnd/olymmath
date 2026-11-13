---
tag: SA38PGTEYR
kind: problem
type: answer
answer: (a, k, m) = (1, t+1, t)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223530
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triplets $(a, k, m)$ of positive integers that satisfy the equation $k + a^k = m + 2a^m$.
