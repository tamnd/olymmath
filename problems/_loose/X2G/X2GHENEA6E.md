---
tag: X2GHENEA6E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190458
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence of numbers $1,1,2,3,7,22,155, \ldots$ where each term, starting from the third, is equal to the product of the previous two terms plus 1. Prove that no term in the sequence is divisible by 4.