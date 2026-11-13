---
tag: F3R4K7HATT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250642
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Let $A$ be a point outside the circle $\omega$. Two points $B, C$ lie on $\omega$ such that $AB, AC$ are tangent to $\omega$. Let $D$ be any point on $\omega$ ($D$ is neither $B$ nor $C$) and $M$ the foot of perpendicular from $B$ to $CD$. The line through $D$ and the midpoint of $BM$ meets $\omega$ again at $P$. Prove that $AP \perp CP$
