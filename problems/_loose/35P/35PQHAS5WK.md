---
tag: 35PQHAS5WK
kind: problem
type: answer
answer: k=80;26;8;20n=4;5;7;13
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34794
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Represent the number 531441 as the sum of several addends such that the first one is 1, the second is $k$ times larger, the third is $k$ times larger than the sum of the first two, the fourth is $k$ times larger than the sum of all previous ones, and so on. Find the multiplier $k$ and the number of addends, given that it is no less than four.
