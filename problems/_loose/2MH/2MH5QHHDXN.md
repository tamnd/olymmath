---
tag: 2MH5QHHDXN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131865
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p_{1}, p_{2}, p_{3}, \cdots$ be the prime numbers in increasing order, and let $x_{0}$ be a real number between 0 and 1. For a positive integer $k$, define
$$
x_{k}=\left\{\begin{array}{ll}
0, & \text { if } x_{k-1}=0 \\
\left\{\frac{p_{k}}{x_{k-1}}\right\} . & \text { if } x_{k-1} \neq 0
\end{array}\right.
$$

Here $\{x\}$ denotes the fractional part of $x$. Find all $x_{0}$ such that $0 < x_{0} < 1$ and the sequence $x_{0}, x_{1}, x_{2}, \cdots$ eventually contains 0, and prove your answer.
