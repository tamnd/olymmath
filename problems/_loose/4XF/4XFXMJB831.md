---
tag: 4XFXMJB831
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Ireland
---
Suppose $x, y, z$ are positive numbers such that
$$
1 = 2xyz + xy + yz + zx.
$$
Prove that there are positive numbers $a, b, c$ such that
$$
x = \frac{a}{b+c}, y = \frac{b}{c+a}, z = \frac{c}{a+b}.
$$
