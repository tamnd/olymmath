---
tag: B8RPMTM716
kind: problem
type: answer
answer: \lambda_{1}+\lambda_{2}+\cdots+\lambda_{n-1}\leqslantn-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131652
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given in the complex number range, the $n$ roots of the equation $x^{n}-1$ $=0$ are $z_{0}, z_{1}, \cdots, z_{n-1}$, where $z_{0}=1$. Let $\operatorname{Re} z$ denote the real part of the complex number $z$.
(1) Find the value of $\prod_{k=1}^{n-1}\left|1-z_{k}\right|$.
(2) For $0 \leqslant k \leqslant n-1$, let
$$
g(k)=\lambda_{1} \operatorname{Re} z_{k}+\lambda_{2} \operatorname{Re} z_{k}^{2}+\cdots+\lambda_{n-1} \operatorname{Re} z_{k}^{n-1},
$$

where $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n-1} \in \mathbf{R}$. If for all $0 \leqslant k \leqslant$ $n-1, k \in \mathbf{Z}$, we have $g(k) \geqslant-1$, prove:
$$
\lambda_{1}+\lambda_{2}+\cdots+\lambda_{n-1} \leqslant n-1 .
$$
