---
tag: D5A8DASYHD
kind: problem
type: answer
answer: f(x) ≡ 0 on [0, 1]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=118
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integrable functions $f : [0, 1] \to \mathbb{R}$ with the property: for every $x \in [0, 1]$,
$$
\int_0^x f(t) dt = (f(x))^{2015} + f(x).
$$
