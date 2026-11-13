---
tag: WGYY46JQ58
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78884
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Inequality of bad students more generally) Let $a_{1}, \ldots, a_{n}$ be non-negative real numbers and $x_{1}, \ldots, x_{n}$ and $r$ be strictly positive real numbers. Show that

$$
\frac{a_{1}^{r+1}}{x_{1}^{r}}+\ldots+\frac{a_{n}^{r+1}}{x_{n}^{r}} \geqslant \frac{\left(a_{1}+\ldots+a_{n}\right)^{r+1}}{\left(x_{1}+\ldots+x_{n}\right)^{r}}
$$

with equality when the vectors $\left(a_{1}, \ldots, a_{n}\right)$ and $\left(x_{1}, \ldots, x_{n}\right)$ are collinear.

This inequality can be proven using Hölder's inequality. Here, we will use the method of Lagrange multipliers.
