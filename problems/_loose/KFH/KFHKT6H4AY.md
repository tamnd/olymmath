---
tag: KFHKT6H4AY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h270175
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55700
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249085
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1998
    source: hf-ai-mo-aops
    label: 1998 All-Russian Olympiad
---
Two polygons are given on the plane. Assume that the distance between any two vertices of the same polygon is at most 1, and that the distance between any two vertices of different polygons is at least $ 1/\sqrt{2}$ . Prove that these two polygons have no common interior points.

By the way, can two sides of a polygon intersect?
