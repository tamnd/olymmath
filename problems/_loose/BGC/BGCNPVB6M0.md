---
tag: BGCNPVB6M0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112307
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an $n \times n$ grid, some cells are marked with stars. It is known that after arbitrarily deleting some rows (but not all rows), there is always a column that contains exactly 1 star that has not been deleted (in particular, if no row is deleted, there should also be a column with exactly 1 star). Prove that after arbitrarily deleting some columns (as long as not all columns), there will also be a row that contains exactly 1 star that has not been deleted.
