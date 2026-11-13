---
tag: DA1RHEM3XA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243553
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ and $b$ be fixed positive integers. We say that a prime $p$ is *fun* if there exists a positive integer $n$ satisfying the following conditions:

- $p$ divides $a^{n!} + b$.

- $p$ divides $a^{(n + 1)!} + b$.

- $p < 2n^2 + 1$.

Show that there are finitely many fun primes.
