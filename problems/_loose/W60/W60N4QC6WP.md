---
tag: W60N4QC6WP
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85491
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a $5 \times 5$ table, we place the numbers 1 through 5 such that each number appears exactly once in each row and each column. A number in a specific row and column of the table is correctly placed if the following two conditions are met:

- In that row, all smaller numbers are to the left of the number and all larger numbers are to the right, or vice versa.
- In that column, all smaller numbers are below the number and all larger numbers are above, or vice versa.

What is the maximum number of correctly placed numbers in such a table?
