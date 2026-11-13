---
tag: YPMR1VTYT7
kind: problem
type: answer
answer: 2^{2023}-2024
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77604
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Count the number of rearrangements $a_{1}, a_{2}, \ldots, a_{2023}$ of the sequence $1,2, \ldots, 2023$ such that $a_{k}>k$ for exactly one value of $k$.
