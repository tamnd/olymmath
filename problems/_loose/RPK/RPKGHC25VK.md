---
tag: RPKGHC25VK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is an $n \times n$ table, in $n-1$ cells of which ones are written, and in all other cells - zeros. The following operation is allowed with the table: choose a cell, subtract one from the number in this cell, and add one to all other numbers in the same row or column as the chosen cell. Is it possible to obtain a table in which all numbers are equal using these operations?
