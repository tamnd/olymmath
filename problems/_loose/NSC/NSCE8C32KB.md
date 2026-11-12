---
tag: NSCE8C32KB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=19353
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of polynomials $P_{n}(x)$, where $n \geq 0$ is an integer, is defined recursively: $P_{0}(x)$ is identically equal to one (i.e., $P_{0}(x) \equiv 1$), and $P_{n+1}(x)=x^{7(n+1)}-P_{n}(x)$ for all $n \geq 0$. For each $n \geq 0$, find all real roots of $P_{n}(x)$.

A sequence of polynomials $P_{n}(x)$ (for all integer $n \geq 0$) is given as $P_{0}(x) \equiv 1$ and $P_{n+1}(x)=$ $x^{7(n+1)}-P_{n}(x)$ for all $n \geq 0$. Find all real roots of $P_{n}(x)$ for an arbitrary integer $n \geq 0$.
