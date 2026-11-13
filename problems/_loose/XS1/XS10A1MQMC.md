---
tag: XS10A1MQMC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124597
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $0,1,1,2,3,5,8, \cdots$ starting from the 3rd term, each term is the sum of the two preceding ones. Is there a term in the first 100000001 terms of this sequence whose last 4 digits are all 0?
