---
tag: 8S0MG4AFZW
kind: problem
type: answer
answer: P(x) = c
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242720
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P(x)$ with integer coefficients such that for all positive number $n$ and prime $p$ satisfying $p\nmid nP(n)$, we have $ord_p(n)\ge ord_p(P(n))$.
