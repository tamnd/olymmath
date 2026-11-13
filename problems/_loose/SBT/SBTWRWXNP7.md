---
tag: SBTWRWXNP7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165733
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an $n$-variable polynomial. We know that if we substitute +1 or -1 for each of its variables, its value will be positive if the number of -1s is even, and negative if the number of -1s is odd. Prove that the polynomial is at least of degree $n$. (That is, it has a term where the sum of the exponents of the variables is at least $n$)
