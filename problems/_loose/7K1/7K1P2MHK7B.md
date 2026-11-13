---
tag: 7K1P2MHK7B
kind: problem
type: answer
answer: ln 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n)$ be the sequence such that $a_1 = \frac{3}{2}$ and
$$
a_{n+1} = a_n - \frac{3n+2}{2n(n+1)(2n+1)},\ n \ge 1.
$$
Find the limit $\lim_{n \to +\infty} a_n$.
