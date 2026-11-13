---
tag: S42SDHXA9A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171215
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathbf{v}_{1}, \mathbf{v}_{2}, \ldots, \mathbf{v}_{n}$ be integer-coordinate, pairwise distinct vectors of length $p$ in a three-dimensional Cartesian coordinate system, where $p$ is a prime number. Suppose that for any $1 \leq j<k \leq n$, there exists an integer $0<\ell<p$ such that the vector $\mathbf{v}_{j}-\ell \cdot \mathbf{v}_{k}$ has all three coordinates divisible by $p$. Prove that $n \leq 6$.
