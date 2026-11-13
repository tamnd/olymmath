---
tag: WXTPDD301G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246987
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(x_n)_{n\ge 1}$ and $(y_n)_{n\ge 1}$ a sequence of positive real numbers, such that:

$$x_{n+1}\ge \frac{x_n+y_n}{2},\ y_{n+1}\ge \sqrt{\frac{x_n^2+y_n^2}{2}},\ (\forall)n\in \mathbb{N}^*$$

a) Prove that the sequences $(x_n+y_n)_{n\ge 1}$ and $(x_ny_n)_{n\ge 1}$ have limit.

b) Prove that the sequences $(x_n)_{n\ge 1}$ and $(y_n)_{n\ge 1}$ have limit and that their limits are equal.
