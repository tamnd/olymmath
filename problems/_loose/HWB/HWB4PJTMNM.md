---
tag: HWB4PJTMNM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90774
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=46
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A B C D E$ be a convex pentagon circumscribed around a circle $\omega$ such that $A B \| C D$ and $B C \| D E$. Locate points $X$ and $Y$ on rays $A B$ and $E D$, respectively, such that $B X=A B$ and $D Y=D E$. Prove that $X Y$ is tangent to $\omega$.
