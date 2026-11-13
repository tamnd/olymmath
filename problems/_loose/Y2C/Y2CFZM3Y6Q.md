---
tag: Y2CFZM3Y6Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214655
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be a triangle with $AB \ne AC$ and $ I$ its incenter. Let $M$ be the midpoint of the side $BC$ and $D$ the projection of $I$ on $BC.$ The line $AI$ intersects the circle with center $M$ and radius $MD$ at $P$ and $Q.$ Prove that $\angle BAC + \angle PMQ = 180^{\circ}.$
