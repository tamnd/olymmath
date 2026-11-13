---
tag: 2XW5VBEV24
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=295
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f : \mathbb{R} \to \mathbb{R}$ be a function so that for every $x, y \in \mathbb{R}$, $x < y$, there exists $z \in (x, y)$ so that
$$
(y - x)f(z) \le (y - z)f(x) + (z - x)f(y).
$$

a) Give an example of a non-convex function $f$ with the given property.
b) Prove that a continuous function with the given property is convex.
