---
tag: 7PMXBV6VQF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160977
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left(x_{n}\right)_{n \geqslant 1}$ be defined by $x_{2}=1, x_{3}=1$ and

$$
(n+1)(n-2) x_{n+1}=n\left(n^{2}-n-1\right) x_{n}-(n-1)^{3} x_{n-1} \text { for } n \geqslant 3
$$

Prove that $x_{n}$ is an integer if and only if $n$ is a prime number.
