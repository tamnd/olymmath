---
tag: TTDYWRY1H7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188321
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Macedonian Mathematical Olympiad
---
The circles $k_{1}$ and $k_{2}$ intersect at points $A$ and $B$. A line through $B$ intersects the circles $k_{1}$ and $k_{2}$ again at points $C$ and $D$, respectively, such that $C$ lies outside $k_{2}$ and $D$ lies outside $k_{1}$. Let $M$ be the intersection of the tangents to $k_{1}$ and $k_{2}$ drawn from $C$ and $D$, respectively, and $A M \cap C D=\{P\}$. The tangent drawn from $B$ to $k_{1}$ intersects $A D$ at point $L$, and the tangent drawn from $B$ to $k_{2}$ intersects $A C$ at point $K$. Let $K P \cap M D=\{N\}$ and $L P \cap M C=\{Q\}$. Prove that quadrilateral MNPQ is a parallelogram.
