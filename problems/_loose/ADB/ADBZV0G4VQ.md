---
tag: ADBZV0G4VQ
kind: problem
type: answer
answer: (2^k - 1)(2^k - 2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k \ge 2$ be a given positive integer. Determine the number of pairs $(m, n)$ of positive integers, with $m, n < 2^k$, such that the equation $z^{2^k} - z^m - z^n = 1$ has at least one solution with modulus $1$.
Bogdan Blaga
