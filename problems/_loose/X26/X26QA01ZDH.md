---
tag: X26QA01ZDH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 New Zealand MO
    url: https://artofproblemsolving.com/community/c6h3515602
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49193
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/New_Zealand/train/0000.parquet#row=64
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nz-nzmo/2024
    source: hf-ai-mo-aops
    label: 2024 New Zealand MO
  - at: nz-nzmo
    source: hf-mathnet
    label: New Zealand NZMO Round Two
---
Let $A,B,C,D,E$ be five different points on the circumference of a circle in that (cyclic) order. Let $F$ be the intersection of chords $BD$ and $CE$ . Show that if $AB=AE=AF$ then lines $AF$ and $CD$ are perpendicular.
