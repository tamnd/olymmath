---
tag: 3XVQA5ZPHY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=35368
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Distance on a Surface. We can associate with each pair of points on a closed convex surface the shortest of the arcs connecting them (it is not excluded that such an arc is not unique, for example, for any sphere, there are infinitely many shortest arcs between diametrically opposite points of the sphere). The distance between points $A$ and $B$ on the surface is called the length of the shortest arc $AB$. Now we can talk about the distance $PX$ between $P$ and any point $X$ on our surface. For each point $P$, we can find the farthest point $Q$ from it on the surface (of course, such a point may also not be unique). The example of a sphere might create the impression that for such a pair of points $PQ$, there are always at least two shortest arcs connecting them. Show that for some tetrahedron, this statement is false.
