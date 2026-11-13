---
tag: XHXDCJ8HQJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call a tuple $(b_m, b_{m+1},..., b_n)$ of integers perfect if both following conditions are fulfilled:
1. There exists an integer $a > 1$ such that $b_k = a^k + 1$ for all $k = m, m + 1,..., n$
2. For all $k = m, m + 1,..., n,$ there exists a prime number $q$ and a non-negative integer $t$ such that $b_k = q^t$.
Prove that if $n - m$ is large enough then there is no perfect tuples, and find all perfect tuples with the maximal number of components.
