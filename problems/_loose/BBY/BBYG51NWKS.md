---
tag: BBYG51NWKS
kind: problem
type: answer
answer: e
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119627
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a connected simple graph $G$, it is known that the number of its edges is $e$. Some chess pieces are placed on each vertex of $G$, and a chess piece can only be placed on one of the vertices of $G$. The only operation you can perform is that if the number of chess pieces on a vertex $v$ of $G$ is not less than the number of its adjacent vertices $d$, then you can choose $d$ chess pieces from $v$ and distribute them to the adjacent vertices, with each vertex receiving one piece. If the number of chess pieces on each vertex of $G$ is less than the number of its adjacent vertices, then you cannot perform any operation.

Find the minimum value of $m$ such that there exists an initial way to place the chess pieces, with a total of $m$ pieces, and you can start from this placement and perform the operation infinitely many times.
