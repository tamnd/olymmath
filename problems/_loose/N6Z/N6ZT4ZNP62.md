---
tag: N6ZT4ZNP62
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261588
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider an infinite sequence of reals $x_1, x_2, x_3, ...$ such that $x_1 = 1$, $x_2 =\frac{2\sqrt3}{3}$ and with the recursive relationship $$n^2 (x_n - x_{n-1} - x_{n-2}) - n(3x_n + 2x_{n-1} + x_{n-2}) + (x_nx_{n-1}x_{n-2} + 2x_n) = 0.$$ Find $x_{2019}$.
