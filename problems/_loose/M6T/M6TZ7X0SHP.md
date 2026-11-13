---
tag: M6TZ7X0SHP
kind: problem
type: answer
answer: g(x) = c/x for any positive constant c
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=233
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathbb{R}_+$ be the set of all positive integers. Find all functions $g: \mathbb{R}_+ \to \mathbb{R}_+$ such that numbers $x, y \in \mathbb{R}_+$ satisfy the equality
$$
xg(x + g(y)) = g(g(xy) + 1).
$$
