---
tag: 4T6AQTARCV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268370
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Assume the $m$ is a given integer greater than $ 1$. Find the largest number $C$ such that for all $n \in N$ we have

$$\sum_{1\le k \le m ,\, (k,m)=1}\frac{1}{k}\ge C \sum_{k=1}^{m}\frac{1}{k}$$
