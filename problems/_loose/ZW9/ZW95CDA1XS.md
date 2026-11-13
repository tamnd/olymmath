---
tag: ZW95CDA1XS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136371
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an $n \times n$ grid, each cell is filled with a real number, and the sum of the numbers in each row and each column is equal to 0. Now, we are allowed to perform the following operation: choose any row of numbers and add them to a column of numbers (i.e., add the first number of the row to the first number of the column, add the second number to the second number, and so on; number the numbers in the row from left to right and the numbers in the column from top to bottom), and subtract the row numbers from another column of numbers. Prove: it is possible to make all the numbers in the table 0 after a finite number of such operations.
