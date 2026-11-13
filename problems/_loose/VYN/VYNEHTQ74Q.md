---
tag: VYNEHTQ74Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=89
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a_0 = 1, a_1 = 3 \text{ and } a_{n+2} = 1 + \left\lfloor \frac{a_{n+1}^2}{a_n} \right\rfloor \text{ for all } n \ge 0.
Show that $a_{n+2} \cdot a_n - a_{n+1}^2 = 2^n$ for all integers $n$.
