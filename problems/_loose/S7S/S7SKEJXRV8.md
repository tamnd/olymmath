---
tag: S7SKEJXRV8
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246042
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
All the squares of a board of $(n+1)\times(n-1)$ squares
are painted with **three colors** such that, for any two different
columns and any two different rows, the 4 squares in their
intersections they don't have all the same color. Find the
greatest possible value of $n$.
