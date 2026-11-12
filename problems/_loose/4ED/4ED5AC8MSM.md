---
tag: 4ED5AC8MSM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Inside a circle, points $A_{1}, A_{2}, \ldots, A_{n}$ are located, and on its boundary - points $B_{1}, B_{2}, \ldots, B_{n}$, such that the segments $A_{1} B_{1}$, $A_{2} B_{2}, \ldots, A_{n} B_{n}$ do not intersect. A grasshopper can jump from point $A_{i}$ to point $A_{j}$ if the segment $A_{i} A_{j}$ does not intersect any of the segments $A_{k} B_{k}, k \neq i, j$.

Prove that in several jumps, the grasshopper can get from any point $A_{p}$ to any point $A_{q}$.
