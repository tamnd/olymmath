---
tag: X9MG2FR22S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, let $f(n)$ be the smallest positive integer such that $\sum_{k=1}^{f(n)} k$ is divisible by $n$. Prove: $f(n)=2n-1$ if and only if $n$ is a power of 2.
