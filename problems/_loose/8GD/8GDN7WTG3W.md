---
tag: 8GDN7WTG3W
kind: problem
type: answer
answer: f(x) = x^2 + x + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all functions $f: \mathbb{R} \to \mathbb{R}^+$ satisfying the conditions
$$
i.\ f(x^2) = f(x)^2 - 2x f(x),$$
$$
ii.\ f(-x) = f(x - 1),$$
$$
iii.\ 1 < x < y \text{ implies } f(x) < f(y).$$
for all real numbers $x$ and $y$.
