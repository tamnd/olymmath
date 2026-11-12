---
tag: R4PENWD930
kind: problem
type: answer
answer: "6210001000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all ten-digit numbers such that the 1st digit of the number equals the number of zeros in its decimal representation, the 2nd digit - the number of ones, and so on up to the 10th digit, which equals the number of nines in the number's representation.
