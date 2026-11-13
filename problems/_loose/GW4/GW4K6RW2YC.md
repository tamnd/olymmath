---
tag: GW4K6RW2YC
kind: problem
type: answer
answer: f(x) = x for all real x, and f(x) = -x for all real x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=27
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f : \mathbb{R} \to \mathbb{R}$ which fulfill
$$
f(x^2f(x) + f(y)) = f(f(x^3)) + y, \text{ for every } x, y \in \mathbb{R}.
$$
