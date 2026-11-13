---
tag: TWAKG03ZX7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a four digit string $ k=\overline{abcd} $, $ a, b, c, d\in \{0, 1, \cdots, 9\} $, prove that there exist a $n<20000$ such that $2^n$ contains $k$ as a substring when written in base $10$.

[Extra: Can you give a better bound? Mine is $12517$]
