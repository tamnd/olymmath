---
tag: Y7G7NH1X6D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182207
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In space, $2 n$ points are given ($n \leq 1$, integer). We connect these points in pairs through $2^{n-1}$ segments such that each point is the endpoint of exactly one segment.

With the $2^{n-1}$ midpoints of these segments, we proceed analogously, etc. After the $n$-th step, we obtain exactly one midpoint, which we call $A$. It is to be proven that the length of $A$ is independent of the formation of the point pairs.
