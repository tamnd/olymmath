---
tag: X3F8Y0WC5G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85456
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematica competitions in Croatia
---
Let $H$ be the orthocenter of an acute triangle $ABC$. The line through $A$ perpendicular to $AC$ and the line through $B$ perpendicular to $BC$ intersect at $D$. The circle with center $C$ passing through $H$ intersects the circumcircle of triangle $ABC$ at points $E$ and $F$. Prove that $|DE|=|DF|=|AB|$.
