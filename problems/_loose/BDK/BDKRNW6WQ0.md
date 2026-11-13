---
tag: BDKRNW6WQ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241420
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given real numbers $x_i,y_i (i=1,2,\ldots ,n)$, let $A$ be the $n\times n$ matrix given by $a_{ij}=1$ if $x_i\ge y_j$ and $a_{ij}=0$ otherwise. Suppose $B$ is a $n\times n$ matrix whose entries are $0$ and $1$ such that the sum of entries in any row or column of $B$ equals the sum of entries in the corresponding row or column of $A$. Prove that $B=A$.
