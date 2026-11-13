---
tag: VAYHE067G1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 CMIMC Team
    url: https://artofproblemsolving.com/community/c6h1998897
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70818
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261852
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2020
    source: hf-ai-mo-aops
    label: 2020 CMIMC Team
---
Given $10$ points arranged in a equilateral triangular grid of side length $4$ , how many ways are there to choose two distinct line segments, with endpoints on the grid, that intersect in exactly one point (not necessarily on the grid)?
