---
tag: KZWM6ZHNFC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100056
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an $n$-point set $M$ in the plane, where no three points are collinear. Each line segment with endpoints in $M$ is labeled with either +1 or -1, and the number of line segments labeled -1 is $m$. If the product of the numbers on the three sides of a triangle with vertices in $M$ is -1, then the triangle is called negative. Prove that the number of negative triangles has the same parity as the product $m n$.
