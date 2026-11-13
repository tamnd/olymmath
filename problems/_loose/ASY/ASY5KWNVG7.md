---
tag: ASY5KWNVG7
kind: problem
type: answer
answer: C_{n-k+1}^{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111572
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Arrange $n$ people in a row, and call two adjacent people "friends". If a subset $A$ of the set of these $n$ people satisfies: no two people in $A$ are "friends", then the subset $A$ is called a "bad subset". Try to find the number of "bad subsets" of the set of $n$ people that contain $k$ people.
