---
tag: XF550VRAR0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence $<x_n>$ by $x_1 = 1, x_2 = x, x_{n+2} = xx_{n+1} + nx_n, n \ge 1$.
Consider the polynomial $P_n(x) = x_{n-1}x_{n+1} - x_n^2$, for each $n \ge 2$.
Prove or disprove that the coefficients of $P_n(x)$ are all non-negative, except for the constant term when $n$ is odd.
