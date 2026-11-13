---
tag: TVY463DWPX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1, a_2, a_3, \dots$ be an infinite sequence of real numbers such that for each $n \ge 2018$ the number $a_{n+1}$ is the smallest root of the polynomial
$$
P_n(x) = x^{2n} + a_1 x^{2n-2} + a_2 x^{2n-4} + \dots + a_n.
$$
Prove that there exists a positive integer $N$ such that the sequence $a_N, a_{N+1}, a_{N+2}, \dots$ is strictly decreasing.
