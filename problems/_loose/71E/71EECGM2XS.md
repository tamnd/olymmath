---
tag: 71EECGM2XS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h132552
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=79356
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2007
    source: hf-ai-mo-aops
    label: 2007 Vietnam National Olympiad
---
Given a regular 2007-gon. Find the minimal number $k$ such that: Among every $k$ vertexes of the polygon, there always exists 4 vertexes forming a convex quadrilateral such that 3 sides of the quadrilateral are also sides of the polygon.
