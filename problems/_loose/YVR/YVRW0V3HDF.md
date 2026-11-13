---
tag: YVRW0V3HDF
kind: problem
type: answer
answer: B = \frac{1}{2} \left( \frac{1}{a} + \frac{a}{a^2 + 4} \right) (1 - e^{-a\pi})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ be a positive constant. Evaluate the following definite integrals $A,\ B$.

$$A=\int_0^{\pi} e^{-ax}\sin ^ 2 x\ dx,\ B=\int_0^{\pi} e^{-ax}\cos ^ 2 x\ dx$$.

*1998 Shinsyu University entrance exam/Textile Science*
