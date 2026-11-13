---
tag: 3Y3E1MP0VE
kind: problem
type: answer
answer: n+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number. In the plane, there are $2n+2$ points, no three of which lie on the same line. A line in the plane is a separator if it passes through two of the given points and on each side of this line there are exactly $n$ points. Determine the largest number $m$ such that there are always at least $m$ separators in the plane.
