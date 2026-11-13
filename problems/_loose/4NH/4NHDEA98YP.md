---
tag: 4NHDEA98YP
kind: problem
type: answer
answer: P(x) = ±(x + 6)^n for any positive integer n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=372
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all non-constant polynomials $P(x)$ with real coefficients that satisfy
$$
P(x^3 - 7x) = P(x - 7)P(x - 8)P(x - 3)
$$
for all $x \in \mathbb{R}$.
