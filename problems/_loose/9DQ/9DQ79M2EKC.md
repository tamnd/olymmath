---
tag: 9DQ79M2EKC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105360
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two sequences each consisting of 1958 numbers, where each number is either +1 or -1. Now, it is allowed to change the sign of any 11 terms in the second sequence at a time. Prove that after a finite number of such changes, the second sequence can be made identical to the first sequence, i.e., all corresponding terms are the same.
