---
tag: TABVYWSPWN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 2$ be a given positive integer, $x_{1}, x_{2}, \cdots, x_{n}$ be distinct real numbers, and $p_{1}, p_{2}, \cdots, p_{n}$ be positive real numbers, such that
$$
\begin{aligned}
\sum_{i=1}^{n} p_{i} & =1 . \text { Let } \\
S & =\frac{\sum_{k=1}^{n} p_{k} x_{k}^{3}-\left(\sum_{k=1}^{n} p_{k} x_{k}\right)^{3}}{3\left(\sum_{k=1}^{n} p_{k} x_{k}^{2}-\left(\sum_{k=1}^{n} p_{k} x_{k}\right)^{2}\right)} .
\end{aligned}
$$

Prove: $\min \left\{x_{1}, x_{2}, \cdots, x_{n}\right\}$
$$
\leqslant S \leqslant \max \left\{x_{1}, x_{2}, \cdots, x_{n}\right\} .
$$
