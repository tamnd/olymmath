---
tag: WWCGEJQ8B8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=71421
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of numbers: $0,1,1,2,3,5,8,13,21,34,55,89, \ldots$, in which each number, starting from the third, is equal to the sum of the two preceding ones. Will there be a number among the first $10^{8}+1$ terms of this sequence that ends with four zeros?
