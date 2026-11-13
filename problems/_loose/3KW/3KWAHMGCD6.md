---
tag: 3KWAHMGCD6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162820
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=308
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo
    source: hf-mathnet
    label: Slovenia National Math Olympiad
---
Let $H$ be the orthocenter of an acute triangle $ABC$ and $D$ a point inside the triangle $ABH$. The line through $D$ parallel to $AH$ intersects sides $BC$ and $AB$ at points $K$ and $L$. The line through $D$ parallel to $BH$ intersects segments $AC$ and $AB$ at points $M$ and $N$.

Prove that points $C, D$, and $H$ lie on the same line if points $K, L, M$, and $N$ lie on the same circle.
