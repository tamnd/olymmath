---
tag: ZVYCFYATR2
kind: problem
appearances:
  - at: pumac/2008/ga5
    primary: true
  - at: pumac/2008/gb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2008 official paper
    url: https://pumac.princeton.edu/s/PUMaC2008_GeometryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h506297
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73207
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Infinitesimal Randall Munroe is glued to the center of a pentagon with side length $1$ . At each corner of the pentagon is a confused infinitesimal velociraptor. At any time, each raptor is running at one unit per second directly towards the next raptor in the pentagon (in counterclockwise order). How far does each confused raptor travel before it reaches Randall Munroe?
