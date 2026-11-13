---
tag: 3ZQVFB7NVE
kind: problem
type: answer
answer: P(x) = a_4 x^4 - 2a_4 x^2 + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P(X)$ of fourth degree with real coefficients that verify the properties:
**a)** $P(-x)=P(x), \forall x\in\mathbb{R};$
**b)** $P(x)\geq0, \forall x\in\mathbb{R};$
**c)** $P(0)=1;$
**d)** $P(X)$ has exactly two local minimums $x_1$ and $x_2$ such that $|x_1-x_2|=2.$
