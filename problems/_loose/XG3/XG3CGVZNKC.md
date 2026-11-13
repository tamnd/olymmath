---
tag: XG3CGVZNKC
kind: problem
type: answer
answer: 2^k-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84791
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 1$ be a positive integer. Consider a line of $n$ lamps. Initially, some of the lamps are on, and each minute, the lamps that have exactly one neighboring lamp on turn on, and the others turn off (the lamps at the ends have only one neighboring lamp).

For which integers $n$ are we certain that, regardless of the initial configuration of the lamps, they will all be off after a certain time?
