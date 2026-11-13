---
tag: W8XJFBJFGM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125790
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a regular hexagon in the plane, divide each side into 1000 equal segments, and connect the division points with line segments parallel to the sides of the hexagon. This will subdivide the hexagon into many small equilateral triangles. In the resulting grid, choose any equilateral triangle (regardless of size) and color its 3 vertices. Then continue coloring vertices in this manner, but do not recolor vertices that have already been colored, until no more coloring can be done. Prove that if only one vertex remains uncolored, then this vertex cannot be one of the original hexagon's vertices.
