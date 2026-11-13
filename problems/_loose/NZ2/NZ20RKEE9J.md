---
tag: NZ20RKEE9J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128032
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$ with prime factorization $n=\prod_{i=1}^{s} p_{i}^{a_{i}}$, where $p_{1}<p_{2}<\cdots<p_{s}$ are primes. Let $\Omega(n)=\prod_{i=1}^{s} a_{i}$. Define $f(n)=(-1)^{\Omega(n)}$. Prove: There exist infinitely many positive integers $n$ such that
$$
f(n-1)=f(n)=f(n+1)=1 .
$$
