---
tag: F16RF2CFET
kind: problem
type: answer
answer: sqrt[4]{450}/5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt
    source: hf-mathnet
    label: United States Harvard-MIT Mathematics Tournament
---
Let $x(t)$ be a solution to the differential equation
$$
\left(x + x'\right)^2 + x \cdot x'' = \cos t
$$
with $x(0) = x'(0) = \sqrt{\frac{2}{5}}$. Compute $x\left(\frac{\pi}{4}\right)$.
