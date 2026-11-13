---
tag: 3SN98DJBE4
kind: problem
type: answer
answer: 4/n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=2
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
給定正偶數 $n > 2$, 已知實數 $x_1, x_2, \dots, x_n$ 滿足
$$
\sum_{1 \le i < j \le n} (x_i - x_j)^2 = 1.
$$
試求 $\sum_{i=1}^{n} (x_i - x_{i+1})^2$ 的最大值, 此處 $x_{n+1} = x_1$.
