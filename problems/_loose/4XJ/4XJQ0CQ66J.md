---
tag: 4XJQ0CQ66J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90753
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=1
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two triangles $A B C$ and $X Y Z$ have a common circumcircle. Suppose the nine-point circle $\gamma$ of $\triangle A B C$ passes through the midpoints of $\overline{X Y}$ and $\overline{X Z}$. Prove that $\gamma$ also passes through the midpoint of $\overline{Y Z}$.
