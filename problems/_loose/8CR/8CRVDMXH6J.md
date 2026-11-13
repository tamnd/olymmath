---
tag: 8CRVDMXH6J
kind: problem
type: answer
answer: 2^{2024}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=319
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 3$ be an integer and $a_1, a_2, \dots, a_n$ be real numbers. For each $1 \le k \le n$ the real numbers $b_1, b_2, \dots, b_{n+1}$ are defined by

$$
b_k = \frac{a_k + \max\{a_{k+1}, a_{k+2}\}}{2}
$$
and $b_{n+1} = b_1$ ($a_{n+1} = a_1$ and $a_{n+2} = a_2$). Find the smallest $\lambda$ such that the inequality
$$
\lambda \left[ \sum_{i=1}^{n} (a_i - a_{i+1})^{2024} \right] \geq \sum_{i=1}^{n} (b_i - b_{i+1})^{2024}
$$
is held for each $n \ge 3$ and all real numbers $a_1, a_2, \dots, a_n$.
