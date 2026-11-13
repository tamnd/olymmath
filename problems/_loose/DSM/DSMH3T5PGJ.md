---
tag: DSMH3T5PGJ
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a sequence of consecutive positive integers balanced if the number of multiples of three in that sequence is equal to the number of multiples of five. For example, the sequence 30, 31, 32, 33, 34, 35, 36 is not balanced, because out of these 7 numbers, 3 are multiples of three (namely 30, 33, and 36) and only 2 are multiples of five (namely 30 and 35).

How many numbers can a balanced sequence of consecutive positive integers contain at most?
