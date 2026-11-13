---
tag: T2G0DBYNTW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248462
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n^2$ numbers $x_{i,j}$ ($i,j=1,2,...,n$) satisfying the system of $n^3$ equations $x_{i,j}+x_{j,k}+x_{k,i}=0$ ($i,j,k = 1,...,n$). Prove that there exist such numbers $a_1,a_2,...,a_n$, that $x_{i,j}=a_i-a_j$ for all $i,j=1,...n$.
