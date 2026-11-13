---
tag: CSXPNFW5NV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Oral Moscow Geometry Olympiad
    url: https://artofproblemsolving.com/community/c6h2319708
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57008
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249840
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-oral-geometry/2003
    source: hf-ai-mo-aops
    label: 2003 Oral Moscow Geometry Olympiad
---
A circle is located on the plane. What is the smallest number of lines you need to draw so that, symmetrically reflecting a given circle relative to these lines (in any order a finite number of times), it could cover any given point of the plane?
