---
tag: SR38HB1F7T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79505
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $0<x_{0}<1$ be a real number. For all integers $n$, let $p_{n}$ be the $n$-th prime number. We define the sequence $\left(x_{n}\right)$ recursively by $x_{n+1}=0$ if $x_{n}=0$ and otherwise:

$$
x_{n+1}=\left\{\frac{p_{n+1}}{x_{n}}\right\}
$$

What are the real numbers $x_{0}$ such that the sequence $\left(x_{n}\right)$ is 0 from a certain rank?
