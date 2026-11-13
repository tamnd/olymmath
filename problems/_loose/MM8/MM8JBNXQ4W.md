---
tag: MM8JBNXQ4W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133357
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a $3 \times 3$ grid, each cell contains either 1 or -1. Then, each cell's number is replaced by the product of all adjacent (sharing a common edge) cells. Prove that after several such transformations, all cells will contain 1.
