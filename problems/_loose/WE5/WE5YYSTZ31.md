---
tag: WE5YYSTZ31
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139942
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Rectangular grid, each cell contains a positive number. Find the sum of the positive numbers in each row, and then find the product $p$ of these sums. Prove that if the positive numbers in each column are rearranged in non-decreasing order, i.e., the smallest positive number is written in the 1st row, and the largest positive number is written in the last row, then for this new number grid, the product $p$ will not exceed its original value.
