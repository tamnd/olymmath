---
tag: AQYTR29KKZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179404
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence of strictly positive real numbers $\left(y_{n}\right)_{n \geq 1}$ such that there exists $\lim _{n \rightarrow \infty} \frac{y_{n+1}}{y_{n}}=\ell, \ell \in(0, \infty)$. If the sequence $\left(x_{n}\right)_{n \geq 1}$ is defined by $x_{n+1}=x_{n}+\frac{1}{\sqrt[n]{y_{n}}}, \forall n \in \mathbb{N}^{*}$ and $x_{1}>0$ is given, prove that

$$
\lim _{n \rightarrow \infty} x_{n}=\infty \text { and } \lim _{n \rightarrow \infty} \frac{x_{n}}{n}=\frac{1}{\ell} .
$$

Anca Andrei
