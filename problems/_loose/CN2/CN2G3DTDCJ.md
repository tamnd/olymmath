---
tag: CN2G3DTDCJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205855
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ n>1$ be an odd integer and define:
$$ N=\{-n,-(n-1),\dots,-1,0,1,\dots,(n-1),n\}.$$
A subset $ P$ of $ N$ is called *basis* if we can express every element of $ N$ as the sum of $ n$ different elements of $ P$. Find the smallest positive integer $ k$ such that every $ k-$elements subset of $ N$ is basis.
