---
tag: HX7N5H4QH0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79045
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Kantorovich Inequality (not covered in class)

Let $0<x_{1}<\ldots<x_{n}$ and $\lambda_{1}, \ldots, \lambda_{n} \geq 0$ be real numbers, such that $\sum_{i=1}^{n} \lambda_{i}=1$. We define $\alpha=\frac{x_{1}+x_{n}}{2}, \beta=$ $\sqrt{x_{1} x_{n}}$. Show that

$$
\left(\sum_{i=1}^{n} \lambda_{i} x_{i}\right)\left(\sum_{i=1}^{n} \frac{\lambda_{i}}{x_{i}}\right) \leq \frac{\alpha^{2}}{\beta^{2}}
$$
