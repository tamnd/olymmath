---
tag: B0PWXD9PP4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=137
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Ireland
---
Let $k \ge 2$ be an integer. Prove that for each positive integer $N < 40 \cdot 3^k$ the equation
$$
(x_1^2 - 1)(x_2^2 - 1) \cdots (x_k^2 - 1) = N
$$
has at most one integer solution $(x_1, x_2, \dots, x_k)$ such that $1 < x_1 \le x_2 \le \dots \le x_k$.
