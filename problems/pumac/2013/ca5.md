---
tag: V3HZ2DQK2D
kind: problem
appearances:
  - at: pumac/2013/ca5
    primary: true
  - at: pumac/2013/cb4
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_CombinatoricsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563841
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10172
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Mereduth has many red boxes and many blue boxes. Coloon has placed five green boxes in a row on the ground, and Mereduth wants to arrange some number of her boxes on top of his row. Assume that each box must be placed so that it straddles two lower boxes. Including the one with no boxes, how many arrangements can Mereduth make?
