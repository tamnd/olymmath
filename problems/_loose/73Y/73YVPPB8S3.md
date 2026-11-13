---
tag: 73YVPPB8S3
kind: problem
type: answer
answer: x ∈ (n^{-1/n}, (n-1)^{-1/n}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 2$ be a positive integer. Find all real $x > 0$ such that
$$
\left[\frac{1}{x}\right] + \left[\frac{1}{x^n}\right] = n.
$$
