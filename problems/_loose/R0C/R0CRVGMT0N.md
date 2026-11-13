---
tag: R0CRVGMT0N
kind: problem
type: answer
answer: 3n^{2}-3n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83995
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 3$ and $x_{1}, \ldots, x_{n-1}$ be non-negative integers. We assume:

$$
\begin{aligned}
x_{1}+x_{2}+\cdots+x_{n-1} & =n \\
x_{1}+2 x_{2}+\cdots+(n-1) x_{n-1} & =2 n-2
\end{aligned}
$$

Calculate the minimum value of:

$$
\sum_{k=1}^{n-1} k(2 n-k) x_{k}
$$
