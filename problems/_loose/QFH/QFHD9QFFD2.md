---
tag: QFHD9QFFD2
kind: problem
type: answer
answer: n = 1 and all positive even n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=442
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. In each cell of an $n \times n$ grid, we place a coin with either the head or the tail facing upwards. Each time we can select one cell, and flip all the $2^n - 1$ coins that lie in the same row or the same column as this cell. Find all $n$ such that it is always possible to have all the coins with the heads facing upwards after finitely many moves, no matter how we place the coins initially.
