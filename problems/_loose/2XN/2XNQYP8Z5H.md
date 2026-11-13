---
tag: 2XNQYP8Z5H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204993
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a polynomial with integer coefficents with degree $n>0:$$$P(x)=a_nx^n+...+a_1x+a_0.$$
Assume that there exists a prime number $p$ satisfying these conditions:
*i)* $p|a_i$ for all $0\le i<n,$
*ii)* $p\nmid a_n,$
*iii)* $p^2\nmid a_0.$
Prove that $P(x)$ is irreducible in $\mathbb{Z}[x].$
