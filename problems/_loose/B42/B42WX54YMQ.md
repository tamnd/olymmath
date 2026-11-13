---
tag: B42WX54YMQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138682
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A=\left(a_{i j}\right)_{n \times n}$ be the adjacency matrix of graph $G$. Prove: For all $i, j \leqslant n$, the element $a_{i j}^{\prime}$ of the matrix $A^{k}=\left(a_{i j}^{\prime}\right)_{n \times n}$ is the number of paths of length $k$ from $v_{i}$ to $v_{j}$ in $G$.
