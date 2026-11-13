---
tag: 3TPSWXS0FK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Grosman Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2927854
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=45045
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: il-grossman/2022
    source: hf-ai-mo-aops
    label: 2022 Grosman Mathematical Olympiad
---
Along a circle-shaped path are $100$ boys and $100$ girls. The distance between two points on the path is defined as the length of the smaller arc through which it is possible to get from one point to the other.
Prove that the sum of distances between pairs of the same gender is always less than or equal to the sum of distances between all pairs of a boy and a girl.
