---
tag: 6MXEHRC8E0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h428408
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28836
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228851
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2007 Tournament Of Towns
---
From a regular octahedron with edge $1$ , cut off a pyramid about each vertex. The base of each pyramid is a square with edge $\frac 13$ . Can copies of the polyhedron so obtained, whose faces are either regular hexagons or squares, be used to tile space?
