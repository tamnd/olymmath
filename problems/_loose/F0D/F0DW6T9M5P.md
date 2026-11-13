---
tag: F0DW6T9M5P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=426
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Math Olympiad
---
Let $(x_n)_{n \ge 0}$ be a sequence of integer numbers that fulfills a linear recursion of order $k$ for a fixed positive integer $k$, i.e., there exists real constant numbers $c_1, c_2, \dots, c_k$ such that $x_{n+k} = \sum_{r=1}^k c_r x_{n+k-r}$, $\forall n \ge 0$. Suppose $k$ is the minimum positive integer with this property. Prove that $c_j \in \mathbb{Z}$, for all $j$, $1 \le j \le k$.
