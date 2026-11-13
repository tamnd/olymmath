---
tag: HRE3MNNFHB
kind: problem
type: answer
answer: f maps the unit square onto the unit interval [0, 1], and f is not one-to-one on the square.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland IRL_ABooklet
---
Define $f$ on the unit square $S = [0, 1] \times [0, 1] = \{(x, y) \in \mathbb{R}^2 : 0 \le x, y \le 1\}$ by
$$
f(x, y) = x\sqrt{1-y^2} + y\sqrt{1-x^2}.
$$
Prove that $f$ maps $S$ onto the unit interval $[0, 1]$. Is $f$ one-to-one on $S$?
