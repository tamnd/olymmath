---
tag: 38BBYH4HDG
kind: problem
type: answer
answer: "978563412"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73881
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer is called zigzag if it satisfies the following three conditions:

- Its digits are non-zero and distinct.
- It does not have three consecutive digits in ascending order.
- It does not have three consecutive digits in descending order.

For example, 14385 and 2917 are zigzag, but 2564 and 71544 are not.

a) Find the largest zigzag number.

b) How many four-digit zigzag numbers exist?
