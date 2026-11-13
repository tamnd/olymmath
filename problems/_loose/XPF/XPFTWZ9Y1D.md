---
tag: XPFTWZ9Y1D
kind: problem
type: answer
answer: n = 4k + 3 for k ≥ 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $n$ such that there exists a polynomial $f$ of degree $n$ with integer coefficients and a positive leading coefficient and a polynomial $g$ with integer coefficients such that the equality
$$
xf^2(x) + f(x) = (x^3 - x)g^2(x)
$$
holds for every real $x$.
