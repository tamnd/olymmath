---
tag: 2BR9M0D3CS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90608
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=136
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A line $l$ and two points $A$ and $B$ are given in a plane in such a way that $A$ belongs to $l$ but $B$ doesn't. Construct the circle $k$ that passes through $B$ and touches $l$ at the point $A$.
