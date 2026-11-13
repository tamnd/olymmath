---
tag: K0FMANGM9Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90374
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A B C$ be a triangle and $P$ a point inside it. Lines $A P, B P, C P$ meet the opposite sides at $D, E, F$. Assume that the three quadrilaterals $P D C E, P E A F, P F B D$ are all bicentric. Prove that triangle $A B C$ is equilateral.

(A quadrilateral is bicentric if it can be inscribed inside a circle, and it also can have a circle inscribed inside it.)
