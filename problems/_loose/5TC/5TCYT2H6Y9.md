---
tag: 5TCYT2H6Y9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269260
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A=(a_{ij})$ be an $m\times n$ real matrix with at least one non-zero element. For each $i\in\{1,\ldots,m\}$, let $R_i=\sum_{j=1}^na_{ij}$ be the sum of the $i$-th row of the matrix $A$, and for each $j\in\{1,\ldots,n\}$, let $C_j =\sum_{i=1}^ma_{ij}$ be the sum of the $j$-th column of the matrix $A$. Prove that there exist indices $k\in\{1,\ldots,m\}$ and $l\in\{1,\ldots,n\}$ such that
$$a_{kl}>0, R_k\ge0, C_l\ge0,$$or
$$a_{kl}<0, R_k\le0, C_l\le0.$$
