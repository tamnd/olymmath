---
tag: 3J9FJX9RJP
kind: problem
type: answer
answer: 2012^2/2011
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=293
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine Ukrainian Mathematical Olympiad
---
A function $f : \mathbb{R} \to \mathbb{R}$ is such that for all $x, y \in \mathbb{R}$
$$
f(x + 2xy) = f(x) + 2f(xy).
$$
Given that $f(2011) = 2012$, find $f(2012)$.
