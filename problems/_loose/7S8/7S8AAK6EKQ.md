---
tag: 7S8AAK6EKQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251007
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The quadratic equation $ax^2 + bx + c = 0$ has its roots in the interval $[0, 1]$. Find the maximum of $\frac{(a - b)(2a - b)}{a(a - b + c)}$.
