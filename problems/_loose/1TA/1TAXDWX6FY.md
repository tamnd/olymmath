---
tag: 1TAXDWX6FY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247423
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=61
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ and $k$ be two positive integers such that $1\leq n \leq k$. Prove that, if $d^k+k$ is a prime number for each positive divisor $d$ of $n$, then $n+k$ is a prime number.
