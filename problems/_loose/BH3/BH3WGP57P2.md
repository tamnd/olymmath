---
tag: BH3WGP57P2
kind: problem
type: answer
answer: f(x) = 2015x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathbb{R}^+$ be the set of all positive real numbers. Determine all functions $f : \mathbb{R}^+ \to \mathbb{R}^+$ satisfying
$$
f(x + y + f(y)) = 4030x - f(x) + f(2016y), \forall x, y \in \mathbb{R}^+.
$$
