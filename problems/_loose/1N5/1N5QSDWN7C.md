---
tag: 1N5QSDWN7C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204537
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABCDEF$ be a regular hexagon of side length $2$. Let us construct parallels to its sides passing through its vertices and midpoints, which divide the hexagon into $24$ congruent equilateral triangles, whose vertices are called nodes. For each node $X$, we define its trio as the figure formed by three adjacent triangles with vertex $X$, such that their intersection is only $X$ and they are not congruent in pairs.
a) Determine the maximum possible area of a trio.
b) Show that there exists a node whose trios can cover the entire hexagon, and a node whose trios cannot cover the entire hexagon.
c) Determine the total number of triangles associated with the hexagon.
