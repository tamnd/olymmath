---
tag: D6FBCBDMG5
kind: problem
type: answer
answer: n=3, p=2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=132
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnamese Mathematical Competitions
---
Find all natural number $n$ and prime number $p$ for which the polynomial
$$
x^n - p x + p^2
$$
can be written as product of two polynomials from $\mathbb{Z}[x]$ with degree at least $1$.
