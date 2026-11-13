---
tag: VXNPV5FYN8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Recall that the *Fibonacci numbers* are defined recursively by the equation $F_n = F_{n - 1} + F_{n - 2}$ for every integer $n \ge 2$, with initial values $F_0 = 0$ and $F_1 = 1$. Let $k$ be a positive integer. Say that an integer is $k$-*summable* if it is the sum of $k$ Fibonacci numbers (not necessarily distinct).

(a) Prove that every positive integer less than $F_{2k + 3} - 1$ is $k$-summable.

(b) Prove that $F_{2k + 3} - 1$ is not $k$-summable.
