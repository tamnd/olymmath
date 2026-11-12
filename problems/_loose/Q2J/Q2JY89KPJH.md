---
tag: Q2JY89KPJH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3537503
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2568
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-ai-mo-aops
    label: 2025 China Team Selection Test
---
Let $\left \{ x_n \right \} _{n\ge 1}$ and $\left \{ y_n \right \} _{n\ge 1}$ be two infinite sequences of integers. Prove that there exists an infinite sequence of integers $\left \{ z_n \right \} _{n\ge 1}$ such that for any positive integer $ n $, the following holds:

$$
\sum_{k|n} k \cdot z_k^{\frac{n}{k}} = \left( \sum_{k|n} k \cdot x_k^{\frac{n}{k}} \right) \cdot \left( \sum_{k|n} k \cdot y_k^{\frac{n}{k}} \right).
$$
