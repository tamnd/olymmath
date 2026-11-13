---
tag: SPZFD0ZHTA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15769
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia XLIII Russian mathematical olympiad
---
Quadrilateral $ABCD$ is inscribed in a circle $\Gamma$ with center at point $O$. Its diagonals $AC$ and $BD$ are perpendicular and intersect at point $P$, and point $O$ lies inside triangle $BPC$. A point $H$ is chosen on segment $BO$ such that $\angle BHP=90^{\circ}$. The circle $\omega$, circumscribed around triangle $PHD$, intersects segment $PC$ again at point $Q$. Prove that $AP = CQ$. (A. Kuznetsov)
