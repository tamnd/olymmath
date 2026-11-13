---
tag: S3YP3MDJKA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Fibonacci numbers $(F_n)_{n=1}^{\infty}$ are defined as follows:
$$F_1 = F_2 = 1, F_n = F_{n-2} + F_{n-1}, n = 3, 4, ...$$
Assume $p$ is a prime greater than $3$. With $m$ being a natural number greater than $3$, find all $n$ numbers such that $F_n$ is divisible by $p^m$.
