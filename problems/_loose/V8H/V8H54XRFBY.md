---
tag: V8H54XRFBY
kind: problem
type: answer
answer: f(x) = x + c for any real constant c
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f : \mathbb{R} \to \mathbb{R}$ with the property
$$
|f(x+y) - f(x-y) - 2y| \le y^2, \forall x, y \in \mathbb{R}.
$$
