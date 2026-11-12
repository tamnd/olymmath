---
tag: HQSHJV1XX8
kind: problem
type: answer
answer: 2+x+x^{2}+\frac{x^{3}}{2}+\frac{x^{4}}{4}+\ldots
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34397
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the first five terms of the power series expansion of the particular integral of the equation $y^{\prime \prime}-y e^{x}=0$, satisfying the initial conditions: $y(0)=2, y^{\prime}(0)=1$.
