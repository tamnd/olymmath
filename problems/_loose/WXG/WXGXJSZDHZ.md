---
tag: WXGXJSZDHZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242541
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, define the set $S_n$ as $S_n =\{(a, b)|a, b \in N, lcm[a, b] = n\}$ .
Let $f(n)$ be the sum of $\phi (a)\phi (b)$ for all $(a, b) \in S_n$.
If a prime $p$ relatively prime to $n$ is a divisor of $f(n)$,
prove that there exists a prime $q|n$ such that $p|q^2 - 1$.
