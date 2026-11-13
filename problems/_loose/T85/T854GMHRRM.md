---
tag: T854GMHRRM
kind: problem
type: answer
answer: "16"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=191239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A five-digit positive integer is created using each of the odd digits $1,3,5,7,9$ once so that

- the thousands digit is larger than the hundreds digit,
- the thousands digit is larger than the ten thousands digit,
- the tens digit is larger than the hundreds digit, and
- the tens digit is larger than the units digit.

How many such five-digit positive integers are there?
(A) 12
(B) 8
(C) 16
(D) 14
(E) 10
