---
tag: 8NEDF65XQR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230548
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=45
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 66th Belarusian Mathematical Olympiad
---
A point $A_1$ is marked inside an acute non-isosceles triangle $ABC$ such that $\angle A_1AB = \angle A_1BC$ and $\angle A_1AC=\angle A_1CB$. Points $B_1$ and $C_1$ are defined same way. Let $G$ be the gravity center if the triangle $ABC$.
Prove that the points $A_1,B_1,C_1,G$ are concyclic.
