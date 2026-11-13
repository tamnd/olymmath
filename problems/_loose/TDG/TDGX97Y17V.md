---
tag: TDGX97Y17V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have a stack of 100 coins. From there, it is possible to perform two types of operations:

1. remove a coin from a stack of at least 3 coins and divide the remaining stack into two stacks (non-empty) of any size, or
2. remove a stack of a single coin.

Is it possible, after a series of such operations, to reach a situation where there are no coins left
