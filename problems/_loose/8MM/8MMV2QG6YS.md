---
tag: 8MMV2QG6YS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100004
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For positive integers $m(m \geq 3), n$, and $x_{1}, x_{2}, \ldots, x_{m}$, if for each $i \in\{2,3, \ldots, m-1\}$, it holds that: $x_{i+1}-x_{i} \equiv x_{i}-x_{i-1}(\bmod n)$, then the $m$-tuple $\left(x_{1}, x_{2}, \ldots, x_{m}\right)$ is called an "arithmetic sequence $(\bmod n)$".

Let the prime $p \geq 5$, and the integer $a$ satisfy $1<a<p-1$. Let $\left\{a_{1}, a_{2}, \ldots, a_{k}\right\}$ be the set of all possible remainders when the positive integer powers of $a$ are divided by $p$. Prove: If a permutation of $\left\{a_{1}, a_{2}, \ldots, a_{k}\right\}$ is an arithmetic sequence (mod p), then $k=p-1$.
