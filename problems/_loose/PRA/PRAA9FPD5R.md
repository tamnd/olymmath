---
tag: PRAA9FPD5R
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14031
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a grid table with 5 rows and 6 columns, each cell contains either a cross, a zero, or a star. It is known that:

- in each column, the number of zeros is not less than the number of crosses;
- in each column, the number of zeros is not less than the number of stars;
- in each row, the number of crosses is not less than the number of zeros;
- in each row, the number of crosses is not less than the number of stars.

How many stars can be in such a table? List all possible options.
