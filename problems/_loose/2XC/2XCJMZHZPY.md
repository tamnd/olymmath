---
tag: 2XCJMZHZPY
kind: problem
type: answer
answer: "726"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Write the 4 numbers $1,9,8,8$ in a row and perform the following operation: for each pair of adjacent numbers, subtract the left number from the right number, and write the difference between these two numbers, which counts as one operation. Then, perform the same operation on the row of 7 numbers thus obtained. Continue this process for a total of 100 operations. Find the sum of the final row of numbers.
