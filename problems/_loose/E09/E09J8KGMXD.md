---
tag: E09J8KGMXD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In quadrilateral $A B C D$, $A B=B C=C D=1$, $A D$ is not equal to 1. The positions of points $B$ and $C$ are fixed, while points $A$ and $D$ undergo transformations that preserve the lengths of segments $A B, C D$, and $A D$. The new position of point $A$ is obtained from the old one by reflection in segment $B D$, the new position of point $D$ is obtained from the old one by reflection in segment $A C$ (where $A$ is already new), then on the second step, $A$ is reflected again relative to $B D$ (where $D$ is already new), then $D$ is transformed again, and so on. Prove that at some step, the positions of the points coincide with the original.
