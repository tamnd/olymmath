---
tag: 6TV9WVZH5C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a positive integer. Find the maximal length $L$ of a sequence $a_1, \dots, a_L$ containing positive integers that satisfies the following two properties:
* Each term of the sequence is smaller or equal to $2^k$.
* There are no consecutive terms $a_i, a_{i+1}, \dots, a_j$ (with $1 \le i < j \le L$) and signs $s_i, s_{i+1}, \dots, s_j \in \{1, -1\}$ such that
$$s_i a_i + s_{i+1} a_{i+1} + \dots + s_j a_j = 0.$$
