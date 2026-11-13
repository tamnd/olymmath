---
tag: 6QB1N3QC4N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2024408
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28872
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228882
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2008 Tournament Of Towns
---
Given are finitely many points in the plane, no three on a line. They are painted in four colours, with at least one point of each colour. Prove that there exist three triangles, distinct but not necessarily disjoint, such that the three vertices of each triangle have different colours, and none of them contains a coloured point in its interior.
