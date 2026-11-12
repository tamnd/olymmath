---
tag: VV1NNPMK0T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6939
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
All divisors of a natural number $N$, except $N$ and one, were written in a row in descending order: $d_{1}>d_{2}>\ldots>d_{k}$. It turned out that in each pair of divisors equally distant from the ends of this row, the larger divisor is divisible by the smaller one (i.e., $d_{1}$ is divisible by $d_{k}, d_{2}$ - by $d_{k-1}$, and so on). Prove that in any pair of divisors of the number $N$, the larger divisor is divisible by the smaller one.
