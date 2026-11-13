---
tag: EH14KZHRN1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90288
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0008.parquet#row=175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In $\triangle A B C$, suppose the incircle has center $I$ and is tangent to $B C$ at $D$, and the $A$ excircle has center $I_{a}$ and is tangent to $B C$ at $D^{\prime}$. Show that $I D^{\prime}$ and $I_{a} D$ intersect on the altitude from $A$ to $B C$.
