---
tag: NX0CZKGGQT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89678
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For natural numbers $n$ and $k$, we consider tiling a $2 n \times k$ board with dominoes of size $2 \times 1$. In one move, it is allowed to select a $2 \times 2$ square on the board that is completely covered by two dominoes, and rotate it by $90^{\circ}$ around its center. We say that two tilings are equivalent if one can be obtained from the other by applying a finite number of allowed moves. For which pairs $(n, k)$ are all tilings equivalent?
