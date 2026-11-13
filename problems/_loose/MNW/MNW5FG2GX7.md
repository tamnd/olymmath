---
tag: MNW5FG2GX7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205675
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=25
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given convex quadrilateral $ABCD$ inscribed in circle $(O,R)$ (with center $O$ and radius $R$). With centers the vertices of the quadrilateral and radii $R$, we consider the circles $C_A(A,R), C_B(B,R), C_C(C,R), C_D(D,R)$. Circles $C_A$ and $C_B$ intersect at point $K$, circles $C_B$ and $C_C$ intersect at point $L$, circles $C_C$ and $C_D$ intersect at point $M$ and circles $C_D$ and $C_A$ intersect at point $N$ (points $K,L,M,N$ are the second common points of the circles given they all pass through point $O$). Prove that quadrilateral $KLMN$ is a parallelogram.
