---
tag: SHH4NEN643
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12244
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia XL Russian mathematical olympiad
---
On side $AB$ of triangle $ABC$, points $C_{1}$ and $C_{2}$ are chosen. Similarly, on side $BC$, points $A_{1}$ and $A_{2}$ are chosen, and on side $AC$, points $B_{1}$ and $B_{2}$ are chosen. It turns out that segments $A_{1} B_{2}$, $B_{1} C_{2}$, and $C_{1} A_{2}$ have equal lengths, intersect at one point, and the angle between any two of them is $60^{\circ}$. Prove that $\frac{A_{1} A_{2}}{BC}=\frac{B_{1} B_{2}}{CA}=\frac{C_{1} C_{2}}{AB}$.

(I. Bogdanov)
