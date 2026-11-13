---
tag: CVE2JE47M4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=174759
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the expression $y=(x+9) /(x-1)$, we substitute for $x$ every natural number greater than 1, and every fraction that is $1 / 2$ greater than a natural number. For which $x$ values does $y$ turn out to be an integer? For which $x$ values can the fraction be simplified? How many permitted $x$ values are there for which $y$ is a) greater than 5, b) not greater than 3, c) falls between 1.5 and 2.5, including these limits?
