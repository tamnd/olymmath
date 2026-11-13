---
tag: C6WGQBGRBG
kind: problem
type: answer
answer: '[-8, 16]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209419
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P(x),\ Q(x)$ be polynomials such that :
$$\int_0^2 \{P(x)\}^2dx=14,\ \int_0^2 P(x)dx=4,\ \int_0^2 \{Q(x)\}^2dx=26,\ \int_0^2 Q(x)dx=2.$$
Find the maximum and the minimum value of $\int_0^2 P(x)Q(x)dx$.
