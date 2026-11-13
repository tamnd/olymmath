---
tag: 4PP2JT6FKJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3130719
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74058
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2020
    source: hf-ai-mo-aops
    label: 2020 Stanford Mathematics Tournament
---
On each edge of a regular tetrahedron, five points that separate the edge into six equal segments are marked. There are twenty planes that are parallel to a face of the tetrahedron and pass through exactly three of the marked points. When the tetrahedron is cut along each of these twenty planes, how many new tetrahedrons are produced?
