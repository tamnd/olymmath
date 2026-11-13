---
tag: Z0DWDBX6CD
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
    capture: hf-mathnet/Turkey/train/0000.parquet#row=67
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all primes $p$ for which there exist an odd integer $n$ and a polynomial $Q(x)$ with integer coefficients such that the polynomial $1 + p n^2 + \prod_{i=1}^{2p-2} Q(x^i)$ has at least one integer root.
