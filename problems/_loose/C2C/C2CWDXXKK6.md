---
tag: C2CWDXXKK6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129921
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given scalene triangle on a plane, Peter and Basil take turns to perform the following operation: in each round, Peter chooses a point on the plane, and Basil decides to color the point red or blue. When there exists a triangle similar to the original triangle with all vertices of the same color, Peter wins. Find the minimum number of rounds such that, regardless of how Basil operates, Peter can always win after a certain number of operations (this value should be independent of the shape of the original triangle)?
