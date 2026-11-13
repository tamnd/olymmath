---
tag: RR29KC3XJF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100444
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 2$ be an integer. Non-zero real numbers $x_{1}, x_{2}, \cdots, x_{n}$ satisfy $\sum_{i=1}^{n} x_{i}=0$, and for any positive real number $t$, there are at most $\frac{1}{t}$ pairs $(i, j)$ such that $\left|x_{i}-x_{j}\right| \geqslant t$. Prove:
$$
\sum_{i=1}^{n} x_{i}^{2}<\frac{1}{n}\left(\max _{1 \leqslant i \leqslant n} x_{i}-\min _{1 \leqslant i \leqslant n} x_{i}\right) .
$$
