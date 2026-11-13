---
tag: 2W4KT4EQC1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p, c$ be positive integers where $p$ is a prime and $c$ is a composite number. Prove: there exist positive integers $m, n$ such that
$$
0<m-n<\frac{[n+1, n+2, \cdots, m]}{[n, n+1, \cdots, m-1]}=p^{c},
$$

where $[x_{1}, x_{2}, \cdots, x_{k}]$ denotes the least common multiple of the positive integers $x_{1}, x_{2}, \cdots, x_{k}$.
