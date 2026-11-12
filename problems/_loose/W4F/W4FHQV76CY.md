---
tag: W4FHQV76CY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25398
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given several red and several blue points. Some of them are connected by segments. We will call a point "special" if more than half of the points connected to it have a color different from its color. Special points can be repainted: at each step, any special point can be chosen and repainted in the other color. Prove that after several steps, there will be no special points left.
