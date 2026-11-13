---
tag: VKW37ZBPVA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90455
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=274
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a triangle $A B C$, a circle $k$ is tangent to the lines $A B$ and $A C$ at $B$ and $P$. Let $H$ be the foot of perpendicular from the center $O$ of $k$ to $B C$, and let $T$ be the intersection point of $O H$ and $B P$. Prove that $A T$ bisects the segment $B C$.
