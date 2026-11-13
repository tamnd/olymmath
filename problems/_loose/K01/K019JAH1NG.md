---
tag: K019JAH1NG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242930
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=322
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2020
    source: hf-mathnet
    label: Baltic Way Baltic Way 2020
---
Pentagon $ABCDE$ with $CD\parallel BE$ is inscribed in circle $\omega$. Tangent to $\omega$ through $B$ intersects line $AC$ at $F$ in a way that $A$ lies between $C$ and $F$. Lines $BD$ and $AE$ intersect at $G$. Prove that $FG$ is tangent to the circumcircle of $\triangle ADG$.
