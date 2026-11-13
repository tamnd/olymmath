---
tag: TWZ55X2MYF
kind: problem
type: answer
answer: 59,68,489,579,678
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76935
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A multi-digit number is called optimistic if its digits increase from left to right. If the digits of the number decrease from left to right, we say that it is a pessimistic number. Find all optimistic numbers for which the following is true:

$\triangleright$ the arithmetic mean of the digits of the given number is 7,

$\triangleright$ if we swap the first digit with the last digit in this number, we get a pessimistic number.
