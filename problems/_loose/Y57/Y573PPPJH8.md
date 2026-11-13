---
tag: Y573PPPJH8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116526
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a finite set of points in the plane, no three of which are collinear. For each convex polygon $p$ with vertices in $S$, let $a(p)$ be the number of vertices of $p$, and $b(p)$ be the number of points in $S$ that are outside $p$. Prove that for any real number $x$, $2 x^{a(p)}(1-x)^{b(p)}=1$, where $p$ ranges over all convex polygons in $S$ (including triangles, and a line segment, a point, and the empty set are considered convex 2-gons, convex 1-gons, and a convex 0-gon, respectively).
