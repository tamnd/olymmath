---
tag: 4QTVFJ987S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=5532
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2019
    source: hf-numina-olympiads
    label: HMMT February
  - at: hmmt/2019
    source: hf-mathnet
    label: United States HMMT February 2019
---
A regular tetrahedron has volume 8. What is the volume of the set of all the points in the space (not necessarily inside the tetrahedron) that are closer to the center of the tetrahedron than any of the four vertices?
