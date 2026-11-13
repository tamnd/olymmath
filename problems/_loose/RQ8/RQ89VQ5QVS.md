---
tag: RQ89VQ5QVS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f : \mathbb{R} \to \mathbb{R}$ such that
$$
f(xf(y) - f(x)) = 2f(x) + xy
$$
for all real numbers $x, y$.
