---
tag: GAQMS921ZJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=5530
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=230
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
How many ways can one tile a $2 \times 8$ board with $1 \times 1$ and $2 \times 2$ tiles? Rotations and reflections of the same configuration are considered distinct.
