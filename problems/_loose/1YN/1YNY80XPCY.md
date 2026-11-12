---
tag: 1YNY80XPCY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23217
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two sequences of letters A and B, each containing 100 letters. In one operation, it is allowed to insert one or more identical letters into some position in the sequence (possibly at the beginning or end) or to remove one or more consecutive identical letters from the sequence. Prove that the first sequence can be transformed into the second one in no more than 100 operations.

(V. Novikov)
