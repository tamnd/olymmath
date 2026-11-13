---
tag: VVX39DYRW3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188348
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every integer $n>1$, let $s(n)$ be the smallest prime divisor of $n$, and $d(n)$ be the number of positive divisors of $n$. Do there exist 2022 positive integers $a_{1}, a_{2}, \ldots, a_{2022}$ such that $a_{1}<a_{2}<\cdots<a_{2022}$ and $s\left(a_{k+1}-a_{k}\right)>2022^{k}$ for all $1 \leq k \leq 2021$?
