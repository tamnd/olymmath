---
tag: Y5PHZMARX6
kind: problem
type: answer
answer: (1, 2, 3, ..., 2022) and (2, 3, 4, ..., 2022, 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=111
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
試決定滿足下列性質的所有 $(1, 2, \dots, 2022)$ 的排列 $(a_1, a_2, \dots, a_{2022})$:
對差距大於 $20^{22}$ 的兩正整數 $m, n$, 以下不等式恆成立:
$$
\text{gcd}(m + 1, n + a_1) + \text{gcd}(m + 2, n + a_2) + \dots + \text{gcd}(m + 2021, n + a_{2021}) < 2|m - n|.
