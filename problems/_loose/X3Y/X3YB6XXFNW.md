---
tag: X3YB6XXFNW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81895
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider light bulbs placed on the vertices of a graph $G=(V, E)$.

At each step, one can change the state (on or off) of a bulb and of all the bulbs on the adjacent vertices.

Is it always possible to go from the configuration where all bulbs are off to the configuration where all bulbs are on in a finite number of steps?
