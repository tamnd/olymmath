---
tag: 2YMA03SYB1
kind: problem
type: answer
answer: 2^{n+2}-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77417
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A large square with side $n$ is cut into $n^{2}$ small squares with side 1. We want to color each of the $(n+1)^{2}$ vertices of the small squares in red or blue such that each of the small squares has exactly 2 red vertices. How many possible colorings are there?
