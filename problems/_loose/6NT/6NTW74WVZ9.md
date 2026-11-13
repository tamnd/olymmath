---
tag: 6NTW74WVZ9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129085
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$. Find the smallest non-negative integer $k$, such that for any positive integer $m$, if $a_{1}, a_{2}, \cdots, a_{m}$ are positive integers not less than 1 and not greater than $n$, and satisfy: $\sum_{i=1}^{m} a_{i} \geqslant n!+k$, then there exists a subset $I$ of $\{1,2, \cdots, m\}$, such that $\sum_{i \in I} a_{i}=$ $n!$.
