---
tag: TXM3Q08PK6
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107810
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
To divide a polygon into a series of triangles using diagonals that do not intersect at interior points, it is necessary to take several points inside the shape as the vertices of the divided triangles when needed. These vertices are called "auxiliary vertices." The lines connecting auxiliary vertices and the lines connecting auxiliary vertices to vertices are all called diagonals. No two diagonals should intersect at an interior point. This method of dividing a polygon into a series of triangles is called the "triangulation" of the polygon.

Let $n$ be a positive integer not less than 5. To divide a regular $n$-sided polygon into a series of obtuse triangles, try to find the minimum possible value of the number of triangles $m$ formed.
