---
tag: 5FHPMS6RMZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=83
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 58th Ukrainian National Mathematical Olympiad
---
Given a foundation that is in a form of a rectangle $2m \times 2n$ that is divided into smaller $1 \times 1$ squares. There is a gap of length $1$ between any two adjacent squares. The foundation is covered by several layers of bricks of size $2 \times 1$. Every layer consists of $2mn$ bricks and each brick fully covers exactly one gap of length $1$. Such cover is called *strong*, if every gap is covered by a brick at least in one of the layers. What is the minimum amount of layers that make a strong cover?
(Bogdan Rublyov)
