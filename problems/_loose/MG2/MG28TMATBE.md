---
tag: MG28TMATBE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245078
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a sequence of positive integers an inversion is a pair of positions such that the element in the position to the left is greater than the element in the position to the right. For instance the sequence $2,5,3,1,3$ has five inversions - between the first and fourth positions, the second and all later positions, and between the third and fourth positions. What is the largest possible number of inversions in a sequence of positive integers whose sum is $2014$?
