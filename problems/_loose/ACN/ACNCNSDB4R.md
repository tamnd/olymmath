---
tag: ACNCNSDB4R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=339
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo
    source: hf-mathnet
    label: China Chinese Mathematical Olympiad
---
Given an integer $k \ge 3$ and a sequence $\{a_n\}$ that satisfies $a_k = 2k$ and for each $n > k$,
$$
a_n = \begin{cases} a_{n-1} + 1, & \text{if } a_{n-1} \text{ and } n \text{ are coprime,} \\ 2n, & \text{otherwise.} \end{cases}
$$
Prove that $a_n - a_{n-1}$ is a prime for infinitely many $n$. (Posed by Zhu Huawei)
