---
tag: 21HE8C7TDC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An equilateral triangle with side $n$ is built with $n^{2}$ *plates* - equilateral triangles with side $1$. Each plate has one side black, and the other side white. We name *the move* the following operation: we choose a plate $P$, which has common sides with at least two plates, whose visible side is the same color as the visible side of $P$. Then, we turn over plate $P$.

For any $n\geq 2$ decide whether there exists an innitial configuration of plates permitting for an infinite sequence of moves.
