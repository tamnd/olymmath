---
tag: 7JNTGKBR89
kind: problem
type: answer
answer: 1-\frac{2}{e}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179359
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $I_{n}=\int_{0}^{1} e^{-x} x^{n} d x, n \in \mathbb{N}^{*}$.

a) Calculate $I_{1}$.

b) Show that $I_{n}=n I_{n-1}-\frac{1}{e}$, for any $n>1$.
