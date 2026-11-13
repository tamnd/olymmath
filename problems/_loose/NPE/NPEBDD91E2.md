---
tag: NPEBDD91E2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=292
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2025
    source: hf-mathnet
    label: Mongolia MMO2025 Round 3
---
Find all quintuples of positive integers $(a, b, c, m, n)$ such that $m \le 2n - 2$ and
$$
a^n + b^n = (a, b)^m (a + b), b^n + c^n = (b, c)^m (b + c), c^n + a^n = (c, a)^m (c + a).
$$
Here, $(x, y)$ denotes the greatest common divisor of $x$ and $y$.
(Bilegdemberel Bat-Amgalan)
