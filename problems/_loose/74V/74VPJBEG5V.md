---
tag: 74VPJBEG5V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many $n\times n$ matrices $A$, with all entries from the set $\{0, 1, 2\}$, are there, such that for all $i=1,2,\cdots,n$ $A_{ii} > {\sum \limits_{j=1 j\neq i}^n} A_{ij}$ [Where $A_{ij}$ is the $(i,j)$th element of the matrix $A$]
