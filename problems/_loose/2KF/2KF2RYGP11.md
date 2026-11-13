---
tag: 2KF2RYGP11
kind: problem
type: answer
answer: P(x) = a_n x^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all the polynomials $P(x)$ of a degree $\leq n$ with real non-negative coefficients such that $P(x) \cdot P(\frac{1}{x}) \leq [P(1)]^2$ , $ \forall x>0$.
