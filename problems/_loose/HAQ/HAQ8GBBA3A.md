---
tag: HAQ8GBBA3A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a Cartesian coordinate system, points with both coordinates as integers are called integer points. Please design a method to color all integer points, with each point being colored white, red, or black, such that:
(1) Points of each color appear on infinitely many lines parallel to the x-axis;
(2) For any white point $A$, red point $B$, and black point $C$, there always exists a red point $D$ such that quadrilateral $A B C D$ is a parallelogram.
Prove that your designed method meets the above requirements.
