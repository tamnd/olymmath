---
tag: NWMTTTB8K2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78872
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Inequality of the bad students) Let $a_{1}, \ldots, a_{n}$ and $x_{1}, \ldots, x_{n}$ be strictly positive real numbers. Show that

$$
\frac{a_{1}^{2}}{b_{1}}+\ldots+\frac{a_{n}^{2}}{b_{n}} \geqslant \frac{\left(a_{1}+\ldots+a_{n}\right)^{2}}{b_{1}+\ldots+b_{n}}
$$

with equality when the vectors $\left(a_{1}, \ldots, a_{n}\right)$ and $\left(b_{1}, \ldots, b_{n}\right)$ are collinear.

To prove this inequality, we can use the "second form" of the Cauchy-Schwarz inequality: if $x_{1}, \ldots, x_{n}, y_{1}, \ldots, y_{n}$ are positive real numbers, then

$$
\left(\sum_{i=1}^{n} x_{i}\right)^{2} \leqslant\left(\sum_{i=1}^{n} \frac{x_{i}}{y_{i}}\right)\left(\sum_{i=1}^{n} x_{i} y_{i}\right)
$$

It is proven using the Cauchy-Schwarz inequality with the factors $\sqrt{x_{i} / y_{i}}$ and $\sqrt{x_{i} y_{i}}$.
