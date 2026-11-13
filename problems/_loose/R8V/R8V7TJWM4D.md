---
tag: R8V7TJWM4D
kind: problem
type: answer
answer: f(x) = x for all positive real x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Find all functions $f : \mathbb{R}^+ \rightarrow \mathbb{R}^+$ such that for all positive real numbers $x$, $y$
$$
\frac{x + f(y)}{x f(y)} = f\left(\frac{1}{y} + f\left(\frac{1}{x}\right)\right)
$$
