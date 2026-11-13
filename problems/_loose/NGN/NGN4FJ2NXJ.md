---
tag: NGN4FJ2NXJ
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85998
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider $5 \times 5$ tables with 25 numbers written in them. The same number can appear multiple times, but in no row or column does the same number appear five times. We call such a table beautiful if in each row the middle number is the average of the numbers in that row, and in each column the middle number is the average of the numbers in that column. The score of a beautiful table is the number of numbers in the table that are smaller than the number that is exactly in the middle of the table.

What is the smallest possible score of a beautiful table?
