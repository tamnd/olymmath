---
tag: Z952CQJ3CX
kind: problem
type: answer
answer: 'Part 1: 1011. Part 2: For degrees from two to two thousand twenty two, M_P is at least 1011.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=185
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each non-constant integer polynomial $P(x)$, let's define
$$
M_{P(x)} = \max_{x \in [0; 2021]} |P(x)|.
$$
1. Find the minimum value of $M_{P(x)}$ when $\deg P(x) = 1$.
2. Suppose that $P(x) \in \mathbb{Z}[x]$ when $\deg P(x) = n$ and $2 \le n \le 2022$. Prove that $M_{P(x)} \ge 1011$.
