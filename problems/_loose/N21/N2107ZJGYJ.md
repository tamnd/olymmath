---
tag: N2107ZJGYJ
kind: problem
type: answer
answer: "110"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85519
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sawtooth number is a positive integer with the following property: of each triplet of adjacent digits, the middle digit is either greater than its two neighboring digits or smaller than its two neighboring digits. The numbers 352723 and 314 are, for example, sawtooth numbers, but 3422 and 1243 are not.

How many eight-digit sawtooth numbers are there where each digit is either a 1, a 2, or a 3?
