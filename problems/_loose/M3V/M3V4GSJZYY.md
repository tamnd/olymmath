---
tag: M3V4GSJZYY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86192
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=47
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain XLV Olimpiada Matemática Española
---
Let $C_{1}$ and $C_{2}$ be two externally tangent circles at point $P$. From a point $A$ on $C_{2}$, we draw two tangent lines to $C_{1}$ at points $M$ and $M^{\prime}$. Let $N$ and $N^{\prime}$ be the respective intersection points, distinct from $A$, of these lines with $C_{2}$.

Prove that $\left|P N^{\prime}\right| \cdot|M N|=|P N| \cdot\left|M^{\prime} N^{\prime}\right|$.
