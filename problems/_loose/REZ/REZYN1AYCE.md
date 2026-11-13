---
tag: REZYN1AYCE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $T_{n}$ be the subtree of tree $T$ consisting of the first $n$ levels. It is easy to define a mapping $\sigma_{n}$: embed $T_{n}$ in the plane, and then "walk along" it, keeping your right hand on $T_{n}$ and your feet close to $T_{n}$. To ensure the compatibility of $\sigma_{n}$, it is necessary to require that $\sigma_{n}$ "pauses" for a moment at each leaf of $T_{n}$, i.e., maps a non-trivial subinterval of $[0,1]$ to each leaf: on these intervals, we can extend $\sigma_{n}$ to obtain $\sigma_{n+1}$. The remaining task is, as $n \rightarrow \infty$, to correctly define the limit $\sigma$ for points $x \in [0,1]$ where the values of $\sigma_{n}$ keep changing, and to prove continuity at these points.
