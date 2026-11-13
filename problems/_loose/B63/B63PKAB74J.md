---
tag: B63PKAB74J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89734
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 3$ be a natural number and let $(a_{1}, a_{2}, \ldots, a_{n})$ be a strictly increasing sequence of real numbers such that $\sum_{k=1}^{n} a_{k}=2$. Let $M$ be some subset of the set $\{1,2, \ldots, n\}$ for which the value of the expression $\left|1-\sum_{k \in M} a_{k}\right|$ is the smallest possible.

Prove that there exists a strictly increasing sequence of real numbers $\left(b_{1}, b_{2}, \ldots, b_{n}\right)$ such that $\sum_{k=1}^{n} b_{k}=2$, and for which $\sum_{k \in M} b_{k}=1$.
