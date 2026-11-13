---
tag: GME0CKGNEJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232371
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=60
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the intersection of the diagonals $AC$ and $BD$ of the convex quadrilateral $ABCD$ be point $E$. Let $M$ be the midpoint of $AE$ and $N$ be the midpoint of $CD$. It's known that $BD$ bisects $\angle ABC$. Prove that $ABCD$ is cyclic if and only if $MBCN$ is cyclic.
