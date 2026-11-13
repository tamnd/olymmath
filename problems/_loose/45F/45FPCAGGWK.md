---
tag: 45FPCAGGWK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247146
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a parallelogram $XYZT$, and the variable points $A, B, C, D$ lie on the sides $XY, XT, TZ, ZY$ respectively, so that $ABCD$ is cyclic with circumcenter $O$, $AC \parallel XT$, and $BD \parallel XY$. Let $P$ be the intersection point of the lines $AD$ and $BC$, and let $Q$ be the intersection of the lines $AB$ and $CD$. Prove that the circle $(POQ)$ passes through a fixed point.
