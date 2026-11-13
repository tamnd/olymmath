---
tag: A96MGWYG6D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203994
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of integer pairs $(m,n)$ ($1\leq m,n\leq 2022$) that satisfy the following condition: For any positive integer $N$, there exists a non-negative integer $k$ and an integer $d$ greater than $N$, such that both $\frac{m-k^2}{d}$ and $\frac{n+2k}{d}$ are integers.
