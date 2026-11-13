---
tag: ERDVXB63Z3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226508
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal{P}$ be a convex polygon and $\textbf{T}$ be a triangle with vertices among the vertices of $\mathcal{P}$. By removing $\textbf{T}$ from $\mathcal{P}$, we end up with $0, 1, 2,$ or $3$ smaller polygons (possibly with shared vertices) which we call the effect of $\textbf{T}$. A triangulation of $P$ is a way of dissecting it into some triangles using some non-intersecting diagonals. We call a triangulation of $\mathcal{P}$ $\underline{\text{beautiful}}$, if for each of its triangles, the effect of this triangle contains exactly one polygon with an odd number of vertices. Prove that a triangulation of $\mathcal{P}$ is beautiful if and only if we can remove some of its diagonals and end up with all regions as quadrilaterals.
