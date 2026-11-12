---
tag: F6WHRY4XPH
kind: problem
type: answer
answer: y(x)=1+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\ldots
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34503
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the first four terms of the Taylor series expansion of the solution $y=y(x)$ of the equation $y^{\prime \prime}=e^{x y}$, satisfying the initial conditions $\left.y\right|_{x=0}=1,\left.y^{\prime}\right|_{x=0}=0$.
