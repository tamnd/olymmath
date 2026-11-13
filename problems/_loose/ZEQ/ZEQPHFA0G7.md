---
tag: ZEQPHFA0G7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Bulgarian Spring Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h3289150
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1541
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=240
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-spring/2024
    source: hf-ai-mo-aops
    label: 2024 Bulgarian Spring Mathematical Competition
  - at: bg-spring
    source: hf-mathnet
    label: Bulgaria Bulgarian Spring Tournament
---
Given is a triangle $ABC$ and two points $D \in AC, E \in BD$ such that $\angle DAE=\angle AED=\angle ABC$ . Show that $BE=2CD$ iff $\angle ACB=90^{\circ}$ .
