---
tag: ZEZ3R6H6AX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90685
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine whether there is a polynomial $f(x)$ such that

- Every coefficient of $f$, from the leading coefficient down to the constant term, is either 1 or -1 .
- $(x-1)^{2013}$ evenly divides $f(x)$ (this means that their quotient is a polynomial).
