---
tag: RQE82FTAY5
kind: problem
type: answer
answer: "30"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100063
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Five numbers $A, B, C, D, E$. Each time, one number is removed, and the average of the remaining 4 numbers is calculated. This process is repeated 5 times, resulting in the following five numbers: $23, 26, 30, 33, 38$. Find the average of $A, B, C, D, E$.
