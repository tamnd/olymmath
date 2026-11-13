---
tag: XGWA42BV0Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Costa Rica - Final Round
    url: https://artofproblemsolving.com/community/c6h2680197
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37024
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235047
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cr-mo/2013
    source: hf-ai-mo-aops
    label: 2013 Costa Rica - Final Round
---
Consider a pyramid whose base is a $2013$ -sided polygon. On each face of the pyramid the number $0$ is written. The following operation is carried out: a vertex is chosen from the pyramid and add or subtract $1$ from all the faces that contain that vertex. It's possible, after repeating a finite number of times the previous procedure, that all the faces of the pyramid have the number $1$ written?
