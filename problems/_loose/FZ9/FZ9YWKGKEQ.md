---
tag: FZ9YWKGKEQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75671
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a triangle $ABC$, each pair of its sides differ in length by $d>0$. Let $T$ be its centroid, $I$ the center of the inscribed circle, and $\varrho$ its radius. Prove that

$$
S_{A I T}+S_{B I T}+S_{C I T} \geqq \frac{2}{3} d \varrho
$$

where $S_{X Y Z}$ denotes the area of triangle $XYZ$.

(Michal Rolínek)
