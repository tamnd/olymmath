---
tag: BY7HC4SNG8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145918
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0002.parquet#row=7
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A B C D$ be a square, and let $E$ be an internal point on side $A D$. Let $F$ be the foot of the perpendicular from $B$ to $C E$. Suppose $G$ is a point such that $B G=F G$, and the line through $G$ parallel to $B C$ passes through the midpoint of $E F$. Prove that $A C<2 \cdot F G$.
