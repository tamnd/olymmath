---
tag: C2Q7JEXA7A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive number $n$, let $g(n)$ be the product of all $1 \le k \le n$ such that gcd $(k, n) =1$, and say that $n > 1$ is reckless if $n$ is odd and $g(n) \equiv -1$ (mod $n$). Find the number of reckless numbers less than $50$.
