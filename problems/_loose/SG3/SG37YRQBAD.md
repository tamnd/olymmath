---
tag: SG37YRQBAD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82444
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: \mathbb{R} \mapsto \mathbb{R}$ be a continuous function such that $2 f\left(\frac{x+y}{2}\right) \leq f(x)+f(y)$ for all real numbers $x$ and $y$. Show that $f$ is convex.

Furthermore, the study of convex functions allows for the quick proof of very important inequalities.

Definition 60. Let $x_{1}, \ldots, x_{n}$ be strictly positive real numbers, and $p$ a non-zero real number. The mean of order $p$ of $x_{1}, \ldots, x_{n}$ is the number $N_{p}=\left(\frac{1}{n} \sum_{i=1}^{n} x_{i}^{p}\right)^{1 / p}$, and the mean of order 0 is the number $N_{0}=\left(\prod_{i=1}^{n} x_{i}\right)^{1 / n}$.

The numbers $N_{-1}, N_{0}, N_{1}$ and $N_{2}$ are also known as the "harmonic," "geometric," "arithmetic," and "quadratic" means, respectively.

Theorem 61. Let $p \geq q$ be two real numbers. Then $N_{p} \geq N_{q}$.
