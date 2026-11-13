---
tag: ANJY1ACB21
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260488
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two concentric circles are divided by $n$ radii into $2n$ parts. Two parts are called neighbors (of each other) if they share either a
common side or a common arc. Initially, there are $4n + 1$ frogs inside the parts. At each second, if there are three or more frogs
inside one part, then three of the frogs in the part will jump to its neighbors, with one to each neighbor. Prove that in a finite
amount of time, for any part either there are frogs in the part or
there are frogs in each of its neighbors
