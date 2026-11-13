---
tag: SJSQT58YXE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128284
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a plane, we are given line $l$, two points $A$ and $B$ neither of which lies on line $l$, and the reflection $A_{1}$ of point $A$ across line $l$. Using only a straightedge, construct the reflection $B_{1}$ of point $B$ across line $l$. Prove that your construction works.
Note: "Using only a straightedge" means that you can perform only the following operations:
(a) Given two points, you can construct the line through them.
(b) Given two intersecting lines, you can construct their intersection point.
(c) You can select (mark) points in the plane that lie on or off objects already drawn in the plane. (The only facts you can use about these points are which lines they are on or not on.)
