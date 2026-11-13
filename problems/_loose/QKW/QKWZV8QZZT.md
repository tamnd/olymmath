---
tag: QKWZV8QZZT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248516
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a finite sequence of $0$'s and $1$'s with two properties:
if you chose five sequential digits in one place and in the second place, those will be two different binary numbers. (Some last digits of the first number may be included as the first digits in the second.)
if you add $0$ or $1$ either from the left or from the right side, the previous property will not be held.
Prove that the first four digits of that sequence coincide with the last four.
