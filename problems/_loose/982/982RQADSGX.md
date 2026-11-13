---
tag: 982RQADSGX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=273
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $(a_n)$, $n \in \mathbb{N}$ is defined as
$$
a_1 = 1,\ a_2 = 2,\ a_3 = 3 \text{ and } a_n = \frac{a_{n-1} a_{n-2} + 7}{a_{n-3}}, \text{ for } n \ge 4.
$$
Prove that all terms of this sequence are integers.
