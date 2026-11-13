---
tag: 8XQPXYDGVM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204637
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We all know the Fibonacci sequence. However, a slightly less known sequence is the $k$-bonacci sequence. In it, we have $F_1^{(k)} = F_2^{(k)} = \cdots = F_{k-1}^{(k)} = 0, F_k^{(k)} = 1$ and $$F^{(k)}_{n+k} = F^{(k)}_{n+k-1} + F^{(k)}_{n+k-2} + \cdots + F^{(k)}_n,$$for all $n \geq 1$. Find all positive integers $k$ for which there exists a constant $N$ such that $$F^{(k)}_{n-1}F^{(k)}_{n+1} - (F ^{(k)}_n)^2 = (-1)^n$$ for every positive integer $n \geq N$.
