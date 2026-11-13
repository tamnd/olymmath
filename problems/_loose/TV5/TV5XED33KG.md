---
tag: TV5XED33KG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Greece Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h62047
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40336
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2000
    source: hf-ai-mo-aops
    label: 2000 Greece Junior Math Olympiad
---
Given three non-collinear points in the plane, find a line which is equally distant from each of the points. How many such lines are there?
