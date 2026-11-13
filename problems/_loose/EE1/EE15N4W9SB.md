---
tag: EE15N4W9SB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Generalized Mean Inequality) Let $x_{1}, \ldots, x_{n}, w_{1}, \ldots, w_{n}$ be strictly positive real numbers such that $w_{1}+\ldots+w_{n}=1$, and $p$ a non-zero real number. Let:

$$
\begin{aligned}
N_{p} & =\left(\sum_{i=1}^{n} w_{i} x_{i}^{p}\right)^{1 / p} \\
N_{0} & =\prod_{i=1}^{n} x_{i}^{w_{i}} \\
N_{+\infty} & =\max \left(x_{1}, \ldots, x_{n}\right) \\
N_{-\infty} & =\min \left(x_{1}, \ldots, x_{n}\right)
\end{aligned}
$$

Show that if $p, q$ belong to $\mathbb{R} \cup\{-\infty ;+\infty\}$ and satisfy $p>q$ then $N_{p} \geqslant N_{q}$ with equality if and only if the $x_{i}$ are all equal.

The cases to remember from this very general inequality are $p, q \in\{+\infty ; 2 ; 1 ; 0 ;-1 ;-\infty\}$, which correspond respectively to the maximum, the quadratic mean, the arithmetic mean, the geometric mean, the harmonic mean, and the minimum.
