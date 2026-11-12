---
tag: DM9JYW0E7S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34085
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a non-negative random variable with Laplace transform $\phi(\lambda)=\mathrm{E} e^{-\lambda X}, \lambda \geqslant 0$.

(a) Show that for any $0 < p$ and $\lambda > 0$, the following equality holds:

$$
\mathrm{E} X^{-p}=\frac{1}{\Gamma(p)} \int_{\mathbb{R}_{+}} \phi(\lambda) \lambda^{p-1} d \lambda
$$
