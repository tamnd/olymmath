---
tag: NQKJFQ54QK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25875
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Natural numbers from 1 to $n$ are arranged in a row in any order (the number $n$ is fixed). An arrangement is called bad if in it one can mark 10 numbers (not necessarily consecutive) in decreasing order. All other arrangements are called good. Prove that the number of good arrangements does not exceed $81^{n}$.
