---
tag: MMW9M3GKMR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227721
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Nordic_Mathematical_Olympiad/train/0000.parquet#row=40
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The circle whose diameter is the altitude dropped from the vertex $A$ of the triangle $ABC$ intersects the sides
$AB$ and $AC$ at $D$ and $E$, respectively $(A\ne D, A \ne E)$. Show that the circumcenter of $ABC$ lies on the altitude drawn from the vertex $A$ of the triangle $ADE$, or on its extension.
