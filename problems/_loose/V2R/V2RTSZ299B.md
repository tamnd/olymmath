---
tag: V2RTSZ299B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Malaysia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2675090
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=47015
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: my-omk/2018
    source: hf-ai-mo-aops
    label: 2018 Malaysia National Olympiad
---
Hassan has a piece of paper in the shape of a hexagon. The interior angles are all $120^o$ , and the side lengths are $1$ , $2$ , $3$ , $4$ , $5$ , $6$ , although not in that order. Initially, the paper is in the shape of an equilateral triangle, then Hassan has cut off three smaller equilateral triangle shapes, one at each corner of the paper. What is the minimum possible side length of the original triangle?
