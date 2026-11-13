---
tag: 3SJ9CM00WE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1936 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1877584
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56513
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249411
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1936
    source: hf-ai-mo-aops
    label: 1936 Moscow Mathematical Olympiad
---
Given an angle less than $180^o$ , and a point $M$ outside the angle. Draw a line through $M$ so that the triangle, whose vertices are the vertex of the angle and the intersection points of its legs with the line drawn, has a given perimeter.
