---
tag: XK0QGD4XRQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Sharygin Geometry Olympiad
    url: https://artofproblemsolving.com/community/c6h3125023
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1161
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204817
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sharygin/2023
    source: hf-ai-mo-aops
    label: 2023 Sharygin Geometry Olympiad
---
There are $43$ points in the space: $3$ yellow and $40$ red. Any four of them are not coplanar. May the number of triangles with red vertices hooked with the triangle with yellow vertices be equal to $2023$ ? Yellow triangle is hooked with the red one if the boundary of the red triangle meet the part of the plane bounded by the yellow triangle at the unique point. The triangles obtained by the transpositions of vertices are identical.
