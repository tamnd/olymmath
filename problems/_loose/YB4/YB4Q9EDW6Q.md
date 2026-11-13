---
tag: YB4Q9EDW6Q
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142941
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call a positive integer a "random number" if and only if
(1) all digits are non-zero;
(2) the number is divisible by 11;
(3) the number is divisible by 12, and any permutation of its digits also results in a number divisible by 12.
Ask: How many ten-digit random numbers are there?
