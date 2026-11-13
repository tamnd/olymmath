---
tag: 75CF2VJNM4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90205
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=193
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In $\triangle A B C$, let $O$ be the circumcenter, $D$ the foot of the altitude from $A$ to $B C$, and $E$ the foot of the altitude from $B$ to $A C$. Show that $D E \perp C O$.
