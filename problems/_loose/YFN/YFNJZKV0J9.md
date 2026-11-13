---
tag: YFNJZKV0J9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14163
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia XL Russian mathematical olympiad
---
Triangle $ABC$ is inscribed in circle $\Omega$ with center $O$. The circle constructed on $AO$ as its diameter intersects the circumcircle of triangle $OBC$ at point $S \neq O$. The tangents to $\Omega$ at points $B$ and $C$ intersect at point $P$. Prove that points $A, S$, and $P$ lie on the same line.
