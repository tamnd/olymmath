---
tag: M8M6YVZA5N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90270
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0008.parquet#row=315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Unit segments $A B$ and $C D$ are given such that $A B \sharp C D$. If $M$ is the midpoint of $A C, N$ the midpoint of $B D$, and $X$ the intersection of lines $A B$ and $C D$, given $M \neq N$ and $A \neq X \neq C$, show that the angle bisector of $\angle A X C$ is either parallel or perpendicular to $M N$.
