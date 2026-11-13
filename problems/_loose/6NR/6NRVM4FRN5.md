---
tag: 6NRVM4FRN5
kind: problem
type: answer
answer: (-∞, -15/4] ∪ {3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=52
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irska
---
Let
$$
A = \{ (x, y, z) \in \mathbb{R}^3 : xyz = 1,\ x + y + z = 3 \},
$$
under the function
$$
F(x, y, z) = xy + yz + zx.
$$
Determine the image of the set $A$ under $F$.
