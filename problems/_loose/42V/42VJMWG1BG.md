---
tag: 42VJMWG1BG
kind: problem
type: answer
answer: P(x) = x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236307
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P$ with real coefficients having no repeated roots, such that for any complex number $z$, the equation $zP(z) = 1$ holds if and only if $P(z-1)P(z + 1) = 0$.

Remark: Remember that the roots of a polynomial are not necessarily real numbers.
