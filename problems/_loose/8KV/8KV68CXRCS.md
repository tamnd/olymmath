---
tag: 8KV68CXRCS
kind: problem
type: answer
answer: 2e^{x}-3x-3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32879
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Using the Runge-Kutta method, find the solution to the Cauchy problem for the equation $y^{\prime}=3 x+y, y(0)=-1, x \in[0,1]$, taking $h=0.1$.
