---
tag: BFZ3DGE4XM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=68
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2007
    source: hf-mathnet
    label: India Indija TS 2007
---
Define $f, g, h$ on $\mathbb{Z} \times \mathbb{Z} \times \mathbb{Z}$ as follows:
$$
f(x, y, z) = (3x + 2y + 2z, 2x + 2y + z, 2x + y + 2z),
$$
$$
g(x, y, z) = (3x + 2y - 2z, 2x + 2y - z, 2x + y - 2z),
$$
$$
h(x, y, z) = (3x - 2y + 2z, 2x - y + 2z, 2x - 2y + z).
$$
Given a primitive Pythagorean triplet $(x, y, z)$, with $x > y > z$, prove that starting from $(5, 4, 3)$, the triplet $(x, y, z)$ can be obtained, in a unique way, by repeated application of $f, g, h$ in some order. (Example: $(697, 528, 455) = f \circ h \circ g \circ h(5, 4, 3)$.)
