---
tag: N919S7MXPM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90696
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=147
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A B C D$ be an isosceles trapezoid, and let $E$ be the foot of the altitude from $A$ to line $B C$. Prove that line $D E$ passes through the centroid of $\triangle A B C$.
