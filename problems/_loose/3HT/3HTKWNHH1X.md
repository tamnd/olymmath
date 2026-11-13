---
tag: 3HTKWNHH1X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248666
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a finite set $K_0$ of points (in the plane or space).
The sequence of sets $K_1, K_2, ... , K_n, ...$ is build according to the rule: *we take all the points of $K_i$, add all the symmetric points with respect to all its points, and, thus obtain $K_{i+1}$.*
a) Let $K_0$ consist of two points $A$ and $B$ with the distance $1$ unit between them. For what $n$ the set $K_n$ contains the point that is $1000$ units far from $A$?
b) Let $K_0$ consist of three points that are the vertices of the equilateral triangle with the unit square. Find the area of minimal convex polygon containing $K_n. K_0$ below is the set of the unit volume tetrahedron vertices.
c) How many faces contain the minimal convex polyhedron containing $K_1$?
d) What is the volume of the above mentioned polyhedron?
e) What is the volume of the minimal convex polyhedron containing $K_n$?
