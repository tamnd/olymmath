---
tag: M8JATTXB6Z
kind: problem
type: answer
answer: f(x) = 0 for all real x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl
    source: hf-mathnet
    label: Baltic Way Baltic Way shortlist
---
Find all functions $f: \mathbb{R} \to \mathbb{R}$ that for all real $x$ and $y$ satisfy the equation
$$
f(y^2 - f(x)) = yf(x)^2 + f(x^2y + y).
$$
