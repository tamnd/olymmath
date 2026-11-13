---
tag: CD4BBJBX1B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190281
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=52
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Macedonian Mathematical Competitions
---
Let $ABC$ be an isosceles triangle with $\overline{AB}=\overline{AC}$. Let $D$ be the midpoint of side $BC$, $M$ be the midpoint of segment $AD$, and $N$ be the projection of point $D$ onto $BM$. Prove that $\measuredangle ANC=90^{\circ}$.
