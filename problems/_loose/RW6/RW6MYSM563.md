---
tag: RW6MYSM563
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220590
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(a_n\right)_{n\geq1}$ be a sequence of nonnegative real numbers which converges to $a \in \mathbb{R}$.

- Calculate$$\lim \limits_{n\to \infty}\sqrt[n]{\int \limits_0^1 \left(1+a_nx^n \right)^ndx}$$

- Calculate$$\lim \limits_{n\to \infty}\sqrt[n]{\int \limits_0^1 \left(1+\frac{a_1x+a_3x^3+\cdots+a_{2n-1}x^{2n-1}}{n} \right)^ndx}$$
