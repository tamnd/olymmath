---
tag: XY42PAFSP2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $f$ is a nonconstant polynomial with integer coefficients with the following property:

- $f(0)$ and $f(1)$ are both odd.

- Define a sequence of integers with $a_k = f(1)f(2) \cdots f(k)+1$

Prove that there are infinitely many prime numbers dividing at least one element of the sequence.

*Proposed by Sayandeep Shee*
