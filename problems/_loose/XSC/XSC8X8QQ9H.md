---
tag: XSC8X8QQ9H
kind: problem
type: answer
answer: A1 = [sqrt(2), ∞) and A2 = [sqrt(2), ∞).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=10
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest subsets $A_1, A_2 \subset (0, \infty)$ such that:
$$
ab + cd \ge \sqrt{a^2 + b^2} + \sqrt{c^2 + d^2}, \forall a, b, c, d \in A_1, (1)
$$
$$
ab + cd \ge \sqrt{a^2 + c^2} + \sqrt{b^2 + d^2}, \forall a, b, c, d \in A_2. (2)
$$
