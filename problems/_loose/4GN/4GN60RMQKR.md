---
tag: 4GN60RMQKR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90947
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=86
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $C$ be a circle in the $x y$-plane with center on the $y$-axis and passing through $A=(0, a)$ and $B=(0, b)$ with $0<a<b$. Let $P$ be any other point on the circle, let $Q$ be the intersection of the line through $P$ and $A$ with the $x$-axis, and let $O=(0,0)$. Prove that $\angle B Q P=\angle B O P$.
