---
tag: 2SMRSRX7XT
kind: problem
type: answer
answer: "37418"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90242
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0008.parquet#row=283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Points $A, B, C, M$ are such that $B, M, C$ lie on a line, $A B=A C=353$, and $B M=$ $M C$. Point $I$ is on segment $A M$ such that the circle centered at $I$ through $M$ has radius 106 and is tangent to $A B$ and $A C$. Given that there are two possible areas of right triangle $A M B$, find the larger one.
