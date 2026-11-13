---
tag: HE3FCH3E0X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k, n$ and $d$ be natural numbers. Denote by $A_{d}$ the number of $k$-tuples $\left(a_{1}, a_{2}, \ldots, a_{k}\right)$ of integers such that

$$
n \geqslant a_{1} \geqslant a_{2} \geqslant \ldots \geqslant a_{k} \geqslant 0 \text { and } a_{1}+a_{2}+\cdots+a_{k}=d .
$$

Denote by $B_{d}$ the number of $k$-tuples $\left(b_{1}, b_{2}, \ldots, b_{k}\right)$ of non-negative integers such that

$$
b_{1}+b_{2}+\cdots+b_{k} \leqslant n \text { and } b_{1}+2 b_{2}+\cdots+k b_{k}=d .
$$

Prove:

$$
A_{d}=B_{d}=B_{k n-d}
$$
