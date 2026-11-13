---
tag: P9YYB05BTF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245834
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Bernoulli sequence $\{B_{n}\}_{n \ge 0}$ is defined by $$B_{0}=1, B_{n}=-\frac{1}{n+1}\sum^{n}_{k=0}{{n+1}\choose k}B_{k}\; (n \ge 1)$$ Show that for all $n \in \mathbb{N}$, $$(-1)^{n}B_{n}-\sum \frac{1}{p},$$ is an integer where the summation is done over all primes $p$ such that $p| 2k-1$.
