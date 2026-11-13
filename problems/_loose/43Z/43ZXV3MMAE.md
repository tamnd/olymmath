---
tag: 43ZXV3MMAE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2210740
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54807
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2008
    source: hf-ai-mo-aops
    label: 2008 239 Open Mathematical Olympiad
---
A connected graph has $100$ vertices, the degrees of all the vertices do not exceed $4$ and no two vertices of degree $4$ are adjacent. Prove that it is possible to remove several edges that have no common vertices from this graph such that there would be no triangles in the resulting graph.
