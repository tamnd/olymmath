---
tag: G9864CBWYX
kind: problem
type: answer
answer: f(x) = -x^2 + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For real constant numbers $ a,\ b,\ c,\ d,$ consider the function $ f(x) = ax^3 + bx^2 + cx + d$ such that $ f( - 1) = 0,\ f(1) = 0,\ f(x)\geq 1 - |x|$ for $ |x|\leq 1.$

Find $ f(x)$ for which $ \int_{ - 1}^1 \{f'(x) - x\}^2\ dx$　is minimized.
