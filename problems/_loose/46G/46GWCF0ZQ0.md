---
tag: 46GWCF0ZQ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235816
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=94
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
A hiking club wants to hike around a lake along an exactly circular route. On the shoreline they determine two points, which are the most distant from each other, and start to walk along the circle, which has these two points as the endpoints of its diameter. Can they be sure that, independent of the shape of the lake, they do not have to swim across the lake on any part of their route?
