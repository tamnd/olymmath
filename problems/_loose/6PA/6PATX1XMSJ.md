---
tag: 6PATX1XMSJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265372
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Compute the number of (not necessarily convex) polygons in the coordinate plane with the following properties:

- If the coordinates of a vertex are $(x,y)$, then $x,y$ are integers and $1\leq |x|+|y|\leq 3$

- Every side of the polygon is parallel to either the x or y axis

- The point $(0,0)$ is contained in the interior of the polygon.

*2021 CCA Math Bonanza Lightning Round #4.2*
