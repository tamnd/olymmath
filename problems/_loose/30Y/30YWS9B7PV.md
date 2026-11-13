---
tag: 30YWS9B7PV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sequences $ (x_n)$ and $ (y_n)$ are constructed as follows: $ x_0 = 365$, $ x_{n+1} = x_n\left(x^{1986} + 1\right) + 1622$, and $ y_0 = 16$, $ y_{n+1} = y_n\left(y^3 + 1\right) - 1952$, for all $ n \ge 0$. Prove that $ \left|x_n- y_k\right|\neq 0$ for any positive integers $ n$, $ k$.
