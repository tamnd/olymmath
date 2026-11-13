---
tag: JEQE1Y39X6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1968 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h368475
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25170
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225903
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
We are given a fixed point on the circle of radius $1$ , and going from this point along the circumference in the positive direction on curved distances $0, 1, 2, \ldots $ from it we obtain points with abscisas $n = 0, 1, 2, .\ldots$ respectively. How many points among them should we take to ensure that some two of them are less than the distance $\frac 15$ apart ?
