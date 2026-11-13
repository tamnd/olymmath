---
tag: N4Z1G3GB5Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242880
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2016
    source: hf-mathnet
    label: Baltic Way Baltic Way 2016
---
Find all pairs of real numbers $(x, y)$ that satisfy the equation
$$\frac{(x+y)(2-\sin(x+y))}{4\sin^2(x+y)}=\frac{xy}{x+y}$$
