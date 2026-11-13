---
tag: 21TVN63JRH
kind: problem
type: answer
answer: "30"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=191645
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A Pretti number is a seven-digit positive integer with the following properties:

- The integer formed by its leftmost three digits is a perfect square.
- The integer formed by its rightmost four digits is a perfect cube.
- Its ten thousands digit and ones (units) digit are equal.
- Its thousands digit is not zero.

How many Pretti numbers are there?
