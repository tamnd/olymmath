---
tag: TRCNXK6NHM
kind: problem
type: answer
answer: F_{n}=\sum_{k=0}^{n-1}F_{k}F_{n-k-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbb{N}^{*}$. We are given $2 n$ points on the boundary of a circle. We denote $F_{n}$ as the number of ways to connect these points, two by two, using $n$ chords that do not intersect inside the circle. Find a recurrence relation between the $F_{n}$.
