---
tag: 67K9THZ9BS
kind: problem
type: answer
answer: f(x) = e^{(3x^2 - x)/2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=89
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the continuous functions $f : \mathbb{R} \to \mathbb{R}$ with the properties $f(1) = e$ and $f(x + y) = e^{3xy} \cdot f(x) \cdot f(y)$, for all $x, y \in \mathbb{R}$.
