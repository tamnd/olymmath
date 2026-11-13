---
tag: ADN3AJ83GQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, determine all functions $f$ from the first $n$ positive integers to the positive integers, satisfying the following two conditions: **(1)** $\sum_{k=1}^{n}{f(k)}=2n$; and **(2)** $\sum_{k\in K}{f(k)}=n$ for no subset $K$ of the first $n$ positive integers.
