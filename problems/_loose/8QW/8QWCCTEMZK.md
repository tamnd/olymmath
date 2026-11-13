---
tag: 8QWCCTEMZK
kind: problem
type: answer
answer: '[(1, 1), (2, 5), (5, 2)]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=423
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all pairs $(a, b)$ of positive integers such that
$$
a^2 + b = p^m \text{ and } b^2 + a = p^n
$$
for some prime $p$ and positive integers $m, n$.
