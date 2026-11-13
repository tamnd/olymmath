---
tag: AEFZYBRW28
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90144
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=217
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a triangle $A B C$ such that $\angle B=90^{\circ}$, denote by $k$ the circle with center on $B C$ that is tangent to $A C$. Denote by $T$ a point of tangency of $k$ and the tangent from $A$ to $k$ (different from $A C$ ). If $B^{\prime}$ is the midpoint of $A C$ and $M$ the intersection of $B B^{\prime}$ and $A T$, prove that $M B=M T$.
