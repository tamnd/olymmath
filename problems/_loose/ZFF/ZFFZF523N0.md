---
tag: ZFFZF523N0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89699
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At each vertex of a regular $n$-gon $A_{1} A_{2} \ldots A_{n}$, there is a certain number of coins: at vertex $A_{k}$, there are exactly $k$ coins, for each $k=1,2, \ldots, n$. In each step, we perform the following transformation: we select two coins (not necessarily from the same vertex) and move each of them to an adjacent vertex, such that one is moved in the clockwise direction and the other in the counterclockwise direction.

Determine for which numbers $n$ it is possible to achieve that after a finite number of steps, for each $k=1,2, \ldots, n$, there are exactly $n+1-k$ coins at vertex $A_{k}$.
