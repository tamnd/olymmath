---
tag: G8XQXSMH4F
kind: problem
type: answer
answer: 1987,3769
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182812
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are prime numbers $p_{i}$ that have the following properties:

1. They are (in decimal notation) truly four-digit.
2. Their digit sum is $Q\left(p_{i}\right)=25$.
3. If you add 4 to them, the result is a "mirror number".

A "mirror number" is a number whose sequence of digits is symmetric with respect to an imaginary central line. Determine all such prime numbers $p_{i}$!
