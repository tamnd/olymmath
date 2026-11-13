---
tag: PQJHS6D6VP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1968 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h368387
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25166
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225899
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1968
    source: hf-ai-mo-aops
    label: 1968 IMO Shortlist
---
Given $k$ parallel lines $l_1, \ldots, l_k$ and $n_i$ points on the line $l_i, i = 1, 2, \ldots, k$ , find the maximum possible number of triangles with vertices at these points.
