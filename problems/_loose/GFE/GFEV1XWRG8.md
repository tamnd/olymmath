---
tag: GFEV1XWRG8
kind: problem
type: answer
answer: f(x) = 0 and f(x) = x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f : \mathbb{R} \to \mathbb{R}$ such that
$$
2f(x)f(x + y) - f(x^2) = \frac{x}{2}(f(2x) + 4f(f(y)))
$$
for all $x, y \in \mathbb{R}$.
