---
tag: CZAP660F6J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207947
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the continuous function such that $ f(x)=\frac{e^{2x}}{2(e-1)}\int_0^1 e^{-y}f(y)dy+\int_0^{\frac 12} f(y)dy+\int_0^{\frac 12}\sin ^ 2(\pi y)dy$.
