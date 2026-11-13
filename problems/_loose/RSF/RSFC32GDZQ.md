---
tag: RSFC32GDZQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1675552
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16595
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2018
    source: hf-ai-mo-aops
    label: 2018 India IMO Training Camp
---
A convex polygon has the property that its vertices are coloured by three colors, each colour occurring at least once and any two adjacent vertices having different colours. Prove that the polygon can be divided into triangles by diagonals, no two of which intersect in the **interior** of the polygon, in such a way that all the resulting triangles have vertices of all three colours.
