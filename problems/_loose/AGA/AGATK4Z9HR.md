---
tag: AGATK4Z9HR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Mexico National Olympiad
    url: https://artofproblemsolving.com/community/c6h119970
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=47334
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243447
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mx-omm/1999
    source: hf-ai-mo-aops
    label: 1999 Mexico National Olympiad
---
A polygon has each side integral and each pair of adjacent sides perpendicular (it is not necessarily convex). Show that if it can be covered by non-overlapping $2 x 1$ dominos, then at least one of its sides has even length.
