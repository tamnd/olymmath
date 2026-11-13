---
tag: 2C3DD8QRYQ
kind: problem
type: answer
answer: f(x) = x or f(x) = -x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f : \mathbf{R} \to \mathbf{R}$ such that
$$
f(x^3 + f(y)) = x^2 f(x) + y,
$$
for all $x, y \in \mathbf{R}$.
