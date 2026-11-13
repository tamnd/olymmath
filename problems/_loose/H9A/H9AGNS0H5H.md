---
tag: H9AGNS0H5H
kind: problem
type: answer
answer: All prime powers n with 3 not dividing n − 1 (equivalently, n not congruent to 1 modulo 3).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integers $n \ge 2$ so there exists a finite field $\mathbb{K}$ with $n$ elements, with the property: for every $x \in \mathbb{K}$ there exists $y \in \mathbb{K}$ such that $x^2 = y^3$.
