---
tag: XQ8XJCPV8R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=258
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two finite sets $A$ and $B$ of pairs of real numbers. For any three pairs $(a_1, b_1)$, $(a_2, b_2)$ and $(a_3, b_3)$ from $A$ there exists a pair $(c, d)$ from $B$ such that
$$
a_1c + b_1d \ge 0, a_2c + b_2d \ge 0 \text{and} a_3c + b_3d \ge 0.
$$
Prove that the $B$ contains a pair $(\gamma, \delta)$ such that $\alpha\gamma + \beta\delta \ge 0$ for each pair $(\alpha, \beta)$ from $A$.
