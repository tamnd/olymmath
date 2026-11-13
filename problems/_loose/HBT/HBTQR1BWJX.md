---
tag: HBTQR1BWJX
kind: problem
type: answer
answer: f(x) = 0 for all x, or f(x) = 1/2 for all x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 51st Ukrainian National Mathematical Olympiad, 3rd Round
---
Find all functions $f: \mathbb{R} \to \mathbb{R}$, such that:

1) For all real $x, y$ the following equality holds
$$
f(2x) = f(x+y)f(y-x) + f(x-y)f(-x-y).
$$

2) $f(x) \ge 0$ for all $x$.
