---
tag: 6VAZF22BWY
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206417
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the polynomial $ f(x) = ax^2 + bx + c$, with degree less than or equal to 2.

When $ f$ varies with subject to the constrain $ f(0) = 0,\ f(2) = 2$, find the minimum value of $ S=\int_0^2 |f'(x)|\ dx$.
