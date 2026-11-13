---
tag: 70QPNF3MV2
kind: problem
type: answer
answer: BE=CF
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90474
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=25
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In triangle $A B C$, let $D$ be the midpoint of side $B C$. Let $E$ and $F$ be the feet of the perpendiculars to $A D$ from $B$ and $C$, respectively. Prove that $B E=C F$.
