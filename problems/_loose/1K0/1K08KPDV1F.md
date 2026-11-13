---
tag: 1K08KPDV1F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263752
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0002.parquet#row=74
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A given line passes through the center $O$ of a circle. The line intersects the circle at points $A$ and $B$. Point $P$ lies in the exterior of the circle and does not lie on the line $AB$. Using only an unmarked straightedge, construct a line through $P$, perpendicular to the line $AB$. Give complete instructions for the construction and prove that it works.
