---
tag: MK7FB46NEG
kind: problem
type: answer
answer: P(x, y) = (a, b)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P: \mathbb{R \times R}\to\mathbb{R\times R}$ with real coefficients, such that $$P(x,y) = P(x+y,x-y), \ \forall\ x,y \in \mathbb{R}.$$

*Proposed by TuZo*