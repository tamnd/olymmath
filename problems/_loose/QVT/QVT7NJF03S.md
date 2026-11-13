---
tag: QVT7NJF03S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188492
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=318
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Macedonian Junior Mathematical Olympiad
---
Let $A$ and $B$ be two identical convex polygons, each with an area of 2015. Polygon $A$ is divided into polygons with areas $A_{1}, A_{2}, \ldots, A_{2015}$, and polygon $B$ is divided into polygons with areas $B_{1}, B_{2}, \ldots, B_{2015}$. Using 2015 colors, $A_{1}, A_{2}, \ldots, A_{2015}, B_{1}, B_{2}, \ldots, B_{2015}$ are colored such that $A_{i}$ is colored differently from $A_{j}$ and $B_{i}$ is colored differently from $B_{j}$, for $i \neq j$. After superimposing the polygons $A$ and $B$, the sum of the areas of the parts that have the same color is calculated.

Prove that there exists a coloring of the polygons for which this sum is at least 1.
