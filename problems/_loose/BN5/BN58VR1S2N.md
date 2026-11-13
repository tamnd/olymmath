---
tag: BN58VR1S2N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=355
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
La suite $(a_{n})$ est définie par $a_{1}=1$ et
$$
a_{n} = \frac{1}{n} + \frac{1}{a_{1} \cdot \ldots \cdot a_{n-1}}
$$
Montrer que pour tout entier $m \geqslant 3$, on a $a_{m} \leqslant 1$.
