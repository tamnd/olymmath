---
tag: Z01YABQ9NZ
kind: problem
type: answer
answer: 2 - sqrt(2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the maximum value of $k$ such that: for all $a, b, c$ are sidelengths of some triangle, then
$$
k \cdot \frac{3(a^2 + b^2 + c^2)}{(a + b + c)^2} + \sqrt{\frac{ab + bc + ca}{a^2 + b^2 + c^2}} \leq k + 1.
$$
