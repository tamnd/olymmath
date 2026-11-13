---
tag: Y1HN21G8KN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235910
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=12
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
The midpoints of the sides $BC, CA$, and $AB$ of triangle $ABC$ are $D, E$, and $F$, respectively. The reflections of centroid $M$ of $ABC$ around points $D, E$, and $F$ are $X, Y$, and $Z$, respectively. Segments $XZ$ and $YZ$ intersect the side $AB$ in points $K$ and $L$, respectively. Prove that $AL = BK$.
