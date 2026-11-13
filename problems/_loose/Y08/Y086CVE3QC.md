---
tag: Y086CVE3QC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227386
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Gonçalo writes in a board four of the the following numbers $0, 1, 2, 3, 4$, he can repeat numbers. Nicolas can realize the following operation: change one number of the board, by the remainder(in the division by $5$) of the product of others two numbers of the board. Nicolas wins if all the four numbers are equal, determine if Gonçalo can choose numbers such that Nicolas will never win.
