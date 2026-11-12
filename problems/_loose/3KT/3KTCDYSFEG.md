---
tag: 3KTCDYSFEG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54671
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a convex polyhedron, one vertex $A$ has degree 5, and all other vertices have degree 3. We call a coloring of the edges of the polyhedron in blue, red, and purple good if for each vertex of degree 3, all edges emanating from it are colored differently. It turns out that the number of good colorings is not divisible by 5. Prove that in one of the good colorings, some three consecutive edges emanating from $A$ are colored the same.
