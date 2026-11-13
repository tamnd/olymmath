---
tag: PHWQHGSEC6
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90064
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a natural number $n$, we consider a $2020 \times n$ table where each cell contains either 1 or -1. Let $a_{j}$ be the product of all numbers in the $j$-th row, and $b_{i}$ be the product of all numbers in the $i$-th column. Determine all natural numbers $n$ for which it can hold that

$$
a_{1}+a_{2}+\cdots+a_{2020}+b_{1}+\cdots+b_{n}=0
$$
