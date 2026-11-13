---
tag: KNDK0BSNH1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263767
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0002.parquet#row=456
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The points of the plane are colored in black and white so that whenever three vertices of a parallelogram are the same color, the fourth vertex is that color, too. Prove that all the points of the plane are the same color.
