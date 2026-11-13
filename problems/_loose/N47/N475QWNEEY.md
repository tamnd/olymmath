---
tag: N475QWNEEY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250858
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=430
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Let $(O)$ be a circle, and $BC$ be a chord of $(O)$ such that $BC$ is not a diameter. Let $A$ be a point on the larger arc $BC$ of $(O)$, and let $E, F$ be the feet of the perpendiculars from $B$ and $C$ to $AC$ and $AB$, respectively.
1. Prove that the tangents to $(AEF)$ at $E$ and $F$ intersect at a fixed point $M$ when $A$ moves on the larger arc $BC$ of $(O)$.
2. Let $T$ be the intersection of $EF$ and $BC$, and let $H$ be the orthocenter of $ABC$. Prove that $TH$ is perpendicular to $AM$.
