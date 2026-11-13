---
tag: ZZQFAXHNMJ
kind: problem
type: answer
answer: All polynomials of the form c·X^m with c a nonzero integer and m a nonnegative integer.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=29
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all polynomials $P \in \mathbb{Z}[X]$ such that there exists $k \in \mathbb{N}^*$, so that for all primes $q$, $P(q)$ has at most $k$ distinct prime divisors.
