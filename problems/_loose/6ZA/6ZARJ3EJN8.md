---
tag: 6ZARJ3EJN8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=58074
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a sequence of squares on a plane. The first two squares with side length 1 are placed side by side (the second one to the right) and share a common vertical side. The bottom side of the third square with side length 2 contains the top sides of the first two squares. The right side of the fourth square with side length 3 contains the left sides of the first and third squares. The top side of the fifth square with side length 5 contains the bottom sides of the first, second, and fourth squares. We continue moving in a spiral infinitely, circling the considered squares counterclockwise such that the side of the new square is composed of the sides of three previously considered squares. Prove that the centers of all these squares lie on two lines.
