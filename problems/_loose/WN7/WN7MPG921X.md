---
tag: WN7MPG921X
kind: problem
type: answer
answer: f(x) = k x for any constant k > 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2016
    source: hf-mathnet
    label: Slovenia Slovenija 2016
---
Find all functions $f: \mathbb{R}^+ \to \mathbb{R}^+$, such that
$$
f\left(\frac{x}{f(y)}\right) = \frac{(f(x))^2}{y f(f(x))}
$$
for all $x, y > 0$.
