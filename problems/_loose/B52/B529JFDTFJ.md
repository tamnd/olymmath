---
tag: B529JFDTFJ
kind: problem
type: answer
answer: "2001"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92784
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The robot colors natural numbers starting from 1 in ascending order according to the following rules: any natural number that can be expressed as the sum of two composite numbers is colored red; numbers that do not meet this requirement are colored yellow (for example, 23 can be expressed as the sum of two composite numbers 15 and 8, so 23 is colored red, while 1 cannot be expressed as the sum of two composite numbers, so 1 is colored yellow). What is the 1992nd number, in ascending order, that is colored red? Please explain your reasoning.
(China Beijing Junior High School Grade 2 Mathematics Competition, 1992)
