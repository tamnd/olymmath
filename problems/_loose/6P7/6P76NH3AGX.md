---
tag: 6P76NH3AGX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence of polynomials $P_0(x), P_1(x), \dots, P_n(x)$, $n \ge 2$. It is known that for every integer $i$ ($0 \le i \le n$): $\deg(P_i(x)) = n-i$, and $P_n(x) \ne 0$. It is also known that for every integer $i$ ($2 \le i \le n$) there exists polynomial $Q_i(x)$ such that $P_i(x) = P_{i-2}(x) + P_{i-1}(x)Q_i(x)$. If polynomials $R(x)$ and $S(x)$ satisfy $P_0(x)R(x) + P_1(x)S(x) = 1$ for all real $x$, prove that $\deg(R(x)) \ge n-2$ and $\deg(S(x)) \ge n-1$. (Where by $\deg P(x)$ we denote the degree of polynomial $P(x)$).
