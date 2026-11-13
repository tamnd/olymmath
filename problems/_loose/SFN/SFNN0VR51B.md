---
tag: SFNN0VR51B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=292
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n)_{n=1}^{\infty}$ be a strictly increasing sequence of positive real numbers such that the inequality
$$
a_n(a_n - 2a_{n-1}) + a_{n-1}(a_{n-1} - 2a_{n-2}) \ge 0
$$
holds for all $n \ge 3$. Prove that for all $n \ge 2$ the inequality
$$
a_n \ge a_{n-1} + a_{n-2} + \dots + a_1
$$
holds as well.
