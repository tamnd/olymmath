---
tag: SB4MRJ75GF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h52304
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42226
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238811
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2005
    source: hf-ai-mo-aops
    label: 2005 India IMO Training Camp
---
Consider a $n$ -sided polygon inscribed in a circle ( $n \geq 4$ ). Partition the polygon into $n-2$ triangles using **non-intersecting** diagnols. Prove that, irrespective of the triangulation, the sum of the in-radii of the triangles is a constant.
