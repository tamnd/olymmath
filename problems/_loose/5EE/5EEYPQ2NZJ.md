---
tag: 5EEYPQ2NZJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221930
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabian Mathematical Competitions
---
Let $ABC$ be an acute, non-isosceles triangle with $H$ the orthocenter and $M$ the midpoint of $AH$. Denote $O_1$,$O_2$ as the centers of circles pass through $H$ and respectively tangent to $BC$ at $B$, $C$. Let $X$, $Y$ be the ex-centers which respect to angle $H$ in triangles $HMO_1$,$HMO_2$. Prove that $XY$ is parallel to $O_1O_2$.
