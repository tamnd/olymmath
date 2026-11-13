---
tag: S8Y5E24ZRD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=71725
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given 16 numbers: 1, 11, 21, 31, and so on (each subsequent number is 10 more than the previous one).

Can they be arranged in a $4 \times 4$ table so that the difference between any two numbers in adjacent cells (sharing a side) is not divisible by 4?
