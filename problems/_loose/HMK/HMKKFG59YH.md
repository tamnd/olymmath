---
tag: HMKKFG59YH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250870
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a set $S$ of $200$ points on the plane such that $100$ points are the vertices of a convex polygon $A$ and the other $100$ points are in the interior of the polygon. Moreover, no three of the given points are collinear. A triangulation is a way to partition the interior of the polygon $A$ into triangles by drawing the edges between some two points of S such that any two edges do not intersect in the interior, and each point in $S$ is the vertex of at least one triangle.
1. Prove that the number of edges does not depend on the triangulation.
2. Show that for any triangulation, one can color each triangle by one of three given colors such that any two adjacent triangles have different colors.
