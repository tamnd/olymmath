---
tag: T9JCX24NJJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90396
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=363
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a quadrilateral $A B C D$ extend $A D$ and $B C$ to meet at $E$ and $A B$ and $D C$ to meet at $F$. Draw the circumcircles of triangle $A B E, A D F, D C E$, and $B C F$. Prove that all four of these circles pass through a single point.
