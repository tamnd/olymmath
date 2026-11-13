---
tag: QQZS8WSX14
kind: problem
type: answer
answer: g(x) = \sum_{k=3}^{n} \binom{n}{k} x^{n-k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243335
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real polynomials $ g(x)$ of degree at most $ n - 3$, $ n\geq 3$, knowing that all the roots of the polynomial $ f(x) = x^n + nx^{n - 1} + \frac {n(n - 1)}2 x^{n - 2} + g(x)$ are real.
