---
tag: DR4B35XKZ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given odd prime number $p$, define $f(n)$ the remainder of $d$ divided by $p$, where $d$ is the biggest divisor of $n$ which is not a multiple of $p$. For example when $p=5$, $f(6)=1, f(35)=2, f(75)=3$. Define the sequence $a_1, a_2, \ldots, a_n, \ldots$ of integers as the followings:

- $a_1=1$

- $a_{n+1}=a_n+(-1)^{f(n)+1}$ for all positive integers $n$.

Determine all integers $m$, such that there exist infinitely many positive integers $k$ such that $m=a_k$.
