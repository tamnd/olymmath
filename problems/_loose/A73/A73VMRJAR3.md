---
tag: A73VMRJAR3
kind: problem
type: answer
answer: f(x) = \sqrt{2x + \frac{2}{e^2 - 1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all continuously differentiable functions $f:[0,1]\to(0,\infty)$ such that $\frac{f(1)}{f(0)}=e$ and
$$\int^1_0\frac{\text dx}{f(x)^2}+\int^1_0f'(x)^2\text dx\le2.$$
