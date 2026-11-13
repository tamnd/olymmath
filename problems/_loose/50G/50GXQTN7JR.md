---
tag: 50GXQTN7JR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h83811
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22993
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2000
    source: hf-ai-mo-aops
    label: 2000 IberoAmerican
---
A convex hexagon is called *pretty* if it has four diagonals of length 1, such that their endpoints are all the vertex of the hexagon.
( $a$ ) Given any real number $k$ with $0<k<1$ find a *pretty* hexagon with area equal to $k$ ( $b$ ) Show that the area of any *pretty* hexagon is less than 1.
