---
tag: CZB22G3SZZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a finite number of points on a plane. We paint each of them red or blue, then connect some of them with each other. A point is called lonely if more than half of the points connected to it have a different color than its own. In a step, we change the color of any lonely point. Show that after some steps (regardless of the specific choices), there will be no more lonely points.
