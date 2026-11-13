---
tag: ZW60DF68MK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169971
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We placed some blue and red points along a circle. With these, we can perform the following operations:

(a) insert a new red point somewhere, and change the color of its two neighbors to the opposite color.

(b) if there are at least three points, and at least one of them is red, then we delete a red point, and change the color of its two neighbors to the opposite color.

Initially, there are two points on the circumference of the circle, both blue. Can we achieve, by repeatedly applying these steps, that we again have two points, but they are red?
