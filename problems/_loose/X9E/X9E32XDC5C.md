---
tag: X9E32XDC5C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Kvant 2023
    url: https://artofproblemsolving.com/community/c6h3027479
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26659
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227205
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: journal-kvant/2023
    source: hf-ai-mo-aops
    label: Kvant 2023
---
A convex 51-gon is given. For each of its vertices and each diagonal that does not contain this vertex, we mark in red a point symmetrical to the vertex relative to the middle of the diagonal. Prove that strictly inside the polygon there are no more than 20400 red dots.

*Proposed by P. Kozhevnikov*
