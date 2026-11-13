---
tag: FD0ZNAPY3G
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85823
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a table with two rows and five columns, each of the ten cells is colored black or white according to these rules:

- Two columns that are directly next to each other must never have the same number of black cells.
- Two $2 \times 2$ squares that overlap in one column must never contain the same number of black cells.

How many possible colorings of such a table exist that comply with these rules?
A) 6
B) 8
C) 12
D) 20
E) 24
