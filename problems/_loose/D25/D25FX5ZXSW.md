---
tag: D25FX5ZXSW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141674
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a random calculator. Every time a natural number is input, it randomly changes the order of the digits to produce a new number, and then outputs the sum of the new number and the original number, even if 0 is the leading digit. For example:
input 2021, the calculator generates a new number 0212, and outputs 2233;
input 123, the calculator generates a new number 231, and outputs 354.
Which of the following numbers cannot be the result output by this calculator? ( )
A. 997
B. 998
C. 999
D. 1000
E. 1001
