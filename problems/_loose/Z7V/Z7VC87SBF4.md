---
tag: Z7VC87SBF4
kind: problem
type: answer
answer: 2*sqrt(3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=374
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th NMO
---
Consider the set
$$
A = \{(x, y, z) \mid x, y, z \in \mathbb{R}, 88(x+y+z) = 33(xy+xz+yz) = 24(x^2+y^2+z^2) \neq 0\}.
$$
$$
\text{Determine } \max_{(x,y,z) \in A} (\max\{x, y, z\} - \min\{x, y, z\}).
$$
