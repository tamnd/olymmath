---
tag: H5VQMWVCZ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206554
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the beginnig, each square of a strip formed by $n$ adjacent squares contains $0$ or $1$. At each step, we are writing $1$ to the squares containing $0$ and to the squares having exactly one neighbour containing $1$, and we are writing $0$s into the other squares.

Determine all possible values of $n$ such that whatever the initial arrangement of $0$ and $1$ is, after finite number of steps, all squares can turn into $0$.
