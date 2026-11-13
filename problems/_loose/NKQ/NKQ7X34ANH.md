---
tag: NKQ7X34ANH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given natural number $n$, let $M(n)$ be the largest natural number for which it is possible to construct a sequence of natural numbers $x_{1}, x_{2}, \ldots, x_{M(n)} \in\{2,3, \ldots, n\}$ such that:

For any two different numbers $i, j \in\{1,2, \ldots, M(n)\}$

the numbers $2^{x_{i}}-1$ and $2^{x_{j}}-1$ are relatively prime.

If $M(k)=M(k-1)$ for some natural number $k>1$, prove that $k$ is composite.
