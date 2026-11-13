---
tag: 7ME0DMHQR9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Thailand/train/0000.parquet#row=31
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: th-tmo
    source: hf-mathnet
    label: Thailand Thailand Mathematical Olympiad
---
Let $f : (0, \infty) \to \mathbb{R}$ be such that for all $x, y \in (0, \infty)$,
$$
f(x + y) = f\left(\frac{x + y}{xy}\right) + f(xy).
$$
Show that $f(xy) = f(x) + f(y)$ for all $x, y \in (0, \infty)$.
