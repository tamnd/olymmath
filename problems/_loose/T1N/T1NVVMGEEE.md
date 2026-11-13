---
tag: T1NVVMGEEE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=56
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
By $\lfloor x \rfloor$ we denote the largest integer that is smaller or equal to $x$ and by $\lceil x \rceil$ we denote the smallest integer that is greater or equal to $x$.

For every given pair $(a, b)$ of positive natural numbers find all natural numbers $n$ with
$$
b + \lfloor \frac{n}{a} \rfloor = \lfloor \frac{n+b}{a} \rfloor.
$$
