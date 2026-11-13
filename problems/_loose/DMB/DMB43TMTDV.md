---
tag: DMB43TMTDV
kind: problem
type: answer
answer: P(x) = x + (x-1)(x-2)\cdots(x-2021)R(x)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221553
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P(x)$ with integral coefficients whose values at points $x = 1, 2, . . . , 2021$ are numbers $1, 2, . . . , 2021$ in some order.
