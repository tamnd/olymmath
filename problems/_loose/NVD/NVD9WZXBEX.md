---
tag: NVD9WZXBEX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268117
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every integer $ n \ge 3$ and any given angle $ \alpha$ with $ 0 < \alpha < \pi$, let $ P_n(x) = x^n \sin\alpha - x \sin n\alpha + \sin(n - 1)\alpha$.
(a) Prove that there is a unique polynomial of the form $ f(x) = x^2 + ax + b$ which divides $ P_n(x)$ for every $ n \ge 3$.
(b) Prove that there is no polynomial $ g(x) = x + c$ which divides $ P_n(x)$ for every $ n \ge 3$.
