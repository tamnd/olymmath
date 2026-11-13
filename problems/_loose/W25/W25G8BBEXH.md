---
tag: W25G8BBEXH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90937
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=371
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider $\triangle A B C$. Choose a point $M$ on its side $B C$ and let $O$ be the center of the circle passing through the vertices of $\triangle A B M$. Let $k$ be the circle that passes through $A$ and $M$ and whose center lies on line $B C$. Let line $M O$ intersect $k$ again in point $K$. Prove that the line $B K$ is the same for any choice of point $M$ on segment $B C$, so long as all of these constructions are well-defined.
