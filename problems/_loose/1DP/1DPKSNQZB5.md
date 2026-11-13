---
tag: 1DPKSNQZB5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90739
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0002.parquet#row=334
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $O$ be the intersection of the diagonals $A C$ and $B D$ of the convex quadrilateral $A B C D$. Let $S_{1}, S_{2}, S_{3}$, and $S_{4}$ denote the areas of the triangles $A B O, B C O, C D O$, and $D A O$.

(a) Prove that $S_{1} \cdot S_{3}=S_{2} \cdot S_{4}$.

(b) Does there exist a quadrilateral $A B C D$ such that $S_{1}, S_{2}, S_{3}$, and $S_{4}$ are consecutive positive integers in some order?
