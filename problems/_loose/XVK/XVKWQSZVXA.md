---
tag: XVKWQSZVXA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a table with 4 rows, in the first row, any natural numbers are written, these numbers may be the same. In the second row, fill in the numbers as follows: from left to right, when seeing $a$ in the first row, if $a$ has already appeared $k$ times in the first row, then fill in $k$ below $a$. Similarly, the third row can be written based on the second row, and the fourth row can be written based on the third row.
Prove: the second row and the fourth row will always be the same.
