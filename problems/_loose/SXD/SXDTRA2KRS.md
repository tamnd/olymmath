---
tag: SXDTRA2KRS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Spain Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h389690
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60006
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome/2000
    source: hf-ai-mo-aops
    label: 2000 Spain Mathematical Olympiad
---
Four points are given inside or on the boundary of a unit square. Prove that at least two of these points are on a mutual distance at most $1.$
