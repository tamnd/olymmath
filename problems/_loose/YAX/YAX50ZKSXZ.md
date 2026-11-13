---
tag: YAX50ZKSXZ
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest positive number $m$ such that there exists unique function $f: \mathbb{R}^+ \to \mathbb{R}^+$ such that
$$
f(x + f(y)) = f(x) + \frac{mx^5 f(y)}{f(x)^2} + f(y^2), \forall x, y > 0.
$$
