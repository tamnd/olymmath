---
tag: EQEYHPRZ34
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38393
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, \ldots, x_{n}$ be the roots of the polynomial

$$
x^{n}+a_{n-1} x^{n-1}+a_{n-2} x^{n-2}+\ldots+a_{0}
$$

Prove that $x_{1}+x_{2}+\ldots+x_{n}=-a_{n-1}$,

$$
\sum_{1 \leqslant i<j \leqslant n} x_{i} x_{j}=a_{n-2}, \sum_{1 \leqslant i<j<k \leqslant n} x_{i} x_{j} x_{k}=-a_{n-3}, \ldots
$$

$x_{1} \ldots x_{n}=(-1)^{n} a_{0}$ (Vieta's theorem).
