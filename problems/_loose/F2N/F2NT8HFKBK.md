---
tag: F2NT8HFKBK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0002.parquet#row=381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imo
    source: hf-mathnet
    label: United States IMO
---
Let $P(x)$ be a polynomial of degree $n > 1$ with integer coefficients and let $k$ be a positive integer. Consider the polynomial
$$
Q(x) = \underbrace{P(P(\dots(P(x)\dots)))}_{k \text{ P's}}
$$
Prove that there are at most $n$ integers $t$ such that $Q(t) = t$.
