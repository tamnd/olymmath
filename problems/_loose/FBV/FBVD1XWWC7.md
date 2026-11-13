---
tag: FBVD1XWWC7
kind: problem
type: answer
answer: "56"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=191170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $N$ sequences with 15 terms and the following properties:

- each term is an integer,
- at least one term is between -16 and 16 , inclusive,
- the 15 terms have at most two different values,
- the sum of every six consecutive terms is positive, and
- the sum of every eleven consecutive terms is negative.

The value of $N$ is
(A) 48
(B) 72
(C) 64
(D) 80
(E) 56
