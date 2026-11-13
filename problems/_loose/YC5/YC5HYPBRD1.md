---
tag: YC5HYPBRD1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=419
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2023
    source: hf-mathnet
    label: Baltic Way Baltic Way 2023 Shortlist
---
Let $\mathbb{Z}^+$ be the set of positive integers and $(F_n)_{n \in \mathbb{Z}^+}$ be the Fibonacci sequence defined by $F_1 = F_2 = 1$ and $F_{n+1} = F_n + F_{n-1}$ for $n \ge 2$. Consider the number
$$
N = 2^{2022}F_{2023} - 2^{2021}F_{2022} + 2^{2020}F_{2021} + \dots + 2F_2 + F_1.
$$
Prove that the binary expansion of $N$ contains more 1's than 0's.
