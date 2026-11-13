---
tag: T7GJA07K7E
kind: problem
type: answer
answer: \frac{n^{2}}{x_{1}+x_{2}+\cdots+x_{}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140759
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a set $Y$ consisting of a finite number of real numbers, define $\sigma(Y)$ as the sum of all elements in $Y$, $\sigma(Y)=\sum_{y \in Y} y$. Given positive integers $m, n$ and positive real numbers $x_{1}<x_{2}<\cdots<x_{m}$, let $A_{1}, A_{2}, \cdots, A_{n}$ be non-empty subsets of the set $\left\{x_{1}, x_{2}, \cdots, x_{m}\right\}$. Find the minimum value of the expression
$$
\sum_{i=1}^{n} \sum_{j=1}^{n} \frac{\sigma\left(A_{i} \cap A_{j}\right)}{\sigma\left(A_{i}\right) \sigma\left(A_{j}\right)}
$$
