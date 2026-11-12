---
tag: YJH3E7CHMP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52445
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an $n \times n$ table, each cell contains a number, and all numbers are distinct. In each row, the smallest number is marked, and all marked numbers turned out to be in different columns. Then, in each column, the smallest number is marked, and all marked numbers turned out to be in different rows. Prove that the same numbers were marked both times.
