---
tag: XNTXXYRA18
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=71654
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a set of several weights, each has a mass written on it. It is known that the set of masses and the set of inscriptions are the same, but some inscriptions may be mixed up. The scales are represented by a horizontal segment fixed at its midpoint. When weighing the weights, they are attached to arbitrary points on the segment, after which the scales either remain in balance or tilt to one side. Can it always be determined in one weighing whether all inscriptions are correct or not? (The scales will be in balance if the sum of the moments of the weights to the right of the midpoint is equal to the sum of the moments of the weights to the left; otherwise, they will tilt to the side where the sum is greater. The moment of a weight is the product $m s$ of the mass $m$ of the weight and the distance $s$ from it to the midpoint of the segment.)
