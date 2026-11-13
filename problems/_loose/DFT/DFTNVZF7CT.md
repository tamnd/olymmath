---
tag: DFTNVZF7CT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242223
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a continuous function $ f(x)$ such that $ \int_0^{2\pi} f(x)\ dx = 0$.

Let $ S(x) = A_0 + A_1\cos x + B_1\sin x$, find constant numbers $ A_0,\ A_1$ and $ B_1$ for which $ \int_0^{2\pi} \{f(x) - S(x)\}^2\ dx$ is minimized.
