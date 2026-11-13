---
tag: YRHB08A85F
kind: problem
type: answer
answer: \binom{n-k-1}{k-1} + \binom{n-k}{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214760
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In how many ways can we color exactly $k$ vertices of an $n$-gon in red such that any $2$ consecutive vertices are not both red. (Vertices are considered to be labeled)
