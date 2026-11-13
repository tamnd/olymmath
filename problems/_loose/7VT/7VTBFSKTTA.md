---
tag: 7VTBFSKTTA
kind: problem
type: answer
answer: (k-1)^{2}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77610
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k \geqslant 1$ be an integer. What is the smallest integer $n$ such that, no matter how $n$ points are placed in the plane, it is possible to choose a subset $S$ consisting of $k$ of these points that satisfies "for every pair $P, Q$ of points in $S$, the distance between $P$ and $Q$ is less than or equal to 2" or "for every pair $\mathrm{P}, \mathrm{Q}$ of points in $\mathrm{S}$, the distance between $\mathrm{P}$ and $\mathrm{Q}$ is strictly greater than 1."
