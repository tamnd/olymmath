---
tag: VKVZKPQDEB
kind: problem
type: answer
answer: "15"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146804
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a natural number greater than 1, perform the following operations: if it is even, divide it by 2; if it is odd, subtract 1 first and then divide by 2. Continue this process until the result is 1, at which point the operations stop. Then, among all numbers that take exactly 3 operations to reach 1, the largest number is $ $.
