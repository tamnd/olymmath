---
tag: 3WMRQ5FN5C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=58187
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the plane, there are 10 points: some of them are white, and the others are black. Some points are connected by segments. We will call a point special if more than half of the points connected to it have a color different from its own color. Each move involves selecting one of the special points (if any exist) and recoloring it to the opposite color. Prove that after several moves, there will be no special points left.
