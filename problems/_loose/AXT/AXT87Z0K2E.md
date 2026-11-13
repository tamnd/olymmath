---
tag: AXT87Z0K2E
kind: problem
type: answer
answer: "864"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the number of quadruples of integers (not necessarily distinct) between 1 and 12 (inclusive) that satisfy all the following conditions:

- the sum of the first two numbers is even
- the sum of the first three numbers is a multiple of 3
- the sum of the four numbers is a multiple of 4.

(Two quadruples that differ even in the order of the addends are to be considered distinct).
