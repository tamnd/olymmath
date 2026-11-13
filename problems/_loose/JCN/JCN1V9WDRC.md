---
tag: JCN1V9WDRC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Bulgarian Winter Tournament
    url: https://artofproblemsolving.com/community/c6h3244051
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1557
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205067
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-winter/2024
    source: hf-ai-mo-aops
    label: 2024 Bulgarian Winter Tournament
  - at: bg-winter
    source: hf-mathnet
    label: Bulgaria Bulgarian Winter Tournament
---
There are $11$ points equally spaced on a circle. Some of the segments having endpoints among these vertices are drawn and colored in two colors, so that each segment meets at an internal for it point at most one other segment from the same color. What is the greatest number of segments that could be drawn?
