---
tag: QEBXP4787V
kind: problem
type: answer
answer: 1,2,3,4,5-5556
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=36264
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each natural number from 1 to 50000 is replaced by the number equal to the sum of its digits. The same operation is performed with the resulting numbers, and this is repeated until all numbers become single-digit. How many times will each of the integers from 0 to 8 appear among these single-digit numbers?
