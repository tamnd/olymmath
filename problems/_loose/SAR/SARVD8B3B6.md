---
tag: SARVD8B3B6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h530274
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55686
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247088
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1996
    source: hf-ai-mo-aops
    label: 1996 All-Russian Olympiad
---
A convex polygon is given, no two of whose sides are parallel. For each side we consider the angle the side subtends at the vertex farthest from the side. Show that the sum of these angles equals $180^\circ$ .

*M. Smurov*
