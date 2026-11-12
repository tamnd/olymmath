---
tag: A2QSV18PVD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25574
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the cells of a $3 \times 3$ square table, the numbers 1 or -1 are written. For each cell of the table, we compute the product of the numbers in the adjacent cells (adjacent cells are those that share a common side). We then write the computed products in the cells of the table instead of the numbers that were there before, and perform the same operation with the new table, and so on. Prove that after a certain number of such operations, the table will contain only ones.
