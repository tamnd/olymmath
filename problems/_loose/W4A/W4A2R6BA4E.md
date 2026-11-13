---
tag: W4A2R6BA4E
kind: problem
type: answer
answer: P(x) = x^m
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266570
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P(x)$ with integer coefficients such that for all positive integers $n$, we have that $P(n)$ is not zero and $\frac{P(\overline{nn})}{P(n)}$ is an integer, where $\overline{nn}$ is the integer obtained upon concatenating $n$ with itself.
