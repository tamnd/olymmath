---
tag: FVVBEJXCN5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Spain Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h423250
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7258
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome/2011
    source: hf-ai-mo-aops
    label: 2011 Spain Mathematical Olympiad
---
Each pair of vertices of a regular $67$ -gon is joined by a line segment. Suppose $n$ of these segments are selected, and each of them is painted one of ten available colors. Find the minimum possible value of $n$ for which, regardless of which $n$ segments were selected and how they were painted, there will always be a vertex of the polygon that belongs to seven segments of the same color.
