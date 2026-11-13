---
tag: 5P1JVBHPYM
kind: problem
type: answer
answer: \{9, 4, 9\}, \{9, 5, 8\}, \{9, 6, 7\}, \{8, 6, 8\}, \{8, 7, 7\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232993
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given three distinct digits a, b and c, it is possible, by choosing two digits at a time, to form six two-digit numbers. Determine all possible sets {a, b, c} for which the sum of the six two-digits numbers is 484.
