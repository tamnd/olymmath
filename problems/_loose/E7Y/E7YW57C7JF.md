---
tag: E7YW57C7JF
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given 100 different points on a circle, determine the largest positive integer $k$: such that any $k$ of these 100 points can be arbitrarily colored red or blue, and the remaining points can be appropriately colored red or blue, so that 50 segments can be drawn using these 100 points as endpoints, with no two segments sharing a common point, and the endpoints of each segment being the same color.
